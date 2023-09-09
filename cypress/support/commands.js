/* 
    this command for login into the web
*/
Cypress.Commands.add('login', (username, password) => {
    cy.get('#txt-username').type(username)
    cy.get('#txt-password').type(password)
    cy.get('#btn-login').click()
})

/* 
    this command for check action in universal purpose
    this command applies to checkbox and radio button
*/
Cypress.Commands.add('universalClick', (locator) => {
    cy.get(locator).click()
})

/* 
    this command for check action in universal purpose
    this command applies to checkbox and radio button
*/
Cypress.Commands.add('universalCheck', (locator) => {
    cy.get(locator).check().should('be.checked')
})

/* 
    this command for type action in universal purpose
*/
Cypress.Commands.add('universalType', (locator, value) => {
    cy.get(locator).should('be.visible').type(value)
})

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