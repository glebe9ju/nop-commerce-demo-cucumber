package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

public class BuildYourOwnComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h2[@class='product-title']//a[normalize-space()='Build your own computer']")
    WebElement buildYourOwn;
    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement processor;
    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement ramSelect;
    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_3_6']")
    WebElement hddSelect320;
    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_3_7']")
    WebElement hddSelect400;
    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_4_8']")
    WebElement vistaHome;
    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_4_9']")
    WebElement vistaPremium;
    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_5']//li//label")
    List<WebElement> softList;
    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addCart;
    @CacheLookup
    @FindBy(xpath = "//p[@class='content']")
    WebElement shoppingCartVerify;

    public void clickOnBuildYourOwn() {
        clickOnElement(buildYourOwn);
        log.info("Build your own " + buildYourOwn .toString());
    }
    public void selectProcessor(String process) {
        selectByVisibleTextFromDropDown(processor, process);
        log.info("select process" + process + "to process" + processor.toString());
    }
    public void selectRam(String ram) {
        selectByVisibleTextFromDropDown(ramSelect, ram);
       log.info("select ram" + ram + "to process" + ramSelect.toString());
    }
    public void selectHdd(String hdd) {
        Reporter.log("select hddram" + hdd + "to hdd" + hddSelect320);
        if (hddSelect320.getText().equalsIgnoreCase(hdd)) {
            clickOnElement(hddSelect320);
            log.info("Select HDD " + hddSelect320.toString());
        } else if (hddSelect400.getText().equalsIgnoreCase(hdd)) {
            clickOnElement(hddSelect400);
            log.info("Select 400 " + hddSelect400.toString());
        }
    }
    public void selectOs(String os) {
        if (vistaHome.getText().equalsIgnoreCase(os)) {
            clickOnElement(vistaHome);
            log.info("Select OS " + vistaHome.toString());
        } else if (vistaPremium.getText().equalsIgnoreCase(os)) {
            clickOnElement(vistaPremium);
            log.info("Select premium " + vistaPremium.toString());
        }
    }

    public void selectSoftware(String soft) {
        for (WebElement softEl : softList) {
            log.info("Select software " + softList.toString());
            if (softEl.getText().equalsIgnoreCase(soft)) {
                clickOnElement(softEl);
                break;
            }
        }
    }

    public void clickOnAddToCart() {
        clickOnElement(addCart);
        log.info("Click on add to cart " + addCart.toString());
    }

    public String verifyShoppingCart() {
        String message = getTextFromElement(shoppingCartVerify);
        log.info("Verify shopping cart " + shoppingCartVerify.toString());
        return message;
    }
}
