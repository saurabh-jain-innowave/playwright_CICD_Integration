import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(
      'https://the-internet.herokuapp.com/login'
    );
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }

  async verifySuccessLogin() {
    await expect(
      this.page.locator('.flash.success')
    ).toContainText('You logged');
  }

  async verifyFailureLogin() {
    await expect(
      this.page.locator('.flash.error')
    ).toContainText('Your username is invalid');
  }

  async logout() {
    await this.page.click('a.button');
  }
}