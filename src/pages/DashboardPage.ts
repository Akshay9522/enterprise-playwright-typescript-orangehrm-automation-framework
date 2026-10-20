import { expect, type Page } from "@playwright/test";

export class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyDashboardIsVisible() {
    await expect(this.page).toHaveURL(/dashboard\/index/);
    await expect(
      this.page.getByRole("heading", { name: "Dashboard" }),
    ).toBeVisible();
  }
}
