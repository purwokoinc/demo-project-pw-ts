import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly productNameBackpack: Locator;
  readonly productDescriptionBackpack: Locator;
  readonly productPriceBackpack: Locator;
  readonly buttonRemoveBackpack: Locator;
  readonly buttonCheckout: Locator;
  readonly buttonContinueShopping: Locator;

  constructor(private readonly page: Page) {
    this.productNameBackpack = page.locator('[data-test="item-4-title-link"]');
    this.productDescriptionBackpack = page.getByText('carry.allTheThings() with the');
    this.productPriceBackpack = page.getByText('$29.99');
    this.buttonRemoveBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]')
    this.buttonCheckout = page.locator('[data-test="checkout"]');
    this.buttonContinueShopping = page.locator('[data-test="continue-shopping"]');
  }

  async removeBackpack(): Promise<void> {
    await this.buttonRemoveBackpack.click();
  }

  async clickProductNameBackpack(): Promise<void> {
    await this.productNameBackpack.click();
  }

  async clickRemoveBackpack(): Promise<void> {
    await this.buttonRemoveBackpack.click();
  }

  async clickContinueShopping(): Promise<void> {
    await this.buttonContinueShopping.click();
  }

  async clickCheckout(): Promise<void> {
    await this.buttonCheckout.click();
  }
}