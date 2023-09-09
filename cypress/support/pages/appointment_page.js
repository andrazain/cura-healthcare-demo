class createAppointment {

    facility = '#combo_facility'
    facilityHongkong = 'Hongkong CURA Healthcare Center'
    facilityTokyo = 'Tokyo CURA Healthcare Center'
    facilitySeoul = 'Seoul CURA Healthcare Center'
    hospitalReadmission = '#chk_hospotal_readmission'
    healthcareProgram = '#radio_program_medicaid'
    visitDate = '#txt_visit_date'
    comment = '#txt_comment'
    bookAppointmentButton = '#btn-book-appointment'

    selectFacilityHongkong(facility) {
        cy.get(this.facility)
            .select(this.facilityHongkong)
            .should('have.value', this.facilityHongkong)
    }

    selectFacilityTokyo(facility) {
        cy.get(this.facility)
            .select(this.facilityTokyo)
            .should('have.value', this.facilityTokyo)
    }

    selectFacilitySeoul(facility) {
        cy.get(this.facility)
            .select(this.facilitySeoul)
            .should('have.value', this.facilitySeoul)
    }

    checkHospitalReadmission(hospitalReadmission) {
        cy.get(this.hospitalReadmission)
            .check()
            .should('be.checked')
    }

    checkHealthcareProgram(healthcareProgram) {
        cy.get(this.healthcareProgram)
            .check()
            .should('be.checked')
    }

    inputVisitDate(visitDate) {
        cy.get(this.visitDate)
            .type('09092023')
    }

    inputComment(comment) {
        cy.get(this.comment)
            .type('Hello, i am make appointment with Dr.Liu')
    }

    clickBookAppointmentButton(bookAppointmentButton) {
        cy.get(this.bookAppointmentButton)
            .should('be.visible')
            .click()
    }

}

export default new createAppointment()