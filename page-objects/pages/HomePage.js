class HomePage {
    get signInButton() {
        return cy.get('.header_signin');
    }

    openPage() {
        // Відкриття сторінки з обліковими даними, якщо потрібно
        // cy.visit(`https://${Cypress.env('USERNANE')}:${Cypress.env('PASSWORD')}@qauto.forstudy.space`);
        cy.visit('/');
    }

    openSignInForm() {
        this.signInButton.click();
    }
}

export default new HomePage();
