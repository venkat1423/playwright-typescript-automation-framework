import {test as base, expect} from '@playwright/test';

import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import {CheckoutFlow} from '../flows/CheckoutFlow';

type PageFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    checkoutFlow: CheckoutFlow;
};

export const test = base.extend<PageFixtures>({

    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({page}, use) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.navigateTo('/inventory.html');
        await use(inventoryPage);
    },

    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({page}, use) => {
        await use(new CheckoutPage(page));
    },

    checkoutFlow: async({inventoryPage, cartPage, checkoutPage}, use)=>{
        const checkoutFlow = new CheckoutFlow(inventoryPage, cartPage, checkoutPage);
        await use(checkoutFlow);
    }
})

export {expect};