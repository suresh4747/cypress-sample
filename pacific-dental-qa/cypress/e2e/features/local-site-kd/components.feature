@LocalKD
Feature: Validate the LO-KD Components

  # HERO COMPONENT
  Scenario: Verify Full-Width Hero on Page
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/hero-component/full-width/"
    Then I verify that the full-width hero is present
    And there is a title, description, one CTA link, and one button
    And the title is an "h1" element with font family "Poppins, sans-serif"
    And the description is a paragraph element with font family "Poppins, sans-serif"
    And the button goes to a 200 response

  Scenario: Verify Half-Width Hero on Page
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/hero-component/half-width-left/?ds"
    Then I verify that the half-width hero is present
    And there is title, description, one CTA link, and one button
    And the title is "h1" element with font family "Poppins, sans-serif"
    And the description is paragraph element with font family "Poppins, sans-serif"
    And the button goes to 200 response

  Scenario: Verify Simple Hero with Small Image on Page
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/hero-component/simple/?fds"
    Then I verify that the simple hero with image is present
    And there is the title, description, one CTA link, and one button
    And the title is the "h1" element with font family "Poppins, sans-serif"

  # SERVICES COMPONENT
  Scenario: Verify Dental Services
    Given I am on the LO_KD homepage
    When I navigate to the ""
    Then I should be able to see dental services section
    And each dental service should've icon and link
    And the link should be underlined in "#009bd7"
    And the link href response status code should be 200
    And after that, there should be a "SEE MORE" button then click on see more
    Then it should show all services
    And "SEE MORE" button is not displayed

  # STAGGERED CARDS
  Scenario: Staggered Card with title
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/staggered-card/with-title/"
    Then the staggered card should be present
    And the title should be present in the staggered card component
    And the description should be present in the staggered card component
    And Card title should be "Poppins, sans-serif" and font size should be "24px"
    And staggered card component title is "Poppins, sans-serif" and font size should be "100px"
    And staggered card component description is "Poppins, sans-serif" and font size should be "18px"
    And the CTA link should be present in the staggered card component
    And CTA text in the staggered card component should be in "Poppins, sans-serif" and the font size should be "18px"
    And verify CTA response is 200
    And the background image should be present
    Then there should be four non-clickable cards
    And each non-clickable card should have a image and title

  Scenario: Staggered Card with CTA Link
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/staggered-card/cta/"
    And the title should be present in the staggered card component
    And the description should be present in the staggered card component
    And Card description should be "Poppins, sans-serif" and font size should be "18px"
    And staggered card component title is "Poppins, sans-serif" and font size should be "100px"
    And staggered card component description is "Poppins, sans-serif" and font size should be "18px"
    And the CTA link should be present in the staggered card component
    And CTA text in the staggered card component should be in "Poppins, sans-serif" and the font size should be "18px"
    And the background image should be present
    And verify CTA response is 200

  Scenario:  Staggered Card with Reviews
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/staggered-card/review/"
    Then the staggered card with reviews should be present
    And the title should be present in the staggered card component
    And the description should be present in the staggered card component
    And title should be in the "Poppins, sans-serif" and the font size should be "100px"
    And the description should be in the "Poppins, sans-serif" and the font size should be "18px"
    And the background image should be present
    Then there should be four non-clickable cards with reviews
    And each non-clickable card with a review should have a description, review star, and author name
    And the author name should be in the "Poppins, sans-serif" and the font size should be "20px"
    And the description should be in the "Poppins, sans-serif" and font size should be "20px"
    And each card should not have an image

  # SEARCH OVERLAY
  Scenario: Opening the search overlay from the homepage
    Given I am on the LO_KD homepage
    When I navigate to the ""
    When I click on the search icon in the navigation
    Then the search overlay should be opened
    And the overlay should have a search field and button
    And the overlay should have a heading with font size "34px" and font style "Poppins, sans-serif"
    And the overlay should have quick links
    And the border bottom of search overloy should have "#009bd7" color

  Scenario: Performing a search from the overlay
    Given I am on the LO_KD homepage
    When I navigate to the ""
    When I click on the search icon in the navigation
    Then the search overlay should be opened
    And I enter text "searched text" in the search field
    And I click on the search button
    Then the user should navigate to a page where the URL contains "#q=searched%20text&t=all"

  # GALLERY COMPONENT
  Scenario: View and Navigate through Gallery
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/gallery-component/gallery-component-images-and-videos/"
    And the gallery component is loaded
    And there are multiple assets in the gallery
    Then each asset should have a title or caption displayed
    And the title should be in "Poppins, sans-serif" and the font size should be "24px"
    And the carousel area should have left and right arrow icons
    And Clicking on each image should display same image in larger size,default first image should be enlarged

  Scenario: Verify carousel in gallery
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/gallery-component/gallery-component-images-and-videos/"
    And the user clicks on the right arrow icon in the carousel
    Then the carousel should move to the next asset
    When the user clicks on the left arrow icon in the carousel
    Then the carousel should move to the previous asset

  # GALLERY COMPONENT - KD REDESIGN
  Scenario: Verify Highlighting colour of Selected Photos in gallery for KD site
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/gallery-component/gallery-component-images-and-videos/"
    And I click on a photo in the below strip
    Then the clicked photo should be highlighted in "#0097A8" for KD site
    And the corresponding bigger image should have background color black
    And color of arrow icon should be "#009BD7" for KD site

  # SWATCH COLOR COMPONENT
  Scenario: Verify swatch colours for KD site
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/swatch-color/container/?dddsl"
    And check the first color code should be "#ACE07C" for KD site
    And check the second color code should be "#FEA421" for KD site
    And check the third color code should be "#FFEE84" for KD site
    And check the fourth color code should be "#F0FAFC" for KD site

  # BUTTON COMPONENT Redesign
  Scenario: Verify Primary Button
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
    Then the primary button background color should be "#FFEE84" for KD site
    And the primary button font size should be "16px" for KD site
    And the primary button font colour should be "#444444" for KD site

  Scenario: Verify link CTA
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
    Then the link CTA font size should be "18px" for KD site
    And the link CTA font colour should be "#444444" for KD site
    And underline colour should be "#009BD7" for KD site

  Scenario: Verify category Tag CTA
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
    Then the category Tag background color should be "#F7F8FC" for KD site
    And the category Tag font size should be "14px" for KD site
    And the category Tag font colour should be "#009BD7" for KD site

  Scenario: Verify secondary CTA
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
    Then the secondary CTA background color should be "rgba(0, 0, 0, 0)" for KD site
    And the secondary CTA font size should be "16px" for KD site
    And the secondary CTA font colour should be "#444444" for KD site
    And the secondary CTA outline colour should be "#009bd7" for KD site

  Scenario: Verify underline white on state
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
    And the underline white on state font size should be "18px" for KD site
    And the underline white on state font colour should be "#ffffff" for KD site
    And underline white on state underline colour should be "#009BD7" for KD site

  Scenario: Verify Secondary White CTA
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
    Then the secondary white CTA background color should be "#ffffff" for KD site
    And the secondary white CTA font size should be "16px" for KD site
    And the secondary white CTA font colour should be "#009BD7" for KD site

  # #RTE Redesign
  Scenario: Verify RTE KD Styling
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/text/"
    Then I should see the font colour options "#009BD7", "#FFFFFF", "#FFEE84", "#444444" for KD
    And I should see the body text font size and font type for KD as "18px" and "Poppins, sans-serif"
    And I should see the link text colour for KD as "#009BD7" and size as "18px"
    And I should see the font type for H1 in KD as "h1" and size as "104px"
    And I should see the font type for H2 in KD as "h2" and size as "80px"
    And I should see the font type for H3 in KD as "h3" and size as "62px"
    And I should see the font type for H4 in KD as "h4" and size as "48px"
    And I should see the font type for H5 in KD as "h5" and size as "34px"
    And I should see the font type for H6 in KD as "h6" and size as "22px"
    And I should see the font type for Style 1 in KD as "title-1" and size as "104px"
    And I should see the font type for Style 2 in KD as "title-2" and size as "80px"
    And I should see the font type for Style 3 in KD as "title-3" and size as "62px"
    And I should see the font type for Style 4 in KD as "title-4" and size as "48px"
    And I should see the font type for Style 5 in KD as "title-5" and size as "34px"
    And I should see the font type for Style 6 in KD as "title-6" and size as "22px"
    And I should see the font type for Style 7 in KD as "title-7" and size as "16px"
    And I should see the font type for Style 8 in KD as "title-8" and size as "12px"

  #TITLE Redesign
  Scenario: Verify title for KD
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/title/h1/?cs"
    Then I should see the title heading colour option as "#009BD7", "#444444", "#FFFFFF", "#FFEE84" for KD title
    And I should see the title heading type for H1 in KD as "h1" and heading size as "104px"
    And I should see the title heading type for "h1" Style 1 in KD as "style-1" and heading size as "104px"
    And I should see the title heading type for "h1" Style 2 in KD as "style-2" and heading size as "80px"
    And I should see the title heading type for "h1" Style 3 in KD as "style-3" and heading size as "62px"
    And I should see the title heading type for "h1" Style 4 in KD as "style-4" and heading size as "48px"
    And I should see the title heading type for "h1" Style 5 in KD as "style-5" and heading size as "34px"
    And I should see the title heading type for "h1" Style 6 in KD as "style-6" and heading size as "22px"
    And I should see the title heading type for "h1" Style 7 in KD as "style-7" and heading size as "16px"
    And I should see the title heading type for "h1" Style 8 in KD as "style-8" and heading size as "12px"
    When I navigate to the "safe-house/other-testing/sprint-2/title/h2/"
    And I should see the title heading type for H2 in KD as "h2" and heading size as "80px"
    And I should see the title heading type for "h2" Style 1 in KD as "style-1" and heading size as "104px"
    And I should see the title heading type for "h2" Style 2 in KD as "style-2" and heading size as "80px"
    And I should see the title heading type for "h2" Style 3 in KD as "style-3" and heading size as "62px"
    And I should see the title heading type for "h2" Style 4 in KD as "style-4" and heading size as "48px"
    And I should see the title heading type for "h2" Style 5 in KD as "style-5" and heading size as "34px"
    And I should see the title heading type for "h2" Style 6 in KD as "style-6" and heading size as "22px"
    And I should see the title heading type for "h2" Style 7 in KD as "style-7" and heading size as "16px"
    And I should see the title heading type for "h2" Style 8 in KD as "style-8" and heading size as "12px"
    When I navigate to the "safe-house/other-testing/sprint-2/title/h3/"
    And I should see the title heading type for H3 in KD as "h3" and heading size as "62px"
    And I should see the title heading type for "h3" Style 1 in KD as "style-1" and heading size as "104px"
    And I should see the title heading type for "h3" Style 2 in KD as "style-2" and heading size as "80px"
    And I should see the title heading type for "h3" Style 3 in KD as "style-3" and heading size as "62px"
    And I should see the title heading type for "h3" Style 4 in KD as "style-4" and heading size as "48px"
    And I should see the title heading type for "h3" Style 5 in KD as "style-5" and heading size as "34px"
    And I should see the title heading type for "h3" Style 6 in KD as "style-6" and heading size as "22px"
    And I should see the title heading type for "h3" Style 7 in KD as "style-7" and heading size as "16px"
    And I should see the title heading type for "h3" Style 8 in KD as "style-8" and heading size as "12px"
    When I navigate to the "safe-house/other-testing/sprint-2/title/h4/"
    And I should see the title heading type for H4 in KD as "h4" and heading size as "48px"
    And I should see the title heading type for "h4" Style 1 in KD as "style-1" and heading size as "104px"
    And I should see the title heading type for "h4" Style 2 in KD as "style-2" and heading size as "80px"
    And I should see the title heading type for "h4" Style 3 in KD as "style-3" and heading size as "62px"
    And I should see the title heading type for "h4" Style 4 in KD as "style-4" and heading size as "48px"
    And I should see the title heading type for "h4" Style 5 in KD as "style-5" and heading size as "34px"
    And I should see the title heading type for "h4" Style 6 in KD as "style-6" and heading size as "22px"
    And I should see the title heading type for "h4" Style 7 in KD as "style-7" and heading size as "16px"
    And I should see the title heading type for "h4" Style 8 in KD as "style-8" and heading size as "12px"
    When I navigate to the "safe-house/other-testing/sprint-2/title/h5/"
    And I should see the title heading type for H5 in KD as "h5" and heading size as "34px"
    And I should see the title heading type for "h5" Style 1 in KD as "style-1" and heading size as "104px"
    And I should see the title heading type for "h5" Style 2 in KD as "style-2" and heading size as "80px"
    And I should see the title heading type for "h5" Style 3 in KD as "style-3" and heading size as "62px"
    And I should see the title heading type for "h5" Style 4 in KD as "style-4" and heading size as "48px"
    And I should see the title heading type for "h5" Style 5 in KD as "style-5" and heading size as "34px"
    And I should see the title heading type for "h5" Style 6 in KD as "style-6" and heading size as "22px"
    And I should see the title heading type for "h5" Style 7 in KD as "style-7" and heading size as "16px"
    And I should see the title heading type for "h5" Style 8 in KD as "style-8" and heading size as "12px"
    When I navigate to the "safe-house/other-testing/sprint-2/title/h6/"
    And I should see the title heading type for H6 in KD as "h6" and heading size as "22px"
    And I should see the title heading type for "h6" Style 1 in KD as "style-1" and heading size as "104px"
    And I should see the title heading type for "h6" Style 2 in KD as "style-2" and heading size as "80px"
    And I should see the title heading type for "h6" Style 3 in KD as "style-3" and heading size as "62px"
    And I should see the title heading type for "h6" Style 4 in KD as "style-4" and heading size as "48px"
    And I should see the title heading type for "h6" Style 5 in KD as "style-5" and heading size as "34px"
    And I should see the title heading type for "h6" Style 6 in KD as "style-6" and heading size as "22px"
    And I should see the title heading type for "h6" Style 7 in KD as "style-7" and heading size as "16px"
    And I should see the title heading type for "h6" Style 8 in KD as "style-8" and heading size as "12px"

  # ACCORDIAN
  Scenario: Validate the Accordion component
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/accordion/"
    Then I navigate to Accordion component in Specifications section
    And Clicking on + icon opens all links
    And Clicking on - icon closes all links

  # QUOTE COMPONENT
  Scenario: Verify Single Quote
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-5/quote/"
    Then the quote component is loaded on the page
    And the carousel should display with a maximum of 1 quote
    And the single quote should have quote text, title and author are displayed on the quote
    And the quote title should be in "Poppins, sans-serif" and font size should be "24px" and weight should be bold
    And the quote text should have font family "Poppins, sans-serif" and font size should be "48px" and weight should be bold
    And the quote author text should be in "Poppins, sans-serif" and font size should be "18px"
    And the background color of quote should be "#f0fafc"

  Scenario: Verify Three Quotes Carousel
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-5/quote/"
    Then the quote component is loaded on the page
    And the carousel should display with a maximum of 3 quotes
    And first dot should be selected by default and quote text, title and author are displayed for first quote
    And the quote title should be in "Poppins, sans-serif" and font size should be "24px" and weight should be bold in first quote
    And quote text should have font family "Poppins, sans-serif" and font size should be "48px" and weight should be bold in first quote
    And the quote author text should be in "Poppins, sans-serif" and the font size should be "18px" in first quote
    And the background color of quote should be "#f0fafc" for first quote
    And the carousel dots should appear below the carousel
    When the user clicks on the dot for quote 2
    Then the carousel should display the second quote
    And the second quote component should have quote text, title and author displayed
    And the quote title should be in "Poppins, sans-serif" and font size should be "24px" and weight should be bold in second quote
    And the quote text should have the font family "Poppins, sans-serif" and font size should be "48px" and weight should be bold in second quote
    And the quote author text should be in "Poppins, sans-serif" and font size should be "18px" in second quote
    And the background color of quote should be "#f0fafc" for second quote
    When the user clicks on the dot for quote 3
    Then the carousel should display the third quote
    And the third quote component should have quote text, title and author displayed
    And the quote title should be in "Poppins, sans-serif" and font size should be "24px" and weight should be bold in third quote
    And quote text should have the font family "Poppins, sans-serif" and font size should be "48px" and weight should be bold in third quote
    And the quote author text should be in "Poppins, sans-serif" and font size should be "18px" in third quote
    And the background color of quote should be "#f0fafc" for third quote
    And verify that title, text and author are different to check new quote is loaded

  # INFO COMPONENT
  Scenario: Verify the presence and properties of the information component
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-5/information/"
    And the text in the information box should contain "Brushing your teeth twice a day could lower your risk of developing cardiovascular disease."
    And the "Did You Know?" text should be "Poppins, sans-serif" and font size is "20px"
    And there should be an icon displayed
    And the other text should be "Poppins, sans-serif" and font size is "18px"
    And I click on the button, response should be 200
    And the background color of button should be "#009bd7"
    And "Next" text should be "Poppins, sans-serif" and font size is "20px"

  # COMMON CONCERN CAROUSEL
  Scenario: Verify Common Concern carousel
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/carousel-magazine-common/"
    Then I should be able to see Common Concern carousel component
    And I should see right arrow
    And there are cards displayed with image and title
    And the card title is having font family "Poppins, sans-serif" and font size "18px" on Common Concern carousel
    And the user clicks on any part of the card and user should be redirected to the corresponding link with a 200 status code

  Scenario: Clicking on arrow in Common Concern carousel
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/carousel-magazine-common/"
    Then I should be able to click on right side arrow
    And next articles should be displayed
    And when we click on on previous arrow previous articles should be displayed

  Scenario: Verify common concerns 4 column
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
    Then I should be able to see 4 column common concerns card set
    And I should see 4 cards in row and there is no arrow
    And there are Common Concern cards displayed with image and title
    And the card title is having font family "Poppins, sans-serif" and font size "18px" on Common Concern 4 column
    When the user clicks on any part of the common concern 4 card and user should be redirected to the corresponding link with a 200 status code

  Scenario: Verify common concerns 3 column
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
    Then I should be able to see 3 column common concerns card set
    And I should see two rows with in three cards each row without arrow
    And there are Common Concern 3 cards displayed with image and title
    And the card title is having font family "Poppins, sans-serif" and font size "18px" on Common Concern 3 column
    When the user clicks on any part of the common concern 3 card and user should be redirected to the corresponding link with a 200 status code

  # COMMON CONCERN CAROUSEL Redesign
  Scenario: Verify Common Concern carousel Redesign
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/carousel-magazine-common/"
    Then I should be able to see the Common Concern carousel component
    And common Concern carousel arrow colour should be "#009BD7" for KD site
    And the text underline colour should be "#009BD7" for KD site

  Scenario: Verify common concerns 4 column Redesign
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
    Then I should be able to see 4 Common Concern carousel component
    And the common concerns 4 column text underline colour should be "#009BD7" for KD site

  Scenario: Verify common concerns 3 column Redesign
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
    Then I should be able to see 3 Common Concern carousel component
    And the common concerns 3 text underline colour should be "#009BD7" for KD site

  # MAGAZINE CAROUSEL
  Scenario: Verify Magazine Carousel Display and Navigation
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/carousel-magazine-common/"
    Then I should see the magazine carousel displayed
    And the magazine carousel should contain a right arrow and 4 cards
    And each magazine carousel card should be clickable with a 200 status code
    And each card should have an image and a description
    And the card title is having font family "Poppins, sans-serif" and font size "20px" on Magazine Carousel
    And the card description is having font family "Poppins, sans-serif" and font size "18px" on Magazine Carousel

  Scenario: Verify Carousel Navigation Functionality
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/carousel-magazine-common/"
    When I click on the right arrow
    Then the next card in the carousel should be displayed
    And when we click on previous arrow, previous card should display in 4 set card
    When I reach the end of the carousel by clicking the right arrow multiple times
    And there should not be a right arrow visible and only the left arrow should be displayed

  Scenario: Verify Two column Magazine
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
    Then I should see the 2-column magazine displayed
    And the 2-column should contain 2 cards in row and does not contain any arrow
    And each card should be clickable with a 200 status code
    And each Two column Magazine card should have an image, title in blue color, and a description
    And the card title is having font family "Poppins, sans-serif" and font size "20px" on Two column Magazine Carousel
    And the card description is having font family "Poppins, sans-serif" and font size "18px" on Two column Magazine Carousel

  Scenario: Verify Four column Magazine
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
    Then I should see the 4-column magazine displayed
    And the 4-column should contain 4 cards and does not contain any arrow
    And each Four column Magazine card should be clickable with a 200 status code
    And each Four column Magazine card should have an image, title in blue color, and a description
    And the card title is having font family "Poppins, sans-serif" and font size "20px" on Four column Magazine Carousel
    And the card description is having font family "Poppins, sans-serif" and font size "18px" on Four column Magazine Carousel

  # MAGAZINE CAROUSEL Redesign
  Scenario: Verify Magazine Carousel carousel Redesign
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/carousel-magazine-common/"
    Then I should be able to see the Magazine carousel component
    And magazine carousel arrow colour should be "#009BD7" for KD site
    And the magazine carousel title colour should be "#009BD7" for KD site

  Scenario: Verify Magazine Carousel 4 column Redesign
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
    Then I should be able to see 4 Magazine carousel component
    And the 4 magazine carousel title colour should be "#009BD7" for KD site

  Scenario: Verify Magazine Carousel 2 column Redesign
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
    Then I should be able to see 2 Magazine carousel component
    And the 2 magazine carousel title colour should be "#009BD7" for KD site

  # CARD COMPONENT Redesign
  Scenario: Verify Text Card with CTA
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/cards/text-cards/"
    When the user views the text cards
    And each card with CTA should have a Title, Description and CTA button
    And verify the CTA response is 200
    And the background color of each text card should be white

  Scenario: Verify Text Card without CTA
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/cards/text-cards/"
    And the user views the text cards without CTA
    And each card without CTA should have a Title and Description
    And the background color of each Text card without CTA should be white

  Scenario: Verify Fact Card
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/cards/text-cards/"
    And the user views the fact card
    Then the fact card should have a "#ACE07C", "#FEA421", "#FFEE84", "#F0FAFC" background
    And the fact card should display a Title
    And the fact card should display a Subtitle
    And title, subtitle should be center aligned

  Scenario: Verify Cost Cards
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/cards/yellow-cta-cards/?fs"
    And the user views the cost cards
    And each card should have a Title
    And each card should have a Cost displayed
    And each card should have a Date displayed
    And each card should have a CTA link, verify the CTA response is 200
    And the background color of each cost card should be white

  Scenario: Verify Tags Cards
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/cards/yellow-cta-cards/?fs"
    And the user views the tags cards
    And each tags card should have a Title
    And each tags card should have a Description
    And each card should have Tags
    And if a specific tag is present with a CTA, verify the CTA response is 200

  Scenario: Verify Text Card with Icon
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/cards/text-cards/"
    And the user views the text cards with Icon
    And card should have a Title and Description
    And card should have a CTA link, verify the CTA response is 200

  # COST ESTIMATOR COMPONENT
  Scenario: Verify component with tabs
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator1/"
    When the cost estimator component is loaded
    Then by default user should see 'Routine cleaning' title
    And Routine cleaning tab should contain cost three columns of cost card teaser
    And Tab has background colour as 'rgb(240, 250, 252)' for KD site
    And each cost card has cost, title and subtext displayed
    And the cost text should be in "Poppins, sans-serif" and font size should be "140px"
    And the title text should be in "Poppins, sans-serif" and font size should be "36px"
    And the subtext text should be in "Poppins, sans-serif" and font size should be "16px"

  Scenario: Clicking once on right and left arrow icon
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator/"
    When the user clicks on the right arrow icon
    Then the content of "Root canal" should be displayed
    When the user clicks on the left arrow icon
    Then the content of "Routine cleaning" tab should be displayed

  Scenario: Verifying round robin fashion one clicking the right and left arrow multiple times
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator/"
    When the user clicks on the right arrow icon for 4 times
    Then user should see "Root canal" as tab name
    When user clicks on right arrow one more time
    Then content of "X-rays" tab should be displayed
    When the user clicks on the left arrow icon for 4 times
    Then user should see "Root canal" as tab name
    When user clicks on left arrow one more time
    Then the content of "Routine cleaning" tab should be displayed

  Scenario: Verify display of icons based on number of tabs in cost estimator
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator1/"
    When there are "4" tabs authored
    Then the left and right arrow icons should be hidden
    When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator/"
    When there are "6" tabs authored
    Then the left and right arrow icons should be visible

  Scenario: User can click on the tab
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator/"
    When user clicks on "Root canal" tab
    Then the content of "Root canal" should be displayed

  Scenario: Verify cost estimator cost colour for KD
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator/"
    Then the cost estimator cost colour should be "#009BD7" for KD site
    And the cost estimator arrow colour should be "#009BD7" for KD site
    And the cost estimator tab border top colour should be "#009BD7" for KD site

  # TEASER
  Scenario: Verify when user clicks "See More" link to view more description
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/teaser/teaser1/?sddas"
    Then verify the teaser with an image on the page
    And verify the teaser has a heading and subtext
    And the title should be in "Poppins, sans-serif" and font size should be "52px"
    And the subtext should be in "Poppins, sans-serif" and font size should be "18px"
    And verify the teaser has a "see more" link
    And verify the "see more" link has underline with color "#009bd7"
    When the user clicks on the "see more" link
    Then the teaser expands to show more description
    And the teaser displays a "see less" link
    And verify "see less" link has underline with color "#009bd7"
    When the user click on the "see less" link
    Then the teaser collapses to hide the additional description and "see more" link should be visible

  Scenario: Verify image is present at left position and teaser with CTA
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/teaser/teaser1/?ds"
    Then verify teaser with half left image on the page
    And verify Teaser- left image is present
    And title and description is present on right side
    And title should be in "Poppins, sans-serif" and font size should be "52px"
    And the description should be in "Poppins, sans-serif" and font size should be "18px"
    And there is CTA link at bottom
    And CTA text should be in "Poppins, sans-serif" and font size should be "18px"
    And clicking on CTA link navigates to 200 page
    And verify the CTA link has underline with color "#009bd7"

  Scenario: Verify image is present at right position and teaser with CTA
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/teaser/teaser1/?ds"
    And verify teaser with half right image on the page
    And verify Teaser - right image is present on the page
    And title and description is present on left side
    And title should be in "Poppins, sans-serif" and the font size should be "52px"
    And description should be in "Poppins, sans-serif" and font size should be "18px"
    And there is CTA link at the bottom
    And CTA text should be in "Poppins, sans-serif" and the font size should be "18px"
    And clicking on CTA link navigates to the 200 page
    And verify CTA link has underline with color "#009bd7"

  Scenario: Verify image is present and Teaser without CTA
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/teaser/teaser1/?ds"
    And verify teaser with half image without CTA on the page on KD site
    And verify teaser image is present on KD site
    And verify title is present on the page on KD site
    And verify description is present on KD site
    And title should be in the "Poppins, sans-serif" and font size should be "52px" on KD site
    And the description should be in "Poppins, sans-serif" and the font size should be "18px" on KD site
    And there is no CTA link at bottom on KD site

  #  DYNAMIC LISTING
  Scenario: Verify 3 cards listing
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/dynamic-listing/"
    Then I shoud see the 3 cards listing variation on KD site
    And "VIEW ALL" button should be displayed on right side on KD site
    And the Button text "VIEW ALL" is having font family "Poppins, sans-serif" and font size "18px" on 3 cards listing on KD site
    And I see that there are "3" cards in the listing on KD site
    And Each card has image, title and description on KD site
    And title should be in "#009bd7" color on KD site
    And the Card title is having font family "Poppins, sans-serif" and font size "24px" on 3 cards listing on KD site
    And the Card description is having font family 'Poppins, sans-serif' and font size "18px" on 3 cards listing on KD site
    And I see that each article title is a link to the full article and with a 200 status code on KD site
    And I see that the "VIEW ALL" button should have 200 status code on 3 cards listing on KD site

  Scenario: Verify 4 cards listing
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/dynamic-listing/"
    Then I see the 4 cards listing variation on KD site
    And "VIEW ALL" button should be displayed on the right side on KD site
    And the Button text "VIEW ALL" is having font family "Poppins, sans-serif" and font size "18px" on 4 cards listing component on KD site
    And I see that there are "4" cards on cards listing on KD site
    And Each card has image, title and description on 4 cards listing on KD site
    And title should be in "#009bd7" color on 4 cards listing on KD site
    And the Card title is having font family "Poppins, sans-serif" and font size "24px" on 4 cards listing on KD site
    And the Card description is having font family 'Poppins, sans-serif' and font size "18px" on 4 cards listing on KD site
    And Verify that each article title is a link to the full article and with a 200 status code on KD site
    And I see that the "VIEW ALL" button should have 200 status code on 4 cards listing on KD site

  Scenario: Verify carousel listing
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/dynamic-listing/"
    Then I should see carousel listing variation on KD site
    And "View all" button should be displayed on right side of carousel listing component on KD site
    And the Button text "View all" is having font family "Poppins, sans-serif" and font size "18px" on 3 card carousel listing on KD site
    And I see that there are 3 cards in the listing on KD site
    And Each card has image title and description on KD site
    And the Card title is having font family "Poppins, sans-serif" and font size "24px" on carousel listing on KD site
    And the Card description is having font family "Poppins, sans-serif" and font size "18px" on carousel listing on KD site
    And Verify that each card title is a link to the full article and with a 200 status code on KD site
    And I see that the "View all" button should have 200 status code on 3 carousel listing on KD site
    And there is "more" link at right side of carousel on KD site
    And "more" text should be in "#009bd7" color on KD site
    And arrow icon with more text color should be "#009bd7" on KD site
    And when I click on "more" link, then i should see three more cards are coming up on KD site
    And there is "less" link on left side of carousel on KD site
    And "less" text should be in this "#009bd7" color on KD site
    And arrow icon with less text color should be "#009bd7" on KD site
    And clicking on "less" we should see first three cards on KD site
    And clicking on "more" link for three times, more link disappears and only "less" link should be present on KD site

  Scenario: Verify Carousel with Fact Card Display and Navigation
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-3/dynamic-listing/"
    And the carousel should have a title and description below it on KD site
    And the title is having font family "Poppins, sans-serif" and font size "36px" on fact card component on KD site
    And the description is having font family "Poppins, sans-serif" and font size "18px" on fact card component on KD site
    And the carousel contains three cards in a row on KD site
    And verify that each card title is link to the full article and with a 200 status code on KD site
    And each card should have an image, title in blue color and a description on KD site
    And the card title is having font family "Poppins, sans-serif" and font size "24px" on fact card component on KD site
    And the card description is having font family "Poppins, sans-serif" and font size "18px" on fact card component on KD site
    And the second card is a fact card on KD site
    And the fact card is not clickable on KD site
    And the fact card has a title with the description on KD site
    And the fact card title is having font family "Poppins, sans-serif" and font size "36px" on fact card component on KD site
    And the fact card description is having font family "Poppins, sans-serif" and font size "18px" on fact card component on KD site
    When I click on the next arrow on KD site
    Then the next set of three cards in the carousel should be displayed on KD site
    When I click on the previous arrow on KD site
    And the previous three cards in the carousel should be displayed on KD site

  # PROMOBLOCK
  Scenario: Verify Promoblock Component Styling
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/promo-block/"
    When I verify that the Promoblock component is present
    When I locate the Promoblock component title element
    And the title font family should be "Poppins, sans-serif"
    And the title should be of h3 style
    And the pre-title should be visible on component with font type "Poppins, sans-serif" and font size "22px"
    And the body text font family should be "Poppins, sans-serif" and fontsize is "18px"
    And the subscribe text font family should be "Poppins, sans-serif" and fontsize is "16px"
    And the button gives a 200 repsonse code
    And the primary button with "#ffee84" background color and secondary with "#009bd7" border color should be visible

  # CURATED LISTING
  Scenario: Verify Blog Home Variation
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-5/curated/"
    When they view the curated list of blog articles
    Then there should be "5" articles displayed
    And the first article should have Image larger than second Image, Category Tag, Title and Description
    And the Category Tag is having font family "Poppins, sans-serif" and font size "14px"
    And the Title is having font family "Poppins, sans-serif" and font size "36px"
    And the title color should be "#009bd7"
    And the Description is having font family "Poppins, sans-serif" and font size "18px"
    And the next "4" articles should have Image, Category Tag and Title
    Then title should be navigated to a page with a 200 status code

  Scenario: Verify Featured Post Variation
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-5/curated/"
    Then there should be 3 featured articles displayed
    And each featured article should have Image, Title and Description
    And the title color should be "#009bd7" on Featured Post
    And the Title is having font family "Poppins, sans-serif" and font size "24px" on Featured Post
    And the Description is having font family "Poppins, sans-serif" and font size "18px" on Featured Post
    Then title should be navigated to the page with a 200 status code
    And there should be a CTA link displayed
    And the CTA text is having font family "Poppins, sans-serif" and font size "18px"
    Then CTA should be navigated to a page with a 200 status code

  # SALESFORCE INTEGRATION EBOOK
  Scenario: Verify eBook download functionality
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
    And the "Primary CTA" button is present
    When the user clicks on the "Primary CTA" button
    And background color of popup should be "#009bd7"
    Then a modal pop-up opens with the title, description, image, and button
    And the title is having font family "Poppins, sans-serif" and font size "104px"
    And the description is having font family "Poppins, sans-serif" and font size "18px"
    And the button is having font family "Poppins, sans-serif" and font size "16px"
    And an extra info message in "Poppins, sans-serif" and "18px" size is present
    And an input box is present with the default text "Your Email Address"
    When the user provides a proper email id "aabc@yopmail.com"
  # Then a success pop up with message "Your ebook is ready!" is displayed along with image
  # And the success message "Your ebook is ready!" is having font family "Poppins, sans-serif" and font size "104px"
  # And the modal pop-up shows 'We sent your ebook to "aabc@yopmail.com"' along with social icons and a blog-related post section

  Scenario: Verify error messages for invalid input
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
    When the user clicks on the "Primary CTA" button
    Then a modal pop-up opens with the title, description, image, and button
    When the user enters a wrong email id "aabc@yopmail"
    Then an error message "Please enter a valid email address" in red color is displayed below the input box

  Scenario: Verify error message for empty input
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
    When the user clicks on the "Primary CTA" button
    Then a modal pop-up opens with the title, description, image, and button
    When the user leaves the input box empty
    Then an error message "This field is required" is displayed below the input box

  # FAQs COMPONENT
  Scenario: Verify FAQ page elements
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/faq/"
    Then I should see tabs
    And "All CATEGORIES" should be highlighted in the tab
    And I should see FAQ title
    And there should be a description
    And there should be a "Contact Us" link
    And the Contact Us link gives a 200 response
    And there should be "Search FAQs" link
    And the Search FAQs link gives a 200 response
    And FAQ section links should match tabs in the header

  Scenario: Verify COSMETIC DENTISTRY FAQ
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/faq/"
    When I click on the "COSMETIC DENTISTRY" FAQ link
    Then I should see "Cosmetic Dentistry FAQs" in the title
    And "COSMETIC DENTISTRY" should be highlighted in the tab
    And there should be a description
    And the Contact Us link gives a 200 response
    And the Search FAQs link gives a 200 response
    And each FAQ question in the accordion should not have any characters after the question mark
    And there is answer section also for each question

  Scenario: Verify FAQ pagination
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/faq/"
    When I click on the "COSMETIC DENTISTRY" FAQ link
    Then I should verify the pagination below the FAQ section
    Then page should have 25 FAQs
    Then I should continue clicking until the next button becomes grey

  #OFFICE PROFILE:overview and information
  Scenario: View Overview Information
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/office-info/"
    Then I should see the following business hours:
      | Business hours                |
      | Mon : 9:00 AM - 5:00 PM       |
      | Tue : 9:00 AM - 5:00 PM       |
      | Wed : 9:00 AM - 5:00 PM       |
      | Thu : 9:00 AM - 5:00 PM       |
      | Fri : 8:00 AM - 4:00 PM       |
      | Sat : Closed                  |
      | Sun : Not operating on sunday |
    And I should see the following insurance information:
      | Insurance company  |
      | Aetna              |
      | Ameritas           |
      | Anthem Blue Cross  |
      | Cigna              |
      | Delta              |
      | Guardian           |
      | MetLife            |
      | United Health Care |
      | UCCI               |
    And I should see phone number "805-389-3543" and fax number "fax : 805-987-5140"
    And color of phone number "805-389-3543" and fax number "fax : 805-987-5140" should be "#009bd7"
    And the phone and fax number is having font family "Poppins, sans-serif" and font size "18px" on office profile overview and info component
    And I should see address "2370-D E Las Posas Rd""Camarillo, CA""93010"
    And color of address "2370-D E Las Posas Rd""Camarillo, CA""93010" should be "#009bd7"
    And the adrdress is having font family "Poppins, sans-serif" and font size "18px" on office profile overview and info component
    And I should see map
    And "BOOK AN APPOINTMENT" button is present on office profile overview and info component
    And the "BOOK AN APPOINTMENT" CTA is having font family "Poppins, sans-serif" and font size "16px" on office profile overview and info component
    Then verify that Book Appointment CTA button has "https://www.CamarilloKidsDentist.com/contact/appt-only" in URL, response status is 200
    And language spoken should be "English"
    And the language spoken text is having font family "Poppins, sans-serif" and font size "18px" on office profile overview and info component
    And there should be text below button as "We are located in the Camarillo Village Square, next to Sprouts"
    And the extra text is having font family "Poppins, sans-serif" and font size "18px" on office profile overview and info component

  # STAFF LISTING PATH UPDATE
  Scenario: Navigate to Staff Profile by Clicking on Staff Listing Card
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/office-info/"
    Then the URL should contain the staff name and the response should be 200

  #TABS
  Scenario: Verify the tabs component with 2 rows
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/faq/"
    Then I check the link text in the table for text comparison
      | Tabs                         |
      | All CATEGORIES               |
      | BRACES, ALIGNERS & retainers |
      | COSMETIC DENTISTRY           |
      | COSTS, FINANCING & PAYMENT   |
      | DENTAL EMERGENCY             |
      | ENDODONTICS                  |
      | GENERAL DENTISTRY & HYGIENE  |
      | MOUTH-BODY CONNECTION        |
      | PATIENT PORTAL               |
      | ORAL HEALTH                  |
      | ORAL SURGERY                 |
      | PERIODONTICS                 |
      | OTHER                        |

  Scenario: Verify Tab Underline Color for KD
    Given I am on the LO_KD homepage
    When I navigate to the "safe-house/other-testing/sprint-4/faq/"
    Then I should see the tab is underlined with color "#009bd7"

  # ALERT BAR and ADDRESS BAR
  Scenario: Verify the alert bar, address bar, and header
    Given I am on the LO_KD homepage
    When I navigate to the ""
    Then I should be able to verify there is an alert bar, an address bar, and a header
    And the alert bar should have text and a close icon
    And there is a background colour present for the alert bar "#f15f10"
    And clicking on the close icon in the alert bar closes the alert bar
    And address bar text contains "Posas"
    And the address bar contains a phone number

  # PRIMARY NAV BAR
  Scenario Outline: Verify the header elements and navigation functionality
    Given I am on the LO_KD homepage
    When I navigate to the ""
    When I see the header
    Then I should be able to verify that there is a logo icon
    And clicking on the logo icon navigates the user to the home page
    And the "SCHEDULE" button contains "https://www.CamarilloKidsDentist.com/contact/appt-only" in the URL
    And "PATIENT LOGIN" button contains "/patient-portal/" in the URL
    And there is a search icon
    And the primary navigation items "<Navigation Item>" are present
    And Each navigation "<Navigation Item>" has below URL-fragment "<Expected URL>" in URL
    Examples:
      | Navigation Item      | Expected URL         |
      | SERVICES             | dental-services      |
      | INSURANCE & PAYMENTS | dental-payment-options |
      | ABOUT US             | about-us             |

  # STAFF INTRO
  Scenario: Verify the staff intro component and its elements
    Given I am on the LO_KD homepage
    When I navigate to the "/safe-house/other-testing/sprint-5/staff-intro/?ic=ewwdre"
    Then I should be able to see the staff intro component
    And I should see the staff intro has a title, text, button, and image
    And the title font type is "Poppins, sans-serif" and font size is "48px"
    And the text font type is "Poppins, sans-serif" and font size is "22px"
    And the button redirection should give 200 response

  # FOOTER SECTION
  Scenario: Check Colour of Footer Column Headings
    Given I am on the LO_KD homepage
    When I navigate to the ""
    Then I can see the footer
    And all footer column headings should have color "#009bd7" for KD site
    And verify all links are giving 200 response
    Then verify all the links under the heading are giving 200 response
    And the "LIKE US ON FACEBOOK" link should be present
    And the "FIND US ON GOOGLE" link should be present
    And "LIKE US ON FACEBOOK" link should be navigated to a URL containing "facebook"
    Then "FIND US ON GOOGLE" link should be navigated to a URL containing "google"

  Scenario Outline: Verify Footer Links Navigation and Styling
    Given I am on the LO_KD homepage
    When I navigate to the ""
    Then "<link>" should be navigated to a page with a 200 response
    And the color of the "<link>" should be "<color>", font type should be "<fontType>" and font size should be "<fontSize>"
    Examples:
      | link                         | color   | fontType            | fontSize |
      | Privacy Policy               | #009bd7 | Poppins, sans-serif | 16px     |
      | Notice of Privacy Practices  | #009bd7 | Poppins, sans-serif | 16px     |
      | Terms of Use                 | #009bd7 | Poppins, sans-serif | 16px     |
      | Notice of Non-Discrimination | #009bd7 | Poppins, sans-serif | 16px     |
      | Sitemap                      | #009bd7 | Poppins, sans-serif | 16px     |

  Scenario: Verify Copyright text
    Given I am on the LO_KD homepage
    When I navigate to the ""
    And verify that copy right section is present
    And verify that font type is "Poppins, sans-serif" and font size is "12px" for KD site