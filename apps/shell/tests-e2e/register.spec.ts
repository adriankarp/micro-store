import { test, expect } from "@playwright/test";

test.describe("Register Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/register");
  });

  test("renders register form elements", async ({ page }) => {
    await expect(page.locator("h1", { hasText: "Join us" })).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByPlaceholder("you@example.com")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(page.getByLabel("Confirm Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign up" })).toBeVisible();
  });

  test("shows validation errors when submitting empty form", async ({
    page,
  }) => {
    await page.click('button:has-text("Sign up")');
    await expect(page.getByText("Email is required")).toBeVisible();
    await expect(page.getByText("Password is required")).toBeVisible();
    await expect(page.getByText("Confirm Password is required")).toBeVisible();
  });

  test("allows user to register successfully", async ({ page }) => {
    await page.route("**/api/auth/register", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ message: "Registered successfully" }),
      });
    });

    await page.fill('input[name="email"]', "john@mail.com");
    await page.fill('input[name="password"]', "changeme");
    await page.fill('input[name="confirmPassword"]', "changeme");
    await page.click('button:has-text("Sign up")');

    await expect(page).toHaveURL("/login");
    await expect(page.getByText("Registered successfully")).toBeVisible();
  });
});
