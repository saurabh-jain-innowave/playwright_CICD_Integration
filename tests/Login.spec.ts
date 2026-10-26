import { test } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import users from '../test-data/users.json';

test.describe('Login Functionality', () => {

  test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await loginPage.verifySuccessLogin();
  });

  test('Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await loginPage.verifyFailureLogin();
  });

  test('Logout Validation', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await loginPage.logout();

    await page.waitForURL('**/login');
  });
});