@visual
Feature: Validate the smilegen pages visually
  As a QA
  I should be able to access PDS pages across browsers and devices
  So that I can validate the rendition of the page across devices and browsers

  Scenario: Visual test - text,title, container , Header , Footer
    Given I am on the smilegen homepage
    When I navigate to page "/sprint-1-demo/container-and-text.html"
    Then I should be visually verifying the "sorint1stories"

  Scenario: Visual test - single row  tabs , newsletter
    Given I am on the smilegen homepage
    When I navigate to page "/sprint-3-demo/tabs-1-row/payment-options/"
    Then I should be visually verifying the "tabs1row"

  Scenario: Visual test - two tabs
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-3-demo/tabs-3-rows1/all-categories.html"
    Then I should be visually verifying the "tabs2row"

  Scenario: Visual test - embed and information
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-3-demo/embed.html"
    Then I should be visually verifying the "embedandinfo"

  Scenario: Visual test - buttons
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-3-demo/button.html"
    Then I should be visually verifying the "buttons"

  Scenario: Visual test -  Text card with CTA
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-4-demo/text-card/text-card-with-cta.html"
    Then I should be visually verifying the "textcardwithcta"

  Scenario: Visual test -  Factcard
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-4-demo/fact-card/yellow-fact-card.html"
    Then I should be visually verifying the "factcard"

  Scenario: Visual test -  text card without cta
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-4-demo/text-card/text-card-without-cta.html"
    Then I should be visually verifying the "textcardwithoutcta"

  Scenario: Visual test -  primary nav variations - landing page
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-4-demo/primary-nav-variations/landing-page-variation.html"
    Then I should be visually verifying the "landingapgeheader"

  Scenario: Visual test -  primary nav variations - dark text variation
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-4-demo/primary-nav-variations/dark-text-variation.html"
    Then I should be visually verifying the "darktextheader"

  Scenario: Visual test -  primary nav variations - solid background variation
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-4-demo/primary-nav-variations/solid-background-variation.html"
    Then I should be visually verifying the "solidbackgroundvariation"

  Scenario: Visual test - primary nav variations- home page variation
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-4-demo/primary-nav-variations/home-page-variation.html"
    Then I should be visually verifying the "homepagevariation"

  Scenario: Visual test - hero variations- home page variation
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/hero-variations/home-page-variation.html"
    Then I should be visually verifying the "homepageherovariation"

  Scenario: Visual test - hero variations- landing page variation
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/hero-variations/landing-page-variation.html"
    Then I should be visually verifying the "landingherovariation"

  Scenario: Visual test - hero variations- text only variation
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/hero-variations/text-only-variation.html"
    Then I should be visually verifying the "herotextonlyvariation"

  Scenario: Visual test - hero variations- text only with copy variation
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/hero-variations/text-only-with-copy.html"
    Then I should be visually verifying the "herotextwithcopyvariation"

  Scenario: Visual test - hero variations- category page variation
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/hero-variations/category-page.html"
    Then I should be visually verifying the "categorypagevariation"

  Scenario: Visual test - hero variations- background image variation
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/hero-variations/bg-image-variation/about-us.html"
    Then I should be visually verifying the "backgroundimagevariation"

  Scenario: Visual test - hero variations- landing page with white text top variation
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/hero-variations/landing-page-white-text-top-copy.html"
    Then I should be visually verifying the "landingapgewhitetexttopvariation"

  Scenario: Visual test - magazine carousel
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/magazine-carousel.html"
    Then I should be visually verifying the "magazinecarousel"

  Scenario: Visual test - common concerns carousel
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/common-concerns.html"
    Then I should be visually verifying the "commonconcernscorousel"

  Scenario: Visual test - teaser
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/teaser.html"
    Then I should be visually verifying the "teaser"

  Scenario: Visual test - video
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/video.html"
    Then I should be visually verifying the "video"

  Scenario: Visual test - staggered card
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-6-demo/staggered-card-update/review.html"
    Then I should be visually verifying the "staggeredcard"

  Scenario: Visual test - staggered card with cta
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-6-demo/staggered-card-update/with-cta.html"
    Then I should be visually verifying the "staggeredcardwithcta"

  Scenario: Visual test - staggered card with title
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-6-demo/staggered-card-update/title.html"
    Then I should be visually verifying the "staggeredcardwithtitle"

  Scenario: Visual test - Homepage
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/homepage.html"
    Then I should be visually verifying the "homepage"

  Scenario: Visual test - Generation of smiles
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5-demo/generations-of-smiles.html"
    Then I should be visually verifying the "generation of smiles"

  Scenario: Visual test - teaser - learn more with cta
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5/teaser/learn-more-and-cta.html"
    Then I should be visually verifying the "learnmoreandcta"

  Scenario: Visual test - teaser - image left and right
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-5/teaser/learn-more.html"
    Then I should be visually verifying the "imageleftandright"

  Scenario: Visual test - quote component
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-6-demo/quote.html"
    Then I should be visually verifying the "quote"

  Scenario: Visual test - 3 quotes
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-6-demo/3-quotes.html"
    Then I should be visually verifying the "3quotes"

  Scenario: Visual test - gallery component
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-6-demo/gallery-component-.html"
    Then I should be visually verifying the "gallery"

  Scenario: Visual test - costestimator component
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-6-demo/cost-estimator.html"
    Then I should be visually verifying the "costestimator"

  Scenario: Visual test - container, spacer and container spacer component
    Given I am on the smilegen homepage
    Given I navigate to page "/sprint-6-demo/container.html"
    Then I should be visually verifying the "containerspacer"

  Scenario: Visual test - Homepage
    Given I am on the smilegen homepage
    Given I navigate to page "/"
    Then I should be visually verifying the "Homepage"

  Scenario: Visual test - Covid-19 Information Page
    Given I am on the smilegen homepage
    Given I navigate to page "/covid-19/"
    Then I should be visually verifying the "Covid-19 Information Page"

  Scenario: Visual test - Individual Office Pages
    Given I am on the smilegen homepage
    Given I navigate to page "/37922/858/?ic=djgrvervr"
    Then I should be visually verifying the "Individual Office Pages"

  Scenario: Visual test - Free Downloadable Conversion Landing Page
    Given I am on the smilegen homepage
    Given I navigate to page "/conversion-landing-page/?htyu"
    Then I should be visually verifying the "Free Downloadable Conversion Landing Page"

  Scenario: Visual test - Mouth-Body Connection
    Given I am on the smilegen homepage
    Given I navigate to page "/mouth-body-connection/"
    Then I should be visually verifying the "/mouth-body-connection/"

  Scenario: Visual test - Heart Health
    Given I am on the smilegen homepage
    Given I navigate to page "/mouth-body-connection/heart/"
    Then I should be visually verifying the "Heart Health"

  Scenario: Visual test - Reasons eBook
    Given I am on the smilegen homepage
    Given I navigate to page "/mouth-body-connection/ebook/"
    Then I should be visually verifying the "Reasons eBook"

  Scenario: Visual test - Generations of Smiles Magazine
    Given I am on the smilegen homepage
    Given I navigate to page "/mouth-body-connection/magazine/"
    Then I should be visually verifying the "Generations of Smiles Magazine"

  Scenario: Visual test - Dental Services
    Given I am on the smilegen homepage
    Given I navigate to page "/dental-services/"
    Then I should be visually verifying the "Dental Services"

  Scenario: Visual test - Smile Generation MyChart
    Given I am on the smilegen homepage
    Given I navigate to page "/dental-services/smile-generation-mychart/"
    Then I should be visually verifying the "Smile Generation MyChart"

  Scenario: Visual test - Crooked Teeth
    Given I am on the smilegen homepage
    Given I navigate to page "/dental-services/crooked-teeth/"
    Then I should be visually verifying the "Crooked Teeth"

  Scenario: Visual test - General Dentistry
    Given I am on the smilegen homepage
    Given I navigate to page "/dental-services/general-dentistry/"
    Then I should be visually verifying the "General Dentistry"

  Scenario: Visual test - Routine Cleaning
    Given I am on the smilegen homepage
    Given I navigate to page "/dental-services/general-dentistry/routine-cleaning/?wert"
    Then I should be visually verifying the "Routine Cleaning"

  Scenario: Visual test - Payment Options
    Given I am on the smilegen homepage
    Given I navigate to page "/payment-options/?htyu"
    Then I should be visually verifying the "Payment Options"

  Scenario: Visual test - Smile Generation Dental Plan
    Given I am on the smilegen homepage
    Given I navigate to page "/payment-options/smile-generation-dental-plan/?wert"
    Then I should be visually verifying the "Smile Generation Dental Plan"

  Scenario: Visual test - How We Give
    Given I am on the smilegen homepage
    Given I navigate to page "/how-we-give/?wert"
    Then I should be visually verifying the "How We Give"

  Scenario: Visual test - Special Olympics
    Given I am on the smilegen homepage
    Given I navigate to page "/how-we-give/special-olympics/?rte"
    Then I should be visually verifying the "Special Olympics"

  Scenario: Visual test - About
    Given I am on the smilegen homepage
    Given I navigate to page "/about/?wert"
    Then I should be visually verifying the "About"

  Scenario: Visual test - Blog
    Given I am on the smilegen homepage
    Given I navigate to page "/blog/?ytr"
    Then I should be visually verifying the "Blog"

  Scenario: Visual test - Oral Health and Dentistry
    Given I am on the smilegen homepage
    Given I navigate to page "/blog/ask-a-dentist/"
    Then I should be visually verifying the "Oral Health and Dentistry"

  Scenario: Visual test - FAQs
    Given I am on the smilegen homepage
    Given I navigate to page "/faqs/"
    Then I should be visually verifying the "FAQs"









































