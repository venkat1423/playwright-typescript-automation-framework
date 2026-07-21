import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class CartPage extends BasePage {

    // Declare Locators

    readonly cartTitle : Locator;
    readonly productName : Locator;
    readonly productPrice : Locator;
    readonly removeButton : Locator;
    readonly continueShoppingButton : Locator;
    readonly checkoutButton : Locator;

    // Constructor

    constructor(page: Page) {
        super(page);
        this.cartTitle = page.locator('.title');
        this.productName = page.locator('.inventory_item_name');
        this.productPrice = page.locator('.inventory_item_price');
        this.removeButton = page.locator('#remove-sauce-labs-backpack');
        this.continueShoppingButton = page.locator('#continue-shopping');
        this.checkoutButton = page.locator('#checkout');
    }

    // Remove product

    async removeProductFromCart(productName: string){
        const product = this.page.locator('.inventory_item').filter({
            hasText : productName
        });
        await product.getByRole('button', {name: 'Remove'}).click();
    }

    // Continue Shopping

    async continueShopping(){
        await this.continueShoppingButton.click();
    }

    // Proceed to Checkout

    async clickCheckout(){
        await this.checkoutButton.click();
    }
}