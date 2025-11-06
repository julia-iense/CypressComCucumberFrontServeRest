
function MensagemCadastroSucesso() {

        cy.contains('Cadastro realizado com sucesso').should('be.visible')
}
export default { MensagemCadastroSucesso };