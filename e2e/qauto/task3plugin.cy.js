/// <reference types="cypress" />
import carBrands from '../../fixtures/brands.json'
import carModels from '../../fixtures/models.json'

describe('API Tests with Plugin', () => {
    it('Get car brand by ID', () => {
        cy.api('GET', '/api/cars/brands/1').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('status', 'ok');
            expect(response.body.data).to.have.property('id', 1);
        });
    });
    it('Get all car brands', () => {
        cy.api('GET', '/api/cars/brands').then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body.data.length).to.be.greaterThan(0); 
        });
    });
    it('Get info about specific car', () => {
        cy.api({
            method: 'Get',
            url: '/api/instructions?carBrandId=13&carModelId=3&page=1',
        }).should((response) => {
            expect(response.status).to.eq(200);

            
        });
    });
});
