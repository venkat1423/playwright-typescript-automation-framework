/* import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import users from '../test-data/users.json';
import checkoutData from '../test-data/checkoutData.json';
import {Constants} from '../utils/Constants';

test('Verify user can complete checkout process', async ({page}) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // open website
    await loginPage.navigateTo('/');

    // login
    await loginPage.login(users.validUser.username, users.validUser.password);

    // verify that the user is on the Inventory page
    await expect(inventoryPage.productsTitle).toHaveText(Constants.INVENTORY_TITLE);

    // add product to the cart
    await inventoryPage.addProductToCart(Constants.PRODUCT_NAME);

    // verify cart badge count
    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');

    // open the cart
    await inventoryPage.openCart();

    // verify that the user is on the Cart page
    await expect(cartPage.cartTitle).toHaveText(Constants.CART_TITLE);

    // verify that the backpack is in the cart
    await expect(cartPage.productName).toHaveText(Constants.PRODUCT_NAME);
    await expect(cartPage.productPrice).toHaveText(Constants.PRODUCT_PRICE);

    // click checkout
    await cartPage.clickCheckout();

    // verify that the user is on the Checkout page
    await expect(checkoutPage.checkoutTitle).toHaveText(Constants.CHECKOUT_TITLE);

    // enter checkout information
    await checkoutPage.enterCheckoutInformation(
        checkoutData.validCheckout.firstName,
        checkoutData.validCheckout.lastName,
        checkoutData.validCheckout.postalCode
    );

    // click continue
    await checkoutPage.clickContinue();

    // verify that the user is on the Checkout Overview page
    await expect(checkoutPage.overviewTitle).toHaveText(Constants.CHECKOUT_OVERVIEW_TITLE);

    // click finish
    await checkoutPage.clickFinish();

    // verify that the user is on the Checkout Complete page
    await expect(checkoutPage.completeHeader).toHaveText(Constants.SUCCESS_HEADER);
    await expect(checkoutPage.completeMessage).toContainText(Constants.SUCCESS_MESSAGE);

    // click back home
    await checkoutPage.clickBackHome();

    await expect(inventoryPage.productsTitle).toHaveText(Constants.INVENTORY_TITLE);
}) */

import { checkPrime } from 'node:crypto';
import {test, expect} from '../fixtures/baseFixtures';
import checkoutData from '../test-data/checkoutData.json';
import {Constants} from '../utils/Constants';

test.describe('Checkout Module', ()=>{

test('Verify user can complete checkout process @smoke @regression', async ({inventoryPage, cartPage, checkoutPage}) => {

    // verify that the user is on the Inventory page
    await expect(inventoryPage.productsTitle).toHaveText(Constants.INVENTORY_TITLE);

    // add product to the cart
    await inventoryPage.addProductToCart(Constants.PRODUCT_NAME);

    // verify cart badge count
    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');

    // open the cart
    await inventoryPage.openCart();

    // verify that the user is on the Cart page
    await expect(cartPage.cartTitle).toHaveText(Constants.CART_TITLE);

    // verify that the product is in the cart
    await expect(cartPage.productName).toHaveText(Constants.PRODUCT_NAME);
    await expect(cartPage.productPrice).toHaveText(Constants.PRODUCT_PRICE);

    // click checkout
    await cartPage.clickCheckout();

    // verify that the user is on the Checkout page
    await expect(checkoutPage.checkoutTitle).toHaveText(Constants.CHECKOUT_INFORMATION_TITLE);

    // enter checkout information
    await checkoutPage.enterCheckoutInformation(
        checkoutData.validCheckout.firstName,
        checkoutData.validCheckout.lastName,
        checkoutData.validCheckout.postalCode
    );

    // click continue
    await checkoutPage.clickContinue();

    // verify that the user is on the Checkout Overview page
    await expect(checkoutPage.overviewTitle).toHaveText(Constants.CHECKOUT_OVERVIEW_TITLE);

    // click finish
    await checkoutPage.clickFinish();

    // verify that the user is on the Checkout Complete page
    await expect(checkoutPage.completeHeader).toHaveText(Constants.SUCCESS_HEADER);
    await expect(checkoutPage.completeMessage).toContainText(Constants.SUCCESS_MESSAGE);

    // click back home
    await checkoutPage.clickBackHome();

    // verify that the user is on the Inventory page
    await expect(inventoryPage.productsTitle).toHaveText(Constants.INVENTORY_TITLE);
});

test('Verify user can enter valid checkout information @regression @smoke', async({inventoryPage, cartPage, checkoutPage})=>{
    // Verify inventory page is displayed
    await inventoryPage.verifyInventoryPage();

    // Add product to cart
    await inventoryPage.addProductToCart(Constants.BACKPACK);

    // Open cart page
    await inventoryPage.openCart();

    // Verify user is on the cart page
    await cartPage.verifyCartPage();

    // Click Checkout
    await cartPage.clickCheckout();

    // Verify checkout information page is displayed
    await checkoutPage.verifyCheckoutInformationPage();

    // Enter valid checkout information

    await checkoutPage.enterCheckoutInformation(
        checkoutData.validCheckout.firstName,
        checkoutData.validCheckout.lastName,
        checkoutData.validCheckout.postalCode
    );

    // Verify entered checkout information

    await checkoutPage.verifyCheckoutInformation(
        checkoutData.validCheckout.firstName,
        checkoutData.validCheckout.lastName,
        checkoutData.validCheckout.postalCode
    )
});

test('Verify firstname is mandatory @regression', async({inventoryPage, cartPage, checkoutPage})=>{
    // Verify inventory page is displayed
    await inventoryPage.verifyInventoryPage();

    // Add product to cart
    await inventoryPage.addProductToCart(Constants.BACKPACK);

    // Open cart
    await inventoryPage.openCart();

    // Verify cart page
    await cartPage.verifyCartPage();

    // Click checkout
    await cartPage.clickCheckout();

    // Verify checkout information page
    await checkoutPage.verifyCheckoutInformationPage();

    // Enter check information without firstname
    await checkoutPage.enterCheckoutInformation('', checkoutData.validCheckout.lastName, checkoutData.validCheckout.postalCode);

    // Click continue
    await checkoutPage.clickContinue();

    // Verify validation message
    await checkoutPage.verifyErrorMessage(Constants.FIRST_NAME_REQUIRED);
});

test('Verify lastname is mandaotry', async({inventoryPage, cartPage, checkoutPage})=>{
    // Verify inventory page is displayed
    await inventoryPage.verifyInventoryPage();

    // Add product to cart
    await inventoryPage.addProductToCart(Constants.BACKPACK);

    // Open Cart
    await inventoryPage.openCart();

    // Verify cart page displayed
    await cartPage.verifyCartPage();

    // Click checkout
    await cartPage.clickCheckout();

    // Verify checkout information page is displayed
    await checkoutPage.verifyCheckoutInformationPage();

    // Enter checkout information without lastname
    await checkoutPage.enterCheckoutInformation(checkoutData.validCheckout.firstName,'',checkoutData.validCheckout.postalCode);

    // Click continue
    await checkoutPage.clickContinue();

    // Verify validation message
    await checkoutPage.verifyErrorMessage(Constants.LAST_NAME_REQUIRED);
});

test('Verify postalcode is mandatory', async({inventoryPage, cartPage, checkoutPage})=>{
    // Verify inventory page displayed
    await inventoryPage.verifyInventoryPage();

    // Add product to cart
    await inventoryPage.addProductToCart(Constants.BACKPACK);

    // Open cart
    await inventoryPage.openCart();

    // Verify cart displayed
    await cartPage.verifyCartPage();

    // Click checkout
    await cartPage.clickCheckout();

    // Verify checkout information page displayed
    await checkoutPage.verifyCheckoutInformationPage();

    // Enter checkout information page without postalcode
    await checkoutPage.enterCheckoutInformation(checkoutData.validCheckout.firstName, checkoutData.validCheckout.lastName,'');

    // Click continue
    await checkoutPage.clickContinue();

    // Verify checkout validation message
    await checkoutPage.verifyErrorMessage(Constants.POSTAL_CODE_REQUIRED);
});

test('Verify cancel button navigates back to cart @regression', async({inventoryPage, cartPage, checkoutPage})=>{
    // Verify inventory page is displayed
    await inventoryPage.verifyInventoryPage();

    // Add product to cart
    await inventoryPage.addProductToCart(Constants.BACKPACK);

    // Open cart
    await inventoryPage.openCart();

    // Verify cart page displayed
    await cartPage.verifyCartPage();

    // Click checkout
    await cartPage.clickCheckout();

    // Verify checkout information page displayed
    await checkoutPage.verifyCheckoutInformationPage();

    // Click cancel
    await checkoutPage.clickCancel();

    // Verify cancel button navigates back to cart page
    await cartPage.verifyCartPage();
});

test('Verify successful navigation to checkout overview @regression', async({inventoryPage, cartPage, checkoutPage})=>{
    // Verify inventory page is displayed
    await inventoryPage.verifyInventoryPage();

    // Add product to cart
    await inventoryPage.addProductToCart(Constants.BACKPACK);

    // Open cart
    await inventoryPage.openCart();

    // Verify cart page displayed
    await cartPage.verifyCartPage();

    // Click checkout
    await cartPage.clickCheckout();

    // Verify checout information page displayed
    await checkoutPage.verifyCheckoutInformationPage();

    // Enter valid checkout information
    await checkoutPage.enterCheckoutInformation(checkoutData.validCheckout.firstName, checkoutData.validCheckout.lastName, checkoutData.validCheckout.postalCode);

    // Click continue
    await checkoutPage.clickContinue();

    // Verify checkout overview page displayed
    await checkoutPage.verifyCheckoutOverviewPage();
});

test('verify product details on checkout overview page @regression', async({inventoryPage, cartPage, checkoutPage})=>{
    // Verify inventory page is displayed
    await inventoryPage.verifyInventoryPage();

    // Add product to cart
    await inventoryPage.addProductToCart(Constants.BACKPACK);

    // Open cart
    await inventoryPage.openCart();

    // Verify cart displayed
    await cartPage.verifyCartPage();

    // Click checkout
    await cartPage.clickCheckout();

    // Verify checkout information page is displayed
    await checkoutPage.verifyCheckoutInformationPage();

    // Enter checkout information
    await checkoutPage.enterCheckoutInformation(
        checkoutData.validCheckout.firstName,
        checkoutData.validCheckout.lastName,
        checkoutData.validCheckout.postalCode
    );

    // Click continue
    await checkoutPage.clickContinue();

    // Verify checkout overview page displayed
    await checkoutPage.verifyCheckoutOverviewPage();

    // Verify product details
    await checkoutPage.verifyProductOnOverview(Constants.PRODUCT_NAME, Constants.PRODUCT_PRICE)
});

test('Verify payment information on checkout overview @regression', async({inventoryPage, cartPage, checkoutPage})=>{
    // Verify that the inventory page is displayed
    await inventoryPage.verifyInventoryPage();

    // Add product to cart
    await inventoryPage.addProductToCart(Constants.BACKPACK);

    // Open cart
    await inventoryPage.openCart();

    // Verify cart page displayed
    await cartPage.verifyCartPage();

    // Click checkout
    await cartPage.clickCheckout();

    // Verify checkout information page displayed
    await checkoutPage.verifyCheckoutInformationPage();

    // Enter checkout information page
    await checkoutPage.enterCheckoutInformation(
        checkoutData.validCheckout.firstName,
        checkoutData.validCheckout.lastName,
        checkoutData.validCheckout.postalCode
    );

    // Click continue
    await checkoutPage.clickContinue();

    // Verify checkout overview page
    await checkoutPage.verifyCheckoutOverviewPage();

    // Verify payment information
    await checkoutPage.verifyPaymentInformation(Constants.PAYMENT_INFORMATION_VALUE);
});

test('Verify shipping information on checkout overview', async({inventoryPage, cartPage, checkoutPage})=>{
    // Verify Invenotry page is displayed
    await inventoryPage.verifyInventoryPage();

    // Add product to cart
    await inventoryPage.addProductToCart(Constants.BACKPACK);

    // Open Cart
    await inventoryPage.openCart();

    // Verify cart is displayed
    await cartPage.verifyCartPage();

    // Click checkout
    await cartPage.clickCheckout();

    // Verify checkout information page displayed
    await checkoutPage.verifyCheckoutInformationPage();

    // Enter checkout information
    await checkoutPage.enterCheckoutInformation(
        checkoutData.validCheckout.firstName,
        checkoutData.validCheckout.lastName,
        checkoutData.validCheckout.postalCode
    );

    // Click Continue
    await checkoutPage.clickContinue();

    // Verify checkout overview page displayed
    await checkoutPage.verifyCheckoutOverviewPage();

    // Verify shipping information
    await checkoutPage.verifyShippingInformation(Constants.SHIPPING_INFORMATION_VALUE);
});

});