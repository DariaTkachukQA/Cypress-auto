/// <reference types="cypress" />

    const selectors = {
        signUpButton: '.hero-descriptor_btn.btn-primary',
        nameField: '#signupName',
        lastNameField: '#signupLastName',
        emailField: '#signupEmail',
        passswordField: '#signupPassword',
        reenterPasswordField: '#signupRepeatPassword',
        registerbutton: 'button[type="button"].btn.btn-primary',
    };

beforeEach(() => {
    cy.visit('/');
    cy.get(selectors.signUpButton).click();
});    

describe('Field Name', () => {

it('Empty field', () => {
    cy.get(selectors.nameField).click();
    cy.get(selectors.nameField).blur();
    cy.get('.invalid-feedback').should('have.text', 'Name required');
});

it('Wrong data', () => {
    cy.get(selectors.nameField).click();
    cy.get(selectors.nameField).type('1234');
    cy.get(selectors.nameField).blur();
    cy.get('.invalid-feedback p').eq(0).should('have.text', 'Name is invalid');
});

it('Wrong length', () => {
    cy.get(selectors.nameField).click();
    cy.get(selectors.nameField).type('1');
    cy.get(selectors.nameField).blur();
    cy.get('.invalid-feedback p').eq(0).should('have.text', 'Name is invalid');
    cy.get('.invalid-feedback p').eq(1).should('have.text', 'Name has to be from 2 to 20 characters long');
});

it('Border colour red', () => {
    cy.get(selectors.nameField).click();
    cy.get(selectors.nameField).type('1');
    cy.get(selectors.nameField).blur();
    cy.get(selectors.nameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
});
});

describe('Field Last Name', () => {

it('Empty field', () => {
    cy.get(selectors.lastNameField).click();
    cy.get(selectors.lastNameField).blur();
    cy.get('.invalid-feedback p').eq(0).should('have.text', 'Last name required');
});

it('Wrong data', () => {
    cy.get(selectors.lastNameField).click();
    cy.get(selectors.lastNameField).type('сонце');
    cy.get(selectors.lastNameField).blur();
    cy.get('.invalid-feedback p').eq(0).should('have.text', 'Last name is invalid');
});

it('Wrong length', () => {
    cy.get(selectors.lastNameField).click();
    cy.get(selectors.lastNameField).type('A');
    cy.get(selectors.lastNameField).blur();
    cy.get('.invalid-feedback p').eq(0).should('have.text', 'Last name has to be from 2 to 20 characters long');
});

it('Border colour red', () => {
    cy.get(selectors.nameField).click();
    cy.get(selectors.nameField).type('1');
    cy.get(selectors.nameField).blur();
    cy.get(selectors.nameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
});
});

describe('Field Email', () => {
   
it('Empty field', () => {
    cy.get(selectors.emailField).click();
    cy.get(selectors.emailField).blur();
    cy.get('.invalid-feedback p').eq(0).should('have.text', 'Email required');
});

it('Wrong data', () => {
    cy.get(selectors.emailField).click();
    cy.get(selectors.emailField).type('monday');
    cy.get(selectors.emailField).blur();
    cy.get('.invalid-feedback p').eq(0).should('have.text', 'Email is incorrect');
});

it('Border colour red', () => {
    cy.get(selectors.emailField).click();
    cy.get(selectors.emailField).type('1');
    cy.get(selectors.emailField).blur();
    cy.get(selectors.emailField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
});
});


describe('Password', () => {

it('Empty field', () => {
    cy.get(selectors.passswordField)
    .click()
    .blur()
    cy.get('.invalid-feedback p').eq(0).should('have.text', 'Password required');
});

it('Wrong data', () => {
    cy.get(selectors.passswordField)
    .click()
    .type('easypassword')
    .blur()
    cy.get('.invalid-feedback p').eq(0).should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
});

it('Border colour red', () => {
    cy.get(selectors.passswordField)
    .click()
    .type('1')
    .blur()
    .should('have.css', 'border-color', 'rgb(220, 53, 69)');
});
});

describe('Re-enter Password', () => {

it('Empty field', () => {
    cy.get(selectors.reenterPasswordField)
    .click()
    .blur()
    cy.get('.invalid-feedback p').eq(0).should('have.text', 'Re-enter password required');
});

it('Do not match', () => {
    cy.get(selectors.passswordField)
    .click()
    .type('Testerauto123')
    cy.get(selectors.reenterPasswordField)
    .click()
    .type('Testerauto1')
    .blur()
    cy.get('.invalid-feedback p').eq(0).should('have.text', 'Passwords do not match');
});

it('Border colour red', () => {
    cy.get(selectors.passswordField)
    .click()
    .type('1')
    .blur()
    .should('have.css', 'border-color', 'rgb(220, 53, 69)');
});
});

describe('Button register', () => {

it('Button presence', () => {
    cy.get(selectors.registerbutton).should('exist');
});

it('Button disable', () => {
    cy.get(selectors.registerbutton).should('be.disabled');
});

});

describe('E2E', () => {
it('Successful Registration', () => {
    cy.get(selectors.nameField).click().type('Daria');
    cy.get(selectors.lastNameField).click().type('Tkachuk');
    cy.get(selectors.emailField).click().type(`dariaaa.tkachuk+${Date.now()}@gmail.com`);
    cy.get(selectors.passswordField).click().type('Testerauto123');
    cy.get(selectors.reenterPasswordField).click().type('Testerauto123');
    cy.get(selectors.registerbutton).click();
    cy.url().should('include', '/panel/garage');

    
});

});

