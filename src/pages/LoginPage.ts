import { expect, type Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    // baseURL is set in playwright.config.ts
    await this.page.goto("/");
  }

  async verifyLoginPageIsVisible() {
    await expect(
      this.page.getByRole("heading", { name: "Login" }),
    ).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
