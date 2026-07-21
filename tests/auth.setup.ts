import {test as setup, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
// import users from '../test-data/users.json';
import {ENV} from '../utils/env';

setup('Authenticate User', async({page})=>{
    const loginPage = new LoginPage(page);

    console.log('BASE_URL:', ENV.BASE_URL);
    console.log('USERNAME:', ENV.USERNAME);
    console.log('PASSWORD:', ENV.PASSWORD);

    await loginPage.navigateTo('/');

    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    await page.context().storageState({path :'playwright/.auth/user.json'});
})