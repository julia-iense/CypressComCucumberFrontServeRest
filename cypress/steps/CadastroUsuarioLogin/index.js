
const FormUtils = Cypress.automacao   

Given("que eu preencha os campos de cadastro",() =>{

    FormUtils.loginCadastroUsuarioServRest();

})

When("eu clicar no botão cadastrar",() =>{

    FormUtils.ClicarNoBotaoCadastrar();

})

Then("será apresentada uma mensagem cadastro realizado com sucesso",() =>{

    FormUtils.MensagemCadastroSucesso();

})

Given("que eu preencha os campos de email e senha",() =>{

    FormUtils.loginUsuario();

})

When("eu clicar no botão entrar",() =>{

    FormUtils.ClicarNoBotaoEntrar();
})