import { test, expect } from '../fixtures/auth.fixtures'

test(`TC016 - should be able to checkout product successfuly`, async ({ header, page, inventoryPage, productDetailPage, cartPage, checkoutPage, loginAsValidUser }) => {
  await loginAsValidUser();

  await expect(page).toHaveURL(/inventory/);
  await inventoryPage.clickBackpackProduct();

  await productDetailPage.clickAddToCart();
  await header.clickCart();

  await expect(page).toHaveURL(/cart/);
  await expect(cartPage.productNameBackpack).toBeVisible();
  await expect(cartPage.productDescriptionBackpack).toBeVisible();
  await expect(cartPage.productPriceBackpack).toBeVisible();
  await cartPage.clickCheckout();

  await expect(page).toHaveURL(/checkout/);
  await checkoutPage.inputFirstName.fill('John');
  await checkoutPage.inputLastName.fill('Doe');
  await checkoutPage.inputPostalCode.fill('12345');
  await checkoutPage.clickContinue();

  await expect(checkoutPage.labelPaymentInfo).toBeVisible();
  await expect(checkoutPage.infoPaymentMethod).toBeVisible();
  await expect(checkoutPage.labelShippingInfo).toBeVisible();
  await expect(checkoutPage.infoShippingMethod).toBeVisible();
  await expect(checkoutPage.infoShippingMethod).toBeVisible();
  await expect(checkoutPage.labelPriceTotal).toBeVisible();
  await expect(checkoutPage.infoTotalPriceBeforeTax).toBeVisible();
  await expect(checkoutPage.infoTaxAmount).toBeVisible();
  await expect(checkoutPage.infoPriceTotal).toBeVisible();
  await checkoutPage.clickFinish();

  await expect(checkoutPage.notifSuccessfulOrder).toBeVisible();
  await expect(checkoutPage.messageSuccessfulOrder).toBeVisible();
  await expect(checkoutPage.buttonBackHome).toBeVisible();
  await expect(checkoutPage.buttonGeneratePDFOrder).toBeVisible();
});