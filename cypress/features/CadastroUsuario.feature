Feature: Cadastro de usuário no sistema. Cenários positivos e negativos.

    Scenario Outline: Efetuar o cadastro no site com sucesso
    Given que eu preencha os campos de cadastro
    When eu clicar no botão cadastrar
    Then será apresentada uma mensagem "<Mensagem>"

    Examples:
      | Mensagem                       |
      | Cadastro realizado com sucesso |

    Scenario Outline: Tentar efetuar o cadastro sem preencher o nome
    Given que os campos de cadastro não estejam preenchidos
    When eu clicar no botão cadastrar
    Then será apresentada uma mensagem "<Mensagem>"

    Examples:
      | Mensagem           |
      | Nome é obrigatório |

    Scenario Outline: Tentar efetuar o cadastro sem preencher o email
    Given que os campos de cadastro não estejam preenchidos
    When eu clicar no botão cadastrar
    Then será apresentada uma mensagem "<Mensagem>"

    Examples:
      | Mensagem            |
      | Email é obrigatório |
      
    Scenario Outline: Tentar efetuar o cadastro sem preencher o senha
    Given que os campos de cadastro não estejam preenchidos
    When eu clicar no botão cadastrar
    Then será apresentada uma mensagem "<Mensagem>"

    Examples:
      | Mensagem               |
      | Password é obrigatório |




  
    