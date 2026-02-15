describe('Cadastro de Transação', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Cadastrar nova transação com sucesso', () => {

    cy.fixture('usuario').then((dados) => {

      cy.contains('Nova Transação').click()

      cy.get('#description').type(dados.descricao)
      cy.get('#amount').type(dados.valor)
      cy.get('#date').type('2026-02-15')

      cy.contains('Salvar').click()

      cy.contains(dados.descricao)
        .should('be.visible')

      cy.screenshot('transacao-sucesso')

    })

  })
})
