class LoginPage{
    // The Constructor: This sets up the "blueprint"
    constructor(page){
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginbutton = page.locator('#doLogin');
        this.errorMessage = page.locator('.alert alert-danger')
    }

    async logintoAdmin(user, pass){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginbutton.click();
    }
}

module.exports = {LoginPage}