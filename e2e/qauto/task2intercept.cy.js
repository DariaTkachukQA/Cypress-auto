/// <reference types="cypress" />
import HomePage from "../../page-objects/pages/HomePage";
import SignInForm from "../../page-objects/forms/SignInForm";
import ProfilePage from "../../page-objects/pages/ProfilePage";

describe('Profile Page - Intercept API Response', () => {
    beforeEach(() => {
        HomePage.openPage();
        HomePage.openSignInForm();
        
    });

    it('Should replace user name with "Polar Bear"', () => {

        cy.intercept('GET', '/api/users/profile', (req) => {
            req.reply({
                status: "ok",
                data: {
                    userId: 173270,
                    photoFilename: "default-user.png",
                    name: "Polar",
                    lastName: "Bear"
                }
            });
        }).as('getUser');


        SignInForm.loginWithCredentials();
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        ProfilePage.openPage();
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/profile');


        cy.get('p.profile_name').should('contain.text', 'Polar Bear');
    });
});
