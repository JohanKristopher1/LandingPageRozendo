const PLACES_FIND_URL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";
const PLACES_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";

const DEFAULT_FIND_INPUT =
  "Rozendo Advogados & Associados, Av. André Araújo, 97, Adrianópolis, Manaus AM";
const DEFAULT_LAT = "-3.1072668";
const DEFAULT_LNG = "-60.009624";

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

type FindPlaceResponse = {
  status: string;
  candidates?: { place_id?: string }[];
  error_message?: string;
};

type PlaceDetailsResponse = {
  status: string;
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    reviews?: {
      author_name?: string;
      rating?: number;
      relative_time_description?: string;
      text?: string;
      profile_photo_url?: string;
    }[];
  };
  error_message?: string;
};

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Google Places HTTP ${res.status}`);
  }
  return (await res.json()) as T;
}

export async function resolvePlaceId(apiKey: string): Promise<string> {
  const fromEnv = process.env.GOOGLE_PLACE_ID?.trim();
  if (fromEnv) return fromEnv;

  const input = (process.env.GOOGLE_PLACE_FIND_INPUT || DEFAULT_FIND_INPUT).trim();
  const lat = process.env.GOOGLE_PLACE_BIAS_LAT || DEFAULT_LAT;
  const lng = process.env.GOOGLE_PLACE_BIAS_LNG || DEFAULT_LNG;
  const radius = process.env.GOOGLE_PLACE_BIAS_RADIUS_M || "8000";

  const params = new URLSearchParams({
    input,
    inputtype: "textquery",
    fields: "place_id",
    locationbias: `circle:${radius}@${lat},${lng}`,
    key: apiKey,
  });

  const data = await fetchJson<FindPlaceResponse>(`${PLACES_FIND_URL}?${params.toString()}`);

  if (data.status !== "OK" || !data.candidates?.[0]?.place_id) {
    const msg = data.error_message || data.status || "FIND_FAILED";
    throw new Error(`Find Place: ${msg}`);
  }

  return data.candidates[0].place_id;
}

export async function fetchPlaceReviews(apiKey: string): Promise<GoogleReviewsPayload> {
  const placeId = await resolvePlaceId(apiKey);

  const fields = ["name", "rating", "user_ratings_total", "reviews"].join(",");
  const params = new URLSearchParams({
    place_id: placeId,
    fields,
    reviews_sort: "newest",
    language: "pt-BR",
    key: apiKey,
  });

  const data = await fetchJson<PlaceDetailsResponse>(`${PLACES_DETAILS_URL}?${params.toString()}`);

  if (data.status !== "OK" || !data.result) {
    const msg = data.error_message || data.status || "DETAILS_FAILED";
    throw new Error(`Place Details: ${msg}`);
  }

  const r = data.result;
  const reviews: PublicGoogleReview[] = (r.reviews ?? []).map((rev) => ({
    authorName: rev.author_name ?? "Usuário Google",
    rating: typeof rev.rating === "number" ? rev.rating : 0,
    relativeTime: rev.relative_time_description ?? "",
    text: rev.text?.trim() ?? "",
    profilePhotoUrl: rev.profile_photo_url ?? null,
  }));

  return {
    placeName: r.name ?? null,
    rating: typeof r.rating === "number" ? r.rating : null,
    userRatingsTotal: typeof r.user_ratings_total === "number" ? r.user_ratings_total : null,
    reviews,
  };
}
