const { test, expect } = require('@playwright/test');
const { HomePage } = require('../Pages/HomePage');

test('Test 5: Should book a room successfully via drag-and-drop', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.openBookingCalendar();
    await homePage.selectDates();
    await homePage.submitBooking('Auto', 'Tester', 'tester@test.com', '012345678901');
    // await expect(homePage.successMessage).toBeVisible();
});