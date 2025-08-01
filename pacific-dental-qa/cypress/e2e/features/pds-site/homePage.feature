@pds
Feature: Validate the PDS HomePage

    # Hero banner - Main Hero with CTA
    Scenario: Validate the Hero Banner - - Main Hero with CTA component
        Given I am on the "pds" homepage
        When I navigate to the "sprint-2-demo/main-hero-with-cta.html"
        Then I should be able to see the Hero Banner with CTA on the page
        And with CTA Hero banner - I should be able to see the Background Image and its width 1920
        And Verify the H1 Title is present and verify the Font Style
        And Verify the CTA on the banner

    # Hero banner - Main Hero without CTA
    Scenario: Validate the Hero Banner - - Main Hero without CTA component
        Given I am on the "pds" homepage
        When I navigate to the "sprint-2-demo/main-hero-without-cta.html"
        Then I should be able to see the Hero Banner without CTA on the page
        And without CTA Hero banner - I should be able to see the Background Image and its width 1920
        And Verify the H1 Title is present and verify the Font Style

    # Hero banner - Hero Center-aligned text
    Scenario: Validate the Hero Banner - - Hero Center-aligned text
        Given I am on the "pds" homepage
        When I navigate to the "sprint-2-demo/hero-with-cta-center-aligned-.html"
        Then I should be able to see the Hero Center-aligned text on the page
        And Hero Center-aligned text - I should be able to see the Background Image and its width 1920
        And Verify the H1 Title is present and verify the Font Style
        And Verify the SubHeading is present and verify the Font Style
        And Verify the center aligned CTA on the banner

