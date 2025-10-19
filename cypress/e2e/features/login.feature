Feature: Login
  As a client
  I want to access the customer area
  So that I can buy a product

  Background: Access login screen
    Given I'm on the login screen

  Scenario: Login with empty fields
    When I click the login button
    Then I see the message "E-mail inválido."

  Scenario: Login with empty e-mail field
    And I fill in a valid password
    When I click the login button
    Then I see the message "E-mail inválido."

  Scenario: Login with an invalid e-mail
    And I fill in an invalid e-mail
    And I fill in a valid password
    When I click the login button
    Then I see the message "E-mail inválido."

  Scenario: Login with an empty password
    And I fill in a valid e-mail
    When I click the login button
    Then I see the message "Senha inválida."

  Scenario: Login with an invalid password
    And I fill in a valid e-mail
    And I fill in an invalid password
    When I click the login button
    Then I see the message "Senha inválida."

  Scenario: Login with success
    And I fill in a valid e-mail
    And I fill in a valid password
    When I click the login button
    Then I see the success message "Login realizado"
