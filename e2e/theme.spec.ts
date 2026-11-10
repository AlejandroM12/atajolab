import type { Page } from "@playwright/test";
import { test, expect } from "./fixtures";

const isDark = (page: Page) => page.evaluate(() => document.documentElement.classList.contains("dark"));

async function chooseTheme(page: Page, button: RegExp, option: string) {
  await page.getByRole("button", { name: button }).click();
  await page.getByRole("button", { name: option, exact: true }).click();
}

test("follows the system preference by default", async ({ page, consoleErrors }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/es/");
  expect(await isDark(page)).toBe(true);
  await page.emulateMedia({ colorScheme: "light" });
  await expect.poll(() => isDark(page)).toBe(false);
  expect(consoleErrors).toEqual([]);
});

test("a manual choice applies, persists and survives reloads and language changes", async ({ page, consoleErrors }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/es/microapps/");
  await chooseTheme(page, /Cambiar tema/, "Oscuro");
  expect(await isDark(page)).toBe(true);
  expect(await page.evaluate(() => localStorage.getItem("atajolab-theme"))).toBe("dark");

  // Applied before paint: already dark when the HTML is parsed, before hydration.
  await page.reload({ waitUntil: "domcontentloaded" });
  expect(await isDark(page)).toBe(true);

  await page.locator('nav[aria-label="Idioma"]').getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/microapps\/$/);
  expect(await isDark(page)).toBe(true);
  await page.getByRole("button", { name: /Change theme/ }).click();
  await expect(page.getByRole("button", { name: "Dark", exact: true })).toHaveAttribute("aria-pressed", "true");
  expect(consoleErrors).toEqual([]);
});

test("choosing System clears the stored choice and follows the OS", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/en/");
  await chooseTheme(page, /Change theme/, "Light");
  expect(await isDark(page)).toBe(false);
  await chooseTheme(page, /Change theme/, "System");
  expect(await isDark(page)).toBe(true);
  expect(await page.evaluate(() => localStorage.getItem("atajolab-theme"))).toBeNull();
});

test("the theme menu closes with Escape and returns focus", async ({ page }) => {
  await page.goto("/es/");
  const trigger = page.getByRole("button", { name: /Cambiar tema/ });
  await trigger.click();
  await expect(page.getByRole("group", { name: "Tema" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("group", { name: "Tema" })).toBeHidden();
  await expect(trigger).toBeFocused();
});
