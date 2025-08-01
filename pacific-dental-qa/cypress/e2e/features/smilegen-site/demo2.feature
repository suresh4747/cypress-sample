@demo
Feature: Validate the smilegen Website Components

    # # HEADER SECTION
    # Scenario: Verify the landing page
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/landing-page-variation/?kl"
    #     When I click on the smilegen logo
    #     Then I should be navigated to the homepage in the same tab
    #     And Background colour of header is transparent
    #     Then Clicking on the button opens modal popup
    #     Then That button is secondary category with boundary
    #     And The phone number attribute "tel:97123456"


    # Scenario: Verify the header nav bar
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/home-page-variation/?kl"
    #     Then verify the header nav items colour is white
    #     And verify header is Poppins font with size

    # Scenario: Verify the "Mouth Body Connection" Tab
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     And I click on the "Mouth Body Connection" navigation to see all the links and flyer is open
    #     Then I should see two columns inside the flyer: "CATEGORIES" and "RESOURCES"

    # Scenario: Verify options in the "Mouth Body Connection" Flyer
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     And I click on the "Mouth Body Connection" navigation to see all the links and flyer is open
    #     Then I should see the following categories in the CATEGORIES column:
    #         | Category       |
    #         | Heart          |
    #         | Brain          |
    #         | Women's Health |
    #         | Diabetes       |
    #         | Cancer         |
    #         | Inflammation   |
    #     Then I should see the following resources in the RESOURCES column:
    #         | Resources |
    #         | Ebook     |
    #         | Magazine  |
    #         | Quiz      |
    #         | Blog      |
    #     And Status code should be 200 of all the links under CATEGORIES and RESOURCES column
    #     Then Images should be present on mouth body connection menu
    #     And Verify the presence of description text on mouth body connection menu
    #     And Verify the CTA links present on mouth body connection menu
    #     And Clicking on CTA redirected to 200 page on mouth body connection menu

    # Scenario: Verify the "Dental Services" Tab
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     And I click on the "Dental Services" navigation to see all the links and flyer is open
    #     Then I should see two columns inside the flyer: "POPULAR SERVICES" and "COMMON CONCERNS"

    # Scenario: Verify options in the "Dental Services" Flyer
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     And I click on the "Dental Services" navigation to see all the links and flyer is open
    #     Then I should see the following services in the POPULAR SERVICES column:
    #         | Popular services    |
    #         | Routine Cleanings   |
    #         | Dental Implants     |
    #         | X-Rays/Imaging      |
    #         | Extractions         |
    #         | Fillings            |
    #         | Wisdom Teeth        |
    #         | Aligners/Invisalign |
    #         | Teeth Whitening     |
    #         | Dentures            |
    #         | Dental Crowns       |
    #     Then I should see the following concerns in the COMMON CONCERNS column:
    #         | Common concerns   |
    #         | Bad Breath        |
    #         | Stained Teeth     |
    #         | Loose Tooth       |
    #         | Cavities          |
    #         | Bleeding Gums     |
    #         | Chipped Tooth     |
    #         | Toothache         |
    #         | Receding Gums     |
    #         | Tooth Sensitivity |
    #         | Enamel Erosion    |
    #     And Status code should be 200 of all the links under POPULAR SERVICES and COMMON CONCERNS column
    #     Then Images should be present on dental services menu
    # And Verify the presence of description text on dental services menu
    # And Verify the CTA links present on dental services menu
    # And Clicking on CTA redirected to 200 page on dental services menu

    # Scenario: Verify options in the "Payment Options" Flyer
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     And I click on the "Payment Options" navigation to see all the links and flyer is open
    #     Then I should see the following services in the Payment Options flyer:
    #         | Payment Options              |
    #         | Insurance                    |
    #         | Smile Generation Dental Plan |
    #         | Smile Generation Financing   |
    #     And Status code should be 200 of all the links under Payment Options flyer
    #     Then Images should be present on payment options menu
    #     And Verify the presence of description text on payment options menu
    #     And Verify the CTA links present on payment options menu
    #     And Clicking on CTA redirected to 200 page on payment options menu

    # Scenario: Verify the "How We Give" Tab
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     And I click on the "How We Give" navigation to see all the links and flyer is open
    #     Then I should see two columns inside the flyer: "NATIONAL PARTNERS" and "PROGRAMS"

    # Scenario: Verify options in the "How We Give" Flyer
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     And I click on the "How We Give" navigation to see all the links and flyer is open
    #     Then I should see the following partners in the NATIONAL PARTNERS column:
    #         | National partners |
    #         | Special olympics  |
    #         | Charity:water     |
    #         | PDS Foundation    |
    #     Then I should see the following programs in the PROGRAMS column:
    #         | Programs                   |
    #         | Smile Generation serve day |
    #         | KaBOOM! Playground builds  |
    #     And Status code should be 200 of all the links under NATIONAL PARTNERS and PROGRAMS column
    #     Then Images should be present on how we give menu
    #     And Verify the presence of description text on how we give menu
    #     And Verify the CTA links present on how we give menu
    #     And Clicking on CTA redirected to 200 page on how we give menu

    # Scenario: Verify the "1-800-smilegen" link attributes
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     Then I should see the "1-800-SMILEGEN" link in header
    #     And the link in header should have a valid href attribute "tel:97123456"
    #     And the link in header should have the target attribute set to "_blank"

    # Scenario: Verify the "Find A Dentist" button and its functionality
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     Then I should see the "FIND A DENTIST" button
    #     And the color of the button should be correct
    #     When I click on the "FIND A DENTIST" button
    #     Then I should be navigated to the specific page in the same tab
    #         | URL   |
    #         | about |
    #     And the HTTP response status code should be 200

    # # SEARCH
    # Scenario: Clicking on the search icon should open the search field
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     Then I should see the search icon in header


    # Scenario Outline: Perform a search with a selected tag in Primary Nav
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     Then the search icon should be present on primary Nav
    #     And the user clicks on the dropdown
    #     Then the search dropdown should appear with "<Tag>"
    #     When user selects "<Tag>" and user performs a search "test" then URL should contain selected tag and searched text in URL
    #     Examples:
    #         | Tag       |
    #         | All       |
    #         | Offices   |
    #         | Articles  |
    #         | Providers |
    #         | FAQ       |


    # # STICKY NAV BAR
    # Scenario: Verify Sticky Header on Scroll Down
    #     Given I am on the smilegen homepage
    #     When I scroll down the page "othertesting/homepage/?kl" a little then header should become sticky
    #     And I scroll down the page a little more then header should reamin sticky

    # Scenario: Verify Header Returns to Normal on Scroll Up
    #     Given I am on the smilegen homepage
    #     When I scroll down the page "othertesting/homepage/?kl" and then scroll back up
    #     Then The header should return to its normal state

    # Scenario: Verify the header nav bar on Dark Text variation
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/dark-text-variation/?jk"
    #     Then verify the header nav items colour is black
    #     And verify header is in Poppins font with size
    #     Then That button is primary category

    # Scenario: Verify the "Mouth Body Connection" Tab on Dark Text variation
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/dark-text-variation/?kl"
    #     And I click on the "Mouth Body Connection" navigation to see all the links and flyer is open
    #     Then I should see two columns inside the flyer: "CATEGORIES" and "RESOURCES"

    # Scenario: Verify options in the "Mouth Body Connection" Flyer on Dark Text variation
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/dark-text-variation/?kl"
    #     And I click on the "Mouth Body Connection" navigation to see all the links and flyer is open
    #     Then I should see the following categories in the CATEGORIES column for Dark Text variation:
    #         | Category       |
    #         | Heart          |
    #         | Brain          |
    #         | Women's Health |
    #         | Diabetes       |
    #         | Cancer         |
    #         | Inflammation   |
    #     Then I should see the following resources in the RESOURCES column for Dark Text variation:
    #         | Resources |
    #         | Ebook     |
    #         | Magazine  |
    #         | Quiz      |
    #         | Blog      |
    #     And Status code should be 200 of all the links under CATEGORIES and RESOURCES column for Dark Text variation
    #     Then Images should be present on mouth body connection menu for Dark Text variation
    #     And Verify the presence of description text on mouth body connection menu for Dark Text variation
    #     And Verify the CTA links present on mouth body connection menu for Dark Text variation
    #     And Clicking on CTA redirected to 200 page on mouth body connection menu for Dark Text variation

    # Scenario: Verify the "Dental Services" Tab on Dark Text variation
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/dark-text-variation/?kl"
    #     And I click on the "Dental Services" navigation to see all the links and flyer is open
    #     Then I should see two columns inside the flyer: "POPULAR SERVICES" and "COMMON CONCERNS"

    # Scenario: Verify options in the "Dental Services" Flyer on Dark Text variation
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/dark-text-variation/?kl"
    #     And I click on the "Dental Services" navigation to see all the links and flyer is open
    #     Then I should see the following services in the POPULAR SERVICES column for Dark Text variation:
    #         | Popular services    |
    #         | Routine Cleanings   |
    #         | Dental Implants     |
    #         | X-Rays/Imaging      |
    #         | Extractions         |
    #         | Fillings            |
    #         | Wisdom Teeth        |
    #         | Aligners/Invisalign |
    #         | Teeth Whitening     |
    #         | Dentures            |
    #         | Dental Crowns       |
    #     Then I should see the following concerns in the COMMON CONCERNS column for Dark Text variation:
    #         | Common concerns   |
    #         | Bad Breath        |
    #         | Stained Teeth     |
    #         | Loose Tooth       |
    #         | Cavities          |
    #         | Bleeding Gums     |
    #         | Chipped Tooth     |
    #         | Toothache         |
    #         | Receding Gums     |
    #         | Tooth Sensitivity |
    #         | Enamel Erosion    |
    #     And Status code should be 200 of all the links under POPULAR SERVICES and COMMON CONCERNS column for Dark Text variation
    #     Then Images should be present on dental services menu for Dark Text variation
    #     And Verify the presence of description text on dental services menu for Dark Text variation
    #     And Verify the CTA links present on dental services menu for Dark Text variation
    #     And Clicking on CTA redirected to 200 page on dental services menu for Dark Text variation

    # Scenario: Verify options in the "Payment Options" Flyer on Dark Text variation
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/dark-text-variation/?kl"
    #     And I click on the "Payment Options" navigation to see all the links and flyer is open
    #     Then I should see the following services in the Payment Options flyer for Dark Text variation:
    #         | Payment Options              |
    #         | Insurance                    |
    #         | Smile Generation Dental Plan |
    #         | Smile Generation Financing   |
    #     And Status code should be 200 of all the links under Payment Options flyer for Dark Text variation
    #     Then Images should be present on payment options menu for Dark Text variation
    #     And Verify the presence of description text on payment options menu for Dark Text variation
    #     And Verify the CTA links present on payment options menu for Dark Text variation
    #     And Clicking on CTA redirected to 200 page on payment options menu for Dark Text variation

    # Scenario: Verify the "How We Give" Tab on Dark Text variation
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/dark-text-variation/?kl"
    #     And I click on the "How We Give" navigation to see all the links and flyer is open
    #     Then I should see two columns inside the flyer: "NATIONAL PARTNERS" and "PROGRAMS"

    # Scenario: Verify options in the "How We Give" Flyer on Dark Text variation
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/dark-text-variation/?kl"
    #     And I click on the "How We Give" navigation to see all the links and flyer is open
    #     Then I should see the following partners in the NATIONAL PARTNERS column for Dark Text variation:
    #         | National partners |
    #         | Special olympics  |
    #         | Charity:water     |
    #         | PDS Foundation    |
    #     Then I should see the following programs in the PROGRAMS column for Dark Text variation:
    #         | Programs                   |
    #         | Smile Generation serve day |
    #         | KaBOOM! Playground builds  |
    #     And Status code should be 200 of all the links under NATIONAL PARTNERS and PROGRAMS column for Dark Text variation
    #     Then Images should be present on how we give menu for Dark Text variation
    #     And Verify the presence of description text on how we give menu for Dark Text variation
    #     And Verify the CTA links present on how we give menu for Dark Text variation
    #     And Clicking on CTA redirected to 200 page on how we give menu for Dark Text variation

    # Scenario: Verify the header nav bar on Solid Background variation
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/solid-background-variation/"
    #     Then verify the header nav items colour is black
    #     And verify header is in Poppins font with size
    #     Then That button is primary category
    #     And The background colour of header is white

    # Scenario: verify the presence of the menu options in the Nav bar
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/primary-nav-variations/solid-background-variation/"
    #     And Verify menu options in the nav bar
    #         | Menu                  |
    #         | Mouth Body Connection |
    #         | Dental Services       |
    #         | Payment Options       |
    #         | How We Give           |

    # # Hero banner
    # Scenario Outline: Verify Homepage Variation
    #     Given I am on the smilegen homepage
    #     When I navigate to the "othertesting/homepage/?kl"
    #     Then I verify the title text with white first part and yellow last word
    #     And I verify the subtext font and size
    #     And I verify the dropdown with yellow background
    #     Then the Search dropdown should appear with "<Tag>"
    #     And I verify the search field with ghost text
    #     When the user selects "<Tag>" and user performs a Search "test" then URL should contain selected tag and searched text in URL
    #     Examples:
    #         | Tag       |
    #         | All       |
    #         | Offices   |
    #         | Providers |
    #         | Articles  |
    #         | FAQ       |


# Scenario: Verify Landing Page
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/hero-variations/landing-page-variation/"
#     Then I verify the heading text and UI
#     And I verify the subheading with price text and UI
#     And I verify the paragraph text and UI
#     Then I verify the button UI
#     And I click the button that navigates to a particular page with a 200 response


# Scenario: Verify Text Only Variation
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/hero-variations/text-only-variation/"
#     And I verify the title UI
#     And there should be no background image
#     And there should be no subtext on the page


# Scenario: Verify Text Only with Copy Variation
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/hero-variations/text-only-with-copy/"
#     And I verify the title UI
#     And I verify the subtext UI on the page
#     And there should be no background image


# Scenario: Verify Background Image Variation
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/hero-variations/bg-image-variation/"
#     Then there should be a background image on the page
#     And I verify the text UI


# Scenario: Verify Category Variation
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/hero-variations/category-page/?hj"
#     Then there should be a background image on the page
#     And I verify the text with yellow last word
#     And I verify the text UI on Category Variation


# Scenario: Verify Landing Page White Text Copy
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/hero-variations/landing-page-white-text-top-copy/"
#     Then there should be a background image on the page
#     And I verify the text presence on the page
#     And I verify the text color is white on the page


# #TITLE
# Scenario: Verify the title component
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/text/?"
#     And verify H1 'h1' title font size is '130px' and font family of title should be 'Poppins, sans-serif'
#     And verify H2 'h2' title font size is '70px' and font family of title should be 'Poppins, sans-serif'
#     And verify H3 'h3' title font size is '52px' and font family of title should be 'Poppins, sans-serif'
#     And verify H4 'h4' title font size is '36px' and font family of title should be 'Poppins, sans-serif'
#     And verify H5 'h5' title font size is '24px' and font family of title should be 'Poppins, sans-serif'
#     And verify H6 'h6' title font size is '20px' and font family of title should be 'Poppins, sans-serif'

# # BUTTON
# Scenario: Verify the button component
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/button1/?jk"
#     And verify the primary buttton with font family, size, text color and background color
#     And verify the secondary button state dark with font family, size, text color and border
#     And verify the secondary button state white with font family, size, text color and border
#     And verify the underline dark button with font family, size, text color and underline color
#     And verify the underline white button with font family, size, text color and underline color

# # NEWSLETTER
# Scenario: Verify Successful Newsletter Subscription on Overview Page
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?hj"
#     When I verify that the newsletter component is present
#     And I verify the subscribe text box
#     And I enter a valid email id "aabc@yopmail.com" in the subscribe text box
#     And I click on the subscribe button
#     Then I should see a confirmation message
#     And the confirmation message font family should be "Poppins, sans-serif"
#     And the confirmation message color should be black "rgb(0, 0, 0)"

# Scenario: Verify Newsletter Subscription Failure on Overview Page
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?hj"
#     When I enter an invalid email id "invalid-email@yopmail" in the subscribe text box
#     And I click on the subscribe button
#     Then I should see a failure message
#     And the failure message font family should be "Poppins, sans-serif"
#     And the failure message color should be red "rgb(224, 32, 32)"

# Scenario: Verify Newsletter Component Styling
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?hj"
#     When I locate the newsletter component title element
#     And the title font family should be "Poppins, sans-serif"
#     And the title should be of h3 style
#     And the body text font family should be "Roboto, sans-serif"
#     And the subscribe text font family should be "Poppins, sans-serif"

# # card component
# Scenario: Verify Text Card with CTA
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/text-card/text-card-with-cta/"
#     When the user views the text cards
#     And each card with CTA should have a Title, Description and CTA button
#     And verify the CTA response is 200
#     And the background color of each text card should be white

# Scenario: Verify Text Card without CTA
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/text-card/text-card-without-cta/?ic=djd"
#     And the user views the text cards without CTA
#     And each card without CTA should have a Title and Description
#     And the background color of each Text card without CTA should be white

# Scenario: Verify Fact Card
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/fact-card/yellow-fact-card/?ic=dfj"
#     And the user views the fact card
#     Then the fact card should have a yellow background
#     And the fact card should display a Title
#     And the fact card should display a Subtitle
#     And title, subtitle should be center aligned

# Scenario: Verify Cost Cards
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/yellow-card-cta/cost-card/?ic=dhd"
#     And the user views the cost cards
#     And each card should have a Title
#     And each card should have a Cost displayed
#     And each card should have a Date displayed
#     And each card should have a CTA link, verify the CTA response is 200
#     And the background color of each cost card should be white


# Scenario: Verify Tags Cards
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/yellow-card-cta/with-tags/?ic=dfj"
#     And the user views the tags cards
#     And each tags card should have a Title
#     And each tags card should have a Description
#     And each card should have Tags
#     And if a specific tag is present with a CTA, verify the CTA response is 200


# # TEASER
# Scenario: Verify when user clicks "See More" link to view more description
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/generations-of-smiles/?jk"
#     Then verify the teaser with an image on the page
#     And verify the teaser has a heading and subtext
#     And the title should be in "Poppins, sans-serif" and font size should be "52px"
#     And the subtext should be in "Roboto, sans-serif" and font size should be "18px"
#     And verify the teaser has a "See More" link
#     When the user clicks on the "See More" link
#     Then the teaser expands to show more description
#     And the teaser displays a "See Less" link
#     When the user click on the "See Less" link
#     Then the teaser collapses to hide the additional description and "See More" link should be visible

# Scenario: Verify image is present at left position and teaser with CTA
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/teaser/teaser2/?klss"
#     Then verify teaser with half left image on the page
#     And verify Teaser- left image is present
#     And title and description is present on right side
#     And title should be in "Poppins, sans-serif" and font size should be "52px"
#     And the description should be in "Roboto, sans-serif" and font size should be "18px"
#     And there is CTA link at bottom
#     And CTA text should be in "Poppins, sans-serif" and font size should be "18px"
#     And clicking on CTA link navigates to 200 page

# Scenario: Verify image is present at right position and teaser with CTA
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/teaser/teaser2/?klss"
#     And verify teaser with half right image on the page
#     And verify Teaser - right image is present on the page
#     And title and description is present on left side
#     And title should be in "Poppins, sans-serif" and the font size should be "52px"
#     And description should be in "Roboto, sans-serif" and font size should be "18px"
#     And there is CTA link at the bottom
#     And CTA text should be in "Poppins, sans-serif" and the font size should be "18px"
#     And clicking on CTA link navigates to the 200 page

# Scenario: Verify image is present and Teaser without CTA
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/teaser/teaser2/"
#     And verify teaser with half image without CTA on the page
#     And verify teaser image is present
#     And verify title is present on the page
#     And verify description is present
#     And title should be in the "Poppins, sans-serif" and font size should be "52px"
#     And the description should be in "Roboto, sans-serif" and the font size should be "18px"
#     And there is no CTA link at bottom



# # STAGGERED CARDS
# Scenario: Staggered Card with title
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/staggered-card-update/title/"
#     Then the staggered card should be present
#     And the title should be present in the staggered card component
#     And the description should be present in the staggered card component
#     And Card title should be "Poppins, sans-serif" and font size should be "24px"
#     And staggered card component title is "Poppins, sans-serif" and font size should be "100px"
#     And staggered card component description is "Roboto, sans-serif" and font size should be "18px"
#     And the CTA link should be present in the staggered card component
#     And CTA text in the staggered card component should be in "Poppins, sans-serif" and the font size should be "18px"
#     And verify CTA response is 200
#     And the background image should be present
#     Then there should be four non-clickable cards
#     And each non-clickable card should have a image and title

# Scenario: Staggered Card with CTA Link
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/staggered-card-update/with-cta/"
#     And the title should be present in the staggered card component
#     And the description should be present in the staggered card component
#     And Card description should be "Roboto, sans-serif" and font size should be "18px"
#     And staggered card component title is "Poppins, sans-serif" and font size should be "100px"
#     And staggered card component description is "Roboto, sans-serif" and font size should be "18px"
#     And the CTA link should be present in the staggered card component
#     And CTA text in the staggered card component should be in "Poppins, sans-serif" and the font size should be "18px"
#     And the background image should be present
#     And verify CTA response is 200

# Scenario:  Staggered Card with Reviews
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/staggered-card-update/review/"
#     Then the staggered card with reviews should be present
#     And the title should be present in the staggered card component
#     And the description should be present in the staggered card component
#     And title should be in the "Poppins, sans-serif" and the font size should be "100px"
#     And the description should be in the "Roboto, sans-serif" and the font size should be "18px"
#     And the background image should be present
#     Then there should be four non-clickable cards with reviews
#     And each non-clickable card with a review should have a description, review star, and author name
#     And the author name should be in the "Poppins, sans-serif" and the font size should be "20px"
#     And the description should be in the "Roboto, sans-serif" and font size should be "20px"
#     And each card should not have an image



# # QUOTE COMPONENT
# Scenario: Verify Single Quote
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/quote/"
#     Then the quote component is loaded on the page
#     And the carousel should display with a maximum of 1 quote
#     And the single quote should have quote text, title and author are displayed on the quote
#     And the quote title should be in "RobotoSerif, sans-serif" and font size should be "24px"
#     And the quote text should have font family "Poppins, sans-serif" and font size should be "52px"
#     And the quote author text should be in '"Roboto Serif", sans-serif' and font size should be "18px"

# Scenario: Verify Three Quotes Carousel
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/3-quotes/"
#     Then the quote component is loaded on the page
#     And the carousel should display with a maximum of 3 quotes
#     And first dot should be selected by default and quote text, title and author are displayed for first quote
#     And quote text should have font family "Poppins, sans-serif" and font size should be "52px"
#     And the quote author text should be in '"Roboto Serif", sans-serif' and font size should be "18px"
#     And the carousel dots should appear below the carousel
#     When the user clicks on the dot for quote 2
#     Then the carousel should display the second quote
#     And the Three quote component should have quote text, title and author are displayed on the quote
#     And the quote title should be in "RobotoSerif, sans-serif" and font size should be "24px"
#     And the quote text should have the font family "Poppins, sans-serif" and font size should be "52px"
#     And the quote author text should be in '"Roboto Serif", sans-serif' and font size should be "18px"
#     When the user clicks on the dot for quote 3
#     Then the carousel should display the third quote
#     And the Three quote component should have quote text, title and author are displayed on quote
#     And the quote title should be in "RobotoSerif, sans-serif" and font size should be "24px"
#     And quote text should have the font family "Poppins, sans-serif" and font size should be "52px"
#     And the quote author text should be in '"Roboto Serif", sans-serif' and font size should be "18px"
#     And verify that title, text and author are different to check new quote is loaded

# # COST ESTIMATOR COMPONENT
# Scenario: Verify component with tabs
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/cost-estimator/?jk"
#     When the cost estimator component is loaded
#     Then by default user should see 'Routine cleaning' title
#     And Routine cleaning tab should contain cost three columns of cost card teaser
#     And Tab has background colour as 'rgb(247, 248, 252)'
#     And each cost card has cost, title and subtext displayed
#     And the cost text should be in "Poppins, sans-serif" and font size should be "140px"
#     And the title text should be in "Poppins, sans-serif" and font size should be "36px"
#     And the subtext text should be in "RobotoSerif, sans-serif" and font size should be "16px"

# Scenario: Clicking once on right and left arrow icon
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/cost-estimator/"
#     When the user clicks on the right arrow icon
#     Then the content of "Root canal" should be displayed
#     When the user clicks on the left arrow icon
#     Then the content of "Routine cleaning" tab should be displayed

# Scenario: Verifying round robin fashion one clicking the right and left arrow multiple times
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/cost-estimator/"
#     When the user clicks on the right arrow icon for 5 times
#     Then user should see "test 1" as tab name
#     When user clicks on right arrow one more time
#     Then the content of "Routine cleaning" tab should be displayed
#     When the user clicks on the left arrow icon for 5 times
#     Then user should see "Root canal" as tab name
#     When user clicks on left arrow one more time
#     Then the content of "Routine cleaning" tab should be displayed

# Scenario: Verify display of icons based on number of tabs in cost estimator
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/cost-estimator0/"
#     When there are "4" tabs authored
#     Then the left and right arrow icons should be hidden
#     When I navigate to the "sprint-6-demo/cost-estimator/"
#     When there are "6" tabs authored
#     Then the left and right arrow icons should be visible

# Scenario: User can click on the tab
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/cost-estimator/"
#     When user clicks on "Root canal" tab
#     Then the content of "Root canal" should be displayed

# # GALLERY COMPONENT
# Scenario: View and Navigate through Gallery
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/gallery-component-/"
#     And the gallery component is loaded
#     And there are multiple assets in the gallery
#     Then each asset should have a title or caption displayed
#     And the title should be in "Poppins, sans-serif" and the font size should be "24px"
#     And the carousel area should have left and right arrow icons
#     And Clicking on each image should display same image in larger size,default first image should be enlarged

# Scenario: Verify carousel in gallery
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/gallery-component-/"
#     And the user clicks on the right arrow icon in the carousel
#     Then the carousel should move to the next asset
#     When the user clicks on the left arrow icon in the carousel
#     Then the carousel should move to the previous asset


# # BLOG HERO COMPONENT
# Scenario: Display Elements in the Blog Hero
#     Given I am on the smilegen homepage
#     When I navigate to the "sprint-7-demo/blog-listing/blog-listing-1/"
#     And the blog hero section is loaded
#     Then the blog hero should display the category and title
#     And the blog hero category is having font family "Poppins, sans-serif" and font size "14px"
#     And Title text should be in "h1" and Font size should be "52px" and Font family should be "Poppins, sans-serif"
#     Then the blog hero should display the Written by text and author name and verify font family, color and size
#     Then the blog hero should display the Reviewed by text and reviewer namFe and verify font family, color and size
#     Then the blog hero should display the published date and verify font family, color and size
#     Then the blog hero should display the updated date and verify font family, color and size
#     And image is displayed half of the page
#     And the Author name should be hyperlinked and check 200 status in URL
#     And the Reviewer name should be hyperlinked and check 200 status in URL
#     When I navigate to the "sprint-7-demo/blog-page-/"
#     And when no link is authored for Author name and Reviewer name colour of link is blue

# # SALESFORCE INTEGRATION EBOOK
# Scenario: Verify eBook download functionality
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/ebook/"
#     Then the title has a font style of "100px" and "Poppins, sans-serif"
#     And the image is present
#     And the description is present with a font style of "RobotoSerif, sans-serif" and "18px" size
#     And the "GET YOUR FREE EBOOK" button is present
#     When the user clicks on the "GET YOUR FREE EBOOK" button
#     Then a modal pop-up opens with the title, description, image, and button
#     And an extra info message in "RobotoSerif, sans-serif" and "18px" size is present
#     And an input box is present with the default text "Your Email Address"
#     When the user provides a proper email id "aabc@yopmail.com"
#     Then a success pop up with  message "Your ebook is ready!" is displayed along with image
#     And the success message "Your ebook is ready!" is having font family "Poppins, sans-serif" and font size "130px"
#     And the modal pop-up shows 'We sent your ebook to "aabc@yopmail.com"' along with social icons and a blog-related post section

# Scenario: Verify error messages for invalid input
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/ebook/"
#     When the user clicks on the "GET YOUR FREE EBOOK" button
#     Then a modal pop-up opens with the title, description, image, and button
#     When the user enters a wrong email id "aabc@yopmail"
#     Then an error message "Please enter a valid email address" in red color is displayed below the input box

# Scenario: Verify error message for empty input
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/ebook/"
#     When the user clicks on the "GET YOUR FREE EBOOK" button
#     Then a modal pop-up opens with the title, description, image, and button
#     When the user leaves the input box empty
#     Then an error message "This field is required" is displayed below the input box


# # CURATED LISTING
# Scenario: Verify Blog Home Variation
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/curated-listing/"
#     When they view the curated list of blog articles
#     Then there should be "5" articles displayed
#     And the first article should have Image larger than second Image, Category Tag, Title and Description
#     And the Category Tag is having font family "Poppins, sans-serif" and font size "14px"
#     And the Title is having font family "Poppins, sans-serif" and font size "36px"
#     And the Description is having font family "RobotoSerif, sans-serif" and font size "18px"
#     And the next "4" articles should have Image, Category Tag and Title
#     Then title should be navigated to a page with a 200 status code

# Scenario: Verify Featured Post Variation
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/curated-listing/"
#     Then there should be 3 featured articles displayed
#     And each featured article should have Image, Title and Description
#     And the Title is having font family "Poppins, sans-serif" and font size "24px" on Featured Post
#     And the Description is having font family "RobotoSerif, sans-serif" and font size "18px" on Featured Post
#     Then title should be navigated to the page with a 200 status code
#     And there should be a CTA link displayed
#     Then CTA should be navigated to a page with a 200 status code
#     And the CTA text is having font family "Poppins, sans-serif" and font size "18px"


# #  DYNAMIC LISTING
# Scenario: Verify 3 cards listing
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/dynamic-listing-/blog-list-variation/?jk"
#     Then I shoud see the 3 cards listing variation
#     And "VIEW ALL" button should be displayed on right side
#     And the Button text "VIEW ALL" is having font family "Poppins, sans-serif" and font size "18px" on 3 cards listing
#     And I see that there are "3" cards in the listing
#     And Each card has image, title and description
#     And the Card title is having font family "Poppins, sans-serif" and font size "24px" on 3 cards listing
#     And the Card description is having font family 'RobotoSerif, sans-serif' and font size "18px" on 3 cards listing
#     And I see that each article title is a link to the full article and with a 200 status code
#     And I see that the "VIEW ALL" button should have 200 status code on 3 cards listing

# Scenario: Verify 4 cards listing
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/dynamic-listing-/blog-list-variation/?kl"
#     Then I see the 4 cards listing variation
#     And "VIEW ALL" button should be displayed on the right side
#     And the Button text "VIEW ALL" is having font family "Poppins, sans-serif" and font size "18px" on 4 cards listing component
#     And I see that there are "4" cards on cards listing
#     And Each card has image, title and description on 4 cards listing
#     And the Card title is having font family "Poppins, sans-serif" and font size "24px" on 4 cards listing
#     And the Card description is having font family 'RobotoSerif, sans-serif' and font size "18px" on 4 cards listing
#     And Verify that each article title is a link to the full article and with a 200 status code
#     And I see that the "VIEW ALL" button should have 200 status code on 4 cards listing

# Scenario: Verify carousel listing
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/dynamic-listing-/blog-list-variation/?klkl"
#     Then I should see carousel listing variation
#     And "View all" button should be displayed on right side of carousel listing component
#     And the Button text "View all" is having font family "Poppins, sans-serif" and font size "18px" on 4 carousel listing
#     And I see that there are 3 cards in the listing
#     And Each card has image title and description
#     And the Card title is having font family "Poppins, sans-serif" and font size "24px" on carousel listing
#     And the Card description is having font family "RobotoSerif, sans-serif" and font size "18px" on carousel listing
#     And Verify that each card title is a link to the full article and with a 200 status code
#     And I see that the "View all" button should have 200 status code on 3 carousel listing
#     And there is " more" link at right side of carousel
#     And when I click on " more" link, then i should see three more cards are coming up
#     And there is "less" link on left side of carousel
#     And clicking on "less" we should see first three cards
#     And clicking on " more" link for three times, more link disappears and only "less" link should be present

# Scenario: Verify Carousel with Fact Card Display and Navigation
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/dynamic-listing-/blog-carousel-variation/?kl"
#     Then I should be able to see the dynamic listing carousel
#     And the carousel should have a title and description below it
#     And the title is having font family "Poppins, sans-serif" and font size "70px" on fact card component
#     And the description is having font family "RobotoSerif, sans-serif" and font size "18px" on fact card component
#     And the carousel contains three cards in a row
#     And verify that each card title is a link to the full article and with a 200 status code
#     And each card should have an image, title in blue color and a description
#     And the card title is having font family "Poppins, sans-serif" and font size "24px" on fact card component
#     And the card description is having font family "RobotoSerif, sans-serif" and font size "18px" on fact card component
#     And the second card is a fact card
#     And the fact card is not clickable
#     And the fact card has a title with the description
#     And the fact card title is having font family "Poppins, sans-serif" and font size "36px" on fact card component
#     And the fact card description is having font family "RobotoSerif, sans-serif" and font size "18px" on fact card component
#     When I click on the next arrow
#     Then the next set of three cards in the carousel should be displayed
#     When I click on the previous arrow
#     And the previous three cards in the carousel should be displayed


# # COMMON CONCERN CAROUSEL
# Scenario: Verify Common Concern carousel
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?kl"
#     Then I should be able to see Common Concern carousel component
#     And I should see right arrow
#     And there are cards displayed with image and title
#     And the card title is having font family "Poppins, sans-serif" and font size "18px" on Common Concern carousel
#     And title has yellow underline
#     And the user clicks on any part of the card and user should be redirected to the corresponding link with a 200 status code

# Scenario: Clicking on arrow in Common Concern carousel
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?kl"
#     Then I should be able to click on right side arrow
#     And next articles should be displayed
#     And when we click on on previous arrow previous articles should be displayed

# Scenario: Verify common concerns 4 column
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/common-concerns/"
#     Then I should be able to see 4 column common concerns card set
#     And I should see 4 cards in row and there is no arrow
#     And there are Common Concern cards displayed with image and title
#     And the card title is having font family "Poppins, sans-serif" and font size "18px" on Common Concern 4 column
#     And Common Concern card title has yellow underline
#     When the user clicks on any part of the common concern 4 card and user should be redirected to the corresponding link with a 200 status code

# Scenario: Verify common concerns 3 column
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/common-concerns/"
#     Then I should be able to see 3 column common concerns card set
#     And I should see two rows with in three cards each row without arrow
#     And there are Common Concern 3 cards displayed with image and title
#     And the card title is having font family "Poppins, sans-serif" and font size "18px" on Common Concern 3 column
#     And Common Concern 3 card title has yellow underline
#     When the user clicks on any part of the common concern 3 card and user should be redirected to the corresponding link with a 200 status code


# # MAGAZINE CAROUSEL
# Scenario: Verify Magazine Carousel Display and Navigation
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/generations-of-smiles/"
#     Then I should see the magazine carousel displayed
#     And the magazine carousel should contain a right arrow and 4 cards
#     And each magazine carousel card should be clickable with a 200 status code
#     And each card should have an image, title in blue color, and a description
#     And the card title is having font family "Poppins, sans-serif" and font size "20px" on Magazine Carousel
#     And the card description is having font family "RobotoSerif, sans-serif" and font size "18px" on Magazine Carousel

# Scenario: Verify Carousel Navigation Functionality
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/generations-of-smiles/"
#     When I click on the right arrow
#     Then the next card in the carousel should be displayed
#     And when we click on previous arrow, previous card should display in 4 set card
#     When I reach the end of the carousel by clicking the right arrow multiple times
#     And there should not be a right arrow visible and only the left arrow should be displayed

# Scenario: Verify Two column Magazine
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/common-concerns/"
#     Then I should see the 2-column magazine displayed
#     And the 2-column should contain 2 cards in row and does not contain any arrow
#     And each card should be clickable with a 200 status code
#     And each Two column Magazine card should have an image, title in blue color, and a description
#     And the card title is having font family "Poppins, sans-serif" and font size "20px" on Two column Magazine Carousel
#     And the card description is having font family "RobotoSerif, sans-serif" and font size "18px" on Two column Magazine Carousel

# Scenario: Verify Four column Magazine
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/common-concerns/"
#     Then I should see the 4-column magazine displayed
#     And the 4-column should contain 4 cards and does not contain any arrow
#     And each Four column Magazine card should be clickable with a 200 status code
#     And each Four column Magazine card should have an image, title in blue color, and a description
#     And the card title is having font family "Poppins, sans-serif" and font size "20px" on Four column Magazine Carousel
#     And the card description is having font family "RobotoSerif, sans-serif" and font size "18px" on Four column Magazine Carousel


# # APPOINTMENT SCHEDULER
# Scenario: Displaying Office Appointment Scheduler
#     Given I am on the smilegen homepage
#     When I navigate to the "87507/566/"
#     And the title is displayed
#     And the title is having font family "Poppins, sans-serif" and font size "24px" on Office Appointment Scheduler
#     Then the subtitle is displayed
#     And the subtitle is having font family "Poppins, sans-serif" and font size "70px" on Office Appointment Scheduler
#     And the description is displayed
#     And the description is having font family "RobotoSerif, sans-serif" and font size "18px" on Office Appointment Scheduler
#     And the image is displayed
#     And the CTA is displayed
#     And the CTA is having font family "Poppins, sans-serif" and font size "14px" on Office Appointment Scheduler
#     And the CTA link contains "contact/appt-only"
#     And I click the CTA link then response status should be 200

# Scenario: Displaying Provider Appointment Scheduler
#     Given I am on the smilegen homepage
#     When I navigate to the "provider-staff/Hygienist-Ignasio-Alonso-38192/"
#     And the title is displayed on Provider Appointment Scheduler
#     And the title is having font family "Poppins, sans-serif" and font size "24px" on Provider Appointment Scheduler
#     Then the subtitle is displayed on Provider Appointment Scheduler
#     And the subtitle is having font family "Poppins, sans-serif" and font size "52px" on Provider Appointment Scheduler
#     And the description is displayed on Provider Appointment Scheduler
#     And the description is having font family "Roboto, sans-serif" and font size "18px" on Provider Appointment Scheduler
#     And the image is displayed on Provider Appointment Scheduler
#     And the CTA is having font family "Poppins, sans-serif" and font size "14px" on Provider Appointment Scheduler
#     And the CTA is displayed on Provider Appointment Scheduler
#     And the CTA link contains "#map" on Provider Appointment Scheduler
#     And I click the CTA link then response status should be 200 on Provider Appointment Scheduler


# # OFFICE PROFILE - Hero (dynamic)
# Scenario: Verfiy Office profile
#     Given I am on the smilegen homepage
#     When I navigate to the "95376/252/?jk"
#     And Hero image is displayed
#     And Hero pre-title section should contain "DENTIST IN Tracy,CA" title
#     And the pre-title is having font family "Poppins, sans-serif" and font size "15px" on Office profile component
#     And Hero title should contain "Tracy"
#     And the Hero title is having font family "Poppins, sans-serif" and font size "52px" on Office profile component
#     And Accepting new patients section is displayed
#     And "BOOK APPOINTMENT" button is present
#     And the "BOOK APPOINTMENT" CTA is having font family "Poppins, sans-serif" and font size "14px" on Office profile component
#     Then verify that BOOK APPOINTMENT button has "https://www.TracySmilesDental.com/contact/appt-only" in URL, response status is 200
#     And the "Website" CTA button is present
#     And "Website" CTA is having font family "Poppins, sans-serif" and font size "18px" on Office profile component
#     Then verify that the Website CTA button has "https://www.TracySmilesDental.com" in URL, response status is 200
#     And "FInd us on Google" CTA button is present
#     And "FInd us on Google" CTA is having the font family "Poppins, sans-serif" and font size "18px" on Office profile component
#     Then verify that Find us on Google CTA button has "https://maps.google.com/maps?cid=4390140916936369656" in URL, response status is 200

# # PROVIDER PROFILE
# Scenario: Verfiy Provider profile
#     Given I am on the smilegen homepage
#     When I navigate to the "provider-staff/Hygienist-Ignasio-Alonso-38192/?jk"
#     Then the hero section should be displayed
#     And Hero image is displayed on Provider profile component
#     And The Hero title should contain "Ignasio Alonso, RDH, AS" on Provider profile component
#     And the Hero title is having font family "Poppins, sans-serif" and font size "70px" on Provider profile component
#     And Hero sub title should contain "Hygienist" on Provider profile component
#     And the sub title is having font family "Poppins, sans-serif" and font size "24px" on Provider profile component
#     And the "BOOK APPOINTMENT" button is present on Provider profile component
#     And the "BOOK APPOINTMENT" CTA is having font family "Poppins, sans-serif" and font size "14px" on Provider profile component
#     And verify that clicking on Book an appointment button should add "#map" in Page URL and response status is 200

# # FAQs COMPONENT
# Scenario: Verify FAQ page elements
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/faqs/"
#     Then I should see tabs
#     And "ALL CATEGORIES" should be highlighted in the tab
#     And I should see FAQ title
#     And there should be a description
#     And there should be a "CONTACT US" link
#     And the Contact Us link gives a 200 response
#     And there should be "SEARCH FAQS" link
#     And the Search FAQs link gives a 200 response
#     And FAQ section links should match tabs in the header

# Scenario: Verify COSMETIC DENTISTRY FAQ
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/faqs/"
#     When I click on the "COSMETIC DENTISTRY" FAQ link
#     Then I should see "cosmetic dentistry" in the title
#     And "COSMETIC DENTISTRY" should be highlighted in the tab
#     And there should be a description
#     And the Contact Us link gives a 200 response
#     And the Search FAQs link gives a 200 response
#     And each FAQ question in the accordion should not have any characters after the question mark
#     And there is answer section also for each question

# Scenario: Verify FAQ pagination
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/faqs/"
#     When I click on the "COSMETIC DENTISTRY" FAQ link
#     Then I should verify the pagination below the FAQ section
#     Then page should have 25 FAQs
#     Then I should continue clicking until the next button becomes grey


# # office profile - overview  and insurance information
# Scenario: View overview information
#     Given I am on the smilegen homepage
#     When I navigate to the "37922/858/?ic=-sjwqk"
#     Then I should see the following business hours:
#         | Business hours          |
#         | Mon : 8:00 AM - 5:00 PM |
#         | Tue : 8:00 AM - 5:00 PM |
#         | Wed : 8:00 AM - 5:00 PM |
#         | Thu : 8:00 AM - 5:00 PM |
#         | Fri : 8:00 AM - 4:00 PM |
#         | Sat : Closed            |
#         | Sun : Closed            |

#     And I should see the following insurance information:

#         | Insurance company |
#         | Aetna             |
#         | Ameritas          |
#         | Anthem Blue Cross |
#         | Cigna             |
#         | Delta             |

#     And I should see phone number "865-233-6517" and fax number "fax : 865-233-6530"
#     And the phone and fax number is having font family "RobotoSerif, sans-serif" and font size "18px" on office profile overview and info component
#     And I should see address "2020 Town Center Blvd""Knoxville, "" 37922"
#     And the adrdress is having font family "RobotoSerif, sans-serif" and font size "18px" on office profile overview and info component
#     And I should see map
#     And "GET DIRECTIONS" button is present on office profile overview and info component
#     And the "GET DIRECTIONS" CTA is having font family "Poppins, sans-serif" and font size "14px" on office profile overview and info component
#     Then verify that GET DIRECTIONS CTA button has "https://maps.google.com/maps?cid=6258190980890132479" in URL, response status is 200
#     And language spoken should be "English"
#     And the language spoken text is having font family "RobotoSerif, sans-serif" and font size "18px" on office profile overview and info component
#     And there should be text below button as "We are located at the intersection of S Northshore Dr and Town Center Blvd in the Publix shopping center next to Great Clips"
#     And the extra text is having font family "RobotoSerif, sans-serif" and font size "18px" on office profile overview and info component


# # Office Profile page - Services and Team Section
# Scenario: Verify Dental Services
#     Given I am on the smilegen homepage
#     When I navigate to the "/37922/858/?ic=-sjwq"
#     Then I should be able to see dental services section
#     And each dental service should've icon and link
#     And the link should be underlined in yellow
#     And the link href response status code should be 200
#     And 10 services will be displayed
#     And after that, there should be a see more button then click on see more
#     Then it should show all services
#     And see more button is not displayed

# Scenario: verify our team services
#     Given I am on the smilegen homepage
#     When I navigate to the "/37922/858/?ic=-sjwq"
#     Then I should be able to see team section
#     Then I check each dentist card
#     Then each card should have a photo, link with the doctor's name
#     And the doctor's name should be underlined in yellow
#     And verify href value and status response is 200
#     And doctor's name should go to the corresponding link "/provider-staff/"
#     And the href value should contain the doctor's name
#     And below the doctor's name, there should be a profession text mentioned
#     And below that, another text may be present


# # PROVIDER PROFILE:information section
# Scenario: View Information section
#     Given I am on the smilegen homepage
#     When I navigate to the "provider-staff/dentist-madison-dolen-39878/?kl"
#     Then I should be able to see "OVERVIEW" tab as highlighted
#     And the overview text is having font family "Poppins, sans-serif" and font size "18px" on provider profile info component
#     And I should be able to see About Me icon and "ABOUT ME" section
#     And the "ABOUT ME" text is having font family "Poppins, sans-serif" and font size "36px" on provider profile info component
#     And I should be able to see Quote icon and "Quote" section
#     And "Quote" text is having font family "Poppins, sans-serif" and font size "36px" on provider profile info component
#     And I should see Education icon and "Education" section
#     And the "Education" text is having the font family "Poppins, sans-serif" and font size "36px" on provider profile info component


# # BLOG LISTING
# Scenario: Verify Blog Listing Page
#     Given I am on the smilegen homepage
#     When I navigate to the "sprint-7-demo/blog-listing/blog-listing-1/?kl"
#     Then the blog listing section is displayed
#     And it includes a "Sort By" dropdown
#     And the Sort By dropdown has options: "Latest", "A-Z", and "Most Popular"
#     And the default value in the Sort By dropdown is set to "Latest"
#     And there are 18 cards on the page, a combination of fact cards and normal cards
#     And each card item has an image, title, and description
#     And the fact card title is having the font family "Poppins, sans-serif" and font size "36px" on Blog Listing cards
#     And the normal card title is having the font family "Poppins, sans-serif" and font size "24px" on Blog Listing cards
#     And the description is having the font family "Roboto, sans-serif" and font size "18px" on Blog Listing cards
#     And clicking on a card item navigates the user to the corresponding blog page and blog page title should match the card title


# Scenario: Sorting Blog Listing A-Z
#     Given I am on the smilegen homepage
#     When I navigate to the "sprint-7-demo/blog-listing/blog-listing-1/?kl"
#     And I select the value "A-Z"
#     And the list of 18 items on the first page should be sorted alphabetically by the first letter of their titles

# Scenario: Sorting Blog Listing by Latest
#     Given I am on the smilegen homepage
#     When I navigate to the "sprint-7-demo/blog-listing/blog-listing-1/?kl"
#     And I select the value "Latest"
#     Then the updated date in each blog details page should be less than or equal to the previous card date

# Scenario: Verify Blog Listing Pagination
#     Given I am on the smilegen homepage
#     When I navigate to the "sprint-7-demo/blog-listing/blog-listing-1/?kll"
#     Then the first page "1" in pagination should be highlighted
#     And both back arrows are greyed out
#     And clicking on the second pagination "2" number should display a new set of cards
#     And the back button should be displayed
#     And the second pagination "2" number should be highlighted
#     When I click on the first pagination "1" number again then the previous card set should be displayed
#     When I click on the single next button
#     And the second pagination "2" number should be highlighted
#     When I click on the double arrow at the right side
#     And both right side buttons should be greyed out
#     And the last page number should be highlighted

# # MyChart Portal Verification
# Scenario: Verify MyChart Portal Title
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/mychart-portal/?hj"
#     Then the title should be present
#     And the title should have font-family "Poppins, sans-serif" and font-size "100px"
#     And An image should be present with alt text
#     And Sign In box should be embedded in the hero section

# # MAP COMPONENT
# Scenario: Verify Maps with Insurance
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/map/"
#     Then the dropdown should be present with state names
#     And the dropdown should be sorted
#     When the user selects "California" state in the dropdown
#     Then the insurance list should display the following companies
#         | Map Details        |
#         | Aetna              |
#         | Ameritas           |
#         | AnthemBlue Cross   |
#         | Cigna              |
#         | Delta              |
#         | Guardian           |
#         | MetLife            |
#         | United Health Care |
#         | UCCI               |
#     And the insurance list itme is having the font family "Poppins, sans-serif" and font size "20px"
#     And verify the title is having the font family "Poppins, sans-serif" and font size "52px" on Map component
#     And verify the description is having the font family "RobotoSerif, sans-serif" and font size "18px" on Map component

# Scenario: Verify Highlighted Map State
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/map/"
#     When the user selects "California" state in the dropdown
#     Then the map state should be highlighted and have clipath attribute

# Scenario: Verify the files
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/map-and-file-/?ic=ewv"
#     When the user selects "Idaho" state in the dropdown
#     Then User should be able to see the two files "Most Commonly Viewed Fees" and "Full Fee Schedule"
#     And the files name is having the font family "Poppins, sans-serif" and font size "20px"
#     And verify that Most Commonly Viewed Fees link contains pdf file with "Idaho" name in it
#     And verify Most Commonly Viewed Fees pdf link gives 200 status
#     And verify that Full Fee Schedule link contains pdf file with "Idaho" name in it
#     And verify Full Fee Schedule pdf link gives 200 status


# # FOOTER SECTION
# # Verify 1st column "MOUTH BODY CONNECTION" links
# Scenario: Verify "MOUTH BODY CONNECTION" links in the footer
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?mk"
#     And I scroll to the footer section
#     Then I should see the "MOUTH-BODY CONNECTION" in column one in the footer
#     Then I click on the link And should be navigated to the page and status code should be 200

# # Verify 2nd column "DENTAL SERVICES" links
# Scenario: Verify "DENTAL SERVICES" links in the footer
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?kl"
#     And I scroll to the footer section
#     Then I should see the "DENTAL SERVICES" in column two in the footer
#     Then I click on link And should be navigated to the page and status code should be 200

# # Verify 3rd column "PAYMENT OPTIONS" links
# Scenario: Verify "PAYMENT OPTIONS" links in the footer
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?kl"
#     And I scroll to the footer section
#     Then I should see the "PAYMENT OPTIONS" in column three in the footer
#     Then I click on the link And should be navigated to page and status code should be 200

# # Verify 4th column "HOW WE GIVE" links
# Scenario: Verify "HOW WE GIVE" links in the footer
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?kl"
#     And I scroll to the footer section
#     Then I should see the "HOW WE GIVE" in column four in the footer
#     Then I click on link And should be navigated to page and status code should be 200

# # Verify 5th column "ABOUT" links
# Scenario: Verify "ABOUT" links in the footer
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?kl"
#     And I scroll to the footer section
#     Then I should see the "ABOUT" in column five in the footer
#     Then I click on the link And should be navigated to the page and status code should be the 200


# # verify legal text in footer
# Scenario: Verify presence of legal texts in the footer
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?jk"
#     And I scroll to the footer section
#     Then I should see the following legal texts
#         | Text                             |
#         | Privacy Policy                   |
#         | Terms of Service                 |
#         | CA Consumer Privacy Act          |
#         | Infection Prevention Information |
#         | Site Map                         |

# Scenario Outline: Clicking on each legal text link in the footer
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?kl"
#     And I scroll to the footer section
#     And I click on the "<Text>" link in the footer
#     Then I should be navigated to the "<URL>" page and status code should be 200
#     Examples:
#         | Text                             | URL                     |
#         | Privacy Policy                   | privacy-policy          |
#         | Terms of Service                 | terms                   |
#         | CA Consumer Privacy Act          | ca-consumer-privacy-act |
#         | Infection Prevention Information | covid-19                |
#         | Site Map                         | pds                     |


# # verify 1-800-smilegen link in the footer
# Scenario: Verify presence of 1-800-smilegen link in the footer
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?kl"
#     And I scroll to the footer section
#     Then I should see the "1-800-SMILEGEN" link
#     And the link should have a valid href attribute "tel:1-800-SMILEGEN"
#     And the link should have the target attribute set to "_blank"

# # verify social icons and links in footer
# Scenario Outline: Verify presence and links of social media icons in the footer section
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?kl"
#     And I scroll to the footer section
#     Then I should see following social media icons
#         | Links                                     |
#         | https://www.facebook.com/smilegen         |
#         | http://www.instagram.com/smilegeneration  |
#         | http://www.twitter.com/smilegen           |
#         | https://www.pinterest.com/smilegen/       |
#         | https://www.youtube.com/c/SmileGeneration |
#     And I click on each social media icon "<Icon>"
#     Then I should be redirected to the correct social media URL "<URL>" for each icon
#     Examples:
#         | Icon      | URL                                                               |
#         | facebook  | https://www.facebook.com/smilegen                                 |
#         | instagram | https://www.instagram.com/smilegeneration                         |
#         | twitter   | https://twitter.com/i/flow/login?redirect_after_login=%2Fsmilegen |
#         | pinterest | https://www.pinterest.com/smilegen/                               |
#         | youtube   | https://www.youtube.com/c/SmileGeneration                         |

# Scenario: Verify the paragraph text in the footer
#     Given I am on the smilegen homepage
#     When I navigate to the "othertesting/homepage/?hj"
#     And I scroll to the footer section
#     Then Verify the paragraph and font family