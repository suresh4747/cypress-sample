import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { HomePage } = require("../../page/pds-site/homePage");

const homePage = new HomePage();

// css locators
var hero_with_cta = ".cmp-teaser--hero-with-cta";
var hero_with_cta_image = ".cmp-teaser--hero-with-cta .cmp-image__image";
var hero_with_cta_title = 'h1[class="cmp-teaser__title"]';
var hero_with_cta_button = ".cmp-teaser__action-container .cmp-button__text";
var hero_without_cta = ".cmp-teaser--hero-without-cta";
var hero_without_cta_image = ".cmp-teaser--hero-without-cta .cmp-image__image";
var hero_with_cta_center = ".cmp-teaser--hero-with-cta-center";
var hero_with_cta_center_image =
  ".cmp-teaser--hero-with-cta-center .cmp-image__image";
var hero_with_cta_center_subheading =
  ".cmp-teaser__content .cmp-teaser__description";

// Navigation to Page

Given("I am on the PDS homepage", () => {
  homePage.homepageNavigation();
});

//hero - banner -- Main Hero with CTA
When("I navigate to page {string}", (url) => {
  homePage.heroPageNavigation(url);
});

Then("I should be able to see the Hero Banner with CTA on the page", () => {
  homePage.herobannerSection(hero_with_cta);
});
And(
  "with CTA Hero banner - I should be able to see the Background Image and its width 1920",
  () => {
    homePage.heroimage(hero_with_cta_image);
  }
);

And("Verify the H1 Title is present and verify the Font Style", () => {
  homePage.herotitle(hero_with_cta_title);
});

And("Verify the CTA on the banner", () => {
  homePage.herocta(hero_with_cta_button);
});

//hero - banner -- Main Hero without CTA
When("I navigate to page {string}", (url) => {
  homePage.heroPageNavigation(url);
});

Then("I should be able to see the Hero Banner without CTA on the page", () => {
  homePage.herobannerSection(hero_without_cta);
});

And(
  "without CTA Hero banner - I should be able to see the Background Image and its width 1920",
  () => {
    homePage.heroimage(hero_without_cta_image);
  }
);

And("Verify the H1 Title is present and verify the Font Style", () => {
  homePage.herotitle(hero_with_cta_title);
});

//hero - banner -- Center aligned Text
When("I navigate to page {string}", (url) => {
  homePage.heroPageNavigation(url);
});

Then("I should be able to see the Hero Center-aligned text on the page", () => {
  homePage.herobannerSection(hero_with_cta_center);
});

And(
  "Hero Center-aligned text - I should be able to see the Background Image and its width 1920",
  () => {
    homePage.heroimage(hero_with_cta_center_image);
  }
);

And("Verify the H1 Title is present and verify the Font Style", () => {
  homePage.herotitle(hero_with_cta_title);
});

And("Verify the SubHeading is present and verify the Font Style", () => {
  homePage.herosubheading(hero_with_cta_center_subheading);
});

And("Verify the center aligned CTA on the banner", () => {
  homePage.herocta(hero_with_cta_button);
});
