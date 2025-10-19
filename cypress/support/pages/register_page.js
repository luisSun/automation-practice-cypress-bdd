/// <reference types="cypress" />

export default{

    regBtn(){
        cy.get('#btnRegister')
        .should('exist')
        .should('be.visible')
        .click()
    },

    erroMsg(msg){
        cy.get('#errorMessageFirstName')
        .should('exist')
        .should('be.visible')
        .should('contain', msg)
    },

    sucessMsg(msg){
        cy.get('#swal2-title')
        .should('exist')
        .should('be.visible')
        .should('contain', msg)
    },    

    fillRegister(field,data){
        cy.get(field)
        .should('exist')
        .should('be.visible')
        .type(data)
    }
}