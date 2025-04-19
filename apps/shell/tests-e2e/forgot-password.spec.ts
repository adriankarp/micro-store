import { test, expect } from "@playwright/test";

test.describe("Forgot Password Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/forgot-password");
  });

  test("renders forgot password form elements", async ({ page }) => {
    await expect(
      page.locator("h1", { hasText: "Forgot your password?" }),
    ).toBeVisible();

    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByPlaceholder("you@example.com")).toBeVisible();

    await expect(
      page.getByRole("button", { name: "Send password reset link" }),
    ).toBeVisible();
  });

  test("shows validation errors when submitting empty form", async ({
    page,
  }) => {
    await page.click('button:has-text("Send password reset link")');

    await expect(page.getByText("Email is required")).toBeVisible();
  });

  test("allows user to request password reset successfully", async ({
    page,
  }) => {
    await page.route("**/api/auth/forgot-password", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ message: "Reset link sent to your email." }),
      });
    });

    await page.fill('input[name="email"]', "john@mail.com");
    await page.click('button:has-text("Send password reset link")');

    await expect(page).toHaveURL("/login");

    await expect(
      page.getByText("Reset link sent to your email."),
    ).toBeVisible();
  });
});
