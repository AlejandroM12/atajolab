import type { Localized } from "./config";
import type { CatalogParamConfig } from "../lib/catalog";
import { getCategories } from "../data/categories";

/** Catalog query parameters, readable in each language. */
export const catalogParams: Localized<CatalogParamConfig> = {
  es: {
    keys: { query: "q", category: "categoria" },
    categories: getCategories("es"),
  },
  en: {
    keys: { query: "q", category: "category" },
    categories: getCategories("en"),
  },
};
