/// <reference types="cypress" />
import carBrands from '../../fixtures/brands.json'
import carModels from '../../fixtures/models.json'


describe('Public Request', () => {

    it('Get all brands [/api/cars/brands]', () => {
        cy.request('GET', '/api/cars/brands')
            .then((response) => {
                cy.log(JSON.stringify(response.body.data));
                const firstBrand = response.body.data[2];
                expect(response.body.data.length).to.eq(5);
                expect(firstBrand.title).to.eq('Ford');
            })

    });
    it('Get token #1 [/api/auth/signin]', () => {
        cy.request('POST', '/api/auth/signin', {
            email: 'dariaaa.tkachuk+User1@gmail.com',
            password: 'fiTmiPQv6gBtdF1',
        }).then((response) => {
            const cookie = response.headers['set-cookie'][0];
            const sid = cookie.split(';')[0].split('=')[1];
            cy.log(sid);
    
            cy.request({
                method: 'GET',
                url: '/api/cars',
                headers: {
                    Cookie: `sid=${sid}`,
                },
            }).then((response) => {
                cy.log(JSON.stringify(response.body.data));
                expect(response.body.data.length).to.be.above(5) ;
            });
        })
    });
    it('Get specific brand with invalid ID [/api/cars/brands/{id}]', () => {
        cy.request({
            method: 'GET',
            url: '/api/cars/brands/9999', 
            failOnStatusCode: false, 
        }).then((response) => {
            expect(response.status).to.eq(404); 
        });
    });
    it('Update car mileage [/api/cars/{id}]', () => {
        
        cy.request({
            method: 'POST',
            url: '/api/auth/signin',
            body: {
                email: 'dariaaa.tkachuk+User1@gmail.com',
                password: 'fiTmiPQv6gBtdF1',
            },
        }).then((loginResponse) => {
            const cookie = loginResponse.headers['set-cookie'][0];
            const sid = cookie.split(';')[0].split('=')[1]; 
    
            
            cy.request({
                method: 'POST',
                url: '/api/cars',
                headers: {
                    Cookie: `sid=${sid}`, 
                },
                body: {
                    carBrandId: carBrands.data[0].id,
                    carModelId: carModels.data[0].id,
                    mileage: 100,
                },
            }).then((postResponse) => {
              
                const carId = postResponse.body.data.id;
    
                
                cy.request({
                    method: 'PUT',
                    url: `/api/cars/${carId}`,
                    headers: {
                        Cookie: `sid=${sid}`, 
                    },
                    body: {
                        mileage: 200, 
                    },
                }).then((putResponse) => {
                    expect(putResponse.status).to.eq(200); 
                    expect(putResponse.body.data.mileage).to.eq(200); 
                });
            });
        });
    });
    it('Delete the last added car [/api/cars/{id}]', () => {
       
        cy.request('POST', '/api/auth/signin', {
            email: 'dariaaa.tkachuk+User1@gmail.com', 
            password: 'fiTmiPQv6gBtdF1', 
        }).then((loginResponse) => {
            const cookie = loginResponse.headers['set-cookie'][0];
            const sid = cookie.split(';')[0].split('=')[1];
            expect(sid).to.exist; 
    
            
            cy.request({
                method: 'GET',
                url: '/api/cars',
                headers: {
                    Cookie: `sid=${sid}`,
                },
            }).then((getCarsResponse) => {
                const allCars = getCarsResponse.body.data; 
                expect(allCars).to.have.length.greaterThan(0); 
    
                
                const lastCar = allCars[allCars.length - 1];
                cy.log(`Last car to delete: ${JSON.stringify(lastCar)}`);
    
                
                cy.request({
                    method: 'DELETE',
                    url: `/api/cars/${lastCar.id}`,
                    headers: {
                        Cookie: `sid=${sid}`,
                    },
                }).then((deleteResponse) => {
                    
                    expect(deleteResponse.status).to.eq(200); 
                    
                });
            });
        });
    });
    it('Create a car with the provided data', () => {
        cy.request('POST', '/api/auth/signin', {
            email: 'dariaaa.tkachuk+User1@gmail.com',
            password: 'fiTmiPQv6gBtdF1',
        }).then((loginResponse) => {
            const cookie = loginResponse.headers['set-cookie'][0];
            const sid = cookie.split(';')[0].split('=')[1];
            expect(sid).to.exist;

            const carData = {
                carBrandId: 3,
                carModelId: 13,
                mileage: 142,
            };

            cy.request({
                method: 'POST',
                url: '/api/cars',
                body: carData,
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': `sid=${sid}`,
                },
            }).then((response) => {
                expect(response.status).to.eq(201);  
                expect(response.body.data).to.have.property('id');  
            });
        });
    });

});  










