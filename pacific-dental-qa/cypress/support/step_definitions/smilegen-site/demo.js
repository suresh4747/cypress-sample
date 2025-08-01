// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// const { Demo } = require("../../page/smilegen-site/demo");

// const demo = new Demo();
// // css locators
// var mouthbodyconnectionfooter = ".cmp-footer__column:nth-of-type(1)";
// var mouthbodyconnectionfooterLinks =
//   ".cmp-footer__column:nth-of-type(1) .list a";
// var detnalservicesfooterLinks = ".cmp-footer__column:nth-of-type(2) .list a";
// var paymentoptionsfooterLinks = ".cmp-footer__column:nth-of-type(3) .list a";
// var howwegivefooterLinks = ".cmp-footer__column:nth-of-type(4) .list a";
// var aboutfooterLinks = ".cmp-footer__column:nth-of-type(5) .list a";
// var legalfooter = ".cmp-footer__copyright--links .cmp-text";
// var legalFooterLinks = ".cmp-footer__copyright--links .cmp-text a";
// var socialMediaIcons = ".cmp-footer__copyright--social .image a";
// var smilegenlinkFooter = ".cmp-footer__copyright--social";
// var smilegenlinkHeader =
//   ".cmp-header__nav-actions [class*='cmp-button--link'] .cmp-button__text";
// var smilegenHeader =
//   ".cmp-header__nav-actions [class*='cmp-button--link'] .cmp-button";
// var smilegenHeaderHref =
//   ".cmp-header__nav-actions [class*='cmp-button--link'] a";
// var smilegenlogoHeader = ".cmp-image--normal .cmp-image__link";
// var mouthBodyCategories = ".cmp-header__product-items-column";
// var mouthBodyResources = ".cmp-header__product-items-column";
// var dentalServices = ".cmp-header__product-items-column";
// var dentalConcerns = ".cmp-header__product-items-column";
// var paymentOptions = ".cmp-header__product-items-column";
// var giveNational = ".cmp-header__product-items-column";
// var givePrograms = ".cmp-header__product-items-column";
// var downloadFreeBook = ".cmp-button--secondary .cmp-button";
// var paymentOptionsBttnOne = ".cmp-header__product-items-column .cmp-button";
// var paymentOptionsBttnTwo = ".cmp-header__product-items-column .cmp-button";
// var howwegiveBttnOne = ".cmp-header__product-items-column .cmp-button";
// var howwegiveBttnPrimaryBttn = ".cmp-button--primary .cmp-button";
// var secondarynavBar = ".cmp-navigation__item-link";
// var mouthbodyImageone = ".cmp-header__product-items-column .cmp-teaser__image";
// var mouthbodyDescOne =
//   ".cmp-header__product-items-column .cmp-teaser__description";
// var mouthbodyBttnOne = ".cmp-header__product-items-column .cmp-button";
// var mouthBodyPrimaryBttn = ".cmp-button--primary .cmp-button";
// var dentalservicesImage =
//   ".cmp-header__product-items-column .cmp-teaser__image";
// var dentalservicesDesc =
//   ".cmp-header__product-items-column .cmp-teaser__description";
// var dentalservicesBttnOne = ".cmp-header__product-items-column .cmp-button";
// var dentalservicesPrimaryBttn = ".cmp-button--primary .cmp-button";
// var paymentOptionsImageOne =
//   ".cmp-header__product-items-column .cmp-teaser__image";
// var paymentOptionsImageTwo =
//   ".cmp-header__product-items-column .cmp-teaser__image";
// var paymentOptionsDescOne =
//   ".cmp-header__product-items-column .cmp-teaser__description";
// var paymentOptionsDescTwo =
//   ".cmp-header__product-items-column .cmp-teaser__description";
// var paymentOptionsBttnOne = ".cmp-header__product-items-column .cmp-button";
// var paymentOptionsBttnTwo = ".cmp-header__product-items-column .cmp-button";
// var paymentOptionsPrimaryBttn = ".cmp-button--primary .cmp-button";
// var howwegiveImage = ".cmp-header__product-items-column .cmp-teaser__image";
// var howwegiveDesc =
//   ".cmp-header__product-items-column .cmp-teaser__description";
// var searchDropHeroBanner = ".searchbox .cmp-search__custom-dropdown select";
// var searchDropPrimNav = ".cmp-header__nav-links .cmp-search__custom-dropdown";
// var PrimNavsearchDrop =
//   ".cmp-header__nav-links .cmp-search__custom-dropdown select";
// var searchTextFieldPrimNav = ".cmp-header__nav-links .cmp-search__search-input";
// var searchTextFieldHeroBanner =
//   ".cmp-teaser .searchbox .cmp-search__search-input";
// var SearchIconPrimNav = ".cmp-header__nav-links .cmp-search__search-icon";
// var SearchIconHeroBanner = ".cmp-teaser .searchbox .cmp-search__search-icon";
// var titleText = ".cmp-teaser--text-only .cmp-teaser__title";
// var buttonLandingPage = ".cmp-teaser__content .cmp-button";
// var bgImagebannerTitle = ".cmp-teaser--bg-image .cmp-teaser__title";
// var tagCardTagsAnchor = ".cmp-teaser__tag-container .cmp-button";
// var leftimageBttn = ".half-width-cta.left_image .cmp-button";
// var rightimageBttn = ".aem-Grid--11 .half-width-cta:nth-child(1) .cmp-button";
// var staggeredmainBttn = ".staggered-container .cmp-button";
// var staggeredReviewcard = ".staggeredcard--with-reviews";
// var staggeredmainCardTiles = ".staggered-container .cmp-teaser__card-image";
// var secondDefaultCarousel =
//   ".swiper-pagination-clickable span:nth-child(2)[class*='active']";
// var thirdDefaultCarousel =
//   ".swiper-pagination-clickable span:nth-child(3)[class*='active']";
// var secondCarousel = ".swiper-pagination-clickable span:nth-child(2)";
// var thirdCarousel = ".swiper-pagination-clickable span:nth-child(3)";
// var firstQuoteTextParagrapgh =
//   ".swiper-wrapper div.swiper-slide:nth-child(1) .cmp-text p";
// var secondQuoteTextParagrapgh =
//   ".swiper-wrapper div.swiper-slide:nth-child(2) .cmp-text p";
// var thirdQuoteTextParagrapgh =
//   ".swiper-wrapper div.swiper-slide:nth-child(3) .cmp-text p";
// var firstQuoteText =
//   ".swiper-wrapper div.swiper-slide:nth-child(1) .cmp-text p span";
// var secondQuoteText =
//   ".swiper-wrapper div.swiper-slide:nth-child(2) .cmp-text p span span";
// var thirdQuoteText =
//   ".swiper-wrapper div.swiper-slide:nth-child(3) .cmp-text p span span";
// var quoteComponentTextParagrapgh = ".quote-carousel .cmp-text p";
// // var quoteComponentTextFont = ".quote-carousel .cmp-text p span";
// var quoteComponentTextFont = ".quote-carousel .cmp-text p span span";
// var blogAuthorName =
//   ".cmp-bloghero__description .cmp-bloghero__author .cmp-bloghero__author-link";
// var blogReviewerName =
//   ".cmp-bloghero__description .cmp-bloghero__review .cmp-bloghero__review-link";
// var featuredBttn = ".featured-post a.cmp-button";
// var curatedTitle = ".featured-post .list-item .list-item__title a";
// var featuredTitle = ".featured-post .list-item .list-item__title a";
// var threeCardTitle =
//   ".threecolumn .cmp-dynamiclisting__list .list-item__title a";
// var threeCardBttnViewAll = ".threecolumn .cmp-button__text";
// var threeCardBttnViewAllLink = ".threecolumn .cmp-button";
// var threeCardListing = ".threecolumn div[id*='id-'] .list-item";
// var threeCardTitle =
//   ".threecolumn .cmp-dynamiclisting__list .list-item__title h3";
// var threeCardTitleLink =
//   ".threecolumn .cmp-dynamiclisting__list .list-item__title a";
// var threeCardDesc =
//   ".threecolumn .cmp-dynamiclisting__list .list-item__description";
// var threeCardImage = ".threecolumn .cmp-dynamiclisting__list .list-item__img";
// var fourCardBttnViewAll = ".fourcolumn .cmp-button__text";
// var fourCardBttnViewAllLink = ".fourcolumn .cmp-button";
// var fourCardListing = ".fourcolumn .list-item";
// var fourCardTitle =
//   ".fourcolumn .cmp-dynamiclisting__list .list-item__title h3";
// var fourCardTitleLink =
//   ".fourcolumn .cmp-dynamiclisting__list .list-item__title a";
// var fourCardDesc =
//   ".fourcolumn .cmp-dynamiclisting__list .list-item__description";
// var fourCardImage = ".fourcolumn .cmp-dynamiclisting__list .list-item__img";
// var threeCarouselBttnViewAll =
//   ".cmp-dynamiclisting__carousel_head .cmp-button__text";
// var threeCarouselBttnViewAllLink =
//   ".cmp-dynamiclisting__carousel_head .cmp-button";
// var threeCarouselTitle =
//   ".dynamiclisting-carousel .swiper-slide .list-item__title h3";
// var threeCarouselDesc =
//   ".dynamiclisting-carousel .swiper-slide .list-item__description";
// var threeCarouselImage =
//   ".dynamiclisting-carousel .swiper-slide .list-item__img";
// var threeCarouselTitleLink =
//   ".dynamiclisting-carousel .swiper-slide .list-item__title a";
// var commonConcerCardLink = ".common-concerns-carousel .cmp-teaser__link";
// var commonConcernCardTitle = ".common-concerns-carousel .cmp-teaser__title";
// var commonConcern4Title = ".fourcolumn.cc-card .cmp-teaser__title";
// var commonConcern4CardLink = ".fourcolumn.cc-card .cmp-teaser__link";
// var commonConcern4Title = ".fourcolumn.cc-card .cmp-teaser__title";
// var commonConcern4Image = ".fourcolumn.cc-card .cmp-teaser__card-image";
// var commonConcern3Title = ".threecolumn.cc-card .cmp-teaser__title";
// var commonConcern3Image = ".threecolumn.cc-card .cmp-teaser__card-image";
// var commonConcern3CardLink = ".threecolumn.cc-card .cmp-teaser__link";
// var factCardTitleComponent = ".cmp-dynamiclisting__carousel_head p .title-3 span";
// var factCardDescComponent = ".dynamiclisting-wrapper .list-item__description";
// var factCardTitleLink =
//   ".dynamiclisting-carousel .swiper-slide .list-item__title a:nth-child(1)";
// var factCardTitleText =
//   ".dynamiclisting-carousel .swiper-slide .list-item__title h3:nth-child(1)";
// var factCardTitleDesc =
//   ".dynamiclisting-carousel .swiper-slide .list-item__description:nth-child(3)";
// var factCardComponent = ".dynamiclisting-carousel .swiper-slide:nth-child(2)";
// var factCardDesc =
//   ".dynamiclisting-carousel .swiper-slide .list-item__title:nth-child(1)";
// var factCardAuthor =
//   ".dynamiclisting-carousel .swiper-slide .list-item__description:nth-child(2)";
// var magazineCarouselTiTle = ".magazine-carousel .cmp-teaser__pretitle";
// var magazineCarouselDesc = ".magazine-carousel .cmp-teaser__title p";
// var magazineCarouselImage = ".magazine-carousel .cmp-teaser__card-image";
// var magazineCarousel2Column = ".twocolumn.magazine-card";
// var magazineCarouselLink = ".magazine-carousel .cmp-teaser__link";
// var magazineCarousel2ColumnTitle =
//   ".twocolumn.magazine-card .cmp-teaser__pretitle";
// var magazineCarousel2ColumnDesc = ".twocolumn.magazine-card .cmp-teaser__title";
// var magazineCarousel2ColumnImage =
//   ".twocolumn.magazine-card .cmp-teaser__card-image";
// var magazineCarousel2ColumnLink = ".twocolumn.magazine-card .cmp-teaser__link";
// var magazineCarousel4Column = ".fourcolumn.magazine-card";
// var magazineCarousel4ColumnLink = ".fourcolumn.magazine-card .cmp-teaser__link";
// var magazineCarousel4ColumnTitle =
//   ".fourcolumn.magazine-card .cmp-teaser__pretitle";
// var magazineCarousel4ColumnDesc =
//   ".fourcolumn.magazine-card .cmp-teaser__title";
// var magazineCarousel4ColumnImage =
//   ".fourcolumn.magazine-card .cmp-teaser__card-image";
// var OfficeSchedulerTitle = ".cmp-newsletter--content h5.cmp-title__text";
// var OfficeSchedulerSubtitle = ".cmp-newsletter--content h2.cmp-title__text";
// var OfficeSchedulerDesc = ".cmp-newsletter--content .cmp-text p";
// var OfficeSchedulerBttnText = ".cmp-newsletter--content .cmp-button__text";
// var OfficeSchedulerBttn = ".cmp-newsletter--content .cmp-button";
// var OfficeSchedulerTitle = ".cmp-newsletter--content h5.cmp-title__text";
// var OfficeSchedulerSubtitle = ".cmp-newsletter--content h2.cmp-title__text";
// var OfficeSchedulerDesc = ".cmp-newsletter--content .cmp-text p";
// var OfficeSchedulerBttnText = ".cmp-newsletter--content .cmp-button__text";
// var OfficeSchedulerBttn = ".cmp-newsletter--content .cmp-button";
// var officeProfileImage = ".cmp-officehero .cmp-image";
// var officeProfilePreTitle =
//   ".cmp-officehero .cmp-bloghero__pretitle h5.cmp-title__text";
// var officeProfileTitle = ".cmp-bloghero .cmp-bloghero__title .cmp-title__text";
// var officeProfileStatus =
//   ".cmp-officehero .cmp-bloghero__status .cmp-title__text";
// var officeProfileButtonText =
//   ".cmp-officehero .cmp-bloghero__book-cta .cmp-button__text";
// var officeProfileBttn = ".cmp-officehero .cmp-bloghero__book-cta .cmp-button";
// var officeProfileSecBttnsText =
//   ".cmp-officehero .cmp-bloghero__btom-cta .cmp-button__text";
// var officeProfileSecBttns =
//   ".cmp-officehero .cmp-bloghero__btom-cta .cmp-button";
// var providerProfile = ".cmp-profilehero";
// var providerProfileImage = ".cmp-profilehero .cmp-image";
// var informationproviderProfileTitle =
//   ".profile-info .cmp-profile__title .cmp-title__text";
// var providerProfileSubTitle = ".cmp-profilehero h4.cmp-title__text";
// var providerProfileBttn =
//   ".cmp-profilehero .cmp-bloghero__book-cta .cmp-button";
// var providerProfileButtonText =
//   ".cmp-profilehero .cmp-bloghero__book-cta .cmp-button__text";
// var FAQTabs = ".cmp-tabs__tablist";
// var FAQTabsActiveCategories = ".cmp-tabs__tablist .cmp-tabs__tab--active";
// var FAQTabsDescription = ".cmp-tabs__tabpanel--active .cmp-text p";
// var FAQTabsTitle = ".cmp-tabs__tabpanel--active .cmp-title__text";
// var FAQTabsSecBttns = ".cmp-tabs__tabpanel--active .cmp-button__text";
// var FAQTabsSecBttnsLinks = ".cmp-tabs__tabpanel--active .cmp-button";
// var schedulelist = ".schedule";
// var insuranceinformation = ".checkmark-list";
// var businessdaystimings = ".cmp-schedule .cmp-overview-listing__content li";
// var insurancelist = ".cmp-list__items li";
// var officeProviderPhNum =
//   ".cmp-location__info .cmp-location__info-contactInfo p";
// var officeProviderAddress = ".cmp-location__info .cmp-location__info-address p";
// var officeProviderMap = ".cmp-location__map";
// var officeProviderBttnText =
//   ".cmp-location__info .cmp-button .cmp-button__text";
// var officeProviderBttns = ".cmp-location__info .cmp-button";
// var officeProviderButtonText = ".cmp-location__info .cmp-button__text";
// var officeProviderLang = ".list .cmp-officelisting__items li";
// var officeProviderExtraText = ".cmp-location__info-landmark";
// var officeProfiledentalServices = ".dental-services";
// var officeProfilebuttonLinks = ".dental-services .cmp-button--link a";
// var officeProfileBttnTextUnderline = ".dental-services .cmp-button--link a";
// var providerProfileTab = ".cmp-tabs__tablist .cmp-tabs__tab--active";
// var InfoproviderProfileTitle =
//   ".cmp-bloghero .cmp-bloghero__title h2.cmp-title__text";
// var officeProfileTeam = ".staff-listing";
// var officeProfileTeamCardBttnUnderline = ".staff-listing a";
// var officeProfileTeamCardsLinks = ".staff-listing a";
// var blogListingComponent = ".cmp-bloglisting";
// var blogListingImage = ".cmp-bloglisting__list .list-item .list-item__img";
// var blogListingTitle = ".cmp-bloglisting__list .list-item .list-item__title";
// var blogListingDesc =
//   ".cmp-bloglisting__list .list-item .list-item__description";
// var blogListingFactCardTitle =
//   ".cmp-bloglisting__list .fact-card .list-item__title";
// var blogListingCardTitle =
//   ".cmp-bloglisting__list .list-item:not(div[class*='fact-card']) .list-item__title h3";
// var mapComponentDropdown = "#stateDropdown option";
// var mapComponentsDetails = ".cmp_interactiveMap__details";
// var mapComponentsDetailsText = ".cmp_interactiveMap__details .list-item";
// var mapComponentsDetailsURL = ".cmp_interactiveMap__details .list-item a";
// var myChartTitleTextCSS = ".cmp-teaser--chart-portal h1.cmp-teaser__title";
// var myChartSignInBoxCSS = ".cmp-teaser--chart-portal .embed";
// var mapComponentTitle = ".cmp-interactivemap__title h3.cmp-title__text";
// var mapComponentDesc = ".cmp-interactivemap__description p";

// // navigate to page url
// Given("I am on the smilegen homepage", () => {
//   demo.homepagewebsite();
// });

// When("I navigate to the {string}", (url) => {
//   demo.webPageNavigation(url);
// });

// // verify smilegen header logo
// When("I click on the smilegen logo", () => {
//   demo.smilegenLogoHeader(smilegenlogoHeader);
// });

// Then("I should be navigated to the homepage in the same tab", () => {
//   demo.smilegenLogoHeaderNav();
// });

// // verify header navigation
// Then("I should see the {string} link in header", (String) => {
//   demo.smilegenlink(String, smilegenlinkHeader);
// });

// And(
//   "the link in header should have a valid href attribute {string}",
//   (hrefValue) => {
//     demo.smilegenhrefHeader(smilegenHeaderHref, hrefValue);
//   }
// );

// And(
//   "the link in header should have the target attribute set to {string}",
//   (targetValue) => {
//     demo.smilegenTargetHeader(smilegenHeaderHref, targetValue);
//   }
// );

// // verify find a dentist CTA in smilegen header
// Then("I should see the {string} button", (String) => {
//   demo.findDentistbttn(String);
// });

// And("the color of the button should be correct", () => {
//   demo.dentistnttnColor();
// });

// When("I click on the {string} button", (String) => {
//   demo.clickDentistbttn(String);
// });

// Then(
//   "I should be navigated to the specific page in the same tab",
//   (dataTable) => {
//     demo.redirectionDentistbttn(dataTable);
//   }
// );

// And("the HTTP response status code should be 200", () => {
//   demo.dentisturlRedirection();
// });

// // verify smilegen header search icon
// Then("I should see the search icon in header", () => {
//   demo.searchIconHeader();
// });

// When(
//   "I scroll down the page {string} a little then header should become sticky",
//   (url) => {
//     demo.webPageNavigation(url);
//     demo.scrollbyPixel400();
//     demo.navbarSticky();
//   }
// );

// And(
//   "I scroll down the page a little more then header should reamin sticky",
//   () => {
//     demo.scrollbyPixel700();
//     demo.navbarSticky();
//   }
// );

// When("I scroll down the page {string} and then scroll back up", (url) => {
//   demo.webPageNavigation(url);
//   demo.scrolltoTop();
// });

// Then("The header should return to its normal state", () => {
//   demo.navbarnotSticky();
// });

// And(
//   "I click on the {string} navigation to see all the links and flyer is open",
//   (string) => {
//     demo.secondayBar(string);
//   }
// );

// Then(
//   "I should see two columns inside the flyer: {string} and {string}",
//   (string1, string2) => {
//     demo.secondayBarOptions(string1, string2);
//   }
// );

// // Then(
// //   "I should see the following categories in the CATEGORIES column:",
// //   (dataTable) => {
// //     demo.getLinks(dataTable, mouthBodyCategories, 0);
// //   }
// // );

// // Then(
// //   "I should see the following resources in the RESOURCES column:",
// //   (dataTable) => {
// //     demo.getLinks(dataTable, mouthBodyResources, 1);
// //   }
// // );

// And(
//   "Status code should be 200 of all the links under CATEGORIES and RESOURCES column",
//   () => {
//     demo.urlResponse(mouthBodyCategories, 0);
//     demo.urlResponse(mouthBodyResources, 1);
//   }
// );

// Then(
//   "I should see the following services in the POPULAR SERVICES column:",
//   (dataTable) => {
//     demo.getLinks(dataTable, dentalServices, 4);
//   }
// );

// Then(
//   "I should see the following concerns in the COMMON CONCERNS column:",
//   (dataTable) => {
//     demo.getLinks(dataTable, dentalConcerns, 5);
//   }
// );

// And(
//   "Status code should be 200 of all the links under POPULAR SERVICES and COMMON CONCERNS column",
//   () => {
//     demo.urlResponse(dentalServices, 4);
//     demo.urlResponse(dentalConcerns, 5);
//   }
// );

// Then(
//   "I should see the following services in the Payment Options flyer:",
//   (dataTable) => {
//     demo.getLinks(dataTable, paymentOptions, 7);
//   }
// );

// And(
//   "Status code should be 200 of all the links under Payment Options flyer",
//   () => {
//     demo.urlResponse(paymentOptions, 7);
//   }
// );

// Then(
//   "I should see the following partners in the NATIONAL PARTNERS column:",
//   (dataTable) => {
//     demo.getLinks(dataTable, giveNational, 10);
//   }
// );

// Then(
//   "I should see the following programs in the PROGRAMS column:",
//   (dataTable) => {
//     demo.getLinks(dataTable, givePrograms, 11);
//   }
// );

// And(
//   "Status code should be 200 of all the links under NATIONAL PARTNERS and PROGRAMS column",
//   () => {
//     demo.urlResponse(giveNational, 10);
//     demo.urlResponse(givePrograms, 11);
//   }
// );

// Then("Verify the paragraph and font family", () => {
//   demo.footerParagraph();
// });

// And("Background colour of header is transparent", () => {
//   demo.transparentCllr();
// });

// Then("Clicking on the button opens modal popup", () => {
//   demo.bttnModalPopup(downloadFreeBook);
// });

// Then("That button is secondary category with boundary", () => {
//   demo.bttnBorder(downloadFreeBook);
// });

// And("The phone number attribute {string}", (hrefValue) => {
//   demo.smilegenlinkhref(smilegenHeader, hrefValue);
// });

// Then("verify the header nav items colour is white", () => {
//   demo.menuColours();
// });

// And("verify header is Poppins font with size", () => {
//   demo.menuFontSize(secondarynavBar);
// });

// Then("Images should be present on mouth body connection menu", () => {
//   demo.mouthBodyImages(mouthbodyImageone, 0, 1);
// });

// And(
//   "Verify the presence of description text on mouth body connection menu",
//   () => {
//     demo.mouthBodyDescription(mouthbodyDescOne, 0, 1);
//   }
// );

// And("Verify the CTA links present on mouth body connection menu", () => {
//   demo.mouthBodyButton(mouthbodyBttnOne, mouthBodyPrimaryBttn, 0, 1, 0);
// });

// And(
//   "Clicking on CTA redirected to 200 page on mouth body connection menu",
//   () => {
//     demo.BttnResponse200(mouthBodyPrimaryBttn, 0);
//     demo.BttnResponse200(mouthbodyBttnOne, 0);
//     demo.BttnResponse200(mouthbodyBttnOne, 1);
//   }
// );

// Then("Images should be present on dental services menu", () => {
//   demo.dentalservicesImages(dentalservicesImage, 2);
// });

// And("Verify the presence of description text on dental services menu", () => {
//   demo.dentalservicesDescription(dentalservicesDesc, 2);
// });

// And("Verify the CTA links present on dental services menu", () => {
//   demo.dentalservicesButton(
//     dentalservicesBttnOne,
//     dentalservicesPrimaryBttn,
//     2,
//     1
//   );
// });

// And("Clicking on CTA redirected to 200 page on dental services menu", () => {
//   demo.BttnResponse200(dentalservicesPrimaryBttn, 1);
//   demo.BttnResponse200(dentalservicesBttnOne, 2);
// });

// Then("Images should be present on payment options menu", () => {
//   demo.paymentOptionsImages(
//     paymentOptionsImageOne,
//     paymentOptionsImageTwo,
//     3,
//     4
//   );
// });

// And("Verify the presence of description text on payment options menu", () => {
//   demo.paymentOptionsDescription(
//     paymentOptionsDescOne,
//     paymentOptionsDescTwo,
//     3,
//     4
//   );
// });

// And("Verify the CTA links present on payment options menu", () => {
//   demo.paymentOptionsButton(
//     paymentOptionsBttnOne,
//     paymentOptionsBttnTwo,
//     paymentOptionsPrimaryBttn,
//     3,
//     4,
//     2
//   );
// });

// And("Clicking on CTA redirected to 200 page on payment options menu", () => {
//   demo.BttnResponse200(paymentOptionsBttnOne, 3);
//   demo.BttnResponse200(paymentOptionsBttnTwo, 4);
//   demo.BttnResponse200(paymentOptionsPrimaryBttn, 2);
// });

// Then("Images should be present on how we give menu", () => {
//   demo.howwegiveImages(howwegiveImage, 5);
// });

// And("Verify the presence of description text on how we give menu", () => {
//   demo.howwegiveDescription(howwegiveDesc, 5);
// });

// And("Verify the CTA links present on how we give menu", () => {
//   demo.howwegiveButton(howwegiveBttnOne, howwegiveBttnPrimaryBttn, 5, 3);
// });

// And("Clicking on CTA redirected to 200 page on how we give menu", () => {
//   demo.BttnResponse200(howwegiveBttnOne, 5);
//   demo.BttnResponse200(howwegiveBttnPrimaryBttn, 3);
// });

// Then("verify the header nav items colour is black", () => {
//   demo.darkTextNavBar();
// });

// And("verify header is in Poppins font with size", () => {
//   demo.menuFontSize(secondarynavBar);
// });

// Then("That button is primary category", () => {
//   demo.darkTextBttn();
// });

// Then(
//   "I should see the following categories in the CATEGORIES column for Dark Text variation:",
//   (dataTable) => {
//     demo.getLinks(dataTable, mouthBodyCategories, 0);
//   }
// );

// Then(
//   "I should see the following resources in the RESOURCES column for Dark Text variation:",
//   (dataTable) => {
//     demo.getLinks(dataTable, mouthBodyResources, 1);
//   }
// );

// Then(
//   "I should see the following services in the POPULAR SERVICES column for Dark Text variation:",
//   (dataTable) => {
//     demo.getLinks(dataTable, dentalServices, 4);
//   }
// );

// Then(
//   "I should see the following concerns in the COMMON CONCERNS column for Dark Text variation:",
//   (dataTable) => {
//     demo.getLinks(dataTable, dentalConcerns, 5);
//   }
// );

// Then(
//   "I should see the following services in the Payment Options flyer for Dark Text variation:",
//   (dataTable) => {
//     demo.getLinks(dataTable, paymentOptions, 7);
//   }
// );

// Then(
//   "I should see the following partners in the NATIONAL PARTNERS column for Dark Text variation:",
//   (dataTable) => {
//     demo.getLinks(dataTable, giveNational, 10);
//   }
// );

// Then(
//   "I should see the following programs in the PROGRAMS column for Dark Text variation:",
//   (dataTable) => {
//     demo.getLinks(dataTable, givePrograms, 11);
//   }
// );

// And(
//   "Status code should be 200 of all the links under CATEGORIES and RESOURCES column for Dark Text variation",
//   () => {
//     demo.urlResponse(mouthBodyCategories, 0);
//     demo.urlResponse(mouthBodyResources, 1);
//   }
// );

// And(
//   "Status code should be 200 of all the links under POPULAR SERVICES and COMMON CONCERNS column for Dark Text variation",
//   () => {
//     demo.urlResponse(dentalServices, 4);
//     demo.urlResponse(dentalConcerns, 5);
//   }
// );

// And(
//   "Status code should be 200 of all the links under Payment Options flyer for Dark Text variation",
//   () => {
//     demo.urlResponse(paymentOptions, 7);
//   }
// );

// And(
//   "Status code should be 200 of all the links under NATIONAL PARTNERS and PROGRAMS column for Dark Text variation",
//   () => {
//     demo.urlResponse(giveNational, 10);
//     demo.urlResponse(givePrograms, 11);
//   }
// );

// Then(
//   "Images should be present on mouth body connection menu for Dark Text variation",
//   () => {
//     demo.mouthBodyImages(mouthbodyImageone, 0, 1);
//   }
// );

// And(
//   "Verify the presence of description text on mouth body connection menu for Dark Text variation",
//   () => {
//     demo.mouthBodyDescription(mouthbodyDescOne, 0, 1);
//   }
// );

// And(
//   "Verify the CTA links present on mouth body connection menu for Dark Text variation",
//   () => {
//     demo.mouthBodyButton(mouthbodyBttnOne, mouthBodyPrimaryBttn, 0, 1, 0);
//   }
// );

// And(
//   "Clicking on CTA redirected to 200 page on mouth body connection menu for Dark Text variation",
//   () => {
//     demo.BttnResponse200(mouthBodyPrimaryBttn, 0);
//     demo.BttnResponse200(mouthbodyBttnOne, 0);
//     demo.BttnResponse200(mouthbodyBttnOne, 1);
//   }
// );

// Then(
//   "Images should be present on dental services menu for Dark Text variation",
//   () => {
//     demo.dentalservicesImages(dentalservicesImage, 2);
//   }
// );

// And(
//   "Verify the presence of description text on dental services menu for Dark Text variation",
//   () => {
//     demo.dentalservicesDescription(dentalservicesDesc, 2);
//   }
// );

// And(
//   "Verify the CTA links present on dental services menu for Dark Text variation",
//   () => {
//     demo.dentalservicesButton(
//       dentalservicesBttnOne,
//       dentalservicesPrimaryBttn,
//       2,
//       1
//     );
//   }
// );

// And(
//   "Clicking on CTA redirected to 200 page on dental services menu for Dark Text variation",
//   () => {
//     demo.BttnResponse200(dentalservicesPrimaryBttn, 1);
//     demo.BttnResponse200(dentalservicesBttnOne, 2);
//   }
// );

// Then(
//   "Images should be present on payment options menu for Dark Text variation",
//   () => {
//     demo.paymentOptionsImages(
//       paymentOptionsImageOne,
//       paymentOptionsImageTwo,
//       3,
//       4
//     );
//   }
// );

// And(
//   "Verify the presence of description text on payment options menu for Dark Text variation",
//   () => {
//     demo.paymentOptionsDescription(
//       paymentOptionsDescOne,
//       paymentOptionsDescTwo,
//       3,
//       4
//     );
//   }
// );

// And(
//   "Verify the CTA links present on payment options menu for Dark Text variation",
//   () => {
//     demo.paymentOptionsButton(
//       paymentOptionsBttnOne,
//       paymentOptionsBttnTwo,
//       paymentOptionsPrimaryBttn,
//       3,
//       4,
//       2
//     );
//   }
// );

// And(
//   "Clicking on CTA redirected to 200 page on payment options menu for Dark Text variation",
//   () => {
//     demo.BttnResponse200(paymentOptionsBttnOne, 3);
//     demo.BttnResponse200(paymentOptionsBttnTwo, 4);
//     demo.BttnResponse200(paymentOptionsPrimaryBttn, 2);
//   }
// );

// Then(
//   "Images should be present on how we give menu for Dark Text variation",
//   () => {
//     demo.howwegiveImages(howwegiveImage, 5);
//   }
// );

// And(
//   "Verify the presence of description text on how we give menu for Dark Text variation",
//   () => {
//     demo.howwegiveDescription(howwegiveDesc, 5);
//   }
// );

// And(
//   "Verify the CTA links present on how we give menu for Dark Text variation",
//   () => {
//     demo.howwegiveButton(howwegiveBttnOne, howwegiveBttnPrimaryBttn, 5, 3);
//   }
// );

// And(
//   "Clicking on CTA redirected to 200 page on how we give menu for Dark Text variation",
//   () => {
//     demo.BttnResponse200(howwegiveBttnOne, 5);
//     demo.BttnResponse200(howwegiveBttnPrimaryBttn, 3);
//   }
// );

// And("The background colour of header is white", () => {
//   demo.solidNavBarColor();
// });

// And("Verify menu options in the nav bar", (dataTable) => {
//   demo.solidNavBarOptions(dataTable);
// });

// Then("the search icon should be present on primary Nav", () => {
//   demo.searchPrimNav();
// });

// And("the user clicks on the dropdown", () => {
//   demo.searchIconDropdown(searchDropPrimNav);
// });

// Then("the search dropdown should appear with {string}", (tags) => {
//   demo.searchDropdownVisible(PrimNavsearchDrop, tags);
// });

// When(
//   "user selects {string} and user performs a search {string} then URL should contain selected tag and searched text in URL",
//   (tags, string) => {
//     demo.searchDropdownValue(
//       PrimNavsearchDrop,
//       searchTextFieldPrimNav,
//       SearchIconPrimNav,
//       tags,
//       string
//     );
//   }
// );

// //Hero Banner
// Then(
//   "I verify the title text with white first part and yellow last word",
//   () => {
//     demo.titleTextColour();
//   }
// );

// And("I verify the subtext font and size", () => {
//   demo.subTextCSS();
// });

// And("I verify the dropdown with yellow background", () => {
//   demo.searchDropdownColor();
// });

// Then("the Search dropdown should appear with {string}", (tags) => {
//   demo.searchDropdownVisible(searchDropHeroBanner, tags);
// });

// And("I verify the search field with ghost text", () => {
//   demo.homepagePlaceholders();
// });

// When(
//   "the user selects {string} and user performs a Search {string} then URL should contain selected tag and searched text in URL",
//   (tags, string) => {
//     demo.searchDropdownValue(
//       searchDropHeroBanner,
//       searchTextFieldHeroBanner,
//       SearchIconHeroBanner,
//       tags,
//       string
//     );
//   }
// );

// Then("I verify the heading text and UI", () => {
//   demo.verifyTitleTextCSS();
// });

// And("I verify the subheading with price text and UI", () => {
//   demo.verifySubtitleTextCSS();
// });

// And("I verify the paragraph text and UI", () => {
//   demo.verifyParaTextCSS();
// });

// Then("I verify the button UI", () => {
//   demo.verifyBttnTextCSS();
// });

// And(
//   "I click the button that navigates to a particular page with a 200 response",
//   () => {
//     demo.verifyBttnRedirection(buttonLandingPage);
//   }
// );

// And("I verify the title UI", () => {
//   demo.titleTextCSS(titleText);
// });

// And("there should be no background image", () => {
//   demo.verifyNobackgrndImage();
// });

// And("there should be no subtext on the page", () => {
//   demo.verifySubTextImage();
// });

// And("I verify the subtext UI on the page", () => {
//   demo.SubTitleTextCSS();
// });

// Then("there should be a background image on the page", () => {
//   demo.verifybackgrndImage();
// });

// And("I verify the text UI", () => {
//   demo.titleTextCSS(bgImagebannerTitle);
// });

// And("I verify the text with yellow last word", () => {
//   demo.textYellowColor();
// });

// And("I verify the text UI on Category Variation", () => {
//   demo.titleTextCSSCategory();
// });

// And("I verify the text presence on the page", () => {
//   demo.landingpageWTText();
// });

// And("I verify the text color is white on the page", () => {
//   demo.landingpageWhite();
// });

// // Title
// And(
//   "verify H1 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H2 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H3 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H4 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H5 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H6 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// // Button
// And(
//   "verify the primary buttton with font family, size, text color and background color",
//   () => {
//     demo.primaryBttnCSS();
//   }
// );

// And(
//   "verify the secondary button state dark with font family, size, text color and border",
//   () => {
//     demo.secondaryBttnDarkCSS();
//   }
// );

// And(
//   "verify the secondary button state white with font family, size, text color and border",
//   () => {
//     demo.secondaryBttnWhiteCSS();
//   }
// );

// And(
//   "verify the underline dark button with font family, size, text color and underline color",
//   () => {
//     demo.underlineBttnDarkCSS();
//   }
// );

// And(
//   "verify the underline white button with font family, size, text color and underline color",
//   () => {
//     demo.underlineBttnWhiteCSS();
//   }
// );

// //card component
// When("the user views the text cards", () => {
//   demo.textcardwithCTA();
// });

// And(
//   "each card with CTA should have a Title, Description and CTA button",
//   () => {
//     demo.cardElements();
//   }
// );
// And("verify the CTA response is 200", () => {
//   demo.CTAresponse();
// });

// And("the background color of each text card should be white", () => {
//   demo.cardBackground();
// });

// And("the user views the text cards without CTA", () => {
//   demo.cardTextwithoutCTA();
// });

// And("each card without CTA should have a Title and Description", () => {
//   demo.cardTextTitleDesc();
// });

// And(
//   "the background color of each Text card without CTA should be white",
//   () => {
//     demo.cardTextWObackgroundcolor();
//   }
// );

// And("the user views the fact card", () => {
//   demo.factCardsComponent();
// });

// Then("the fact card should have a yellow background", () => {
//   demo.factCardBackground();
// });

// And("the fact card should display a Title", () => {
//   demo.factCardsTitle();
// });

// And("the fact card should display a Subtitle", () => {
//   demo.factCardsDesc();
// });

// And("title, subtitle should be center aligned", () => {
//   demo.factCardsCenter();
// });

// And("the user views the cost cards", () => {
//   demo.costCardComponenet();
// });

// And("each card should have a Title", () => {
//   demo.costTitle();
// });

// And("each card should have a Cost displayed", () => {
//   demo.costCardCost();
// });

// And("each card should have a Date displayed", () => {
//   demo.costCardDate();
// });

// And("each card should have a CTA link, verify the CTA response is 200", () => {
//   demo.costCardCTABttn();
// });

// And("the background color of each cost card should be white", () => {
//   demo.costCardWhiteColour();
// });

// And("the user views the tags cards", () => {
//   demo.tagsCardsComponent();
// });

// And("each tags card should have a Title", () => {
//   demo.tagsCardsTitle();
// });

// And("each tags card should have a Description", () => {
//   demo.tagsCardsDesc();
// });

// And("each card should have Tags", () => {
//   demo.tagsCardBttn();
// });

// And(
//   "if a specific tag is present with a CTA, verify the CTA response is 200",
//   () => {
//     demo.BttnResponse(tagCardTagsAnchor);
//   }
// );

// When("I verify that the newsletter component is present", () => {
//   demo.newsLetterPresent();
// });

// And("I verify the subscribe text box", () => {
//   demo.newsLetterTextbox();
// });

// And(
//   "I enter a valid email id {string} in the subscribe text box",
//   (validEmail) => {
//     demo.newsLetterTextboxValid(validEmail);
//   }
// );

// And("I click on the subscribe button", () => {
//   demo.newsLetterSubscribeBttn();
// });

// Then("I should see a confirmation message", () => {
//   demo.newsLetterConfirmation();
// });

// And("the confirmation message font family should be {string}", (fontFamily) => {
//   demo.newsLetterConfirmationFontFamily(fontFamily);
// });

// And("the confirmation message color should be black {string}", (fontColor) => {
//   demo.newsLetterConfirmationFontColor(fontColor);
// });

// When(
//   "I enter an invalid email id {string} in the subscribe text box",
//   (invalidEmail) => {
//     demo.newsLetterTextboxInvalid(invalidEmail);
//   }
// );

// Then("I should see a failure message", () => {
//   demo.newsLetterFailure();
// });

// And("the failure message font family should be {string}", (fontFamily) => {
//   demo.newsLetterFailureFontFamily(fontFamily);
// });

// And("the failure message color should be red {string}", (fontColor) => {
//   demo.newsLetterFailureFontColor(fontColor);
// });

// When("I locate the newsletter component title element", () => {
//   demo.newsLetterTitleVisible();
// });
// And("the title should be of h3 style", () => {
//   demo.newsLetterTitleHeading();
// });

// And("the title font family should be {string}", (fontFamily) => {
//   demo.newsLetterTitleFontFamily(fontFamily);
// });

// And("the body text font family should be {string}", (fontFamily) => {
//   demo.newsLetterBodyFontFamily(fontFamily);
// });

// And("the subscribe text font family should be {string}", (fontFamily) => {
//   demo.newsLetterSubscribeFontFamily(fontFamily);
// });

// //TEASER
// Then("verify the teaser with an image on the page", () => {
//   demo.teaserhalfImageComponent();
// });

// And("verify the teaser has a heading and subtext", () => {
//   demo.teaserTitleAndSubextVisible();
// });

// And(
//   "the title should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.teaserTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the subtext should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.teaserSubtextCSS(fontFamily, fontSize);
//   }
// );

// And("verify the teaser has a {string} link", (seeMore) => {
//   demo.teaserseemoreLink(seeMore);
// });

// When("the user clicks on the {string} link", (seeMore) => {
//   demo.clickSeeMoreLess(seeMore);
// });

// Then("the teaser expands to show more description", () => {
//   demo.seeMoreTitleDesc();
// });

// And("the teaser displays a {string} link", (seeLess) => {
//   demo.teaserseeLessLink(seeLess);
// });

// When("the user click on the {string} link", (seeLess) => {
//   demo.clickSeeMoreLess(seeLess);
// });

// Then(
//   "the teaser collapses to hide the additional description and {string} link should be visible",
//   (seeMore) => {
//     demo.teaserSeeLessCollapse(seeMore);
//   }
// );

// And("verify teaser with half left image on the page", () => {
//   demo.teaserleftimageComponent();
// });

// And("verify Teaser- left image is present", () => {
//   demo.teaserleftimageVisible();
// });

// And("title and description is present on right side", () => {
//   demo.teaserleftImageTitleDesc();
// });

// And(
//   "title should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.teaserleftImageTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.teaserleftImageDescCSS(fontFamily, fontSize);
//   }
// );

// And("there is CTA link at bottom", () => {
//   demo.teaserleftimageBttnVisible();
// });

// And(
//   "CTA text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.teaserleftimageBttnCSS(fontFamily, fontSize);
//   }
// );

// And("clicking on CTA link navigates to 200 page", () => {
//   demo.BttnResponse(leftimageBttn);
// });

// And("verify teaser with half right image on the page", () => {
//   demo.teaserrightimageComponent();
// });

// And("verify Teaser - right image is present on the page", () => {
//   demo.teaserrightimageVisible();
// });

// And("title and description is present on left side", () => {
//   demo.teaserrightImageTitleDesc();
// });

// And(
//   "title should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.teaserrightImageTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "description should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.teaserrightImageDescCSS(fontFamily, fontSize);
//   }
// );

// And("there is CTA link at the bottom", () => {
//   demo.teaserrightimageBttnVisible();
// });

// And(
//   "CTA text should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.teaserleftimageBttnCSS(fontFamily, fontSize);
//   }
// );

// And("clicking on CTA link navigates to the 200 page", () => {
//   demo.BttnResponse(rightimageBttn);
// });

// And("verify teaser with half image without CTA on the page", () => {
//   demo.teaserWithoutCTA();
// });

// And("verify teaser image is present", () => {
//   demo.teaserWithoutCTAImage();
// });

// And("verify title is present on the page", () => {
//   demo.teaserWithoutCTATitle();
// });

// And("verify description is present", () => {
//   demo.teaserWithoutCTADesc();
// });

// And(
//   "title should be in the {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.teaserWithoutCTATitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.teaserWithoutCTADescCSS(fontFamily, fontSize);
//   }
// );

// And("there is no CTA link at bottom", () => {
//   demo.teaserWithoutCTAvisible();
// });

// // STAGGERED COMPONENT

// Then("the staggered card should be present", () => {
//   demo.staggeredComponentVisible();
// });

// And("the title should be present in the staggered card component", () => {
//   demo.staggeredMainTitleVisible();
// });

// And("the description should be present in the staggered card component", () => {
//   demo.staggeredMainDescVisible();
// });

// And(
//   "title should be in the {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.staggeredMainTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in the {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.staggeredMainDescCSS(fontFamily, fontSize);
//   }
// );

// And("the CTA link should be present in the staggered card component", () => {
//   demo.staggeredMainBttnVisible();
// });

// And(
//   "CTA text in the staggered card component should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.staggeredMainBttnCSS(fontFamily, fontSize);
//   }
// );

// And("verify CTA response is 200", () => {
//   demo.BttnResponse(staggeredmainBttn);
// });

// And("the background image should be present", () => {
//   demo.staggeredComponentBckImage();
// });

// And("there should be four non-clickable cards", () => {
//   demo.BttnNotClickable(staggeredmainCardTiles);
// });

// And("each non-clickable card should have a image and title", () => {
//   demo.staggeredcardImageTitleVisible();
// });

// And(
//   "Card title should be {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.staggeredTitleFont(fontFamily, fontSize);
//   }
// );

// And(
//   "Card description should be {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.staggeredDescFont(fontFamily, fontSize);
//   }
// );

// And(
//   "staggered card component title is {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.staggeredcardTitleFont(fontFamily, fontSize);
//   }
// );

// And(
//   "staggered card component description is {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.staggeredMainDescFont(fontFamily, fontSize);
//   }
// );

// And("card description should be {string}", (fontFamily) => {
//   demo.staggeredMainDescFont(fontFamily);
// });

// And(
//   "cards description should be {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.staggeredCardDescFont(fontFamily, fontSize);
//   }
// );

// Then("the staggered card with reviews should be present", () => {
//   demo.staggeredComponentVisible();
// });

// Then("there should be four non-clickable cards with reviews", () => {
//   demo.BttnNotClickable(staggeredReviewcard);
// });

// And(
//   "each non-clickable card with a review should have a description, review star, and author name",
//   () => {
//     demo.staggeredReviewDescReviewAuthor();
//   }
// );

// And(
//   "the author name should be in the {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.staggeredReviewAuthorCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in the {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.staggeredReviewDescCSS(fontFamily, fontSize);
//   }
// );

// And("each card should not have an image", () => {
//   demo.staggeredReviewImage();
// });

// // Quote Component
// Then("the quote component is loaded on the page", () => {
//   demo.quoteComponentVisible();
// });

// And("the carousel should display with a maximum of 1 quote", () => {
//   demo.quoteComponentTextSize();
// });

// And(
//   "the single quote should have quote text, title and author are displayed on the quote",
//   () => {
//     demo.quoteNameTitleAuthor(quoteComponentTextParagrapgh);
//   }
// );

// And(
//   "the quote title should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.quoteComponentTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the quote text should have font family {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.quoteComponentTextCSS(quoteComponentTextFont, fontFamily, fontSize);
//   }
// );

// And(
//   "the quote author text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.quoteComponentAuthorCSS(fontFamily, fontSize);
//   }
// );

// And("the carousel should display with a maximum of 3 quotes", () => {
//   demo.quoteCarouselVisible();
// });

// And(
//   "first dot should be selected by default and quote text, title and author are displayed for first quote",
//   () => {
//     demo.CarouselDefaultCheck();
//     demo.quoteNameTitleAuthor(firstQuoteTextParagrapgh);
//   }
// );

// And(
//   "quote text should have font family {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.quoteComponentTextCSS(quoteComponentTextFont, fontFamily, fontSize);
//   }
// );

// And("the carousel dots should appear below the carousel", () => {
//   demo.CarouselCheck();
// });

// When("the user clicks on the dot for quote 2", () => {
//   demo.CarouselClick(secondCarousel);
// });

// Then("the carousel should display the second quote", () => {
//   demo.CarouselDisplay(secondDefaultCarousel);
// });

// And(
//   "the Three quote component should have quote text, title and author are displayed on the quote",
//   () => {
//     demo.quoteNameTitleAuthor(secondQuoteTextParagrapgh);
//   }
// );

// And(
//   "the quote text should have the font family {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.quoteComponentTextCSS(secondQuoteText, fontFamily, fontSize);
//   }
// );

// When("the user clicks on the dot for quote 3", () => {
//   demo.CarouselClick(thirdCarousel);
// });

// Then("the carousel should display the third quote", () => {
//   demo.CarouselDisplay(thirdDefaultCarousel);
// });

// And(
//   "the Three quote component should have quote text, title and author are displayed on quote",
//   () => {
//     demo.quoteNameTitleAuthor(thirdQuoteTextParagrapgh);
//   }
// );

// And(
//   "quote text should have the font family {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.quoteComponentTextCSS(thirdQuoteText, fontFamily, fontSize);
//   }
// );

// And(
//   "verify that title, text and author are different to check new quote is loaded",
//   () => {
//     demo.compareText3Quotes();
//   }
// );

// //CostEstimatorComponent
// When("the cost estimator component is loaded", () => {
//   demo.costEstimatorComponent();
// });

// Then("by default user should see {string} title", (tabName) => {
//   demo.costEstimatorActive(tabName);
// });

// And(
//   "Routine cleaning tab should contain cost three columns of cost card teaser",
//   () => {
//     demo.costCardEstimatorComponent();
//   }
// );

// And("Tab has background colour as {string}", (backgroundColor) => {
//   demo.costEstimatorTabColor(backgroundColor);
// });

// And("each cost card has cost and title", () => {
//   demo.costEstimatorCostTitleSubtext();
// });

// And(
//   "the cost text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.costEstimatorCost(fontFamily, fontSize);
//   }
// );

// And(
//   "the title text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.costEstimatorTitle(fontFamily, fontSize);
//   }
// );

// And(
//   "the subtext text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.costEstimatorSubtext(fontFamily, fontSize);
//   }
// );

// When("the user clicks on the right arrow icon", () => {
//   demo.costEstimatorRightArrowClick();
// });

// Then("the content of {string} should be displayed", (tabName) => {
//   demo.costEstimatorTabContentCheck(tabName, "1", "3");
// });

// When("the user clicks on the left arrow icon", () => {
//   demo.costEstimatorLeftArrowClick();
// });

// Then("the content of {string} tab should be displayed", (tabName) => {
//   demo.costEstimatorTabContentCheck(tabName, "0", "0");
// });

// When("the user clicks on the right arrow icon for 5 times", () => {
//   demo.costEstimatorRightArrowClickFive();
// });

// Then("user should see {string} as tab name", (tabName) => {
//   demo.costEstimatorActive(tabName);
// });

// When("user clicks on right arrow one more time", () => {
//   demo.costEstimatorRightArrowClick();
// });

// When("the user clicks on the left arrow icon for 5 times", () => {
//   demo.costEstimatorLeftArrowClickFive();
// });

// When("user clicks on left arrow one more time", () => {
//   demo.costEstimatorLeftArrowClick();
// });

// When("there are {string} tabs authored", (tabSize) => {
//   demo.TabsAuthoredCostEstimator(tabSize);
// });

// Then("the left and right arrow icons should be hidden", () => {
//   demo.costEstimatorArrowNotVisible();
// });

// Then("the left and right arrow icons should be visible", () => {
//   demo.costEstimatorArrowVisible();
// });

// When("user clicks on {string} tab", (tabName) => {
//   demo.costEstimatorTabClick(tabName);
// });

// // // GALLERY COMPONENT
// And("the gallery component is loaded", () => {
//   demo.galleryComponent();
// });

// And("there are multiple assets in the gallery", () => {
//   demo.galleryComponmentAssets();
// });

// Then("each asset should have a title or caption displayed", () => {
//   demo.galleryComponentAssetsTitle();
// });

// And(
//   "the title should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo.galleryComponentAssetsTitleCSS(fontFamily, fontSize);
//   }
// );

// And("the carousel area should have left and right arrow icons", () => {
//   demo.galleryComponentAssetsArrow();
// });

// And(
//   "Clicking on each image should display same image in larger size,default first image should be enlarged",
//   () => {
//     demo.galleryImageLarge();
//   }
// );

// And("the user clicks on the right arrow icon in the carousel", () => {
//   demo.galleryRightArrowClick();
// });

// Then("the carousel should move to the next asset", () => {
//   demo.galleryNextAssetVisible();
// });

// When("the user clicks on the left arrow icon in the carousel", () => {
//   demo.galleryLeftArrowClick();
// });

// Then("the carousel should move to the previous asset", () => {
//   demo.galleryPreviousAssetVisible();
// });

// // BLOG HERO COMPONENT
// And("the blog hero section is loaded", () => {
//   demo.blogHeroVisible();
// });

// Then("the blog hero should display the category and title", () => {
//   demo.blogCategoryandTitle();
// });

// And(
//   "the blog hero category is having font family {string} and font size {string}",
//   (fontfamily, fontsize) => {
//     demo.blogCategoryFont(fontfamily, fontsize);
//   }
// );

// And(
//   "Title text should be in {string} and Font size should be {string} and Font family should be {string}",
//   (heading, fontsize, fontfamily) => {
//     demo.blogTitlefontstyle(heading, fontsize, fontfamily);
//   }
// );

// Then(
//   "the blog hero should display the Written by text and author name and verify font family, color and size",
//   () => {
//     demo.blogWrittenAuthorText();
//   }
// );

// Then(
//   "the blog hero should display the Reviewed by text and reviewer name and verify font family, color and size",
//   () => {
//     demo.blogWrittenReviewerText();
//   }
// );

// Then(
//   "the blog hero should display the published date and verify font family, color and size",
//   () => {
//     demo.blogDates();
//   }
// );

// Then(
//   "the blog hero should display the updated date and verify font family, color and size",
//   () => {
//     demo.blogDates();
//   }
// );

// And("image is displayed half of the page", () => {
//   demo.blogHalfImageVisible();
// });

// And("the Author name should be hyperlinked and check 200 status in URL", () => {
//   demo.BttnResponse(blogAuthorName);
// });

// And(
//   "the Reviewer name should be hyperlinked and check 200 status in URL",
//   () => {
//     demo.BttnResponse(blogReviewerName);
//   }
// );

// And(
//   "when no link is authored for Author name and Reviewer name colour of link is blue",
//   () => {
//     demo.blogAuthorAndReviewerName();
//   }
// );

// // SALESFORCE INTEGRATION EBOOK
// Then(
//   "the title has a font style of {string} and {string}",
//   (fontSize, fontFamily) => {
//     demo.salesforceTitleCSS(fontSize, fontFamily);
//   }
// );

// And("the image is present", () => {
//   demo.salesforceImageVisible();
// });

// And(
//   "the description is present with a font style of {string} and {string} size",
//   (fontFamily, fontSize) => {
//     demo.salesforceDescriptionVisible(fontFamily, fontSize);
//   }
// );

// And("the {string} button is present", (string) => {
//   demo.salesforceBttnVisible(string);
// });

// When("the user clicks on the {string} button", (string) => {
//   demo.salesforceBttnClick(string);
// });

// Then(
//   "a modal pop-up opens with the title, description, image, and button",
//   () => {
//     demo.salesforceModalTitleDescImageBttn();
//   }
// );

// And(
//   "an extra info message in {string} and {string} size is present",
//   (fontFamily, fontSize) => {
//     demo.salesforceModalExtraInfoVisible(fontFamily, fontSize);
//   }
// );

// And("an input box is present with the default text {string}", (string) => {
//   demo.salesforceModalTextPlaceholder(string);
// });

// When("the user provides a proper email id {string}", (string) => {
//   demo.salesforceModalTextFieldEmail(string);
// });

// Then(
//   "a success pop up with  message {string} is displayed along with image",
//   (string) => {
//     demo.salesforceModalSuccesMessage(string);
//   }
// );
// And(
//   "the success message {string} is having font family {string} and font size {string}",

//   (string, fontFamily, fontSize) => {
//     demo.salesforceModalSuccessMessageCSS(string, fontFamily, fontSize);
//   }
// );

// And(
//   "the modal pop-up shows {string} along with social icons and a blog-related post section",
//   (string) => {
//     demo.salesforceModaltextSocialMediaBlog(string);
//   }
// );

// When("the user enters a wrong email id {string}", (string) => {
//   demo.salesforceModalTextFieldEmail(string);
// });

// Then(
//   "an error message {string} in red color is displayed below the input box",
//   (string) => {
//     demo.salesforceEmailErrorMssg(string);
//   }
// );

// When("the user leaves the input box empty", () => {
//   demo.salesforceModalEmptyTextFieldEmail();
// });

// Then("an error message {string} is displayed below the input box", (string) => {
//   demo.salesforceEmailErrorMssg(string);
// });

// // CURATED LISTING
// When("they view the curated list of blog articles", () => {
//   demo.curatedListingVisible();
// });

// Then("there should be {string} articles displayed", (string) => {
//   demo.curatedListingSize(string);
// });

// And(
//   "the first article should have Image larger than second Image, Category Tag, Title and Description",
//   () => {
//     demo.curatedFirstVisible();
//   }
// );

// And(
//   "the Category Tag is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo.curatedCategoryCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the Title is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo.curatedTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the Description is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo.curatedDescCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the next {string} articles should have Image, Category Tag and Title",
//   (string) => {
//     demo.curated4Visible(string);
//   }
// );

// Then("title should be navigated to a page with a 200 status code", () => {
//   demo.BttnResponse(curatedTitle);
// });

// Then("there should be 3 featured articles displayed", () => {
//   demo.featuredListingVisible();
// });

// And("each featured article should have Image, Title and Description", () => {
//   demo.featuredTitleImageDesc();
// });

// And(
//   "the Title is having font family {string} and font size {string} on Featured Post",
//   (fontFamily, fontSize) => {
//     demo.featuredTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the Description is having font family {string} and font size {string} on Featured Post",
//   (fontFamily, fontSize) => {
//     demo.featuredDescCSS(fontFamily, fontSize);
//   }
// );

// Then("title should be navigated to the page with a 200 status code", () => {
//   demo.BttnResponse(featuredTitle);
// });

// And("there should be a CTA link displayed", () => {
//   demo.featuredBttnVisible();
// });

// Then("CTA should be navigated to a page with a 200 status code", () => {
//   demo.BttnResponse(featuredBttn);
// });

// And(
//   "the CTA text is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo.bttnfont(fontFamily, fontSize);
//   }
// );

// // DYNAMIC LISTING
// Then("I shoud see the 3 cards listing variation", () => {
//   demo.threeCardListingVisible();
// });

// And("{string} button should be displayed on right side", (string) => {
//   demo.CardBttnVisible(threeCardBttnViewAll, string);
// });

// And(
//   "the Button text {string} is having font family {string} and font size {string} on 3 cards listing",
//   (string, fontFamily, fontSize) => {
//     demo.CardBttnCSS(threeCardBttnViewAll, string, fontFamily, fontSize);
//   }
// );

// And("I see that there are {string} cards in the listing", (string) => {
//   demo.CardListSize(threeCardListing, string);
// });

// And("Each card has image, title and description", () => {
//   demo.CardListTitleImageDesc(threeCardTitle, threeCardDesc, threeCardImage);
// });

// And(
//   "the Card title is having font family {string} and font size {string} on 3 cards listing",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(threeCardTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the Card description is having font family {string} and font size {string} on 3 cards listing",
//   (fontFamily, fontSize) => {
//     demo.CardListDescCSS(threeCardDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "I see that each article title is a link to the full article and with a 200 status code",
//   () => {
//     demo.BttnResponse(threeCardTitleLink);
//   }
// );

// And(
//   "I see that the {string} button should have 200 status code on 3 cards listing",
//   (string) => {
//     demo.BttnResponse200(threeCardBttnViewAllLink, 0);
//   }
// );

// Then("I see the 4 cards listing variation", () => {
//   demo.fourCardListingVisible();
// });

// And("{string} button should be displayed on the right side", (string) => {
//   demo.CardBttnVisible(fourCardBttnViewAll, string);
// });

// And(
//   "the Button text {string} is having font family {string} and font size {string} on 4 cards listing component",
//   (string, fontFamily, fontSize) => {
//     demo.CardBttnCSS(fourCardBttnViewAll, string, fontFamily, fontSize);
//   }
// );

// And("I see that there are {string} cards on cards listing", (string) => {
//   demo.CardListSize(fourCardListing, string);
// });

// And("Each card has image, title and description on 4 cards listing", () => {
//   demo.CardListTitleImageDesc(fourCardTitle, fourCardDesc, fourCardImage);
// });

// And(
//   "the Card title is having font family {string} and font size {string} on 4 cards listing",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(fourCardTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the Card description is having font family {string} and font size {string} on 4 cards listing",
//   (fontFamily, fontSize) => {
//     demo.CardListDescCSS(fourCardDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "Verify that each article title is a link to the full article and with a 200 status code",
//   () => {
//     demo.BttnResponse(fourCardTitleLink);
//   }
// );

// And(
//   "I see that the {string} button should have 200 status code on 4 cards listing",
//   () => {
//     demo.BttnResponse(fourCardBttnViewAllLink);
//   }
// );

// Then("I should see carousel listing variation", () => {
//   demo.threecarouselListingVisbile();
// });

// And(
//   "{string} button should be displayed on right side of carousel listing component",
//   (string) => {
//     demo.CardBttnVisible(threeCarouselBttnViewAll, string);
//   }
// );

// And(
//   "the Button text {string} is having font family {string} and font size {string} on 4 carousel listing",
//   (string, fontFamily, fontSize) => {
//     demo.CardBttnCSS(threeCarouselBttnViewAll, string, fontFamily, fontSize);
//   }
// );

// And("I see that there are 3 cards in the listing", () => {
//   demo.threeCarouselCardsSize();
// });

// And("Each card has image title and description", () => {
//   demo.CardListTitleImageDesc(
//     threeCarouselTitle,
//     threeCarouselDesc,
//     threeCarouselImage
//   );
// });

// And(
//   "the Card title is having font family {string} and font size {string} on carousel listing",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(threeCarouselTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the Card description is having font family {string} and font size {string} on carousel listing",
//   (fontFamily, fontSize) => {
//     demo.CardListDescCSS(threeCarouselDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "Verify that each card title is a link to the full article and with a 200 status code",
//   () => {
//     demo.BttnResponse(threeCarouselTitleLink);
//   }
// );

// And(
//   "I see that the {string} button should have 200 status code on 3 carousel listing",
//   () => {
//     demo.BttnResponse(threeCarouselBttnViewAllLink);
//   }
// );

// And("there is {string} link at right side of carousel", (string) => {
//   demo.threeCarouselMoreLinkVisbile(string);
// });

// And(
//   "when I click on {string} link, then i should see three more cards are coming up",
//   (string) => {
//     demo.threeCarouselMoreLinkclick(string);
//   }
// );

// And("there is {string} link on left side of carousel", (string) => {
//   demo.threeCarouselLessLinkVisbile(string);
// });

// And("clicking on {string} we should see first three cards", (string) => {
//   demo.threeCarouselLessLinkclick(string);
// });

// And(
//   "clicking on {string} link for three times, more link disappears and only {string} link should be present",
//   (string1, string2) => {
//     demo.threeCarouselMoreLessFunc(string1, string2);
//   }
// );

// Then("I should be able to see the dynamic listing carousel", () => {
//   demo.factCardVisble();
// });

// And("the carousel should have a title and description below it", () => {
//   demo.factCardTitleDescVisble();
// });

// And(
//   "the title is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(factCardTitleComponent, fontFamily, fontSize);
//   }
// );

// And(
//   "the description is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo.CardListDescCSS(factCardDescComponent, fontFamily, fontSize);
//   }
// );

// And("the carousel contains three cards in a row", () => {
//   demo.factCardSize();
// });

// And(
//   "verify that each card title is a link to the full article and with a 200 status code",
//   () => {
//     demo.BttnResponse200(factCardTitleLink, 0);
//   }
// );

// And(
//   "each card should have an image, title in blue color and a description",
//   () => {
//     demo.factCardTitleImageDesc();
//   }
// );

// And(
//   "the card title is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(factCardTitleText, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo.CardListDescCSS(factCardTitleDesc, fontFamily, fontSize);
//   }
// );

// And("the second card is a fact card", () => {
//   demo.factCardSecondTile();
// });

// And("the fact card is not clickable", () => {
//   demo.BttnNotClickable(factCardComponent);
// });

// And("the fact card has a title with the description", () => {
//   demo.factCardAuthorDescVisible();
// });

// And(
//   "the fact card title is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(factCardDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "the fact card description is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo.CardListDescCSS(factCardAuthor, fontFamily, fontSize);
//   }
// );

// When("I click on the next arrow", () => {
//   demo.factCardNextClick();
// });

// Then("the next set of three cards in the carousel should be displayed", () => {
//   demo.factCardClickVerification();
// });

// When("I click on the previous arrow", () => {
//   demo.factCardPreviousClick();
// });

// And("the previous three cards in the carousel should be displayed", () => {
//   demo.factCardSize();
// });

// // COMMON CONCERN CAROUSEL
// Then("I should be able to see Common Concern carousel component", () => {
//   demo.commonConcernCarouselVisbile();
// });

// And("I should be able to see the title", () => {
//   demo.commonConcernCarouselTitleVisible();
// });

// And("I should see right arrow", () => {
//   demo.commonConcernCarouselRightVisible();
// });

// And("there are cards displayed with image and title", () => {
//   demo.commonConcernCarouselTitleImageVisible();
// });

// And(
//   "the card title is having font family {string} and font size {string} on Common Concern carousel",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(commonConcernCardTitle, fontFamily, fontSize);
//   }
// );

// And("title has yellow underline", () => {
//   demo.commonConcernCarouselYellowUnderlineVisible(commonConcernCardTitle);
// });

// And(
//   "the user clicks on any part of the card and user should be redirected to the corresponding link with a 200 status code",
//   () => {
//     demo.verifyBttnRedirection(commonConcerCardLink);
//   }
// );

// Then("I should be able to click on right side arrow", () => {
//   demo.commonConcerCarouselRightClick();
// });

// And("next articles should be displayed", () => {
//   demo.commonConcerCarouselNextVisible();
// });

// And(
//   "when we click on on previous arrow previous articles should be displayed",
//   () => {
//     demo.commonConcerCarouselPreviousVisible();
//   }
// );

// And(
//   "verify that each card title is a link to the full article and with a 200 status code",
//   () => {
//     demo.BttnResponse200(threeCardBttnViewAllLink, 0);
//   }
// );

// Then("I should be able to see 4 column common concerns card set", () => {
//   demo.commonConcern4CardVisible();
// });

// And("I should see 4 cards in row and there is no arrow", () => {
//   demo.commonConcern4cardsRow();
//   demo.magazineCarouselColumnRightLeftArrow();
// });

// And("there are Common Concern cards displayed with image and title", () => {
//   demo.commonConcernCardImageTitle(commonConcern4Title, commonConcern4Image);
// });

// And(
//   "the card title is having font family {string} and font size {string} on Common Concern 4 column",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(commonConcern4Title, fontFamily, fontSize);
//   }
// );

// And("Common Concern card title has yellow underline", () => {
//   demo.titleLineColour(commonConcern4Title);
// });

// When(
//   "the user clicks on any part of the common concern 4 card and user should be redirected to the corresponding link with a 200 status code",
//   () => {
//     demo.verifyBttnRedirection(commonConcern4CardLink);
//   }
// );

// Then("I should be able to see 3 column common concerns card set", () => {
//   demo.commonConcern3CardVisible();
// });

// And("I should see two rows with in three cards each row without arrow", () => {
//   demo.commonconcern3cardsRow();
//   demo.magazineCarouselColumnRightLeftArrow();
// });

// And("there are Common Concern 3 cards displayed with image and title", () => {
//   demo.commonConcernCardImageTitle(commonConcern3Title, commonConcern3Image);
// });

// And(
//   "the card title is having font family {string} and font size {string} on Common Concern 3 column",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(commonConcern3Title, fontFamily, fontSize);
//   }
// );

// And("Common Concern 3 card title has yellow underline", () => {
//   demo.titleLineColour(commonConcern3Title);
// });

// When(
//   "the user clicks on any part of the common concern 3 card and user should be redirected to the corresponding link with a 200 status code",
//   () => {
//     demo.verifyBttnRedirection(commonConcern3CardLink);
//   }
// );

// // MAGAZINE CAROUSEL
// Then("I should see the magazine carousel displayed", () => {
//   demo.magazineCarouselVisible();
// });

// And("the magazine carousel should contain a right arrow and 4 cards", () => {
//   demo.magazineCarouselRightVisible();
// });

// And(
//   "each magazine carousel card should be clickable with a 200 status code",
//   () => {
//     demo.BttnResponse(magazineCarouselLink);
//   }
// );

// And(
//   "each card should have an image, title in blue color, and a description",
//   () => {
//     demo.magazineCarouselTitleDescImage(
//       magazineCarouselTiTle,
//       magazineCarouselDesc,
//       magazineCarouselImage
//     );
//   }
// );

// And(
//   "the card title is having font family {string} and font size {string} on Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(magazineCarouselTiTle, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo.CardListDescCSS(magazineCarouselDesc, fontFamily, fontSize);
//   }
// );

// When("I click on the right arrow", () => {
//   demo.magazineCarouselRightClick();
// });

// Then("the next card in the carousel should be displayed", () => {
//   demo.magazineCarouselRightDisplay();
// });

// And(
//   "when we click on previous arrow, previous card should display in 4 set card",
//   () => {
//     demo.magazineCarouselLeftVisible();
//   }
// );

// When(
//   "I reach the end of the carousel by clicking the right arrow multiple times",
//   () => {
//     demo.magazineCarouselRightClickEnd();
//   }
// );

// And(
//   "there should not be a right arrow visible and only the left arrow should be displayed",
//   () => {
//     demo.magazineCarouselRightLeftArrow();
//   }
// );

// Then("I should see the 2-column magazine displayed", () => {
//   demo.magazineCarouselColumnVisible(magazineCarousel2Column);
// });

// And(
//   "the 2-column should contain 2 cards in row and does not contain any arrow",
//   () => {
//     demo.magazineCarousel2cardsRow(magazineCarousel2Column);
//     demo.magazineCarouselColumnRightLeftArrow();
//   }
// );

// And("each card should be clickable with a 200 status code", () => {
//   demo.BttnResponse(magazineCarousel2ColumnLink);
// });

// And(
//   "each Two column Magazine card should have an image, title in blue color, and a description",
//   () => {
//     demo.magazineCarouselTitleDescImage(
//       magazineCarousel2ColumnTitle,
//       magazineCarousel2ColumnDesc,
//       magazineCarousel2ColumnImage
//     );
//   }
// );

// And(
//   "the card title is having font family {string} and font size {string} on Two column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(magazineCarousel2ColumnTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on Two column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo.CardListDescCSS(magazineCarousel2ColumnDesc, fontFamily, fontSize);
//   }
// );

// Then("I should see the 4-column magazine displayed", () => {
//   demo.magazineCarouselColumnVisible(magazineCarousel4Column);
// });

// And(
//   "the 4-column should contain 4 cards and does not contain any arrow",
//   () => {
//     demo.magazineCarousel4cardsRow(magazineCarousel4Column);
//     demo.magazineCarouselColumnRightLeftArrow();
//   }
// );

// And(
//   "each Four column Magazine card should be clickable with a 200 status code",
//   () => {
//     demo.BttnResponse(magazineCarousel4ColumnLink);
//   }
// );

// And(
//   "each Four column Magazine card should have an image, title in blue color, and a description",
//   () => {
//     demo.magazineCarouselTitleDescImage(
//       magazineCarousel4ColumnTitle,
//       magazineCarousel4ColumnDesc,
//       magazineCarousel4ColumnImage
//     );
//   }
// );

// And(
//   "the card title is having font family {string} and font size {string} on Four column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo.CardListTitleCSS(magazineCarousel4ColumnTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on Four column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo.CardListDescCSS(magazineCarousel4ColumnDesc, fontFamily, fontSize);
//   }
// );

// // APPOINTMENT SCHEDULER
// And("the title is displayed", () => {
//   demo.schedulerTitleVisible();
// });

// And(
//   "the title is having font family {string} and font size {string} on Office Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo.schedulerCSS(OfficeSchedulerTitle, fontFamily, fontSize);
//   }
// );

// And("the subtitle is displayed", () => {
//   demo.schedulerSubTitleVisible();
// });

// And(
//   "the subtitle is having font family {string} and font size {string} on Office Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo.schedulerCSS(OfficeSchedulerSubtitle, fontFamily, fontSize);
//   }
// );

// And("the description is displayed", () => {
//   demo.schedulerDescVisible();
// });

// And(
//   "the description is having font family {string} and font size {string} on Office Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo.schedulerCSS(OfficeSchedulerDesc, fontFamily, fontSize);
//   }
// );

// And("the image is displayed", () => {
//   demo.schedulerImageVisible();
// });

// And("the CTA is displayed", () => {
//   demo.schedulerBttnVisible();
// });

// And(
//   "the CTA is having font family {string} and font size {string} on Office Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo.schedulerCSS(OfficeSchedulerBttnText, fontFamily, fontSize);
//   }
// );

// And("the CTA link contains {string}", (string) => {
//   demo.schedulerHref(string);
// });

// And("I click the CTA link then response status should be 200", (string) => {
//   demo.BttnResponse(OfficeSchedulerBttn);
// });

// And("the title is displayed on Provider Appointment Scheduler", () => {
//   demo.schedulerTitleVisible();
// });

// And(
//   "the title is having font family {string} and font size {string} on Provider Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo.schedulerCSS(OfficeSchedulerTitle, fontFamily, fontSize);
//   }
// );

// And("the subtitle is displayed on Provider Appointment Scheduler", () => {
//   demo.schedulerSubTitleVisible();
// });

// And(
//   "the subtitle is having font family {string} and font size {string} on Provider Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo.schedulerCSS(OfficeSchedulerSubtitle, fontFamily, fontSize);
//   }
// );

// And("the description is displayed on Provider Appointment Scheduler", () => {
//   demo.schedulerDescVisible();
// });

// And(
//   "the description is having font family {string} and font size {string} on Provider Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo.schedulerCSS(OfficeSchedulerDesc, fontFamily, fontSize);
//   }
// );

// And("the image is displayed on Provider Appointment Scheduler", () => {
//   demo.schedulerImageVisible();
// });

// And("the CTA is displayed on Provider Appointment Scheduler", () => {
//   demo.schedulerBttnVisible();
// });

// And(
//   "the CTA is having font family {string} and font size {string} on Provider Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo.schedulerCSS(OfficeSchedulerBttnText, fontFamily, fontSize);
//   }
// );

// And(
//   "the CTA link contains {string} on Provider Appointment Scheduler",
//   (string) => {
//     demo.schedulerHref(string);
//   }
// );

// And(
//   "I click the CTA link then response status should be 200 on Provider Appointment Scheduler",
//   (string) => {
//     demo.BttnResponse(OfficeSchedulerBttn);
//   }
// );

// // OFFICE PROFILE
// And("Hero image is displayed", () => {
//   demo.ComponentsVisible(officeProfileImage);
// });

// And("Hero pre-title section should contain {string} title", (string) => {
//   demo.ComponentsVisibleContains(officeProfilePreTitle, string);
// });

// And(
//   "the pre-title is having font family {string} and font size {string} on Office profile component",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(officeProfilePreTitle, fontFamily, fontSize);
//   }
// );

// And("Hero title should contain {string}", (string) => {
//   demo.ComponentsVisibleContains(officeProfileTitle, string);
// });

// And(
//   "the Hero title is having font family {string} and font size {string} on Office profile component",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(officeProfileTitle, fontFamily, fontSize);
//   }
// );

// And("Accepting new patients section is displayed", () => {
//   demo.ComponentsVisible(officeProfileStatus);
// });

// And("{string} button is present", (string) => {
//   demo.ComponentsVisibleContains(officeProfileBttn, string);
// });

// Then(
//   "the {string} CTA is having font family {string} and font size {string} on Office profile component",
//   (string, fontFamily, fontSize) => {
//     demo.officeProfileBttnCSS(
//       officeProfileButtonText,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// And(
//   "verify that BOOK APPOINTMENT button has {string} in URL, response status is 200",
//   (string) => {
//     demo.officeProfileHref(officeProfileBttn, "0", string);
//   }
// );

// And("the {string} CTA button is present", (string) => {
//   demo.officeProfileBttnVisible(officeProfileSecBttns, string);
// });

// And(
//   "{string} CTA is having font family {string} and font size {string} on Office profile component",
//   (string, fontFamily, fontSize) => {
//     demo.officeProfileBttnCSS(
//       officeProfileSecBttnsText,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// Then(
//   "verify that the Website CTA button has {string} in URL, response status is 200",
//   (string) => {
//     demo.officeProfileHref(officeProfileSecBttns, "0", string);
//   }
// );

// And("{string} CTA button is present", (string) => {
//   demo.officeProfileBttnVisible(officeProfileSecBttns, string);
// });

// And(
//   "{string} CTA is having the font family {string} and font size {string} on Office profile component",
//   (string, fontFamily, fontSize) => {
//     demo.officeProfileBttnCSS(
//       officeProfileSecBttnsText,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// Then(
//   "verify that Find us on Google CTA button has {string} in URL, response status is 200",
//   (string) => {
//     demo.officeProfileHref(officeProfileSecBttns, "1", string);
//   }
// );

// // PROVIDER PROFILE
// Then("the hero section should be displayed", () => {
//   demo.ComponentsVisible(providerProfile);
// });

// And("Hero image is displayed on Provider profile component", () => {
//   demo.ComponentsVisible(providerProfileImage);
// });

// And(
//   "The Hero title should contain {string} on Provider profile component",
//   (string) => {
//     demo.ComponentsVisibleContains(InfoproviderProfileTitle, string);
//   }
// );

// And(
//   "the Hero title is having font family {string} and font size {string} on Provider profile component",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(InfoproviderProfileTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "Hero sub title should contain {string} on Provider profile component",
//   (string) => {
//     demo.ComponentsVisibleContains(providerProfileSubTitle, string);
//   }
// );

// And(
//   "the sub title is having font family {string} and font size {string} on Provider profile component",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(providerProfileSubTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the {string} button is present on Provider profile component",
//   (string) => {
//     demo.officeProfileBttnVisible(providerProfileBttn, string);
//   }
// );

// And(
//   "the {string} CTA is having font family {string} and font size {string} on Provider profile component",
//   (string, fontFamily, fontSize) => {
//     demo.officeProfileBttnCSS(
//       providerProfileButtonText,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// And(
//   "verify that clicking on Book an appointment button should add {string} in Page URL and response status is 200",
//   (string) => {
//     demo.officeProfileHref(providerProfileBttn, "0", string);
//   }
// );

// //FAQs COMPONENT
// Then("I should see tabs", () => {
//   demo.ComponentsVisible(FAQTabs);
// });

// And("{string} should be highlighted in the tab", (string) => {
//   demo.ComponentsVisibleContains(FAQTabsActiveCategories, string);
// });

// And("I should see FAQ title", () => {
//   demo.ComponentsVisible(FAQTabsTitle);
// });

// And("there should be a description", () => {
//   demo.ComponentsVisible(FAQTabsDescription);
// });

// And("there should be a {string} link", (string) => {
//   demo.ComponentsVisibleContains(FAQTabsSecBttns, string);
// });

// And("the Contact Us link gives a 200 response", () => {
//   demo.BttnResponse200(FAQTabsSecBttnsLinks, 0);
// });

// And("there should be {string} link", (string) => {
//   demo.ComponentsVisibleContains(FAQTabsSecBttns, string);
// });

// And("the Search FAQs link gives a 200 response", () => {
//   demo.BttnResponse200(FAQTabsSecBttnsLinks, 1);
// });

// And("FAQ section links should match tabs in the header", () => {
//   demo.correctTabsCheck();
// });

// When("I click on the {string} FAQ link", (string) => {
//   demo.clickTabName(string);
// });

// Then("I should see {string} in the title", (string) => {
//   demo.ComponentsVisibleContains(FAQTabsTitle, string);
// });

// And("{string} should be highlighted in the tab", (string) => {
//   demo.ComponentsVisibleContains(FAQTabsActiveCategories, string);
// });

// And(
//   "each FAQ question in the accordion should not have any characters after the question mark",
//   () => {
//     demo.verifyAccordionQuestions();
//   }
// );

// And("there is answer section also for each question", () => {
//   demo.verifyQuestionAnswer();
// });

// Then("I should verify the pagination below the FAQ section", () => {
//   demo.faqpaginationVisible();
// });

// Then("page should have 25 FAQs", () => {
//   demo.faq25Questions();
// });

// Then("I should continue clicking until the next button becomes grey", () => {
//   demo.faqPaginationGrey();
// });

// //office profile - overview  and insurance information
// Then(
//   "I should see the following business hours and the font-family should be {string}:",
//   (datatable, fontfamily) => {
//     demo.officeprofileScheduleandInsuranceList(
//       schedulelist,
//       businessdaystimings,
//       fontfamily,
//       datatable
//     );
//   }
// );

// And(
//   "I should see the following insurance information and the font-family should be {string}:",
//   (datatable, fontfamily) => {
//     demo.officeprofileScheduleandInsuranceList(
//       insuranceinformation,
//       insurancelist,
//       fontfamily,
//       datatable
//     );
//   }
// );

// And(
//   "I should see phone number {string} and fax number {string}",
//   (string1, string2) => {
//     demo.officeProvderPhNumVisible(string1, string2);
//   }
// );

// And(
//   "the phone and fax number is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(officeProviderPhNum, fontFamily, fontSize);
//   }
// );

// And(
//   "I should see address {string}{string}{string}",
//   (string1, string2, string3) => {
//     demo.ComponentsVisible(officeProviderAddress, string1, string2, string3);
//   }
// );

// And(
//   "the adrdress is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(officeProviderAddress, fontFamily, fontSize);
//   }
// );

// And("I should see map", () => {
//   demo.ComponentsVisible(officeProviderMap);
// });

// And(
//   "{string} button is present on office profile overview and info component",
//   (string) => {
//     demo.ComponentsVisibleContains(officeProviderBttnText, string);
//   }
// );

// And(
//   "the {string} CTA is having font family {string} and font size {string} on office profile overview and info component",
//   (string, fontFamily, fontSize) => {
//     demo.officeProfileBttnCSS(
//       officeProviderButtonText,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// Then(
//   "verify that GET DIRECTIONS CTA button has {string} in URL, response status is 200",
//   (string) => {
//     demo.officeProfileHref(officeProviderBttns, "0", string);
//   }
// );

// And("language spoken should be {string}", (string) => {
//   demo.ComponentsVisibleContains(officeProviderLang, string);
// });

// And(
//   "the language spoken text is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(officeProviderLang, fontFamily, fontSize);
//   }
// );

// And("there should be text below button as {string}", (string) => {
//   demo.ComponentsVisibleContains(officeProviderExtraText, string);
// });

// And(
//   "the extra text is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(officeProviderExtraText, fontFamily, fontSize);
//   }
// );

// // Office Profile page - Services and Team Section

// Then("I should be able to see dental services section", () => {
//   demo.ComponentsVisible(officeProfiledentalServices);
// });

// And("each dental service should've icon and link", () => {
//   demo.iconsandlinks();
// });

// And("the link should be underlined in yellow", () => {
//   demo.underlineBttn(officeProfileBttnTextUnderline);
// });

// And("the link href response status code should be 200", () => {
//   demo.BttnResponse(officeProfilebuttonLinks);
// });
// And("10 services will be displayed", () => {
//   demo.cardcount();
// });
// And(
//   "after that, there should be a see more button then click on see more",
//   () => {
//     demo.seeMoreBttn();
//   }
// );
// Then("it should show all services", () => {
//   demo.showAllServices();
// });
// And("see more button is not displayed", () => {
//   demo.seemoreNotVisible();
// });

// Then("I should be able to see team section", () => {
//   demo.ComponentsVisible(officeProfileTeam);
// });

// Then("I check each dentist card", () => {
//   demo.teamProfileCards();
// });
// Then("each card should have a photo, link with the doctor's name", () => {
//   demo.teamProfileCardsImg_DocName();
// });
// And("the doctor's name should be underlined in yellow", () => {
//   demo.underlineBttn(officeProfileTeamCardBttnUnderline);
// });
// And("verify href value and status response is 200", () => {
//   demo.BttnResponse(officeProfileTeamCardsLinks);
// });
// And("doctor's name should go to the corresponding link {string}", (string) => {
//   demo.urlString(string);
// });
// And("the href value should contain the doctor's name", () => {
//   demo.docNameInUrl();
// });

// And(
//   "below the doctor's name, there should be a profession text mentioned",
//   () => {
//     demo.teamCardsProfessionText();
//   }
// );
// And("below that, another text may be present", () => {
//   demo.teamCardsSecondText();
// });

// // PROVIDER PROFILE:information section
// Then("I should be able to see {string} tab as highlighted", (string) => {
//   demo.ComponentsVisibleContains(providerProfileTab, string);
// });

// And(
//   "the overview text is having font family {string} and font size {string} on provider profile info component",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(providerProfileTab, fontFamily, fontSize);
//   }
// );

// And("I should be able to see About Me icon and {string} section", (string) => {
//   demo.providerprofileIconText("0", informationproviderProfileTitle, string);
// });

// And(
//   "the {string} text is having font family {string} and font size {string} on provider profile info component",
//   (string, fontFamily, fontSize) => {
//     demo.officeProfileBttnCSS(
//       informationproviderProfileTitle,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// And("I should be able to see Quote icon and {string} section", (string) => {
//   demo.providerprofileIconText("1", informationproviderProfileTitle, string);
// });

// And(
//   "{string} text is having font family {string} and font size {string} on provider profile info component",
//   (string, fontFamily, fontSize) => {
//     demo.officeProfileBttnCSS(
//       informationproviderProfileTitle,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// And("I should see Education icon and {string} section", (string) => {
//   demo.providerprofileIconText("2", informationproviderProfileTitle, string);
// });

// And(
//   "the {string} text is having the font family {string} and font size {string} on provider profile info component",
//   (string, fontFamily, fontSize) => {
//     demo.officeProfileBttnCSS(
//       informationproviderProfileTitle,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// // BLOG LISTING
// Then("the blog listing section is displayed", () => {
//   demo.ComponentsVisible(blogListingComponent);
// });

// And("it includes a {string} dropdown", (string) => {
//   demo.blogListingSortByVisible(string);
// });

// And(
//   "the Sort By dropdown has options: {string}, {string}, and {string}",
//   (string1, string2, string3) => {
//     demo.blogListingSortOptions(string1, string2, string3);
//   }
// );

// And(
//   "the default value in the Sort By dropdown is set to {string}",
//   (string) => {
//     demo.blogListingSortDefaultOptions(string);
//   }
// );

// And(
//   "there are 18 cards on the page, a combination of fact cards and normal cards",
//   () => {
//     demo.blogListingCardsSize();
//   }
// );

// And("each card item has an image, title, and description", () => {
//   demo.blogListingCardImgTitleDesc(
//     blogListingImage,
//     blogListingTitle,
//     blogListingDesc
//   );
// });

// And(
//   "the fact card title is having the font family {string} and font size {string} on Blog Listing cards",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(blogListingFactCardTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the normal card title is having the font family {string} and font size {string} on Blog Listing cards",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(blogListingCardTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the description is having the font family {string} and font size {string} on Blog Listing cards",
//   (fontFamily, fontSize) => {
//     demo.officeProfileCSS(blogListingDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "clicking on a card item navigates the user to the corresponding blog page and blog page title should match the card title",
//   () => {
//     demo.blogListingCompareTitle();
//   }
// );

// And("I select the value {string}", (string) => {
//   demo.blogListingSortSelectOptions(string);
// });

// Then(
//   "the list of 18 items on the first page should be sorted alphabetically by the first letter of their titles",
//   () => {
//     demo.AtoZSort(blogListingCardTitle);
//   }
// );

// Then(
//   "the updated date in each blog details page should be less than or equal to the previous card date",
//   () => {
//     demo.blogListingDateCompareTitle(blogListingCardTitle);
//   }
// );

// Then(
//   "the first page {string} in pagination should be highlighted",
//   (string) => {
//     demo.blogListingfirstPageHighlighted(string);
//   }
// );

// And("both back arrows are greyed out", () => {
//   demo.blogListingbackArrowsDisable();
// });

// And(
//   "clicking on the second pagination {string} number should display a new set of cards",
//   (string) => {
//     demo.blogListingsecondPage(string);
//   }
// );

// And("the back button should be displayed", () => {
//   demo.blogListingfirstArrowsDisplay();
// });

// And("the second pagination {string} number should be highlighted", (string) => {
//   demo.blogListingfirstPageHighlighted(string);
// });

// When(
//   "I click on the first pagination {string} number again then the previous card set should be displayed",
//   (string) => {
//     demo.blogListingfirstPageVerification(string);
//   }
// );

// When("I click on the single next button", () => {
//   demo.blogListingnextArrowClick();
// });

// When("I click on the double arrow at the right side", () => {
//   demo.blogListinglastArrowClick();
// });

// And("both right side buttons should be greyed out", () => {
//   demo.blogListinglastArrowsDisplay();
// });

// And("the last page number should be highlighted", () => {
//   demo.blogListinglastActive();
// });

// //MAP COMPONENT
// Then("the dropdown should be present with state names", () => {
//   demo.mapDropdownVisible();
// });

// And("the dropdown should be sorted", () => {
//   demo.AtoZSort(mapComponentDropdown);
// });

// When("the user selects {string} state in the dropdown", (string) => {
//   demo.mapsSelectValue(string);
// });

// Then(
//   "the insurance list should display the following companies",
//   (dataTable) => {
//     demo.getInsuranceList(dataTable, mapComponentsDetails, 0);
//   }
// );

// And(
//   "the insurance list item is having the font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo.TextFFamily_Size(mapComponentsDetailsText, fontFamily, fontSize);
//   }
// );

// And(
//   "verify the title is having the font family {string} and font size {string} on Map component",
//   (fontFamily, fontSize) => {
//     demo.TextFFamily_Size(mapComponentTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "verify the description is having the font family {string} and font size {string} on Map component",
//   (fontFamily, fontSize) => {
//     demo.TextFFamily_Size(mapComponentDesc, fontFamily, fontSize);
//   }
// );

// Then("the map state should be highlighted and have clipath attribute", () => {
//   demo.mapCountryVisible();
// });

// Then(
//   "User should be able to see the two files {string} and {string}",
//   (string1, string2) => {
//     demo.ComponentsVisibleContains(mapComponentsDetails, string1);
//     demo.ComponentsVisibleContains(mapComponentsDetails, string2);
//   }
// );

// And(
//   "the files name is having the font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo.TextFFamily_Size(mapComponentsDetailsText, fontFamily, fontSize);
//   }
// );

// And(
//   "verify that Most Commonly Viewed Fees link contains pdf file with {string} name in it",
//   (string) => {
//     demo.urlStringCheck(string);
//   }
// );

// And("verify Most Commonly Viewed Fees pdf link gives 200 status", () => {
//   demo.BttnResponse200(mapComponentsDetailsURL, 0);
// });

// And(
//   "verify that Full Fee Schedule link contains pdf file with {string} name in it",
//   (string) => {
//     demo.urlStringCheck(string);
//   }
// );

// And("verify Full Fee Schedule pdf link gives 200 status", () => {
//   demo.BttnResponse200(mapComponentsDetailsURL, 1);
// });

// //MYCHART PORTAL VERIFICATION
// Then("the title should be present", () => {
//   demo.ComponentsVisible(myChartTitleTextCSS);
// });

// And(
//   "the title should have font-family {string} and font-size {string}",
//   (fontFamily, fontSize) => {
//     demo.TextFFamily_Size(myChartTitleTextCSS, fontFamily, fontSize);
//   }
// );

// And("An image should be present with alt text", () => {
//   demo.myChartTitleImg();
// });

// And("Sign In box should be embedded in the hero section", () => {
//   demo.ComponentsVisible(myChartSignInBoxCSS);
// });

// // Scroll to Footer
// And("I scroll to the footer section", () => {
//   demo.footerScroll();
// });

// // Verify 1st column Title
// Then("I should see the {string} in column one in the footer", (String) => {
//   demo.mouthbodyConnect(String);
// });

// // Verify the links in the list
// And(
//   "The Mouth Body Connection column should have the following links:",
//   (dataTable) => {
//     demo.footerColumnLinks(dataTable, mouthbodyconnectionfooter);
//   }
// );
// // // Click on the links
// // When(
// //   "I click on the {string} link in the Mouth Body Connection column",
// //   (link) => {
// //     demo.clickLink(link, mouthbodyconnectionfooter);
// //   }
// // );

// // Verify the response 200
// Then(
//   "Verify the status code should be the 200 for each link in MOUTH BODY CONNECTION Column",
//   () => {
//     demo.BttnResponse(mouthbodyconnectionfooterLinks);
//   }
// );

// // Verify 2nd column Title
// Then("I should see the {string} in column two in the footer", (String) => {
//   demo.dentalservices(String);
// });

// // Verify the links in the list
// // And(
// //   "The DENTAL SERVICES column should have the following links:",
// //   (dataTable) => {
// //     demo.footerColumnLinks(dataTable, detnalservicesfooter);
// //   }
// // );

// // // Click on the links
// // When("I click on the {string} link in the DENTAL SERVICES column", (link) => {
// //   demo.clickLink(link, detnalservicesfooter);
// // });

// // Verify the response 200
// Then(
//   "Verify the status code should be the 200 for each link in DENTAL SERVICES Column",
//   () => {
//     demo.BttnResponse(detnalservicesfooterLinks);
//   }
// );

// // Verify 3rd column Title
// Then("I should see the {string} in column three in the footer", (String) => {
//   demo.paymentoption(String);
// });

// // Verify the links in the list
// // And(
// //   "The PAYMENT OPTIONS column should have the following links:",
// //   (dataTable) => {
// //     demo.footerColumnLinks(dataTable, paymentoptionsfooter);
// //   }
// // );

// // // Click on the links
// // When("I click on the {string} link in the PAYMENT OPTIONS column", (link) => {
// //   demo.clickLink(link, paymentoptionsfooter);
// // });

// // Verify the response 200
// Then(
//   "Verify the status code should be the 200 for each link in PAYMENT OPTIONS Column",
//   () => {
//     demo.BttnResponse(paymentoptionsfooterLinks);
//   }
// );

// // Verify 4th column Title
// Then("I should see the {string} in column four in the footer", (String) => {
//   demo.howwegive(String);
// });

// // Verify the links in the list
// // And("The HOW WE GIVE column should have the following links:", (dataTable) => {
// //   demo.footerColumnLinks(dataTable, howwegivefooter);
// // });

// // // Click on the links
// // When("I click on the {string} link in the HOW WE GIVE column", (link) => {
// //   demo.clickLink(link, howwegivefooter);
// // });

// // Verify the response 200
// Then(
//   "Verify the status code should be the 200 for each link in HOW WE GIVE Column",
//   () => {
//     demo.BttnResponse(howwegivefooterLinks);
//   }
// );

// // Verify 5th column Title
// Then("I should see the {string} in column five in the footer", (String) => {
//   demo.about(String);
// });

// // Verify the links in the list
// // And("The ABOUT column should have the following links:", (dataTable) => {
// //   demo.footerColumnLinks(dataTable, aboutfooter);
// // });

// // // Click on the links
// // When("I click on the {string} link in the ABOUT column", (link) => {
// //   demo.clickLink(link, aboutfooter);
// // });

// // Verify the response 200
// Then(
//   "Verify the status code should be the 200 for each link in ABOUT Column",
//   () => {
//     demo.BttnResponse(aboutfooterLinks);
//   }
// );

// // Verify the legal links in the footer

// Then("I should see the legal texts in the footer", () => {
//   demo.footerLegalLinks(legalfooter);
// });

// // Then("I should see the following legal texts", (dataTable) => {
// //   demo.footerLegalLinks(dataTable, legalfooter);
// // });

// // And("I click on the links in the footer",() =>
// // {
// // demo.clickLegalLinks(legalFooterLinks);
// // });

// // And("I click on the {string} link in the footer", (Text) => {
// //   demo.clickLegalLinks(Text, legalfooter);
// // });

// Then("Verify the status code should be the 200 for each link", () => {
//   demo.BttnResponse(legalFooterLinks);
// });

// // verify social media icons and links
// Then("I should see following social media icons", (dataTable) => {
//   demo.socialMediaLinks(dataTable, socialMediaIcons);
// });

// And("I click on each social media icon {string}", (link) => {
//   demo.clickSocialMediaIcons(link, socialMediaIcons);
// });

// Then(
//   "I should be redirected to the correct social media URL {string} for each icon",
//   (currenturl) => {
//     demo.urlRedirection(currenturl);
//   }
// );

// // verify 1-800 smilegen link
// Then("I should see the {string} link", (smilegenLink) => {
//   demo.smilegenlink(smilegenLink, smilegenlinkFooter);
// });

// And("the link should have a valid href attribute {string}", (hrefValue) => {
//   demo.smilegenhref(smilegenlinkFooter, hrefValue);
// });

// And(
//   "the link should have the target attribute set to {string}",
//   (targetValue) => {
//     demo.smilegenTargetFooter(smilegenlinkFooter, targetValue);
//   }
// );

// Then("Verify the paragraph and font family", () => {
//   demo.footerParagraph();
// });
