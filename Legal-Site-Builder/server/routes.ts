import type { Express } from "express";
import { createServer, type Server } from "http";
import { fetchPlaceReviews } from "./googlePlacesReviews";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.get("/api/google-reviews", async (_req, res) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY?.trim();
    if (!apiKey) {
      return res.json({
        placeName: null,
        rating: null,
        userRatingsTotal: null,
        reviews: [],
        error:
          "GOOGLE_MAPS_API_KEY não configurada. Defina a variável de ambiente no servidor.",
      });
    }

    try {
      const payload = await fetchPlaceReviews(apiKey);
      return res.json({ ...payload, error: null });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Erro ao buscar avaliações";
      console.error("[google-reviews]", message);
      return res.json({
        placeName: null,
        rating: null,
        userRatingsTotal: null,
        reviews: [],
        error: message,
      });
    }
  });

  return httpServer;
}
