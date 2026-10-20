import { expect, test } from "@playwright/test";
import { env } from "../../src/config/env";

test("OrangeHRM - user can login", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();

  const userName = page.getByPlaceholder("username");
  await userName.pressSequentially("Admin");

  const password = page.getByPlaceholder("password");
  await password.pressSequentially("admin123");

  const loginBtn = page.getByRole("button", { name: "Login" });
  await loginBtn.click();

  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  );

  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

  //await expect()
});
