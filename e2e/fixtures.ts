import { test as base, expect } from "@playwright/test";

/** Fails the test on any page error or console error (hydration mismatches included). */
export const test = base.extend<{ consoleErrors: string[] }>({
  consoleErrors: async ({ page }, provide) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      // The 404 test requests a missing page on purpose.
      if (message.type() === "error" && !message.text().includes("404")) errors.push(message.text());
    });
    await provide(errors);
    expect(errors, "console or page errors").toEqual([]);
  },
});

export { expect };
