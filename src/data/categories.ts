import type { Locale, Localized } from "../i18n/config";
import type { MicroappCategory } from "../types/microapp";

interface CategorySource {
  id: MicroappCategory;
  label: Localized<string>;
  /** Value used in the category query parameter. */
  param: Localized<string>;
}

export interface CategoryInfo {
  id: MicroappCategory;
  label: string;
  param: string;
}

export const categorySources: CategorySource[] = [
  { id: "marketing", label: { es: "Clientes y reseñas", en: "Customers & reviews" }, param: { es: "marketing", en: "marketing" } },
  { id: "finanzas", label: { es: "Costos y precios", en: "Costs & pricing" }, param: { es: "finanzas", en: "finance" } },
  { id: "ventas", label: { es: "Ventas y presupuestos", en: "Sales & quotes" }, param: { es: "ventas", en: "sales" } },
  { id: "gestion", label: { es: "Organización", en: "Organization" }, param: { es: "gestion", en: "operations" } },
];

export function getCategories(locale: Locale): CategoryInfo[] {
  return categorySources.map((c) => ({ id: c.id, label: c.label[locale], param: c.param[locale] }));
}

export function getCategory(id: MicroappCategory, locale: Locale): CategoryInfo {
  const found = getCategories(locale).find((category) => category.id === id);
  if (!found) throw new Error(`Unknown category: ${id}`);
  return found;
}
