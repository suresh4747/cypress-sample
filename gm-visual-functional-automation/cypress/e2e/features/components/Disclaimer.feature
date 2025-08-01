Feature: End to end chevrolet brand page components validation


@Regression
    Scenario: Disclaimer component validation with no scroll bar
    Given I go to the chevrolet brand page
    When I see that section heading component in the page
    Then I click on the title in the page
    And  I see the disclaimer is appearing in the page with close button 
    Then I click on close button disclaimer popup is closed


    Scenario: Disclaimer component validation with scroll bar
    Given I go to the chevrolet brand page
    When I see that section heading component in the page
    Then I click on the title in the page
    And  I see the disclaimer is appearing in the page with close button 
    Then I see the scrollbar is apearing below close button and scroll down to the bottom
    And I click on close button disclaimer popup is closed


    Scenario: Disclaimer component validation of the link present in description
    Given I go to the chevrolet brand page
    When I see that section heading component in the page
    Then I click on the title in the page
    And  I see the disclaimer is appearing in the page with close button 
    Then I see the text present in the description is highlighted and clickable

    Scenario: Disclaimer component validation of the on hovering the mouse the link present in description
    Given I go to the chevrolet brand page
    When I see that section heading component in the page
    Then I click on the title in the page
    And  I see the disclaimer is appearing in the page with close button 
    Then on hovering over text I see the link is present in the description text