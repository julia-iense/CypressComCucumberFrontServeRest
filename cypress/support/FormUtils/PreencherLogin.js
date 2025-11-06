function loginUsuario() {

        cy.visit(Cypress.env('baseUrl'))
        cy.get('[data-testid = "email"]').type(Cypress.env('emailCadastroUsuario'))
        cy.get('[data-testid = "senha"]').type(Cypress.env('senhaCadastroUsuario'))
    
}
export default { loginUsuario };