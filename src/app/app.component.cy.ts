import { delay } from "cypress/types/bluebird"
import { TesteComponent } from "./teste/teste.component"

describe('TESTE1', () => {
    it('teste', () => {
        cy.mount(TesteComponent)
    })

    it('teste passando input property', () => {
        cy.mount(TesteComponent, {
            componentProperties: {
                objTest: {id: "01", name: "Matheus"}
            }
        });

        cy.get("[data-cy=obj-test]").then(async t => {
            let td = await JSON.parse(t[0].textContent || '');
            expect(td).to.eql({id: '01', name: 'Matheus'})
        });
        cy.wait(3000)
        cy.get("[data-cy=btn-change-data").click();

        cy.get("[data-cy=obj-test]").then(async t => {
            let td = await JSON.parse(t[0].textContent || '');
            expect(td.id).to.equal("5")
        });
    })
})