package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Register']")
    WebElement register;
    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Register']")
    WebElement registerTitle;
    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement firstName;
    @CacheLookup
    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement firstNameRequired;
    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastName;
    @CacheLookup
    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement lastNameRequired;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailAdd;
    @CacheLookup
    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement emailRequired;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passWord;
    @CacheLookup
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement passwordRequired;
    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement confiPass;
    @CacheLookup
    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement confirmPass;
    @CacheLookup
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement regiButton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement femaleGender;
    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement dateOfBirth;
    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement dateOfMonth;
    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement dateOfYear;
    @CacheLookup
    @FindBy(xpath = "//div[@class='result']")
    WebElement registerComp;

    public void clickOnRegister() {
        clickOnElement(register);
        log.info("Click on register " + register.toString());
    }

    public void clickOnRegisterTitle() {
        clickOnElement(registerTitle);
        log.info("Click on register title " + registerTitle.toString());
    }

    public void enterFirstName(String name) {
        sendTextToElement(firstName, name);
        log.info("Enter first name " + name + "in first name field " + firstName.toString());
    }

    public String verifyFirstNameRequired() {
        String message = getTextFromElement(firstNameRequired);
        log.info("Verify first name " + firstNameRequired.toString());
        return message;
    }

    public void enterLastName(String last) {
        sendTextToElement(lastName, last);
        log.info("Enter last name  " + last + "in last name field " + lastName.toString());
    }

    public String verifyLastNameRequired() {
        String message = getTextFromElement(lastNameRequired);
        log.info("Verify last name " + lastNameRequired.toString());
        return message;
    }

    public void enterEmail(String email) {
        sendTextToElement(emailAdd, email);
        log.info("Enter email " + email + "in email field " + emailAdd.toString());

    }

    public String verifyEmailRequired() {
        String message = getTextFromElement(emailRequired);
        log.info("Verify emil required " + emailRequired.toString());
        return message;
    }

    public void enterPssWord(String pass) {
        sendTextToElement(passWord, pass);
        log.info("Enter password " + pass + "in password field " + passWord.toString());
    }

    public String verifyPasswordRequired() {
        String message =  getTextFromElement(passwordRequired);
        log.info("Verify password " + passwordRequired.toString());
        return message;
    }

    public void enterConfPass(String pass) {
        sendTextToElement(confiPass, pass);
        log.info("Enter confirm password " + pass + "in password field " + confiPass.toString());
    }

    public String verifyConfirmPass() {
        String message =  getTextFromElement(confirmPass);
        log.info("Verify confirm password " + confiPass.toString());
        return message;
    }

    public void clickOnRegiButton() {
        clickOnElement(regiButton);
        log.info("Click on register button " + regiButton.toString());
    }

    public void selectGender(String female) {
        clickOnElement(femaleGender);
        log.info("Select gender " + femaleGender.toString());
    }

    public void selectDateOfBirth(String date) {
        selectByVisibleTextFromDropDown(dateOfBirth, date);
        log.info("Select date of birth " + date + "in date field " + dateOfBirth.toString());
    }

    public void selectDateOfMonth(String month) {
        selectByVisibleTextFromDropDown(dateOfMonth, month);
        log.info("Select date of month " + month + "in month field " + dateOfMonth.toString());
    }

    public void selectDateOfYer(String year) {
        selectByVisibleTextFromDropDown(dateOfYear, year);
        log.info("Select date of year " + year + "in year field " + dateOfYear.toString());
    }

    public String verifyRegister() {
        String message = getTextFromElement(registerComp);
        log.info("Verify register " + registerComp.toString());
        return message;
    }

}
