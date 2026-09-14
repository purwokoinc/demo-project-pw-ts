import { Locator, Page } from '@playwright/test'

export class Header {
  readonly buttonCart: Locator;

  constructor(private readonly page: Page) {
    this.buttonCart = page.locator('[data-test="shopping-cart-link"]');
  }

  async clickCart(): Promise<void> {
    await this.buttonCart.click();
  }
}