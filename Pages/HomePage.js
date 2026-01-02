class HomePage {
    constructor (page){
        this.page = page;
        this.contactbutton = page.locator('[href="/#contact"]')
        this.nameInput =  page.locator('#name');
        this.emailInput = page.locator('#email');
        this.phoneInput = page.locator('#phone');
        this.subjectInput = page.locator('#subject');
        this.messageInput = page.locator('#description');
        this.submitButton = page.getByRole('button', { name: 'Submit' });

        this.successHeader = page.locator('.contact h2');
    }

    async navigate(){
        await this.page.goto('https://automationintesting.online/');
    }

    async fillContactForm(name, email, phone, subject, message){
        await this.contactbutton.click();
        await this.nameInput.fill (name);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.subjectInput.fill(subject);
        await this.messageInput.fill(message);
        await this.submitButton.click();

    }
}
module.exports = {HomePage};