
const FormUtils = Cypress.automacao   

Given("que os campos de cadastro não estejam preenchidos",() =>{
    
    cy.visit(Cypress.env('baseUrl'))
    cy.get('[data-testid = "cadastrar"]').click()

})

Given("que eu preencha os campos de cadastro",() =>{

    FormUtils.loginCadastroUsuarioServRest();

})

When("eu clicar no botão cadastrar",() =>{

    cy.get('[data-testid = "cadastrar"]').click()

})
    
Then("será apresentada uma mensagem {string}",(Mensagem) =>{

    cy.contains(Mensagem).should('be.visible')

})

Given("que eu preencha os campos de email e senha",() =>{

    FormUtils.loginUsuario();

})

Given("que os campos de login não sejam preenchidos",() =>{

    cy.visit(Cypress.env('baseUrl'))
    
})

When("eu clicar no botão entrar",() =>{

    cy.get('[data-testid = "entrar"]').click()

})
