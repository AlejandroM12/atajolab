import { test, expect } from "./fixtures";

const site = "https://qr.atajolab.dev";

const copy = {
  es: {
    page: "/es/microapps/atajolab-qr/",
    primary: "Crear mi QR gratis",
    secondary: "Descubrir cómo funciona",
    sections: ["Qué podés hacer", "Cómo funciona", "Un editor para hacerlo a tu manera", "Formatos para cada necesidad", "Ejemplos de lo que podés crear", "Qué incluye", "Preguntas frecuentes"],
    closing: "Tu próximo diseño empieza con un QR.",
    gone: /Próximamente|En desarrollo/i,
    other: "Otras herramientas",
  },
  en: {
    page: "/en/microapps/atajolab-qr/",
    primary: "Create my QR for free",
    secondary: "See how it works",
    sections: ["What you can do", "How it works", "An editor to do it your way", "Formats for every need", "Examples of what you can create", "What's included", "Frequently asked questions"],
    closing: "Your next design starts with a QR.",
    gone: /Coming soon|In development/i,
    other: "More tools",
  },
} as const;

for (const locale of ["es", "en"] as const) {
  const c = copy[locale];

  test(`${locale}: the AtajoLab QR page is complete and leads to the product`, async ({ page, consoleErrors }) => {
    await page.goto(c.page);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    for (const name of c.sections) await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: c.closing })).toBeVisible();
    await expect(page.getByRole("link", { name: c.primary }).first()).toHaveAttribute("href", site);
    await expect(page.getByRole("link", { name: c.secondary }).first()).toHaveAttribute("href", "#como-funciona");
    // The cards of the other tools use decorative images with empty alt text.
    const alts = await page.locator("main img").evaluateAll((images) =>
      images.filter((image) => !image.closest('section[aria-labelledby="otras"]')).map((image) => image.getAttribute("alt") ?? ""),
    );
    expect(alts.length).toBeGreaterThanOrEqual(12);
    for (const alt of alts) expect(alt.length).toBeGreaterThan(10);
    expect((await page.locator("main").innerText()).split(c.other)[0]).not.toMatch(c.gone);
    expect(consoleErrors).toEqual([]);
  });

  test(`${locale}: the AtajoLab QR FAQ opens and answers about NFC`, async ({ page }) => {
    await page.goto(c.page);
    const nfc = page.locator("details", { hasText: "NFC" }).first();
    await nfc.locator("summary").click();
    await expect(nfc).toHaveAttribute("open", "");
    await expect(nfc).toContainText(/AtajoLab Shop/);
  });

  test(`${locale}: the AtajoLab QR page has no horizontal scroll on a phone`, async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto(c.page);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
  });
}
