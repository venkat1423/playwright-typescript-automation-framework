/* import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import users from '../test-data/users.json';
import {Constants} from '../utils/Constants';

//verify user can add a product to the cart
test('Verify user can add a backpack to the cart', async ({page}) => {

    //create objects of login and inventory pages
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigateTo('/');

    //login with valid credentials
    await loginPage.login(users.validUser.username, users.validUser.password);

    //verify that the user is on the Inventory page
    await expect(inventoryPage.productsTitle).toHaveText(Constants.INVENTORY_TITLE);

    //add product to the cart
    await inventoryPage.addProductToCart(Constants.PRODUCT_NAME);

    //verify cart badge count
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('1');
}); */

/* import {test, expect} from '../fixtures/baseFixtures';
import users from '../test-data/users.json';
import {Constants} from '../utils/Constants';

test('Verify user can add a backpack to the cart', async ({loginPage, inventoryPage}) => {
    await loginPage.navigateTo('/');

    //login with valid credentials
    await loginPage.login(users.validUser.username, users.validUser.password);

    //verify that the user is on the Inventory page
    await expect(inventoryPage.productsTitle).toHaveText(Constants.INVENTORY_TITLE);

    //add product to the cart
    await inventoryPage.addProductToCart(Constants.PRODUCT_NAME);

    //verify cart badge count
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('1');
}) */

import { test, expect } from '../fixtures/baseFixtures';
import { InventoryPage } from '../pages/InventoryPage';
import { Constants } from '../utils/Constants';
import {Helper} from '../utils/Helper';

test.describe('Inventory Module', () => {
    
    test('Verify Inventory page @regression', async({inventoryPage})=>{
        await inventoryPage.verifyInventoryPage();
    });

    test('Verify all products are displayed', async({inventoryPage})=>{
        await inventoryPage.verifyInventoryPage();
        expect(await inventoryPage.getProductCount()).toBe(Constants.TOTAL_PRODUCTS);
    });

    test('Verify all products names @regression', async({inventoryPage})=>{
        await inventoryPage.verifyInventoryPage();
        const actualProductNames = await inventoryPage.getProductNames();

        expect(actualProductNames).toEqual(Constants.PRODUCT_NAMES)
    });

    test('Verify Products sorted A to Z @regression', async({inventoryPage})=>{
        await inventoryPage.verifyInventoryPage();

        // Select A to Z sorting
        await inventoryPage.selectSortOption(Constants.SORT_NAME_ASC);

        // Get Product Names after sorting
        const actualProducts = await inventoryPage.getProductNames();

        // Create a sorted copy
        const expectedProducts = [...actualProducts].sort();

        // Compare
        expect(actualProducts).toEqual(expectedProducts);
        
    });

    test('Verify Products sorted Z to A @regression', async({inventoryPage})=>{
        await inventoryPage.verifyInventoryPage();

        // Select Z to A sorting
        await inventoryPage.selectSortOption(Constants.SORT_NAME_DESC);

        // Get Products names after sorting
        const actualProducts = await inventoryPage.getProductNames();

        // Create sort copy
        const expectedProducts = [...actualProducts].sort().reverse();

        // Compare
        expect(actualProducts).toEqual(expectedProducts);
    });

    test('Verify products are sorted Price Low to High', async({inventoryPage})=>{

        // Verify that the Inventory page has loaded successfully
        await inventoryPage.verifyInventoryPage();

        // Select the "Price (low to high)" option from the sorting dropdown
        await inventoryPage.selectSortOption(Constants.SORT_PRICE_LOW_HIGH);

        // Retrieve all product prices displayed on the page
    // Example: ["$29.99", "$9.99", "$15.99", "$49.99"]
        const prices = await inventoryPage.getProductPrices();

        // Convert the string prices into numbers
    // Example: [29.99, 9.99, 15.99, 49.99]
        const actualPrices = Helper.convertPriceToNumbers(prices);

        // Create the expected sorted list in ascending order
        const expectedPrices = Helper.sortAscending(actualPrices);

        // Compare the prices displayed in the UI with the correctly sorted prices
        expect(actualPrices).toEqual(expectedPrices);
    });

    test('Verify products are sorted Price High to Low', async({inventoryPage})=>{

        // Verify that the Inventory page has loaded successfully
        await inventoryPage.verifyInventoryPage();

        // Select the "Price (high to low)" option from the sorting dropdown
        await inventoryPage.selectSortOption(Constants.SORT_PRICE_HIGH_LOW);

        // Retrive all products prices displayed on page
        const prices = await inventoryPage.getProductPrices();

        // Convert string prices to numeric values
        const actualPrices = Helper.convertPriceToNumbers(prices);

        // Create the expected descending order
        const expectedPrices = Helper.sortDescending(actualPrices);

        //Veify that the UI prices match the expected descending order
        expect(actualPrices).toEqual(expectedPrices);
    });

    test('Verify user can add a backpack to the cart @smoke @regression ', async ({ inventoryPage }) => {

        // verify that the user is on the Inventory page
        await inventoryPage.verifyInventoryPage();

        // add product to the cart
        await inventoryPage.addProductToCart(Constants.PRODUCT_NAME);

        // verify cart badge count
        await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
    });

    test('Verify user can add multiple products to the cart @regression', async({inventoryPage})=>{
        
        // Verify that inventory page has loaded successfully
        await inventoryPage.verifyInventoryPage();

        // Create a list of products to add to cart
        const products = [
            Constants.BACKPACK,
            Constants.BIKE_LIGHT,
            Constants.BOLT_TSHIRT
        ];

        // Add each product to the cart
        // This loop prevents duplication code and makes it easy to add more products later
        for(const product of products){
            await inventoryPage.addProductToCart(product);
        }

        // Verify that cart badge displays the correct number of added products
        expect(await inventoryPage.getCartCount()).toBe(products.length);
    });

    test('Verify user can remove a product from the cart', async({inventoryPage})=>{
        
        // Verify that inventory page has loaded successfully
        await inventoryPage.verifyInventoryPage();

        // Add one product to the cart
        await inventoryPage.addProductToCart(Constants.BACKPACK);

        // Verify cart badge shows one item
        expect(await inventoryPage.getCartCount()).toBe(1);

        // Remove same product from the cart
        await inventoryPage.removeProductFromCart(Constants.BACKPACK);

        // Verify that cart badge is no longer displayed
        expect(await inventoryPage.isCartBadgeVisible()).toBeFalsy();
    })

});


