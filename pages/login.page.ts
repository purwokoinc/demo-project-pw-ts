import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly inputUsername: Locator;
  readonly inputPassword: Locator;
  readonly buttonLogin: Locator;
  readonly errorMessage: Locator;

  constructor(private readonly page: Page) {
    this.inputUsername = page.locator('[data-test="username"]');
    this.inputPassword = page.locator('[data-test="password"]');
    this.buttonLogin = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navigateToLoginPage(): Promise<void> {
    await this.page.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.inputUsername.fill(username);
    await this.inputPassword.fill(password);
    await this.buttonLogin.click();
  }

  async expectErrorMessage(message: string | RegExp): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(message);
  }
}