package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.checkerframework.checker.units.qual.C;
import org.junit.Assert;

public class ComputerSteps {
    @When("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new ComputerPage().clickOnCoputer();
    }

    @And("^I click on desktops link$")
    public void iClickOnDesktopsLink() {
        new ComputerPage().clickOnDesktop();
    }

    @And("^I click on product name \"([^\"]*)\"$")
    public void iClickOnProductName(String build)  {
        new BuildYourOwnComputerPage().clickOnBuildYourOwn();
    }

    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor)  {
        new BuildYourOwnComputerPage().selectProcessor(processor);
    }

    @And("^I select Ram \"([^\"]*)\"$")
    public void iSelectRam(String ram)  {
        new BuildYourOwnComputerPage().selectRam(ram);
    }

    @And("^I select HDDRam \"([^\"]*)\"$")
    public void iSelectHDDRam(String hdd)  {
        new BuildYourOwnComputerPage().selectHdd(hdd);
    }

    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String os)  {
        new BuildYourOwnComputerPage().selectOs(os);
    }

    @And("^I select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software)  {
        new BuildYourOwnComputerPage().selectSoftware(software);
    }

    @And("^I click on add to cart$")
    public void iClickOnAddToCart() {
        new BuildYourOwnComputerPage().clickOnAddToCart();
    }

       @Then("^I verify cart final message \"([^\"]*)\"$")
    public void iVerifyCartFinalMessage(String expeText)  {
           Assert.assertEquals("not found",expeText,new BuildYourOwnComputerPage().verifyShoppingCart());
    }
}
