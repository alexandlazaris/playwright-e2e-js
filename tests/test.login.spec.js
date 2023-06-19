import { test, expect } from '@playwright/test';
import homePage from '../selectors/homePage';
import landingPage from '../selectors/landingPage';

test('instagram - login', async ({ page }) => {
    // proceed to login
    await page.goto('https://instagram.com/');
    await expect(page.locator(homePage.input_username)).toBeVisible();
    await expect(page.locator(homePage.input_password)).toBeVisible();
    await page.fill(homePage.input_username, process.env.USERNAME);
    await page.fill(homePage.input_password, process.env.PASSWORD);
    await page.getByRole('button', { name: 'Log in', exact: true}).click();
    // wait for login transition to be complete
    await page.waitForURL('https://www.instagram.com/accounts/onetap/?next=%2F');
    await page.getByRole('button', { name: 'Not Now', exact: true}).click();
    await expect(page.locator(landingPage.tab_profile)).toBeVisible();
    // take screenshot
    await page.waitForSelector(landingPage.tab_profile);
    let mask_locator  = await page.locator(landingPage.tab_profile);
    await page.screenshot({path: "screenshots/screenshot-maskedLoggedIn.png", mask:[mask_locator]});
});

test('instagram - login + logout', async ({ page }) => {
    // proceed to login
    await page.goto('https://instagram.com/');
    await expect(page.locator(homePage.input_username)).toBeVisible();
    await expect(page.locator(homePage.input_password)).toBeVisible();
    await page.fill(homePage.input_username, process.env.USERNAME);
    await page.fill(homePage.input_password, process.env.PASSWORD);
    await page.getByRole('button', { name: 'Log in', exact: true}).click();
    // wait for login transition to be complete
    await page.waitForURL('https://www.instagram.com/accounts/onetap/?next=%2F');
    await page.getByRole('button', { name: 'Not Now', exact: true}).click();
    await expect(page.locator(landingPage.tab_profile)).toBeVisible();
    // proceed to logout
    await page.click(landingPage.settings_icon);
    await page.getByText("Log out").click();
    // confirm logout
    await expect(page.locator(homePage.input_username)).toBeVisible();
    await page.screenshot({path: "screenshots/screenshot-loggedOut.png"});
});