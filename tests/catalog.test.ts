import { test } from "node:test";
import assert from "node:assert/strict";
import {
  EMPTY_FILTERS,
  filterMicroapps,
  filtersToSearch,
  hasActiveFilters,
  normalizeText,
  parseFilters,
  sortMicroapps,
  translateSearch,
} from "@/lib/catalog";
import { getMicroapps } from "@/data/microapps";
import { catalogParams } from "@/i18n/catalog-params";

const es = getMicroapps("es");
const en = getMicroapps("en");
const names = (list: { name: string }[]) => list.map((a) => a.name);

test("normalizeText removes accents, case and extra spaces", () => {
  assert.equal(normalizeText("  Gestión   DE Turnos "), "gestion de turnos");
});

test("no filters returns the whole catalog in both languages", () => {
  assert.equal(filterMicroapps(es, EMPTY_FILTERS).length, es.length);
  assert.equal(filterMicroapps(en, EMPTY_FILTERS).length, en.length);
  assert.equal(hasActiveFilters(EMPTY_FILTERS), false);
});

test("Spanish search matches names without accents or case", () => {
  const result = filterMicroapps(es, { ...EMPTY_FILTERS, query: "CALCULADORA" });
  assert.deepEqual(names(result), ["Calculadora de costos y precios", "Calculadora de tarifa por hora"]);
});

test("English search matches English names", () => {
  const result = filterMicroapps(en, { ...EMPTY_FILTERS, query: "calculator" });
  assert.deepEqual(names(result), ["Cost and Pricing Calculator", "Hourly Rate Calculator"]);
  assert.equal(filterMicroapps(en, { ...EMPTY_FILTERS, query: "calculadora" }).length, 0);
});

test("search with several words requires all of them", () => {
  assert.deepEqual(names(filterMicroapps(es, { ...EMPTY_FILTERS, query: "calculadora hora" })), [
    "Calculadora de tarifa por hora",
  ]);
  assert.deepEqual(names(filterMicroapps(en, { ...EMPTY_FILTERS, query: "hourly calculator" })), [
    "Hourly Rate Calculator",
  ]);
});

test("filters combine: category + pricing + status", () => {
  const filters = { ...EMPTY_FILTERS, category: "finanzas" as const, pricing: "FREE" as const, status: "COMING_SOON" as const };
  assert.equal(filterMicroapps(es, filters).length, 2);
  assert.equal(filterMicroapps(en, filters).length, 2);
  assert.equal(filterMicroapps(es, { ...EMPTY_FILTERS, category: "marketing", pricing: "FREE" }).length, 0);
});

test("available tools come first", () => {
  const sorted = sortMicroapps(es);
  assert.equal(sorted[0].status, "AVAILABLE");
  const firstSoon = sorted.findIndex((a) => a.status !== "AVAILABLE");
  assert.ok(sorted.slice(firstSoon).every((a) => a.status !== "AVAILABLE"));
});

test("Spanish filters round-trip through localized URL params", () => {
  const filters = { query: "presupuestos", category: "ventas" as const, pricing: "ONE_TIME" as const, status: "COMING_SOON" as const };
  const search = filtersToSearch(filters, catalogParams.es);
  assert.equal(search, "?q=presupuestos&categoria=ventas&modelo=pago-unico&estado=proximamente");
  assert.deepEqual(parseFilters(new URLSearchParams(search), catalogParams.es), filters);
});

test("English filters round-trip through localized URL params", () => {
  const filters = { query: "quote", category: "ventas" as const, pricing: "ONE_TIME" as const, status: "COMING_SOON" as const };
  const search = filtersToSearch(filters, catalogParams.en);
  assert.equal(search, "?q=quote&category=sales&pricing=one-time&status=coming-soon");
  assert.deepEqual(parseFilters(new URLSearchParams(search), catalogParams.en), filters);
});

test("switching language keeps the filters", () => {
  assert.equal(
    translateSearch("?categoria=finanzas&modelo=gratis&estado=proximamente", catalogParams.es, catalogParams.en),
    "?category=finance&pricing=free&status=coming-soon",
  );
  assert.equal(
    translateSearch("?q=qr&category=marketing&status=available", catalogParams.en, catalogParams.es),
    "?q=qr&categoria=marketing&estado=disponible",
  );
  assert.equal(translateSearch("", catalogParams.es, catalogParams.en), "");
});

test("empty filters produce an empty query string", () => {
  assert.equal(filtersToSearch(EMPTY_FILTERS, catalogParams.es), "");
  assert.equal(filtersToSearch({ ...EMPTY_FILTERS, query: "   " }, catalogParams.en), "");
});

test("unknown or other-language URL values are ignored and long queries are cut", () => {
  const parsed = parseFilters(
    new URLSearchParams(`?categoria=nope&modelo=free&estado=x&q=${"a".repeat(200)}`),
    catalogParams.es,
  );
  assert.equal(parsed.category, null);
  assert.equal(parsed.pricing, null, "English value in a Spanish URL is ignored");
  assert.equal(parsed.status, null);
  assert.equal(parsed.query.length, 80);
});
