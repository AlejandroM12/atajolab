import { test, expect } from "./fixtures";

const languageNav = (lang: "Idioma" | "Language") => `nav[aria-label="${lang}"]`;

test("the root forwards to the Spanish home", async ({ page, consoleErrors }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/es\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "es-AR");
  expect(consoleErrors).toEqual([]);
});

test("switching language keeps the section", async ({ page, consoleErrors }) => {
  await page.goto("/es/soluciones/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Creamos la solución que necesitás");

  await page.locator(languageNav("Idioma")).getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/solutions\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("We build the solution you need");

  await page.locator(languageNav("Language")).getByRole("link", { name: "Español" }).click();
  await expect(page).toHaveURL(/\/es\/soluciones\/$/);
  expect(consoleErrors).toEqual([]);
});

test("localized microapp slugs map to each other", async ({ page }) => {
  await page.goto("/es/microapps/agendia/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Que tus clientes reserven turno online");
  await page.locator(languageNav("Idioma")).getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/microapps\/agendia\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Let your clients book appointments online");
  await expect(page.getByText("Available").first()).toBeVisible();
});

test("catalog filters survive the language switch", async ({ page }) => {
  await page.goto("/es/microapps/?categoria=finanzas");
  await expect(page.locator("main ul.grid > li")).toHaveCount(2);
  await page.locator(languageNav("Idioma")).getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/microapps\/\?category=finance$/);
  await expect(page.locator("main ul.grid > li")).toHaveCount(2);
  await expect(page.getByRole("radio", { name: /Costs & pricing/ })).toBeChecked();
});

test("the current language is marked in the switcher", async ({ page }) => {
  await page.goto("/en/");
  const nav = page.locator(languageNav("Language"));
  await expect(nav.getByRole("link", { name: "English" })).toHaveAttribute("aria-current", "true");
  await expect(nav.getByRole("link", { name: "Español" })).toHaveAttribute("href", "/es/");
});

test("unknown URLs get the bilingual 404 page", async ({ page }) => {
  const response = await page.goto("/es/no-existe/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "No encontramos esta página" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "We couldn't find this page" })).toBeVisible();
  await page.getByRole("link", { name: "Back to home" }).click();
  await expect(page).toHaveURL(/\/en\/$/);
});
