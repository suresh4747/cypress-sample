 @smilegen
 Feature: Validate the SmileGen Header-Footer

 HEADER SECTION
      Scenario: Verify the landing page
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/landing-page-variation.html"
#         When I click on the SmileGen logo
#         Then I should be navigated to the homepage in the same tab
#         # And Background colour of header is transparent
#         Then Clicking button navigates to 200 response page
#         Then That button is secondary category with boundary
#         And The phone number attribute "tel:97123456"


#     Scenario: Verify the header nav bar
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         Then verify the header nav items colour is white
#         And verify header is Poppins font with size

#     Scenario: Verify the "Mouth Body Connection" Tab
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         And I click on the "Mouth Body Connection" navigation to see all the links and flyer is open
#         Then I should see two columns inside the flyer: "CATEGORIES" and "RESOURCES"

#     Scenario: Verify options in the "Mouth Body Connection" Flyer
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         And I click on the "Mouth Body Connection" navigation to see all the links and flyer is open
#         Then I should see the following categories in the CATEGORIES column:
#             | Category       |
#             | Heart          |
#             | Brain          |
#             | Women's Health |
#             | Diabetes       |
#             | Cancer         |
#             | Inflammation   |
#         Then I should see the following resources in the RESOURCES column:
#             | Resources |
#             | Ebook     |
#             | Magazine  |
#             | Quiz      |
#             | Blog      |
#         And Status code should be 200 of all the links under CATEGORIES and RESOURCES column
#         Then Images should be present on mouth body connection menu
#         And Verify the presence of description text on mouth body connection menu
#         And Verify the CTA links present on mouth body connection menu
#         And Clicking on CTA redirected to 200 page on mouth body connection menu

#     Scenario: Verify the "Dental Services" Tab
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         And I click on the "Dental Services" navigation to see all the links and flyer is open
#         Then I should see two columns inside the flyer: "POPULAR SERVICES" and "COMMON CONCERNS"

#     Scenario: Verify options in the "Dental Services" Flyer
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         And I click on the "Dental Services" navigation to see all the links and flyer is open
#         Then I should see the following services in the POPULAR SERVICES column:
#             | Popular services    |
#             | Routine Cleanings   |
#             | Dental Implants     |
#             | X-Rays/Imaging      |
#             | Extractions         |
#             | Fillings            |
#             | Wisdom Teeth        |
#             | Aligners/Invisalign |
#             | Teeth Whitening     |
#             | Dentures            |
#             | Dental Crowns       |
#         Then I should see the following concerns in the COMMON CONCERNS column:
#             | Common concerns   |
#             | Bad Breath        |
#             | Stained Teeth     |
#             | Loose Tooth       |
#             | Cavities          |
#             | Bleeding Gums     |
#             | Chipped Tooth     |
#             | Toothache         |
#             | Receding Gums     |
#             | Tooth Sensitivity |
#             | Enamel Erosion    |
#         And Status code should be 200 of all the links under POPULAR SERVICES and COMMON CONCERNS column
#         Then Images should be present on dental services menu
#         And Verify the presence of description text on dental services menu
#         And Verify the CTA links present on dental services menu
#         And Clicking on CTA redirected to 200 page on dental services menu

#     Scenario: Verify options in the "Payment Options" Flyer
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         And I click on the "Payment Options" navigation to see all the links and flyer is open
#         Then I should see the following services in the Payment Options flyer:
#             | Payment Options              |
#             | Insurance                    |
#             | Smile Generation Dental Plan |
#             | Smile Generation Financing   |
#         And Status code should be 200 of all the links under Payment Options flyer
#         Then Images should be present on payment options menu
#         And Verify the presence of description text on payment options menu
#         And Verify the CTA links present on payment options menu
#         And Clicking on CTA redirected to 200 page on payment options menu

#     Scenario: Verify the "How We Give" Tab
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         And I click on the "How We Give" navigation to see all the links and flyer is open
#         Then I should see two columns inside the flyer: "NATIONAL PARTNERS" and "PROGRAMS"

#     Scenario: Verify options in the "How We Give" Flyer
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         And I click on the "How We Give" navigation to see all the links and flyer is open
#         Then I should see the following partners in the NATIONAL PARTNERS column:
#             | National partners |
#             | Special olympics  |
#             | Charity:water     |
#             | PDS Foundation    |
#         Then I should see the following programs in the PROGRAMS column:
#             | Programs                   |
#             | Smile Generation serve day |
#             | KaBOOM! Playground builds  |
#         And Status code should be 200 of all the links under NATIONAL PARTNERS and PROGRAMS column
#         Then Images should be present on how we give menu
#         And Verify the presence of description text on how we give menu
#         And Verify the CTA links present on how we give menu
#         And Clicking on CTA redirected to 200 page on how we give menu

#         Scenario: Verify the "1-800-SMILEGEN" link attributes
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         Then I should see the "1-800-SMILEGEN" link in header
#         And the link in header should have a valid href attribute "tel:97123456"
#         And the link in header should have the target attribute set to "_blank"

#     Scenario: Verify the "Find A Dentist" button and its functionality
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         Then I should see the "FIND A DENTIST" button
#         And the color of the button should be correct
#         When I click on the "FIND A DENTIST" button
#         Then I should be navigated to the specific page in the same tab
#             | URL   |
#             | about |
#         And the HTTP response status code should be 200

#     # SEARCH
#      Scenario: Clicking on the search icon should open the search field
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         Then I should see the search icon in header


#     Scenario Outline: Perform a search with a selected tag in Primary Nav
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/home-page-variation.html"
#         Then the search icon should be present on primary Nav
#         And the user clicks on the dropdown
#         Then the search dropdown should appear with "<Tag>"
#         When the user selects "<Tag>" and user performs a search "test" then URL should contain selected tag and searched text in URL
#         Examples:
#             | Tag       |
#             | All       |
#             | Offices   |
#             | Articles  |
#             | Providers |
#             | FAQ       |

   
#     # STICKY NAV BAR
#     Scenario: Verify Sticky Header on Scroll Down
#         Given I am on the "smilegen" homepage
#         When I scroll down the page "sprint-4-demo/primary-nav-variations/home-page-variation.html" a little then header should become sticky
#         And I scroll down the page a little more then header should reamin sticky

#     Scenario: Verify Header Returns to Normal on Scroll Up
#         Given I am on the "smilegen" homepage
#         When I scroll down the page "sprint-4-demo/primary-nav-variations/home-page-variation.html" and then scroll back up
#         Then The header should return to its normal state

# Scenario: Verify the header nav bar on Dark Text variation
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/dark-text-variation.html"
#         Then verify the header nav items colour is black
#         And verify header is in Poppins font with size
#         Then That button is primary category

#     Scenario: Verify the "Mouth Body Connection" Tab on Dark Text variation
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/dark-text-variation.html"
#         And I click on the "Mouth Body Connection" navigation to see all the links and flyer is open
#         Then I should see two columns inside the flyer: "CATEGORIES" and "RESOURCES"

#     Scenario: Verify options in the "Mouth Body Connection" Flyer on Dark Text variation
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/dark-text-variation.html"
#         And I click on the "Mouth Body Connection" navigation to see all the links and flyer is open
#         Then I should see the following categories in the CATEGORIES column for Dark Text variation:
#             | Category       |
#             | Heart          |
#             | Brain          |
#             | Women's Health |
#             | Diabetes       |
#             | Cancer         |
#             | Inflammation   |
#         Then I should see the following resources in the RESOURCES column for Dark Text variation:
#             | Resources |
#             | Ebook     |
#             | Magazine  |
#             | Quiz      |
#             | Blog      |
#         And Status code should be 200 of all the links under CATEGORIES and RESOURCES column for Dark Text variation
#         Then Images should be present on mouth body connection menu for Dark Text variation
#         And Verify the presence of description text on mouth body connection menu for Dark Text variation
#         And Verify the CTA links present on mouth body connection menu for Dark Text variation
#         And Clicking on CTA redirected to 200 page on mouth body connection menu for Dark Text variation

#     Scenario: Verify the "Dental Services" Tab on Dark Text variation
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/dark-text-variation.html"
#         And I click on the "Dental Services" navigation to see all the links and flyer is open
#         Then I should see two columns inside the flyer: "POPULAR SERVICES" and "COMMON CONCERNS"

#     Scenario: Verify options in the "Dental Services" Flyer on Dark Text variation
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/dark-text-variation.html"
#         And I click on the "Dental Services" navigation to see all the links and flyer is open
#         Then I should see the following services in the POPULAR SERVICES column for Dark Text variation:
#             | Popular services    |
#             | Routine Cleanings   |
#             | Dental Implants     |
#             | X-Rays/Imaging      |
#             | Extractions         |
#             | Fillings            |
#             | Wisdom Teeth        |
#             | Aligners/Invisalign |
#             | Teeth Whitening     |
#             | Dentures            |
#             | Dental Crowns       |
#         Then I should see the following concerns in the COMMON CONCERNS column for Dark Text variation:
#             | Common concerns   |
#             | Bad Breath        |
#             | Stained Teeth     |
#             | Loose Tooth       |
#             | Cavities          |
#             | Bleeding Gums     |
#             | Chipped Tooth     |
#             | Toothache         |
#             | Receding Gums     |
#             | Tooth Sensitivity |
#             | Enamel Erosion    |
#         And Status code should be 200 of all the links under POPULAR SERVICES and COMMON CONCERNS column for Dark Text variation
#         Then Images should be present on dental services menu for Dark Text variation
#         And Verify the presence of description text on dental services menu for Dark Text variation
#         And Verify the CTA links present on dental services menu for Dark Text variation
#         And Clicking on CTA redirected to 200 page on dental services menu for Dark Text variation

#     Scenario: Verify options in the "Payment Options" Flyer on Dark Text variation
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/dark-text-variation.html"
#         And I click on the "Payment Options" navigation to see all the links and flyer is open
#         Then I should see the following services in the Payment Options flyer for Dark Text variation:
#             | Payment Options              |
#             | Insurance                    |
#             | Smile Generation Dental Plan |
#             | Smile Generation Financing   |
#         And Status code should be 200 of all the links under Payment Options flyer for Dark Text variation
#         Then Images should be present on payment options menu for Dark Text variation
#         And Verify the presence of description text on payment options menu for Dark Text variation
#         And Verify the CTA links present on payment options menu for Dark Text variation
#         And Clicking on CTA redirected to 200 page on payment options menu for Dark Text variation

#     Scenario: Verify the "How We Give" Tab on Dark Text variation
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/dark-text-variation.html"
#         And I click on the "How We Give" navigation to see all the links and flyer is open
#         Then I should see two columns inside the flyer: "NATIONAL PARTNERS" and "PROGRAMS"

#     Scenario: Verify options in the "How We Give" Flyer on Dark Text variation
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/dark-text-variation.html"
#         And I click on the "How We Give" navigation to see all the links and flyer is open
#         Then I should see the following partners in the NATIONAL PARTNERS column for Dark Text variation:
#             | National partners |
#             | Special olympics  |
#             | Charity:water     |
#             | PDS Foundation    |
#         Then I should see the following programs in the PROGRAMS column for Dark Text variation:
#             | Programs                   |
#             | Smile Generation serve day |
#             | KaBOOM! Playground builds  |
#         And Status code should be 200 of all the links under NATIONAL PARTNERS and PROGRAMS column for Dark Text variation
#         Then Images should be present on how we give menu for Dark Text variation
#         And Verify the presence of description text on how we give menu for Dark Text variation
#         And Verify the CTA links present on how we give menu for Dark Text variation
#         And Clicking on CTA redirected to 200 page on how we give menu for Dark Text variation

#     Scenario: Verify the header nav bar on Solid Background variation
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/solid-background-variation.html"
#         Then verify the header nav items colour is black
#         And verify header is in Poppins font with size
#         Then That button is primary category
#         And The background colour of header is white

#     Scenario: verify the presence of the menu options in the Nav bar
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/primary-nav-variations/solid-background-variation.html"
#         And Verify menu options in the nav bar
#             | Menu                  |
#             | Mouth Body Connection |
#             | Dental Services       |
#             | Payment Options       |
#             | How We Give           |
#             | Blog                  |

#  #TITLE
#     Scenario: Verify the title component
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-4-demo/text.html?"
#         And verify H1 'h1' title font size is '130px' and font family of title should be 'Poppins, sans-serif'
#         And verify H2 'h2' title font size is '70px' and font family of title should be 'Poppins, sans-serif'
#         And verify H3 'h3' title font size is '52px' and font family of title should be 'Poppins, sans-serif'
#         And verify H4 'h4' title font size is '36px' and font family of title should be 'Poppins, sans-serif'
#         And verify H5 'h5' title font size is '24px' and font family of title should be 'Poppins, sans-serif'
#         And verify H6 'h6' title font size is '20px' and font family of title should be 'Poppins, sans-serif'

#     #BUTTON
#     Scenario: Verify the button component
#         Given I am on the "smilegen" homepage
#         When I navigate to the "sprint-3-demo/button.html"
#         And verify the primary buttton with font family, size, text color and background color
#         And verify the secondary button state dark with font family, size, text color and border
#         And verify the secondary button state white with font family, size, text color and border
#         And verify the underline dark button with font family, size, text color and underline color
#         And verify the underline white button with font family, size, text color and underline color








# #   # # HEADER SECTION
# #   # Scenario: Clicking on SmileGen Logo navigates to homepage in the same tab
# #   #   Given I am on the "smilegen" homepage
# #   #   When I navigate to the "sprint-2-demo/main-hero.html"
# #   #   When I click on the SmileGen logo
# #   #   Then I should be navigated to the homepage in the same tab

# #   # Scenario: Verify the "1-800-SMILEGEN" link attributes
# #   #   Given I am on the "smilegen" homepage
# #   #   When I navigate to the "sprint-2-demo/main-hero.html"
# #   #   Then I should see the "1-800-SMILEGEN" link in header
# #   #   And the link in header should have a valid href attribute "tel:97123456"
# #   #   And the link in header should have the target attribute set to "_blank"

# #   # Scenario: Verify the "Find A Dentist" button and its functionality
# #   #   Given I am on the "smilegen" homepage
# #   #   When I navigate to the "sprint-2-demo/main-hero.html"
# #   #   Then I should see the "Find A Dentist" button
# #   #   And the color of the button should be correct
# #   #   When I click on the "Find A Dentist" button
# #   #   Then I should be navigated to the specific page in the same tab
# #   #     | URL            |
# #   #     | payment-option |
# #   #   And the HTTP response status code should be 200

# #   # Scenario: Clicking on the search icon should open the search page
# #   #   Given I am on the "smilegen" homepage
# #   #   When I navigate to the "sprint-2-demo/main-hero.html"
# #   #   Then I should see the search icon in header

#   # # SECONDARY NAV BAR
#   # Scenario: Verify the "Mouth Body Connection" Tab
#   #   Given I am on the "smilegen" homepage
#   #   When I navigate to the "sprint-2-demo/main-hero.html"
#   #   And I click on the "Mouth Body Connection" navigation to see all the links and flyer is open
#   #   Then I should see two columns inside the flyer: "CATEGORIES" and "RESOURCES"

#   # Scenario: Verify options in the "Mouth Body Connection" Flyer
#   #   Given I am on the "smilegen" homepage
#   #   When I navigate to the "sprint-2-demo/main-hero.html"
#   #   And I click on the "Mouth Body Connection" navigation to see all the links and flyer is open
#   #   Then I should see the following categories in the CATEGORIES column:
#   #     | Category       |
#   #     | Heart          |
#   #     | Brain          |
#   #     | Women's Health |
#   #     | Diabetes       |
#   #     | Cancer         |
#   #     | Inflammation   |
#   #   Then I should see the following resources in the RESOURCES column:
#   #     | Resources |
#   #     | Ebook     |
#   #     | Magazine  |
#   #     | Quiz      |
#   #     | Blog      |
#   #   And Status code should be 200 of all the links under CATEGORIES and RESOURCES column

#   # Scenario: Verify the "Dental Services" Tab
#   #   Given I am on the "smilegen" homepage
#   #   When I navigate to the "sprint-2-demo/main-hero.html"
#   #   And I click on the "Dental Services" navigation to see all the links and flyer is open
#   #   Then I should see two columns inside the flyer: "POPULAR SERVICES" and "COMMON CONCERNS"

#   # Scenario: Verify options in the "Dental Services" Flyer
#   #   Given I am on the "smilegen" homepage
#   #   When I navigate to the "sprint-2-demo/main-hero.html"
#   #   And I click on the "Dental Services" navigation to see all the links and flyer is open
#   #   Then I should see the following services in the POPULAR SERVICES column:
#   #     | Popular services    |
#   #     | Routine Cleanings   |
#   #     | Dental Implants     |
#   #     | X-Rays/Imaging      |
#   #     | Extractions         |
#   #     | Fillings            |
#   #     | Wisdom Teeth        |
#   #     | Aligners/Invisalign |
#   #     | Teeth Whitening     |
#   #     | Dentures            |
#   #     | Dental Crowns       |
#   #   Then I should see the following concerns in the COMMON CONCERNS column:
#   #     | Common concerns   |
#   #     | Bad Breath        |
#   #     | Stained Teeth     |
#   #     | Loose Tooth       |
#   #     | Cavities          |
#   #     | Bleeding Gums     |
#   #     | Chipped Tooth     |
#   #     | Toothache         |
#   #     | Receding Gums     |
#   #     | Tooth Sensitivity |
#   #     | Enamel Erosion    |
#   #   And Status code should be 200 of all the links under POPULAR SERVICES and COMMON CONCERNS column

#   # Scenario: Verify options in the "Payment Options" Flyer
#   #   Given I am on the "smilegen" homepage
#   #   When I navigate to the "sprint-2-demo/main-hero.html"
#   #   And I click on the "Payment Options" navigation to see all the links and flyer is open
#   #   Then I should see the following services in the Payment Options flyer:
#   #     | Payment Options              |
#   #     | Insurance                    |
#   #     | Smile Generation Dental Plan |
#   #     | Smile Generation Financing   |
#   #   And Status code should be 200 of all the links under Payment Options flyer

#   # Scenario: Verify the "How We Give" Tab
#   #   Given I am on the "smilegen" homepage
#   #   When I navigate to the "sprint-2-demo/main-hero.html"
#   #   And I click on the "How We Give" navigation to see all the links and flyer is open
#   #   Then I should see two columns inside the flyer: "NATIONAL PARTNERS" and "PROGRAMS"

#   # Scenario: Verify options in the "How We Give" Flyer
#   #   Given I am on the "smilegen" homepage
#   #   When I navigate to the "sprint-2-demo/main-hero.html"
#   #   And I click on the "How We Give" navigation to see all the links and flyer is open
#   #   Then I should see the following partners in the NATIONAL PARTNERS column:
#   #     | National partners |
#   #     | Special Olympics  |
#   #     | charity:water     |
#   #     | PDS Foundation    |
#   #   Then I should see the following programs in the PROGRAMS column:
#   #     | Programs                   |
#   #     | Smile Generation Serve Day |
#   #     | KABOOM! Playgrounds        |
#   #   And Status code should be 200 of all the links under NATIONAL PARTNERS and PROGRAMS column


#   # # STICKY NAV BAR
#   # Scenario: Verify Sticky Header on Scroll Down
#   #   Given I am on the "smilegen" homepage
#   #   When I scroll down the page "sprint-2-demo/main-hero.html" a little then header should become sticky
#   #   And I scroll down the page a little more then header should reamin sticky

#   # Scenario: Verify Header Returns to Normal on Scroll Up
#   #   Given I am on the "smilegen" homepage
#   #   When I scroll down the page "sprint-2-demo/main-hero.html" and then scroll back up
#   #   Then The header should return to its normal state




#   # FOOTER SECTION
#     #    Verify 1st column "MOUTH BODY CONNECTION" links
#     # Scenario Outline: Verify "MOUTH BODY CONNECTION" links in the footer
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     And I scroll to the footer section
#     #     Then I should see the "MOUTH BODY CONNECTION" in column one in the footer
#     #     And The Mouth Body Connection column should have the following links:
#     #         | Link Text           |
#     #         | Overview            |
#     #         | Heart               |
#     #         | Brain               |
#     #         | Reproductive System |
#     #         | Diabetes            |
#     #         | Ebook               |
#     #         | Magazine            |
#     #         | Quiz                |
#     #         | Women's Health      |
#     #         | Cancer              |
#     #         | Inflammation        |
#     #         | Blog                |
#     #     When I click on the "<Link>" link in the Mouth Body Connection column
#     #     Then I should be navigated to the "<URL>" page and status code should be 200
#     #     Examples:
#     #         | Link                | URL          |
#     #         | Overview            | overview     |
#     #         | Heart               | heart        |
#     #         | Brain               | brain        |
#     #         | Reproductive System | reproductive |
#     #         | Diabetes            | diabetes     |
#     #         | Ebook               | ebook        |
#     #         | Magazine            | magazine     |
#     #         | Quiz                | quiz         |
#     #         | Women's Health      | women        |
#     #         | Cancer              | cancer       |
#     #         | Inflammation        | inflammation |
#     #         | Blog                | blog         |

#     # # Verify 2nd column "DENTAL SERVICES" links
#     # Scenario Outline: Verify "DENTAL SERVICES" links in the footer
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     And I scroll to the footer section
#     #     Then I should see the "DENTAL SERVICES" in column two in the footer
#     #     And The DENTAL SERVICES column should have the following links:
#     #         | Link Text           |
#     #         | Overview            |
#     #         | Emergency           |
#     #         | General Dentistry   |
#     #         | Pediatric Dentistry |
#     #         | Orthodontics        |
#     #         | Periodontics        |
#     #         | Endontics           |
#     #         | Oral Surgery        |
#     #         | Cosmetic Dentistry  |
#     #     When I click on the "<Link>" link in the DENTAL SERVICES column
#     #     Then I should be navigated to the "<URL>" page and status code should be 200
#     #     Examples:
#     #         | Link                | URL                 |
#     #         | Overview            | overview            |
#     #         | Emergency           | emergency           |
#     #         | General Dentistry   | general-dentistry   |
#     #         | Pediatric Dentistry | pediatric-dentistry |
#     #         | Orthodontics        | orthodontics        |
#     #         | Periodontics        | periodontics        |
#     #         | Endontics           | endontics           |
#     #         | Oral Surgery        | oral-surgery        |
#     #         | Cosmetic Dentistry  | cosmetic-dentistry  |

#     # # Verify 3rd column "PAYMENT OPTIONS" links
#     # Scenario Outline: Verify "PAYMENT OPTIONS" links in the footer
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     And I scroll to the footer section
#     #     Then I should see the "PAYMENT OPTIONS" in column three in the footer
#     #     And The PAYMENT OPTIONS column should have the following links:
#     #         | Link Text                    |
#     #         | Overview                     |
#     #         | Insurance We Accept          |
#     #         | Apply for our credit card    |
#     #         | Subscribe to our dental plan |
#     #     When I click on the "<Link>" link in the PAYMENT OPTIONS column
#     #     Then I should be navigated to the "<URL>" page and status code should be 200
#     #     Examples:
#     #         | Link                         | URL         |
#     #         | Overview                     | overview    |
#     #         | Insurance We Accept          | insurance   |
#     #         | Apply for our credit card    | credit-card |
#     #         | Subscribe to our dental plan | dental-plan |

#     # # Verify 4th column "HOW WE GIVE" links
#     # Scenario Outline: Verify "HOW WE GIVE" links in the footer
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     And I scroll to the footer section
#     #     Then I should see the "HOW WE GIVE" in column four in the footer
#     #     And The HOW WE GIVE column should have the following links:
#     #         | Link Text                  |
#     #         | Overview                   |
#     #         | Special olympics           |
#     #         | Charity:water              |
#     #         | PDS Foundation             |
#     #         | Smile Generation serve day |
#     #         | KaBOOM! Playground builds  |
#     #         | Smile for Special needs    |
#     #     When I click on the "<Link>" link in the HOW WE GIVE column
#     #     Then I should be navigated to the "<URL>" page and status code should be 200
#     #     Examples:
#     #         | Link                       | URL               |
#     #         | Overview                   | overview          |
#     #         | Special olympics           | special-olympics  |
#     #         | Charity:water              | charity-water     |
#     #         | PDS Foundation             | pds-foundation    |
#     #         | Smile Generation serve day | serve-day         |
#     #         | KaBOOM! Playground builds  | playground-builds |
#     #         | Smile for Special needs    | special-needs     |

#     # # Verify 5th column "ABOUT" links
#     # Scenario Outline: Verify "ABOUT" links in the footer
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     And I scroll to the footer section
#     #     Then I should see the "ABOUT" in column five in the footer
#     #     And The ABOUT column should have the following links:
#     #         | Link Text      |
#     #         | Overview       |
#     #         | Blog           |
#     #         | Find a Dentist |
#     #         | FAQ's          |
#     #         | Contact        |
#     #         | Patient Portal |
#     #     When I click on the "<Link>" link in the ABOUT column
#     #     Then I should be navigated to the "<URL>" page and status code should be 200
#     #     Examples:
#     #         | Link           | URL            |
#     #         | Overview       | overview       |
#     #         | Blog           | blog           |
#     #         | Find a Dentist | find-a-dentist |
#     #         | FAQ's          | faq            |
#     #         | Contact        | contact        |
#     #         | Patient Portal | patient-portal |


#     # # verify legal text in footer
#     # Scenario: Verify presence of legal texts in the footer
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     And I scroll to the footer section
#     #     Then I should see the following legal texts
#     #         | Text                             |
#     #         | Privacy Policy                   |
#     #         | Terms of Service                 |
#     #         | CA Consumer Privacy Act          |
#     #         | Infection Prevention Information |
#     #         | Site Map                         |

#     # Scenario Outline: Clicking on each legal text link in the footer
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     And I scroll to the footer section
#     #     And I click on the "<Text>" link in the footer
#     #     Then I should be navigated to the "<URL>" page and status code should be 200
#     #     Examples:
#     #         | Text                             | URL   |
#     #         | Privacy Policy                   | about |
#     #         | Terms of Service                 | about |
#     #         | CA Consumer Privacy Act          | about |
#     #         | Infection Prevention Information | about |
#     #         | Site Map                         | about |


#     # # verify 1-800-SMILEGEN link in the footer
#     # Scenario: Verify presence of 1-800-SMILEGEN link in the footer
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     And I scroll to the footer section
#     #     Then I should see the "1-800-SMILEGEN" link
#     #     And the link should have a valid href attribute "tel:1-800-SMILEGEN"
#     #     And the link should have the target attribute set to "_blank"

#     # # verify social icons and links in footer
#     # Scenario Outline: Verify presence and links of social media icons in the footer section
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     And I scroll to the footer section
#     #     Then I should see following social media icons
#     #         | Links                                     |
#     #         | https://www.facebook.com/smilegen         |
#     #         | http://www.instagram.com/smilegeneration  |
#     #         | http://www.twitter.com/smilegen           |
#     #         | https://www.pinterest.com/smilegen/       |
#     #         | https://www.youtube.com/c/SmileGeneration |
#     #     And I click on each social media icon "<Icon>"
#     #     Then I should be redirected to the correct social media URL "<URL>" for each icon
#     #     Examples:
#     #         | Icon      | URL                                                               |
#     #         | facebook  | https://www.facebook.com/smilegen                                 |
#     #         | instagram | https://www.instagram.com/smilegeneration                         |
#     #         | twitter   | https://twitter.com/i/flow/login?redirect_after_login=%2Fsmilegen |
#     #         | pinterest | https://www.pinterest.com/smilegen/                               |
#     #         | youtube   | https://www.youtube.com/c/SmileGeneration                         |

#     # Scenario: Verify the paragraph text in the footer
#     #     Given I am on the "smilegen" homepage
#     #     When I navigate to the "sprint-5-demo/homepage.html"
#     #     And I scroll to the footer section
#     #     Then Verify the paragraph and font family