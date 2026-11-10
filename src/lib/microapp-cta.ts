import type { Microapp } from "../types/microapp";

/**
 * Primary call to action of a microapp, derived only from its data.
 * Labels come from the dictionary (`labels.cta[kind]`).
 *
 * - FREE + AVAILABLE with an app → "use-free".
 * - Paid + AVAILABLE with its own app (which handles its own sale) → "open-app".
 * - Paid + AVAILABLE with a real checkout and a confirmed price → "checkout".
 * - AVAILABLE without app or checkout → "contact".
 * - COMING_SOON → "coming-soon" (not a link).
 * - UNAVAILABLE → "unavailable" (not a link).
 */
export type MicroappCta =
  | { kind: "use-free"; href: string }
  | { kind: "open-app"; href: string }
  | { kind: "checkout"; href: string }
  | { kind: "contact" }
  | { kind: "coming-soon" }
  | { kind: "unavailable" };

export type MicroappCtaKind = MicroappCta["kind"];

export function getMicroappCta(app: Microapp): MicroappCta {
  if (app.status === "COMING_SOON") return { kind: "coming-soon" };
  if (app.status === "UNAVAILABLE") return { kind: "unavailable" };

  if (app.pricingModel === "FREE") {
    return app.appUrl ? { kind: "use-free", href: app.appUrl } : { kind: "contact" };
  }

  const checkout = app.checkout;
  if (checkout?.enabled && checkout.url && typeof app.price === "number" && app.currency) {
    return { kind: "checkout", href: checkout.url };
  }

  if (app.appUrl) return { kind: "open-app", href: app.appUrl };

  return { kind: "contact" };
}

/** True when the CTA leads somewhere (a link), false for status-only labels. */
export function isActionableCta(
  cta: MicroappCta,
): cta is Extract<MicroappCta, { href: string }> {
  return "href" in cta;
}
