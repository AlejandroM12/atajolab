import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { microappSources, getMicroapps } from "@/data/microapps";
import { projectSources } from "@/data/projects";
import { categorySources } from "@/data/categories";
import { faqSources } from "@/data/faq";
import { serviceSources } from "@/data/services";
import { locales } from "@/i18n/config";

const publicDir = join(import.meta.dirname, "..", "public");
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Every string reachable in a value, for "no empty translation" checks. */
function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

test("microapp ids are unique and slugs are unique and URL-safe in each language", () => {
  assert.equal(new Set(microappSources.map((a) => a.id)).size, microappSources.length);
  for (const locale of locales) {
    const slugs = microappSources.map((a) => a.slug[locale]);
    assert.equal(new Set(slugs).size, slugs.length, locale);
    for (const slug of slugs) assert.match(slug, SLUG);
  }
});

test("project slugs are unique and URL-safe in each language", () => {
  for (const locale of locales) {
    const slugs = projectSources.map((p) => p.slug[locale]);
    assert.equal(new Set(slugs).size, slugs.length, locale);
    for (const slug of slugs) assert.match(slug, SLUG);
  }
});

test("every text exists in both languages and none is empty", () => {
  const localizedSources = [...microappSources, ...projectSources, ...categorySources, ...faqSources, ...serviceSources];
  for (const source of localizedSources) {
    for (const [key, value] of Object.entries(source)) {
      if (value && typeof value === "object" && !Array.isArray(value) && "es" in value && "en" in value) {
        const id = `${String((source as { id: string }).id)}.${key}`;
        const byLocale = value as Record<string, unknown>;
        // Lists may be empty (e.g. no disclaimers), but both languages must match.
        assert.equal(strings(byLocale.es).length, strings(byLocale.en).length, id);
        for (const locale of locales) {
          if (!Array.isArray(byLocale[locale])) assert.ok(strings(byLocale[locale]).length > 0, `${id}.${locale}`);
          for (const text of strings(byLocale[locale])) assert.ok(text.trim().length > 0, `${id}.${locale} empty`);
        }
      }
    }
  }
});

test("Spanish and English entries have the same number of items", () => {
  for (const app of microappSources) {
    for (const key of ["fullDescription", "features", "benefits", "audience"] as const) {
      assert.equal(app[key].es.length, app[key].en.length, `${app.id}.${key}`);
    }
  }
});

test("every microapp uses a known category", () => {
  const ids = new Set(categorySources.map((c) => c.id));
  for (const app of microappSources) assert.ok(ids.has(app.category), app.id);
});

test("tools that are not available have no price, no app link and no checkout", () => {
  for (const app of microappSources.filter((a) => a.status !== "AVAILABLE")) {
    assert.equal(app.price, undefined, app.id);
    assert.equal(app.appUrl, undefined, app.id);
    assert.notEqual(app.checkout?.enabled, true, app.id);
  }
});

test("no checkout is enabled and no single price is set; public plans live in `plans`", () => {
  for (const app of microappSources) {
    assert.notEqual(app.checkout?.enabled, true, app.id);
    assert.equal(app.price, undefined, app.id);
  }
});

test("every referenced image exists in /public and has alt text in both languages", () => {
  const images = [...microappSources.flatMap((a) => a.images), ...projectSources.flatMap((p) => p.images)];
  for (const image of images) {
    assert.ok(existsSync(join(publicDir, image.src)), image.src);
    for (const locale of locales) assert.ok(image.alt[locale].length > 10, `${image.src} alt ${locale}`);
  }
});

test("project ↔ microapp references point to existing entries", () => {
  const appIds = new Set(microappSources.map((a) => a.id));
  const projectIds = new Set(projectSources.map((p) => p.id));
  for (const project of projectSources) if (project.microappId) assert.ok(appIds.has(project.microappId), project.id);
  for (const app of microappSources) if (app.projectId) assert.ok(projectIds.has(app.projectId), app.id);
});

test("resolved catalogs differ by language but keep the same tools", () => {
  const es = getMicroapps("es");
  const en = getMicroapps("en");
  assert.deepEqual(es.map((a) => a.id), en.map((a) => a.id));
  assert.notEqual(es[1].name, en[1].name);
});

test("FAQ ids are unique", () => {
  assert.equal(new Set(faqSources.map((f) => f.id)).size, faqSources.length);
});

test("Agendia is available, links to its official site and only shows prices that are public there", () => {
  const agendia = microappSources.find((app) => app.id === "agendia");
  assert.ok(agendia);
  assert.equal(agendia.status, "AVAILABLE");
  assert.equal(agendia.appUrl, "https://agendia.atajolab.dev/registro");
  assert.equal(agendia.ctaLabel?.es, "Probar Agendia gratis");
  assert.equal(agendia.trial?.href, "https://agendia.atajolab.dev");
  assert.equal(agendia.trial?.label.es, "Conocer Agendia");
  assert.deepEqual(agendia.plans?.map((plan) => [plan.id, plan.price, plan.billingPeriod]), [
    ["profesional", 9900, "MONTHLY"],
    ["equipo", 19900, "MONTHLY"],
  ]);
  for (const key of ["problems", "steps", "features", "audience", "benefits"] as const) {
    assert.equal(agendia[key]?.es.length, agendia[key]?.en.length, key);
  }
  assert.equal(agendia.steps?.es.length, 3);
  assert.equal(agendia.features.es.length, 12);
});

test("Agendia never promises features that do not exist and never mentions a card", () => {
  const agendia = microappSources.find((app) => app.id === "agendia");
  assert.ok(agendia);
  const text = strings(agendia).join(" ");
  assert.doesNotMatch(text, /próximamente|coming soon|en desarrollo|in development/i);
  assert.doesNotMatch(text, /tarjeta de (crédito|débito)|credit card|sin tarjeta|no card/i);
  assert.doesNotMatch(text, /recordatorios?[^.]*whatsapp|whatsapp[^.]*reminders?|dominio propio|custom domain/i);
  // The trial lasts 14 days; earlier figures must not come back.
  assert.doesNotMatch(text, /7 días|7 days|14\.000|199\.000/);
  assert.match(text, /14 días|14 days/);
});

test("AtajoLab Presupuestos is available, free, opens the real product and sells no paid plan", () => {
  const app = microappSources.find((item) => item.id === "atajolab-presupuestos");
  assert.ok(app);
  assert.equal(app.status, "AVAILABLE");
  assert.equal(app.pricingModel, "FREE");
  assert.equal(app.appUrl, "https://presupuestos.atajolab.dev/crear");
  assert.equal(app.trial?.href, "https://presupuestos.atajolab.dev");
  assert.equal(app.ctaLabel?.es, "Crear un presupuesto gratis");
  assert.equal(app.trial?.label.es, "Conocer AtajoLab Presupuestos");
  assert.equal(app.plans, undefined);
  assert.equal(app.price, undefined);
  assert.equal(app.features.es.length, app.features.en.length);
  for (const link of app.officialLinks ?? []) assert.match(link.href, /^https:\/\/presupuestos\.atajolab\.dev(\/crear)?$/);
  const text = strings(app).join(" ");
  assert.doesNotMatch(text, /próximamente|coming soon|en desarrollo|in development/i);
  assert.doesNotMatch(text, /pack premium|\bpro\b|contratá|suscrib|subscribe|\$ ?\d/i);
});

test("the social image of every tool that sets one is a 1200 × 630 PNG in both languages", () => {
  for (const app of microappSources) {
    if (!app.social) continue;
    for (const locale of locales) {
      const file = join(publicDir, app.social.image[locale]);
      assert.ok(existsSync(file), file);
      const png = readFileSync(file);
      assert.equal(png.readUInt32BE(16), 1200, `${app.id} ${locale} width`);
      assert.equal(png.readUInt32BE(20), 630, `${app.id} ${locale} height`);
      assert.ok(app.social.alt[locale].length > 10);
    }
  }
});

test("AtajoLab QR opens the real product, lists the verified formats and does not hard-code a price", () => {
  const qr = microappSources.find((app) => app.id === "atajolab-qr");
  assert.ok(qr);
  assert.equal(qr.status, "AVAILABLE");
  assert.equal(qr.appUrl, "https://qr.atajolab.dev");
  assert.equal(qr.ctaLabel?.es, "Crear mi QR gratis");
  assert.equal(qr.trial?.href, "#como-funciona");
  assert.equal(qr.price, undefined);
  assert.equal(qr.plans, undefined);
  // Paid sales are closed: the price cell says what is true today instead of promising a price in the tool.
  assert.equal(qr.priceInfo?.es, "Primer QR sin costo");
  // The server stays awake (checked after 18 idle minutes), so the slow-start notice does not apply.
  assert.equal(qr.hosting?.coldStart, undefined);
  assert.equal(qr.steps?.es.length, 4);
  for (const link of qr.officialLinks ?? []) assert.match(link.href, /^https:\/\/qr\.atajolab\.dev(\/|$)/);
  const formats = qr.formats?.es.groups.flatMap((group) => group.items.map((item) => `${item.name} ${item.size}`));
  assert.deepEqual(formats, [
    "Cartel A6 105 × 148 mm",
    "Flyer A5 148 × 210 mm",
    "Afiche A4 210 × 297 mm",
    "Tarjeta 85 × 55 mm",
    "Etiqueta 60 × 60 mm",
    "Post cuadrado 1080 × 1080 px",
    "Historia 1080 × 1920 px",
  ]);
  assert.equal(qr.examples?.es.length, 5);
  assert.equal(qr.faq?.es.length, 10);
  const text = strings(qr).join(" ");
  assert.match(text, /primer QR es gratis|first QR is free/i);
  assert.match(text, /Google Maps/);
  assert.doesNotMatch(text, /4\.900|4,900|próximamente|coming soon/i);
  // Paid sales are closed in the tool today: the page promises only the free QR and points to the tool for the rest.
  assert.doesNotMatch(text, /pago único|one-time|sin suscripción|no subscription/i);
  assert.match(text, /Tus ideas, listas para escanear|Your ideas, ready to scan/);
  // NFC: the tool makes the QR and the design, it does not program chips.
  assert.match(strings(qr.faq).join(" "), /no programa chips NFC|doesn't program NFC chips/);
});

test("the sections of AtajoLab QR have the same structure in both languages and use existing images with alt text", () => {
  const qr = microappSources.find((app) => app.id === "atajolab-qr");
  assert.ok(qr);
  for (const key of ["capabilities", "steps", "examples", "faq"] as const) {
    assert.equal(qr[key]?.es.length, qr[key]?.en.length, key);
  }
  assert.equal(qr.spotlight?.es.points.length, qr.spotlight?.en.points.length);
  assert.equal(qr.formats?.es.groups.length, qr.formats?.en.groups.length);
  for (const locale of locales) {
    const images = [
      ...(qr.steps?.[locale] ?? []).map((step) => step.image),
      qr.spotlight?.[locale].image,
      qr.spotlight?.[locale].phone,
      qr.formats?.[locale].image,
      ...(qr.examples?.[locale] ?? []).map((example) => example.image),
    ].filter((image) => image !== undefined);
    assert.ok(images.length >= 9, locale);
    for (const image of images) {
      assert.ok(existsSync(join(publicDir, image.src)), image.src);
      assert.ok(image.alt.length > 20, `${image.src} alt ${locale}`);
    }
  }
});

