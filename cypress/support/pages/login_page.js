/// <reference types="cypress" />

export default {
    loginBtn(){
        cy.get('#btnLogin')
        .should('exist')
        .should('be.visible')
        .click()
    },

    fillField(field,data){
        cy.get(field)
        .should('exist')
        .should('be.visible')
        .type(data)
    },
    
    loginMsg(msg){
        cy.get('.invalid_input')
        .should('exist')
        .should('be.visible')
        .should('contain', msg)
    },
    sucessMsg(msg){
        cy.get('#swal2-title')
        .should('exist')
        .should('be.visible')
        .should('contain', msg)
    }


}