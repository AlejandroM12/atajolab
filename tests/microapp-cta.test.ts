import { test } from "node:test";
import assert from "node:assert/strict";
import { getMicroappCta, isActionableCta } from "@/lib/microapp-cta";
import { getDictionary } from "@/i18n/dictionaries";
import type { Microapp } from "@/types/microapp";

function app(overrides: Partial<Microapp>): Microapp {
  return {
    id: "x",
    slug: "x",
    name: "X",
    headline: "X",
    shortDescription: "",
    fullDescription: [],
    category: "finanzas",
    pricingModel: "FREE",
    status: "AVAILABLE",
    featured: false,
    images: [],
    icon: "calculator",
    features: [],
    benefits: [],
    audience: [],
    ...overrides,
  };
}

test("free and available with app → use-free", () => {
  const cta = getMicroappCta(app({ appUrl: "https://x.atajolab.dev" }));
  assert.equal(cta.kind, "use-free");
  assert.ok(isActionableCta(cta));
});

test("coming soon never links, whatever the model or url", () => {
  for (const pricingModel of ["FREE", "ONE_TIME", "SUBSCRIPTION"] as const) {
    const cta = getMicroappCta(app({ status: "COMING_SOON", pricingModel, appUrl: "https://x" }));
    assert.equal(cta.kind, "coming-soon");
    assert.equal(isActionableCta(cta), false);
  }
});

test("unavailable never links", () => {
  const cta = getMicroappCta(app({ status: "UNAVAILABLE", appUrl: "https://x" }));
  assert.equal(cta.kind, "unavailable");
  assert.equal(isActionableCta(cta), false);
});

test("paid with its own app → open-app, not a buy button", () => {
  const cta = getMicroappCta(
    app({ pricingModel: "ONE_TIME", appUrl: "https://qr.atajolab.dev", checkout: { provider: "mercadopago", enabled: false } }),
  );
  assert.equal(cta.kind, "open-app");
});

test("paid without app or checkout → contact", () => {
  assert.equal(getMicroappCta(app({ pricingModel: "SUBSCRIPTION" })).kind, "contact");
});

test("checkout needs enabled flag, url and a confirmed price", () => {
  const base = { pricingModel: "ONE_TIME" as const, appUrl: "https://x" };
  const enabledNoPrice = getMicroappCta(
    app({ ...base, checkout: { provider: "mercadopago", enabled: true, url: "https://mp" } }),
  );
  assert.equal(enabledNoPrice.kind, "open-app");
  const full = getMicroappCta(
    app({ ...base, price: 1000, currency: "ARS", checkout: { provider: "mercadopago", enabled: true, url: "https://mp" } }),
  );
  assert.equal(full.kind, "checkout");
});

test("every CTA kind has a label in both languages", () => {
  assert.equal(getDictionary("es").labels.cta["use-free"], "Usar gratis");
  assert.equal(getDictionary("es").labels.cta["coming-soon"], "Próximamente");
  assert.equal(getDictionary("en").labels.cta["open-app"], "Get started");
  assert.equal(getDictionary("en").labels.cta["coming-soon"], "Coming soon");
});
