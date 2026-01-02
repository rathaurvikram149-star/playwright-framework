const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../Pages/LoginPage');

test('Test 1: ADMIN SHOULD LOGIN WITH VALID CREDENTIALS', async ({page}) => {
    // creating instance of our page object
    const loginPage = new LoginPage(page);
    await page.goto('/admin');
    await loginPage.logintoAdmin('admin','password');
    const logoutLink = page.getByRole('Link',{name:'Logout'});
    await expect(logoutLink).toBeVisible;
})

test ('Test 2 : Admin login with invalid credentials', async ({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto('/admin');
    await loginPage.logintoAdmin('test', 'test');
    const logout = page.locator('.alert alert-danger');
    await expect(logout).toBeVisible
})