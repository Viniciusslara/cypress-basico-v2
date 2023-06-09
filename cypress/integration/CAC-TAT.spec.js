// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title()
            .should('eq', 'Central de Atendimento ao Cliente TAT')
    })


    it('preenche os campos obrigatórios e envia o formulário', ()=>{
        cy.get('#firstName')
            .type('Vinicius')
            .should('have.value', 'Vinicius')
        
        cy.get('#lastName')
            .type('Lara')
            .should('have.value', 'Lara')
        
        cy.get('#email')
            .type('viniciusslara@hotmail.com')
            .should('have.value', 'viniciusslara@hotmail.com')
        
        cy.get('#open-text-area')
            .type('Curso cypress basico')
            .should('have.value', 'Curso cypress basico')
        
        cy.get('.button')
            .click()
        
        cy.get('.success')
            .should('be.visible')

        
    })

    it('seleciona um produto (YouTube) por seu texto' , ()=> {
        cy.get('#product')
        .select('YouTube')
        .should('have.value' , 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', ()=> {
        cy.get('#product')
        .select('mentoria')
        .should('have.value' , 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', ()=> {
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', ()=>{
        cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('be.checked')
    })

    it('marca cada tipo de atendimento', ()=> {
        cy.get('input[type="radio"]')
        .each(($radio)=>{
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    })

    it('marca ambos checkboxes, depois desmarca o último', ()=> {
        
        cy.get('input[type="checkbox"]')
            .each(($checkbox)=>{
                cy.wrap($checkbox).check()
                cy.wrap($checkbox).should('be.checked')
            })
            .last()
            .uncheck()
            .should('not.be.checked')

        /*    
        cy.get('input[type="checkbox"][value="email"]')
        .check()
        .should('be.checked')

        cy.get('input[type="checkbox"][value="phone"]')
        .check()
        .should('be.checked')

        cy.get('input[type="checkbox"]')
        .last()
        .uncheck()
        .should('not.be.checked')
        */
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', ()=> {
        cy.get('#firstName')
            .type('Vinicius')
            .should('have.value', 'Vinicius')
        
        cy.get('#lastName')
            .type('Lara')
            .should('have.value', 'Lara')
        
        cy.get('#email')
            .type('viniciusslara@hotmail.com')
            .should('have.value', 'viniciusslara@hotmail.com')
        
        cy.get('input[type="checkbox"][value="phone"]')
        .check()
        .should('be.checked')
        
        cy.get('#open-text-area')
            .type('Curso cypress basico')
            .should('have.value', 'Curso cypress basico')
        
        cy.get('.button')
            .click()
        
        cy.get('.error')
            .should('be.visible')
    })


  })
  