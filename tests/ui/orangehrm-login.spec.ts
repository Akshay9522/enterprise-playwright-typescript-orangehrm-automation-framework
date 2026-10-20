import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import { DashboardPage } from "../../src/pages/DashboardPage";

test("OrangeHRM - user can login (POM)", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.open();
  await loginPage.verifyLoginPageIsVisible();

  await loginPage.loginAsAdmin();

  await dashboardPage.verifyDashboardIsVisible();
});
