Feature: End to end chevrolet brand page components validation

    @Regression
    Scenario: Section Heading component validation
    Given I open chevrolet brand page
    When I see section heading component in the page
    Then section heading component contains title, description and CTA button   

    Scenario: Button component validation
    Given I open chevrolet brand page
    When I see section heading component in the page
    Then section heading component contains title, description and CTA button   
    And I click on the CTA button
    
    
    