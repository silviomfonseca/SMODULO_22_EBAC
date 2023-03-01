/// <references types="cypress" />

const faker = require('faker-br')
const { loginPage, dashboardPage } = require('../support/pages')

describe('Cadastro no site EBAC-SHOP', () => {
    beforeEach(() => {
        cy.visit('my-account/')
    });

    it('Deve realizar cadastro do usuário ebac', () => {

        let email = faker.internet.email()
        let pass = faker.internet.password()

        loginPage.register(email, pass)

        dashboardPage.siteName.should('be.visible');
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()

    });
});