/// <reference types="cypress" />

/*email : "dariaaa.tkachuk+User1@gmail.com";
password: "Testerauto123";*/

import HomePage from "../../page-objects/pages/HomePage";
import SignInForm from "../../page-objects/forms/SignInForm";

describe('Login without POM', () => {
    const selectors = {
        emailField: '#signinEmail',
        passwordField: '#signinPassword',
        loginButton: '.modal-content .btn-primary', 
    }

    beforeEach(() => {
        cy.visit('/');
        cy.contains('Sign In').click();
    })

    it('Success Sign In', () => {
        cy.get(selectors.emailField).type('dariaaa.tkachuk+User1@gmail.com');
        cy.get(selectors.passwordField).type('Testerauto123');
        cy.get(selectors.loginButton).click();
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
    });
})

describe.only('Login with POM', () => {
    beforeEach(() => {
        HomePage.openPage();
        HomePage.openSignInForm();
    })

    it('Success Sign In', () => {
        // Use credentials 
        const userEmail = Cypress.env('userEmail');
        const userPassword = Cypress.env('userPassword');
        const linkGarage = Cypress.env ('linkGarage');
    
        
        SignInForm.loginWithCredentials(userEmail, userPassword);
        cy.url().should('eq', linkGarage);
    });
})