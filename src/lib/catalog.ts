import type { Microapp, MicroappCategory, MicroappStatus } from "../types/microapp";

/**
 * Pure catalog logic: search, topic filter, sorting and the mapping between filters and
 * URL query parameters. Parameter names and values are localized
 * (`?categoria=finanzas` in Spanish, `?category=finance` in English) through
 * a `CatalogParamConfig`, defined per language in `src/i18n/catalog-params.ts`.
 */

export interface CatalogFilters {
  query: string;
  category: MicroappCategory | null;
}

export interface CategoryParam {
  id: MicroappCategory;
  param: string;
}

export interface CatalogParamConfig {
  keys: { query: string; category: string };
  categories: readonly CategoryParam[];
}

export const EMPTY_FILTERS: CatalogFilters = {
  query: "",
  category: null,
};

export const MAX_QUERY_LENGTH = 80;

const STATUS_ORDER: Record<MicroappStatus, number> = {
  AVAILABLE: 0,
  COMING_SOON: 1,
  UNAVAILABLE: 2,
};

/** Lowercase and without accents, so "calculadora" matches "Calculadora" and "gestion" matches "gestión". */
export function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

/** Every word of the query must appear in the name, the headline or the short description. */
export function matchesQuery(app: Microapp, query: string): boolean {
  const terms = normalizeText(query).split(" ").filter(Boolean);
  if (terms.length === 0) return true;
  const haystack = normalizeText(`${app.name} ${app.headline} ${app.shortDescription}`);
  return terms.every((term) => haystack.includes(term));
}

export function filterMicroapps(apps: readonly Microapp[], filters: CatalogFilters): Microapp[] {
  return apps.filter(
    (app) =>
      (filters.category === null || app.category === filters.category) &&
      matchesQuery(app, filters.query),
  );
}

/** Available first, then featured. Keeps the data order otherwise. */
export function sortMicroapps(apps: readonly Microapp[]): Microapp[] {
  return [...apps].sort(
    (a, b) =>
      STATUS_ORDER[a.status] - STATUS_ORDER[b.status] ||
      Number(b.featured) - Number(a.featured),
  );
}

export function hasActiveFilters(filters: CatalogFilters): boolean {
  return filters.query.trim() !== "" || filters.category !== null;
}

/** Reads filters from URL params. Unknown values are ignored instead of breaking the page. */
export function parseFilters(
  params: { get(name: string): string | null },
  config: CatalogParamConfig,
): CatalogFilters {
  const categoryParam = params.get(config.keys.category);
  return {
    query: (params.get(config.keys.query) ?? "").slice(0, MAX_QUERY_LENGTH),
    category: config.categories.find((c) => c.param === categoryParam)?.id ?? null,
  };
}

/** Builds the query string for the given filters: "" when no filter is active. */
export function filtersToSearch(filters: CatalogFilters, config: CatalogParamConfig): string {
  const params = new URLSearchParams();
  const query = filters.query.trim();
  if (query) params.set(config.keys.query, query.slice(0, MAX_QUERY_LENGTH));
  if (filters.category) {
    const param = config.categories.find((c) => c.id === filters.category)?.param;
    if (param) params.set(config.keys.category, param);
  }
  const search = params.toString();
  return search ? `?${search}` : "";
}

/** Re-expresses a catalog query string in another language, keeping the same filters. */
export function translateSearch(search: string, from: CatalogParamConfig, to: CatalogParamConfig): string {
  return filtersToSearch(parseFilters(new URLSearchParams(search), from), to);
}
