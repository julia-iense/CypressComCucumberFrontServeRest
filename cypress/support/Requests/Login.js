import { expect } from 'chai';
import gerarNomeAleatorio from './../../support/GerarNomesAleatorios'

function UsuarioServerestRequests (){

    const emailCadastroUsuario = gerarNomeAleatorio() + "@testes.com.br";
    Cypress.env('emailCadastroUsuario',emailCadastroUsuario);

        return cy.request({
            method: "POST",
            url: "https://serverest.dev/usuarios",
            body: {
                    "nome": "teste automatizado",
                    "email": emailCadastroUsuario,
                    "password": "testeautomatizado",
                    "administrador": "true"

            },
            failOnStatusCode: false
        })
        .then((response) => {
            cy.log("Response Body:", response.body);
            expect(response.status).to.eq(201);
        })
    }

export default UsuarioServerestRequests;