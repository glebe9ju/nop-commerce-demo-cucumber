Feature: Computer Test
  As user I wat to login into nop-commerce website
@sanity
  Scenario Outline: Verify that user should build you own computer
    Given I am in homepage
    When I click on computer tab
    And I click on desktops link
    And I click on product name "Build your own computer"
    And I select processor "<processor>"
    And I select Ram "<ram>"
    And I select HDDRam "<hdd>"
    And I select OS "<os>"
    And I select Software "<software>"
    And I click on add to cart
    Then I verify cart final message "The product has been added to your shopping cart"

    Examples:

      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |

