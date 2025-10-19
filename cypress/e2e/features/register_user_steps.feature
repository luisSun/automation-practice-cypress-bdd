Feature: Register
  As a client
  I want to register in the application
  So that I can place an order

  # Functions like a beforeEach
  Background: Access register screen
      Given I'm on the register screen

  Scenario: Register with empty fields
    When I click the register button
    Then I see the register message "O campo nome deve ser prenchido"

  Scenario: Register without filling the e-mail field
    When I fill a valid user name
    And I fill a valid password
    And I click the register button
    Then I see the register message "O campo e-mail deve ser prenchido corretamente"

  Scenario: Register with an invalid e-mail
    When I fill a valid user name
    And I fill an invalid register e-mail
    And I fill a valid password
    And I click the register button
    Then I see the register message "O campo e-mail deve ser prenchido corretamente"

  Scenario: Register without filling the password field
    When I fill a valid user name
    And I fill a valid register e-mail
    And I click the register button
    Then I see the register message "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Register filling an invalid password
    When I fill a valid user name
    And I fill a valid register e-mail
    And I fill an invalid password
    And I click the register button
    Then I see the register message "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Register filling the correct fields
    When I fill a valid user name
    And I fill a valid register e-mail
    And I fill a valid password
    And I click the register button
    Then I see the success register message "Cadastro realizado!"
