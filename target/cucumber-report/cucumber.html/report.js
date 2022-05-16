$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As user I wat to login into nop-commerce website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify that user should build you own computer",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select HDDRam \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify cart final message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 19,
      "id": "computer-test;verify-that-user-should-build-you-own-computer;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 20,
      "id": "computer-test;verify-that-user-should-build-you-own-computer;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 21,
      "id": "computer-test;verify-that-user-should-build-you-own-computer;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 22,
      "id": "computer-test;verify-that-user-should-build-you-own-computer;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4180196100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that user should build you own computer",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select HDDRam \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify cart final message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 93290700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 462536500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 420869700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnProductName(String)"
});
formatter.result({
  "duration": 778732700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 80709300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 62904500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.iSelectHDDRam(String)"
});
formatter.result({
  "duration": 55744200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 50816300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 54452000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 41099000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 29
    }
  ],
  "location": "ComputerSteps.iVerifyCartFinalMessage(String)"
});
formatter.result({
  "duration": 904021800,
  "status": "passed"
});
formatter.after({
  "duration": 656939000,
  "status": "passed"
});
formatter.before({
  "duration": 2525486200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that user should build you own computer",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select HDDRam \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify cart final message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 47200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 537124600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 457232400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnProductName(String)"
});
formatter.result({
  "duration": 689209300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 55506400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 59933300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.iSelectHDDRam(String)"
});
formatter.result({
  "duration": 76241900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 69440800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 66386400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 42081800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 29
    }
  ],
  "location": "ComputerSteps.iVerifyCartFinalMessage(String)"
});
formatter.result({
  "duration": 869941600,
  "status": "passed"
});
formatter.after({
  "duration": 661069400,
  "status": "passed"
});
formatter.before({
  "duration": 1842465200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that user should build you own computer",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select HDDRam \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify cart final message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 55600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 450863100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 412853900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iClickOnProductName(String)"
});
formatter.result({
  "duration": 746431100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 42256600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 63322700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.iSelectHDDRam(String)"
});
formatter.result({
  "duration": 56347200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 53878100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 81840100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 45677100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 29
    }
  ],
  "location": "ComputerSteps.iVerifyCartFinalMessage(String)"
});
formatter.result({
  "duration": 283438600,
  "status": "passed"
});
formatter.after({
  "duration": 647827600,
  "status": "passed"
});
formatter.uri("logIn.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I wat to login into nop-commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2568395000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to loginpage successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-loginpage-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I check the message display \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 69600,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 423483600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 29
    }
  ],
  "location": "LogInSteps.iCheckTheMessageDisplay(String)"
});
formatter.result({
  "duration": 25623100,
  "status": "passed"
});
formatter.after({
  "duration": 637876800,
  "status": "passed"
});
formatter.before({
  "duration": 2591759000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify the error message\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 425767200,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iEnterEmail()"
});
formatter.result({
  "duration": 56943900,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iEnterPassword()"
});
formatter.result({
  "duration": 56535400,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 386067700,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iVerifyTheErrorMessage()"
});
formatter.result({
  "duration": 28251700,
  "status": "passed"
});
formatter.after({
  "duration": 647996100,
  "status": "passed"
});
formatter.before({
  "duration": 2601502100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that user should login successfully with valid credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter eamil",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify logout link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 72600,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 417886300,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iEnterEamil()"
});
formatter.result({
  "duration": 55187700,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iEnterPassword()"
});
formatter.result({
  "duration": 54804800,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 377865500,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iVerifyLogoutLinkIsDisplay()"
});
formatter.result({
  "duration": 18500,
  "status": "passed"
});
formatter.after({
  "duration": 641560000,
  "status": "passed"
});
formatter.before({
  "duration": 1843013300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that user should logout successfully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "enter email",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "enter password",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify that login link display",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 34800,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 567099500,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.enterEmail()"
});
formatter.result({
  "duration": 58511800,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.enterPassword()"
});
formatter.result({
  "duration": 56794400,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.clickOnLoginButton()"
});
formatter.result({
  "duration": 392601900,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.clickOnLogoutLink()"
});
formatter.result({
  "duration": 17600,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.iVerifyThatLoginLinkDisplay()"
});
formatter.result({
  "duration": 16100,
  "status": "passed"
});
formatter.after({
  "duration": 636034800,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As user I wat to login into nop-commerce website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2637249400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 93200,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user should navigate to register page successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify register text",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 470298900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iVerifyRegisterText()"
});
formatter.result({
  "duration": 452191900,
  "status": "passed"
});
formatter.after({
  "duration": 644442700,
  "status": "passed"
});
formatter.before({
  "duration": 2549490300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 64600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify that all fields are mandatory",
  "description": "",
  "id": "register-test;verify-that-all-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the error message for first name \"First name is required.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify the error message for last name \"Last name is required.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify the error message for email \"Email is required.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I verify the error message for password \"Password is required.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify the error message for confirm password \"Password is required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 464282300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 53720100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 43
    }
  ],
  "location": "RegisterSteps.iVerifyTheErrorMessageForFirstName(String)"
});
formatter.result({
  "duration": 27830500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 42
    }
  ],
  "location": "RegisterSteps.iVerifyTheErrorMessageForLastName(String)"
});
formatter.result({
  "duration": 23209200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 38
    }
  ],
  "location": "RegisterSteps.iVerifyTheErrorMessageForEmail(String)"
});
formatter.result({
  "duration": 23075700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 41
    }
  ],
  "location": "RegisterSteps.iVerifyTheErrorMessageForPassword(String)"
});
formatter.result({
  "duration": 21441300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 49
    }
  ],
  "location": "RegisterSteps.iVerifyTheErrorMessageForConfirmPassword(String)"
});
formatter.result({
  "duration": 31602400,
  "status": "passed"
});
formatter.after({
  "duration": 639583100,
  "status": "passed"
});
formatter.before({
  "duration": 1908743600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInSteps.iAmInHomepage()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select gender",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I entered First Name \"Mark\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I entered Last Name \"Paul\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select day \"5\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select month \"April\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select year \"2016\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I entered email",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I entered password \"Mark123\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter confirm password \"Mark123\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify message \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 426942100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iSelectGender()"
});
formatter.result({
  "duration": 46503800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnteredFirstName(String)"
});
formatter.result({
  "duration": 59422000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paul",
      "offset": 21
    }
  ],
  "location": "RegisterSteps.iEnteredLastName(String)"
});
formatter.result({
  "duration": 56706200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iSelectDay(String)"
});
formatter.result({
  "duration": 54543400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.iSelectMonth(String)"
});
formatter.result({
  "duration": 52779600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2016",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iSelectYear(String)"
});
formatter.result({
  "duration": 56216400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnteredEmail()"
});
formatter.result({
  "duration": 60387300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark123",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iEnteredPassword(String)"
});
formatter.result({
  "duration": 57324500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark123",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 55749600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 715966400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iVerifyMessage(String)"
});
formatter.result({
  "duration": 24767000,
  "status": "passed"
});
formatter.after({
  "duration": 634690900,
  "status": "passed"
});
});