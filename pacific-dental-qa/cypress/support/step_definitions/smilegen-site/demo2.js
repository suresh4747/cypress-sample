// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// const { Demo2 } = require("../../page/smilegen-site/demo2");

// const demo2 = new Demo2();
// // css locators
// var mouthbodyconnectionfooter = ".cmp-footer__column:nth-of-type(1)";
// var mouthbodyconnectionfooterLinks =
//   ".cmp-footer__column:nth-of-type(1) .list a";
// var detnalservicesfooter = ".cmp-footer__column:nth-of-type(2)";
// var detnalservicesfooterLinks = ".cmp-footer__column:nth-of-type(2) .list a";
// var paymentoptionsfooter = ".cmp-footer__column:nth-of-type(3)";
// var paymentoptionsfooterLinks = ".cmp-footer__column:nth-of-type(3) .list a";
// var howwegivefooter = ".cmp-footer__column:nth-of-type(4)";
// var howwegivefooterLinks = ".cmp-footer__column:nth-of-type(4) .list a";
// var aboutfooter = ".cmp-footer__column:nth-of-type(5)";
// var aboutfooterLinks = ".cmp-footer__column:nth-of-type(5) .list a";
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
// var mouthBodyCategories = ".cmp-header__product-items-column";
// var mouthBodyResources = ".cmp-header__product-items-column";
// var dentalServices = "#list-eb0f853cbb .cmp-list__item-title";
// var dentalConcerns = "#list-0514a2523f .cmp-list__item-title";
// var paymentOptions = "#list-14c1eedd23 .cmp-list__item-title";
// var giveNational = "#list-18501800d1 .cmp-list__item-title";
// var givePrograms = "#list-9ee306c8d6 .cmp-list__item-title";
// var mouthBodyResponse = ".cmp-header__product-items-column .list a";
// var dentalResponse = "*[id='container-9a2f387f7a'] .list a";
// var paymentResponse = "*[id='container-446c140148'] .list a";
// var howwegiveResponse = "*[id='container-68e819cdeb'] .list a";
// var downloadFreeBook = ".cmp-button--secondary .cmp-button";
// var mouthbodyBttnOne = "#teaser-bcfd7781d0-cta-69481710c0";
// var mouthbodyBttnTwo = "#teaser-e3db3a3821-cta-d11dada25a";
// var paymentOptionsBttnOne = "#teaser-e219baf17b-cta-d897f2a38d";
// var paymentOptionsBttnTwo = "#teaser-4b2bd91c34-cta-4b7f191980";
// var howwegiveBttnOne = "#teaser-21a30d12b8-cta-a175eda0fb";
// var howwegiveBttnTwo = "#button-34c74edbb8";
// var secondarynavBar = ".cmp-navigation__item-link";
// var mouthbodyImageone = ".cmp-header__product-items-column .cmp-teaser__image";
// var mouthbodyImagetwo = "#teaser-e3db3a3821-image";
// var mouthbodyDescOne =
//   ".cmp-header__product-items-column .cmp-teaser__description";
// var mouthbodyDescTwo = "#teaser-e3db3a3821 .cmp-teaser__description";
// var mouthbodyBttnOne = ".cmp-header__product-items-column .cmp-button";
// var mouthBodyPrimaryBttn = ".cmp-button--primary .cmp-button";
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
// var paymentOptionsBttnThree = "#button-79582d2f98";
// var giveNationalDark = "#list-ba34b0a5ae .cmp-list__item-title";
// var giveProgramsDark = "#list-0129f32aeb .cmp-list__item-title";
// var howwegiveImage = "#teaser-21a30d12b8-image";
// var howwegiveDesc = "#teaser-21a30d12b8 .cmp-teaser__description";
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
//   ".swiper-wrapper div.swiper-slide:nth-child(2) .cmp-text p span";
// var thirdQuoteText =
//   ".swiper-wrapper div.swiper-slide:nth-child(3) .cmp-text p span";
// var quoteComponentTextParagrapgh = ".quote-carousel .cmp-text p";
// var quoteComponentTextFont = ".quote-carousel .cmp-text p span";
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
// var factCardTitleComponent = ".dynamiclisting-wrapper .cmp-title__text";
// var factCardDescComponent = ".dynamiclisting-wrapper .cmp-text p";
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
// var magazineCarouselDesc = ".magazine-carousel .cmp-teaser__title";
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
// // var OfficeSchedulerDesc = ".cmp-newsletter--content .cmp-text p";
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
// var officeProviderBttn = ".cmp-location__info .cmp-button";
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
// var mapComponentsDetails = ".cmp_interactiveMap__details .list-item";
// var mapComponentsDetailsURL = ".cmp_interactiveMap__details .list-item a";
// var myChartTitleTextCSS = ".cmp-teaser--chart-portal h1.cmp-teaser__title";
// var myChartSignInBoxCSS = ".cmp-teaser--chart-portal .embed";
// var mapComponentTitle = ".cmp-interactivemap__title h3.cmp-title__text";
// var mapComponentDesc = ".cmp-interactivemap__description p";

// // navigate to page url
// Given("I am on the smilegen homepage", () => {
//   demo2.homepagewebsite();
// });

// When("I navigate to the {string}", (url) => {
//   demo2.webPageNavigation(url);
// });

// // verify smilegen header logo
// When("I click on the smilegen logo", () => {
//   demo2.smilegenLogoHeader(smilegenlogoHeader);
// });

// Then("I should be navigated to the homepage in the same tab", () => {
//   demo2.smilegenLogoHeaderNav();
// });

// // verify header navigation
// Then("I should see the {string} link in header", (String) => {
//   demo2.smilegenlink(String, smilegenlinkHeader);
// });

// And(
//   "the link in header should have a valid href attribute {string}",
//   (hrefValue) => {
//     demo2.smilegenhrefHeader(smilegenHeaderHref, hrefValue);
//   }
// );

// And(
//   "the link in header should have the target attribute set to {string}",
//   (targetValue) => {
//     demo2.smilegenTargetHeader(smilegenHeaderHref, targetValue);
//   }
// );

// // verify find a dentist CTA in smilegen header
// Then("I should see the {string} button", (String) => {
//   demo2.findDentistbttn(String);
// });

// And("the color of the button should be correct", () => {
//   demo2.dentistnttnColor();
// });

// When("I click on the {string} button", (String) => {
//   demo2.clickDentistbttn(String);
// });

// Then(
//   "I should be navigated to the specific page in the same tab",
//   (dataTable) => {
//     demo2.redirectionDentistbttn(dataTable);
//   }
// );

// And("the HTTP response status code should be 200", () => {
//   demo2.dentisturlRedirection();
// });

// // verify smilegen header search icon
// Then("I should see the search icon in header", () => {
//   demo2.searchIconHeader();
// });

// When(
//   "I scroll down the page {string} a little then header should become sticky",
//   (url) => {
//     demo2.webPageNavigation(url);
//     demo2.scrollbyPixel400();
//     demo2.navbarSticky();
//   }
// );

// And(
//   "I scroll down the page a little more then header should reamin sticky",
//   () => {
//     demo2.scrollbyPixel700();
//     demo2.navbarSticky();
//   }
// );

// When("I scroll down the page {string} and then scroll back up", (url) => {
//   demo2.webPageNavigation(url);
//   demo2.scrolltoTop();
// });

// Then("The header should return to its normal state", () => {
//   demo2.navbarnotSticky();
// });

// And(
//   "I click on the {string} navigation to see all the links and flyer is open",
//   (string) => {
//     demo2.secondayBar(string);
//   }
// );

// Then(
//   "I should see two columns inside the flyer: {string} and {string}",
//   (string1, string2) => {
//     demo2.secondayBarOptions(string1, string2);
//   }
// );

// Then(
//   "I should see the following categories in the CATEGORIES column:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, mouthBodyCategories, 0);
//   }
// );

// Then(
//   "I should see the following resources in the RESOURCES column:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, mouthBodyResources, 1);
//   }
// );

// And(
//   "Status code should be 200 of all the links under CATEGORIES and RESOURCES column",
//   () => {
//     demo2.urlResponse(mouthBodyCategories, 0);
//     demo2.urlResponse(mouthBodyResources, 1);
//   }
// );

// Then(
//   "I should see the following services in the POPULAR SERVICES column:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, dentalServices, 2);
//   }
// );

// Then(
//   "I should see the following concerns in the COMMON CONCERNS column:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, dentalConcerns, 3);
//   }
// );

// And(
//   "Status code should be 200 of all the links under POPULAR SERVICES and COMMON CONCERNS column",
//   () => {
//     demo2.urlResponse(dentalServices, 2);
//     demo2.urlResponse(dentalConcerns, 3);
//   }
// );

// Then(
//   "I should see the following services in the Payment Options flyer:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, paymentOptions);
//   }
// );

// And(
//   "Status code should be 200 of all the links under Payment Options flyer",
//   () => {
//     demo2.urlResponse(paymentResponse);
//   }
// );

// Then(
//   "I should see the following partners in the NATIONAL PARTNERS column:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, giveNational);
//   }
// );

// Then(
//   "I should see the following programs in the PROGRAMS column:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, givePrograms);
//   }
// );

// And(
//   "Status code should be 200 of all the links under NATIONAL PARTNERS and PROGRAMS column",
//   () => {
//     demo2.urlResponse(howwegiveResponse);
//   }
// );

// Then("Verify the paragraph and font family", () => {
//   demo2.footerParagraph();
// });

// And("Background colour of header is transparent", () => {
//   demo2.transparentCllr();
// });

// Then("Clicking on the button opens modal popup", () => {
//   demo2.bttnModalPopup(downloadFreeBook);
// });

// Then("That button is secondary category with boundary", () => {
//   demo2.bttnBorder(downloadFreeBook);
// });

// And("The phone number attribute {string}", (hrefValue) => {
//   demo2.smilegenlinkhref(smilegenHeader, hrefValue);
// });

// Then("verify the header nav items colour is white", () => {
//   demo2.menuColours();
// });

// And("verify header is Poppins font with size", () => {
//   demo2.menuFontSize(secondarynavBar);
// });

// Then("Images should be present on mouth body connection menu", () => {
//   demo2.mouthBodyImages(mouthbodyImageone, 0, 1);
// });

// And(
//   "Verify the presence of description text on mouth body connection menu",
//   () => {
//     demo2.mouthBodyDescription(mouthbodyDescOne, 0, 1);
//   }
// );

// And("Verify the CTA links present on mouth body connection menu", () => {
//   demo2.mouthBodyButton(mouthbodyBttnOne, mouthBodyPrimaryBttn, 0, 1, 0);
// });

// And(
//   "Clicking on CTA redirected to 200 page on mouth body connection menu",
//   () => {
//     demo2.BttnResponse200(mouthBodyPrimaryBttn, 0);
//     demo2.BttnResponse200(mouthbodyBttnOne, 0);
//     demo2.BttnResponse200(mouthbodyBttnOne, 1);
//   }
// );

// Then("Images should be present on dental services menu", () => {
//   demo2.dentalservicesImages(mouthbodyImageone, 2);
// });

// And("Verify the presence of description text on dental services menu", () => {
//   demo2.dentalservicesDescription(dentalservicesDesc);
// });

// And("Verify the CTA links present on dental services menu", () => {
//   demo2.dentalservicesButton(dentalservicesBttnOne, dentalservicesBttnTwo);
// });

// And("Clicking on CTA redirected to 200 page on dental services menu", () => {
//   demo2.urlResponse(dentalservicesBttnOne, dentalservicesBttnTwo);
// });

// Then("Images should be present on payment options menu", () => {
//   demo2.paymentOptionsImages(paymentOptionsImageOne, paymentOptionsImageTwo);
// });

// And("Verify the presence of description text on payment options menu", () => {
//   demo2.paymentOptionsDescription(paymentOptionsDescOne, paymentOptionsDescTwo);
// });

// And("Verify the CTA links present on payment options menu", () => {
//   demo2.paymentOptionsButton(
//     paymentOptionsBttnOne,
//     paymentOptionsBttnTwo,
//     paymentOptionsBttnThree
//   );
// });

// And("Clicking on CTA redirected to 200 page on payment options menu", () => {
//   demo2.urlResponse(paymentOptionsBttnOne);
//   demo2.urlResponse(paymentOptionsBttnTwo);
//   demo2.urlResponse(paymentOptionsBttnThree);
// });

// Then("Images should be present on how we give menu", () => {
//   demo2.howwegiveImages(howwegiveImage);
// });

// And("Verify the presence of description text on how we give menu", () => {
//   demo2.howwegiveDescription(howwegiveDesc);
// });

// And("Verify the CTA links present on how we give menu", () => {
//   demo2.howwegiveButton(howwegiveBttnOne, howwegiveBttnTwo);
// });

// And("Clicking on CTA redirected to 200 page on how we give menu", () => {
//   demo2.urlResponse(howwegiveBttnOne);
//   demo2.urlResponse(howwegiveBttnTwo);
// });

// Then("verify the header nav items colour is black", () => {
//   demo2.darkTextNavBar();
// });

// And("verify header is in Poppins font with size", () => {
//   demo2.menuFontSize(secondarynavBar);
// });

// Then("That button is primary category", () => {
//   demo2.darkTextBttn();
// });

// Then(
//   "I should see the following categories in the CATEGORIES column for Dark Text variation:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, mouthBodyCategoriesDark, 0);
//   }
// );

// Then(
//   "I should see the following resources in the RESOURCES column for Dark Text variation:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, mouthBodyResourcesDark, 1);
//   }
// );

// Then(
//   "I should see the following services in the POPULAR SERVICES column for Dark Text variation:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, dentalServicesDark);
//   }
// );

// Then(
//   "I should see the following concerns in the COMMON CONCERNS column for Dark Text variation:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, dentalConcernsDark);
//   }
// );

// Then(
//   "I should see the following services in the Payment Options flyer for Dark Text variation:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, paymentOptionsDark);
//   }
// );

// Then(
//   "I should see the following partners in the NATIONAL PARTNERS column for Dark Text variation:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, giveNationalDark);
//   }
// );

// Then(
//   "I should see the following programs in the PROGRAMS column for Dark Text variation:",
//   (dataTable) => {
//     demo2.getLinks(dataTable, giveProgramsDark);
//   }
// );

// And(
//   "Status code should be 200 of all the links under CATEGORIES and RESOURCES column for Dark Text variation",
//   () => {
//     demo2.urlResponse(mouthBodyResponseDark);
//   }
// );

// And(
//   "Status code should be 200 of all the links under POPULAR SERVICES and COMMON CONCERNS column for Dark Text variation",
//   () => {
//     demo2.urlResponse(dentalResponseDark);
//   }
// );

// And(
//   "Status code should be 200 of all the links under Payment Options flyer for Dark Text variation",
//   () => {
//     demo2.urlResponse(paymentResponseDark);
//   }
// );

// And(
//   "Status code should be 200 of all the links under NATIONAL PARTNERS and PROGRAMS column for Dark Text variation",
//   () => {
//     demo2.urlResponse(howwegiveResponseDark);
//   }
// );

// Then(
//   "Images should be present on mouth body connection menu for Dark Text variation",
//   () => {
//     demo2.mouthBodyImages(mouthbodyImageoneDark, mouthbodyImagetwoDark);
//   }
// );

// And(
//   "Verify the presence of description text on mouth body connection menu for Dark Text variation",
//   () => {
//     demo2.mouthBodyDescription(mouthbodyDescOneDark, mouthbodyDescTwoDark);
//   }
// );

// And(
//   "Verify the CTA links present on mouth body connection menu for Dark Text variation",
//   () => {
//     demo2.mouthBodyButton(
//       mouthbodyBttnOneDark,
//       mouthbodyBttnTwoDark,
//       mouthbodyBttnThreeDark
//     );
//   }
// );

// And(
//   "Clicking on CTA redirected to 200 page on mouth body connection menu for Dark Text variation",
//   () => {
//     demo2.urlResponse(mouthbodyBttnOneDark);
//     demo2.urlResponse(mouthbodyBttnTwoDark);
//     demo2.urlResponse(mouthbodyBttnThreeDark);
//   }
// );

// Then(
//   "Images should be present on dental services menu for Dark Text variation",
//   () => {
//     demo2.dentalservicesImages(dentalservicesImageDark);
//   }
// );

// And(
//   "Verify the presence of description text on dental services menu for Dark Text variation",
//   () => {
//     demo2.dentalservicesDescription(dentalservicesDescDark);
//   }
// );

// And(
//   "Verify the CTA links present on dental services menu for Dark Text variation",
//   () => {
//     demo2.dentalservicesButton(
//       dentalservicesBttnOneDark,
//       dentalservicesBttnTwoDark
//     );
//   }
// );

// And(
//   "Clicking on CTA redirected to 200 page on dental services menu for Dark Text variation",
//   () => {
//     demo2.urlResponse(dentalservicesBttnOneDark);
//     demo2.urlResponse(dentalservicesBttnTwoDark);
//   }
// );

// Then(
//   "Images should be present on payment options menu for Dark Text variation",
//   () => {
//     demo2.paymentOptionsImages(
//       paymentOptionsImageOneDark,
//       paymentOptionsImageTwoDark
//     );
//   }
// );

// And(
//   "Verify the presence of description text on payment options menu for Dark Text variation",
//   () => {
//     demo2.paymentOptionsDescription(
//       paymentOptionsDescOneDark,
//       paymentOptionsDescTwoDark
//     );
//   }
// );

// And(
//   "Verify the CTA links present on payment options menu for Dark Text variation",
//   () => {
//     demo2.paymentOptionsButton(
//       paymentOptionsBttnOneDark,
//       paymentOptionsBttnTwoDark,
//       paymentOptionsBttnThreeDark
//     );
//   }
// );

// And(
//   "Clicking on CTA redirected to 200 page on payment options menu for Dark Text variation",
//   () => {
//     demo2.urlResponse(paymentOptionsBttnOneDark);
//     demo2.urlResponse(paymentOptionsBttnTwoDark);
//     demo2.urlResponse(paymentOptionsBttnThreeDark);
//   }
// );

// Then(
//   "Images should be present on how we give menu for Dark Text variation",
//   () => {
//     demo2.howwegiveImages(howwegiveImageDark);
//   }
// );

// And(
//   "Verify the presence of description text on how we give menu for Dark Text variation",
//   () => {
//     demo2.howwegiveDescription(howwegiveDescDark);
//   }
// );

// And(
//   "Verify the CTA links present on how we give menu for Dark Text variation",
//   () => {
//     demo2.howwegiveButton(howwegiveBttnOneDark, howwegiveBttnTwoDark);
//   }
// );

// And(
//   "Clicking on CTA redirected to 200 page on how we give menu for Dark Text variation",
//   () => {
//     demo2.urlResponse(howwegiveBttnOneDark);
//     demo2.urlResponse(howwegiveBttnTwoDark);
//   }
// );

// And("The background colour of header is white", () => {
//   demo2.solidNavBarColor();
// });

// And("Verify menu options in the nav bar", (dataTable) => {
//   demo2.solidNavBarOptions(dataTable);
// });

// Then("the search icon should be present on primary Nav", () => {
//   demo2.searchPrimNav();
// });

// And("the user clicks on the dropdown", () => {
//   demo2.searchIconDropdown(searchDropPrimNav);
// });

// Then("the search dropdown should appear with {string}", (tags) => {
//   demo2.searchDropdownVisible(PrimNavsearchDrop, tags);
// });

// When(
//   "user selects {string} and user performs a search {string} then URL should contain selected tag and searched text in URL",
//   (tags, string) => {
//     demo2.searchDropdownValue(
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
//     demo2.titleTextColour();
//   }
// );

// And("I verify the subtext font and size", () => {
//   demo2.subTextCSS();
// });

// And("I verify the dropdown with yellow background", () => {
//   demo2.searchDropdownColor();
// });

// Then("the Search dropdown should appear with {string}", (tags) => {
//   demo2.searchDropdownVisible(searchDropHeroBanner, tags);
// });

// And("I verify the search field with ghost text", () => {
//   demo2.homepagePlaceholders();
// });

// When(
//   "the user selects {string} and user performs a Search {string} then URL should contain selected tag and searched text in URL",
//   (tags, string) => {
//     demo2.searchDropdownValue(
//       searchDropHeroBanner,
//       searchTextFieldHeroBanner,
//       SearchIconHeroBanner,
//       tags,
//       string
//     );
//   }
// );

// Then("I verify the heading text and UI", () => {
//   demo2.verifyTitleTextCSS();
// });

// And("I verify the subheading with price text and UI", () => {
//   demo2.verifySubtitleTextCSS();
// });

// And("I verify the paragraph text and UI", () => {
//   demo2.verifyParaTextCSS();
// });

// Then("I verify the button UI", () => {
//   demo2.verifyBttnTextCSS();
// });

// And(
//   "I click the button that navigates to a particular page with a 200 response",
//   () => {
//     demo2.verifyBttnRedirection(buttonLandingPage);
//   }
// );

// And("I verify the title UI", () => {
//   demo2.titleTextCSS(titleText);
// });

// And("there should be no background image", () => {
//   demo2.verifyNobackgrndImage();
// });

// And("there should be no subtext on the page", () => {
//   demo2.verifySubTextImage();
// });

// And("I verify the subtext UI on the page", () => {
//   demo2.SubTitleTextCSS();
// });

// Then("there should be a background image on the page", () => {
//   demo2.verifybackgrndImage();
// });

// And("I verify the text UI", () => {
//   demo2.titleTextCSS(bgImagebannerTitle);
// });

// And("I verify the text with yellow last word", () => {
//   demo2.textYellowColor();
// });

// And("I verify the text UI on Category Variation", () => {
//   demo2.titleTextCSSCategory();
// });

// And("I verify the text presence on the page", () => {
//   demo2.landingpageWTText();
// });

// And("I verify the text color is white on the page", () => {
//   demo2.landingpageWhite();
// });

// // Title
// And(
//   "verify H1 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo2.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H2 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo2.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H3 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo2.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H4 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo2.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H5 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo2.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H6 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     demo2.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// // Button
// And(
//   "verify the primary buttton with font family, size, text color and background color",
//   () => {
//     demo2.primaryBttnCSS();
//   }
// );

// And(
//   "verify the secondary button state dark with font family, size, text color and border",
//   () => {
//     demo2.secondaryBttnDarkCSS();
//   }
// );

// And(
//   "verify the secondary button state white with font family, size, text color and border",
//   () => {
//     demo2.secondaryBttnWhiteCSS();
//   }
// );

// And(
//   "verify the underline dark button with font family, size, text color and underline color",
//   () => {
//     demo2.underlineBttnDarkCSS();
//   }
// );

// And(
//   "verify the underline white button with font family, size, text color and underline color",
//   () => {
//     demo2.underlineBttnWhiteCSS();
//   }
// );

// //card component
// When("the user views the text cards", () => {
//   demo2.textcardwithCTA();
// });

// And(
//   "each card with CTA should have a Title, Description and CTA button",
//   () => {
//     demo2.cardElements();
//   }
// );
// And("verify the CTA response is 200", () => {
//   demo2.CTAresponse();
// });

// And("the background color of each text card should be white", () => {
//   demo2.cardBackground();
// });

// And("the user views the text cards without CTA", () => {
//   demo2.cardTextwithoutCTA();
// });

// And("each card without CTA should have a Title and Description", () => {
//   demo2.cardTextTitleDesc();
// });

// And(
//   "the background color of each Text card without CTA should be white",
//   () => {
//     demo2.cardTextWObackgroundcolor();
//   }
// );

// And("the user views the fact card", () => {
//   demo2.factCardsComponent();
// });

// Then("the fact card should have a yellow background", () => {
//   demo2.factCardBackground();
// });

// And("the fact card should display a Title", () => {
//   demo2.factCardsTitle();
// });

// And("the fact card should display a Subtitle", () => {
//   demo2.factCardsDesc();
// });

// And("title, subtitle should be center aligned", () => {
//   demo2.factCardsCenter();
// });

// And("the user views the cost cards", () => {
//   demo2.costCardComponenet();
// });

// And("each card should have a Title", () => {
//   demo2.costTitle();
// });

// And("each card should have a Cost displayed", () => {
//   demo2.costCardCost();
// });

// And("each card should have a Date displayed", () => {
//   demo2.costCardDate();
// });

// And("each card should have a CTA link, verify the CTA response is 200", () => {
//   demo2.costCardCTABttn();
// });

// And("the background color of each cost card should be white", () => {
//   demo2.costCardWhiteColour();
// });

// And("the user views the tags cards", () => {
//   demo2.tagsCardsComponent();
// });

// And("each tags card should have a Title", () => {
//   demo2.tagsCardsTitle();
// });

// And("each tags card should have a Description", () => {
//   demo2.tagsCardsDesc();
// });

// And("each card should have Tags", () => {
//   demo2.tagsCardBttn();
// });

// And(
//   "if a specific tag is present with a CTA, verify the CTA response is 200",
//   () => {
//     demo2.BttnResponse(tagCardTagsAnchor);
//   }
// );

// When("I verify that the newsletter component is present", () => {
//   demo2.newsLetterPresent();
// });

// And("I verify the subscribe text box", () => {
//   demo2.newsLetterTextbox();
// });

// And(
//   "I enter a valid email id {string} in the subscribe text box",
//   (validEmail) => {
//     demo2.newsLetterTextboxValid(validEmail);
//   }
// );

// And("I click on the subscribe button", () => {
//   demo2.newsLetterSubscribeBttn();
// });

// Then("I should see a confirmation message", () => {
//   demo2.newsLetterConfirmation();
// });

// And("the confirmation message font family should be {string}", (fontFamily) => {
//   demo2.newsLetterConfirmationFontFamily(fontFamily);
// });

// And("the confirmation message color should be black {string}", (fontColor) => {
//   demo2.newsLetterConfirmationFontColor(fontColor);
// });

// When(
//   "I enter an invalid email id {string} in the subscribe text box",
//   (invalidEmail) => {
//     demo2.newsLetterTextboxInvalid(invalidEmail);
//   }
// );

// Then("I should see a failure message", () => {
//   demo2.newsLetterFailure();
// });

// And("the failure message font family should be {string}", (fontFamily) => {
//   demo2.newsLetterFailureFontFamily(fontFamily);
// });

// And("the failure message color should be red {string}", (fontColor) => {
//   demo2.newsLetterFailureFontColor(fontColor);
// });

// When("I locate the newsletter component title element", () => {
//   demo2.newsLetterTitleVisible();
// });
// And("the title should be of h3 style", () => {
//   demo2.newsLetterTitleHeading();
// });

// And("the title font family should be {string}", (fontFamily) => {
//   demo2.newsLetterTitleFontFamily(fontFamily);
// });

// And("the body text font family should be {string}", (fontFamily) => {
//   demo2.newsLetterBodyFontFamily(fontFamily);
// });

// And("the subscribe text font family should be {string}", (fontFamily) => {
//   demo2.newsLetterSubscribeFontFamily(fontFamily);
// });

// //TEASER
// Then("verify the teaser with an image on the page", () => {
//   demo2.teaserhalfImageComponent();
// });

// And("verify the teaser has a heading and subtext", () => {
//   demo2.teaserTitleAndSubextVisible();
// });

// And(
//   "the title should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.teaserTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the subtext should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.teaserSubtextCSS(fontFamily, fontSize);
//   }
// );

// And("verify the teaser has a {string} link", (seeMore) => {
//   demo2.teaserseemoreLink(seeMore);
// });

// When("the user clicks on the {string} link", (seeMore) => {
//   demo2.clickSeeMoreLess(seeMore);
// });

// Then("the teaser expands to show more description", () => {
//   demo2.seeMoreTitleDesc();
// });

// And("the teaser displays a {string} link", (seeLess) => {
//   demo2.teaserseeLessLink(seeLess);
// });

// When("the user click on the {string} link", (seeLess) => {
//   demo2.clickSeeMoreLess(seeLess);
// });

// Then(
//   "the teaser collapses to hide the additional description and {string} link should be visible",
//   (seeMore) => {
//     demo2.teaserSeeLessCollapse(seeMore);
//   }
// );

// And("verify teaser with half left image on the page", () => {
//   demo2.teaserleftimageComponent();
// });

// And("verify Teaser- left image is present", () => {
//   demo2.teaserleftimageVisible();
// });

// And("title and description is present on right side", () => {
//   demo2.teaserleftImageTitleDesc();
// });

// And(
//   "title should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.teaserleftImageTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.teaserleftImageDescCSS(fontFamily, fontSize);
//   }
// );

// And("there is CTA link at bottom", () => {
//   demo2.teaserleftimageBttnVisible();
// });

// And(
//   "CTA text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.teaserleftimageBttnCSS(fontFamily, fontSize);
//   }
// );

// And("clicking on CTA link navigates to 200 page", () => {
//   demo2.BttnResponse(leftimageBttn);
// });

// And("verify teaser with half right image on the page", () => {
//   demo2.teaserrightimageComponent();
// });

// And("verify Teaser - right image is present on the page", () => {
//   demo2.teaserrightimageVisible();
// });

// And("title and description is present on left side", () => {
//   demo2.teaserrightImageTitleDesc();
// });

// And(
//   "title should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.teaserrightImageTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "description should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.teaserrightImageDescCSS(fontFamily, fontSize);
//   }
// );

// And("there is CTA link at the bottom", () => {
//   demo2.teaserrightimageBttnVisible();
// });

// And(
//   "CTA text should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.teaserleftimageBttnCSS(fontFamily, fontSize);
//   }
// );

// And("clicking on CTA link navigates to the 200 page", () => {
//   demo2.BttnResponse(rightimageBttn);
// });

// And("verify teaser with half image without CTA on the page", () => {
//   demo2.teaserWithoutCTA();
// });

// And("verify teaser image is present", () => {
//   demo2.teaserWithoutCTAImage();
// });

// And("verify title is present on the page", () => {
//   demo2.teaserWithoutCTATitle();
// });

// And("verify description is present", () => {
//   demo2.teaserWithoutCTADesc();
// });

// And(
//   "title should be in the {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.teaserWithoutCTATitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.teaserWithoutCTADescCSS(fontFamily, fontSize);
//   }
// );

// And("there is no CTA link at bottom", () => {
//   demo2.teaserWithoutCTAvisible();
// });

// // STAGGERED COMPONENT

// Then("the staggered card should be present", () => {
//   demo2.staggeredComponentVisible();
// });

// And("the title should be present in the staggered card component", () => {
//   demo2.staggeredMainTitleVisible();
// });

// And("the description should be present in the staggered card component", () => {
//   demo2.staggeredMainDescVisible();
// });

// And(
//   "title should be in the {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.staggeredMainTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in the {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.staggeredMainDescCSS(fontFamily, fontSize);
//   }
// );

// And("the CTA link should be present in the staggered card component", () => {
//   demo2.staggeredMainBttnVisible();
// });

// And(
//   "CTA text in the staggered card component should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.staggeredMainBttnCSS(fontFamily, fontSize);
//   }
// );

// And("verify CTA response is 200", () => {
//   demo2.BttnResponse(staggeredmainBttn);
// });

// And("the background image should be present", () => {
//   demo2.staggeredComponentBckImage();
// });

// And("there should be four non-clickable cards", () => {
//   demo2.BttnNotClickable(staggeredmainCardTiles);
// });

// And("each non-clickable card should have a image and title", () => {
//   demo2.staggeredcardImageTitleVisible();
// });

// And(
//   "Card title should be {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.staggeredTitleFont(fontFamily, fontSize);
//   }
// );

// And(
//   "Card description should be {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.staggeredDescFont(fontFamily, fontSize);
//   }
// );

// And(
//   "staggered card component title is {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.staggeredcardTitleFont(fontFamily, fontSize);
//   }
// );

// And(
//   "staggered card component description is {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.staggeredMainDescFont(fontFamily, fontSize);
//   }
// );

// And("card description should be {string}", (fontFamily) => {
//   demo2.staggeredMainDescFont(fontFamily);
// });

// And(
//   "cards description should be {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.staggeredCardDescFont(fontFamily, fontSize);
//   }
// );

// Then("the staggered card with reviews should be present", () => {
//   demo2.staggeredComponentVisible();
// });

// Then("there should be four non-clickable cards with reviews", () => {
//   demo2.BttnNotClickable(staggeredReviewcard);
// });

// And(
//   "each non-clickable card with a review should have a description, review star, and author name",
//   () => {
//     demo2.staggeredReviewDescReviewAuthor();
//   }
// );

// And(
//   "the author name should be in the {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.staggeredReviewAuthorCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in the {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.staggeredReviewDescCSS(fontFamily, fontSize);
//   }
// );

// And("each card should not have an image", () => {
//   demo2.staggeredReviewImage();
// });

// // Quote Component
// Then("the quote component is loaded on the page", () => {
//   demo2.quoteComponentVisible();
// });

// And("the carousel should display with a maximum of 1 quote", () => {
//   demo2.quoteComponentTextSize();
// });

// And(
//   "the single quote should have quote text, title and author are displayed on the quote",
//   () => {
//     demo2.quoteNameTitleAuthor(quoteComponentTextParagrapgh);
//   }
// );

// And(
//   "the quote title should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.quoteComponentTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the quote text should have font family {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.quoteComponentTextCSS(quoteComponentTextFont, fontFamily, fontSize);
//   }
// );

// And(
//   "the quote author text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.quoteComponentAuthorCSS(fontFamily, fontSize);
//   }
// );

// And("the carousel should display with a maximum of 3 quotes", () => {
//   demo2.quoteCarouselVisible();
// });

// And(
//   "first dot should be selected by default and quote text, title and author are displayed for first quote",
//   () => {
//     demo2.CarouselDefaultCheck();
//     demo2.quoteNameTitleAuthor(firstQuoteTextParagrapgh);
//   }
// );

// And(
//   "quote text should have font family {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.quoteComponentTextCSS(firstQuoteText, fontFamily, fontSize);
//   }
// );

// And("the carousel dots should appear below the carousel", () => {
//   demo2.CarouselCheck();
// });

// When("the user clicks on the dot for quote 2", () => {
//   demo2.CarouselClick(secondCarousel);
// });

// Then("the carousel should display the second quote", () => {
//   demo2.CarouselDisplay(secondDefaultCarousel);
// });

// And(
//   "the Three quote component should have quote text, title and author are displayed on the quote",
//   () => {
//     demo2.quoteNameTitleAuthor(secondQuoteTextParagrapgh);
//   }
// );

// And(
//   "the quote text should have the font family {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.quoteComponentTextCSS(secondQuoteText, fontFamily, fontSize);
//   }
// );

// When("the user clicks on the dot for quote 3", () => {
//   demo2.CarouselClick(thirdCarousel);
// });

// Then("the carousel should display the third quote", () => {
//   demo2.CarouselDisplay(thirdDefaultCarousel);
// });

// And(
//   "the Three quote component should have quote text, title and author are displayed on quote",
//   () => {
//     demo2.quoteNameTitleAuthor(thirdQuoteTextParagrapgh);
//   }
// );

// And(
//   "quote text should have the font family {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.quoteComponentTextCSS(thirdQuoteText, fontFamily, fontSize);
//   }
// );

// And(
//   "verify that title, text and author are different to check new quote is loaded",
//   () => {
//     demo2.compareText3Quotes();
//   }
// );

// //CostEstimatorComponent
// When("the cost estimator component is loaded", () => {
//   demo2.costEstimatorComponent();
// });

// Then("by default user should see {string} title", (tabName) => {
//   demo2.costEstimatorActive(tabName);
// });

// And(
//   "Routine cleaning tab should contain cost three columns of cost card teaser",
//   () => {
//     demo2.costCardEstimatorComponent();
//   }
// );

// And("Tab has background colour as {string}", (backgroundColor) => {
//   demo2.costEstimatorTabColor(backgroundColor);
// });

// And("each cost card has cost, title and subtext displayed", () => {
//   demo2.costEstimatorCostTitleSubtext();
// });

// And(
//   "the cost text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.costEstimatorCost(fontFamily, fontSize);
//   }
// );

// And(
//   "the title text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.costEstimatorTitle(fontFamily, fontSize);
//   }
// );

// And(
//   "the subtext text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.costEstimatorSubtext(fontFamily, fontSize);
//   }
// );

// When("the user clicks on the right arrow icon", () => {
//   demo2.costEstimatorRightArrowClick();
// });

// Then("the content of {string} should be displayed", (tabName) => {
//   demo2.costEstimatorTabContentCheck(tabName, "1", "3");
// });

// When("the user clicks on the left arrow icon", () => {
//   demo2.costEstimatorLeftArrowClick();
// });

// Then("the content of {string} tab should be displayed", (tabName) => {
//   demo2.costEstimatorTabContentCheck(tabName, "0", "0");
// });

// When("the user clicks on the right arrow icon for 5 times", () => {
//   demo2.costEstimatorRightArrowClickFive();
// });

// Then("user should see {string} as tab name", (tabName) => {
//   demo2.costEstimatorActive(tabName);
// });

// When("user clicks on right arrow one more time", () => {
//   demo2.costEstimatorRightArrowClick();
// });

// When("the user clicks on the left arrow icon for 5 times", () => {
//   demo2.costEstimatorLeftArrowClickFive();
// });

// When("user clicks on left arrow one more time", () => {
//   demo2.costEstimatorLeftArrowClick();
// });

// When("there are {string} tabs authored", (tabSize) => {
//   demo2.TabsAuthoredCostEstimator(tabSize);
// });

// Then("the left and right arrow icons should be hidden", () => {
//   demo2.costEstimatorArrowNotVisible();
// });

// Then("the left and right arrow icons should be visible", () => {
//   demo2.costEstimatorArrowVisible();
// });

// When("user clicks on {string} tab", (tabName) => {
//   demo2.costEstimatorTabClick(tabName);
// });

// // GALLERY COMPONENT
// And("the gallery component is loaded", () => {
//   demo2.galleryComponent();
// });

// And("there are multiple assets in the gallery", () => {
//   demo2.galleryComponmentAssets();
// });

// Then("each asset should have a title or caption displayed", () => {
//   demo2.galleryComponentAssetsTitle();
// });

// And(
//   "the title should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     demo2.galleryComponentAssetsTitleCSS(fontFamily, fontSize);
//   }
// );

// And("the carousel area should have left and right arrow icons", () => {
//   demo2.galleryComponentAssetsArrow();
// });

// And(
//   "Clicking on each image should display same image in larger size,default first image should be enlarged",
//   () => {
//     demo2.galleryImageLarge();
//   }
// );

// And("the user clicks on the right arrow icon in the carousel", () => {
//   demo2.galleryRightArrowClick();
// });

// Then("the carousel should move to the next asset", () => {
//   demo2.galleryNextAssetVisible();
// });

// When("the user clicks on the left arrow icon in the carousel", () => {
//   demo2.galleryLeftArrowClick();
// });

// Then("the carousel should move to the previous asset", () => {
//   demo2.galleryPreviousAssetVisible();
// });

// // BLOG HERO COMPONENT
// And("the blog hero section is loaded", () => {
//   demo2.blogHeroVisible();
// });

// Then("the blog hero should display the category and title", () => {
//   demo2.blogCategoryandTitle();
// });

// And(
//   "the blog hero category is having font family {string} and font size {string}",
//   (fontfamily, fontsize) => {
//     demo2.blogCategoryFont(fontfamily, fontsize);
//   }
// );

// And(
//   "Title text should be in {string} and Font size should be {string} and Font family should be {string}",
//   (heading, fontsize, fontfamily) => {
//     demo2.blogTitlefontstyle(heading, fontsize, fontfamily);
//   }
// );

// Then(
//   "the blog hero should display the Written by text and author name and verify font family, color and size",
//   () => {
//     demo2.blogWrittenAuthorText();
//   }
// );

// Then(
//   "the blog hero should display the Reviewed by text and reviewer name and verify font family, color and size",
//   () => {
//     demo2.blogWrittenReviewerText();
//   }
// );

// Then(
//   "the blog hero should display the published date and verify font family, color and size",
//   () => {
//     demo2.blogDates();
//   }
// );

// Then(
//   "the blog hero should display the updated date and verify font family, color and size",
//   () => {
//     demo2.blogDates();
//   }
// );

// And("image is displayed half of the page", () => {
//   demo2.blogHalfImageVisible();
// });

// And("the Author name should be hyperlinked and check 200 status in URL", () => {
//   demo2.BttnResponse(blogAuthorName);
// });

// And(
//   "the Reviewer name should be hyperlinked and check 200 status in URL",
//   () => {
//     demo2.BttnResponse(blogReviewerName);
//   }
// );

// And(
//   "when no link is authored for Author name and Reviewer name colour of link is blue",
//   () => {
//     demo2.blogAuthorAndReviewerName();
//   }
// );

// // SALESFORCE INTEGRATION EBOOK
// Then(
//   "the title has a font style of {string} and {string}",
//   (fontSize, fontFamily) => {
//     demo2.salesforceTitleCSS(fontSize, fontFamily);
//   }
// );

// And("the image is present", () => {
//   demo2.salesforceImageVisible();
// });

// And(
//   "the description is present with a font style of {string} and {string} size",
//   (fontFamily, fontSize) => {
//     demo2.salesforceDescriptionVisible(fontFamily, fontSize);
//   }
// );

// And("the {string} button is present", (string) => {
//   demo2.salesforceBttnVisible(string);
// });

// When("the user clicks on the {string} button", (string) => {
//   demo2.salesforceBttnClick(string);
// });

// Then(
//   "a modal pop-up opens with the title, description, image, and button",
//   () => {
//     demo2.salesforceModalTitleDescImageBttn();
//   }
// );

// And(
//   "an extra info message in {string} and {string} size is present",
//   (fontFamily, fontSize) => {
//     demo2.salesforceModalExtraInfoVisible(fontFamily, fontSize);
//   }
// );

// And("an input box is present with the default text {string}", (string) => {
//   demo2.salesforceModalTextPlaceholder(string);
// });

// When("the user provides a proper email id {string}", (string) => {
//   demo2.salesforceModalTextFieldEmail(string);
// });

// Then(
//   "a success pop up with  message {string} is displayed along with image",
//   (string) => {
//     demo2.salesforceModalSuccesMessage(string);
//   }
// );
// And(
//   "the success message {string} is having font family {string} and font size {string}",

//   (string, fontFamily, fontSize) => {
//     demo2.salesforceModalSuccessMessageCSS(string, fontFamily, fontSize);
//   }
// );

// And(
//   "the modal pop-up shows {string} along with social icons and a blog-related post section",
//   (string) => {
//     demo2.salesforceModaltextSocialMediaBlog(string);
//   }
// );

// When("the user enters a wrong email id {string}", (string) => {
//   demo2.salesforceModalTextFieldEmail(string);
// });

// Then(
//   "an error message {string} in red color is displayed below the input box",
//   (string) => {
//     demo2.salesforceEmailErrorMssg(string);
//   }
// );

// When("the user leaves the input box empty", () => {
//   demo2.salesforceModalEmptyTextFieldEmail();
// });

// Then("an error message {string} is displayed below the input box", (string) => {
//   demo2.salesforceEmailErrorMssg(string);
// });

// // CURATED LISTING
// When("they view the curated list of blog articles", () => {
//   demo2.curatedListingVisible();
// });

// Then("there should be {string} articles displayed", (string) => {
//   demo2.curatedListingSize(string);
// });

// And(
//   "the first article should have Image larger than second Image, Category Tag, Title and Description",
//   () => {
//     demo2.curatedFirstVisible();
//   }
// );

// And(
//   "the Category Tag is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo2.curatedCategoryCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the Title is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo2.curatedTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the Description is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo2.curatedDescCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the next {string} articles should have Image, Category Tag and Title",
//   (string) => {
//     demo2.curated4Visible(string);
//   }
// );

// Then("title should be navigated to a page with a 200 status code", () => {
//   demo2.BttnResponse(curatedTitle);
// });

// Then("there should be 3 featured articles displayed", () => {
//   demo2.featuredListingVisible();
// });

// And("each featured article should have Image, Title and Description", () => {
//   demo2.featuredTitleImageDesc();
// });

// And(
//   "the Title is having font family {string} and font size {string} on Featured Post",
//   (fontFamily, fontSize) => {
//     demo2.featuredTitleCSS(fontFamily, fontSize);
//   }
// );

// And(
//   "the Description is having font family {string} and font size {string} on Featured Post",
//   (fontFamily, fontSize) => {
//     demo2.featuredDescCSS(fontFamily, fontSize);
//   }
// );

// Then("title should be navigated to the page with a 200 status code", () => {
//   demo2.BttnResponse(featuredTitle);
// });

// And("there should be a CTA link displayed", () => {
//   demo2.featuredBttnVisible();
// });

// Then("CTA should be navigated to a page with a 200 status code", () => {
//   demo2.BttnResponse(featuredBttn);
// });

// And(
//   "the CTA text is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo2.bttnfont(fontFamily, fontSize);
//   }
// );

// // DYNAMIC LISTING
// Then("I shoud see the 3 cards listing variation", () => {
//   demo2.threeCardListingVisible();
// });

// And("{string} button should be displayed on right side", (string) => {
//   demo2.CardBttnVisible(threeCardBttnViewAll, string);
// });

// And(
//   "the Button text {string} is having font family {string} and font size {string} on 3 cards listing",
//   (string, fontFamily, fontSize) => {
//     demo2.CardBttnCSS(threeCardBttnViewAll, string, fontFamily, fontSize);
//   }
// );

// And("I see that there are {string} cards in the listing", (string) => {
//   demo2.CardListSize(threeCardListing, string);
// });

// And("Each card has image, title and description", () => {
//   demo2.CardListTitleImageDesc(threeCardTitle, threeCardDesc, threeCardImage);
// });

// And(
//   "the Card title is having font family {string} and font size {string} on 3 cards listing",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(threeCardTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the Card description is having font family {string} and font size {string} on 3 cards listing",
//   (fontFamily, fontSize) => {
//     demo2.CardListDescCSS(threeCardDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "I see that each article title is a link to the full article and with a 200 status code",
//   () => {
//     demo2.BttnResponse(threeCardTitleLink);
//   }
// );

// And(
//   "I see that the {string} button should have 200 status code on 3 cards listing",
//   (string) => {
//     demo2.BttnResponse200(threeCardBttnViewAllLink, 0);
//   }
// );

// Then("I see the 4 cards listing variation", () => {
//   demo2.fourCardListingVisible();
// });

// And("{string} button should be displayed on the right side", (string) => {
//   demo2.CardBttnVisible(fourCardBttnViewAll, string);
// });

// And(
//   "the Button text {string} is having font family {string} and font size {string} on 4 cards listing component",
//   (string, fontFamily, fontSize) => {
//     demo2.CardBttnCSS(fourCardBttnViewAll, string, fontFamily, fontSize);
//   }
// );

// And("I see that there are {string} cards on cards listing", (string) => {
//   demo2.CardListSize(fourCardListing, string);
// });

// And("Each card has image, title and description on 4 cards listing", () => {
//   demo2.CardListTitleImageDesc(fourCardTitle, fourCardDesc, fourCardImage);
// });

// And(
//   "the Card title is having font family {string} and font size {string} on 4 cards listing",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(fourCardTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the Card description is having font family {string} and font size {string} on 4 cards listing",
//   (fontFamily, fontSize) => {
//     demo2.CardListDescCSS(fourCardDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "Verify that each article title is a link to the full article and with a 200 status code",
//   () => {
//     demo2.BttnResponse(fourCardTitleLink);
//   }
// );

// And(
//   "I see that the {string} button should have 200 status code on 4 cards listing",
//   () => {
//     demo2.BttnResponse(fourCardBttnViewAllLink);
//   }
// );

// Then("I should see carousel listing variation", () => {
//   demo2.threecarouselListingVisbile();
// });

// And(
//   "{string} button should be displayed on right side of carousel listing component",
//   (string) => {
//     demo2.CardBttnVisible(threeCarouselBttnViewAll, string);
//   }
// );

// And(
//   "the Button text {string} is having font family {string} and font size {string} on 4 carousel listing",
//   (string, fontFamily, fontSize) => {
//     demo2.CardBttnCSS(threeCarouselBttnViewAll, string, fontFamily, fontSize);
//   }
// );

// And("I see that there are 3 cards in the listing", () => {
//   demo2.threeCarouselCardsSize();
// });

// And("Each card has image title and description", () => {
//   demo2.CardListTitleImageDesc(
//     threeCarouselTitle,
//     threeCarouselDesc,
//     threeCarouselImage
//   );
// });

// And(
//   "the Card title is having font family {string} and font size {string} on carousel listing",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(threeCarouselTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the Card description is having font family {string} and font size {string} on carousel listing",
//   (fontFamily, fontSize) => {
//     demo2.CardListDescCSS(threeCarouselDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "Verify that each card title is a link to the full article and with a 200 status code",
//   () => {
//     demo2.BttnResponse(threeCarouselTitleLink);
//   }
// );

// And(
//   "I see that the {string} button should have 200 status code on 3 carousel listing",
//   () => {
//     demo2.BttnResponse(threeCarouselBttnViewAllLink);
//   }
// );

// And("there is {string} link at right side of carousel", (string) => {
//   demo2.threeCarouselMoreLinkVisbile(string);
// });

// And(
//   "when I click on {string} link, then i should see three more cards are coming up",
//   (string) => {
//     demo2.threeCarouselMoreLinkclick(string);
//   }
// );

// And("there is {string} link on left side of carousel", (string) => {
//   demo2.threeCarouselLessLinkVisbile(string);
// });

// And("clicking on {string} we should see first three cards", (string) => {
//   demo2.threeCarouselLessLinkclick(string);
// });

// And(
//   "clicking on {string} link for three times, more link disappears and only {string} link should be present",
//   (string1, string2) => {
//     demo2.threeCarouselMoreLessFunc(string1, string2);
//   }
// );

// Then("I should be able to see the dynamic listing carousel", () => {
//   demo2.factCardVisble();
// });

// And("the carousel should have a title and description below it", () => {
//   demo2.factCardTitleDescVisble();
// });

// And(
//   "the title is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(factCardTitleComponent, fontFamily, fontSize);
//   }
// );

// And(
//   "the description is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo2.CardListDescCSS(factCardDescComponent, fontFamily, fontSize);
//   }
// );

// And("the carousel contains three cards in a row", () => {
//   demo2.factCardSize();
// });

// And(
//   "verify that each card title is a link to the full article and with a 200 status code",
//   () => {
//     demo2.BttnResponse200(factCardTitleLink, 0);
//   }
// );

// And(
//   "each card should have an image, title in blue color and a description",
//   () => {
//     demo2.factCardTitleImageDesc();
//   }
// );

// And(
//   "the card title is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(factCardTitleText, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo2.CardListDescCSS(factCardTitleDesc, fontFamily, fontSize);
//   }
// );

// And("the second card is a fact card", () => {
//   demo2.factCardSecondTile();
// });

// And("the fact card is not clickable", () => {
//   demo2.BttnNotClickable(factCardComponent);
// });

// And("the fact card has a title with the description", () => {
//   demo2.factCardAuthorDescVisible();
// });

// And(
//   "the fact card title is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(factCardDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "the fact card description is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     demo2.CardListDescCSS(factCardAuthor, fontFamily, fontSize);
//   }
// );

// When("I click on the next arrow", () => {
//   demo2.factCardNextClick();
// });

// Then("the next set of three cards in the carousel should be displayed", () => {
//   demo2.factCardClickVerification();
// });

// When("I click on the previous arrow", () => {
//   demo2.factCardPreviousClick();
// });

// And("the previous three cards in the carousel should be displayed", () => {
//   demo2.factCardSize();
// });

// // COMMON CONCERN CAROUSEL
// Then("I should be able to see Common Concern carousel component", () => {
//   demo2.commonConcernCarouselVisbile();
// });

// And("I should be able to see the title", () => {
//   demo2.commonConcernCarouselTitleVisible();
// });

// And("I should see right arrow", () => {
//   demo2.commonConcernCarouselRightVisible();
// });

// And("there are cards displayed with image and title", () => {
//   demo2.commonConcernCarouselTitleImageVisible();
// });

// And(
//   "the card title is having font family {string} and font size {string} on Common Concern carousel",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(commonConcernCardTitle, fontFamily, fontSize);
//   }
// );

// And("title has yellow underline", () => {
//   demo2.commonConcernCarouselYellowUnderlineVisible(commonConcernCardTitle);
// });

// And(
//   "the user clicks on any part of the card and user should be redirected to the corresponding link with a 200 status code",
//   () => {
//     demo2.verifyBttnRedirection(commonConcerCardLink);
//   }
// );

// Then("I should be able to click on right side arrow", () => {
//   demo2.commonConcerCarouselRightClick();
// });

// And("next articles should be displayed", () => {
//   demo2.commonConcerCarouselNextVisible();
// });

// And(
//   "when we click on on previous arrow previous articles should be displayed",
//   () => {
//     demo2.commonConcerCarouselPreviousVisible();
//   }
// );

// And(
//   "verify that each card title is a link to the full article and with a 200 status code",
//   () => {
//     demo2.BttnResponse200(threeCardBttnViewAllLink, 0);
//   }
// );

// Then("I should be able to see 4 column common concerns card set", () => {
//   demo2.commonConcern4CardVisible();
// });

// And("I should see 4 cards in row and there is no arrow", () => {
//   demo2.commonConcern4cardsRow();
//   demo2.magazineCarouselColumnRightLeftArrow();
// });

// And("there are Common Concern cards displayed with image and title", () => {
//   demo2.commonConcernCardImageTitle(commonConcern4Title, commonConcern4Image);
// });

// And(
//   "the card title is having font family {string} and font size {string} on Common Concern 4 column",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(commonConcern4Title, fontFamily, fontSize);
//   }
// );

// And("Common Concern card title has yellow underline", () => {
//   demo2.titleLineColour(commonConcern4Title);
// });

// When(
//   "the user clicks on any part of the common concern 4 card and user should be redirected to the corresponding link with a 200 status code",
//   () => {
//     demo2.verifyBttnRedirection(commonConcern4CardLink);
//   }
// );

// Then("I should be able to see 3 column common concerns card set", () => {
//   demo2.commonConcern3CardVisible();
// });

// And("I should see two rows with in three cards each row without arrow", () => {
//   demo2.commonconcern3cardsRow();
//   demo2.magazineCarouselColumnRightLeftArrow();
// });

// And("there are Common Concern 3 cards displayed with image and title", () => {
//   demo2.commonConcernCardImageTitle(commonConcern3Title, commonConcern3Image);
// });

// And(
//   "the card title is having font family {string} and font size {string} on Common Concern 3 column",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(commonConcern3Title, fontFamily, fontSize);
//   }
// );

// And("Common Concern 3 card title has yellow underline", () => {
//   demo2.titleLineColour(commonConcern3Title);
// });

// When(
//   "the user clicks on any part of the common concern 3 card and user should be redirected to the corresponding link with a 200 status code",
//   () => {
//     demo2.verifyBttnRedirection(commonConcern3CardLink);
//   }
// );

// // MAGAZINE CAROUSEL
// Then("I should see the magazine carousel displayed", () => {
//   demo2.magazineCarouselVisible();
// });

// And("the magazine carousel should contain a right arrow and 4 cards", () => {
//   demo2.magazineCarouselRightVisible();
// });

// And(
//   "each magazine carousel card should be clickable with a 200 status code",
//   () => {
//     demo2.BttnResponse(magazineCarouselLink);
//   }
// );

// And(
//   "each card should have an image, title in blue color, and a description",
//   () => {
//     demo2.magazineCarouselTitleDescImage(
//       magazineCarouselTiTle,
//       magazineCarouselDesc,
//       magazineCarouselImage
//     );
//   }
// );

// And(
//   "the card title is having font family {string} and font size {string} on Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(magazineCarouselTiTle, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo2.CardListDescCSS(magazineCarouselDesc, fontFamily, fontSize);
//   }
// );

// When("I click on the right arrow", () => {
//   demo2.magazineCarouselRightClick();
// });

// Then("the next card in the carousel should be displayed", () => {
//   demo2.magazineCarouselRightDisplay();
// });

// And(
//   "when we click on previous arrow, previous card should display in 4 set card",
//   () => {
//     demo2.magazineCarouselLeftVisible();
//   }
// );

// When(
//   "I reach the end of the carousel by clicking the right arrow multiple times",
//   () => {
//     demo2.magazineCarouselRightClickEnd();
//   }
// );

// And(
//   "there should not be a right arrow visible and only the left arrow should be displayed",
//   () => {
//     demo2.magazineCarouselRightLeftArrow();
//   }
// );

// Then("I should see the 2-column magazine displayed", () => {
//   demo2.magazineCarouselColumnVisible(magazineCarousel2Column);
// });

// And(
//   "the 2-column should contain 2 cards in row and does not contain any arrow",
//   () => {
//     demo2.magazineCarousel2cardsRow(magazineCarousel2Column);
//     demo2.magazineCarouselColumnRightLeftArrow();
//   }
// );

// And("each card should be clickable with a 200 status code", () => {
//   demo2.BttnResponse(magazineCarousel2ColumnLink);
// });

// And(
//   "each Two column Magazine card should have an image, title in blue color, and a description",
//   () => {
//     demo2.magazineCarouselTitleDescImage(
//       magazineCarousel2ColumnTitle,
//       magazineCarousel2ColumnDesc,
//       magazineCarousel2ColumnImage
//     );
//   }
// );

// And(
//   "the card title is having font family {string} and font size {string} on Two column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(magazineCarousel2ColumnTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on Two column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo2.CardListDescCSS(magazineCarousel2ColumnDesc, fontFamily, fontSize);
//   }
// );

// Then("I should see the 4-column magazine displayed", () => {
//   demo2.magazineCarouselColumnVisible(magazineCarousel4Column);
// });

// And(
//   "the 4-column should contain 4 cards and does not contain any arrow",
//   () => {
//     demo2.magazineCarousel4cardsRow(magazineCarousel4Column);
//     demo2.magazineCarouselColumnRightLeftArrow();
//   }
// );

// And(
//   "each Four column Magazine card should be clickable with a 200 status code",
//   () => {
//     demo2.BttnResponse(magazineCarousel4ColumnLink);
//   }
// );

// And(
//   "each Four column Magazine card should have an image, title in blue color, and a description",
//   () => {
//     demo2.magazineCarouselTitleDescImage(
//       magazineCarousel4ColumnTitle,
//       magazineCarousel4ColumnDesc,
//       magazineCarousel4ColumnImage
//     );
//   }
// );

// And(
//   "the card title is having font family {string} and font size {string} on Four column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo2.CardListTitleCSS(magazineCarousel4ColumnTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on Four column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     demo2.CardListDescCSS(magazineCarousel4ColumnDesc, fontFamily, fontSize);
//   }
// );

// // APPOINTMENT SCHEDULER
// And("the title is displayed", () => {
//   demo2.schedulerTitleVisible();
// });

// And(
//   "the title is having font family {string} and font size {string} on Office Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo2.schedulerCSS(OfficeSchedulerTitle, fontFamily, fontSize);
//   }
// );

// And("the subtitle is displayed", () => {
//   demo2.schedulerSubTitleVisible();
// });

// And(
//   "the subtitle is having font family {string} and font size {string} on Office Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo2.schedulerCSS(OfficeSchedulerSubtitle, fontFamily, fontSize);
//   }
// );

// And("the description is displayed", () => {
//   demo2.schedulerDescVisible();
// });

// And(
//   "the description is having font family {string} and font size {string} on Office Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo2.schedulerCSS(OfficeSchedulerDesc, fontFamily, fontSize);
//   }
// );

// And("the image is displayed", () => {
//   demo2.schedulerImageVisible();
// });

// And("the CTA is displayed", () => {
//   demo2.schedulerBttnVisible();
// });

// And(
//   "the CTA is having font family {string} and font size {string} on Office Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo2.schedulerCSS(OfficeSchedulerBttnText, fontFamily, fontSize);
//   }
// );

// And("the CTA link contains {string}", (string) => {
//   demo2.schedulerHref(string);
// });

// And("I click the CTA link then response status should be 200", (string) => {
//   demo2.BttnResponse(OfficeSchedulerBttn);
// });

// And("the title is displayed on Provider Appointment Scheduler", () => {
//   demo2.schedulerTitleVisible();
// });

// And(
//   "the title is having font family {string} and font size {string} on Provider Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo2.schedulerCSS(OfficeSchedulerTitle, fontFamily, fontSize);
//   }
// );

// And("the subtitle is displayed on Provider Appointment Scheduler", () => {
//   demo2.schedulerSubTitleVisible();
// });

// And(
//   "the subtitle is having font family {string} and font size {string} on Provider Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo2.schedulerCSS(OfficeSchedulerSubtitle, fontFamily, fontSize);
//   }
// );

// And("the description is displayed on Provider Appointment Scheduler", () => {
//   demo2.schedulerDescVisible();
// });

// And(
//   "the description is having font family {string} and font size {string} on Provider Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo2.schedulerCSS(OfficeSchedulerDesc, fontFamily, fontSize);
//   }
// );

// And("the image is displayed on Provider Appointment Scheduler", () => {
//   demo2.schedulerImageVisible();
// });

// And("the CTA is displayed on Provider Appointment Scheduler", () => {
//   demo2.schedulerBttnVisible();
// });

// And(
//   "the CTA is having font family {string} and font size {string} on Provider Appointment Scheduler",
//   (fontFamily, fontSize) => {
//     demo2.schedulerCSS(OfficeSchedulerBttnText, fontFamily, fontSize);
//   }
// );

// And(
//   "the CTA link contains {string} on Provider Appointment Scheduler",
//   (string) => {
//     demo2.schedulerHref(string);
//   }
// );

// And(
//   "I click the CTA link then response status should be 200 on Provider Appointment Scheduler",
//   (string) => {
//     demo2.BttnResponse(OfficeSchedulerBttn);
//   }
// );

// // OFFICE PROFILE
// And("Hero image is displayed", () => {
//   demo2.ComponentsVisible(officeProfileImage);
// });

// And("Hero pre-title section should contain {string} title", (string) => {
//   demo2.ComponentsVisibleContains(officeProfilePreTitle, string);
// });

// And(
//   "the pre-title is having font family {string} and font size {string} on Office profile component",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(officeProfilePreTitle, fontFamily, fontSize);
//   }
// );

// And("Hero title should contain {string}", (string) => {
//   demo2.ComponentsVisibleContains(officeProfileTitle, string);
// });

// And(
//   "the Hero title is having font family {string} and font size {string} on Office profile component",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(officeProfileTitle, fontFamily, fontSize);
//   }
// );

// And("Accepting new patients section is displayed", () => {
//   demo2.ComponentsVisible(officeProfileStatus);
// });

// And("{string} button is present", (string) => {
//   demo2.ComponentsVisibleContains(officeProfileBttn, string);
// });

// Then(
//   "the {string} CTA is having font family {string} and font size {string} on Office profile component",
//   (string, fontFamily, fontSize) => {
//     demo2.officeProfileBttnCSS(
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
//     demo2.officeProfileHref(officeProfileBttn, "0", string);
//   }
// );

// And("the {string} CTA button is present", (string) => {
//   demo2.officeProfileBttnVisible(officeProfileSecBttns, string);
// });

// And(
//   "{string} CTA is having font family {string} and font size {string} on Office profile component",
//   (string, fontFamily, fontSize) => {
//     demo2.officeProfileBttnCSS(
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
//     demo2.officeProfileHref(officeProfileSecBttns, "0", string);
//   }
// );

// And("{string} CTA button is present", (string) => {
//   demo2.officeProfileBttnVisible(officeProfileSecBttns, string);
// });

// And(
//   "{string} CTA is having the font family {string} and font size {string} on Office profile component",
//   (string, fontFamily, fontSize) => {
//     demo2.officeProfileBttnCSS(
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
//     demo2.officeProfileHref(officeProfileSecBttns, "1", string);
//   }
// );

// // PROVIDER PROFILE
// Then("the hero section should be displayed", () => {
//   demo2.ComponentsVisible(providerProfile);
// });

// And("Hero image is displayed on Provider profile component", () => {
//   demo2.ComponentsVisible(providerProfileImage);
// });

// And(
//   "The Hero title should contain {string} on Provider profile component",
//   (string) => {
//     demo2.ComponentsVisibleContains(InfoproviderProfileTitle, string);
//   }
// );

// And(
//   "the Hero title is having font family {string} and font size {string} on Provider profile component",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(InfoproviderProfileTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "Hero sub title should contain {string} on Provider profile component",
//   (string) => {
//     demo2.ComponentsVisibleContains(providerProfileSubTitle, string);
//   }
// );

// And(
//   "the sub title is having font family {string} and font size {string} on Provider profile component",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(providerProfileSubTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the {string} button is present on Provider profile component",
//   (string) => {
//     demo2.officeProfileBttnVisible(providerProfileBttn, string);
//   }
// );

// And(
//   "the {string} CTA is having font family {string} and font size {string} on Provider profile component",
//   (string, fontFamily, fontSize) => {
//     demo2.officeProfileBttnCSS(
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
//     demo2.officeProfileHref(providerProfileBttn, "0", string);
//   }
// );

// //FAQs COMPONENT
// Then("I should see tabs", () => {
//   demo2.ComponentsVisible(FAQTabs);
// });

// And("{string} should be highlighted in the tab", (string) => {
//   demo2.ComponentsVisibleContains(FAQTabsActiveCategories, string);
// });

// And("I should see FAQ title", () => {
//   demo2.ComponentsVisible(FAQTabsTitle);
// });

// And("there should be a description", () => {
//   demo2.ComponentsVisible(FAQTabsDescription);
// });

// And("there should be a {string} link", (string) => {
//   demo2.ComponentsVisibleContains(FAQTabsSecBttns, string);
// });

// And("the Contact Us link gives a 200 response", () => {
//   demo2.BttnResponse200(FAQTabsSecBttnsLinks, 0);
// });

// And("there should be {string} link", (string) => {
//   demo2.ComponentsVisibleContains(FAQTabsSecBttns, string);
// });

// And("the Search FAQs link gives a 200 response", () => {
//   demo2.BttnResponse200(FAQTabsSecBttnsLinks, 1);
// });

// And("FAQ section links should match tabs in the header", () => {
//   demo2.correctTabsCheck();
// });

// When("I click on the {string} FAQ link", (string) => {
//   demo2.clickTabName(string);
// });

// Then("I should see {string} in the title", (string) => {
//   demo2.ComponentsVisibleContains(FAQTabsTitle, string);
// });

// And("{string} should be highlighted in the tab", (string) => {
//   demo2.ComponentsVisibleContains(FAQTabsActiveCategories, string);
// });

// And(
//   "each FAQ question in the accordion should not have any characters after the question mark",
//   () => {
//     demo2.verifyAccordionQuestions();
//   }
// );

// And("there is answer section also for each question", () => {
//   demo2.verifyQuestionAnswer();
// });

// Then("I should verify the pagination below the FAQ section", () => {
//   demo2.faqpaginationVisible();
// });

// Then("page should have 25 FAQs", () => {
//   demo2.faq25Questions();
// });

// Then("I should continue clicking until the next button becomes grey", () => {
//   demo2.faqPaginationGrey();
// });

// //office profile - overview  and insurance information
// Then("I should see the following business hours:", (datatable) => {
//   demo2.officeprofileScheduleandInsuranceList(
//     datatable,
//     schedulelist,
//     businessdaystimings
//   );
// });

// And("I should see the following insurance information:", (datatable) => {
//   demo2.officeprofileScheduleandInsuranceList(
//     datatable,
//     insuranceinformation,
//     insurancelist
//   );
// });

// And(
//   "I should see phone number {string} and fax number {string}",
//   (string1, string2) => {
//     demo2.officeProvderPhNumVisible(string1, string2);
//   }
// );

// And(
//   "the phone and fax number is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(officeProviderPhNum, fontFamily, fontSize);
//   }
// );

// And(
//   "I should see address {string}{string}{string}",
//   (string1, string2, string3) => {
//     demo2.ComponentsVisible(officeProviderAddress, string1, string2, string3);
//   }
// );

// And(
//   "the adrdress is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(officeProviderAddress, fontFamily, fontSize);
//   }
// );

// And("I should see map", () => {
//   demo2.ComponentsVisible(officeProviderMap);
// });

// And(
//   "{string} button is present on office profile overview and info component",
//   (string) => {
//     demo2.ComponentsVisibleContains(officeProviderBttn, string);
//   }
// );

// And(
//   "the {string} CTA is having font family {string} and font size {string} on office profile overview and info component",
//   (string, fontFamily, fontSize) => {
//     demo2.officeProfileBttnCSS(
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
//     demo2.officeProfileHref(officeProviderBttn, "0", string);
//   }
// );

// And("language spoken should be {string}", (string) => {
//   demo2.ComponentsVisibleContains(officeProviderLang, string);
// });

// And(
//   "the language spoken text is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(officeProviderLang, fontFamily, fontSize);
//   }
// );

// And("there should be text below button as {string}", (string) => {
//   demo2.ComponentsVisibleContains(officeProviderExtraText, string);
// });

// And(
//   "the extra text is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(officeProviderExtraText, fontFamily, fontSize);
//   }
// );

// // Office Profile page - Services and Team Section

// Then("I should be able to see dental services section", () => {
//   demo2.ComponentsVisible(officeProfiledentalServices);
// });

// And("each dental service should've icon and link", () => {
//   demo2.iconsandlinks();
// });

// And("the link should be underlined in yellow", () => {
//   demo2.underlineBttn(officeProfileBttnTextUnderline);
// });

// And("the link href response status code should be 200", () => {
//   demo2.BttnResponse(officeProfilebuttonLinks);
// });
// And("10 services will be displayed", () => {
//   demo2.cardcount();
// });
// And(
//   "after that, there should be a see more button then click on see more",
//   () => {
//     demo2.seeMoreBttn();
//   }
// );
// Then("it should show all services", () => {
//   demo2.showAllServices();
// });
// And("see more button is not displayed", () => {
//   demo2.seemoreNotVisible();
// });

// Then("I should be able to see team section", () => {
//   demo2.ComponentsVisible(officeProfileTeam);
// });

// Then("I check each dentist card", () => {
//   demo2.teamProfileCards();
// });
// Then("each card should have a photo, link with the doctor's name", () => {
//   demo2.teamProfileCardsImg_DocName();
// });
// And("the doctor's name should be underlined in yellow", () => {
//   demo2.underlineBttn(officeProfileTeamCardBttnUnderline);
// });
// And("verify href value and status response is 200", () => {
//   demo2.BttnResponse(officeProfileTeamCardsLinks);
// });
// And("doctor's name should go to the corresponding link {string}", (string) => {
//   demo2.urlString(string);
// });
// And("the href value should contain the doctor's name", () => {
//   demo2.docNameInUrl();
// });

// And(
//   "below the doctor's name, there should be a profession text mentioned",
//   () => {
//     demo2.teamCardsProfessionText();
//   }
// );
// And("below that, another text may be present", () => {
//   demo2.teamCardsSecondText();
// });

// // PROVIDER PROFILE:information section
// Then("I should be able to see {string} tab as highlighted", (string) => {
//   demo2.ComponentsVisibleContains(providerProfileTab, string);
// });

// And(
//   "the overview text is having font family {string} and font size {string} on provider profile info component",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(providerProfileTab, fontFamily, fontSize);
//   }
// );

// And("I should be able to see About Me icon and {string} section", (string) => {
//   demo2.providerprofileIconText("0", informationproviderProfileTitle, string);
// });

// And(
//   "the {string} text is having font family {string} and font size {string} on provider profile info component",
//   (string, fontFamily, fontSize) => {
//     demo2.officeProfileBttnCSS(
//       informationproviderProfileTitle,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// And("I should be able to see Quote icon and {string} section", (string) => {
//   demo2.providerprofileIconText("1", informationproviderProfileTitle, string);
// });

// And(
//   "{string} text is having font family {string} and font size {string} on provider profile info component",
//   (string, fontFamily, fontSize) => {
//     demo2.officeProfileBttnCSS(
//       informationproviderProfileTitle,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// And("I should see Education icon and {string} section", (string) => {
//   demo2.providerprofileIconText("2", informationproviderProfileTitle, string);
// });

// And(
//   "the {string} text is having the font family {string} and font size {string} on provider profile info component",
//   (string, fontFamily, fontSize) => {
//     demo2.officeProfileBttnCSS(
//       informationproviderProfileTitle,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// // BLOG LISTING
// Then("the blog listing section is displayed", () => {
//   demo2.ComponentsVisible(blogListingComponent);
// });

// And("it includes a {string} dropdown", (string) => {
//   demo2.blogListingSortByVisible(string);
// });

// And(
//   "the Sort By dropdown has options: {string}, {string}, and {string}",
//   (string1, string2, string3) => {
//     demo2.blogListingSortOptions(string1, string2, string3);
//   }
// );

// And(
//   "the default value in the Sort By dropdown is set to {string}",
//   (string) => {
//     demo2.blogListingSortDefaultOptions(string);
//   }
// );

// And(
//   "there are 18 cards on the page, a combination of fact cards and normal cards",
//   () => {
//     demo2.blogListingCardsSize();
//   }
// );

// And("each card item has an image, title, and description", () => {
//   demo2.blogListingCardImgTitleDesc(
//     blogListingImage,
//     blogListingTitle,
//     blogListingDesc
//   );
// });

// And(
//   "the fact card title is having the font family {string} and font size {string} on Blog Listing cards",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(blogListingFactCardTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the normal card title is having the font family {string} and font size {string} on Blog Listing cards",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(blogListingCardTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the description is having the font family {string} and font size {string} on Blog Listing cards",
//   (fontFamily, fontSize) => {
//     demo2.officeProfileCSS(blogListingDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "clicking on a card item navigates the user to the corresponding blog page and blog page title should match the card title",
//   () => {
//     demo2.blogListingCompareTitle();
//   }
// );

// And("I select the value {string}", (string) => {
//   demo2.blogListingSortSelectOptions(string);
// });

// Then(
//   "the list of 18 items on the first page should be sorted alphabetically by the first letter of their titles",
//   () => {
//     demo2.AtoZSort(blogListingCardTitle);
//   }
// );

// Then(
//   "the updated date in each blog details page should be less than or equal to the previous card date",
//   () => {
//     demo2.blogListingDateCompareTitle(blogListingCardTitle);
//   }
// );

// Then(
//   "the first page {string} in pagination should be highlighted",
//   (string) => {
//     demo2.blogListingfirstPageHighlighted(string);
//   }
// );

// And("both back arrows are greyed out", () => {
//   demo2.blogListingbackArrowsDisable();
// });

// And(
//   "clicking on the second pagination {string} number should display a new set of cards",
//   (string) => {
//     demo2.blogListingsecondPage(string);
//   }
// );

// And("the back button should be displayed", () => {
//   demo2.blogListingfirstArrowsDisplay();
// });

// And("the second pagination {string} number should be highlighted", (string) => {
//   demo2.blogListingfirstPageHighlighted(string);
// });

// When(
//   "I click on the first pagination {string} number again then the previous card set should be displayed",
//   (string) => {
//     demo2.blogListingfirstPageVerification(string);
//   }
// );

// When("I click on the single next button", () => {
//   demo2.blogListingnextArrowClick();
// });

// When("I click on the double arrow at the right side", () => {
//   demo2.blogListinglastArrowClick();
// });

// And("both right side buttons should be greyed out", () => {
//   demo2.blogListinglastArrowsDisplay();
// });

// And("the last page number should be highlighted", () => {
//   demo2.blogListinglastActive();
// });

// //MAP COMPONENT
// Then("the dropdown should be present with state names", () => {
//   demo2.mapDropdownVisible();
// });

// And("the dropdown should be sorted", () => {
//   demo2.AtoZSort(mapComponentDropdown);
// });

// When("the user selects {string} state in the dropdown", (string) => {
//   demo2.mapsSelectValue(string);
// });

// Then(
//   "the insurance list should display the following companies",
//   (dataTable) => {
//     demo2.getLinks(dataTable, mapComponentsDetails, 0);
//   }
// );

// And(
//   "the insurance list itme is having the font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo2.TextFFamily_Size(mapComponentsDetails, fontFamily, fontSize);
//   }
// );

// And(
//   "verify the title is having the font family {string} and font size {string} on Map component",
//   (fontFamily, fontSize) => {
//     demo2.TextFFamily_Size(mapComponentTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "verify the description is having the font family {string} and font size {string} on Map component",
//   (fontFamily, fontSize) => {
//     demo2.TextFFamily_Size(mapComponentDesc, fontFamily, fontSize);
//   }
// );

// Then("the map state should be highlighted and have clipath attribute", () => {
//   demo2.mapCountryVisible();
// });

// Then(
//   "User should be able to see the two files {string} and {string}",
//   (string1, string2) => {
//     demo2.ComponentsVisibleContains(mapComponentsDetails, string1);
//     demo2.ComponentsVisibleContains(mapComponentsDetails, string2);
//   }
// );

// And(
//   "the files name is having the font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     demo2.TextFFamily_Size(mapComponentsDetails, fontFamily, fontSize);
//   }
// );

// And(
//   "verify that Most Commonly Viewed Fees link contains pdf file with {string} name in it",
//   (string) => {
//     demo2.urlStringCheck(string);
//   }
// );

// And("verify Most Commonly Viewed Fees pdf link gives 200 status", () => {
//   demo2.BttnResponse200(mapComponentsDetailsURL, 0);
// });

// And(
//   "verify that Full Fee Schedule link contains pdf file with {string} name in it",
//   (string) => {
//     demo2.urlStringCheck(string);
//   }
// );

// And("verify Full Fee Schedule pdf link gives 200 status", () => {
//   demo2.BttnResponse200(mapComponentsDetailsURL, 1);
// });

// //MYCHART PORTAL VERIFICATION
// Then("the title should be present", () => {
//   demo2.ComponentsVisible(myChartTitleTextCSS);
// });

// And(
//   "the title should have font-family {string} and font-size {string}",
//   (fontFamily, fontSize) => {
//     demo2.TextFFamily_Size(myChartTitleTextCSS, fontFamily, fontSize);
//   }
// );

// And("An image should be present with alt text", () => {
//   demo2.myChartTitleImg();
// });

// And("Sign In box should be embedded in the hero section", () => {
//   demo2.ComponentsVisible(myChartSignInBoxCSS);
// });

// // Scroll to Footer
// And("I scroll to the footer section", () => {
//   demo2.footerScroll();
// });

// // Verify 1st column Title
// Then("I should see the {string} in column one in the footer", (String) => {
//   demo2.mouthbodyConnect(String);
// });

// // Verify the response 200
// Then(
//   "I click on the link And should be navigated to the page and status code should be 200",
//   () => {
//     demo2.BttnResponse(mouthbodyconnectionfooterLinks);
//   }
// );

// // Verify 2nd column Title
// Then("I should see the {string} in column two in the footer", (String) => {
//   demo2.dentalservices(String);
// });

// // Verify the response 200
// Then(
//   "I click on link And should be navigated to the link in the footer",
//   () => {
//     demo2.BttnResponse(detnalservicesfooterLinks);
//   }
// );

// // Verify 3rd column Title
// Then("I should see the {string} in column three in the footer", (String) => {
//   demo2.paymentoption(String);
// });

// // Verify the response 200
// Then(
//   "I click on the link And should be navigated to page and status code should be 200",
//   () => {
//     demo2.BttnResponse(paymentoptionsfooterLinks);
//   }
// );

// // Verify 4th column Title
// Then("I should see the {string} in column four in the footer", (String) => {
//   demo2.howwegive(String);
// });

// // Verify the response 200
// Then(
//   "I click on link And should be navigated to page and status code should be 200",
//   () => {
//     demo2.BttnResponse(howwegivefooterLinks);
//   }
// );

// // Verify 5th column Title
// Then("I should see the {string} in column five in the footer", (String) => {
//   demo2.about(String);
// });

// // Verify the response 200
// Then(
//   "I click on the link And should be navigated to the page and status code should be the 200",
//   () => {
//     demo2.BttnResponse(aboutfooterLinks);
//   }
// );

// // Verify the legal links in the footer
// Then("I should see the following legal texts", (dataTable) => {
//   demo2.footerLegalLinks(dataTable, legalfooter);
// });

// And("I click on the {string} link in the footer", (Text) => {
//   demo2.clickLegalLinks(Text, legalfooter);
// });

// // verify social media icons and links
// Then("I should see following social media icons", (dataTable) => {
//   demo2.socialMediaLinks(dataTable, socialMediaIcons);
// });

// And("I click on each social media icon {string}", (link) => {
//   demo2.clickSocialMediaIcons(link, socialMediaIcons);
// });

// Then(
//   "I should be redirected to the correct social media URL {string} for each icon",
//   (currenturl) => {
//     demo2.urlRedirection(currenturl);
//   }
// );

// // verify 1-800 smilegen link
// Then("I should see the {string} link", (smilegenLink) => {
//   demo2.smilegenlink(smilegenLink, smilegenlinkFooter);
// });

// And("the link should have a valid href attribute {string}", (hrefValue) => {
//   demo2.smilegenhref(smilegenlinkFooter, hrefValue);
// });

// And(
//   "the link should have the target attribute set to {string}",
//   (targetValue) => {
//     demo2.smilegenTargetFooter(smilegenlinkFooter, targetValue);
//   }
// );

// Then("Verify the paragraph and font family", () => {
//   demo2.footerParagraph();
// });
