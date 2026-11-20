import { test, expect } from "./fixtures";

const site = "https://agendia.atajolab.dev";

const copy = {
  es: {
    path: "/es/",
    page: "/es/microapps/agendia/",
    primary: "Probar Agendia gratis",
    secondary: "Conocer Agendia",
    sections: ["Qué problemas resuelve", "Cómo funciona", "Capturas", "Qué incluye", "Información comercial"],
    steps: ["Creá tu cuenta", "Contanos cómo trabajás", "Compartí tu enlace"],
    gone: /Próximamente|En desarrollo|Sin tarjeta/i,
    other: "Otras herramientas",
  },
  en: {
    path: "/en/",
    page: "/en/microapps/agendia/",
    primary: "Try Agendia for free",
    secondary: "Get to know Agendia",
    sections: ["Problems it solves", "How it works", "Screenshots", "What's included", "Pricing and plans"],
    steps: ["Create your account", "Tell us how you work", "Share your link"],
    gone: /Coming soon|In development|No card/i,
    other: "More tools",
  },
} as const;

for (const locale of ["es", "en"] as const) {
  const c = copy[locale];

  test(`${locale}: the home presents Agendia with real links`, async ({ page }) => {
    await page.goto(c.path);
    const section = page.locator("section", { has: page.locator("#agendia-title") });
    await expect(section.getByRole("heading", { level: 2, name: "Agendia" })).toBeVisible();
    await expect(section.getByRole("link", { name: c.primary })).toHaveAttribute("href", `${site}/registro`);
    await expect(section.getByRole("link", { name: c.secondary })).toHaveAttribute("href", c.page);
    // Real screens with alternative text, no decorative stand-ins.
    for (const image of await section.getByRole("img").all()) await expect(image).toHaveAttribute("alt", /.{10,}/);
    await expect(section.getByRole("img")).toHaveCount(2);
    expect(await section.innerText()).not.toMatch(c.gone);
  });

  test(`${locale}: the Agendia page is complete and points to the official site`, async ({ page, consoleErrors }) => {
    await page.goto(c.page);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    for (const name of c.sections) await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
    for (const step of c.steps) await expect(page.getByRole("heading", { level: 3, name: step })).toBeVisible();
    await expect(page.getByRole("link", { name: c.primary }).first()).toHaveAttribute("href", `${site}/registro`);
    await expect(page.getByRole("link", { name: c.secondary }).first()).toHaveAttribute("href", site);
    await expect(page.locator(`main a[href="${site}/precios"]`)).toHaveCount(1);
    await expect(page.locator(`main a[href="${site}/licencia"]`)).toHaveCount(1);
    await expect(page.locator("main figure img")).toHaveCount(3);
    // The "other tools" list at the bottom still shows the tools that are coming soon.
    const text = (await page.locator("main").innerText()).split(c.other)[0];
    expect(text).not.toMatch(c.gone);
    expect(text).toMatch(/9\.900|9,900/);
    expect(text).toMatch(/19\.900|19,900/);
    expect(text).not.toMatch(/14\.000|199\.000|7 días|7 days/);
    expect(consoleErrors).toEqual([]);
  });
}

test("Agendia opens from the catalog and from the home choices", async ({ page }) => {
  await page.goto("/es/microapps/");
  await page.locator("main ul.grid > li", { hasText: "Agendia" }).getByRole("link", { name: "Que tus clientes reserven turno online" }).click();
  await expect(page).toHaveURL(/\/es\/microapps\/agendia\/$/);
  await page.goto("/en/");
  await page.getByRole("navigation", { name: "What you need to solve" }).getByRole("link", { name: /Organize appointments/ }).click();
  await expect(page).toHaveURL(/\/en\/microapps\/agendia\/$/);
});
