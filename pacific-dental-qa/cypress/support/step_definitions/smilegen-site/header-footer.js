// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// const { HomePage } = require("../../page/smilegen-site/header-footer");

// const homePage = new HomePage();

// // css locators
// var mouthbodyconnectionfooter = ".cmp-footer__column:nth-of-type(1)";
// var detnalservicesfooter = ".cmp-footer__column:nth-of-type(2)";
// var paymentoptionsfooter = ".cmp-footer__column:nth-of-type(3)";
// var howwegivefooter = ".cmp-footer__column:nth-of-type(4)";
// var aboutfooter = ".cmp-footer__column:nth-of-type(5)";
// var legalfooter = ".cmp-footer__copyright--links .cmp-text a";
// var socialMediaIcons = ".cmp-footer__copyright--social .image a";
// var smilegenlinkFooter = ".cmp-footer__copyright--social";
// var smilegenlinkHeader =
//   ".cmp-header__nav-actions [class*='cmp-button--link'] .cmp-button__text";
// var smilegenHeader =
//   ".cmp-header__nav-actions [class*='cmp-button--link'] .cmp-button";
// var smilegenHeaderHref =
//   ".cmp-header__nav-actions [class*='cmp-button--link'] a";
// var smilegenlogoHeader = ".cmp-image--normal .cmp-image__link";
// var mouthBodyCategories = "#list-159874f5b4 .cmp-list__item-title";
// var mouthBodyResources = "#list-3e2ff439ff .cmp-list__item-title";
// var dentalServices = "#list-eb0f853cbb .cmp-list__item-title";
// var dentalConcerns = "#list-0514a2523f .cmp-list__item-title";
// var paymentOptions = "#list-14c1eedd23 .cmp-list__item-title";
// var giveNational = "#list-18501800d1 .cmp-list__item-title";
// var givePrograms = "#list-9ee306c8d6 .cmp-list__item-title";
// var mouthBodyResponse = "*[id='container-03a159ea88'] .list a";
// var dentalResponse = "*[id='container-9a2f387f7a'] .list a";
// var paymentResponse = "*[id='container-446c140148'] .list a";
// var howwegiveResponse = "*[id='container-68e819cdeb'] .list a";
// var downloadFreeBook = ".cmp-button--secondary .cmp-button";
// var mouthbodyBttnOne = "#teaser-bcfd7781d0-cta-69481710c0";
// var mouthbodyBttnTwo = "#teaser-e3db3a3821-cta-d11dada25a";
// // var dentalservicesBttn = "#teaser-7b627512b8-cta-9a374c51c2";
// var paymentOptionsBttnOne = "#teaser-e219baf17b-cta-d897f2a38d";
// var paymentOptionsBttnTwo = "#teaser-4b2bd91c34-cta-4b7f191980";
// var howwegiveBttnOne = "#teaser-21a30d12b8-cta-a175eda0fb";
// var howwegiveBttnTwo = "#button-34c74edbb8";
// var secondarynavBar = ".cmp-navigation__item-link";
// var mouthbodyImageone = "#teaser-bcfd7781d0-image";
// var mouthbodyImagetwo = "#teaser-e3db3a3821-image";
// var mouthbodyDescOne = "#teaser-bcfd7781d0 .cmp-teaser__description";
// var mouthbodyDescTwo = "#teaser-e3db3a3821 .cmp-teaser__description";
// var mouthbodyBttnOne = "#teaser-bcfd7781d0-cta-69481710c0";
// var mouthbodyBttnTwo = "#teaser-e3db3a3821-cta-d11dada25a";
// var mouthbodyBttnThree = "#button-31300294d2";
// var mouthBodyCategoriesDark = "#list-fab5b48579 .cmp-list__item-title";
// var mouthBodyResourcesDark = "#list-e281a7dd22 .cmp-list__item-title";
// var dentalservicesImage = "#teaser-7b627512b8-image";
// var dentalservicesDesc = "#teaser-7b627512b8 .cmp-teaser__description";
// var dentalservicesBttnOne = "#teaser-7b627512b8-cta-9a374c51c2";
// var dentalservicesBttnTwo = "#button-c4c56a4f20";
// var dentalServicesDark = "#list-2dd04700ea .cmp-list__item-title";
// var dentalConcernsDark = "#list-5befefaf15 .cmp-list__item-title";
// var paymentOptionsDark = "#list-4db93a2f09 .cmp-list__item-title";
// var paymentOptionsImageOne = "#teaser-e219baf17b-image";
// var paymentOptionsImageTwo = "#teaser-4b2bd91c34-image";
// var paymentOptionsDescOne = "#teaser-e219baf17b .cmp-teaser__description";
// var paymentOptionsDescTwo = "#teaser-4b2bd91c34 .cmp-teaser__description";
// var paymentOptionsBttnOne = "#teaser-e219baf17b-cta-d897f2a38d";
// var paymentOptionsBttnTwo = "#teaser-4b2bd91c34-cta-4b7f191980";
// var paymentOptionsBttnThree = "#button-79582d2f98";
// var giveNationalDark = "#list-ba34b0a5ae .cmp-list__item-title";
// var giveProgramsDark = "#list-0129f32aeb .cmp-list__item-title";
// var howwegiveImage = "#teaser-21a30d12b8-image";
// var howwegiveDesc = "#teaser-21a30d12b8 .cmp-teaser__description";
// // var howwegiveBttn = "#teaser-21a30d12b8-cta-a175eda0fb";
// var mouthBodyResponseDark = "*[id='container-2255f392ba'] .list a";
// var dentalResponseDark = "*[id='container-11307d5140'] .list a";
// var paymentResponseDark = "*[id='container-e02d867552'] .list a";
// var howwegiveResponseDark = "*[id='container-73aa430fdc'] .list a";
// var mouthbodyImageoneDark = "#teaser-13a3f63ef2-image";
// var mouthbodyImagetwoDark = "#teaser-a6f4f8e2b7-image";
// var mouthbodyDescOneDark = "#teaser-13a3f63ef2 .cmp-teaser__description";
// var mouthbodyDescTwoDark = "#teaser-a6f4f8e2b7 .cmp-teaser__description";
// var mouthbodyBttnOneDark = "#teaser-13a3f63ef2-cta-69481710c0";
// var mouthbodyBttnTwoDark = "#teaser-a6f4f8e2b7-cta-d11dada25a";
// var mouthbodyBttnThreeDark = "#button-969dc41807";
// var dentalservicesImageDark = "#teaser-42524aafb7-image";
// var dentalservicesDescDark = "#teaser-42524aafb7 .cmp-teaser__description";
// var dentalservicesBttnOneDark = "#teaser-42524aafb7-cta-9a374c51c2";
// var dentalservicesBttnTwoDark = "#button-ece538d2f6";
// var paymentOptionsImageOneDark = "#teaser-a225345b4f-image";
// var paymentOptionsImageTwoDark = "#teaser-e9dd7d114b-image";
// var paymentOptionsDescOneDark = "#teaser-a225345b4f .cmp-teaser__description";
// var paymentOptionsDescTwoDark = "#teaser-e9dd7d114b .cmp-teaser__description";
// var paymentOptionsBttnOneDark = "#teaser-a225345b4f-cta-d897f2a38d";
// var paymentOptionsBttnTwoDark = "#teaser-e9dd7d114b-cta-4b7f191980";
// var paymentOptionsBttnThreeDark = "#button-5a69bd08a6";
// var howwegiveImageDark = "#teaser-dec563830a-image";
// var howwegiveDescDark = "#teaser-dec563830a .cmp-teaser__description";
// var howwegiveBttnOneDark = "#teaser-dec563830a-cta-a175eda0fb";
// var howwegiveBttnTwoDark = "#button-0ce4490187";

// Given("I am on the {string} homepage", (homepage) => {
//   homePage.homepagewebsite(homepage);
// });

// When("I navigate to the {string}", (url) => {
//   homePage.homepageNavigation(url);
// });

// // Scroll to Footer
// And("I scroll to the footer section", () => {
//   homePage.footerScroll();
// });

// // Verify 1st column Title
// Then("I should see the {string} in column one in the footer", (String) => {
//   homePage.mouthbodyConnect(String);
// });

// // Verify the links in the list
// And(
//   "The Mouth Body Connection column should have the following links:",
//   (dataTable) => {
//     cy.log("number of footer title to validate: " + dataTable.hashes().length);
//     homePage.footerColumnLinks(dataTable, mouthbodyconnectionfooter);
//   }
// );
// // Click on the links
// When(
//   "I click on the {string} link in the Mouth Body Connection column",
//   (link) => {
//     homePage.clickLink(link, mouthbodyconnectionfooter);
//   }
// );
// // Verify the response 200
// Then(
//   "I should be navigated to the {string} page and status code should be 200",
//   (currenturl) => {
//     homePage.urlRedirection(currenturl);
//   }
// );

// // Verify 2nd column Title
// Then("I should see the {string} in column two in the footer", (String) => {
//   homePage.dentalservices(String);
// });

// // Verify the links in the list
// And(
//   "The DENTAL SERVICES column should have the following links:",
//   (dataTable) => {
//     cy.log("number of footer title to validate: " + dataTable.hashes().length);
//     homePage.footerColumnLinks(dataTable, detnalservicesfooter);
//   }
// );

// // Click on the links
// When("I click on the {string} link in the DENTAL SERVICES column", (link) => {
//   homePage.clickLink(link, detnalservicesfooter);
// });

// // Verify the response 200
// Then(
//   "I should be navigated to the {string} page and status code should be 200",
//   (currenturl) => {
//     homePage.urlRedirection(currenturl);
//   }
// );

// // Verify 3rd column Title
// Then("I should see the {string} in column three in the footer", (String) => {
//   homePage.paymentoption(String);
// });

// // Verify the links in the list
// And(
//   "The PAYMENT OPTIONS column should have the following links:",
//   (dataTable) => {
//     cy.log("number of footer title to validate: " + dataTable.hashes().length);
//     homePage.footerColumnLinks(dataTable, paymentoptionsfooter);
//   }
// );

// // Click on the links
// When("I click on the {string} link in the PAYMENT OPTIONS column", (link) => {
//   homePage.clickLink(link, paymentoptionsfooter);
// });

// // Verify the response 200
// Then(
//   "I should be navigated to the {string} page and status code should be 200",
//   (currenturl) => {
//     homePage.urlRedirection(currenturl);
//   }
// );

// // Verify 4th column Title
// Then("I should see the {string} in column four in the footer", (String) => {
//   homePage.howwegive(String);
// });

// // Verify the links in the list
// And("The HOW WE GIVE column should have the following links:", (dataTable) => {
//   cy.log("number of footer title to validate: " + dataTable.hashes().length);
//   homePage.footerColumnLinks(dataTable, howwegivefooter);
// });

// // Click on the links
// When("I click on the {string} link in the HOW WE GIVE column", (link) => {
//   homePage.clickLink(link, howwegivefooter);
// });

// // Verify the response 200
// Then(
//   "I should be navigated to the {string} page and status code should be 200",
//   (currenturl) => {
//     homePage.urlRedirection(currenturl);
//   }
// );

// // Verify 5th column Title
// Then("I should see the {string} in column five in the footer", (String) => {
//   homePage.about(String);
// });

// // Verify the links in the list
// And("The ABOUT column should have the following links:", (dataTable) => {
//   cy.log("number of footer title to validate: " + dataTable.hashes().length);
//   homePage.footerColumnLinks(dataTable, aboutfooter);
// });

// // Click on the links
// When("I click on the {string} link in the ABOUT column", (link) => {
//   homePage.clickLink(link, aboutfooter);
// });

// // Verify the response 200
// Then(
//   "I should be navigated to the {string} page and status code should be 200",
//   (currenturl) => {
//     homePage.urlRedirection(currenturl);
//   }
// );

// // Verify the legal links in the footer
// Then("I should see the following legal texts", (dataTable) => {
//   homePage.footerLegalLinks(dataTable, legalfooter);
// });

// And("I click on the {string} link in the footer", (Text) => {
//   homePage.clickLegalLinks(Text, legalfooter);
// });

// // verify social media icons and links
// Then("I should see following social media icons", (dataTable) => {
//   homePage.socialMediaLinks(dataTable, socialMediaIcons);
// });

// And("I click on each social media icon {string}", (link) => {
//   homePage.clickSocialMediaIcons(link, socialMediaIcons);
// });

// Then(
//   "I should be redirected to the correct social media URL {string} for each icon",
//   (currenturl) => {
//     homePage.urlRedirection(currenturl);
//   }
// );

// // verify 1-800 smilegen link
// Then("I should see the {string} link", (smilegenLink) => {
//   homePage.smilegenlink(smilegenLink, smilegenlinkFooter);
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

// // verify smilegen header logo
// When("I click on the SmileGen logo", () => {
//   homePage.smilegenLogoHeader(smilegenlogoHeader);
// });

// Then("I should be navigated to the homepage in the same tab", () => {
//   homePage.smilegenLogoHeaderNav();
// });

// // verify header navigation
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

// // verify find a dentist CTA in smilegen header
// Then("I should see the {string} button", (String) => {
//   homePage.findDentistbttn(String);
// });

// And("the color of the button should be correct", () => {
//   homePage.dentistnttnColor();
// });

// When("I click on the {string} button", (String) => {
//   homePage.clickDentistbttn(String);
// });

// Then(
//   "I should be navigated to the specific page in the same tab",
//   (dataTable) => {
//     homePage.redirectionDentistbttn(dataTable);
//   }
// );

// And("the HTTP response status code should be 200", () => {
//   homePage.dentisturlRedirection();
// });

// // verify smilegen header search icon
// Then("I should see the search icon in header", () => {
//   homePage.searchIconHeader();
// });

// When(
//   "I scroll down the page {string} a little then header should become sticky",
//   (url) => {
//     homePage.homepageNavigation(url);
//     homePage.scrollbyPixel400();
//     homePage.navbarSticky();
//   }
// );

// And(
//   "I scroll down the page a little more then header should reamin sticky",
//   () => {
//     homePage.scrollbyPixel700();
//     homePage.navbarSticky();
//   }
// );

// When("I scroll down the page {string} and then scroll back up", (url) => {
//   homePage.homepageNavigation(url);
//   homePage.scrolltoTop();
// });

// Then("The header should return to its normal state", () => {
//   homePage.navbarnotSticky();
// });

// And(
//   "I click on the {string} navigation to see all the links and flyer is open",
//   (string) => {
//     homePage.secondayBar(string);
//   }
// );

// Then(
//   "I should see two columns inside the flyer: {string} and {string}",
//   (string1, string2) => {
//     homePage.secondayBarOptions(string1, string2);
//   }
// );

// Then(
//   "I should see the following categories in the CATEGORIES column:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, mouthBodyCategories);
//   }
// );

// Then(
//   "I should see the following resources in the RESOURCES column:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, mouthBodyResources);
//   }
// );

// And(
//   "Status code should be 200 of all the links under CATEGORIES and RESOURCES column",
//   () => {
//     homePage.urlResponse(mouthBodyResponse);
//   }
// );

// Then(
//   "I should see the following services in the POPULAR SERVICES column:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, dentalServices);
//   }
// );

// Then(
//   "I should see the following concerns in the COMMON CONCERNS column:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, dentalConcerns);
//   }
// );

// And(
//   "Status code should be 200 of all the links under POPULAR SERVICES and COMMON CONCERNS column",
//   () => {
//     homePage.urlResponse(dentalResponse);
//   }
// );

// Then(
//   "I should see the following services in the Payment Options flyer:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, paymentOptions);
//   }
// );

// And(
//   "Status code should be 200 of all the links under Payment Options flyer",
//   () => {
//     homePage.urlResponse(paymentResponse);
//   }
// );

// Then(
//   "I should see the following partners in the NATIONAL PARTNERS column:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, giveNational);
//   }
// );

// Then(
//   "I should see the following programs in the PROGRAMS column:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, givePrograms);
//   }
// );

// And(
//   "Status code should be 200 of all the links under NATIONAL PARTNERS and PROGRAMS column",
//   () => {
//     homePage.urlResponse(howwegiveResponse);
//   }
// );

// Then("Verify the paragraph and font family", () => {
//   homePage.footerParagraph();
// });

// And("Background colour of header is transparent", () => {
//   homePage.transparentCllr();
// });

// And("Clicking button navigates to 200 response page", () => {
//   homePage.urlResponse(downloadFreeBook);
// });

// Then("That button is secondary category with boundary", () => {
//   homePage.bttnBorder(downloadFreeBook);
// });

// And("The phone number attribute {string}", (hrefValue) => {
//   homePage.smilegenlinkhref(smilegenHeader, hrefValue);
// });

// Then("verify the header nav items colour is white", () => {
//   homePage.menuColours();
// });

// And("verify header is Poppins font with size", () => {
//   homePage.menuFontSize(secondarynavBar);
// });

// Then("Images should be present on mouth body connection menu", () => {
//   homePage.mouthBodyImages(mouthbodyImageone, mouthbodyImagetwo);
// });

// And(
//   "Verify the presence of description text on mouth body connection menu",
//   () => {
//     homePage.mouthBodyDescription(mouthbodyDescOne, mouthbodyDescTwo);
//   }
// );

// And("Verify the CTA links present on mouth body connection menu", () => {
//   homePage.mouthBodyButton(mouthbodyBttnOne, mouthbodyBttnTwo, mouthbodyBttnThree);
// });

// And(
//   "Clicking on CTA redirected to 200 page on mouth body connection menu",
//   () => {
//     homePage.urlResponse(mouthbodyBttnOne);
//     homePage.urlResponse(mouthbodyBttnTwo);
//     homePage.urlResponse(mouthbodyBttnThree);
//   }
// );

// Then("Images should be present on dental services menu", () => {
//   homePage.dentalservicesImages(dentalservicesImage);
// });

// And("Verify the presence of description text on dental services menu", () => {
//   homePage.dentalservicesDescription(dentalservicesDesc);
// });

// And("Verify the CTA links present on dental services menu", () => {
//   homePage.dentalservicesButton(dentalservicesBttnOne, dentalservicesBttnTwo);
// });

// And("Clicking on CTA redirected to 200 page on dental services menu", () => {
//   homePage.urlResponse(dentalservicesBttnOne, dentalservicesBttnTwo);
// });

// Then("Images should be present on payment options menu", () => {
//   homePage.paymentOptionsImages(paymentOptionsImageOne, paymentOptionsImageTwo);
// });

// And("Verify the presence of description text on payment options menu", () => {
//   homePage.paymentOptionsDescription(paymentOptionsDescOne, paymentOptionsDescTwo);
// });

// And("Verify the CTA links present on payment options menu", () => {
//   homePage.paymentOptionsButton(paymentOptionsBttnOne, paymentOptionsBttnTwo, paymentOptionsBttnThree);
// });

// And("Clicking on CTA redirected to 200 page on payment options menu", () => {
//   homePage.urlResponse(paymentOptionsBttnOne);
//   homePage.urlResponse(paymentOptionsBttnTwo);
//   homePage.urlResponse(paymentOptionsBttnThree);
// });

// Then("Images should be present on how we give menu", () => {
//   homePage.howwegiveImages(howwegiveImage);
// });

// And("Verify the presence of description text on how we give menu", () => {
//   homePage.howwegiveDescription(howwegiveDesc);
// });

// And("Verify the CTA links present on how we give menu", () => {
//   homePage.howwegiveButton(howwegiveBttnOne,howwegiveBttnTwo);
// });

// And("Clicking on CTA redirected to 200 page on how we give menu", () => {
//   homePage.urlResponse(howwegiveBttnOne);
//   homePage.urlResponse(howwegiveBttnTwo);
// });

// Then("verify the header nav items colour is black", () => {
//   homePage.darkTextNavBar();
// });

// And("verify header is in Poppins font with size", () => {
//   homePage.menuFontSize(secondarynavBar);
// });

// Then("That button is primary category", () => {
//   homePage.darkTextBttn();
// });

// Then(
//   "I should see the following categories in the CATEGORIES column for Dark Text variation:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, mouthBodyCategoriesDark);
//   }
// );

// Then(
//   "I should see the following resources in the RESOURCES column for Dark Text variation:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, mouthBodyResourcesDark);
//   }
// );

// Then(
//   "I should see the following services in the POPULAR SERVICES column for Dark Text variation:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, dentalServicesDark);
//   }
// );

// Then(
//   "I should see the following concerns in the COMMON CONCERNS column for Dark Text variation:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, dentalConcernsDark);
//   }
// );

// Then(
//   "I should see the following services in the Payment Options flyer for Dark Text variation:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, paymentOptionsDark);
//   }
// );

// Then(
//   "I should see the following partners in the NATIONAL PARTNERS column for Dark Text variation:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, giveNationalDark);
//   }
// );

// Then(
//   "I should see the following programs in the PROGRAMS column for Dark Text variation:",
//   (dataTable) => {
//     homePage.getLinks(dataTable, giveProgramsDark);
//   }
// );

// And(
//   "Status code should be 200 of all the links under CATEGORIES and RESOURCES column for Dark Text variation",
//   () => {
//     homePage.urlResponse(mouthBodyResponseDark);
//   }
// );

// And(
//   "Status code should be 200 of all the links under POPULAR SERVICES and COMMON CONCERNS column for Dark Text variation",
//   () => {
//     homePage.urlResponse(dentalResponseDark);
//   }
// );

// And(
//   "Status code should be 200 of all the links under Payment Options flyer for Dark Text variation",
//   () => {
//     homePage.urlResponse(paymentResponseDark);
//   }
// );

// And(
//   "Status code should be 200 of all the links under NATIONAL PARTNERS and PROGRAMS column for Dark Text variation",
//   () => {
//     homePage.urlResponse(howwegiveResponseDark);
//   }
// );


// Then("Images should be present on mouth body connection menu for Dark Text variation", () => {
//   homePage.mouthBodyImages(mouthbodyImageoneDark, mouthbodyImagetwoDark);
// });

// And(
//   "Verify the presence of description text on mouth body connection menu for Dark Text variation",
//   () => {
//     homePage.mouthBodyDescription(mouthbodyDescOneDark, mouthbodyDescTwoDark);
//   }
// );

// And("Verify the CTA links present on mouth body connection menu for Dark Text variation", () => {
//   homePage.mouthBodyButton(mouthbodyBttnOneDark, mouthbodyBttnTwoDark, mouthbodyBttnThreeDark);
// });

// And(
//   "Clicking on CTA redirected to 200 page on mouth body connection menu for Dark Text variation",
//   () => {
//     homePage.urlResponse(mouthbodyBttnOneDark);
//     homePage.urlResponse(mouthbodyBttnTwoDark);
//     homePage.urlResponse(mouthbodyBttnThreeDark);
//   }
// );

// Then("Images should be present on dental services menu for Dark Text variation", () => {
//   homePage.dentalservicesImages(dentalservicesImageDark);
// });

// And(
//   "Verify the presence of description text on dental services menu for Dark Text variation",
//   () => {
//     homePage.dentalservicesDescription(dentalservicesDescDark);
//   }
// );

// And("Verify the CTA links present on dental services menu for Dark Text variation", () => {
//   homePage.dentalservicesButton(dentalservicesBttnOneDark, dentalservicesBttnTwoDark);
// });

// And(
//   "Clicking on CTA redirected to 200 page on dental services menu for Dark Text variation",
//   () => {
//     homePage.urlResponse(dentalservicesBttnOneDark);
//     homePage.urlResponse(dentalservicesBttnTwoDark);
//   }
// );

// Then("Images should be present on payment options menu for Dark Text variation", () => {
//   homePage.paymentOptionsImages(paymentOptionsImageOneDark, paymentOptionsImageTwoDark);
// });

// And("Verify the presence of description text on payment options menu for Dark Text variation", () => {
//   homePage.paymentOptionsDescription(paymentOptionsDescOneDark, paymentOptionsDescTwoDark);
// });

// And("Verify the CTA links present on payment options menu for Dark Text variation", () => {
//   homePage.paymentOptionsButton(paymentOptionsBttnOneDark, paymentOptionsBttnTwoDark, paymentOptionsBttnThreeDark);
// });

// And("Clicking on CTA redirected to 200 page on payment options menu for Dark Text variation", () => {
//   homePage.urlResponse(paymentOptionsBttnOneDark);
//   homePage.urlResponse(paymentOptionsBttnTwoDark);
//   homePage.urlResponse(paymentOptionsBttnThreeDark);
// });

// Then("Images should be present on how we give menu for Dark Text variation", () => {
//   homePage.howwegiveImages(howwegiveImageDark);
// });

// And("Verify the presence of description text on how we give menu for Dark Text variation", () => {
//   homePage.howwegiveDescription(howwegiveDescDark);
// });

// And("Verify the CTA links present on how we give menu for Dark Text variation", () => {
//   homePage.howwegiveButton(howwegiveBttnOneDark, howwegiveBttnTwoDark);
// });

// And("Clicking on CTA redirected to 200 page on how we give menu for Dark Text variation", () => {
//   homePage.urlResponse(howwegiveBttnOneDark);
//   homePage.urlResponse(howwegiveBttnTwoDark);
// });

// And("The background colour of header is white", () => {
//   homePage.solidNavBarColor();
// });

// And("Verify menu options in the nav bar", (dataTable) => {
//   homePage.solidNavBarOptions(dataTable);  
// });

// Then("the search icon should be present on primary Nav", () => {
//   homePage.searchPrimNav();
// });

// And("the user clicks on the dropdown", () => {
//   homePage.searchIconDropdown();
// });

// Then("the search dropdown should appear with {string}", (tags) => {
//   homePage.searchDropdownVisible(tags);
// });

// When(
//   "the user selects {string} and user performs a search {string} then URL should contain selected tag and searched text in URL",
//   (tags, string) => {
//     homePage.searchDropdownValue(tags, string);
//   }
// );

// // Title
// And(
//   "verify H1 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     homePage.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H2 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     homePage.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H3 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     homePage.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H4 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     homePage.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H5 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     homePage.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H6 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     homePage.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// // Button
// And(
//   "verify the primary buttton with font family, size, text color and background color",() => {
//     homePage.primaryBttnCSS();
//   }
// );

// And(
//   "verify the secondary button state dark with font family, size, text color and border",() => {
//     homePage.secondaryBttnDarkCSS();
//   }
// );

// And(
//   "verify the secondary button state white with font family, size, text color and border",() => {
//     homePage.secondaryBttnWhiteCSS();
//   }
// );

// And(
//   "verify the underline dark button with font family, size, text color and underline color",() => {
//     homePage.underlineBttnDarkCSS();
//   }
// );

// And(
//   "verify the underline white button with font family, size, text color and underline color",() => {
//     homePage.underlineBttnWhiteCSS();
//   }
// );
