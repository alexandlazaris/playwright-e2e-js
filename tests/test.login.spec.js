import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';
import { InventoryPage } from '../pageObjects/inventoryPage';


test('successfully login to see shopping cart', async ({ page }) => {
    // arrange
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    // act
    await page.goto('/');
    await login.login(process.env.USERNAME, process.env.PASSWORD);
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    // assert
    await expect(inventory.cartContainer).toBeVisible()
});

test('successfully login and logout', async ({ page }) => {
    // arrange
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    // act
    await page.goto('/');
    await login.login(process.env.USERNAME, process.env.PASSWORD);
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await inventory.openMenuAndLogout();
    // assert
    await expect(page.url()).toEqual(process.env.BASE_URL)
});