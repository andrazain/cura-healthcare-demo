describe('Test CURA Healthcare', () => {
  it('As a user, i can successfully making appointment', () => {
    //visiting the web
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#btn-make-appointment').click()

    //login into the web
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()

    //make appointment
    cy.get('#combo_facility')
      .select('Hongkong CURA Healthcare Center').should('have.value', 'Hongkong CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').check().should('be.checked')
    cy.get('#radio_program_medicaid').check().should('be.checked')
    cy.get('#txt_visit_date').type('09092023')
    //a lil bit scroll
    cy.get('.text-vertical-center').scrollIntoView().should('be.visible')
    cy.get('.text-vertical-center').click()
    cy.get('#txt_comment').type('Hello, i am make appointment with Dr.Liu')
    cy.get('#btn-book-appointment').click()

    //appointment success and assertions
    cy.get('.col-xs-12').find('h2').should('contain.text', 'Appointment Confirmation')
  })
})