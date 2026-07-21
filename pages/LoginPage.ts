import {Page, Locator, expect} from '@playwright/test';
import {BasePage} from './BasePage';

export class LoginPage extends BasePage {
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage(){
        return await this.errorMessage.textContent();
    }

    async verifyErrorMessage(expectedMessage:string){
        await expect(this.errorMessage).toContainText(expectedMessage);
    }
}