/* import {test, expect} from '@playwright/test';
import {InventoryPage} from '../pages/InventoryPage';
import {LoginPage} from '../pages/LoginPage';
import {CartPage} from '../pages/CartPage';
import users from '../test-data/users.json';
import {Constants} from '../utils/Constants';

test('Verify user can navigate to cart after adding a backpack to the cart', async ({page}) => {
  
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

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
});
 */

import {test, expect} from '../fixtures/baseFixtures';
import {Constants} from '../utils/Constants';

test.describe('Cart Module', ()=>{

test('Verify user can navigate to cart after adding a backpack to the cart @smoke @regression', async ({inventoryPage, cartPage}) => {

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

});

test('Verify multiple products are displayed in the cart @regression', async({inventoryPage, cartPage})=>{

    // Verify that Inventory page loaded successfully
    await inventoryPage.verifyInventoryPage();

    // Create a list of products to add to the cart
    const products = [
        Constants.BACKPACK,
        Constants.BIKE_LIGHT,
        Constants.BOLT_TSHIRT
    ];

    // Add each product to the cart
    // Using a loops avoids duplicate code and makes the test scalable

    for(const product of products){
        await inventoryPage.addProductToCart(product);
    }

    // Navigate to cart page
    await inventoryPage.openCart();

    // Verify that cart page loaded successfully
    await cartPage.verifyCartPage();

    // Verify each selected product is displayed on the cart page
    for(const product of products){
        await cartPage.verifyProductInCart(product);
    }
});

test('Verify user can remove product from the cart @regression', async({inventoryPage, cartPage})=>{
    // Verify that inventory page has loaded successfully
    await inventoryPage.verifyInventoryPage();

    // Add a product to the cart
    await inventoryPage.addProductToCart(Constants.BACKPACK);

    // Navigate to the cart page
    await inventoryPage.openCart();

    // Verify that cart is opened
    await cartPage.verifyCartPage();

    // Verify that product exists before removing it
    await cartPage.verifyProductInCart(Constants.BACKPACK);

    // Remove the product
    await cartPage.removeProductFromCart(Constants.BACKPACK);

    // Verify that the product is no longer displayed
    await cartPage.verifyProductNotInCart(Constants.BACKPACK);
});

});