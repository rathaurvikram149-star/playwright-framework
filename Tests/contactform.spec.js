const {test,expect} = require('@playwright/test');
const {HomePage} = require ('../Pages/HomePage');


test('Test 3: should submit contact form succesfully', async ({page})=>{
    const homePage = new HomePage(page);
    await homePage.navigate();

    await homePage.fillContactForm(
        'John Doe',
        'john@yopmail.com',
        '1234567890',
        'Booking Inquiry',
        'I would like to book a room for next week.'
    );
     await expect(homePage.successHeader).toContainText('Thanks for getting in touch John Doe')

})
test('Test 4: Should show error for invalid email format', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    await homePage.fillContactForm(
        'John Doe', 
        'invalid-email', 
        '123456789012', 
        'Inquiry', 
        'Testing email validation logic.'
    );
    const errorMessage = page.locator('.alert-danger');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('must be a well-formed email');
});