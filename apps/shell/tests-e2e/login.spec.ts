import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test("renders login form elements", async ({ page }) => {
    await expect(
      page.locator("h1", { hasText: "Welcome back!" }),
    ).toBeVisible();

    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByPlaceholder("you@example.com")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();

    await expect(page.getByRole("button", { name: "Log in" })).toBeVisible();
  });

  test("shows validation errors when submitting empty form", async ({
    page,
  }) => {
    await page.click('button:has-text("Log in")');

    await expect(page.getByText("Email is required")).toBeVisible();
    await expect(page.getByText("Password is required")).toBeVisible();
  });

  test("allows user to log in successfully", async ({ page }) => {
    await page.route("**/api/auth/login", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          accessToken: "fake-token",
          refreshToken: "fake-refresh",
        }),
      });
    });

    await page.fill('input[name="email"]', "john@mail.com");
    await page.fill('input[name="password"]', "changeme");
    await page.click('button:has-text("Log in")');

    await expect(page).toHaveURL("/");
  });
});
