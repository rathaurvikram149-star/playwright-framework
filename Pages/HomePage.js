class HomePage {
    constructor (page){
        // form locators 
        this.page = page;
        this.contactbutton = page.locator('[href="/#contact"]')
        this.nameInput =  page.locator('#name');
        this.emailInput = page.locator('#email');
        this.phoneInput = page.locator('#phone');
        this.subjectInput = page.locator('#subject');
        this.messageInput = page.locator('#description');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.successHeader = page.locator('.contact h2');
        this.bookThisRoomButton = page.locator('a[href^="/reservation/1"]')
        this.firstNameBooking = page.locator('input[name="firstname"]');
        this.lastNameBooking = page.locator('input[name="lastname"]');
        this.emailBooking = page.locator('input[name="email"]')
        this.phoneBooking = page.locator('input[name="phone"]')
        this.bookConfirmButton = page.getByRole('button', { name: 'Book', exact: true });
        // this.successMessage = page.getByText('Booking Confirmed');
        this.reserveNow = page.locator('#doReservation')
        this.breserveNow = page.getByRole('button', { name: 'Reserve Now' });
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

    async selectDates() {
        const startDay = this.page.getByText('20').first();
        const endDay = this.page.getByText('22').first();
        await startDay.dragTo(endDay);
    }

    async submitBooking(first, last, email, phone) {
        await this.reserveNow.click();
        await this.firstNameBooking.fill(first);
        await this.lastNameBooking.fill(last);
        await this.emailBooking.fill(email);
        await this.phoneBooking.fill(phone);
        await this.breserveNow.click();
    }

    async openBookingCalendar() {
        await this.bookThisRoomButton.click();
    }

}





module.exports = {HomePage};