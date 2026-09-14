import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly productNameBackpack: Locator;
  readonly buttonAddToCartBackpack: Locator;
  readonly buttonRemoveBackpack: Locator;

  constructor(private readonly page: Page) {
    this.productNameBackpack = page.locator('[data-test="item-4-title-link"]');
    this.buttonAddToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.buttonRemoveBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]')
  }

  async navigateToInventoryPage(): Promise<void> {
    await this.page.goto('/inventory.html');
  }

  async clickBackpackProduct(): Promise<void> {
    await this.productNameBackpack.click();
  }

  async selectBackpack(): Promise<void> {
    await this.buttonAddToCartBackpack.click();
  }

  async clickRemoveBackpack(): Promise<void> {
    await this.buttonRemoveBackpack.click();
  }
}