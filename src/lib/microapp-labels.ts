import type { Microapp } from "../types/microapp";
import type { Dictionary } from "../i18n/dictionaries/es";
import { intlLocale, type Locale } from "../i18n/config";

/** Pricing label. For tools that are not available yet, it is marked as planned. */
export function pricingLabel(app: Microapp, t: Dictionary): string {
  const label = app.pricingLabel ?? t.labels.pricing[app.pricingModel];
  return app.status === "AVAILABLE" ? label : `${label} · ${t.labels.planned}`;
}

/** Formatted price, or null when no confirmed price exists. */
export function formatPrice(app: Microapp, locale: Locale, t: Dictionary): string | null {
  if (typeof app.price !== "number" || !app.currency) return null;
  const amount = new Intl.NumberFormat(intlLocale[locale], {
    style: "currency",
    currency: app.currency,
    maximumFractionDigits: 0,
  }).format(app.price);
  if (app.pricingModel !== "SUBSCRIPTION") return amount;
  return `${amount} ${app.billingPeriod === "YEARLY" ? t.labels.perYear : t.labels.perMonth}`;
}

/** Microapps that are not available should not be indexed by search engines. */
export function isIndexable(app: Pick<Microapp, "status">): boolean {
  return app.status === "AVAILABLE";
}
