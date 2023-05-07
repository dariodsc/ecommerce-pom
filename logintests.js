var LoginPage = require('../pages/loginpage')
var HomePage = require('../pages/homepage')
const assert = require("chai").assert

describe('Login Tests', function () {

    beforeEach(async function () {
        url = 'https://thinking-tester-contact-list.herokuapp.com/';
        await LoginPage.goTo(url);
    });

    after(async function () {
        await LoginPage.closeWindow();
    });

    it('Login Success', async function () {     // Teste de login bem sucedido
        await LoginPage.fillCredentials('dario.dario@outlook.com', 'flexpeak')
        await LoginPage.clickLogin();
        assert(HomePage.verifyText, 'Contact List') // Se o login for bem sucedido, irá buscar o texto dentro da pagina acessada
    });

    
    it('Password empty', async function () {    // Teste de senha em branco
        await LoginPage.fillCredentials('dario.dario@outlook.com', '')
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Incorrect username or password') // vai buscar o box com a mensagem
    });

    it('Username empty', async function () {    // Teste de usuário em branco
        await LoginPage.fillCredentials('', 'flexpeak');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Incorrect username or password') // vai buscar o box com a mensagem
    });

    it('Wrong password', async function () {    // Teste de senha errada
        await LoginPage.fillCredentials('dario.dario@outlook.com', '123456');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Incorrect username or password')
    });

    it('Wrong username', async function () {    // Teste de usuario errado
        await LoginPage.fillCredentials('melao@melao.com', 'secret_sauce');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Incorrect username or password')
    });

    it('User and password empty', async function () {    // Teste de usuario errado
        await LoginPage.fillCredentials('', '');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Incorrect username or password')
    });

    it('Create User', async function () {     // Teste de login bem sucedido
        await LoginPage.clickCreate();
        assert(HomePage.verifyText, 'Add User') // Se o login for bem sucedido, irá buscar o texto dentro da pagina acessada
    });

    
});