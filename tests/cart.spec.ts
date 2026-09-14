import { test, expect } from '../fixtures/auth.fixtures'

test('TC010 - should be able to add product to cart from inventory page', async ({ page, header, inventoryPage, productDetailPage, cartPage, loginAsValidUser }) => {
  await loginAsValidUser();

  await expect(page).toHaveURL(/inventory/)
  await inventoryPage.selectBackpack();
  await expect(inventoryPage.buttonRemoveBackpack).toBeVisible();
  await inventoryPage.clickBackpackProduct();

  await page.waitForTimeout(1000); //needed manual sleep to avoid flakiness
  await expect(productDetailPage.productName).toBeVisible();
  await expect(productDetailPage.productDescription).toBeVisible();
  await expect(productDetailPage.productPrice).toBeVisible();
  await expect(productDetailPage.buttonRemove).toBeVisible();
  await expect(productDetailPage.buttonAddToCart).toBeHidden();
  await header.clickCart();

  await expect(page).toHaveURL(/cart/)
  await expect(cartPage.productNameBackpack).toBeVisible();
  await expect(cartPage.productDescriptionBackpack).toBeVisible();
  await expect(cartPage.productPriceBackpack).toBeVisible();
  await expect(cartPage.buttonRemoveBackpack).toBeVisible();
});

test('TC011 - should be able to add product to cart from product detail page', async ({ page, header, inventoryPage, productDetailPage, cartPage, loginAsValidUser }) => {
  await loginAsValidUser();

  await expect(page).toHaveURL(/inventory/)
  await expect(inventoryPage.buttonAddToCartBackpack).toBeVisible();
  await inventoryPage.clickBackpackProduct();

  await page.waitForTimeout(1000); //needed manual sleep to avoid flakiness
  await expect(productDetailPage.productName).toBeVisible();
  await expect(productDetailPage.productDescription).toBeVisible();
  await expect(productDetailPage.productPrice).toBeVisible();
  await expect(productDetailPage.buttonRemove).toBeHidden();
  await productDetailPage.clickAddToCart();
  await productDetailPage.clickBackToProducts();

  await expect(inventoryPage.buttonRemoveBackpack).toBeVisible();
  await expect(inventoryPage.buttonAddToCartBackpack).toBeHidden();
  await header.clickCart();

  await expect(page).toHaveURL(/cart/)
  await expect(cartPage.productNameBackpack).toBeVisible();
  await expect(cartPage.productDescriptionBackpack).toBeVisible();
  await expect(cartPage.productPriceBackpack).toBeVisible();
  await expect(cartPage.buttonRemoveBackpack).toBeVisible();
});

test('TC012 - should be able to remove selected product from inventory page', async ({ page, header, inventoryPage, productDetailPage, cartPage, loginAsValidUser }) => {
  await loginAsValidUser();

  await expect(page).toHaveURL(/inventory/)
  await inventoryPage.selectBackpack();
  await expect(inventoryPage.buttonRemoveBackpack).toBeVisible();
  await inventoryPage.clickBackpackProduct();

  await page.waitForTimeout(1000); //needed manual sleep to avoid flakiness
  await expect(productDetailPage.productName).toBeVisible();
  await expect(productDetailPage.productDescription).toBeVisible();
  await expect(productDetailPage.productPrice).toBeVisible();
  await expect(productDetailPage.buttonRemove).toBeVisible();
  await expect(productDetailPage.buttonAddToCart).toBeHidden();
  await header.clickCart();

  await expect(page).toHaveURL(/cart/)
  await expect(cartPage.productNameBackpack).toBeVisible();
  await expect(cartPage.productDescriptionBackpack).toBeVisible();
  await expect(cartPage.productPriceBackpack).toBeVisible();
  await expect(cartPage.buttonRemoveBackpack).toBeVisible();
  await cartPage.clickContinueShopping();

  await expect(page).toHaveURL(/inventory/)
  await inventoryPage.clickRemoveBackpack();
  await expect(inventoryPage.buttonAddToCartBackpack).toBeVisible();
  await inventoryPage.clickBackpackProduct();

  await page.waitForTimeout(1000); //needed manual sleep to avoid flakiness
  await expect(productDetailPage.productName).toBeVisible();
  await expect(productDetailPage.productDescription).toBeVisible();
  await expect(productDetailPage.productPrice).toBeVisible();
  await expect(productDetailPage.buttonRemove).toBeHidden();
  await expect(productDetailPage.buttonAddToCart).toBeVisible();
  await header.clickCart();

  await expect(page).toHaveURL(/cart/)
  await expect(cartPage.productNameBackpack).toBeHidden();
  await expect(cartPage.productDescriptionBackpack).toBeHidden();
  await expect(cartPage.productPriceBackpack).toBeHidden();
  await expect(cartPage.buttonRemoveBackpack).toBeHidden();
});

test('TC013 - should be able to remove selected product from product detail page', async ({ page, header, inventoryPage, productDetailPage, cartPage, loginAsValidUser }) => {
  await loginAsValidUser();

  await expect(page).toHaveURL(/inventory/)
  await inventoryPage.selectBackpack();
  await expect(inventoryPage.buttonRemoveBackpack).toBeVisible();
  await header.clickCart();

  await expect(page).toHaveURL(/cart/)
  await expect(cartPage.productNameBackpack).toBeVisible();
  await expect(cartPage.productDescriptionBackpack).toBeVisible();
  await expect(cartPage.productPriceBackpack).toBeVisible();
  await expect(cartPage.buttonRemoveBackpack).toBeVisible();
  await cartPage.clickProductNameBackpack();

  await expect(page).toHaveURL(/inventory/)
  await page.waitForTimeout(1000); //needed manual sleep to avoid flakiness
  await expect(productDetailPage.productName).toBeVisible();
  await expect(productDetailPage.productDescription).toBeVisible();
  await expect(productDetailPage.productPrice).toBeVisible();
  await expect(productDetailPage.buttonAddToCart).toBeHidden();
  await productDetailPage.clickRemove();
  await productDetailPage.clickBackToProducts();

  await expect(inventoryPage.buttonAddToCartBackpack).toBeVisible();
  await header.clickCart();

  await expect(page).toHaveURL(/cart/)
  await expect(cartPage.productNameBackpack).toBeHidden();
  await expect(cartPage.productDescriptionBackpack).toBeHidden();
  await expect(cartPage.productPriceBackpack).toBeHidden();
  await expect(cartPage.buttonRemoveBackpack).toBeHidden();
});

test('TC014 - should be able to remove selected product from cart page', async ({ page, header, inventoryPage, productDetailPage, cartPage, loginAsValidUser }) => {
  await loginAsValidUser();

  await expect(page).toHaveURL(/inventory/)
  await inventoryPage.selectBackpack();
  await expect(inventoryPage.buttonRemoveBackpack).toBeVisible();
  await inventoryPage.clickBackpackProduct();

  await page.waitForTimeout(1000); //needed manual sleep to avoid flakiness
  await expect(productDetailPage.productName).toBeVisible();
  await expect(productDetailPage.productDescription).toBeVisible();
  await expect(productDetailPage.productPrice).toBeVisible();
  await expect(productDetailPage.buttonRemove).toBeVisible();
  await expect(productDetailPage.buttonAddToCart).toBeHidden();
  await header.clickCart();

  await expect(page).toHaveURL(/cart/)
  await expect(cartPage.productNameBackpack).toBeVisible();
  await expect(cartPage.productDescriptionBackpack).toBeVisible();
  await expect(cartPage.productPriceBackpack).toBeVisible();
  await cartPage.clickRemoveBackpack();
  await expect(cartPage.productNameBackpack).toBeHidden();
  await expect(cartPage.productDescriptionBackpack).toBeHidden();
  await expect(cartPage.productPriceBackpack).toBeHidden();
  await cartPage.clickContinueShopping();

  await expect(page).toHaveURL(/inventory/)
  await expect(inventoryPage.buttonAddToCartBackpack).toBeVisible();
  await inventoryPage.clickBackpackProduct();

  await page.waitForTimeout(1000); //needed manual sleep to avoid flakiness
  await expect(productDetailPage.productName).toBeVisible();
  await expect(productDetailPage.productDescription).toBeVisible();
  await expect(productDetailPage.productPrice).toBeVisible();
  await expect(productDetailPage.buttonRemove).toBeHidden();
  await expect(productDetailPage.buttonAddToCart).toBeVisible();
});