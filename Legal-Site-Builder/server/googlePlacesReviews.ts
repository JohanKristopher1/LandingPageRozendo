// Places API (New) – https://developers.google.com/maps/documentation/places/web-service
// Replaces the legacy findplacefromtext + place/details endpoints.

const PLACES_TEXT_SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";
const PLACES_DETAILS_URL_PREFIX = "https://places.googleapis.com/v1/places"; // + /{placeId}

const DEFAULT_FIND_INPUT =
  "Rozendo Advogados & Associados, Av. André Araújo, 97, Adrianópolis, Manaus AM";
const DEFAULT_LAT = -3.1072668;
const DEFAULT_LNG = -60.009624;

export type PublicGoogleReview = {
  authorName: string;
  rating: number;
  relativeTime: string;
  text: string;
  profilePhotoUrl: string | null;
};

export type GoogleReviewsPayload = {
  placeName: string | null;
  rating: number | null;
  userRatingsTotal: number | null;
  reviews: PublicGoogleReview[];
};

// ── New API response shapes ────────────────────────────────────────────────────

type TextSearchResponse = {
  places?: {
    id?: string; // place ID in the new API
    displayName?: { text?: string; languageCode?: string };
  }[];
  error?: { message?: string };
};

type AuthorAttribution = {
  displayName?: string;
  photoUri?: string;
};

type ReviewNew = {
  name?: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: { text?: string; languageCode?: string };
  authorAttribution?: AuthorAttribution;
};

type PlaceDetailsResponse = {
  id?: string;
  displayName?: { text?: string; languageCode?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: ReviewNew[];
  error?: { message?: string };
};

// ── Helpers ───────────────────────────────────────────────────────────────────

async function postJson<T>(url: string, body: object, apiKey: string, fieldMask: string): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": fieldMask,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`Google Places HTTP ${res.status}: ${await res.text()}`);
  }
  return (await res.json()) as T;
}

async function getJson<T>(url: string, apiKey: string, fieldMask: string): Promise<T> {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": fieldMask,
    },
  });
  if (!res.ok) {
    throw new Error(`Google Places HTTP ${res.status}: ${await res.text()}`);
  }
  return (await res.json()) as T;
}

// ── Core functions ────────────────────────────────────────────────────────────

/**
 * Resolves a place ID using Text Search (New).
 * Falls back to the GOOGLE_PLACE_ID env variable if set (cheapest option –
 * avoids a Text Search call on every request).
 */
export async function resolvePlaceId(apiKey: string): Promise<string> {
  const fromEnv = process.env.GOOGLE_PLACE_ID?.trim();
  if (fromEnv) return fromEnv;

  const textQuery = (process.env.GOOGLE_PLACE_FIND_INPUT || DEFAULT_FIND_INPUT).trim();
  const lat = parseFloat(process.env.GOOGLE_PLACE_BIAS_LAT || String(DEFAULT_LAT));
  const lng = parseFloat(process.env.GOOGLE_PLACE_BIAS_LNG || String(DEFAULT_LNG));
  const radius = parseInt(process.env.GOOGLE_PLACE_BIAS_RADIUS_M || "8000", 10);

  const body = {
    textQuery,
    locationBias: {
      circle: {
        center: { latitude: lat, longitude: lng },
        radius,
      },
    },
    pageSize: 1,
    languageCode: "pt-BR",
  };

  const data = await postJson<TextSearchResponse>(
    PLACES_TEXT_SEARCH_URL,
    body,
    apiKey,
    "places.id", // only need the place ID here
  );

  if (data.error) {
    throw new Error(`Text Search: ${data.error.message || "FIND_FAILED"}`);
  }

  const placeId = data.places?.[0]?.id;
  if (!placeId) {
    throw new Error("Text Search: no candidates returned (FIND_FAILED)");
  }

  return placeId;
}

/**
 * Fetches place details (name, rating, reviews) using Place Details (New).
 */
export async function fetchPlaceReviews(apiKey: string): Promise<GoogleReviewsPayload> {
  const placeId = await resolvePlaceId(apiKey);

  // Field mask for Place Details (New)
  const fieldMask = [
    "id",
    "displayName",
    "rating",
    "userRatingCount",
    "reviews",
  ].join(",");

  const url = `${PLACES_DETAILS_URL_PREFIX}/${placeId}?languageCode=pt-BR`;

  const data = await getJson<PlaceDetailsResponse>(url, apiKey, fieldMask);

  if (data.error) {
    throw new Error(`Place Details: ${data.error.message || "DETAILS_FAILED"}`);
  }

  const reviews: PublicGoogleReview[] = (data.reviews ?? []).map((rev) => ({
    authorName: rev.authorAttribution?.displayName ?? "Usuário Google",
    rating: typeof rev.rating === "number" ? rev.rating : 0,
    relativeTime: rev.relativePublishTimeDescription ?? "",
    text: rev.text?.text?.trim() ?? "",
    profilePhotoUrl: rev.authorAttribution?.photoUri ?? null,
  }));

  return {
    placeName: data.displayName?.text ?? null,
    rating: typeof data.rating === "number" ? data.rating : null,
    userRatingsTotal: typeof data.userRatingCount === "number" ? data.userRatingCount : null,
    reviews,
  };
}
