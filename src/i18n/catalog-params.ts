import type { Localized } from "./config";
import type { CatalogParamConfig } from "../lib/catalog";
import { getCategories } from "../data/categories";

/** Catalog query parameters, readable in each language. */
export const catalogParams: Localized<CatalogParamConfig> = {
  es: {
    keys: { query: "q", category: "categoria", pricing: "modelo", status: "estado" },
    categories: getCategories("es"),
    pricing: { FREE: "gratis", ONE_TIME: "pago-unico", SUBSCRIPTION: "suscripcion" },
    status: { AVAILABLE: "disponible", COMING_SOON: "proximamente", UNAVAILABLE: "no-disponible" },
  },
  en: {
    keys: { query: "q", category: "category", pricing: "pricing", status: "status" },
    categories: getCategories("en"),
    pricing: { FREE: "free", ONE_TIME: "one-time", SUBSCRIPTION: "subscription" },
    status: { AVAILABLE: "available", COMING_SOON: "coming-soon", UNAVAILABLE: "unavailable" },
  },
};
