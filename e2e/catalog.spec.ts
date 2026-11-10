import { test, expect } from "./fixtures";

const cards = "main ul.grid > li";

test("Spanish search and filters update the list and the URL", async ({ page, consoleErrors }) => {
  await page.goto("/es/microapps/");
  await expect(page.locator(cards)).toHaveCount(5);

  await page.getByLabel("Buscar herramientas").fill("calculadora");
  await expect(page).toHaveURL(/\?q=calculadora$/);
  await expect(page.locator(cards)).toHaveCount(2);

  await page.getByLabel("Buscar herramientas").fill("");
  await page.getByRole("radio", { name: /^Suscripción/ }).check({ force: true });
  await expect(page).toHaveURL(/\?modelo=suscripcion$/);
  await expect(page.locator(cards)).toHaveCount(1);
  expect(consoleErrors).toEqual([]);
});

test("English search and filters use English parameters", async ({ page }) => {
  await page.goto("/en/microapps/");
  await page.getByLabel("Search tools").fill("calculator");
  await expect(page.locator(cards)).toHaveCount(2);
  await page.getByLabel("Search tools").fill("");
  await page.getByRole("radio", { name: /^Costs & pricing/ }).check({ force: true });
  await expect(page).toHaveURL(/\?category=finance$/);
  await expect(page.locator(cards)).toHaveCount(2);
  await page.getByRole("radio", { name: /^Available/ }).check({ force: true });
  await expect(page.getByText("No tools match these filters")).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).last().click();
  await expect(page).toHaveURL(/\/en\/microapps\/$/);
  await expect(page.locator(cards)).toHaveCount(5);
});

test("filters in the URL are applied on load", async ({ page }) => {
  await page.goto("/en/microapps/?q=quote&pricing=one-time");
  await expect(page.getByLabel("Search tools")).toHaveValue("quote");
  await expect(page.locator(cards)).toHaveCount(1);
  await expect(page.locator(cards).first()).toContainText("Quote Generator");
});

test("no prices or buy buttons are shown in either language", async ({ page }) => {
  for (const path of ["/es/microapps/", "/en/microapps/", "/es/microapps/atajolab-qr/", "/en/microapps/atajolab-qr/"]) {
    await page.goto(path);
    const text = await page.locator("main").innerText();
    expect(text, path).not.toMatch(/\$\s?\d|4\.900|Comprar|\bBuy\b/);
  }
});
