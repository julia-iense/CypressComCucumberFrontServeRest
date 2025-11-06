Feature: O usuário deve conseguir cadastrar-se no sistema e fazer login com sucesso

    Scenario Outline: Efetuar o login no site
    Given que eu preencha os campos de email e senha
    When eu clicar no botão entrar
    Then será apresentada uma mensagem "<Mensagem>"

    Examples:
      | Mensagem                     |
      | Bem Vindo teste automatizado |
   
    Scenario Outline: Tentar efetuar o login sem preencher a senha
    Given que os campos de login não sejam preenchidos
    When eu clicar no botão entrar
    Then será apresentada uma mensagem "<Mensagem>"

    Examples:
      | Mensagem               |
      | Password é obrigatório |

    Scenario Outline: Tentar efetuar o login sem preencher o email
    Given que os campos de login não sejam preenchidos
    When eu clicar no botão entrar
    Then será apresentada uma mensagem "<Mensagem>"

    Examples:
      | Mensagem            |
      | Email é obrigatório |




  
    