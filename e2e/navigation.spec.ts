import { test, expect } from "./fixtures";

const pages = {
  es: ["/es/", "/es/microapps/", "/es/microapps/atajolab-qr/", "/es/soluciones/", "/es/proyectos/", "/es/proyectos/adhera/", "/es/contacto/", "/es/preguntas-frecuentes/"],
  en: ["/en/", "/en/microapps/", "/en/microapps/atajolab-qr/", "/en/solutions/", "/en/projects/", "/en/projects/adhera/", "/en/contact/", "/en/faq/"],
};

for (const theme of ["light", "dark"] as const) {
  for (const [locale, paths] of Object.entries(pages)) {
    test(`every ${locale} page renders cleanly in ${theme} mode`, async ({ page, consoleErrors }) => {
      await page.emulateMedia({ colorScheme: theme });
      for (const path of paths) {
        await page.goto(path);
        await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        expect(overflow, `horizontal overflow on ${path}`).toBeLessThanOrEqual(0);
      }
      expect(consoleErrors).toEqual([]);
    });
  }
}

test("desktop header navigation works in both languages", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop navigation only");
  await page.goto("/es/");
  await page.locator("header").getByRole("link", { name: "Servicios" }).click();
  await expect(page).toHaveURL(/\/es\/soluciones\/$/);
  await expect(page.locator("header").getByRole("link", { name: "Servicios" })).toHaveAttribute("aria-current", "page");

  await page.goto("/en/");
  await page.locator("header").getByRole("link", { name: "Tools" }).click();
  await expect(page).toHaveURL(/\/en\/microapps\/$/);
});

test("mobile menu opens, navigates and closes", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile menu only");
  await page.goto("/en/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.locator("header").getByRole("link", { name: "Services" }).click();
  await expect(page).toHaveURL(/\/en\/solutions\/$/);
  await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
});

test("contact page offers a real mailto link", async ({ page }) => {
  await page.goto("/en/contact/");
  const href = await page.getByRole("link", { name: "I need a custom solution" }).getAttribute("href");
  expect(href).toMatch(/^mailto:atajolab\.tools@gmail\.com\?subject=Custom%20solution%20inquiry/);
});

test("skip link is the first focusable element", async ({ page, isMobile }) => {
  test.skip(isMobile, "keyboard navigation");
  await page.goto("/en/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
});
