import HomePage from "./HomePage";
import SignInForm from "../forms/SignInForm";

class ProfilePage {

    get addNewCarButton() {
        return cy.get('.panel-page_heading button');
    }

    openPage() {
        cy.visit('/panel/profile');
    }

    openPageAsLoggedUser() {
        HomePage.openPage();
        HomePage.openSignInForm();
        SignInForm.loginWithCredentials();
    }
    





}

export default new ProfilePage();