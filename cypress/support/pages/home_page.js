//3 - Pagina de aceções

/// <reference types="cypress" />

export default {
    acessLogin() {
        cy.visit('/')
        .get('.top_header_left')
        .should('exist')
        .should('be.visible')
        
        cy.get('.fa-user')
            .should('exist')
            .should('be.visible')
            .click()

        cy.get('.account_form > h3')
            .should('exist')
            .should('be.visible')
            .should('have.text','Login')
    },
    acessRegister() {
        cy.visit('/')
        .get('.top_header_left')
        .should('exist')
        .should('be.visible')
        
        cy.get('.fa-lock')
            .should('exist')
            .should('be.visible')
            .click()

        cy.get('.account_form > h3')
            .should('exist')
            .should('be.visible')
            .should('have.text','Cadastro de usuário')
    }

}