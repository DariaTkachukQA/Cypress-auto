/// <reference types="cypress" />

describe('Header and Social Buttons Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('find the Sign up button', () => {
    cy.contains('button', 'Sign up').should('be.visible');
  });

  it('have the correct button text', () => {
    cy.get('button').contains('Sign up').should('be.visible');
  });

  it('find About', () => {
    cy.get('button.btn.header-link').eq(0).should('contain', 'About');
  });

  it('find Contacts', () => {
    cy.get('button.btn.header-link').last().should('contain', 'Contacts');
  });
  
  it('contains', () => {
    cy.contains('h1', 'Do more!');
  });

  it('find', () => {
    cy.get('.header_left').find('a');
  });

  it('find a children', () => {
    cy.get('.header_left').children('a');
  });

  it('parent', () => {
    cy.contains('.header-link', 'Home').parent(); 
  });

  it('parents', () => {
    cy.contains('.header-link', 'Home').parents('.container'); 
  });
});

describe('Social Media and Links Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const elements = [
    { name: 'Facebook', selector: '.socials_icon.icon.icon-facebook', url: 'https://www.facebook.com/Hillel.IT.School' },
    { name: 'Telegram', selector: '.socials_icon.icon.icon-telegram', url: 'https://t.me/ithillel_kyiv' },
    { name: 'YouTube', selector: '.socials_icon.icon.icon-youtube', url: 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1' },
    { name: 'Instagram', selector: '.socials_icon.icon.icon-instagram', url: 'https://www.instagram.com/hillel_itschool/' },
    { name: 'LinkedIn', selector: '.socials_icon.icon.icon-linkedin', url: 'https://www.linkedin.com/school/ithillel/' },
    { name: 'itHillel', selector: 'a[href="https://ithillel.ua"]', url: 'https://ithillel.ua' },
    { name: 'Support Email', selector: 'a[href="mailto:developer@ithillel.ua"]', url: 'mailto:developer@ithillel.ua' },
  ];

  elements.forEach(({ name, selector, url }) => {
    it(`should find ${name} element`, () => {
      cy.get(selector).should('be.visible');
    });

    it(`navigate to the correct ${name} URL`, () => {
      cy.get(`a[href="${url}"]`).should('have.attr', 'href', url);
    });
  });
});
