class LoginPage {

    username = '#txt-username'
    password = '#txt-password'
    loginButton = '#btn-login'

    inputUsername(username) {
        cy.get(this.username)
            .should('be.visible')
            .type(username)
    }

    inputPassword(password) {
        cy.get(this.password)
            .should('be.visible')
            .type(password)
    }

    clickLoginButton(loginButton) {
        cy.get(this.loginButton)
            .should('be.visible')
            .click()
    }
}

export default new LoginPage()