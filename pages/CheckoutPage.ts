import {Page, Locator, expect} from '@playwright/test';
import {BasePage} from './BasePage';
import { Constants } from '../utils/Constants';

export class CheckoutPage extends BasePage{

    // Checkout Information Page Locators
    readonly checkoutTitle : Locator;
    readonly firstName : Locator;
    readonly lastName : Locator;
    readonly postalCode : Locator;
    readonly continueButton : Locator;
    readonly cancelButton : Locator;

    // Checkout Overview Page Locators
    readonly overviewTitle : Locator;
    readonly finishButton : Locator;

    // Checkout Complete Page Locators
    readonly completeHeader : Locator;
    readonly completeMessage : Locator;
    readonly backHomeButton : Locator;

    // Constructor

    constructor(page: Page) {
        super(page);

        // Checkout Information Page Locators
        this.checkoutTitle = page.locator('.title');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.cancelButton = page.locator('#cancel');

        // Checkout Overview Page Locators
        this.overviewTitle = page.locator('.title');
        this.finishButton = page.locator('#finish');

        // Checkout Complete Page Locators
        this.completeHeader = page.locator('.complete-header');
        this.completeMessage = page.locator('.complete-text');
        this.backHomeButton = page.locator('#back-to-products');
    
    }

        // Verify Checkout information page
        async verifyCheckoutInformationPage(){
            await expect(this.checkoutTitle).toHaveText(Constants.CHECKOUT_INFORMATION_TITLE);
        }  
    
        // Additional methods for interacting with the checkout process can be added here

        async enterCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
            await this.firstName.fill(firstName);
            await this.lastName.fill(lastName);
            await this.postalCode.fill(postalCode);
        }

        async clickContinue() {
            await this.continueButton.click();
        }

        async clickFinish() {
            await this.finishButton.click();
        }

        async clickBackHome() {
            await this.backHomeButton.click();
        }

}
