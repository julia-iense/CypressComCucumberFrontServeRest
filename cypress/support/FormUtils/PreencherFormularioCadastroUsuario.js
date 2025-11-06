import gerarNomeAleatorio from "./../GerarNomesAleatorios";

function loginCadastroUsuarioServRest() {

    const nome = gerarNomeAleatorio();
    const email = `${gerarNomeAleatorio()}@teste.com`; 
    Cypress.env('emailCadastroUsuario', email);
    const senha = `${gerarNomeAleatorio()}123@AA`;
    Cypress.env('senhaCadastroUsuario', senha);


        cy.visit(Cypress.env('baseUrl'))
        cy.get('[data-testid = "cadastrar"]').click()
        cy.get('[data-testid = "nome"]').type(nome);
        cy.get('[data-testid = "email"]').type(email)
        cy.get('[data-testid = "password"]').type(senha)
    
}
export default { loginCadastroUsuarioServRest };