/// <reference types="cypress" />


const faker = require("faker-br");
const { dashboardPage } = require('../support/pages/dashboard.page')
const data = require('../fixtures/data.json')


describe('Checkout', () => {
    beforeEach(() => {
      
    });
    it('login', () => {   
              
        cy.login(data.email, data.senha)   
        
    });

    it('chekout', () => {       
        cy.checkout()
        dashboardPage.siteName.should('be.visible');
       
        
    });
});