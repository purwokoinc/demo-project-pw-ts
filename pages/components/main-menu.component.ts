import { Locator, Page } from "@playwright/test";

export class MainMenu {
  readonly buttonMainMenu: Locator;
  readonly buttonLogout: Locator;

  constructor(private readonly page: Page) {
    this.buttonMainMenu = page.getByRole('button', { name: 'Open Menu' });
    this.buttonLogout = page.locator('[data-test="logout-sidebar-link"]');
  }

  async clickMainMenu(): Promise<void> {
    await this.buttonMainMenu.click();
  }

  async clickLogout(): Promise<void> {
    await this.buttonLogout.click();
  }
}