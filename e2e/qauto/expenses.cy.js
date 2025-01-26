/// <reference types="cypress" />
import SignInForm from "../../page-objects/forms/SignInForm";
import HomePage from "../../page-objects/pages/HomePage";
import GaragePage from "../../page-objects/pages/GaragePage";
import FuelPage from "../../page-objects/pages/FuelPage";

describe('Fuel expenses with POM', () => {

    beforeEach(() => {
       GaragePage.openPageAsLoggedUser();
       GaragePage.addNewCarByBrandAndModel('BMW', 'X5')
       GaragePage.verifyLastAddedCarByName('BMW X5');
        FuelPage.openPage();
    })

    it('Add expenses for [BMW] [X5]', () => {
        FuelPage.addExpenses();
    });

    it('Cancel button closes the modal window', () => {
        FuelPage.closeWindow();

    });
    it('Alert message', () => {
        FuelPage.Alertmessage();

    });
    
    it.only('Send form when fields are empty', () => {
        FuelPage.disabledButton();

    });
    after(() => {
       GaragePage.openPage(); 
       GaragePage.removeAllCars();
    })
});