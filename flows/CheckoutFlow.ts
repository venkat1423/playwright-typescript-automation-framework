import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import { Constants } from '../utils/Constants';
import checkoutData from '../test-data/checkoutData.json';

export class CheckoutFlow {

    constructor(
        private inventoryPage : InventoryPage,
        private cartPage : CartPage,
        private checkoutPage : CheckoutPage
    ){}

    // Navigate checkout overview page fron inventory page
    async navigateToCheckoutOverviewPage(){
        // verify inventory page
        await this.inventoryPage.verifyInventoryPage();

        // Add product to cart
        await this.inventoryPage.addProductToCart(Constants.PRODUCT_NAME);

        // Open cart
        await this.inventoryPage.openCart();

        // Verify cart page
        await this.cartPage.verifyCartPage();

        // Click Checkout
        await this.cartPage.clickCheckout();

        // Verify checkout information page
        await this.checkoutPage.verifyCheckoutInformationPage();

        // Enter inventory information
        await this.checkoutPage.enterCheckoutInformation(
            checkoutData.validCheckout.firstName,
            checkoutData.validCheckout.lastName,
            checkoutData.validCheckout.postalCode
        );

        // Click continue
        await this.checkoutPage.clickContinue();

        // Verify checkout overview page
        await this.checkoutPage.verifyCheckoutOverviewPage();

    }
}