// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// const { LocalGP } = require("../../page/local-site-gp/components");

// // const { HomePage } = require("../../page/smilegen-site/homePage");

// const localgp = new LocalGP();
// // css locators
// var galleryComponentVisible = ".gallery-main-wrapper";
// var galleryComponentAssetsVisible = ".swiper-slide-visible";
// var galleryComponentAssetsTitleVisible =
//   ".gallery-thumbs-container .swiper-wrapper .swiper-slide .cmp-image__title";
// var galleryComponentAssetsLeftArrowVisible =
//   ".gallery-thumbs-container .swiper-button-prev";
// var galleryComponentAssetsRightArrowVisible =
//   ".gallery-thumbs-container .swiper-button-next";
// var galleryImage = ".swiper-slide-visible .cmp-image";
// var galleryAllComponentAssets =
//   ".gallery-thumbs-container .swiper-wrapper .swiper-slide";
// var videoPlayButton = ".swiper-slide-visible .play-icon";
// var videoClickButton = ".swiper-slide-active .embed .video-container picture";
// var galleryRightArrow = ".gallery-thumbs-container .swiper-button-next";
// var galleryLeftArrow = ".gallery-thumbs-container .swiper-button-prev";
// var primaryCTA = ".cmp-button--primary:nth-child(3) .cmp-button";
// var primaryCTAText = ".cmp-button--primary:nth-child(3) .cmp-button .cmp-button__text";
// var linkCTA = ".cmp-button--link:nth-child(5) .cmp-button";
// var linkCTAText = ".cmp-button--link:nth-child(5) .cmp-button .cmp-button__text";
// var categoryTagCTA = ".cmp-button--category-tag .cmp-button";
// var categoryTagCTAText =
//   ".cmp-button--category-tag .cmp-button .cmp-button__text";
// var secondaryCTA = ".cmp-button--secondary:nth-child(11) .cmp-button";
// var secondaryCTAText = ".cmp-button--secondary:nth-child(11) .cmp-button .cmp-button__text";
// var underlineWhiteCTA = ".cmp-button--link-white .cmp-button";
// var underlineWhiteCTAText =
//   ".cmp-button--link-white .cmp-button .cmp-button__text";
// var secondaryWhiteCTA = ".cmp-button--secondary-white .cmp-button";
// var secondaryWhiteCTAText =
//   ".cmp-button--secondary-white .cmp-button .cmp-button__text";
// var RTEHeadings = "[id*='text-e19']";
// var RTEPara = "[id*='text-e19'] p";
// var RTEH1Heading = "[id*='text-e19'] h1";
// var RTEH2Heading = "[id*='text-e19'] h2";
// var RTEH3Heading = "[id*='text-e19'] h3";
// var RTEH4Heading = "[id*='text-e19'] h4";
// var RTEH5Heading = "[id*='text-e19'] h5";
// var RTEH6Heading = "[id*='text-e19'] h6";
// var accordian = ".cmp-accordion__button";
// var accordianExpand = "[aria-expanded='true']";
// var accordianClosed = "[aria-expanded='false']";
// var magazinecardNext = ".magazine-carousel .swiper-button-next";
// var magazineCardPrevious = ".magazine-carousel .swiper-button-prev";
// var commonConcern4Column = ".fourcolumn.cc-card";
// var commonConcern3Column = ".threecolumn.cc-card";
// var commonConcern4CardLink = ".fourcolumn.cc-card .cmp-teaser__link";
// var commonConcern4Image = ".fourcolumn.cc-card .cmp-teaser__card-image";
// var commonConcern3Title = ".threecolumn.cc-card .cmp-teaser__title";
// var commonConcern3Image = ".threecolumn.cc-card .cmp-teaser__card-image";
// var commonConcern3CardLink = ".threecolumn.cc-card .cmp-teaser__link";
// var magazineCarousel = ".magazine-carousel";
// var magazineCarouselTile1 = ".magazine-carousel .swiper-slide:nth-child(1)";
// var magazineCarouselTile2 = ".magazine-carousel .swiper-slide:nth-child(2)";
// var magazineCarouselTile3 = ".magazine-carousel .swiper-slide:nth-child(3)";
// var magazineCarouselTile4 = ".magazine-carousel .swiper-slide:nth-child(4)";
// var magazineCarouselTile5 = ".magazine-carousel .swiper-slide:nth-child(5)";
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
// var textcardwithCTAComponent = ".cmp-list__card";
// var textcardwithCTATitle = ".text-card [id*= teaser] .cmp-teaser__title h4";
// var textcardwithCTADescription =
//   ".text-card [id*= teaser] .cmp-teaser__description p";
// var textcardCTA = ".text-card [id*= teaser] .cmp-button__text";
// var textcardCTAAnchor = ".text-card [id*= teaser] .cmp-button";
// var cardBG = ".text-card [id*= teaser]";
// var textCardWOCTATitle = ".teaser--card-without-cta .cmp-teaser__title h4";
// var textCardWOCTADescription =
//   ".teaser--card-without-cta .cmp-teaser__description p";
// var textCardWOCTABG = ".teaser--card-without-cta .cmp-teaser";
// var factCardComponent = ".yellow-card-teaser--fact-card .cmp-teaser__content";
// var factCardBG = ".yellow-card-teaser--fact-card .cmp-teaser";
// var factCardTitle = ".yellow-card-teaser--fact-card .cmp-teaser__title h4";
// var factCardDescription =
//   ".yellow-card-teaser--fact-card .cmp-teaser__description p";
// var costCard = ".yellow-card-teaser--cost-card";
// var costCardTitle = ".yellow-card-teaser--cost-card .cmp-teaser__title h4";
// var costCardDesc = ".yellow-card-teaser--cost-card .cmp-teaser__description p";
// var costCardSubTitle = ".yellow-card-teaser--cost-card .cmp-teaser__subtitle";
// var costCardCTA = ".yellow-card-teaser--cost-card .cmp-button";
// var costCardBG = ".yellow-card-teaser--cost-card .cmp-teaser";
// var tagCard = ".yellow-card-teaser--learn-more-card-with-tag";
// var tagCardTitle =
//   ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__title h4";
// var tagCardDesc =
//   ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__description p";
// var tagCardCTAtags =
//   ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__tag-container";
// var tagCardTagsAnchor = ".cmp-teaser__tag-container .cmp-button";
// var textcardIcon = ".teaser--card-with-icon";
// var textcarIconBttn = ".teaser--card-with-icon .cmp-button--link a";
// var costEstimatorVisible = ".cmp-tabs";
// var costEstimatorActiveTab = ".cmp-tabs__tab--active";
// var costCardEstimator = ".cmp-tabs .cmp-list__card";
// var costCardEstimatorTitle = ".cmp-tabs .cmp-list__card .cmp-teaser__title p";
// var costCardEstimatorCost =
//   ".cmp-tabs .cmp-list__card .cmp-teaser__description p";
// var costCardEstimatorSubtext =
//   ".cmp-tabs .cmp-list__card .cmp-teaser__subtitle p";
// var costEstimatorRightArrow = ".arrow-icons#right";
// var costEstimatorLeftArrow = ".arrow-icons#left";
// var CostEstimatorTabsAuthored = ".cmp-tabs__tablist .cmp-tabs__tab";
// var threeCardList = ".threecolumn .cmp-dynamiclisting__list";
// var fourCardList = ".fourcolumn";
// var threeCarouselComponent = ".cmp-dynamiclisting__carousel_head";
// var threeCarouselMore = ".swiper-button-next span";
// var threeCarouselLess = ".swiper-button-prev span";
// var threeCarouselTitle1 = ".dynamiclisting-carousel .swiper-slide:nth-child(1)";
// var threeCarouselTitle2 = ".dynamiclisting-carousel .swiper-slide:nth-child(2)";
// var threeCarouselTitle3 = ".dynamiclisting-carousel .swiper-slide:nth-child(3)";
// var threeCarouselTitle4 = ".dynamiclisting-carousel .swiper-slide:nth-child(4)";
// var threeCarouselMoreClick = ".swiper-slide-prev";
// var commonConcernCard = ".common-concerns-carousel";
// var commonConcernMainTitle = ".cmp-container--fixed h2.cmp-title__text";
// var commonConcernCardTitle = ".common-concerns-carousel .cmp-teaser__title";
// var commonConcernCardRight = ".common-concerns-carousel .swiper-button-next";
// var commonConcernCardLeft = ".common-concerns-carousel .swiper-button-prev";
// var commonConcernCardImage =
//   ".common-concerns-carousel .cmp-teaser__card-image";
// var commonConcernCardTitle1 =
//   ".common-concerns-carousel .swiper-slide:nth-child(1)";
// var CardTitleText =
//   ".dynamiclisting-carousel .swiper-slide .list-item__title b:nth-child(1)";
// var CardTitleImage =
//   ".dynamiclisting-carousel .swiper-slide .list-item__img:nth-child(1)";
// var CardTitleDesc =
//   ".dynamiclisting-carousel .swiper-slide .list-item__description:nth-child(3)";
// var factCardComponenttile =
// ".dynamiclisting-carousel .swiper-slide:nth-child(2)";
// var factCardDesc =
//   ".dynamiclisting-carousel .swiper-slide .list-item__title:nth-child(1)";
// var factCardAuthor =
//   ".dynamiclisting-carousel .swiper-slide .list-item__description:nth-child(2)";
// var threeCardBttnViewAll = ".threecolumn .cmp-button__text";
// var threeCardBttnViewAllLink = ".threecolumn .cmp-button";
// var threeCardListing = ".threecolumn .cmp-dynamiclisting__list .list-item";
// var threeCardTitle =
//   ".threecolumn .cmp-dynamiclisting__list .list-item__title a";
// var threeCardTitleLink =
//   ".threecolumn .cmp-dynamiclisting__list .list-item__title a";
// var threeCardDesc =
//   ".threecolumn .cmp-dynamiclisting__list .list-item__description";
// var threeCardImage = ".threecolumn .cmp-dynamiclisting__list .list-item__img";
// var fourCardBttnViewAll = ".fourcolumn .cmp-button__text";
// var fourCardBttnViewAllLink = ".fourcolumn .cmp-button";
// var fourCardListing = ".fourcolumn .list-item";
// var fourCardTitle =
//   ".fourcolumn .cmp-dynamiclisting__list .list-item__title a";
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
//   ".dynamiclisting-carousel .swiper-slide .list-item__title a";
// var threeCarouselDesc =
//   ".dynamiclisting-carousel .swiper-slide .list-item__description";
// var threeCarouselImage =
//   ".dynamiclisting-carousel .swiper-slide .list-item__img";
// var threeCarouselTitleLink =
//   ".dynamiclisting-carousel .swiper-slide .list-item__title a";
// var commonConcerCardLink = ".common-concerns-carousel .cmp-teaser__link";
// var commonConcern4Title = ".fourcolumn.cc-card .cmp-teaser__title";
// var factCardTitleComponent =
//   ".dynamiclisting-carousel .fact-card .list-item__title";
// var factCardDescComponent =
//   ".dynamiclisting-carousel .fact-card .list-item__description";
// var factCardTitleLink =
//   ".dynamiclisting-carousel .swiper-slide .list-item__title a:nth-child(1)";
// var factCardComponentListing = ".fact-card";
// var teaserImageComponent = ".left_image .cmp-teaser__image";
// var seeMoreLessLink = ".cmp-button__text";
// var seeMoreLessLinkUnderline = ".cmp-button";
// var seeMoreTitle = ".half-width-show-more .cmp-teaser__title";
// var seeMoreDesc = ".half-width-show-more .cmp-teaser__description p";
// var seeLessCollapse = ".active-seemore";
// var seeMoreContentStyle = ".half-width-show-more .cmp-teaser__content";
// var leftimageComponent = ".half-width-cta.left_image";
// var leftImageTeaser = ".half-width-cta.left_image .cmp-teaser__image";
// var leftImageTeaserTitle = ".half-width-cta.left_image .cmp-teaser__title";
// var leftImageTeaserDesc = ".half-width-cta.left_image .cmp-teaser__description";
// var leftimageBttn = ".half-width-cta.left_image .cmp-button";
// var rightimageComponent = ".half-width-cta:nth-child(3)";
// var rightimageVisible = ".half-width-cta:nth-child(3) .cmp-teaser__image";
// var rightImageTeaserTitle = ".half-width-cta:nth-child(3) .cmp-teaser__title";
// var rightImageTeaserDesc =
//   ".half-width-cta:nth-child(3) .cmp-teaser__description";
// var rightimageBttn = ".half-width-cta:nth-child(3) .cmp-button";
// var teaserwithoutCTA = ".half-width-cta:nth-child(11)";
// var teaserwithoutCTAImage = ".half-width-cta:nth-child(11) .cmp-teaser__image";
// var teaserwithoutCTATitle = ".half-width-cta:nth-child(11) .cmp-teaser__title";
// var teaserwithoutCTADesc =
//   ".half-width-cta:nth-child(11) .cmp-teaser__description";
// var teaserwithoutCTAVisible = ".half-width-cta:nth-child(11) .cmp-button";
// var footerColumnHeaderLinks = ".cmp-footer__column .cmp-title__link";
// var footerHeaderLinks = ".cmp-footer__column:not(:first-child) .cmp-footer__list a";
// var footerCopyrightText = ".cmp-footer__disclaimer .cmp-text p";
// var tabsText = "li.cmp-tabs__tab";
// var salesforceTitle = ".cmp-teaser--landing-page .cmp-teaser__title";
// var salesforceImage = ".cmp-teaser--landing-page .cmp-teaser__image";
// var salesforceDesc = ".cmp-teaser--landing-page .cmp-teaser__description";
// var backgrndColor = ".modal__body div.cmp-container[style]";
// var salesforceBttn = ".cmp-button--primary .cmp-button__text";
// var salesforceModalTitle = ".modal__body .cmp-title__text";
// var salesforceModalDesc = ".modal__body .cmp-text p";
// var salesforceModalImage = ".modal__body .image:nth-child(8) .cmp-image";
// var salesforceModalBttn = ".modal__body .cmp-button";
// var salesforceModalTextField = ".modal__body .cmp-form-text__text";
// var salesforceSocialMediaText = ".title .cmp-title .cmp-title__text";
// var salesforceSocialMediaIcons =
//   ".image.aem-GridColumn--default--none .cmp-image";
// var socialMediaRealtedPost = ".cmp-curatedlisting";
// var salesforceModalBttn = ".modal__body .cmp-button__text";
// var salesforceErrorMssg = ".cmp-form-text__error";
// var FAQTabsActiveCategories = ".cmp-tabs__tablist .cmp-tabs__tab--active";
// var faqTabsName = ".cmp-tabs__tablist .cmp-tabs__tab";
// var faqNameRight = ".faqs .cmp-faqTab__title p";
// var faqItem = ".cmp-accordion__item";
// var faqQuestionTitle = ".cmp-accordion__title";
// var faqQuestionPaginationNext = ".cmp-faq__pagination .next";
// var FAQTabs = ".cmp-tabs__tablist";
// var FAQTabsDescription = ".cmp-tabs__tabpanel--active .cmp-text p";
// var FAQTabsTitle = ".cmp-tabs__tabpanel--active .cmp-title__text";
// var FAQTabsSecBttns = ".cmp-tabs__tabpanel--active .cmp-button__text";
// var FAQTabsSecBttnsLinks = ".cmp-tabs__tabpanel--active .cmp-button";
// var officeProviderschedulelist = ".schedule";
// var officeProviderinsuranceinformation = ".checkmark-list";
// var officeProviderbusinessdaystimings =
//   ".cmp-schedule .cmp-overview-listing__content li";
// var officeProviderinsurancelist = ".cmp-list__items li";
// var officeProviderPhNum =
//   ".cmp-location__info .cmp-location__info-contactInfo p";
// var officeProviderAddress = ".cmp-location__info .cmp-location__info-address p";
// var officeProviderMap = ".cmp-location__map";
// var officeProviderBttn = ".cmp-location__info .cmp-button";
// var officeProviderButtonText = ".cmp-location__info .cmp-button__text";
// var officeProviderLang = ".list .cmp-officelisting__items li";
// var officeProviderExtraText = ".cmp-location__info-landmark";
// var quoteComponent = ".quote-carousel .swiper-slide-active";
// var firstQuoteText =
//   ".swiper-wrapper div.swiper-slide:nth-child(1) .cmp-text p span";
// var secondQuoteText =
//   ".swiper-wrapper div.swiper-slide:nth-child(2) .cmp-text p span";
// var thirdQuoteText =
//   ".swiper-wrapper div.swiper-slide:nth-child(3) .cmp-text p span";
// var quoteComponentTitleText = ".cmp-text p:nth-child(1) b";
// var quoteCompAuthorCSS = ".text p:nth-child(3)";
// var quoteComponentText = ".cmp-text p span[class='title-4'] b";
// var CarouselVisible = ".swiper-pagination-bullets";
// var CarouselAllQuotes = ".swiper-slide .cmp-text";
// var firstDefaultCarousel =
//   ".swiper-pagination-clickable span:nth-child(1)[class*='active']";
// var firstQuote = ".swiper-wrapper div.swiper-slide:nth-child(1)";
// var secondQuote = ".swiper-wrapper div.swiper-slide:nth-child(2)";
// var thirdQuote = ".swiper-wrapper div.swiper-slide:nth-child(3)";
// var secondCarousel = ".swiper-pagination-clickable span:nth-child(2)";
// var thirdCarousel = ".swiper-pagination-clickable span:nth-child(3)";
// var threeCarouselVisible = ".swiper-pagination-bullet";
// var secondDefaultCarousel =
//   ".swiper-pagination-clickable span:nth-child(2)[class*='active']";
// var thirdDefaultCarousel =
//   ".swiper-pagination-clickable span:nth-child(3)[class*='active']";
// var infoComponentText = ".cmp-information .cmp-text p";
// var infocomponentIcon = ".cmp-information picture img";
// var infocomponentBoldText = ".cmp-information .cmp-title__text";
// var infoComponent = ".cmp-information";
// var infoComponentbttn = ".cmp-information .button a";
// var newsLetterComponent = ".cmp-container--newsletter";
// var newsLetterSubscribe = ".cmp-container--newsletter .cmp-button__text";
// var newsLetterSubscribeLink = ".cmp-container--newsletter a";
// var newsLetterTitle = ".cmp-container--newsletter h3.cmp-title__text";
// var newsLetterPreTitle = ".cmp-container--newsletter .cmp-title__text.Select";
// var newsLetterBody = ".cmp-container--newsletter .cmp-text p";
// var newsLetterPrimary = ".cmp-button--primary a";
// var newsLetterSecondary = ".cmp-button--secondary a";
// var curatedTitleLink = ".featured-post .list-item .list-item__title a";
// var featuredTitleLink = ".featured-post .list-item .list-item__title a";
// var curatedList = ".blog-home .list-item";
// var curatedCategory = ".blog-home .list-item .list-item__category p";
// var curatedTitle = ".blog-home .list-item .list-item__title h3";
// var curatedDesc = ".blog-home .list-item .list-item__description";
// var curatedImage = ".blog-home .list-item picture";
// var featuredList = ".featured-post .list-item";
// var featuredImage = ".featured-post .list-item .list-item__img";
// var featuredTitle = ".featured-post .list-item .list-item__title h3";
// var featuredDesc = ".featured-post .list-item .list-item__description";
// var featuredBttn = ".featured-post a.cmp-button";
// var featuredBttntxt = ".featured-post .cmp-button__text";
// var staffIntroVisible = ".cmp-staffintro";
// var staffIntroText = ".cmp-staffintro .cmp-staffintro__text p";
// var staffIntroTitle = ".cmp-staffintro .cmp-staffintro__title .cmp-title__text";
// var staffIntroImage = ".cmp-staffintro .cmp-staffintro__image";
// var staffIntroBttn = ".cmp-staffintro .cmp-button";
// var alertBar = ".cmp-alertbar";
// var addressbar = ".address-contact-wrapper";
// var primaryNavBar = ".cmp-header";
// var alertbarText = ".cmp-alertbar .cmp-text p";
// var alertbarCloseIcon = ".cmp-alertbar .icon--close";
// var addressBarContactText = ".address-contact-wrapper .button.contact span";
// var primaryNavBarLogo = ".cmp-header .cmp-header__logo";
// var primaryNavBttn1 =
//   ".cmp-header .cmp-header__nav-links .cmp-header__nav-actions .cmp-button--primary .cmp-button__text";
// var primaryNavBttn2 =
//   ".cmp-header .cmp-header__nav-links .cmp-header__nav-actions .cmp-button--secondary .cmp-button__text";
// var primaryNavBttnLink1 =
//   ".cmp-header .cmp-header__nav-links .cmp-header__nav-actions .cmp-button--primary a";
// var primaryNavBttnLink2 =
//   ".cmp-header .cmp-header__nav-links .cmp-header__nav-actions .cmp-button--secondary a";
// var primarySearchIcon =
//   ".cmp-header .cmp-header__nav-links .cmp-header__nav-actions .cmp-button__icon--search";
// var PrimaryNavNames =
//   ".cmp-header .cmp-header__nav-links .navigation .cmp-navigation__item.has-child a";
// var searchOverlay = ".search.search-lo";
// var searchOverlaySearchbar = ".search.search-lo .cmp-search__search-input";
// var searchOverlaySearchicon = ".search.search-lo .cmp-search__search-icon";
// var searchOverlayTitle = ".search.search-lo .cmp-title__text.Select";
// var searchOverlayQuickLinks =
//   ".search.search-lo .cmp-search__link-list .cmp-button--category-tag";
// var staggeredmainBttn = ".staggered-container .cmp-button";
// var staggeredReviewcard = ".staggeredcard--with-reviews";
// var staggeredmainCardTiles = ".staggered-container .cmp-teaser__card-image";
// var staggeredComponent = ".staggered-container";
// var staggeredCardTitle = ".staggeredcard--without-cta .cmp-teaser__title";
// var staggeredmainTitle =
//   ".staggered-container .staggeredcardextension .cmp-teaser__title";
// var staggeredmainDesc =
//   ".staggered-container .staggeredcardextension .cmp-teaser__description p";
// var staggeredCardDesc = ".staggeredcard--with-cta .cmp-teaser__description p";
// var staggeredCardImageVisible = ".staggered-container .cmp-teaser__card-image";
// var staggeredBckImageVisible = ".staggered-container .cmp-teaser__image";
// var staggeredcardTitle = ".twocolumn.staggeredcard .cmp-teaser__title";
// var staggeredReviewDesc =
//   ".staggeredcard--with-reviews .cmp-teaser__description p";
// var staggeredReviewstar =
//   ".staggeredcard--with-reviews .cmp-teaser__reviews-container";
// var staggeredReviewAuthor =
//   ".staggeredcard--with-reviews .cmp-teaser__subtitle";
// var staggeredReviewNoImage = ".staggeredcard--with-reviews .cmp-teaser__image";
// var heroComponent = ".cmp-lohero--fullwidth";
// var heroComponentTitle = ".cmp-lohero--fullwidth .cmp-title__text";
// var heroComponentDesc = ".cmp-lohero--fullwidth .text p";
// var heroComponentBttn = ".cmp-lohero--fullwidth .cmp-button--primary a";
// var heroComponentLink = ".cmp-lohero--fullwidth .cmp-button--link";
// var heroComponentHafWidth = ".cmp-lohero--halfwidth-image-left";
// var heroComponentHafWidthTitle =
//   ".cmp-lohero--halfwidth-image-left .cmp-title__text";
// var heroComponentHafWidthDesc = ".cmp-lohero--halfwidth-image-left .text p";
// var heroComponentHafWidthBttn =
//   ".cmp-lohero--halfwidth-image-left .cmp-button--primary a";
// var heroComponentHafWidthLink =
//   ".cmp-lohero--halfwidth-image-left .cmp-button--link";
// var heroComponentSimple = ".cmp-lohero--simple";
// var heroComponentSimpleTitle = ".cmp-lohero--simple .cmp-title__text";
// var officeProfiledentalServices = ".dental-services";
// var officeProfiledentalImages = ".dental-services .cmp-image .icon";
// var officeProfilebuttonLinks = ".dental-services a";
// var officeProfileBttnTextUnderline =
//   ".dental-services .cmp-button--link .cmp-button";
// var officeProfiledentalCount =
//   ".dental-services .list-item:not(div[style='display: none;'])";
// var officeProfileSeeMoreBttn = ".cmp-lodentalservices__load-button .cmp-button";
// var officeProfileShowAllServices =
//   ".dental-services .list-item[style='display: none;']";

// // navigate to page url
// Given("I am on the LO_GP homepage", () => {
//   localgp.homepagewebsite();
// });

// When("I navigate to the {string}", (url) => {
//   localgp.webPageNavigation(url);
// });

// // SEARCH OVERLAY
// When("I click on the search icon in the navigation", () => {
//   localgp.searchClick();
// });

// Then("the search overlay should be opened", () => {
//   localgp.componentVisible(searchOverlay);
// });

// And("the overlay should have a search field and button", () => {
//   localgp.componentVisible(searchOverlaySearchbar);
//   localgp.componentVisible(searchOverlaySearchicon);
// });

// And(
//   "the overlay should have a heading with font size {string} and font style {string}",
//   (fontSize, fontFamily) => {
//     localgp.SearchOverlayCSS(searchOverlayTitle, fontSize, fontFamily);
//   }
// );

// And("the overlay should have quick links", () => {
//   localgp.componentVisible(searchOverlayQuickLinks);
// });

// And(
//   "the border bottom of search overloy should have {string} color",
//   (color) => {
//     localgp.bttnBorderColor(color, searchOverlay);
//   }
// );

// And("I enter text {string} in the search field", (text) => {
//   localgp.searchOverlaySearchType(text);
// });

// And("I click on the search button", () => {
//   localgp.searchOverlaySearchClick();
// });

// Then(
//   "the user should navigate to a page where the URL contains {string}",
//   (text) => {
//     localgp.searchURLCheck(text);
//   }
// );

// // // GALLERY COMPONENT
// And("the gallery component is loaded", () => {
//   cy.galleryComponent(galleryComponentVisible);
// });

// And("there are multiple assets in the gallery", () => {
//   cy.galleryComponmentAssets(galleryComponentAssetsVisible);
// });

// Then("each asset should have a title or caption displayed", () => {
//   cy.galleryComponentAssetsTitle(galleryComponentAssetsTitleVisible);
// });

// And(
//   "the title should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.galleryComponentAssetsTitleCSS(
//       galleryComponentAssetsTitleVisible,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// And("the carousel area should have left and right arrow icons", () => {
//   cy.galleryComponentAssetsArrow(
//     galleryComponentAssetsLeftArrowVisible,
//     galleryComponentAssetsRightArrowVisible
//   );
// });

// And(
//   "Clicking on each image should display same image in larger size,default first image should be enlarged",
//   () => {
//     cy.galleryImageLarge(
//       galleryComponentAssetsVisible,
//       galleryImage,
//       videoPlayButton,
//       videoClickButton
//     );
//   }
// );

// And("the user clicks on the right arrow icon in the carousel", () => {
//   cy.galleryRightArrowClick(galleryRightArrow);
// });

// Then("the carousel should move to the next asset", () => {
//   cy.galleryNextAssetVisible(galleryAllComponentAssets);
// });

// When("the user clicks on the left arrow icon in the carousel", () => {
//   cy.galleryLeftArrowClick(galleryLeftArrow);
// });

// Then("the carousel should move to the previous asset", () => {
//   cy.galleryPreviousAssetVisible(galleryAllComponentAssets);
// });

// // Gallery Component - GP Redesign
// And("I click on a photo in the below strip", () => {
//   localgp.imageClick();
// });

// Then(
//   "the clicked photo should be highlighted in {string} for GP site",
//   (color) => {
//     localgp.stripBorderColor(color);
//   }
// );

// And("the corresponding bigger image should have background color black", () => {
//   localgp.largeImageBorderColor();
// });

// And("color of arrow icon should be {string} for GP site", (color) => {
//   localgp.arrowIconColorGallery(color);
// });

// // SWATCH COLOR COMPONENT
// And("check the first color code should be {string} for GP site", (string) => {
//   localgp.SwatchColors(string, 0);
// });

// And("check the second color code should be {string} for GP site", (string) => {
//   localgp.SwatchColors(string, 1);
// });

// And("check the third color code should be {string} for GP site", (string) => {
//   localgp.SwatchColors(string, 2);
// });

// And("check the fourth color code should be {string} for GP site", (string) => {
//   localgp.SwatchColors(string, 3);
// });

// // BUTTON COMPONENT
// Then("the primary button background color should be {string}", (string) => {
//   localgp.buttonBackgrndColor(string, primaryCTA);
// });

// And("the primary button font size should be {string}", (string) => {
//   localgp.buttontextSize(string, primaryCTAText);
// });

// And("the primary button font colour should be {string}", (string) => {
//   localgp.buttontextColor(string, primaryCTAText);
// });

// Then("the link CTA font size should be {string}", (string) => {
//   localgp.buttontextSize(string, linkCTAText);
// });

// And("the link CTA font colour should be {string}", (string) => {
//   localgp.buttontextColor(string, linkCTAText);
// });

// And("underline colour should be {string}", (string) => {
//   localgp.bttnBorderColor(string, linkCTA);
// });

// Then("the category Tag background color should be {string}", (string) => {
//   localgp.buttonBackgrndColor(string, categoryTagCTA);
// });

// And("the category Tag font size should be {string}", (string) => {
//   localgp.buttontextSize(string, categoryTagCTAText);
// });

// And("the category Tag font colour should be {string}", (string) => {
//   localgp.buttontextColor(string, categoryTagCTAText);
// });

// Then("the secondary CTA background color should be {string}", (string) => {
//   localgp.secondaryBackgrndColor(string, secondaryCTA);
// });

// And("the secondary CTA font size should be {string}", (string) => {
//   localgp.buttontextSize(string, secondaryCTAText);
// });

// And("the secondary CTA font colour should be {string}", (string) => {
//   localgp.buttontextColor(string, secondaryCTAText);
// });

// And("the secondary CTA outline colour should be {string}", (string) => {
//   localgp.bttnBorderColor(string, secondaryCTA);
// });

// And("the underline white on state font size should be {string}", (string) => {
//   localgp.buttontextSize(string, underlineWhiteCTAText);
// });

// And("the underline white on state font colour should be {string}", (string) => {
//   localgp.buttontextColor(string, underlineWhiteCTAText);
// });

// And(
//   "underline white on state underline colour should be {string}",
//   (string) => {
//     localgp.bttnBorderColor(string, underlineWhiteCTA);
//   }
// );

// Then(
//   "the secondary white CTA background color should be {string}",
//   (string) => {
//     localgp.buttonBackgrndColor(string, secondaryWhiteCTA);
//   }
// );

// And("the secondary white CTA font size should be {string}", (string) => {
//   localgp.buttontextSize(string, secondaryWhiteCTAText);
// });

// And("the secondary white CTA font colour should be {string}", (string) => {
//   localgp.buttontextColor(string, secondaryWhiteCTAText);
// });

// // RTE
// Then("I navigate to the RTE component on the page", () => {
//   cy.RTEcomponent(RTEHeadings, RTEPara);
// });

// And("Verify the heading should be in H1 to H6 in the component", () => {
//   cy.RTEHeadingSize(
//     RTEH1Heading,
//     RTEH2Heading,
//     RTEH3Heading,
//     RTEH4Heading,
//     RTEH5Heading,
//     RTEH6Heading
//   );
// });

// And("Verify the font styling of heading H1 to H6 in RTE component", () => {
//   cy.RTEHeadingfont(
//     RTEH1Heading,
//     RTEH2Heading,
//     RTEH3Heading,
//     RTEH4Heading,
//     RTEH5Heading,
//     RTEH6Heading
//   );
// });

// And("Verify the Paragraph text and its font styling in RTE component", () => {
//   cy.RTEParaStyling(RTEPara);
// });

// Then(
//   "I should see the font colour options {string}, {string}, {string}, {string} for GP",
//   (color1, color2, color3, color4) => {
//     localgp.fontColorOptions(color1, color2, color3, color4);
//   }
// );

// And(
//   "I should see the body text font size and font type for GP as {string} and {string}",
//   (size, fontFamily) => {
//     localgp.paraTextCSS(size, fontFamily);
//   }
// );

// And(
//   "I should see the link text colour for GP as {string} and size as {string}",
//   (size, color) => {
//     localgp.linkTextCSS(color, size);
//   }
// );

// And(
//   "I should see the font type for H1 in GP as {string} and size as {string}",
//   (heading, size) => {
//     localgp.headingTextCSS(heading, size);
//   }
// );

// And(
//   "I should see the font type for H2 in GP as {string} and size as {string}",
//   (heading, size) => {
//     localgp.headingTextCSS(heading, size);
//   }
// );

// And(
//   "I should see the font type for H3 in GP as {string} and size as {string}",
//   (heading, size) => {
//     localgp.headingTextCSS(heading, size);
//   }
// );

// And(
//   "I should see the font type for H4 in GP as {string} and size as {string}",
//   (heading, size) => {
//     localgp.headingTextCSS(heading, size);
//   }
// );

// And(
//   "I should see the font type for H5 in GP as {string} and size as {string}",
//   (heading, size) => {
//     localgp.headingTextCSS(heading, size);
//   }
// );

// And(
//   "I should see the font type for H6 in GP as {string} and size as {string}",
//   (heading, size) => {
//     localgp.headingTextCSS(heading, size);
//   }
// );

// And(
//   "I should see the font type for Style 1 in GP as {string} and size as {string}",
//   (title, size) => {
//     localgp.stlyeTextCSS(title, size);
//   }
// );

// And(
//   "I should see the font type for Style 2 in GP as {string} and size as {string}",
//   (title, size) => {
//     localgp.stlyeTextCSS(title, size);
//   }
// );

// And(
//   "I should see the font type for Style 3 in GP as {string} and size as {string}",
//   (title, size) => {
//     localgp.stlyeTextCSS(title, size);
//   }
// );

// And(
//   "I should see the font type for Style 4 in GP as {string} and size as {string}",
//   (title, size) => {
//     localgp.stlyeTextCSS(title, size);
//   }
// );

// And(
//   "I should see the font type for Style 5 in GP as {string} and size as {string}",
//   (title, size) => {
//     localgp.stlyeTextCSS(title, size);
//   }
// );

// And(
//   "I should see the font type for Style 6 in GP as {string} and size as {string}",
//   (title, size) => {
//     localgp.stlyeTextCSS(title, size);
//   }
// );

// And(
//   "I should see the font type for Style 7 in GP as {string} and size as {string}",
//   (title, size) => {
//     localgp.stlyeTextCSS(title, size);
//   }
// );

// And(
//   "I should see the font type for Style 8 in GP as {string} and size as {string}",
//   (title, size) => {
//     localgp.stlyeTextCSS(title, size);
//   }
// );

// // TITLE
// And(
//   "verify H1 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     cy.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H2 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     cy.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H3 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     cy.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H4 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     cy.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H5 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     cy.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// And(
//   "verify H6 {string} title font size is {string} and font family of title should be {string}",
//   (heading, fontSize, fontFamily) => {
//     cy.titlefontSize(heading, fontSize, fontFamily);
//   }
// );

// Then(
//   "I should see the title heading colour option as {string}, {string}, {string}, {string} for GP title",
//   (color1, color2, color3, color4) => {
//     localgp.fontColorOptionsTitle(color1, color2, color3, color4);
//   }
// );

// And(
//   "I should see the title heading type for H1 in GP as {string} and heading size as {string}",
//   (heading, fontSize) => {
//     localgp.titleTextCSS(heading, fontSize);
//   }
// );

// And(
//   "I should see the title heading type for H2 in GP as {string} and heading size as {string}",
//   (heading, fontSize) => {
//     localgp.titleTextCSS(heading, fontSize, "style-2");
//   }
// );

// And(
//   "I should see the title heading type for H3 in GP as {string} and heading size as {string}",
//   (heading, fontSize) => {
//     localgp.titleTextCSS(heading, fontSize, "style-3");
//   }
// );

// And(
//   "I should see the title heading type for H4 in GP as {string} and heading size as {string}",
//   (heading, fontSize) => {
//     localgp.titleTextCSS(heading, fontSize, "style-4");
//   }
// );

// And(
//   "I should see the title heading type for H5 in GP as {string} and heading size as {string}",
//   (heading, fontSize) => {
//     localgp.titleTextCSS(heading, fontSize, "style-5");
//   }
// );

// And(
//   "I should see the title heading type for H6 in GP as {string} and heading size as {string}",
//   (heading, fontSize) => {
//     localgp.titleTextCSS(heading, fontSize, "style-6");
//   }
// );

// And(
//   "I should see the title heading type for {string} Style 1 in GP as {string} and heading size as {string}",
//   (heading, style, fontSize) => {
//     localgp.titlestlyeTextCSS(heading, style, fontSize);
//   }
// );

// And(
//   "I should see the title heading type for {string} Style 2 in GP as {string} and heading size as {string}",
//   (heading, style, fontSize) => {
//     localgp.titlestlyeTextCSS(heading, style, fontSize);
//   }
// );

// And(
//   "I should see the title heading type for {string} Style 3 in GP as {string} and heading size as {string}",
//   (heading, style, fontSize) => {
//     localgp.titlestlyeTextCSS(heading, style, fontSize);
//   }
// );

// And(
//   "I should see the title heading type for {string} Style 4 in GP as {string} and heading size as {string}",
//   (heading, style, fontSize) => {
//     localgp.titlestlyeTextCSS(heading, style, fontSize);
//   }
// );

// And(
//   "I should see the title heading type for {string} Style 5 in GP as {string} and heading size as {string}",
//   (heading, style, fontSize) => {
//     localgp.titlestlyeTextCSS(heading, style, fontSize);
//   }
// );

// And(
//   "I should see the title heading type for {string} Style 6 in GP as {string} and heading size as {string}",
//   (heading, style, fontSize) => {
//     localgp.titlestlyeTextCSS(heading, style, fontSize);
//   }
// );

// And(
//   "I should see the title heading type for {string} Style 7 in GP as {string} and heading size as {string}",
//   (heading, style, fontSize) => {
//     localgp.titlestlyeTextCSS(heading, style, fontSize);
//   }
// );

// And(
//   "I should see the title heading type for {string} Style 8 in GP as {string} and heading size as {string}",
//   (heading, style, fontSize) => {
//     localgp.titlestlyeTextCSS(heading, style, fontSize);
//   }
// );

// // ACCORDIAN
// Then("I navigate to Accordion component in Specifications section", () => {
//   cy.accordianSection(accordian);
// });

// And("Clicking on + icon opens all links", () => {
//   cy.plusAccordianClick(accordian, accordianExpand);
// });

// And("Clicking on - icon closes all links", () => {
//   cy.minusAccordianClick(accordian, accordianClosed);
// });

// // QUOTE COMPONENT
// Then("the quote component is loaded on the page", () => {
//   cy.quoteComponentVisible(quoteComponent, 2);
// });

// And("the carousel should display with a maximum of 1 quote", () => {
//   cy.quoteComponentTextSize(quoteComponent, quoteComponentText, 1);
// });

// And(
//   "the single quote should have quote text, title and author are displayed on the quote",
//   () => {
//     cy.quoteNameTitleAuthor(
//       quoteComponent,
//       quoteComponentTitleText,
//       quoteComponentText,
//       quoteCompAuthorCSS,
//       1
//     );
//   }
// );

// And(
//   "the quote title should be in {string} and font size should be {string} and weight should be bold",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentTitleCSS(
//       quoteComponent,
//       quoteComponentTitleText,
//       fontFamily,
//       fontSize,
//       1
//     );
//   }
// );

// And(
//   "the quote text should have font family {string} and font size should be {string} and weight should be bold",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentTextCSS(
//       quoteComponent,
//       quoteComponentText,
//       fontFamily,
//       fontSize,
//       1
//     );
//   }
// );

// And(
//   "the quote author text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentAuthorCSS(
//       quoteComponent,
//       quoteCompAuthorCSS,
//       fontFamily,
//       fontSize,
//       1
//     );
//   }
// );

// And("the background color of quote should be {string}", (color) => {
//   localgp.quoteBackgrndColor(color, quoteComponent, 1);
// });
// And(
//   "the background color of quote should be {string} for first quote",
//   (color) => {
//     localgp.quoteBackgrndColor(color, firstQuote, 0);
//   }
// );
// And(
//   "the background color of quote should be {string} for second quote",
//   (color) => {
//     localgp.quoteBackgrndColor(color, secondQuote, 0);
//   }
// );
// And(
//   "the background color of quote should be {string} for third quote",
//   (color) => {
//     localgp.quoteBackgrndColor(color, thirdQuote, 0);
//   }
// );

// And("the carousel should display with a maximum of 3 quotes", () => {
//   cy.quoteCarouselVisible(
//     quoteComponent,
//     threeCarouselVisible,
//     CarouselAllQuotes
//   );
// });

// And(
//   "first dot should be selected by default and quote text, title and author are displayed for first quote",
//   () => {
//     cy.CarouselDefaultCheck(firstDefaultCarousel);
//     cy.quoteNameTitleAuthor(
//       quoteComponent,
//       quoteComponentTitleText,
//       quoteComponentText,
//       quoteCompAuthorCSS,
//       0
//     );
//   }
// );

// And(
//   "the quote title should be in {string} and font size should be {string} and weight should be bold in first quote",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentTitleCSS(
//       quoteComponent,
//       quoteComponentTitleText,
//       fontFamily,
//       fontSize,
//       0
//     );
//   }
// );

// And(
//   "quote text should have font family {string} and font size should be {string} and weight should be bold in first quote",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentTextCSS(
//       quoteComponent,
//       quoteComponentText,
//       fontFamily,
//       fontSize,
//       0
//     );
//   }
// );

// And(
//   "the quote author text should be in {string} and the font size should be {string} in first quote",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentAuthorCSS(
//       quoteComponent,
//       quoteCompAuthorCSS,
//       fontFamily,
//       fontSize,
//       0
//     );
//   }
// );

// And("the carousel dots should appear below the carousel", () => {
//   cy.CarouselCheck(CarouselVisible);
// });

// When("the user clicks on the dot for quote 2", () => {
//   cy.CarouselClick(secondCarousel);
// });

// Then("the carousel should display the second quote", () => {
//   cy.CarouselDisplay(secondDefaultCarousel);
// });

// And(
//   "the second quote component should have quote text, title and author displayed",
//   () => {
//     cy.quoteNameTitleAuthor(
//       secondQuote,
//       quoteComponentTitleText,
//       quoteComponentText,
//       quoteCompAuthorCSS,
//       0
//     );
//   }
// );
// And(
//   "the quote title should be in {string} and font size should be {string} and weight should be bold in second quote",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentTitleCSS(
//       secondQuote,
//       quoteComponentTitleText,
//       fontFamily,
//       fontSize,
//       0
//     );
//   }
// );

// And(
//   "the quote text should have the font family {string} and font size should be {string} and weight should be bold in second quote",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentTextCSS(
//       secondQuote,
//       quoteComponentText,
//       fontFamily,
//       fontSize,
//       0
//     );
//   }
// );
// And(
//   "the quote author text should be in {string} and font size should be {string} in second quote",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentAuthorCSS(
//       secondQuote,
//       quoteCompAuthorCSS,
//       fontFamily,
//       fontSize,
//       0
//     );
//   }
// );

// When("the user clicks on the dot for quote 3", () => {
//   cy.CarouselClick(thirdCarousel);
// });

// Then("the carousel should display the third quote", () => {
//   cy.CarouselDisplay(thirdDefaultCarousel);
// });

// And(
//   "the third quote component should have quote text, title and author displayed",
//   () => {
//     cy.quoteNameTitleAuthor(
//       thirdQuote,
//       quoteComponentTitleText,
//       quoteComponentText,
//       quoteCompAuthorCSS,
//       0
//     );
//   }
// );
// And(
//   "the quote title should be in {string} and font size should be {string} and weight should be bold in third quote",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentTitleCSS(
//       thirdQuote,
//       quoteComponentTitleText,
//       fontFamily,
//       fontSize,
//       0
//     );
//   }
// );
// And(
//   "quote text should have the font family {string} and font size should be {string} and weight should be bold in third quote",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentTextCSS(
//       thirdQuote,
//       quoteComponentText,
//       fontFamily,
//       fontSize,
//       0
//     );
//   }
// );

// And(
//   "the quote author text should be in {string} and font size should be {string} in third quote",
//   (fontFamily, fontSize) => {
//     cy.quoteComponentAuthorCSS(
//       thirdQuote,
//       quoteCompAuthorCSS,
//       fontFamily,
//       fontSize,
//       0
//     );
//   }
// );

// And(
//   "verify that title, text and author are different to check new quote is loaded",
//   () => {
//     cy.compareText3Quotes(
//       firstQuoteText,
//       secondCarousel,
//       secondQuoteText,
//       thirdCarousel,
//       thirdQuoteText
//     );
//   }
// );

// // INFO COMPONENT
// And(
//   "the text in the information box should contain {string}",
//   (componentText) => {
//     cy.InfoComponentText(infoComponent, infoComponentText, componentText);
//   }
// );

// And(
//   "the {string} text should be {string} and font size is {string}",
//   (Title, fontFamily, fontSize) => {
//     cy.infoComponentboldTextFont(
//       infocomponentBoldText,
//       Title,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// And("there should be an icon displayed", () => {
//   cy.infoComponenticonVisible(infocomponentIcon);
// });

// And(
//   "the other text should be {string} and font size is {string}",
//   (fontFamily, fontSize) => {
//     cy.InfoComponentTextFamily(infoComponentText, fontFamily, fontSize);
//   }
// );

// And("I click on the button, response should be 200", () => {
//   cy.BttnResponse(infoComponentbttn);
// });

// And("the background color of button should be {string}", (color) => {
//   localgp.buttonBackgrndColor(color, infoComponentbttn);
// });

// And(
//   "{string} text should be {string} and font size is {string}",
//   (Title, fontFamily, fontSize) => {
//     cy.infoComponentboldTextFont(
//       infoComponentbttn,
//       Title,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// // COMMON CONCERN CAROUSEL
// Then("I should be able to see Common Concern carousel component", () => {
//   cy.commonConcernCarouselVisbile(commonConcernCard);
// });

// And("I should be able to see the title", () => {
//   cy.commonConcernCarouselTitleVisible(commonConcernMainTitle);
// });

// And("I should see right arrow", () => {
//   cy.commonConcernCarouselRightVisible(commonConcernCardRight);
// });

// And("there are cards displayed with image and title", () => {
//   cy.commonConcernCarouselTitleImageVisible(
//     commonConcernCardImage,
//     commonConcernCardTitle
//   );
// });

// And(
//   "the card title is having font family {string} and font size {string} on Common Concern carousel",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(commonConcernCardTitle, fontFamily, fontSize);
//   }
// );

// And("title has yellow underline", () => {
//   cy.commonConcernCarouselYellowUnderlineVisible(commonConcernCardTitle);
// });

// And(
//   "the user clicks on any part of the card and user should be redirected to the corresponding link with a 200 status code",
//   () => {
//     cy.verifyBttnRedirection(commonConcerCardLink);
//   }
// );

// Then("I should be able to click on right side arrow", () => {
//   cy.commonConcerCarouselRightClick(commonConcernCardRight);
// });

// And("next articles should be displayed", () => {
//   cy.commonConcerCarouselNextVisible(commonConcernCardTitle1);
// });

// And(
//   "when we click on on previous arrow previous articles should be displayed",
//   () => {
//     cy.commonConcerCarouselPreviousVisible(
//       commonConcernCardLeft,
//       commonConcernCardTitle1
//     );
//   }
// );

// And(
//   "verify that each card title is a link to the full article and with a 200 status code",
//   () => {
//     cy.BttnResponse200(threeCardBttnViewAllLink, 0);
//   }
// );

// Then("I should be able to see 4 column common concerns card set", () => {
//   cy.commonConcern4CardVisible(commonConcern4Column);
// });

// And("I should see 4 cards in row and there is no arrow", () => {
//   cy.commonConcern4cardsRow(commonConcern4Column);
//   cy.magazineCarouselColumnRightLeftArrow(
//     magazinecardNext,
//     magazineCardPrevious
//   );
// });

// And("there are Common Concern cards displayed with image and title", () => {
//   cy.commonConcernCardImageTitle(commonConcern4Title, commonConcern4Image);
// });

// And(
//   "the card title is having font family {string} and font size {string} on Common Concern 4 column",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(commonConcern4Title, fontFamily, fontSize);
//   }
// );

// And("Common Concern card title has yellow underline", () => {
//   cy.titleLineColour(commonConcern4Title);
// });

// When(
//   "the user clicks on any part of the common concern 4 card and user should be redirected to the corresponding link with a 200 status code",
//   () => {
//     cy.verifyBttnRedirection(commonConcern4CardLink);
//   }
// );

// Then("I should be able to see 3 column common concerns card set", () => {
//   cy.commonConcern3CardVisible(commonConcern3Column);
// });

// And("I should see two rows with in three cards each row without arrow", () => {
//   cy.commonconcern3cardsRow(commonConcern3Column);
//   cy.magazineCarouselColumnRightLeftArrow(
//     magazinecardNext,
//     magazineCardPrevious
//   );
// });

// And("there are Common Concern 3 cards displayed with image and title", () => {
//   cy.commonConcernCardImageTitle(commonConcern3Title, commonConcern3Image);
// });

// And(
//   "the card title is having font family {string} and font size {string} on Common Concern 3 column",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(commonConcern3Title, fontFamily, fontSize);
//   }
// );

// And("Common Concern 3 card title has yellow underline", () => {
//   cy.titleLineColour(commonConcern3Title);
// });

// When(
//   "the user clicks on any part of the common concern 3 card and user should be redirected to the corresponding link with a 200 status code",
//   () => {
//     cy.verifyBttnRedirection(commonConcern3CardLink);
//   }
// );

// Then("I should be able to see the Common Concern carousel component", () => {
//   localgp.componentVisible(commonConcernCard);
// });

// And("common Concern carousel arrow colour should be {string}", (color) => {
//   localgp.commonConcernArrowColor(color);
// });

// And("the text underline colour should be {string}", (color) => {
//   localgp.bttnBorderColor(color, commonConcernCardTitle);
// });

// Then("I should be able to see 4 Common Concern carousel component", () => {
//   localgp.componentVisible(commonConcern4Column);
// });

// And(
//   "the common concerns 4 column text underline colour should be {string}",
//   (color) => {
//     localgp.threefourcommonConcernUnderline(commonConcern4Title, color);
//   }
// );

// Then("I should be able to see 3 Common Concern carousel component", () => {
//   localgp.componentVisible(commonConcern3Column);
// });

// And(
//   "the common concerns 3 text underline colour should be {string}",
//   (color) => {
//     localgp.threefourcommonConcernUnderline(commonConcern3Title, color);
//   }
// );

// // MAGAZINE CAROUSEL
// Then("I should see the magazine carousel displayed", () => {
//   cy.magazineCarouselVisible(magazineCarousel);
// });

// And("the magazine carousel should contain a right arrow and 4 cards", () => {
//   cy.magazineCarouselRightVisible(
//     magazinecardNext,
//     magazineCarouselTile1,
//     magazineCarouselTile2,
//     magazineCarouselTile3,
//     magazineCarouselTile4,
//     magazineCarouselTile5
//   );
// });

// And(
//   "each magazine carousel card should be clickable with a 200 status code",
//   () => {
//     cy.BttnResponse(magazineCarouselLink);
//   }
// );

// And("each card should have an image and a description", () => {
//   cy.magazineCarouselTitleDescImage(
//     magazineCarouselDesc,
//     magazineCarouselImage
//   );
// });

// And(
//   "the card title is having font family {string} and font size {string} on Magazine Carousel",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(magazineCarouselTiTle, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on Magazine Carousel",
//   (fontFamily, fontSize) => {
//     cy.CardListDescCSS(magazineCarouselDesc, fontFamily, fontSize);
//   }
// );

// When("I click on the right arrow", () => {
//   cy.magazineCarouselRightClick(magazinecardNext);
// });

// Then("the next card in the carousel should be displayed", () => {
//   cy.magazineCarouselRightDisplay(magazineCarouselTile5);
// });

// And(
//   "when we click on previous arrow, previous card should display in 4 set card",
//   () => {
//     cy.magazineCarouselLeftVisible(
//       magazineCardPrevious,
//       magazineCarouselTile1,
//       magazineCarouselTile2,
//       magazineCarouselTile3,
//       magazineCarouselTile4,
//       magazineCarouselTile5
//     );
//   }
// );

// When(
//   "I reach the end of the carousel by clicking the right arrow multiple times",
//   () => {
//     cy.magazineCarouselRightClickEnd(magazinecardNext);
//   }
// );

// And(
//   "there should not be a right arrow visible and only the left arrow should be displayed",
//   () => {
//     cy.magazineCarouselRightLeftArrow(magazinecardNext, magazineCardPrevious);
//   }
// );

// Then("I should see the 2-column magazine displayed", () => {
//   cy.magazineCarouselColumnVisible(magazineCarousel2Column);
// });

// And(
//   "the 2-column should contain 2 cards in row and does not contain any arrow",
//   () => {
//     cy.magazineCarousel2cardsRow(magazineCarousel2Column);
//     cy.magazineCarouselColumnRightLeftArrow(
//       magazinecardNext,
//       magazineCardPrevious
//     );
//   }
// );

// And("each card should be clickable with a 200 status code", () => {
//   cy.BttnResponse(magazineCarousel2ColumnLink);
// });

// And(
//   "each Two column Magazine card should have an image, title in blue color, and a description",
//   () => {
//     cy.magazineCarouselTitleDescImage(
//       magazineCarousel2ColumnTitle,
//       magazineCarousel2ColumnDesc,
//       magazineCarousel2ColumnImage
//     );
//   }
// );

// And(
//   "the card title is having font family {string} and font size {string} on Two column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(magazineCarousel2ColumnTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on Two column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     cy.CardListDescCSS(magazineCarousel2ColumnDesc, fontFamily, fontSize);
//   }
// );

// Then("I should see the 4-column magazine displayed", () => {
//   cy.magazineCarouselColumnVisible(magazineCarousel4Column);
// });

// And(
//   "the 4-column should contain 4 cards and does not contain any arrow",
//   () => {
//     cy.magazineCarousel4cardsRow(magazineCarousel4Column);
//     cy.magazineCarouselColumnRightLeftArrow(
//       magazinecardNext,
//       magazineCardPrevious
//     );
//   }
// );

// And(
//   "each Four column Magazine card should be clickable with a 200 status code",
//   () => {
//     cy.BttnResponse(magazineCarousel4ColumnLink);
//   }
// );

// And(
//   "each Four column Magazine card should have an image, title in blue color, and a description",
//   () => {
//     cy.magazineCarouselTitleDescImage(
//       magazineCarousel4ColumnTitle,
//       magazineCarousel4ColumnDesc,
//       magazineCarousel4ColumnImage
//     );
//   }
// );

// And(
//   "the card title is having font family {string} and font size {string} on Four column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(magazineCarousel4ColumnTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on Four column Magazine Carousel",
//   (fontFamily, fontSize) => {
//     cy.CardListDescCSS(magazineCarousel4ColumnDesc, fontFamily, fontSize);
//   }
// );

// Then("I should be able to see the Magazine carousel component", () => {
//   localgp.componentVisible(magazineCarousel);
// });

// And("magazine carousel arrow colour should be {string}", (color) => {
//   localgp.magazinCarouselnArrowColor(color);
// });

// And("the magazine carousel title colour should be {string}", (color) => {
//   localgp.magazineTitleColor(magazineCarouselTiTle, color);
// });

// Then("I should be able to see 4 Magazine carousel component", () => {
//   localgp.componentVisible(magazineCarousel4ColumnTitle);
// });

// And("the 4 magazine carousel title colour should be {string}", (color) => {
//   localgp.magazineTitleColor(magazineCarousel4ColumnTitle, color);
// });

// Then("I should be able to see 2 Magazine carousel component", () => {
//   localgp.componentVisible(magazineCarousel2ColumnTitle);
// });

// And("the 2 magazine carousel title colour should be {string}", (color) => {
//   localgp.magazineTitleColor(magazineCarousel2ColumnTitle, color);
// });

// // CARD COMPONENT
// When("the user views the text cards", () => {
//   cy.textcardwithCTA(textcardwithCTAComponent);
// });

// And(
//   "each card with CTA should have a Title, Description and CTA button",
//   () => {
//     cy.cardElements(
//       textcardwithCTATitle,
//       textcardwithCTADescription,
//       textcardCTA
//     );
//   }
// );
// And("verify the CTA response is 200", () => {
//   cy.CTAresponse(textcardCTAAnchor);
// });

// And("the background color of each text card should be white", () => {
//   cy.cardBackground(cardBG);
// });

// And("verify the CTA has underline color {string}", (color) => {
//   localgp.cardUL(color);
// });

// And("the user views the text cards without CTA", () => {
//   cy.cardTextwithoutCTA(textcardwithCTAComponent);
// });

// And("each card without CTA should have a Title and Description", () => {
//   cy.cardTextTitleDesc(
//     textCardWOCTATitle,
//     textCardWOCTADescription,
//     textcardwithCTADescription
//   );
// });

// And(
//   "the background color of each Text card without CTA should be white",
//   () => {
//     cy.cardTextWObackgroundcolor(textCardWOCTABG);
//   }
// );

// And("the user views the fact card", () => {
//   cy.factCardsComponent(factCardComponent);
// });

// Then(
//   "the fact card should have a {string}, {string}, {string}, {string} background",
//   (color1, color2, color3, color4) => {
//     cy.factCardBackground(factCardBG, 1, color1);
//     cy.factCardBackground(factCardBG, 2, color2);
//     cy.factCardBackground(factCardBG, 3, color3);
//     cy.factCardBackground(factCardBG, 4, color4);
//   }
// );

// And("the fact card should display a Title", () => {
//   cy.factCardsTitle(factCardTitle);
// });

// And("the fact card should display a Subtitle", () => {
//   cy.factCardsDesc(factCardDescription);
// });

// And("title, subtitle should be center aligned", () => {
//   cy.factCardsCenter(factCardTitle, factCardDescription);
// });

// And("the user views the cost cards", () => {
//   cy.costCardComponenet(costCard);
// });

// And("each card should have a Title", () => {
//   cy.costTitle(costCardTitle);
// });

// And("each card should have a Cost displayed", () => {
//   cy.costCardCost(costCardDesc);
// });

// And("each card should have a Date displayed", () => {
//   cy.costCardDate(costCardSubTitle);
// });

// And("each card should have a CTA link, verify the CTA response is 200", () => {
//   cy.costCardCTABttn(costCardCTA);
// });

// And("the background color of each cost card should be white", () => {
//   cy.costCardWhiteColour(costCardBG);
// });

// And("the user views the tags cards", () => {
//   cy.tagsCardsComponent(tagCard);
// });

// And("each tags card should have a Title", () => {
//   cy.tagsCardsTitle(tagCardTitle);
// });

// And("each tags card should have a Description", () => {
//   cy.tagsCardsDesc(tagCardDesc);
// });

// And("each card should have Tags", () => {
//   cy.tagsCardBttn(tagCardCTAtags);
// });

// And(
//   "if a specific tag is present with a CTA, verify the CTA response is 200",
//   () => {
//     cy.BttnResponse(tagCardTagsAnchor);
//   }
// );

// And("the user views the text cards with Icon", () => {
//   localgp.componentVisible(textcardIcon);
// });

// And("card should have a Title and Description", () => {
//   localgp.textCardIcon();
// });

// And("card should have a CTA link, verify the CTA response is 200", () => {
//   cy.BttnResponse(textcarIconBttn);
// });

// // COST ESTIMATOR COMPONENT
// When("the cost estimator component is loaded", () => {
//   cy.costEstimatorComponent(costEstimatorVisible);
// });

// Then("by default user should see {string} title", (tabName) => {
//   cy.costEstimatorActive(costEstimatorActiveTab, tabName);
// });

// And(
//   "Routine cleaning tab should contain cost three columns of cost card teaser",
//   () => {
//     cy.costCardEstimatorComponent(costCardEstimator);
//   }
// );

// And("Tab has background colour as {string}", (backgroundColor) => {
//   cy.costEstimatorTabColor(costEstimatorActiveTab, backgroundColor);
// });

// And("each cost card has cost, title and subtext displayed", () => {
//   cy.costEstimatorCostTitleSubtext(
//     costCardEstimatorTitle,
//     costCardEstimatorCost,
//     costCardEstimatorSubtext
//   );
// });

// And(
//   "the cost text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.costEstimatorCost(costCardEstimatorCost, fontFamily, fontSize);
//   }
// );

// And(
//   "the title text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.costEstimatorTitle(costCardEstimatorTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the subtext text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.costEstimatorSubtext(costCardEstimatorSubtext, fontFamily, fontSize);
//   }
// );

// When("the user clicks on the right arrow icon", () => {
//   cy.costEstimatorRightArrowClick(costEstimatorRightArrow);
// });

// Then("the content of {string} should be displayed", (tabName) => {
//   cy.costEstimatorTabContentCheck(
//     costEstimatorActiveTab,
//     costCardEstimator,
//     costCardEstimatorTitle,
//     costCardEstimatorCost,
//     costCardEstimatorSubtext,
//     tabName,
//     "1",
//     "3"
//   );
// });

// When("the user clicks on the left arrow icon", () => {
//   cy.costEstimatorLeftArrowClick(costEstimatorLeftArrow);
// });

// Then("the content of {string} tab should be displayed", (tabName) => {
//   cy.costEstimatorTabContentCheck(
//     costEstimatorActiveTab,
//     costCardEstimator,
//     costCardEstimatorTitle,
//     costCardEstimatorCost,
//     costCardEstimatorSubtext,
//     tabName,
//     "0",
//     "0"
//   );
// });

// When("the user clicks on the right arrow icon for 4 times", () => {
//   cy.costEstimatorRightArrowClickFive(costEstimatorRightArrow);
// });

// Then("user should see {string} as tab name", (tabName) => {
//   cy.costEstimatorActive(costEstimatorActiveTab, tabName);
// });

// When("user clicks on right arrow one more time", () => {
//   cy.costEstimatorRightArrowClick(costEstimatorRightArrow);
// });

// Then("content of {string} tab should be displayed", (tabName) => {
//   cy.costEstimatorTabContentCheck(
//     costEstimatorActiveTab,
//     costCardEstimator,
//     costCardEstimatorTitle,
//     costCardEstimatorCost,
//     costCardEstimatorSubtext,
//     tabName,
//     "5",
//     "15"
//   );
// });

// When("the user clicks on the left arrow icon for 4 times", () => {
//   cy.costEstimatorLeftArrowClickFive(costEstimatorLeftArrow);
// });

// When("user clicks on left arrow one more time", () => {
//   cy.costEstimatorLeftArrowClick(costEstimatorLeftArrow);
// });

// When("there are {string} tabs authored", (tabSize) => {
//   cy.TabsAuthoredCostEstimator(CostEstimatorTabsAuthored, tabSize);
// });

// Then("the left and right arrow icons should be hidden", () => {
//   cy.costEstimatorArrowNotVisible(
//     costEstimatorRightArrow,
//     costEstimatorLeftArrow
//   );
// });

// Then("the left and right arrow icons should be visible", () => {
//   cy.costEstimatorArrowVisible(costEstimatorRightArrow, costEstimatorLeftArrow);
// });

// When("user clicks on {string} tab", (tabName) => {
//   cy.costEstimatorTabClick(CostEstimatorTabsAuthored, tabName);
// });

// Then("the cost estimator cost colour should be {string}", (color) => {
//   localgp.costEstimatorPrice(color);
// });

// And("the cost estimator arrow colour should be {string}", (color) => {
//   localgp.arrowIconColor(color);
// });

// And("the cost estimator tab border top colour should be {string}", (color) => {
//   localgp.costEstimatorTabBorder(color);
// });

// // TEASER
// Then("verify the teaser with an image on the page", () => {
//   cy.teaserhalfImageComponent(teaserImageComponent);
// });

// And("verify the teaser has a heading and subtext", () => {
//   cy.teaserTitleAndSubextVisible(seeMoreTitle, seeMoreDesc);
// });

// And(
//   "the title should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.teaserTitleCSS(seeMoreTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the subtext should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.teaserSubtextCSS(seeMoreDesc, fontFamily, fontSize);
//   }
// );

// And("verify the teaser has a {string} link", (seeMore) => {
//   cy.teaserseemoreLink(seeMoreLessLink, seeMore);
// });

// And(
//   "verify the {string} link has underline with color {string}",
//   (seeMore, color) => {
//     localgp.seeLessMoreBttnUndercolor(seeMoreLessLinkUnderline, seeMore, color);
//   }
// );

// When("the user clicks on the {string} link", (seeMore) => {
//   cy.clickSeeMoreLess(seeMoreLessLink, seeMore);
// });

// Then("the teaser expands to show more description", () => {
//   cy.seeMoreTitleDesc(seeMoreTitle, seeMoreDesc, seeMoreContentStyle);
// });

// And("the teaser displays a {string} link", (seeLess) => {
//   cy.teaserseelessLink(seeMoreLessLink, seeLess);
// });

// And(
//   "verify {string} link has underline with color {string}",
//   (seeLess, color) => {
//     localgp.seeLessMoreBttnUndercolor(seeMoreLessLinkUnderline, seeLess, color);
//   }
// );

// When("the user click on the {string} link", (seeLess) => {
//   cy.clickSeeMoreLess(seeMoreLessLink, seeLess);
// });

// Then(
//   "the teaser collapses to hide the additional description and {string} link should be visible",
//   (seeMore) => {
//     cy.teaserSeeLessCollapse(seeLessCollapse, seeMoreLessLink, seeMore);
//   }
// );

// And("verify teaser with half left image on the page", () => {
//   cy.teaserleftimageComponent(leftimageComponent);
// });

// And("verify Teaser- left image is present", () => {
//   cy.teaserleftimageVisible(leftImageTeaser);
// });

// And("title and description is present on right side", () => {
//   cy.teaserleftImageTitleDesc(leftImageTeaserTitle, leftImageTeaserDesc);
// });

// And(
//   "title should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.teaserleftImageTitleCSS(leftImageTeaserTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.teaserleftImageDescCSS(leftImageTeaserDesc, fontFamily, fontSize);
//   }
// );

// And("there is CTA link at bottom", () => {
//   cy.teaserleftimageBttnVisible(leftimageBttn);
// });

// And(
//   "CTA text should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.teaserleftimageBttnCSS(leftimageBttn, fontFamily, fontSize);
//   }
// );

// And("clicking on CTA link navigates to 200 page", () => {
//   cy.BttnResponse(leftimageBttn);
// });

// And("verify the CTA link has underline with color {string}", (color) => {
//   localgp.CTABttnUndercolor(leftimageBttn, color);
// });

// And("verify teaser with half right image on the page", () => {
//   cy.teaserrightimageComponent(rightimageComponent);
// });

// And("verify Teaser - right image is present on the page", () => {
//   cy.teaserrightimageVisible(rightimageVisible);
// });

// And("title and description is present on left side", () => {
//   cy.teaserrightImageTitleDesc(rightImageTeaserTitle, rightImageTeaserDesc);
// });

// And(
//   "title should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.teaserrightImageTitleCSS(rightImageTeaserTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "description should be in {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.teaserrightImageDescCSS(rightImageTeaserDesc, fontFamily, fontSize);
//   }
// );

// And("there is CTA link at the bottom", () => {
//   cy.teaserrightimageBttnVisible(rightimageBttn);
// });

// And(
//   "CTA text should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.teaserleftimageBttnCSS(rightimageBttn, fontFamily, fontSize);
//   }
// );

// And("clicking on CTA link navigates to the 200 page", () => {
//   cy.BttnResponse(rightimageBttn);
// });

// And("verify CTA link has underline with color {string}", (color) => {
//   localgp.CTABttnUndercolor(rightimageBttn, color);
// });

// And("verify teaser with half image without CTA on the page on GP site", () => {
//   cy.teaserWithoutCTA(teaserwithoutCTA);
// });

// And("verify teaser image is present", () => {
//   cy.teaserWithoutCTAImage(teaserwithoutCTAImage);
// });

// And("verify title is present on the page", () => {
//   cy.teaserWithoutCTATitle(teaserwithoutCTATitle);
// });

// And("verify description is present", () => {
//   cy.teaserWithoutCTADesc(teaserwithoutCTADesc);
// });

// And(
//   "title should be in the {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.teaserWithoutCTATitleCSS(teaserwithoutCTATitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.teaserWithoutCTADescCSS(teaserwithoutCTADesc, fontFamily, fontSize);
//   }
// );

// And("there is no CTA link at bottom", () => {
//   cy.teaserWithoutCTAvisible(teaserwithoutCTAVisible);
// });

// // DYNAMIC LISTING
// Then("I shoud see the 3 cards listing variation", () => {
//   cy.threeCardListingVisible(threeCardList);
// });

// And("{string} button should be displayed on right side", (string) => {
//   cy.CardBttnVisible(threeCardBttnViewAll, 2, string);
// });

// And(
//   "the Button text {string} is having font family {string} and font size {string} on 3 cards listing",
//   (string, fontFamily, fontSize) => {
//     cy.CardBttnCSS(threeCardBttnViewAll, 2, string, fontFamily, fontSize);
//   }
// );

// And("I see that there are {string} cards in the listing", (string) => {
//   cy.CardListSize(threeCardListing, string);
// });

// And("Each card has image, title and description", () => {
//   cy.CardListTitleImageDesc(threeCardTitle, threeCardDesc, threeCardImage);
// });

// And("title should be in {string} color", (color) => {
//   localgp.titleColorListing(threeCardTitle, color);
// });

// And(
//   "the Card title is having font family {string} and font size {string} on 3 cards listing",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(threeCardTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the Card description is having font family {string} and font size {string} on 3 cards listing",
//   (fontFamily, fontSize) => {
//     cy.CardListDescCSS(threeCardDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "I see that each article title is a link to the full article and with a 200 status code",
//   () => {
//     cy.BttnLinkNotEmpty(threeCardTitleLink);
//   }
// );

// And(
//   "I see that the {string} button should have 200 status code on 3 cards listing",
//   (string) => {
//     cy.BttnLinkNotEmpty(threeCardBttnViewAllLink, 2);
//   }
// );

// Then("I see the 4 cards listing variation", () => {
//   cy.fourCardListingVisible(fourCardList);
// });

// And("{string} button should be displayed on the right side", (string) => {
//   cy.CardBttnVisible(fourCardBttnViewAll, 0, string);
// });

// And(
//   "the Button text {string} is having font family {string} and font size {string} on 4 cards listing component",
//   (string, fontFamily, fontSize) => {
//     cy.CardBttnCSS(fourCardBttnViewAll, 0, string, fontFamily, fontSize);
//   }
// );

// And("I see that there are {string} cards on cards listing", (string) => {
//   cy.CardListSize(fourCardListing, string);
// });

// And("Each card has image, title and description on 4 cards listing", () => {
//   cy.CardListTitleImageDesc(fourCardTitle, fourCardDesc, fourCardImage);
// });

// And("title should be in {string} color on 4 cards listing", (color) => {
//   localgp.titleColorListing(fourCardTitle, color);
// });

// And(
//   "the Card title is having font family {string} and font size {string} on 4 cards listing",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(fourCardTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the Card description is having font family {string} and font size {string} on 4 cards listing",
//   (fontFamily, fontSize) => {
//     cy.CardListDescCSS(fourCardDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "Verify that each article title is a link to the full article and with a 200 status code",
//   () => {
//     cy.BttnLinkNotEmpty(fourCardTitleLink);
//   }
// );

// And(
//   "I see that the {string} button should have 200 status code on 4 cards listing",
//   () => {
//     cy.BttnLinkNotEmpty(fourCardBttnViewAllLink);
//   }
// );

// Then("I should see carousel listing variation", () => {
//   cy.threecarouselListingVisbile(threeCarouselComponent);
// });

// And(
//   "{string} button should be displayed on right side of carousel listing component",
//   (string) => {
//     cy.CardBttnVisible(threeCarouselBttnViewAll, 2, string);
//   }
// );

// And(
//   "the Button text {string} is having font family {string} and font size {string} on 3 card carousel listing",
//   (string, fontFamily, fontSize) => {
//     cy.CardBttnCSS(threeCarouselBttnViewAll, 2, string, fontFamily, fontSize);
//   }
// );

// And("I see that there are 3 cards in the listing", () => {
//   cy.threeCarouselCardsSize(
//     threeCarouselTitle1,
//     threeCarouselTitle2,
//     threeCarouselTitle3,
//     threeCarouselTitle4
//   );
// });

// And("Each card has image title and description", () => {
//   cy.CardListTitleImageDesc(
//     threeCarouselTitle,
//     threeCarouselDesc,
//     threeCarouselImage
//   );
// });

// And(
//   "the Card title is having font family {string} and font size {string} on carousel listing",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(threeCarouselTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the Card description is having font family {string} and font size {string} on carousel listing",
//   (fontFamily, fontSize) => {
//     cy.CardListDescCSS(threeCarouselDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "Verify that each card title is a link to the full article and with a 200 status code",
//   () => {
//     cy.BttnLinkNotEmpty(threeCarouselTitleLink);
//   }
// );

// And(
//   "I see that the {string} button should have 200 status code on 3 carousel listing",
//   () => {
//     cy.BttnLinkNotEmpty(threeCarouselBttnViewAllLink, 2);
//   }
// );

// And("{string} text should be in {string} color", (more, color) => {
//   localgp.moreLessColorCode(threeCarouselMore, more, color);
// });

// And("arrow icon with more text color should be {string}", (color) => {
//   localgp.morearrowIconColorDymanicListing(color);
// });

// And("there is {string} link at right side of carousel", (string) => {
//   cy.threeCarouselMoreLinkVisbile(threeCarouselMore, string);
// });

// And(
//   "when I click on {string} link, then i should see three more cards are coming up",
//   (string) => {
//     cy.threeCarouselMoreLinkclick(
//       threeCarouselMore,
//       threeCarouselMoreClick,
//       threeCarouselTitle4,
//       string
//     );
//   }
// );

// And("there is {string} link on left side of carousel", (string) => {
//   cy.threeCarouselLessLinkVisbile(threeCarouselLess, string);
// });

// And("{string} text should be in this {string} color", (less, color) => {
//   localgp.moreLessColorCode(threeCarouselLess, less, color);
// });

// And("arrow icon with less text color should be {string}", (color) => {
//   localgp.lessarrowIconColorDymanicListing(color);
// });

// And("clicking on {string} we should see first three cards", (string) => {
//   cy.threeCarouselLessLinkclick(
//     threeCarouselLess,
//     threeCarouselMoreClick,
//     string
//   );
// });

// And(
//   "clicking on {string} link for three times, more link disappears and only {string} link should be present",
//   (string1, string2) => {
//     cy.threeCarouselMoreLessFunc(
//       threeCarouselMore,
//       threeCarouselLess,
//       string1,
//       string2
//     );
//   }
// );

// And("the carousel should have a title and description below it", () => {
//   cy.factCardTitleDescVisble(factCardTitleComponent, factCardDescComponent);
// });

// And(
//   "the title is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(factCardTitleComponent, fontFamily, fontSize);
//   }
// );

// And(
//   "the description is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     cy.CardListDescCSS(factCardDescComponent, fontFamily, fontSize);
//   }
// );

// And("the carousel contains three cards in a row", () => {
//   cy.factCardSize(
//     threeCarouselTitle1,
//     threeCarouselTitle2,
//     threeCarouselTitle3,
//     threeCarouselTitle4
//   );
// });

// And(
//   "verify that each card title is link to the full article and with a 200 status code",
//   () => {
//     cy.BttnLinkNotEmpty(factCardTitleLink, 2);
//   }
// );

// And(
//   "each card should have an image, title in blue color and a description",
//   () => {
//     cy.factCardTitleImageDesc(CardTitleText, CardTitleImage, CardTitleDesc);
//   }
// );

// And(
//   "the card title is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(CardTitleText, fontFamily, fontSize);
//   }
// );

// And(
//   "the card description is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     cy.CardListDescCSS(CardTitleDesc, fontFamily, fontSize);
//   }
// );

// And("the second card is a fact card", () => {
//   cy.factCardSecondTile(factCardComponenttile);
// });

// And("the fact card is not clickable", () => {
//   cy.BttnNotClickable(factCardComponentListing);
// });

// And("the fact card has a title with the description", () => {
//   cy.factCardAuthorDescVisible(factCardDesc, factCardAuthor);
// });

// And(
//   "the fact card title is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     cy.CardListTitleCSS(factCardDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "the fact card description is having font family {string} and font size {string} on fact card component",
//   (fontFamily, fontSize) => {
//     cy.CardListDescCSS(factCardAuthor, fontFamily, fontSize);
//   }
// );

// When("I click on the next arrow", () => {
//   cy.factCardNextClick(threeCarouselMore);
// });

// Then("the next set of three cards in the carousel should be displayed", () => {
//   cy.factCardClickVerification(threeCarouselTitle4, threeCarouselTitle3);
// });

// When("I click on the previous arrow", () => {
//   cy.factCardPreviousClick(threeCarouselLess);
// });

// And("the previous three cards in the carousel should be displayed", () => {
//   cy.factCardSize(
//     threeCarouselTitle1,
//     threeCarouselTitle2,
//     threeCarouselTitle3,
//     threeCarouselTitle4
//   );
// });

// // PROMOBLOCK
// When("I verify that the Promoblock component is present", () => {
//   cy.newsLetterPresent(newsLetterComponent);
// });

// When("I locate the Promoblock component title element", () => {
//   cy.newsLetterTitleVisible(newsLetterTitle);
// });
// And("the title should be of h3 style", () => {
//   cy.newsLetterTitleHeading(newsLetterTitle);
// });

// And("the title font family should be {string}", (fontFamily) => {
//   cy.newsLetterTitleFontFamily(newsLetterTitle, fontFamily);
// });

// And(
//   "the pre-title should be visible on component with font type {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     cy.newsLetterpreTitleFontFamily(newsLetterPreTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the body text font family should be {string} and fontsize is {string}",
//   (fontFamily, fontSize) => {
//     cy.newsLetterBodyFontFamily(newsLetterBody, fontFamily, fontSize);
//   }
// );

// And(
//   "the subscribe text font family should be {string} and fontsize is {string}",
//   (fontFamily, fontSize) => {
//     cy.newsLetterSubscribeFontFamily(newsLetterSubscribe, fontFamily, fontSize);
//   }
// );

// And("the button gives a 200 repsonse code", () => {
//   cy.BttnResponse(newsLetterSubscribeLink);
// });

// And(
//   "the primary button with {string} background color and secondary with {string} border color should be visible",
//   (color1, color2) => {
//     cy.ComponentsVisible(newsLetterPrimary);
//     localgp.buttonBackgrndColor(color1, newsLetterPrimary);
//     cy.ComponentsVisible(newsLetterSecondary);
//     localgp.bttnBorderColor(color2, newsLetterSecondary);
//   }
// );

// // CURATED LISTING
// When("they view the curated list of blog articles", () => {
//   cy.curatedListingVisible(curatedList);
// });

// Then("there should be {string} articles displayed", (string) => {
//   cy.curatedListingSize(curatedList, string);
// });

// And(
//   "the first article should have Image larger than second Image, Category Tag, Title and Description",
//   () => {
//     cy.curatedFirstVisible(
//       curatedCategory,
//       curatedTitle,
//       curatedDesc,
//       curatedImage
//     );
//   }
// );

// And(
//   "the Category Tag is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     cy.curatedCategoryCSS(curatedCategory, fontFamily, fontSize);
//   }
// );

// And(
//   "the Title is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     cy.curatedTitleCSS(curatedTitle, fontFamily, fontSize);
//   }
// );

// And("the title color should be {string}", (color) => {
//   localgp.titleColorListing(curatedTitle, color);
// });

// And(
//   "the Description is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     cy.curatedDescCSS(curatedDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "the next {string} articles should have Image, Category Tag and Title",
//   (string) => {
//     cy.curated4Visible(curatedList, string);
//   }
// );

// Then("title should be navigated to a page with a 200 status code", () => {
//   cy.BttnLinkNotEmpty(curatedTitleLink);
// });

// Then("there should be 3 featured articles displayed", () => {
//   cy.featuredListingVisible(featuredList);
// });

// And("each featured article should have Image, Title and Description", () => {
//   cy.featuredTitleImageDesc(featuredTitle, featuredImage, featuredDesc);
// });

// And("the title color should be {string} on Featured Post", (color) => {
//   localgp.titleColorListing(featuredTitle, color);
// });

// And(
//   "the Title is having font family {string} and font size {string} on Featured Post",
//   (fontFamily, fontSize) => {
//     cy.featuredTitleCSS(featuredTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the Description is having font family {string} and font size {string} on Featured Post",
//   (fontFamily, fontSize) => {
//     cy.featuredDescCSS(featuredDesc, fontFamily, fontSize);
//   }
// );

// Then("title should be navigated to the page with a 200 status code", () => {
//   cy.BttnLinkNotEmpty(featuredTitleLink);
// });

// And("there should be a CTA link displayed", () => {
//   cy.featuredBttnVisible(featuredBttn);
// });

// And(
//   "the CTA text is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     cy.bttnfont(featuredBttntxt, fontFamily, fontSize);
//   }
// );

// Then("CTA should be navigated to a page with a 200 status code", () => {
//   cy.BttnLinkNotEmpty(featuredBttn);
// });

// // EBOOK
// Then(
//   "the title has a font style of {string} and {string}",
//   (fontSize, fontFamily) => {
//     cy.salesforceTitleCSS(salesforceTitle, fontSize, fontFamily);
//   }
// );

// And("the image is present", () => {
//   cy.salesforceImageVisible(salesforceImage);
// });

// And(
//   "the description is present with a font style of {string} and {string} size",
//   (fontFamily, fontSize) => {
//     cy.salesforceDescriptionVisible(salesforceDesc, fontFamily, fontSize);
//   }
// );

// And("background color of popup should be {string}", (color) => {
//   localgp.ebookBachgrndColor(backgrndColor, color);
// });

// And("the {string} button is present", (string) => {
//   cy.salesforceBttnVisible(salesforceBttn, string);
// });

// And(
//   "the {string} Button is having font family {string} and font size {string}",
//   (string, fontFamily, fontSize) => {
//     cy.salesforceBttnCSS(salesforceBttn, string, fontFamily, fontSize);
//   }
// );

// When("the user clicks on the {string} button", (string) => {
//   cy.salesforceBttnClick(salesforceBttn, string);
// });

// Then(
//   "a modal pop-up opens with the title, description, image, and button",
//   () => {
//     cy.salesforceModalTitleDescImageBttn(
//       salesforceModalTitle,
//       salesforceModalDesc,
//       salesforceModalImage,
//       salesforceModalBttn
//     );
//   }
// );

// And(
//   "the title is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     cy.salesforceModalTitleCSS(salesforceModalTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the description is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     cy.salesforceModalDescCSS(salesforceModalDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "the button is having font family {string} and font size {string}",
//   (fontFamily, fontSize) => {
//     cy.salesforceModalBttnCSS(salesforceModalBttn, fontFamily, fontSize);
//   }
// );

// And(
//   "an extra info message in {string} and {string} size is present",
//   (fontFamily, fontSize) => {
//     cy.salesforceModalExtraInfoVisible(
//       salesforceModalDesc,
//       2, 
//       fontFamily,
//       fontSize
//     );
//   }
// );

// And("an input box is present with the default text {string}", (string) => {
//   cy.salesforceModalTextPlaceholder(salesforceModalTextField, string);
// });

// When("the user provides a proper email id {string}", (string) => {
//   cy.salesforceModalTextFieldEmail(
//     salesforceModalTextField,
//     string,
//     salesforceModalBttn
//   );
// });

// Then(
//   "a success pop up with message {string} is displayed along with image",
//   (string) => {
//     cy.salesforceModalSuccesMessage(salesforceModalTitle, string);
//   }
// );

// And(
//   "the success message {string} is having font family {string} and font size {string}",
//   (string, fontFamily, fontSize) => {
//     cy.salesforceModalSuccessMessageCSS(
//       salesforceModalTitle,
//       successMssg,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// And(
//   "the success message {string} is having font family {string} and font size {string}",
//   (string, fontFamily, fontSize) => {
//     cy.salesforceModalSucessCSS(
//       salesforceModalTitle,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// And(
//   "the modal pop-up shows {string} along with social icons and a blog-related post section",
//   (string) => {
//     cy.salesforceModaltextSocialMediaBlog(
//       salesforceModalDesc,
//       string,
//       salesforceSocialMediaText,
//       salesforceSocialMediaIcons,
//       socialMediaRealtedPost
//     );
//   }
// );

// When("the user enters a wrong email id {string}", (string) => {
//   cy.salesforceModalTextFieldEmail(
//     salesforceModalTextField,
//     string,
//     salesforceModalBttn
//   );
// });

// Then(
//   "an error message {string} in red color is displayed below the input box",
//   (string) => {
//     cy.salesforceEmailErrorMssg(salesforceErrorMssg, string);
//   }
// );

// When("the user leaves the input box empty", () => {
//   cy.salesforceModalEmptyTextFieldEmail(salesforceModalBttn);
// });

// Then("an error message {string} is displayed below the input box", (string) => {
//   cy.salesforceEmailErrorMssg(salesforceErrorMssg, string);
// });

// //FAQs COMPONENT
// Then("I should see tabs", () => {
//   localgp.componentVisible(FAQTabs);
// });

// And("{string} should be highlighted in the tab", (string) => {
//   cy.BlogcomponentsVisibleContains(FAQTabsActiveCategories, string);
// });

// And("I should see FAQ title", () => {
//   localgp.componentVisible(FAQTabsTitle);
// });

// And("there should be a description", () => {
//   localgp.componentVisible(FAQTabsDescription);
// });

// And("there should be a {string} link", (string) => {
//   cy.ComponentsVisibleContains(FAQTabsSecBttns, string);
// });

// And("the Contact Us link gives a 200 response", () => {
//   cy.BttnResponse200(FAQTabsSecBttnsLinks, "1");
// });

// And("there should be {string} link", (string) => {
//   cy.ComponentsVisibleContains(FAQTabsSecBttns, string);
// });

// And("the Search FAQs link gives a 200 response", () => {
//   cy.BttnResponse200(FAQTabsSecBttnsLinks, "0");
// });

// And("FAQ section links should match tabs in the header", () => {
//   cy.correctTabsCheck(faqTabsName, faqNameRight);
// });

// When("I click on the {string} FAQ link", (string) => {
//   cy.clickTabName(faqTabsName, string);
// });

// Then("I should see {string} in the title", (string) => {
//   cy.BlogcomponentsVisibleContains(FAQTabsTitle, string);
// });

// // And("{string} should be highlighted in the tab", (string) => {
// //   cy.BlogcomponentsVisibleContains(FAQTabsActiveCategories, string);
// // });

// And(
//   "each FAQ question in the accordion should not have any characters after the question mark",
//   () => {
//     cy.verifyAccordionQuestions(faqItem, faqQuestionTitle);
//   }
// );

// And("there is answer section also for each question", () => {
//   cy.verifyQuestionAnswer(faqItem);
// });

// Then("I should verify the pagination below the FAQ section", () => {
//   cy.faqpaginationVisible();
// });

// Then("page should have 25 FAQs", () => {
//   cy.faq25Questions(faqItem);
// });

// Then("I should continue clicking until the next button becomes grey", () => {
//   cy.faqPaginationGrey(faqQuestionPaginationNext);
// });

// // OFFICE PROFILE:overview and information
// Then("I should see the following business hours:", (datatable) => {
//   cy.officeprofileScheduleandInsuranceList(
//     datatable,
//     officeProviderschedulelist,
//     officeProviderbusinessdaystimings
//   );
// });

// And("I should see the following insurance information:", (datatable) => {
//   cy.officeprofileScheduleandInsuranceList(
//     datatable,
//     officeProviderinsuranceinformation,
//     officeProviderinsurancelist
//   );
// });

// And(
//   "I should see phone number {string} and fax number {string}",
//   (string1, string2) => {
//     cy.officeProvderPhNumVisible(officeProviderPhNum, string1, string2);
//   }
// );

// And(
//   "color of phone number {string} and fax number {string} should be {string}",
//   (string1, string2, color) => {
//     localgp.phonecolorCheck(officeProviderPhNum, string1, string2, color);
//   }
// );

// And(
//   "the phone and fax number is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     cy.officeProfileCSS(officeProviderPhNum, fontFamily, fontSize);
//   }
// );

// And(
//   "I should see address {string}{string}{string}{string}",
//   (string1, string2, string3, string4) => {
//     cy.ComponentsVisible(
//       officeProviderAddress,
//       string1,
//       string2,
//       string3,
//       string4
//     );
//   }
// );

// And(
//   "color of address {string}{string}{string}{string} should be {string}",
//   (string1, string2, string3, string4, color) => {
//     localgp.addresscolorCheck(
//       officeProviderAddress,
//       string1,
//       string2,
//       string3,
//       string4,
//       color
//     );
//   }
// );

// And(
//   "the adrdress is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     cy.officeProfileCSS(officeProviderAddress, fontFamily, fontSize);
//   }
// );

// And("I should see map", () => {
//   cy.ComponentsVisible(officeProviderMap);
// });

// And(
//   "{string} button is present on office profile overview and info component",
//   (string) => {
//     cy.ComponentsVisibleContains(officeProviderBttn, string);
//   }
// );

// And(
//   "the {string} CTA is having font family {string} and font size {string} on office profile overview and info component",
//   (string, fontFamily, fontSize) => {
//     cy.officeProfileBttnCSS(
//       officeProviderButtonText,
//       string,
//       fontFamily,
//       fontSize
//     );
//   }
// );

// Then(
//   "verify that Book Appointment CTA button has {string} in URL, response status is 200",
//   (string) => {
//     cy.officeProfileHref(officeProviderBttn, "0", string);
//   }
// );

// And("language spoken should be {string}", (string) => {
//   cy.ComponentsVisibleContains(officeProviderLang, string);
// });

// And(
//   "the language spoken text is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     cy.officeProfileCSS(officeProviderLang, fontFamily, fontSize);
//   }
// );

// And("there should be text below button as {string}", (string) => {
//   cy.ComponentsVisibleContains(officeProviderExtraText, string);
// });

// And(
//   "the extra text is having font family {string} and font size {string} on office profile overview and info component",
//   (fontFamily, fontSize) => {
//     cy.officeProfileCSS(officeProviderExtraText, fontFamily, fontSize);
//   }
// );
// // STAFF LISTING PATH UPDATE
// When("the URL should contain the staff name", (string) => {
//   localgp.buttonResponseAndURLCheck(string);
// });

// // TABS
// Then("I check the link text in the table for text comparison", (dataTable) => {
//   cy.tabTextLinks(dataTable, tabsText);
// });

// Then("I should see the tab is underlined with color {string}", (color) => {
//   localgp.colorunderTab(color);
// });

// // HERO COMPONENT
// Then("I verify that the full-width hero is present", () => {
//   cy.ComponentsVisible(heroComponent);
// });

// And("there is a title, description, one CTA link, and one button", () => {
//   cy.ComponentsVisible(heroComponentTitle);
//   cy.ComponentsVisible(heroComponentDesc);
//   cy.ComponentsVisible(heroComponentBttn);
//   cy.ComponentsVisible(heroComponentLink);
// });

// And(
//   "the title is an {string} element with font family {string}",
//   (fontType, fontFamily) => {
//     localgp.HeroComponentTitleCSS(heroComponent, fontType, fontFamily);
//   }
// );

// And(
//   "the description is a paragraph element with font family {string}",
//   (fontFamily) => {
//     localgp.HeroComponentDescCSS(heroComponentDesc, fontFamily);
//   }
// );

// And("the button goes to a 200 response", () => {
//   cy.BttnResponse(heroComponentBttn);
// });

// And("I verify that the half-width hero is present", () => {
//   cy.ComponentsVisible(heroComponentHafWidth);
// });

// And("there is title, description, one CTA link, and one button", () => {
//   cy.ComponentsVisible(heroComponentHafWidthTitle);
//   cy.ComponentsVisible(heroComponentHafWidthDesc);
//   cy.ComponentsVisible(heroComponentHafWidthBttn);
//   cy.ComponentsVisible(heroComponentHafWidthLink);
// });

// And(
//   "the title is {string} element with font family {string}",
//   (fontType, fontFamily) => {
//     localgp.HeroComponentTitleCSS(heroComponentHafWidth, fontType, fontFamily);
//   }
// );

// And(
//   "the description is paragraph element with font family {string}",
//   (fontFamily) => {
//     localgp.HeroComponentDescCSS(heroComponentHafWidthDesc, fontFamily);
//   }
// );
// And("the button goes to 200 response", () => {
//   cy.BttnResponse(heroComponentHafWidthBttn);
// });

// Then("I verify that the simple hero with image is present", () => {
//   cy.ComponentsVisible(heroComponentSimple);
// });

// And("there is the title, description, one CTA link, and one button", () => {
//   cy.ComponentsVisible(heroComponentSimpleTitle);
// });

// And(
//   "the title is the {string} element with font family {string}",
//   (fontType, fontFamily) => {
//     localgp.HeroComponentTitleCSS(heroComponentSimple, fontType, fontFamily);
//   }
// );

// // STAGGERED COMPONENT
// Then("the staggered card should be present", () => {
//   cy.staggeredComponentVisible(staggeredComponent);
// });

// And("the title should be present in the staggered card component", () => {
//   cy.staggeredMainTitleVisible(staggeredmainTitle);
// });

// And("the description should be present in the staggered card component", () => {
//   cy.staggeredMainDescVisible(staggeredmainDesc);
// });

// And(
//   "title should be in the {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.staggeredMainTitleCSS(staggeredmainTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in the {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.staggeredMainDescCSS(staggeredmainDesc, fontFamily, fontSize);
//   }
// );

// And("the CTA link should be present in the staggered card component", () => {
//   cy.staggeredMainBttnVisible(staggeredmainBttn);
// });

// And(
//   "CTA text in the staggered card component should be in {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.staggeredMainBttnCSS(staggeredmainBttn, fontFamily, fontSize);
//   }
// );

// And("verify CTA response is 200", () => {
//   cy.BttnResponse(staggeredmainBttn);
// });

// And("the background image should be present", () => {
//   cy.staggeredComponentBckImage(staggeredBckImageVisible);
// });

// And("there should be four non-clickable cards", () => {
//   cy.BttnNotClickable(staggeredmainCardTiles);
// });

// And("each non-clickable card should have a image and title", () => {
//   cy.staggeredcardImageTitleVisible(
//     staggeredcardTitle,
//     staggeredCardImageVisible
//   );
// });

// And(
//   "Card title should be {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.staggeredTitleFont(staggeredCardTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "Card description should be {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.staggeredDescFont(staggeredCardDesc, fontFamily, fontSize);
//   }
// );

// And(
//   "staggered card component title is {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.staggeredcardTitleFont(staggeredmainTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "staggered card component description is {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.staggeredMainDescFont(staggeredmainDesc, fontFamily, fontSize);
//   }
// );

// And("card description should be {string}", (fontFamily) => {
//   cy.staggeredMainDescFont(staggeredmainDesc, fontFamily);
// });

// And(
//   "cards description should be {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.staggeredCardDescFont(staggeredCardDesc, fontFamily, fontSize);
//   }
// );

// Then("the staggered card with reviews should be present", () => {
//   cy.staggeredComponentVisible(staggeredComponent);
// });

// Then("there should be four non-clickable cards with reviews", () => {
//   cy.BttnNotClickable(staggeredReviewcard);
// });

// And(
//   "each non-clickable card with a review should have a description, review star, and author name",
//   () => {
//     cy.staggeredReviewDescReviewAuthor(
//       staggeredReviewDesc,
//       staggeredReviewstar,
//       staggeredReviewAuthor
//     );
//   }
// );

// And(
//   "the author name should be in the {string} and the font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.staggeredReviewAuthorCSS(staggeredReviewAuthor, fontFamily, fontSize);
//   }
// );

// And(
//   "the description should be in the {string} and font size should be {string}",
//   (fontFamily, fontSize) => {
//     cy.staggeredReviewDescCSS(staggeredReviewDesc, fontFamily, fontSize);
//   }
// );

// And("each card should not have an image", () => {
//   cy.staggeredReviewImage(staggeredReviewNoImage);
// });

// // SERVICES COMPONENT
// Then("I should be able to see dental services section", () => {
//   cy.ComponentsVisible(officeProfiledentalServices);
// });

// And("each dental service should've icon and link", () => {
//   cy.iconsandlinks(officeProfiledentalImages, officeProfilebuttonLinks);
// });

// And("the link should be underlined in {string}", (string) => {
//   cy.underlineBttn(officeProfileBttnTextUnderline, string);
// });

// And("the link href response status code should be 200", () => {
//   cy.BttnResponse(officeProfilebuttonLinks);
// });

// And(
//   "after that, there should be a {string} button then click on see more",
//   (string) => {
//     cy.seeMoreBttn(officeProfileSeeMoreBttn, string);
//   }
// );

// Then("it should show all services", () => {
//   cy.showAllServices(officeProfileShowAllServices);
// });

// And("{string} button is not displayed", (string) => {
//   cy.seemoreNotVisible(officeProfileSeeMoreBttn, string);
// });

// // ALERT BAR and ADDRESS BAR
// Then(
//   "I should be able to verify there is an alert bar, an address bar, and a header",
//   () => {
//     localgp.componentVisible(alertBar);
//     localgp.componentVisible(addressbar);
//     localgp.componentVisible(primaryNavBar);
//   }
// );

// And("the alert bar should have text and a close icon", () => {
//   localgp.componentVisible(alertbarText);
//   localgp.componentVisible(alertbarCloseIcon);
// });

// And(
//   "there is a background colour present for the alert bar {string}",
//   (color) => {
//     localgp.BackgrndColor(color, alertBar);
//   }
// );

// And("clicking on the close icon in the alert bar closes the alert bar", () => {
//   localgp.alertDisappear(alertbarCloseIcon, alertBar);
// });

// And("address bar text contains {string}", (text) => {
//   localgp.addressBarTexts(text);
// });

// And("the address bar contains a phone number", () => {
//   localgp.componentVisible(addressBarContactText);
// });

// // PRIMARY NAV BAR
// When("I see the header", () => {
//   localgp.componentVisible(primaryNavBar);
// });

// Then("I should be able to verify that there is a logo icon", () => {
//   localgp.componentVisible(primaryNavBarLogo);
// });

// And("clicking on the logo icon navigates the user to the home page", () => {
//   localgp.smilegenLogoHeaderNav(primaryNavBarLogo);
// });

// And("the {string} button contains {string} in the URL", (bttn, Link) => {
//   localgp.primaryNavBttn(primaryNavBttn1, bttn, primaryNavBttnLink1, Link);
// });

// And("{string} button contains {string} in the URL", (bttn, Link) => {
//   localgp.primaryNavBttn(primaryNavBttn2, bttn, primaryNavBttnLink2, Link);
// });

// And("there is a search icon", () => {
//   localgp.componentVisible(primarySearchIcon);
// });

// And("the primary navigation items {string} are present", (NavNames) => {
//   localgp.componentsVisibleContains(PrimaryNavNames, NavNames);
// });

// And(
//   "Each navigation {string} has below URL-fragment {string} in URL",
//   (NavNames, URL) => {
//     localgp.primaryNavLinks(PrimaryNavNames, NavNames, URL);
//   }
// );

// // STAFF INTRO
// Then("I should be able to see the staff intro component", () => {
//   localgp.componentVisible(staffIntroVisible);
// });

// And("I should see the staff intro has a title, text, button, and image", () => {
//   localgp.componentVisible(staffIntroText);
//   localgp.componentVisible(staffIntroTitle);
//   localgp.componentVisible(staffIntroImage);
//   localgp.componentVisible(staffIntroBttn);
// });

// And(
//   "the title font type is {string} and font size is {string}",
//   (fontFamily, fontSize) => {
//     localgp.StaffIntroCSS(staffIntroTitle, fontFamily, fontSize);
//   }
// );

// And(
//   "the text font type is {string} and font size is {string}",
//   (fontFamily, fontSize) => {
//     localgp.StaffIntroCSS(staffIntroText, fontFamily, fontSize);
//   }
// );

// And("the button redirection should give 200 response", () => {
//   cy.BttnResponse200(staffIntroBttn, 0);
// });

// // FOOTER SECTION
// And("I scroll to the footer section", () => {
//   cy.footerScroll(homepagemouthbodyfooter);
// });

// // Verify 1st column Title
// Then("I should see the {string} in column one in the footer", (String) => {
//   cy.mouthbodyConnect(FooterlinksText, String);
// });

// // Verify the response 200
// Then(
//   "I click on the link And should be navigated to the page and status code should be 200",
//   () => {
//     cy.BttnResponse(mouthbodyconnectionfooterLinks);
//   }
// );

// // Verify 2nd column Title
// Then("I should see the {string} in column two in the footer", (String) => {
//   cy.dentalservices(FooterlinksText, String);
// });

// // Verify the response 200
// Then(
//   "I click on link And should be navigated to the page and status code should be 200",
//   () => {
//     cy.BttnResponse(detnalservicesfooterLinks);
//   }
// );

// // Verify 3rd column Title
// Then("I should see the {string} in column three in the footer", (String) => {
//   cy.paymentoption(FooterlinksText, String);
// });

// // Verify the response 200
// Then(
//   "I click on the link And should be navigated to page and status code should be 200",
//   () => {
//     cy.BttnResponse(paymentoptionsfooterLinks);
//   }
// );

// // Verify 4th column Title
// Then("I should see the {string} in column four in the footer", (String) => {
//   cy.howwegive(FooterlinksText, String);
// });

// // Verify the response 200
// Then(
//   "I click on link And should be navigated to page and status code should be 200",
//   () => {
//     cy.BttnResponse(howwegivefooterLinks);
//   }
// );

// // Verify 5th column Title
// Then("I should see the {string} in column five in the footer", (String) => {
//   cy.about(FooterlinksText, String);
// });

// // Verify the response 200
// Then(
//   "I click on the link And should be navigated to the page and status code should be the 200",
//   () => {
//     cy.BttnResponse(aboutfooterLinks);
//   }
// );

// // Verify the legal links in the footer
// Then("I should see the following legal texts", (dataTable) => {
//   cy.footerLegalLinks(dataTable, legalfooter);
// });

// And("I click on the {string} link in the footer", (Text) => {
//   cy.clickLegalLinks(Text, legalfooter);
// });

// // verify social media icons and links
// Then("I should see following social media icons", (dataTable) => {
//   cy.socialMediaLinks(dataTable, socialMediaIcons);
// });

// And("I click on each social media icon {string}", (link) => {
//   cy.clickSocialMediaIcons(link, socialMediaIcons);
// });

// Then(
//   "I should be redirected to the correct social media URL {string} for each icon",
//   (currenturl) => {
//     cy.urlRedirection(currenturl);
//   }
// );

// // verify 1-800 smilegen link
// Then("I should see the {string} link", (smilegenLink) => {
//   cy.smilegenlink(smilegenLink, smilegenlinkFooter);
// });

// And("the link should have a valid href attribute {string}", (hrefValue) => {
//   cy.smilegenhref(smilegenlinkFooter, hrefValue);
// });

// And(
//   "the link should have the target attribute set to {string}",
//   (targetValue) => {
//     cy.smilegenTargetFooter(smilegenlinkFooter, targetValue);
//   }
// );

// Then("Verify the paragraph and font family", () => {
//   cy.footerParagraph(footerParaOne, footerParaTwo, footerParaThree);
// });

// Then("I can see the footer", () => {
//   localgp.footerNavigation();
// });

// And("all footer column headings should have color {string}", (color) => {
//   localgp.footerColumnHeading(color);
// });

// And("verify all links are giving 200 response", () => {
//   cy.BttnResponse(footerColumnHeaderLinks);
// });

// And("verify all the links under the heading are giving 200 response", () => {
//   cy.BttnResponse(footerHeaderLinks);
// });

// And("the {string} link should be present", (string) => {
//   localgp.footerLinksFBGoogle(string);
// });

// And(
//   "{string} link should be navigated to a URL containing {string}",
//   (text, currentURL) => {
//     localgp.footerLinksFBGoogle200(text, currentURL);
//   }
// );

// Then("{string} should be navigated to a page with a 200 response", (string) => {
//   localgp.footerCopyrightLinks(string);
// });

// And(
//   "the color of the {string} should be {string}, font type should be {string} and font size should be {string}",
//   (link, color, fontFamily, fontSize) => {
//     localgp.footerCopyrightLinksCSS(link, color, fontFamily, fontSize);
//   }
// );

// And("verify that copy right section is present", () => {
//   localgp.componentVisible(footerCopyrightText);
// });

// And(
//   "verify that font type is {string} and font size is {string}",
//   (fontFamily, fontSize) => {
//     localgp.footerCopyrightTextCSS(fontFamily, fontSize);
//   }
// );
