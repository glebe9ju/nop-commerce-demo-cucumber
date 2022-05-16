package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.RegisterPage;
import com.nopcommerce.demo.utility.Utility;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class RegisterSteps {
    @And("^I click on register link$")
    public void iClickOnRegisterLink() {
        new RegisterPage().clickOnRegister();
    }

    @Then("^I verify register text$")
    public void iVerifyRegisterText() {
        new RegisterPage().clickOnRegister();
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegiButton();
    }




    @Then("^I verify the error message for first name \"([^\"]*)\"$")
    public void iVerifyTheErrorMessageForFirstName(String expeText)  {
        Assert.assertEquals("first name required",expeText,new RegisterPage().verifyFirstNameRequired());

    }


    @Then("^I verify the error message for last name \"([^\"]*)\"$")
    public void iVerifyTheErrorMessageForLastName(String expeText)  {
        Assert.assertEquals("last name is required",expeText,new RegisterPage().verifyLastNameRequired());
         }



    @Then("^I verify the error message for email \"([^\"]*)\"$")
    public void iVerifyTheErrorMessageForEmail(String expeText)  {
        Assert.assertEquals("email is required",expeText,new RegisterPage().verifyEmailRequired());

    }


    @Then("^I verify the error message for password \"([^\"]*)\"$")
    public void iVerifyTheErrorMessageForPassword(String expeText)  {
        Assert.assertEquals("password required",expeText,new RegisterPage().verifyPasswordRequired());

    }


    @Then("^I verify the error message for confirm password \"([^\"]*)\"$")
    public void iVerifyTheErrorMessageForConfirmPassword(String expeText) {
        Assert.assertEquals("confirm password is required",expeText,new RegisterPage().verifyConfirmPass());
    }

    @And("^I select gender$")
    public void iSelectGender() {
        new RegisterPage().selectGender("Female");
    }

    @And("^I entered First Name \"([^\"]*)\"$")
    public void iEnteredFirstName(String first)  {
        new RegisterPage().enterFirstName(first);
    }

    @And("^I entered Last Name \"([^\"]*)\"$")
    public void iEnteredLastName(String last)  {
        new RegisterPage().enterLastName(last);
    }

    @And("^I select day \"([^\"]*)\"$")
    public void iSelectDay(String day)  {
        new RegisterPage().selectDateOfBirth(day);
    }

    @And("^I select month \"([^\"]*)\"$")
    public void iSelectMonth(String month)  {
        new RegisterPage().selectDateOfMonth(month);
    }

    @And("^I select year \"([^\"]*)\"$")
    public void iSelectYear(String year)  {
        new RegisterPage().selectDateOfYer(year);
    }
    @And("^I entered email$")
    public void iEnteredEmail() {
        int a = new Utility().generateRandomNumber();
        new RegisterPage().enterEmail("Mark" + a + "@yahoo.com");
    }

    @And("^I entered password \"([^\"]*)\"$")
    public void iEnteredPassword(String password)  {
        new RegisterPage().enterPssWord(password);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirm)  {
        new RegisterPage().enterConfPass(confirm);
    }

    @Then("^I verify message \"([^\"]*)\"$")
    public void iVerifyMessage(String expeText)  {
        Assert.assertEquals("not displayed",expeText,new RegisterPage().verifyRegister());
    }


}
