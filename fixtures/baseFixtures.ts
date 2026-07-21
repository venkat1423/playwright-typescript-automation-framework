import {test as base, expect} from '@playwright/test';

import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';

type PageFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
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
    }
})

export {expect};