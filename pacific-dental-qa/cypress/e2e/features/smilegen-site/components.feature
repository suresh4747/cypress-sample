 @smilegen
 Feature: Validate the SmileGen Website Components

    # ACCORDIAN
    # Scenario: Validate the Accordion component
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-3-demo/tabs-3-rows1/costs--financing---payment/"
#         Then I navigate to Accordion component in Specifications section
#         And Clicking on + icon opens all links
#         And Clicking on - icon closes all links
#         And Clicking on first accordion to expand and take a final screenshot of component

#     # NEWSLETTER
#     # Scenario: Verify Successful Newsletter Subscription on Overview Page
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     When I verify that the newsletter component is present
#     #     And I verify the subscribe text box
#     #     And I enter a valid email id "aabc@yopmail.com" in the subscribe text box
#     #     And I click on the subscribe button
#     #     Then I should see a confirmation message
#     #     And the confirmation message font family should be "Poppins, sans-serif"
#     #     And the confirmation message color should be black "rgb(0, 0, 0)"

#     # Scenario: Verify Newsletter Subscription Failure on Overview Page
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     When I enter an invalid email id "invalid-email@yopmail" in the subscribe text box
#     #     And I click on the subscribe button
#     #     Then I should see a failure message
#     #     And the failure message font family should be "Poppins, sans-serif"
#     #     And the failure message color should be red "rgb(224, 32, 32)"

#     # Scenario: Verify Newsletter Component Styling
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     When I locate the newsletter component title element
#     #     And the title font family should be "Poppins, sans-serif"
#     #     And the title should be of h3 style
#     #     And the body text font family should be "Roboto, sans-serif"
#     #     And the subscribe text font family should be "Poppins, sans-serif"


#     Scenario Outline: Verify the tabs component
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-3-demo/tabs-2-rows/routine-cleaning.html"
#         Then I check the link text in the table for text comparison
#             | Tabs               |
#             | OVERVIEW           |
#             | ROUTINE CLEANING   |
#             | DENTAL HYGIENE     |
#             | CANCER SCREENING   |
#             | X-RAYS/IMAGING     |
#             | DENTURES           |
#             | TELEDENTISTRY      |
#             | DENTAL SEALANTS    |
#             | FLOURIDE TREATMENT |
#             | FILLINGS           |
#             | SEDATION DENTISTRY |
#             | DENTAL CROWNS      |
#             | BRIDGES            |


#         And I click on each link text and verify the "sprint-3-demo/tabs-2-rows/" "<URL>" and text link
#         And I ensure that the active tab is highlighted with an orange color
#         Examples:
#             | URL                |
#             | overview           |
#             | routine-cleaning   |
#             | dental-hygiene     |
#             | cancer-screening   |
#             | x-rays-imaging     |
#             | dentures           |
#             | teledentistry      |
#             | dental-sealants    |
#             | flouride-treatment |
#             | fillings           |
#             | sedation-dentistry |
#             | dental-crowns      |
#             | bridges            |

#     Scenario: Verify RTE Component Styling
#             Given I am on the "smilegen" homepage
#             When I navigate to the "sprint-4-demo/copy-test-rte-page.html"
#             Then I navigate to the RTE component on the page
#             And then verify the heading should be in H1 to H6 in the component
#             And then verify the font styling of heading H1 to H6 in RTE component
#             And then verify the Paragraph text and its font styling in RTE component


           
#     # Scenario Outline: Perform a search with a selected tag in Primary Nav
#     #         Given I am on the "smilegen" homepage
#     #         When I navigate to the "sprint-4-demo/search-component-/primary-nav-search.html"
#     #         Then the search icon should be present on primary Nav
#     #         And the user clicks on the dropdown
#     #         Then the search dropdown should appear with "<Tag>"
#     #         When the user selects "<Tag>" and user performs a search "test" then URL should contain selected tag and searched text in URL
#     #         Examples:
#     #             | Tag       |
#     #             | All       |
#     #             | Offices   |
#     #             | Providers |
#     #             | Articles  |
#     #             | FAQ       |

#     #         Scenario Outline: Perform a search with a selected tag on Banner
#     #         Given I am on the "smilegen" homepage
#     #         When I navigate to the "sprint-4-demo/search-component-.html"
#     #         Then the search component with dropdown should be present on banner
#     #         And the user clicks on the dropdown
#     #         Then the search dropdown should appear with "<Tag>"
#     #         When the user selects "<Tag>" and user performs a search "test" then URL should contain selected tag and searched text in URL
#     #         Examples:
#     #             | Tag       |
#     #             | All       |
#     #             | Offices   |
#     #             | Providers |
#     #             | Articles  |
#     #             | FAQ       |

#     # Scenario: Perform a search without dropdown on Banner
#     # Given I am on the "smilegen" homepage
#     # When I navigate to the "sprint-4-demo/search-component-without-dropdown.html"
#     # Then the search component without dropdown should be present on banner
#     # When User performs a search "test" then URL should contain searched text and "Offices" tag


#     # cards component

#     # Scenario: Verify Text Card with CTA
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-4-demo/text-card/text-card-with-cta.html"
#     #     When the user views the text cards
#     #     And each card with CTA should have a Title, Description and CTA button
#     #     And verify the CTA response is 200
#     #     And the background color of each text card should be white

#     # Scenario: Verify Text Card without CTA
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-4-demo/text-card/text-card-without-cta.html?ic=djd"
#     #     And the user views the text cards without CTA
#     #     And each card without CTA should have a Title and Description
#     #     And the background color of each Text card without CTA should be white

#     # Scenario: Verify Fact Card
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-4-demo/fact-card/yellow-fact-card.html?ic=dfj"
#     #     And the user views the fact card
#     #     Then the fact card should have a yellow background
#     #     And the fact card should display a Title
#     #     And the fact card should display a Subtitle
#     #     And title, subtitle should be center aligned

#     # Scenario: Verify Cost Cards
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-4-demo/yellow-card-cta/cost-card.html?ic=dhd"
#     #     And the user views the cost cards
#     #     And each card should have a Title
#     #     And each card should have a Cost displayed
#     #     And each card should have a Date displayed
#     #     And each card should have a CTA link, verify the CTA response is 200
#     #     And the background color of each cost card should be white


#     # Scenario: Verify Tags Cards
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-4-demo/yellow-card-cta/with-tags.html?ic=dfj"
#     #     And the user views the tags cards
#     #     And each tags card should have a Title
#     #     And each tags card should have a Description
#     #     And each card should have Tags
#     #     And if a specific tag is present with a CTA, verify the CTA response is 200

    



#     #Hero banner

#     # Scenario Outline: Verify Homepage Variation
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/hero-variations/home-page-variation.html"
#     #     Then I verify the title text with white first part and yellow last word
#     #     And I verify the subtext font and size
#     #     And I verify the dropdown with yellow background
#     #     Then the search dropdown should appear with "<Tag>"
#     #     And I verify the search field with ghost text
#     #     When the user selects "<Tag>" and user performs a search "test" then URL should contain selected tag and searched text in URL
#     #     Examples:
#     #         | Tag       |
#     #         | All       |
#     #         | Offices   |
#     #         | Providers |
#     #         | Articles  |


#     # Scenario: Verify Landing Page
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/hero-variations/landing-page-variation.html"
#     #     Then I verify the heading text and UI
#     #     And I verify the subheading with price text and UI
#     #     And I verify the paragraph text and UI
#     #     Then I verify the button UI
#     #     And I click the button that navigates to a particular page with a 200 response


#     # Scenario: Verify Text Only Variation
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/hero-variations/text-only-variation.html"
#     #     And I verify the title UI
#     #     And there should be no background image
#     #     And there should be no subtext


#     # Scenario: Verify Text Only with Copy Variation
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/hero-variations/text-only-with-copy.html"
#     #     And I verify the title UI
#     #     And I verify the subtext UI
#     #     And there should be no background image


#     # Scenario: Verify Background Image Variation
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/hero-variations/bg-image-variation.html"
#     #     Then there should be a background image
#     #     And I verify the text UI


#     # Scenario: Verify Category Variation
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/hero-variations/category-page.html"
#     #     Then there should be a background image
#     #     And I verify the text with yellow last word
#     #     And I verify the text UI on Category Variation


#     # Scenario: Verify Landing Page White Text Copy
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/hero-variations/landing-page-white-text-top-copy.html"
#     #     Then there should be a background image
#     #     And I verify the text presence
#     #     And I verify the text color is white

#     # Scenario: Verify the presence and properties of the information component
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     Then I should see a page with the information box
#     #     And the text in the information box should contain "Brushing your teeth twice a day could lower your risk of developing cardiovascular disease."
#     #     And the "Did You Know" text should be "Poppins, sans-serif"
#     #     # And there should be an icon displayed
#     #     And the other text should be "Roboto, sans-serif"
#     #     And  I click on the button, response should be 200






