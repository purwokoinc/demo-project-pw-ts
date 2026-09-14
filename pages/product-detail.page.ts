import { expect, Locator, Page } from '@playwright/test';

export class ProductDetailPage {
  readonly buttonBackToProducts: Locator;
  readonly productName: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly buttonAddToCart: Locator;
  readonly buttonRemove: Locator;

  constructor(private readonly page: Page) {
    this.buttonBackToProducts = page.locator('[data-test="back-to-products"]');
    this.productName = page.locator('[data-test="inventory-item-name"]');
    this.productDescription = page.locator('[data-test="inventory-item-desc"]');
    this.productPrice = page.locator('[data-test="inventory-item-price"]');
    this.buttonAddToCart = page.locator('[data-test="add-to-cart"]');
    this.buttonRemove = page.locator('[data-test="remove"]');
  }

  async clickBackToProducts(): Promise<void> {
    await this.buttonBackToProducts.click();
  }

  async clickAddToCart(): Promise<void> {
    await this.buttonAddToCart.click();
  }

  async clickRemove(): Promise<void> {
    await this.buttonRemove.click();
  }
}