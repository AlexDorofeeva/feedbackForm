// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  cy.get(iframeSelector, { timeout: 10000 }).should('be.visible') // Wait for the iframe to be visible
    .then(($iframe) => {
      // Wait for the iframe's contentDocument to be available
      const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
      
      // Retry if the iframe's content is not accessible yet
      cy.wrap(iframeDocument).should('not.be.null').within(() => {
        cy.get('body').should('be.visible'); // Make sure the body inside the iframe is visible
      });
    });
});