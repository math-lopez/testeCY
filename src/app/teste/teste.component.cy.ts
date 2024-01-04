import { TesteComponent } from "./teste.component"

describe('TESTE1', () => {
    it('teste', () => {
        cy.mount(TesteComponent)
    })

    it('teste passando input property', () => {
        cy.mount(TesteComponent, {
            componentProperties: {
                objTest: {id: "01", name: "Matheus"}
            }
        })
    })
})