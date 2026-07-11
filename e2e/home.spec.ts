import { test, expect } from "@playwright/test";

test("homepage renders the Quirk Generator playground", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Quirk Generator/);
  // The playground prompt box is the core surface — it must render even
  // without a FAL_KEY configured.
  await expect(page.locator("textarea").first()).toBeVisible();
});
