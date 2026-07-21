import {Page} from '@playwright/test';

export class BasePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to a specific URL

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    // Wait for the page to load completely

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    // Add screenshot method
    async takeScreenshot(filename: string) {
        await this.page.screenshot({ path: `screenshots/${filename}.png`, fullPage: true });
    }

    // Add current URL method
    async getCurrentUrl() {
        return this.page.url();
    }

    // Add reload page method
    async reloadPage() {
        await this.page.reload();
    }
}