import { test, expect } from '../fixtures/auth.fixtures'

test('TC008 - Successful logout redirects back to login page', async ({ loginPage, header, mainMenu, loginAsValidUser
}) => {
  await loginAsValidUser();

  await expect(header.buttonCart).toBeVisible();
  await mainMenu.clickMainMenu();
  await mainMenu.clickLogout();

  await expect(loginPage.buttonLogin).toBeVisible();
  await expect(header.buttonCart).toBeHidden();
});

test('TC009 - Successful logout invalidates auth session', async ({ page, loginPage, mainMenu, loginAsValidUser }) => {
  await loginAsValidUser();

  await mainMenu.clickMainMenu();
  await mainMenu.clickLogout();

  await page.goBack();
  await loginPage.expectErrorMessage(
    /You can only access.*when you are logged in\./
  );
});