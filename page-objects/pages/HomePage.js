class HomePage {
    get signInButton() {
        return cy.get('.header_signin');
    }

    openPage() {
        //cy.visit(`https://${Cypress.env('USERNANE')}:${Cypress.env('USERNAME')}@qauto.forstudy.space`);
        cy.visit(`/`);
    }

    openSignInForm() {
        this.signInButton.click();
    }
}

export default new HomePage();