import { expect, type Page } from "@playwright/test";
import { env } from "../config/env";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
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
  async loginAsAdmin() {
    await this.login(env.username, env.password);
  }
}
