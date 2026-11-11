import { test } from "../../src/fixtures/pageFixtures";

test("OrangeHRM - user can login (POM)", async ({
  loginPage,
  dashboardPage,
}) => {
  await loginPage.open();

  await loginPage.verifyLoginPageIsVisible();

  await loginPage.loginAsAdmin();

  await dashboardPage.verifyDashboardIsVisible();
});
