/// <reference types="cypress" />
import SignInForm from "../../page-objects/forms/SignInForm";
import HomePage from "../../page-objects/pages/HomePage";
import GaragePage from "../../page-objects/pages/GaragePage";

describe('Garage', () => {
    const selectors = {
        addNewCarButton: '.panel-page_heading button',
        brandDropdown: '#addCarBrand',
        modelDropdown: '#addCarModel',
        mileageField: '#addCarMileage',
        submitAddingCarButton: 'app-add-car-modal .btn-primary',
        addedCars: '.car-list li',
    }

    beforeEach(() => {
        SignInForm.loginWithCredentials(userEmail, userPassword);
        
    })
    it('Add [BMW] [X5]', () => {
        cy.get(selectors.addNewCarButton).click();
        cy.get(selectors.brandDropdown).select('BMW');
        cy.get(selectors.modelDropdown).select('X5');
        cy.get(selectors.mileageField).type(123);
        cy.get(selectors.submitAddingCarButton).click();

        cy.get(selectors.addedCars).eq(0).find('.car_name').should('have.text', 'BMW X5');

    });

    after(() => {
        cy.get(selectors.addedCars).each((car) => {
            cy.wrap(car).find('.icon-edit').click();
            cy.contains('Remove car').click();
            cy.get('.btn-danger').click();

        })
    })
})


describe('Garage with POM', () => {

    beforeEach(() => {
       GaragePage.openPageAsLoggedUser();
    })

    it('Add [BMW] [X5]', () => {
        GaragePage.addNewCarByBrandAndModel('BMW', 'X5')
        GaragePage.verifyLastAddedCarByName('BMW X5');
    });

    after(() => {
       GaragePage.removeAllCars();
    })
});
