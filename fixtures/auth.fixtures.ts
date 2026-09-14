import { Page } from "@playwright/test";

import { test as base, expect } from "./page.fixtures";
import { LoginPage } from "../pages/login.page";

type AuthFixtures = {
  loginAsValidUser: () => Promise<void>;
  invalidLoginWithEmptyUsername: () => Promise<void>;
  invalidLoginWithEmptyPassword: () => Promise<void>;
  invalidLoginWithWrongPassword: () => Promise<void>;
  invalidLoginWithUnregisteredCredential: () => Promise<void>;
  invalidLoginWithLockedOutCredential: () => Promise<void>;
};

const getEnvCredential = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Environment variable "${key}" is not devined in .env`);
  }

  return value;
};

const performLogin = async (page: Page, username: string, password: string): Promise<void> => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login(username, password);
};

const performLoginWithEnv = async (page: Page, usernameKey: string, passwordKey: string): Promise<void> => {
  const username = getEnvCredential(usernameKey);
  const password = getEnvCredential(passwordKey);

  await performLogin(page, username, password);
};

export const test = base.extend<AuthFixtures>({
  loginAsValidUser: async ({ page }, use) => {
    await use(async () => {
      await performLoginWithEnv(page, 'VALID_USERNAME', 'VALID_PASSWORD');
    });
  },

  invalidLoginWithEmptyUsername: async ({ page }, use) => {
    await use(async () => {
      const password = getEnvCredential('VALID_PASSWORD');
      await performLogin(page, '', password);
    });
  },

  invalidLoginWithEmptyPassword: async ({ page }, use) => {
    await use(async () => {
      const username = getEnvCredential('VALID_USERNAME');
      await performLogin(page, username, '');
    });
  },

  invalidLoginWithWrongPassword: async ({ page }, use) => {
    await use(async () => {
      await performLoginWithEnv(page, 'INVALID_WRONG_PASSWORD_USERNAME', 'INVALID_WRONG_PASSWORD_PASSWORD');
    });
  },

  invalidLoginWithUnregisteredCredential: async ({ page }, use) => {
    await use(async () => {
      await performLoginWithEnv(page, 'INVALID_UNREGISTERED_CREDENTIAL_USERNAME', 'INVALID_UNREGISTERED_CREDENTIAL_PASSWORD');
    });
  },

  invalidLoginWithLockedOutCredential: async ({ page }, use) => {
    await use(async () => {
      await performLoginWithEnv(page, 'INVALID_LOCKED_OUT_CREDENTIAL_USERNAME', 'INVALID_LOCKED_OUT_CREDENTIAL_PASSWORD');
    });
  }
});

export { expect };