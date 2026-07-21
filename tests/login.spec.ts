/* import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import users from '../test-data/users.json';

test('valid login', async ({page}) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('/');
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

}); */

import {test, expect} from '../fixtures/baseFixtures';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';
import { Constants } from '../utils/Constants';
import {ENV} from '../utils/env';
import {invalidLoginScenarios} from '../test-data/loginTestData';

test.describe('Login Module', ()=>{

test('Valid login @smoke @sanity @regression', async ({loginPage, page}) => {
    await loginPage.navigateTo('/');
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);
    await expect(page).toHaveURL('/inventory.html');
});
/* 
test('Invalid Username @regression', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('/');
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
  //  expect(await loginPage.getErrorMessage()).toContain(Constants.INVALID_CREDENTAILS);
  await loginPage.verifyErrorMessage(Constants.INVALID_CREDENTAILS);
});

test('Invalid Password @regression', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('/');
    await loginPage.login(users.invalidPassword.username, users.invalidPassword.password);
   // expect(await loginPage.getErrorMessage()).toContain(Constants.INVALID_CREDENTAILS);
   await loginPage.verifyErrorMessage(Constants.INVALID_CREDENTAILS);
})

test('Locked User @regression', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('/');
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);
    await loginPage.verifyErrorMessage(Constants.LOCKED_USER);
})
 */

for(const scenario of invalidLoginScenarios){
    test(scenario.testName, async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('/');
        await loginPage.login(scenario.username, scenario.password);
        await loginPage.verifyErrorMessage(scenario.expectedError);
    })
}
});