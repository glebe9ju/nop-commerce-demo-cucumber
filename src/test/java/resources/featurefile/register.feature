Feature: Register Test
  As user I wat to login into nop-commerce website

  Background:
    Given I am in homepage

  Scenario: Verify user should navigate to register page successfully

    And I click on register link
    Then I verify register text

  Scenario: verify that all fields are mandatory

    When I click on register link
    And I click on register button
    Then I verify the error message for first name "First name is required."
    Then I verify the error message for last name "Last name is required."
    Then I verify the error message for email "Email is required."
    Then I verify the error message for password "Password is required."
    Then I verify the error message for confirm password "Password is required."

  Scenario: verify that user should create account successfully
    When I click on register link
    And I select gender
    And I entered First Name "Mark"
    And I entered Last Name "Paul"
    And I select day "5"
    And I select month "April"
    And I select year "2016"
    And I entered email
    And I entered password "Mark123"
    And I enter confirm password "Mark123"
    And I click on register button
    Then I verify message "Your registration completed"
