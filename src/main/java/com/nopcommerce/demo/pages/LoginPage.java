package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);}
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Log in']")
    WebElement logIn;
    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Welcome, Please Sign In!']")
    WebElement welCome;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement eMail;
    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passWord;
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Log in']")
    WebElement logInButton;
    @CacheLookup
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorInMessage;


    public void clickOnLogIn(){
        clickOnElement(logIn);
        log.info("Click on login " + logIn.toString());
    }
public String verifyWelcome(){
        String message = getTextFromElement(welCome);
        log.info("Verify welcome " + welCome.toString());
        return message;
}
public void enterEmail(String email){
        sendTextToElement(eMail,email);
        log.info("Enter email " + email + "in email field " + eMail.toString() );
}
public void enterPassWord(String pass){
        sendTextToElement(passWord,pass);
        log.info("Enter password " + pass + "in password field " + passWord.toString());
}
public void clickOnLogInButan(){
        clickOnElement(logInButton);
        log.info("Click on log in button " + logInButton.toString());
}
public String verifyErrorMessage(){
        String message = getTextFromElement(errorInMessage);
        log.info("Verify error message " + errorInMessage.toString());
        return message;
}


}
