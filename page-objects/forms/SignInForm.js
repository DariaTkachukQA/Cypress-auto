class SignInForm {

    get emailField() {
        return cy.get('#signinEmail');
    }

    get passwordField() {
        return cy.get('#signinPassword');
    }

    get loginButton() {
        return cy.get('.modal-content .btn-primary');
    }

    get wrongDataMessage() {
        return cy.get('.alert-danger');
    }

    get errorMessage() {
        return cy.get('.invalid-feedback p');
    }

    enterEmail(email) {
        this.emailField.type(email);
    }

    enterPassword(password) {
        this.passwordField.type(password);
    }

    clickLoginButton() {
        this.loginButton.click();
    }

    triggerErrorMessageForField(fieldName) {
        const element = fieldName === 'email' ? this.emailField : this.passwordField;
        element.focus();
        element.blur();
    }

    loginWithCredentials() {
        const userEmail = Cypress.env('userEmail');  // Fetch email directly
        const userPassword = Cypress.env('userPassword');  // Fetch password directly
        this.emailField.type(userEmail);
        this.passwordField.type(userPassword);
        this.loginButton.click();
    }
    

    // triggerErrorMessageForEmailField() {
    //     this.emailField.focus();
    //     this.emailField.blur();
    // }

    // triggerErrorMessageForPasswordField() {
    //     this.passwordField.focus();
    //     this.passwordField.blur();
    // }

}


export default new SignInForm();