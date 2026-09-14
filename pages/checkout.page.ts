import { expect, Locator, Page } from '@playwright/test';

export class CheckoutPage {
  readonly inputFirstName: Locator;
  readonly inputLastName: Locator;
  readonly inputPostalCode: Locator;
  readonly buttonContinue: Locator;
  readonly labelPaymentInfo: Locator;
  readonly infoPaymentMethod: Locator;
  readonly labelShippingInfo: Locator;
  readonly infoShippingMethod: Locator;
  readonly labelPriceTotal: Locator;
  readonly infoTotalPriceBeforeTax: Locator;
  readonly infoTaxAmount: Locator;
  readonly infoPriceTotal: Locator;
  readonly buttonFinish: Locator;
  readonly notifSuccessfulOrder: Locator;
  readonly messageSuccessfulOrder: Locator;
  readonly buttonBackHome: Locator;
  readonly buttonGeneratePDFOrder: Locator;

  constructor(private readonly page: Page) {
    this.inputFirstName = page.locator('[data-test="firstName"]');
    this.inputLastName = page.locator('[data-test="lastName"]');
    this.inputPostalCode = page.locator('[data-test="postalCode"]');
    this.buttonContinue = page.locator('[data-test="continue"]');
    this.labelPaymentInfo = page.locator('[data-test="payment-info-label"]');
    this.infoPaymentMethod = page.locator('[data-test="payment-info-value"]');
    this.labelShippingInfo = page.locator('[data-test="shipping-info-label"]');
    this.infoShippingMethod = page.locator('[data-test="shipping-info-value"]');
    this.labelPriceTotal = page.locator('[data-test="total-info-label"]');
    this.infoTotalPriceBeforeTax = page.locator('[data-test="subtotal-label"]');
    this.infoTaxAmount = page.locator('[data-test="tax-label"]');
    this.infoPriceTotal = page.locator('[data-test="total-label"]');
    this.buttonFinish = page.locator('[data-test="finish"]');
    this.notifSuccessfulOrder = page.locator('[data-test="complete-header"]');
    this.messageSuccessfulOrder = page.locator('[data-test="complete-text"]');
    this.buttonBackHome = page.locator('[data-test="back-to-products"]');
    this.buttonGeneratePDFOrder = page.locator('[data-test="generate-pdf-order"]');
  }

  async clickContinue(): Promise<void> {
    await this.buttonContinue.click();
  }

  async clickFinish(): Promise<void> {
    await this.buttonFinish.click();
  }
}