// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// const { HomePage } = require("../../page/smilegen-site/homePage");

// const homePage = new HomePage();

// // css locators

// var mainHeroBanner = ".cmp-teaser--main-hero";
// var HeroTitle = 'h1[class="cmp-teaser__title"]';
// var secHeroBanner = ".cmp-teaser--secondary-hero";
// var secHeroImages =
//   ".cmp-teaser--secondary-hero .cmp-teaser__image img.cmp-image__image";
// var secHeroCopyBanner = ".cmp-teaser--secondary-hero-with-copy";
// var secHeroCopyImages =
//   ".cmp-teaser--secondary-hero-with-copy .cmp-teaser__image img.cmp-image__image";
// var promoHeroBanner = ".cmp-teaser--promo-hero";
// var promoHeroImages =
//   ".cmp-teaser--promo-hero .cmp-teaser__image img.cmp-image__image";
// var teritiaryHeroBanner = ".cmp-teaser--tertiary-hero";

// When("I navigate to the page {string}", (url) => {
//   homePage.webPageNavigation(url);
// });

// And("The banner section is present", () => {
//   homePage.bannerSection(mainHeroBanner);
// });

// Then("Check background image is present", () => {
//   homePage.mainHeroImage();
// });

// And("Verify the H1 Title is present and verify the Font Style", () => {
//   homePage.BannerTitleCSS(HeroTitle);
// });
// // verify secondary hero banner
// And("The Secondary Hero banner section is present", () => {
//   homePage.bannerSection(secHeroBanner);
// });

// Then("Check Secondary Hero banner background image is present", () => {
//   homePage.bannerImage(secHeroImages);
// });

// And("Verify the H1 Title is present and verify the Font Style", () => {
//   homePage.BannerTitleCSS(HeroTitle);
// });
// // verify secondary hero copy banner
// And("The Secondary Hero copy banner section is present", () => {
//   homePage.bannerSection(secHeroCopyBanner);
// });

// Then("Check Secondary Hero Copy banner background image is present", () => {
//   homePage.bannerImage(secHeroCopyImages);
// });

// And("Verify the H1 Title is present and verify the Font Style", () => {
//   homePage.BannerTitleCSS(HeroTitle);
// });
// // verify promo hero banner
// And("The Promo Hero banner section is present", () => {
//   homePage.bannerSection(promoHeroBanner);
// });

// Then("Check Promo Hero banner background image is present", () => {
//   homePage.bannerImage(promoHeroImages);
// });

// And("Verify the H1 Title is present and verify the Font Style", () => {
//   homePage.BannerTitleCSS(HeroTitle);
// });
// // verify teritiary hero banner
// And("The Teritiary Hero banner section is present", () => {
//   homePage.bannerSection(teritiaryHeroBanner);
// });

// Then("Check Teritiary Hero banner background color", () => {
//   homePage.teritiarybannersectionColor();
// });

// And("the link should have a valid href attribute {string}", (hrefValue) => {
//   homePage.smilegenhref(smilegenlinkFooter, hrefValue);
// });

// And(
//   "the link should have the target attribute set to {string}",
//   (targetValue) => {
//     homePage.smilegenTargetFooter(smilegenlinkFooter, targetValue);
//   }
// );

// When("I click on the SmileGen logo", () => {
//   homePage.smilegenLogoHeader(smilegenlogoHeader);
// });

// Then("I should be navigated to the homepage in the same tab", () => {
//   homePage.smilegenLogoHeaderNav();
// });

// Then("I should see the {string} link in header", (String) => {
//   homePage.smilegenlink(String, smilegenlinkHeader);
// });

// And(
//   "the link in header should have a valid href attribute {string}",
//   (hrefValue) => {
//     homePage.smilegenhrefHeader(smilegenHeaderHref, hrefValue);
//   }
// );

// And(
//   "the link in header should have the target attribute set to {string}",
//   (targetValue) => {
//     homePage.smilegenTargetHeader(smilegenHeaderHref, targetValue);
//   }
// );

// Then("I should see the {string} button", (String) => {
//   homePage.findDentistbttn(String);
// });

// And("the color of the button should be correct", () => {
//   homePage.dentistnttnColor();
// });

// When("I click on the {string} button", (String) => {
//   homePage.clickDentistbttn(String);
// });

// Then("I should be navigated to the specific page in the same tab", (dataTable) => {
//   homePage.redirectionDentistbttn(dataTable);
// });

// And("the HTTP response status code should be 200", () => {
//   homePage.dentisturlRedirection();
// });

// Then("I should see the search icon in header", () => {
//   homePage.searchIconHeader();
// });
