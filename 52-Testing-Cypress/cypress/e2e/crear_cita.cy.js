/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la muestra', () => {
    it('Campos nueva cita', () => {
        
        cy.visit('/index.html')

        cy.get('[data-cy="mascota-input"]')
            .type('Hook')

        cy.get('[data-cy="propietario-input"]')
            .type('Fernando')
        
        cy.get('[data-cy="telefono-input"]')
            .type('2134214234')

        cy.get('[data-cy="fecha-input"]')
            .type('2025-04-04')

        cy.get('[data-cy="hora-input"]')
            .type('12:30')

        cy.get('[data-cy="sintomas-textarea"]')
            .type('El gato no duerme')

        cy.get('[data-cy="submit-cita"]')
            .click()

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'Administra tus Citas')

                //Seleccionar la alerta
        cy.get('[data-cy=alerta]')
                .invoke('text')
                .should('equal', 'Se agregó correctamente')
    
        cy.get('[data-cy=alerta]')
                .should('have.class', 'alert-success')

    })
})