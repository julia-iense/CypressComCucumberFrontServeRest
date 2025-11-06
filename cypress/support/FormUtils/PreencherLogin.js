import UsuarioServerestRequests from './../../support/Requests/Login'

function loginUsuario() {

        UsuarioServerestRequests().then(() => {

        cy.visit(Cypress.env('baseUrl'))
        cy.get('[data-testid = "email"]').type(Cypress.env('emailCadastroUsuario'))
        cy.get('[data-testid = "senha"]').type('testeautomatizado')

        })
    
}
export default { loginUsuario };