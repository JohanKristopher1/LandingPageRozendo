import type { Express } from "express";
import { createServer, type Server } from "http";
import { fetchPlaceReviews } from "./googlePlacesReviews";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Sitemap — served before the SPA catch-all
  app.get("/sitemap.xml", (_req, res) => {
    const today = new Date().toISOString().split("T")[0];
    const baseUrl = process.env.SITE_URL || "https://rozendoadvocacia.com.br";
    res.header("Content-Type", "application/xml; charset=utf-8");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/" />
  </url>
</urlset>`);
  });

  // Robots.txt — served before the SPA catch-all
  app.get("/robots.txt", (_req, res) => {
    const baseUrl = process.env.SITE_URL || "https://rozendoadvocacia.com.br";
    res.header("Content-Type", "text/plain; charset=utf-8");
    res.send(`User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`);
  });

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
