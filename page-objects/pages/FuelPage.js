import HomePage from "./HomePage";
import SignInForm from "../forms/SignInForm";

class FuelPage { 

    get addExpensesButton() {
        return cy.get('.btn.btn-primary');
    }

    get mileageField() {
        return cy.get('#addExpenseMileage');
    }

    get litersField() {
        return cy.get('#addExpenseLiters');
    }

    get totalCostField() {
        return cy.get('#addExpenseTotalCost');
    }

    get submitAddingExpensesButton() {
        return cy.get('.modal-footer .btn.btn-primary');
    }

    get cancelButton() {
        return cy.get('.modal-footer .btn.btn-secondary');
    }
    get alertMessage() {
        return cy.get('p.alert.alert-danger');
    }
    


    openPage() {
        cy.visit('/panel/expenses');
    }

    openPageAsLoggedUser() {
        HomePage.openPage();
        HomePage.openSignInForm();
        SignInForm.loginWithCredentials ();
    }
    

    addExpenses() {
        this.addExpensesButton.click();
        this.mileageField.type(1);
        this.litersField.type(10);
        this.totalCostField.type(500);
        this.submitAddingExpensesButton.click();
        this.submitAddingExpensesButton.should('not.be.visible');
    }


    closeWindow() {
        this.addExpensesButton.click();
        this.cancelButton.click();
        this.cancelButton.should('not.be.visible');
    }

    Alertmessage() {
        this.addExpensesButton.click();
        this.litersField.type(10);
        this.totalCostField.type(500);
        this.submitAddingExpensesButton.click();
        this.alertMessage.should('be.visible');
        this.alertMessage.should('be.visible').and('contain.text', 'First expense mileage must not be less or equal to car initial mileage');
    }
    disabledButton() {
        this.addExpensesButton.click();
        this.submitAddingExpensesButton.should('be.disabled')
    }
}


export default new FuelPage();