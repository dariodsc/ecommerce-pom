var BasePage = require('./basepage')
const { By } = require('selenium-webdriver')

class LoginPage extends BasePage {
    fieldLogin = By.id('email')
    fieldPassword = By.id('password')
    loginButton = By.id('submit')
    createUser = By.id('signup')
    //errorElement = By.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3')

    async fillCredentials(email, password, signup) {
        await this.enterText(this.fieldLogin, email)
        await this.enterText(this.fieldPassword, password)
        //await this.enterText(this.createUser, signup)
    }

    async clickLogin() {
        await this.mouseClick(this.loginButton)
        
    }


    async clickCreate() {
        await this.mouseClick(this.createUser)
    }

    async verifyErrorMessage() {
        let errorMessage;
        errorMessage = await this.getElementText(errorElement);
        return errorMessage;
    }
}
module.exports = new LoginPage();