class HomescreenPage {

    //store the all of each element/locator on the spesific page
    appointmentButton = '#btn-make-appointment'

    /**
     *  Action belong this page
     */
    clickAppointmentButton(appointmentButton) {
        cy.get(this.appointmentButton)
            .should('be.visible')
            .click()
    }
}

export default new HomescreenPage()