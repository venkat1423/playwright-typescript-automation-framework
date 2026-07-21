import {Page, Locator, expect} from '@playwright/test';
import {BasePage} from './BasePage';

export class InventoryPage extends BasePage {

    // Declare the locators for the elements on the Inventory page
    readonly productsTitle: Locator;
    readonly shoppingCartBadge: Locator;
    readonly shoppingCartLink: Locator;
    readonly sortDropdown: Locator;
    readonly inventoryItems: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;

    // Initialize the locators in the constructor

    constructor(page: Page) {
        super(page);
        this.productsTitle = page.locator('.title');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.inventoryItems = page.locator('.inventory_item');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');
    }

    //verify that the user is on the Inventory page by checking the title
    async verifyInventoryPage() {
        await expect(this.productsTitle).toHaveText('Products');
    }

    //Add the product to the cart by clicking the "Add to Cart" button
    async addProductToCart(productId: string) {
        const product = this.page.locator(`.inventory_item`).filter({
            hasText: productId
        });
        await product.getByRole('button', {name: 'Add to cart'}).click();
    }

    // Open the shopping cart by clicking the shopping cart link
    async openCart() {
        await this.shoppingCartLink.click();
    }

    //Get cart count by checking the shopping cart badge
    async getCartCount() {
        const count = await this.shoppingCartBadge.textContent();
        return Number(count);
    }

    //Remove product from cart

    async removeProductFromCart(productName : string){
        const product = this.page.locator('.inventory_item').filter({
            hasText : productName
        });
        await product.getByRole('button', {
            name : 'Remove'
        }).click();
    }

    // Verify Product name

    async isProductVisible(productName : string){
        return await this.page.locator('.inventory_item_name').filter({hasText : productName}).isVisible();
    }

    //verify sorting

    async selectSortOption(option : string){
        await this.sortDropdown.selectOption({label : option});
    }

    // Get product count

    async getProductCount(){
        return await this.inventoryItems.count();
    }

    async getProductNames() : Promise<string[]>{
        return await this.productNames.allTextContents();
    }

    async getProductPrices() : Promise<string[]>{
        return await this.productPrices.allTextContents();
    }

    // Verify whether the cart badge is visible
    async isCartBadgeVisible(){
        return await this.shoppingCartBadge.isVisible();
    }
}