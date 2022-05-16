Feature: Login Test
  As user I wat to login into nop-commerce website

  Scenario: User should navigate to loginpage successfully
    Given I am in homepage
    And I click on login link
    Then I check the message display "Welcome, Please Sign In!"

  Scenario: Verify the error message with invalid credentials
    Given I am in homepage
    And I click on login link
    And I enter email
    And I enter password
    And I click on login button
    Then I verify the error message"

  Scenario: Verify that user should login successfully with valid credentials
    Given I am in homepage
    And I click on login link
    And I enter eamil
    And I enter password
    And I click on login button
    Then I verify logout link is display

    Scenario: Verify that user should logout successfully
      Given I am in homepage
      And I click on login link
      And enter email
      And enter password
      And click on login button
      And click on logout link
      Then I verify that login link display



