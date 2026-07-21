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

});