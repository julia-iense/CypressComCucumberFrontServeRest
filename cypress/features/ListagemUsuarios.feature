Feature: O usuário deve conseguir cadastrar-se no sistema e fazer login com sucesso

    Scenario Outline: Listar usuários cadastrados
    Given que eu preencha os campos de email e senha
    And eu clicar no botão entrar
    When eu acessar a lista de usuários
    Then será apresentada uma mensagem "<Mensagem>"

    Examples:
      | Mensagem           |
      | Lista dos usuários |

 




  
    