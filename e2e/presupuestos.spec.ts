import { test, expect } from "./fixtures";

const site = "https://presupuestos.atajolab.dev";

const copy = {
  es: {
    path: "/es/",
    page: "/es/microapps/atajolab-presupuestos/",
    primary: "Crear un presupuesto gratis",
    secondary: "Conocer AtajoLab Presupuestos",
    sections: ["Qué problemas resuelve", "Cómo funciona", "Capturas", "Qué incluye"],
    steps: ["Cargá tus datos", "Mirá la vista previa", "Descargá y compartí"],
    gone: /Próximamente|En desarrollo|Pack Premium/i,
    other: "Otras herramientas",
  },
  en: {
    path: "/en/",
    page: "/en/microapps/atajolab-presupuestos/",
    primary: "Create a quote for free",
    secondary: "Get to know AtajoLab Presupuestos",
    sections: ["Problems it solves", "How it works", "Screenshots", "What's included"],
    steps: ["Enter your details", "Watch the preview", "Download and share"],
    gone: /Coming soon|In development|Premium Pack/i,
    other: "More tools",
  },
} as const;

for (const locale of ["es", "en"] as const) {
  const c = copy[locale];

  test(`${locale}: the home presents AtajoLab Presupuestos with real links`, async ({ page }) => {
    await page.goto(c.path);
    const section = page.locator("section", { has: page.locator("#presupuestos-title") });
    await expect(section.getByRole("heading", { level: 2, name: "AtajoLab Presupuestos" })).toBeVisible();
    await expect(section.getByRole("link", { name: c.primary })).toHaveAttribute("href", `${site}/crear`);
    await expect(section.getByRole("link", { name: c.secondary })).toHaveAttribute("href", site);
    for (const image of await section.getByRole("img").all()) await expect(image).toHaveAttribute("alt", /.{10,}/);
    await expect(section.getByRole("img")).toHaveCount(2);
    expect(await section.innerText()).not.toMatch(c.gone);
  });

  test(`${locale}: the AtajoLab Presupuestos page is complete and points to the product`, async ({ page, consoleErrors }) => {
    await page.goto(c.page);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    for (const name of c.sections) await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
    for (const step of c.steps) await expect(page.getByRole("heading", { level: 3, name: step })).toBeVisible();
    await expect(page.getByRole("link", { name: c.primary }).first()).toHaveAttribute("href", `${site}/crear`);
    await expect(page.getByRole("link", { name: c.secondary }).first()).toHaveAttribute("href", site);
    await expect(page.locator("main figure img")).toHaveCount(3);
    const text = (await page.locator("main").innerText()).split(c.other)[0];
    expect(text).not.toMatch(c.gone);
    expect(consoleErrors).toEqual([]);
  });

  test(`${locale}: the AtajoLab Presupuestos page has no horizontal scroll on a phone`, async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto(c.page);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
}

test("AtajoLab Presupuestos opens from the home choices", async ({ page }) => {
  await page.goto("/en/");
  await page.getByRole("navigation", { name: "What you need to solve" }).getByRole("link", { name: /Create professional quotes/ }).click();
  await expect(page).toHaveURL(/\/en\/microapps\/atajolab-presupuestos\/$/);
});
