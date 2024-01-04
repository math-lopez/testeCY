describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
  })

  it('botão para gerar dados', () => {
    cy.visit('http://localhost:4200/')
    cy.wait(3000)
    cy.get("[data-cy=btn-change-data]").click();
  });
})