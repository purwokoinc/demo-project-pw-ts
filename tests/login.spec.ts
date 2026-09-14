import { test, expect } from '../fixtures/auth.fixtures'

test('TC001 - Valid login redirects to inventory page', async ({ header, page, loginAsValidUser }) => {
  await loginAsValidUser();
  await expect(page).toHaveURL(/inventory/)
  await expect(header.buttonCart).toBeVisible();
});

test('TC002 - Auth session remain saved after succesful login', async ({
  page, loginAsValidUser
}) => {
  await loginAsValidUser();
  await expect(page).toHaveURL(/inventory/)
  await page.reload();
  await expect(page).toHaveURL(/inventory/)
});

test('TC003 - Invalid login caused by empty username shows an error message', async ({ loginPage, invalidLoginWithEmptyUsername }) => {
  await invalidLoginWithEmptyUsername();
  await loginPage.expectErrorMessage('Username is required');
});

test('TC004 - Invalid login caused by empty password shows an error message', async ({ loginPage, invalidLoginWithEmptyPassword }) => {
  await invalidLoginWithEmptyPassword();
  await loginPage.expectErrorMessage('Password is required');
});

test('TC005 - Invalid login caused by wrong password shows an error message', async ({ loginPage, invalidLoginWithWrongPassword }) => {
  await invalidLoginWithWrongPassword();
  await loginPage.expectErrorMessage('Username and password do not match any user in this service');
});

test('TC006 - Invalid login caused by unregistered username shows an error message', async ({ loginPage, invalidLoginWithUnregisteredCredential }) => {
  await invalidLoginWithUnregisteredCredential();
  await loginPage.expectErrorMessage('Username and password do not match any user in this service');
});

test('TC007 - Invalid login caused by locked out credential shows an error message', async ({ loginPage, invalidLoginWithLockedOutCredential }) => {
  await invalidLoginWithLockedOutCredential();
  await loginPage.expectErrorMessage('Sorry, this user has been locked out.');
});