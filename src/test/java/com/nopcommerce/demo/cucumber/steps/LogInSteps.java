package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class LogInSteps {
    @Given("^I am in homepage$")
    public void iAmInHomepage() {
        System.out.println("I am on homepage");
    }

    @And("^I click on login link$")
    public void iClickOnLoginLink() {
        new LoginPage().clickOnLogIn();
    }

    @Then("^I check the message display \"([^\"]*)\"$")
    public void iCheckTheMessageDisplay(String exptText)  {
        Assert.assertEquals("not displayed", exptText,new LoginPage().verifyWelcome());
    }
    @And("^I enter email$")
    public void iEnterEmail() {
        new LoginPage().enterEmail("xyz123@yahoo.com");

    }

    @And("^I enter password$")
    public void iEnterPassword() {
        new LoginPage().enterPassWord("xyz123");

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLogInButan();
    }

    @Then("^I verify the error message \"([^\"]*)\"$")
    public void iVerifyTheErrorMessage(String exptText)  {
        Assert.assertEquals("No customer found",exptText,new LoginPage().verifyErrorMessage());
    }

    @Then("^I verify the error message\"$")
    public void iVerifyTheErrorMessage(){
        String exptText ="Login was unsuccessful. Please correct the errors and try again.\nNo customer account found";
        Assert.assertEquals("No customer found",exptText,new LoginPage().verifyErrorMessage());
    }

    @And("^I enter eamil$")
    public void iEnterEamil() {
        new LoginPage().enterEmail("xyz123@yahoo.com");
    }

    @Then("^I verify logout link is display$")
    public void iVerifyLogoutLinkIsDisplay() {
    }

    @And("^enter email$")
    public void enterEmail() {
        new LoginPage().enterEmail("markpaul@yahoo.com");
    }

    @And("^enter password$")
    public void enterPassword() {
        new LoginPage().enterPassWord("mark12paul");
    }

    @And("^click on login button$")
    public void clickOnLoginButton() {
        new LoginPage().clickOnLogInButan();
    }

    @And("^click on logout link$")
    public void clickOnLogoutLink() {
    }

    @Then("^I verify that login link display$")
    public void iVerifyThatLoginLinkDisplay() {
    }
}
