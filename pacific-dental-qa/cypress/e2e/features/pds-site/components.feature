@pds
Feature: Validate the PDS Website Components

    # GALLERY COMPONENT
    Scenario: View and Navigate through Gallery
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/gallery-component/gallery-component-images-and-videos/"
        And the gallery component is loaded
        And there are multiple assets in the gallery
        Then each asset should have a title or caption displayed
        And the title should be in "Poppins, sans-serif" and the font size should be "24px"
        And the carousel area should have left and right arrow icons
        And Clicking on each image should display same image in larger size,default first image should be enlarged

    Scenario: Verify carousel in gallery
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/gallery-component/gallery-component-images-and-videos/"
        And the user clicks on the right arrow icon in the carousel
        Then the carousel should move to the next asset
        When the user clicks on the left arrow icon in the carousel
        Then the carousel should move to the previous asset

    Scenario: Verify Highlighting colour of Selected Photos in gallery for PDS site
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/gallery-component/gallery-component-images-and-videos/"
        And I click on a photo in the below strip
        Then the clicked photo should be highlighted in orange colour for PDS site
        And the corresponding bigger image should have background color black
        And color of arrow icon should be blue


    # SWATCH COLOR COMPONENT
    Scenario: Verify swatch colours for PDS site
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/swatch-color-/container/"
        And check the first color code should be "#F7F8FC"
        And check the second color code should be "#FFFFFF"
        And check the third color code should be "#008CD0"


    # BUTTON COMPONENT
    Scenario: Verify Primary Button
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
        Then the primary button background color should be "#F98D18"
        And the primary button font size should be "16px"
        And the primary button font colour should be "#FFFFFF"

    Scenario: Verify link CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
        Then the link CTA font size should be "18px"
        And the link CTA font colour should be "#444444"
        And underline colour should be "#F98D18"

    Scenario: Verify category Tag CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
        Then the category Tag background color should be "#F7F8FC"
        And the category Tag font size should be "14px"
        And the category Tag font colour should be "#008CD0"

    Scenario: Verify secondary CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
        Then the secondary CTA background color should be "#FFFFFF" in PDS site
        And the secondary CTA font size should be "16px"
        And the secondary CTA font colour should be "#F98D18"
        And the secondary CTA outline colour should be "#F98D18"

    Scenario: Verify underline white on state
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
        And the underline white on state font size should be "18px"
        And the underline white on state font colour should be "#FFFFFF"
        And underline white on state underline colour should be "#F98D18"

    Scenario: Verify Secondary White CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
        Then the secondary white CTA background color should be "#FFFFFF"
        And the secondary white CTA font size should be "16px"
        And the secondary white CTA font colour should be "#008CD0"


    # RTE design
    Scenario: Verify RTE PDS Styling
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/text/"
        Then I should see the font colour options "#FFFFFF", "#008CD0", "#444444" for PDS
        And I should see the body text font size and font type for PDS as "18px" and "Poppins, sans-serif"
        And I should see the link text colour for PDS as "#008CD0" and size as "18px"
        And I should see the font type for H1 in PDS as "h1" and size as "100px"
        And I should see the font type for H2 in PDS as "h2" and size as "80px"
        And I should see the font type for H3 in PDS as "h3" and size as "62px"
        And I should see the font type for H4 in PDS as "h4" and size as "48px"
        And I should see the font type for H5 in PDS as "h5" and size as "34px"
        And I should see the font type for H6 in PDS as "h6" and size as "22px"
        And I should see the font type for Style 1 in PDS as "title-1" and size as "100px"
        And I should see the font type for Style 2 in PDS as "title-2" and size as "80px"
        And I should see the font type for Style 3 in PDS as "title-3" and size as "62px"
        And I should see the font type for Style 4 in PDS as "title-4" and size as "48px"
        And I should see the font type for Style 5 in PDS as "title-5" and size as "34px"
        And I should see the font type for Style 6 in PDS as "title-6" and size as "22px"
        And I should see the font type for Style 7 in PDS as "title-7" and size as "16px"
        And I should see the font type for Style 8 in PDS as "title-8" and size as "12px"


    # TITLE
    Scenario: Verify title for PDS
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/title/h1/"
        Then I should see the title heading colour option as "#444444", "#FFFFFF", "#008CD0" for PDS title
        And I should see the title heading type for H1 in PDS as "h1" and heading size as "100px"
        And I should see the title heading type for "h1" Style 1 in PDS as "style-1" and heading size as "100px"
        And I should see the title heading type for "h1" Style 2 in PDS as "style-2" and heading size as "80px"
        And I should see the title heading type for "h1" Style 3 in PDS as "style-3" and heading size as "62px"
        And I should see the title heading type for "h1" Style 4 in PDS as "style-4" and heading size as "48px"
        And I should see the title heading type for "h1" Style 5 in PDS as "style-5" and heading size as "34px"
        And I should see the title heading type for "h1" Style 6 in PDS as "style-6" and heading size as "22px"
        And I should see the title heading type for "h1" Style 7 in PDS as "style-7" and heading size as "16px"
        And I should see the title heading type for "h1" Style 8 in PDS as "style-8" and heading size as "12px"
        When I navigate to the "content/pds/us/en/safe-house/other-testing/sprint-2/title/h2.html"
        And I should see the title heading type for H2 in PDS as "h2" and heading size as "80px"
        And I should see the title heading type for "h2" Style 1 in PDS as "style-1" and heading size as "100px"
        And I should see the title heading type for "h2" Style 2 in PDS as "style-2" and heading size as "80px"
        And I should see the title heading type for "h2" Style 3 in PDS as "style-3" and heading size as "62px"
        And I should see the title heading type for "h2" Style 4 in PDS as "style-4" and heading size as "48px"
        And I should see the title heading type for "h2" Style 5 in PDS as "style-5" and heading size as "34px"
        And I should see the title heading type for "h2" Style 6 in PDS as "style-6" and heading size as "22px"
        And I should see the title heading type for "h2" Style 7 in PDS as "style-7" and heading size as "16px"
        And I should see the title heading type for "h2" Style 8 in PDS as "style-8" and heading size as "12px"
        When I navigate to the "content/pds/us/en/safe-house/other-testing/sprint-2/title/h3.html"
        And I should see the title heading type for H3 in PDS as "h3" and heading size as "62px"
        And I should see the title heading type for "h3" Style 1 in PDS as "style-1" and heading size as "100px"
        And I should see the title heading type for "h3" Style 2 in PDS as "style-2" and heading size as "80px"
        And I should see the title heading type for "h3" Style 3 in PDS as "style-3" and heading size as "62px"
        And I should see the title heading type for "h3" Style 4 in PDS as "style-4" and heading size as "48px"
        And I should see the title heading type for "h3" Style 5 in PDS as "style-5" and heading size as "34px"
        And I should see the title heading type for "h3" Style 6 in PDS as "style-6" and heading size as "22px"
        And I should see the title heading type for "h3" Style 7 in PDS as "style-7" and heading size as "16px"
        And I should see the title heading type for "h3" Style 8 in PDS as "style-8" and heading size as "12px"
        When I navigate to the "content/pds/us/en/safe-house/other-testing/sprint-2/title/h4.html"
        And I should see the title heading type for H4 in PDS as "h4" and heading size as "48px"
        And I should see the title heading type for "h4" Style 1 in PDS as "style-1" and heading size as "100px"
        And I should see the title heading type for "h4" Style 2 in PDS as "style-2" and heading size as "80px"
        And I should see the title heading type for "h4" Style 3 in PDS as "style-3" and heading size as "62px"
        And I should see the title heading type for "h4" Style 4 in PDS as "style-4" and heading size as "48px"
        And I should see the title heading type for "h4" Style 5 in PDS as "style-5" and heading size as "34px"
        And I should see the title heading type for "h4" Style 6 in PDS as "style-6" and heading size as "22px"
        And I should see the title heading type for "h4" Style 7 in PDS as "style-7" and heading size as "16px"
        And I should see the title heading type for "h4" Style 8 in PDS as "style-8" and heading size as "12px"
        When I navigate to the "content/pds/us/en/safe-house/other-testing/sprint-2/title/h5.html"
        And I should see the title heading type for H5 in PDS as "h5" and heading size as "34px"
        And I should see the title heading type for "h5" Style 1 in PDS as "style-1" and heading size as "100px"
        And I should see the title heading type for "h5" Style 2 in PDS as "style-2" and heading size as "80px"
        And I should see the title heading type for "h5" Style 3 in PDS as "style-3" and heading size as "62px"
        And I should see the title heading type for "h5" Style 4 in PDS as "style-4" and heading size as "48px"
        And I should see the title heading type for "h5" Style 5 in PDS as "style-5" and heading size as "34px"
        And I should see the title heading type for "h5" Style 6 in PDS as "style-6" and heading size as "22px"
        And I should see the title heading type for "h5" Style 7 in PDS as "style-7" and heading size as "16px"
        And I should see the title heading type for "h5" Style 8 in PDS as "style-8" and heading size as "12px"
        When I navigate to the "content/pds/us/en/safe-house/other-testing/sprint-2/title/h6.html"
        And I should see the title heading type for H6 in PDS as "h6" and heading size as "22px"
        And I should see the title heading type for "h6" Style 1 in PDS as "style-1" and heading size as "100px"
        And I should see the title heading type for "h6" Style 2 in PDS as "style-2" and heading size as "80px"
        And I should see the title heading type for "h6" Style 3 in PDS as "style-3" and heading size as "62px"
        And I should see the title heading type for "h6" Style 4 in PDS as "style-4" and heading size as "48px"
        And I should see the title heading type for "h6" Style 5 in PDS as "style-5" and heading size as "34px"
        And I should see the title heading type for "h6" Style 6 in PDS as "style-6" and heading size as "22px"
        And I should see the title heading type for "h6" Style 7 in PDS as "style-7" and heading size as "16px"
        And I should see the title heading type for "h6" Style 8 in PDS as "style-8" and heading size as "12px"


    # ACCORDIAN
    Scenario: Validate the Accordion component
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/accordion/"
        Then I navigate to Accordion component in Specifications section
        And Clicking on + icon opens all links
        And Clicking on - icon closes all links


    # QUOTE COMPONENT
    Scenario: Verify Single Quote
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/quote/"
        Then the quote component is loaded on the page
        And the carousel should display with a maximum of 1 quote
        And the single quote should have quote text, title and author are displayed on the quote
        And the quote title should be in "Poppins, sans-serif" and font size should be "24px" and weight should be bold
        And the quote text should have font family "Poppins, sans-serif" and font size should be "48px" and weight should be bold
        And the quote author text should be in "Poppins, sans-serif" and font size should be "18px"
        And the background color of quote should be "#f7f8fc"

    Scenario: Verify Three Quotes Carousel
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/quote/"
        Then the quote component is loaded on the page
        And the carousel should display with a maximum of 3 quotes
        And first dot should be selected by default and quote text, title and author are displayed for first quote
        And the quote title should be in "Poppins, sans-serif" and font size should be "24px" and weight should be bold in first quote
        And quote text should have font family "Poppins, sans-serif" and font size should be "48px" and weight should be bold in first quote
        And the quote author text should be in "Poppins, sans-serif" and the font size should be "18px" in first quote
        And the background color of quote should be "#f7f8fc" for first quote
        And the carousel dots should appear below the carousel
        When the user clicks on the dot for quote 2
        Then the carousel should display the second quote
        And the second quote component should have quote text, title and author displayed
        And the quote title should be in "Poppins, sans-serif" and font size should be "24px" and weight should be bold in second quote
        And the quote text should have the font family "Poppins, sans-serif" and font size should be "48px" and weight should be bold in second quote
        And the quote author text should be in "Poppins, sans-serif" and font size should be "18px" in second quote
        And the background color of quote should be "#f7f8fc" for second quote
        When the user clicks on the dot for quote 3
        Then the carousel should display the third quote
        And the third quote component should have quote text, title and author displayed
        And the quote title should be in "Poppins, sans-serif" and font size should be "24px" and weight should be bold in third quote
        And quote text should have the font family "Poppins, sans-serif" and font size should be "48px" and weight should be bold in third quote
        And the quote author text should be in "Poppins, sans-serif" and font size should be "18px" in third quote
        And the background color of quote should be "#f7f8fc" for third quote
        And verify that title, text and author are different to check new quote is loaded


    # INFO COMPONENT
    Scenario: Verify the presence and properties of the information component
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/information-component/"
        And the text in the information box should contain "Brushing your teeth twice a day could lower your risk of developing cardiovascular disease."
        And the "Did You Know?" text should be "Poppins, sans-serif" and font size is "20px"
        And there should be an icon displayed
        And the other text should be "Poppins, sans-serif" and font size is "18px"
        And I click on the button, response should be 200
        And the background color of button should be "#008cd0"
        And "Next" text should be "Poppins, sans-serif" and font size is "20px"


    # COMMON CONCERN CAROUSEL
    Scenario: Verify Common Concern carousel Redesign
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/carousel-magazine-common/"
        Then I should be able to see the Common Concern carousel component
        And common Concern carousel arrow colour should be "#008cd0"
        And the text underline colour should be "#f98d18"

    Scenario: Verify common concerns 4 column Redesign
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
        Then I should be able to see 4 Common Concern carousel component
        And the common concerns 4 column text underline colour should be "#f98d18"

    Scenario: Verify common concerns 3 column Redesign
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
        Then I should be able to see 3 Common Concern carousel component
        And the common concerns 3 text underline colour should be "#f98d18"


    # MAGAZINE CAROUSEL
    Scenario: Verify Magazine Carousel Display and Navigation
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/carousel-magazine-common/"
        Then I should see the magazine carousel displayed
        And the magazine carousel should contain a right arrow and 4 cards
        And each magazine carousel card should be clickable with a 200 status code
        And each card should have an image and a description
        And the card title is having font family "Poppins, sans-serif" and font size "20px" on Magazine Carousel
        And the card description is having font family "Poppins, sans-serif" and font size "18px" on Magazine Carousel

    Scenario: Verify Carousel Navigation Functionality
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/carousel-magazine-common/"
        When I click on the right arrow
        Then the next card in the carousel should be displayed
        And when we click on previous arrow, previous card should display in 4 set card
        When I reach the end of the carousel by clicking the right arrow multiple times
        And there should not be a right arrow visible and only the left arrow should be displayed

    Scenario: Verify Two column Magazine
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
        Then I should see the 2-column magazine displayed
        And the 2-column should contain 2 cards in row and does not contain any arrow
        And each card should be clickable with a 200 status code
        And each Two column Magazine card should have an image, title in blue color, and a description
        And the card title is having font family "Poppins, sans-serif" and font size "20px" on Two column Magazine Carousel
        And the card description is having font family "Poppins, sans-serif" and font size "18px" on Two column Magazine Carousel

    Scenario: Verify Four column Magazine
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
        Then I should see the 4-column magazine displayed
        And the 4-column should contain 4 cards and does not contain any arrow
        And each Four column Magazine card should be clickable with a 200 status code
        And each Four column Magazine card should have an image, title in blue color, and a description
        And the card title is having font family "Poppins, sans-serif" and font size "20px" on Four column Magazine Carousel
        And the card description is having font family "Poppins, sans-serif" and font size "18px" on Four column Magazine Carousel

    Scenario: Verify Magazine Carousel Redesign
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/carousel-magazine-common/"
        Then I should be able to see the Magazine carousel component
        And magazine carousel arrow colour should be "#008cd0"
        And the magazine carousel title colour should be "#008cd0"

    Scenario: Verify Magazine Carousel 4 column Redesign
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
        Then I should be able to see 4 Magazine carousel component
        And the 4 magazine carousel title colour should be "#008cd0"

    Scenario: Verify Magazine Carousel 2 column Redesign
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/magazine-and-common/"
        Then I should be able to see 2 Magazine carousel component
        And the 2 magazine carousel title colour should be "#008cd0"


    # CARD COMPONENT
    Scenario: Verify Text Card with CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-3/cards/text-cards/"
        When the user views the text cards
        And each card with CTA should have a Title, Description and CTA button
        And verify the CTA response is 200
        And verify the CTA has underline color "#f98d18"
        And the background color of each text card should be white

    Scenario: Verify Text Card without CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-3/cards/text-cards/"
        And the user views the text cards without CTA
        And each card without CTA should have a Title and Description
        And the background color of each Text card without CTA should be white

    Scenario: Verify Fact Card
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-3/cards/text-cards/"
        And the user views the fact card
        Then the fact card should have a "#F7F8FC", "#FFFFFF", "#008CD0" background
        And the fact card should display a Title
        And the fact card should display a Subtitle
        And title, subtitle should be center aligned

    Scenario: Verify Cost Cards
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-3/cards/yellow-cta-cards/"
        And the user views the cost cards
        And each card should have a Title
        And each card should have a Cost displayed
        And each card should have a Date displayed
        And each card should have a CTA link, verify the CTA response is 200
        And the background color of each cost card should be white

    Scenario: Verify Tags Cards
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-3/cards/yellow-cta-cards/"
        And the user views the tags cards
        And each tags card should have a Title
        And each tags card should have a Description
        And each card should have Tags
        And if a specific tag is present with a CTA, verify the CTA response is 200

    Scenario: Verify Text Card with Icon
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-3/cards/text-cards/"
        And the user views the text cards with Icon
        And card should have a Title and Description
        And card should have a CTA link, verify the CTA response is 200


    # COST ESTIMATOR COMPONENT
    Scenario: Verify component with tabs
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator1/"
        When the cost estimator component is loaded
        Then by default user should see 'Routine cleaning' title
        And Routine cleaning tab should contain cost three columns of cost card teaser
        And Tab has background colour as 'rgb(240, 250, 252)'
        And each cost card has cost, title and subtext displayed
        And the cost text should be in "Poppins, sans-serif" and font size should be "140px"
        And the title text should be in "Poppins, sans-serif" and font size should be "36px"
        And the subtext text should be in "Poppins, sans-serif" and font size should be "16px"

    Scenario: Clicking once on right and left arrow icon
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator/"
        When the user clicks on the right arrow icon
        Then the content of "Root canal" should be displayed
        When the user clicks on the left arrow icon
        Then the content of "Routine cleaning" tab should be displayed

    Scenario: Verifying round robin fashion one clicking the right and left arrow multiple times
        Given I am on the PDS homepage
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
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator1/"
        When there are "4" tabs authored
        Then the left and right arrow icons should be hidden
        When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator/"
        When there are "6" tabs authored
        Then the left and right arrow icons should be visible

    Scenario: User can click on the tab
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator/"
        When user clicks on "Root canal" tab
        Then the content of "Root canal" should be displayed

    Scenario: Verify cost estimator cost colour for PDS
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-2/cost-estimator/"
        Then the cost estimator cost colour should be "#008cd0"
        And the cost estimator arrow colour should be "#008cd0"
        And the cost estimator tab border top colour should be "#008cd0"


    # TEASER
    Scenario: Verify when user clicks "See More" link to view more description
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-4/teaser/teaser1/?Fdsds"
        Then verify the teaser with an image on the page
        And verify the teaser has a heading and subtext
        And the title should be in "Poppins, sans-serif" and font size should be "52px"
        And the subtext should be in "Poppins, sans-serif" and font size should be "18px"
        And verify the teaser has a "see more" link
        And verify the "see more" link has underline with color "#f98d18"
        When the user clicks on the "see more" link
        Then the teaser expands to show more description
        And the teaser displays a "see less" link
        And verify "see less" link has underline with color "#f98d18"
        When the user click on the "see less" link
        Then the teaser collapses to hide the additional description and "see more" link should be visible

    Scenario: Verify image is present at left position and teaser with CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-4/teaser/teaser1/"
        Then verify teaser with half left image on the page
        And verify Teaser- left image is present
        And title and description is present on right side
        And title should be in "Poppins, sans-serif" and font size should be "52px"
        And the description should be in "Poppins, sans-serif" and font size should be "18px"
        And there is CTA link at bottom
        And CTA text should be in "Poppins, sans-serif" and font size should be "18px"
        And clicking on CTA link navigates to 200 page
        And verify the CTA link has underline with color "#f98d18"

    Scenario: Verify image is present at right position and teaser with CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-4/teaser/teaser1/"
        And verify teaser with half right image on the page
        And verify Teaser - right image is present on the page
        And title and description is present on left side
        And title should be in "Poppins, sans-serif" and the font size should be "52px"
        And description should be in "Poppins, sans-serif" and font size should be "18px"
        And there is CTA link at the bottom
        And CTA text should be in "Poppins, sans-serif" and the font size should be "18px"
        And clicking on CTA link navigates to the 200 page
        And verify CTA link has underline with color "#f98d18"

    Scenario: Verify image is present and Teaser without CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-4/teaser/teaser1/"
        And verify teaser with half image without CTA on the page on PDS site
        And verify teaser image is present
        And verify title is present on the page
        And verify description is present
        And title should be in the "Poppins, sans-serif" and font size should be "52px"
        And the description should be in "Poppins, sans-serif" and the font size should be "18px"
        And there is no CTA link at bottom


    #  DYNAMIC LISTING
    Scenario: Verify 3 cards listing
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-3/dynamic-listing/"
        Then I shoud see the 3 cards listing variation
        And "VIEW ALL" button should be displayed on right side
        And the Button text "VIEW ALL" is having font family "Poppins, sans-serif" and font size "18px" on 3 cards listing
        And I see that there are "3" cards in the listing
        And Each card has image, title and description
        And title should be in "#008cd0" color
        And the Card title is having font family "Poppins, sans-serif" and font size "24px" on 3 cards listing
        And the Card description is having font family 'Poppins, sans-serif' and font size "18px" on 3 cards listing
        And I see that each article title is a link to the full article and with a 200 status code
        And I see that the "VIEW ALL" button should have 200 status code on 3 cards listing

    Scenario: Verify 4 cards listing
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-3/dynamic-listing/"
        Then I see the 4 cards listing variation
        And "VIEW ALL" button should be displayed on the right side
        And the Button text "VIEW ALL" is having font family "Poppins, sans-serif" and font size "18px" on 4 cards listing component
        And I see that there are "4" cards on cards listing
        And Each card has image, title and description on 4 cards listing
        And title should be in "#008cd0" color on 4 cards listing
        And the Card title is having font family "Poppins, sans-serif" and font size "24px" on 4 cards listing
        And the Card description is having font family 'Poppins, sans-serif' and font size "18px" on 4 cards listing
        And Verify that each article title is a link to the full article and with a 200 status code
        And I see that the "VIEW ALL" button should have 200 status code on 4 cards listing

    Scenario: Verify carousel listing
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-3/dynamic-listing/"
        Then I should see carousel listing variation
        And "View all" button should be displayed on right side of carousel listing component
        And the Button text "View all" is having font family "Poppins, sans-serif" and font size "18px" on 3 card carousel listing
        And I see that there are 3 cards in the listing
        And Each card has image title and description
        And the Card title is having font family "Poppins, sans-serif" and font size "24px" on carousel listing
        And the Card description is having font family "Poppins, sans-serif" and font size "18px" on carousel listing
        And Verify that each card title is a link to the full article and with a 200 status code
        And I see that the "View all" button should have 200 status code on 3 carousel listing
        And there is "more" link at right side of carousel
        And "more" text should be in "#008cd0" color
        And arrow icon with more text color should be "#008cd0"
        And when I click on "more" link, then i should see three more cards are coming up
        And there is "less" link on left side of carousel
        And "less" text should be in this "#008cd0" color
        And arrow icon with less text color should be "#008cd0"
        And clicking on "less" we should see first three cards
        And clicking on "more" link for three times, more link disappears and only "less" link should be present

    Scenario: Verify Carousel with Fact Card Display and Navigation
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-3/dynamic-listing/"
        And the carousel should have a title and description below it
        And the title is having font family "Poppins, sans-serif" and font size "36px" on fact card component
        And the description is having font family "Poppins, sans-serif" and font size "18px" on fact card component
        And the carousel contains three cards in a row
        And verify that each card title is link to the full article and with a 200 status code
        And each card should have an image, title in blue color and a description
        And the card title is having font family "Poppins, sans-serif" and font size "24px" on fact card component
        And the card description is having font family "Poppins, sans-serif" and font size "18px" on fact card component
        And the second card is a fact card
        And the fact card is not clickable
        And the fact card has a title with the description
        And the fact card title is having font family "Poppins, sans-serif" and font size "36px" on fact card component
        And the fact card description is having font family "Poppins, sans-serif" and font size "18px" on fact card component
        When I click on the next arrow
        Then the next set of three cards in the carousel should be displayed
        When I click on the previous arrow
        And the previous three cards in the carousel should be displayed


    # SALESFORCE INTEGRATION EBOOK
    Scenario: Verify eBook download functionality
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
        And the "Primary CTA" button is present
        When the user clicks on the "Primary CTA" button
        And background color of popup should be "#FFFFFF"
        Then a modal pop-up opens with the title, description, image, and button
        And the title is having font family "Poppins, sans-serif" and font size "104px"
        And the description is having font family "Poppins, sans-serif" and font size "18px"
        And the button is having font family "Poppins, sans-serif" and font size "16px"
        And an extra info message in "Poppins, sans-serif" and "18px" size is present
        And an input box is present with the default text "Your Email Address"
        When the user provides a proper email id "aabc@yopmail.com"
        Then a success pop up with message "Your ebook is ready!" is displayed along with image
        And the success message "Your ebook is ready!" is having font family "Poppins, sans-serif" and font size "104px"
        And the modal pop-up shows 'We sent your ebook to "aabc@yopmail.com"' along with social icons and a blog-related post section

    Scenario: Verify error messages for invalid input
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
        When the user clicks on the "Primary CTA" button
        Then a modal pop-up opens with the title, description, image, and button
        When the user enters a wrong email id "aabc@yopmail"
        Then an error message "Please enter a valid email address" in red color is displayed below the input box

    Scenario: Verify error message for empty input
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/button/button-test/"
        When the user clicks on the "Primary CTA" button
        Then a modal pop-up opens with the title, description, image, and button
        When the user leaves the input box empty
        Then an error message "This field is required" is displayed below the input box


    # PROMOBLOCK
    Scenario: Verify Promoblock Component Styling
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-1/promo-block/"
        When I verify that the Promoblock component is present
        When I locate the Promoblock component title element
        And the title font family should be "Poppins, sans-serif"
        And the title should be of h3 style
        And the pre-title should be visible on component with font type "Poppins, sans-serif" and font size "22px"
        And the body text font family should be "Poppins, sans-serif" and fontsize is "18px"
        And the subscribe text font family should be "Poppins, sans-serif" and fontsize is "16px"
        And the button gives a 200 repsonse code
        And the primary button with "#f98d18" background color and secondary with "#f98d18" border color should be visible


    # CURATED LISTING
    Scenario: Verify Blog Home Variation
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/curated/"
        When they view the curated list of blog articles
        Then there should be "5" articles displayed
        And the first article should have Image larger than second Image, Category Tag, Title and Description
        And the Category Tag is having font family "Poppins, sans-serif" and font size "14px"
        And the Title is having font family "Poppins, sans-serif" and font size "36px"
        And the title color should be "#008cd0"
        And the Description is having font family "Poppins, sans-serif" and font size "18px"
        And the next "4" articles should have Image, Category Tag and Title
        Then title should be navigated to a page with a 200 status code

    Scenario: Verify Featured Post Variation
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/curated/"
        Then there should be 3 featured articles displayed
        And each featured article should have Image, Title and Description
        And the title color should be "#008cd0" on Featured Post
        And the Title is having font family "Poppins, sans-serif" and font size "24px" on Featured Post
        And the Description is having font family "Poppins, sans-serif" and font size "18px" on Featured Post
        Then title should be navigated to the page with a 200 status code
        And there should be a CTA link displayed
        And the CTA text is having font family "Poppins, sans-serif" and font size "18px"
        Then CTA should be navigated to a page with a 200 status code


    # FAQs COMPONENT
    Scenario: Verify FAQ page elements
        Given I am on the PDS homepage
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
        Given I am on the PDS homepage
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
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-4/faq/"
        When I click on the "COSMETIC DENTISTRY" FAQ link
        Then I should verify the pagination below the FAQ section
        Then page should have 25 FAQs
        Then I should continue clicking until the next button becomes grey


    #TABS
    Scenario: Verify the tabs component with 2 rows
        Given I am on the PDS homepage
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

    Scenario: Verify Tab Underline Color for PDS
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-4/faq/"
        Then I should see the tab is underlined with color "#f98d18"


    # BLOG HERO COMPONENT
    Scenario: Display Elements in the Blog Hero
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/blog-hero/"
        And the blog hero section is loaded
        Then the blog hero should display the category and title
        And the blog hero category is having font family "Poppins, sans-serif" and font size "15px"
        And Title text should be in "h1" and Font size should be "52px" and Font family should be "Poppins, sans-serif"
        Then the blog hero should display the Written by text and author name and verify font family, color and size
        Then the blog hero should display the Reviewed by text and reviewer name and verify font family, color and size
        Then the blog hero should display the published date and verify font family, color and size
        Then the blog hero should display the updated date and verify font family, color and size
        And image is displayed half of the page
        And the Author name should be hyperlinked and check 200 status in URL
        And the Reviewer name should be hyperlinked and check 200 status in URL
        When I navigate to the "safe-house/other-testing/sprint-5/blog-hero0/"
        And when no link is authored for Author name and Reviewer name colour of link is blue


    # BLOG LISTING
    Scenario: Verify Blog Listing Page
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/blog-listing/"
        Then the blog listing section is displayed
        And it includes a "Sort by" dropdown
        And the Sort By dropdown has options: "Published date " and "alphabets"
        And the default value in the Sort By dropdown is set to "Published date "
        And each card item has an image, title, and description
        And the normal card title is having the font family "Poppins, sans-serif" and font size "24px" on Blog Listing cards
        And the description is having the font family "Poppins, sans-serif" and font size "18px" on Blog Listing cards
        And clicking on a card item navigates the user to the corresponding blog page and blog page title should match the card title

    Scenario: Sorting Blog Listing A-Z
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/blog-listing/"
        And I select the value "alphabets"
        And the list of 18 items on the first page should be sorted alphabetically by the first letter of their titles

    Scenario: Sorting Blog Listing by Latest
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/blog-listing/"
        Then the updated date in each blog details page should be less than or equal to the previous card date

    Scenario: Verify Blog Listing Pagination
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/blog-listing/"
        Then the first page "1" in pagination should be highlighted
        And both back arrows are greyed out
        And clicking on the second pagination "2" number should display a new set of cards if exists
        When I click on the first pagination "1" number again then the previous card set should be displayed


    # ICON LIST COMPONENT
    Scenario: Displaying Icon List with Title Only
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/iconlistcardcomponent/"
        Then I see the PDS icon list component with Title Only
        And the icon list component should display the title and icon
        And font family "Poppins, sans-serif" and size "34px" of title matches with XD

    Scenario: Displaying Icon List with Title and Copy
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/iconlistcardcomponent/"
        Then I see the PDS icon list component with Title and Copy
        And the icon list component should display the title, copy, and icon
        And font family "Poppins, sans-serif" and size "28px" of title matches with the XD
        And font family "Poppins, sans-serif" and size "18px" of text matches with XD

    Scenario: Displaying Icon List with Title, Description, and CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/iconlistcardcomponent/"
        Then I see the PDS icon list component with Title, Description, and CTA
        And the icon list component should display the title, description, CTA, and icon
        And font family "Poppins, sans-serif" and size "28px" of the title matches with XD
        And font family "Poppins, sans-serif" and size "18px" of text matches with the XD
        And CTA button is "#f98d18" in colour
        And clicking that takes to 200 response page


    # CAREER SEARCH COMPONENT
    Scenario: User navigates to Career Search Component
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/careers-search/"
        Then I should see the title, copy, and search fields
        And mile dropdown should have "20" as default value
        And In the mile dropdown field, I should see the options: "20", "30", "40" miles

    Scenario: User searches for jobs with specified criteria
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/careers-search/"
        Then I enter "Dentist" as keyword, Location as "Denver" and Distance as "20"
        And I click on the search button Then I should see the URL parameters as: "keywords=Dentist&distance=20&location=Denver" apended at end


    # CARD COMPONENT NEW
    Scenario: Displaying Link Card Variation
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/pdscard/pdslinkcard/"
        Then I can see PDS Link Card variation
        Then the link card component should display the card image, title, description, and link text

    Scenario: Displaying Title Card Variation
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/pdscard/pdstitle/"
        Then I can see PDS title card variation
        And the title card component should display the card image, title, and description

    Scenario: 3 column cards - No Carousel
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/pdscard/pdslinkcard/"
        Then I can see PDS 3 column cards no carousel
        Then the link card component should display the card image, title, description, and link text in 3 column
        And clicking anywhere on card takes user to 200 page

    Scenario: 3 column cards - Carousel
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/pdscard/pdstitle/"
        Then I can see PDS 3 column card with carousel
        And the dots at bottom should visually represent the number of cards and current focus
        And the arrows should show and hide when no more cards are available to left and right

    Scenario: 4 column cards - No Carousel
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/pdscard/pdslinkcard/"
        Then I can see PDS 4 column cards no carousel
        Then the link card component should display the card image, title, description, and link text in 4 column
        And clicking anywhere on 4 column cards takes user to 200 page

    Scenario: 4 column cards - Carousel
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/pdscard/pdstitle/"
        Then I can see PDS 4 column card with carousel
        And the dots at the bottom should visually represent the number of cards and current focus
        And arrows should show and hide when no more cards are available to left and right


    # HERO COMPONENT
    Scenario: Verify Hero Component with Title and CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-4/heropds/center-hero/"
        Then I should see the hero component with Title and CTA
        And I should verify that there is a hero image with Title and CTA
        And I should see the title is displayed in Hero Component with Title and CTA
        And the CTA button is displayed in Hero Component with Title and CTA
        And the title is "#008cd0" in color And the title font size is "100px" and font type is '"Playfair Display", sans-serif' in Hero Component with Title and CTA
        And the CTA button is "#f98d18" in color in Hero Component with Title and CTA
        Then clicking on the CTA button, I should be navigated to a 200 page in Hero Component with Title and CTA

    Scenario: Verify Center Hero with description and CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-4/heropds/center-hero/"
        Then I should see the hero component with description and CTA
        And I should verify that there is a hero image
        And I should see the title is displayed
        And I should see text-align attribute of title is "center"
        And the title is "#008cd0" in color And the title font size is "100px" and font type is '"Playfair Display", sans-serif'
        And I should see description displayed
        And I should see description is "Poppins, sans-serif" font
        And the CTA button is displayed
        And the CTA button is "#f98d18" in color
        Then clicking on the CTA button, I should be navigated to a 200 page

    Scenario: Verify Center Hero without CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-4/heropds/center-hero/"
        Then I should see the hero component without CTA
        And I should verify that there is a hero image without CTA
        And I should see the title is displayed in Hero Component without CTA
        And I should see text-align attribute of title is "center" in Hero Component without CTA
        And the title is "#008cd0" in color And the title font size is "100px" and font type is '"Playfair Display", sans-serif' in Hero Component without CTA
        And I should see description displayed in Hero Component without CTA
        And I should see description is "Poppins, sans-serif" font in Hero Component without CTA
        And the CTA button is not displayed in Hero Component without CTA

    Scenario: Verify Center Hero without description and CTA
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-4/heropds/center-hero/"
        Then I should see the hero component without description and CTA
        And I should verify that there is a hero image without description and CTA
        And I should see the title is displayed in Hero Component without description and CTA
        And I should see text-align attribute of title is "center" in Hero Component without description and CTA
        And the title is "#008cd0" in color And the title font size is "100px" and font type is '"Playfair Display", sans-serif' in Hero Component without description and CTA
        And I should not see description displayed in Hero Component without description and CTA
        And the CTA button is not displayed in Hero Component without description and CTA


    # QUOTE COMPONENT - LARGE AND SMALL IMAGE VARIATION
    Scenario: Large Variation - Verify Quote Component with Large Author Image
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/quote-v2-cyclone/quote_large_image/"
        And I view the Quote component with Large Author Image
        Then I should see an author image and it should be big
        And the quote text should be visible
        And the font size of quote text should be "62px" and font family should be "Poppins, sans-serif"
        And I should see the author's name
        And the font size of author's name should be "22px" and font family should be "Poppins, sans-serif"

    Scenario: Small Variation - Verify Quote Component with Small Author Image
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-5/quote-v2-cyclone/quote_small_image/"
        And I view the Quote component with Small Author Image
        Then I should see an author image and it should be small
        And the quote text should be visible on Small Image Quote Component
        And font size of quote text should be "100px" and font family should be '"Playfair Display", sans-serif'
        And I should see the author's name on Small Image Quote Component
        And font size of author's name should be "22px" and font family should be "Poppins, sans-serif"
        And I should see the author's job description on Small Image Quote Component
        And font size of author's name should be "22px" and font family should be "Poppins, sans-serif"


    # PRIMARY NAV
    Scenario: Verify primary navigation elements
        Given I am on the PDS homepage
        When I navigate to the ""
        When I view the primary navigation
        Then I should see the logo
        And clicking on logo should navigate back to homepage
        And I should see the nav dropdowns with values:
            | Links            |
            | CAREERS          |
            | DENTISTS         |
            | GRADS & STUDENTS |
            | LIFE AT PDS      |
            | NEWSROOM         |
            | ABOUT            |
        And I should see nav dropdown as "#ffffff" in colour
        And I should see the CTA button labeled "JOIN US"
        And JOIN US should redirect to 200 page
        And I should see the search icon


    # PRIMARY NAV SEARCH
    Scenario: Expand the search bar by clicking on the magnifying icon
        Given I am on the PDS homepage
        When I navigate to the ""
        And the user clicks on the magnifying icon in the primary navigation bar
        And the user selects a value from the search dropdown "Providers"
        And the user enters "new" into the search bar
        And the user clicks the search submit button
        And the user is navigated to the search results page with URL "#q=new&t=Providers"


    # SECONDARY NAV
    Scenario: Verify secondary navigation elements
        Given I am on the PDS homepage
        When I navigate to the ""
        When I view the primary navigation
        And clicking on "CAREERS" nav item, secondary nav should have 5 columns, one flyout card
        And all links inside "CAREERS" should navigate to 200 pages
        And flyout card should have image, description and CTA
        And CTA should have 200 response code


    Scenario Outline: verify the underline color under each navigation link
        Given I am on the PDS homepage
        When I navigate to the ""
        When I view the primary navigation
        And clicking on each nav dropdowns opens the secondary navigation menu "<LINKS>" and there is "#f98d18" underline on each navigation link
        Examples:
            | LINKS            |
            | CAREERS          |
            | DENTISTS         |
            | GRADS & STUDENTS |
            | LIFE AT PDS      |
            | NEWSROOM         |
            | ABOUT            |


    # FEATURED LISTS
    Scenario: Verify featured list
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/featured-list-component0/"
        Then the featured list has title
        And title has the font family "Poppins, sans-serif"

    Scenario: Verify featured list links font family and navigation
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/featured-list-component0/"
        And the user clicks on each link in the featured list
        Then each link navigates to a page that returns a 200 status code
        And each link text has the font family "Poppins, sans-serif"


    # INFO CARD COMPONENT
    Scenario: Verify Simple Card
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/info-card/?ss"
        Then the Simple Card has Title
        And the title has "34px" font family and size should be "Poppins, sans-serif"
        And the Simple Card has Description
        And the description has "18px" font family and size should be "Poppins, sans-serif"
        And the Simple Card is displayed 3 columns wide

    Scenario: Verify Image Quote Card
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/info-card/?ss"
        Then the Image Quote Card has Quote
        And the Quote has "22px" font family and size should be "Poppins, sans-serif"
        Then the Image Quote Card has Quote Author
        And the Quote Author has "16px" font family and size should be "Poppins, sans-serif"
        Then the Image Quote Card has Author Image
        Then the Image Quote Card has Author Title
        And the Author Title has "16px" font family and size should be "Poppins, sans-serif"
        And the Image Quote Card is displayed 3 columns wide on desktop

    Scenario: Verify Text Quote Card
        Given I am on the PDS homepage
        When I navigate to the "safe-house/other-testing/sprint-6/info-card/?ss"
        Then the Text Quote Card has Quote
        And Quote has "36px" font family and size should be "Poppins, sans-serif"
        Then the Text Quote Card has Quote Author
        And Quote Author has "18px" font family and size should be "Poppins, sans-serif"


    # FOOTER SECTION
    Scenario: Verify footer elements on the PDS homepage
        Given I am on the PDS homepage
        When I navigate to the ""
        Then I should be able to see the footer
        And I should see 3 sections in the footer

    Scenario: Verify first section links in the footer
        Given I am on the PDS homepage
        When I navigate to the ""
        Then I should see the first section with the following links:
            | Links             |
            | About US          |
            | Careers           |
            | Contact           |
            | Find an Office    |
            | Team Member Apply |
            | Legal Info        |
            | CA Privacy Policy |
            | Privacy Policy    |
            | Site Map          |
        And each link should navigate to a page with a 200 response Scenario

    Scenario: Verify social links and copy right section in the footer
        Given I am on the PDS homepage
        When I navigate to the ""
        Then I should see the following social links:
            | Links                                                                                      |
            | https://www.facebook.com/PacificDentalServices                                             |
            | https://x.com/pacificdental?mx=2                                                           |
            | https://www.linkedin.com/company/pacific-dental-services                                   |
            | https://www.youtube.com/user/PacificDentalTV                                               |
            | https://www.glassdoor.com/Overview/Working-at-Pacific-Dental-Services-EI_IE33144.11,34.htm |
            | https://www.instagram.com/pacific.dental/                                                  |
        And each social link should navigate to a page with a 200 response
        And I should see the copyright text
        And the font size should be "16px" And the font family should be "Poppins, sans-serif"
