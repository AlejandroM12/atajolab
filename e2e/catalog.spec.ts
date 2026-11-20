import { test, expect } from "./fixtures";

const cards = "main ul.grid > li";

test("Spanish search and topics update the list and the URL", async ({ page, consoleErrors }) => {
  await page.goto("/es/microapps/");
  await expect(page.locator(cards)).toHaveCount(5);

  await page.getByLabel("Buscar herramientas").fill("calculadora");
  await expect(page).toHaveURL(/\?q=calculadora$/);
  await expect(page.locator(cards)).toHaveCount(2);

  await page.getByLabel("Buscar herramientas").fill("");
  await page.getByRole("radio", { name: "Gestión de turnos y reservas online" }).check({ force: true });
  await expect(page).toHaveURL(/\?categoria=gestion$/);
  await expect(page.locator(cards)).toHaveCount(1);
  await expect(page.locator(cards).first()).toContainText("Agendia");

  await page.getByRole("radio", { name: "Todas" }).check({ force: true });
  await expect(page).toHaveURL(/\/es\/microapps\/$/);
  await expect(page.locator(cards)).toHaveCount(5);
  expect(consoleErrors).toEqual([]);
});

test("English search and topic combine, and the empty state leads back to every tool", async ({ page }) => {
  await page.goto("/en/microapps/");
  await page.getByRole("radio", { name: "Costs & pricing" }).check({ force: true });
  await expect(page).toHaveURL(/\?category=finance$/);
  await expect(page.locator(cards)).toHaveCount(2);

  await page.getByLabel("Search tools").fill("hourly");
  await expect(page).toHaveURL(/\?q=hourly&category=finance$/);
  await expect(page.locator(cards)).toHaveCount(1);
  await expect(page.locator(cards).first()).toContainText("Hourly Rate Calculator");

  await page.getByLabel("Search tools").fill("reviews");
  await expect(page.locator(cards)).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "We couldn't find any tools" })).toBeVisible();
  await page.getByRole("button", { name: "See all tools" }).click();
  await expect(page).toHaveURL(/\/en\/microapps\/$/);
  await expect(page.getByLabel("Search tools")).toHaveValue("");
  await expect(page.locator(cards)).toHaveCount(5);
});

test("filters in the URL are applied on load", async ({ page }) => {
  await page.goto("/en/microapps/?q=quote&category=sales");
  await expect(page.getByLabel("Search tools")).toHaveValue("quote");
  await expect(page.getByRole("radio", { name: "Sales & quotes" })).toBeChecked();
  await expect(page.locator(cards)).toHaveCount(1);
  await expect(page.locator(cards).first()).toContainText("AtajoLab Presupuestos");
});

test("only the search box and topic chips filter the catalog, without counters", async ({ page }) => {
  for (const [path, topics, removed] of [
    ["/es/microapps/", ["Todas", "Clientes y reseñas", "Costos y precios", "Ventas y presupuestos", "Gestión de turnos y reservas online"], /Forma de pago|Disponibilidad/],
    ["/en/microapps/", ["All", "Customers & reviews", "Costs & pricing", "Sales & quotes", "Appointment and online booking management"], /Payment|Availability/],
  ] as const) {
    await page.goto(path);
    const group = page.getByRole("group");
    await expect(group).toHaveCount(1);
    // Exact names: a counter next to a label would change them.
    expect(await group.locator("label").allInnerTexts()).toEqual([...topics]);
    expect(await group.innerText(), path).not.toMatch(removed);
  }
});

test("on a phone the topics scroll sideways without widening the page", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile layout only");
  await page.goto("/es/microapps/");
  const row = page.getByRole("group").locator("div").first();
  const { scrolls, pageOverflow } = await row.evaluate((el) => ({
    scrolls: el.scrollWidth > el.clientWidth,
    pageOverflow: document.documentElement.scrollWidth - window.innerWidth,
  }));
  expect(scrolls).toBe(true);
  expect(pageOverflow).toBeLessThanOrEqual(0);

  // The last chip is off screen at first and still reachable.
  await page.getByRole("radio", { name: "Gestión de turnos y reservas online" }).check({ force: true });
  await expect(page.locator(cards)).toHaveCount(1);
});

test("the store banner stays outside the tool list", async ({ page }) => {
  await page.goto("/es/microapps/?q=tienda");
  await expect(page.locator(cards)).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "¿Buscás productos físicos con QR y NFC?" })).toBeVisible();
});

test("no prices or buy buttons are shown in either language", async ({ page }) => {
  for (const path of ["/es/microapps/", "/en/microapps/", "/es/microapps/atajolab-qr/", "/en/microapps/atajolab-qr/"]) {
    await page.goto(path);
    const text = await page.locator("main").innerText();
    expect(text, path).not.toMatch(/\$\s?\d|4\.900|Comprar|\bBuy\b/);
  }
});
