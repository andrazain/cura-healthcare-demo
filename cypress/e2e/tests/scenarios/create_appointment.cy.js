import homescreenPage from '../../../support/pages/homescreen_page.js'
import loginPage from '../../../support/pages/login_page.js'
import createAppointment from '../../../support/pages/appointment_page.js'

describe('Test CURA Healthcare', () => {
    
    beforeEach(() => {
        //visiting the website
        cy.visit('')
    });
    
    it('As a user, i can successfully making appointment in Hongkong CURA Healthcare Center', () => {
        //click appointment button
        homescreenPage.clickAppointmentButton()

        //login into the web
        loginPage.inputUsername('John Doe')
        loginPage.inputPassword('ThisIsNotAPassword')
        loginPage.clickLoginButton()

        //create appointment
        createAppointment.selectFacilityHongkong()
        createAppointment.checkHospitalReadmission()
        createAppointment.checkHealthcareProgram()
        createAppointment.inputVisitDate()
        //a lil bit scroll
        cy.get('.text-vertical-center').scrollIntoView().should('be.visible')
        cy.get('.text-vertical-center').click()
        createAppointment.inputComment()
        createAppointment.clickBookAppointmentButton()

        //appointment success and assertions
        cy.get('.col-xs-12').find('h2').should('contain.text', 'Appointment Confirmation')
        cy.url().should('include', '/appointment.php#summary')
        });
});