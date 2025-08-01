import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { PDS } = require("../../page/pds-site/components");

const pds = new PDS();
// css locators

var galleryComponentVisible = ".gallery-main-wrapper";
var galleryComponentAssetsVisible = ".swiper-slide-visible";
var galleryComponentAssetsTitleVisible =
  ".gallery-thumbs-container .swiper-wrapper .swiper-slide .cmp-image__title";
var galleryComponentAssetsLeftArrowVisible =
  ".gallery-thumbs-container .swiper-button-prev";
var galleryComponentAssetsRightArrowVisible =
  ".gallery-thumbs-container .swiper-button-next";
var galleryImage = ".swiper-slide-visible .cmp-image";
var galleryAllComponentAssets =
  ".gallery-thumbs-container .swiper-wrapper .swiper-slide";
var videoPlayButton = ".swiper-slide-visible .play-icon";
var videoClickButton = ".swiper-slide-active .embed .video-container picture";
var galleryRightArrow = ".gallery-thumbs-container .swiper-button-next";
var galleryLeftArrow = ".gallery-thumbs-container .swiper-button-prev";
var primaryCTA = ".cmp-button--primary .cmp-button";
var primaryCTAText = ".cmp-button--primary .cmp-button .cmp-button__text";
var linkCTA = ".cmp-button--link .cmp-button";
var linkCTAText = ".cmp-button--link .cmp-button .cmp-button__text";
var categoryTagCTA = ".cmp-button--category-tag .cmp-button";
var categoryTagCTAText =
  ".cmp-button--category-tag .cmp-button .cmp-button__text";
var secondaryCTA = ".cmp-button--secondary .cmp-button";
var secondaryCTAText = ".cmp-button--secondary .cmp-button .cmp-button__text";
var underlineWhiteCTA = ".cmp-button--link-white .cmp-button";
var underlineWhiteCTAText =
  ".cmp-button--link-white .cmp-button .cmp-button__text";
var secondaryWhiteCTA = ".cmp-button--secondary-white .cmp-button";
var secondaryWhiteCTAText =
  ".cmp-button--secondary-white .cmp-button .cmp-button__text";
var accordian = ".cmp-accordion__button";
var accordianExpand = "[aria-expanded='true']";
var accordianClosed = "[aria-expanded='false']";
var magazinecardNext = ".magazine-carousel .swiper-button-next";
var magazineCardPrevious = ".magazine-carousel .swiper-button-prev";
var commonConcern4Column = ".fourcolumn.cc-card";
var commonConcern3Column = ".threecolumn.cc-card";
var commonConcern4CardLink = ".fourcolumn.cc-card .cmp-teaser__link";
var commonConcern4Image = ".fourcolumn.cc-card .cmp-teaser__card-image";
var commonConcern3Title = ".threecolumn.cc-card .cmp-teaser__title";
var commonConcern3Image = ".threecolumn.cc-card .cmp-teaser__card-image";
var commonConcern3CardLink = ".threecolumn.cc-card .cmp-teaser__link";
var magazineCarousel = ".magazine-carousel";
var magazineCarouselTile1 = ".magazine-carousel .swiper-slide:nth-child(1)";
var magazineCarouselTile2 = ".magazine-carousel .swiper-slide:nth-child(2)";
var magazineCarouselTile3 = ".magazine-carousel .swiper-slide:nth-child(3)";
var magazineCarouselTile4 = ".magazine-carousel .swiper-slide:nth-child(4)";
var magazineCarouselTile5 = ".magazine-carousel .swiper-slide:nth-child(5)";
var magazineCarouselTiTle = ".magazine-carousel .cmp-teaser__pretitle";
var magazineCarouselDesc = ".magazine-carousel .cmp-teaser__title";
var magazineCarouselImage = ".magazine-carousel .cmp-teaser__card-image";
var magazineCarousel2Column = ".twocolumn.magazine-card";
var magazineCarouselLink = ".magazine-carousel .cmp-teaser__link";
var magazineCarousel2ColumnTitle =
  ".twocolumn.magazine-card .cmp-teaser__pretitle";
var magazineCarousel2ColumnDesc = ".twocolumn.magazine-card .cmp-teaser__title";
var magazineCarousel2ColumnImage =
  ".twocolumn.magazine-card .cmp-teaser__card-image";
var magazineCarousel2ColumnLink = ".twocolumn.magazine-card .cmp-teaser__link";
var magazineCarousel4Column = ".fourcolumn.magazine-card";
var magazineCarousel4ColumnLink = ".fourcolumn.magazine-card .cmp-teaser__link";
var magazineCarousel4ColumnTitle =
  ".fourcolumn.magazine-card .cmp-teaser__pretitle";
var magazineCarousel4ColumnDesc =
  ".fourcolumn.magazine-card .cmp-teaser__title";
var magazineCarousel4ColumnImage =
  ".fourcolumn.magazine-card .cmp-teaser__card-image";
var textcardwithCTAComponent = ".cmp-list__card";
var textcardwithCTATitle = ".text-card [id*= teaser] .cmp-teaser__title h4";
var textcardwithCTADescription =
  ".text-card [id*= teaser] .cmp-teaser__description p";
var textcardCTA = ".text-card [id*= teaser] .cmp-button__text";
var textcardCTAAnchor = ".text-card [id*= teaser] .cmp-button";
var cardBG = ".text-card [id*= teaser]";
var textCardWOCTATitle = ".teaser--card-without-cta .cmp-teaser__title h4";
var textCardWOCTADescription =
  ".teaser--card-without-cta .cmp-teaser__description p";
var textCardWOCTABG = ".teaser--card-without-cta .cmp-teaser";
var factCardComponent = ".yellow-card-teaser--fact-card .cmp-teaser__content";
var factCardBG = ".yellow-card-teaser--fact-card .cmp-teaser";
var factCardTitle = ".yellow-card-teaser--fact-card .cmp-teaser__title h4";
var factCardDescription =
  ".yellow-card-teaser--fact-card .cmp-teaser__description p";
var costCard = ".yellow-card-teaser--cost-card";
var costCardTitle = ".yellow-card-teaser--cost-card .cmp-teaser__title h4";
var costCardDesc = ".yellow-card-teaser--cost-card .cmp-teaser__description p";
var costCardSubTitle = ".yellow-card-teaser--cost-card .cmp-teaser__subtitle";
var costCardCTA = ".yellow-card-teaser--cost-card .cmp-button";
var costCardBG = ".yellow-card-teaser--cost-card .cmp-teaser";
var tagCard = ".yellow-card-teaser--learn-more-card-with-tag";
var tagCardTitle =
  ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__title h4";
var tagCardDesc =
  ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__description p";
var tagCardCTAtags =
  ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__tag-container";
var tagCardTagsAnchor = ".cmp-teaser__tag-container .cmp-button";
var textcardIcon = ".teaser--card-with-icon";
var textcarIconBttn = ".teaser--card-with-icon .cmp-button--link a";
var costEstimatorVisible = ".cmp-tabs";
var costEstimatorActiveTab = ".cmp-tabs__tab--active";
var costCardEstimator = ".cmp-tabs .cmp-list__card";
var costCardEstimatorTitle = ".cmp-tabs .cmp-list__card .cmp-teaser__title p";
var costCardEstimatorCost =
  ".cmp-tabs .cmp-list__card .cmp-teaser__description p";
var costCardEstimatorSubtext =
  ".cmp-tabs .cmp-list__card .cmp-teaser__subtitle p";
var costEstimatorRightArrow = ".arrow-icons#right";
var costEstimatorLeftArrow = ".arrow-icons#left";
var CostEstimatorTabsAuthored = ".cmp-tabs__tablist .cmp-tabs__tab";
var threeCardList = ".threecolumn .cmp-dynamiclisting__list";
var fourCardList = ".fourcolumn";
var threeCarouselComponent = ".cmp-dynamiclisting__carousel_head";
var threeCarouselMore = ".swiper-button-next span";
var threeCarouselLess = ".swiper-button-prev span";
var threeCarouselTitle1 = ".dynamiclisting-carousel .swiper-slide:nth-child(1)";
var threeCarouselTitle2 = ".dynamiclisting-carousel .swiper-slide:nth-child(2)";
var threeCarouselTitle3 = ".dynamiclisting-carousel .swiper-slide:nth-child(3)";
var threeCarouselTitle4 = ".dynamiclisting-carousel .swiper-slide:nth-child(4)";
var threeCarouselMoreClick = ".swiper-slide-prev";
var commonConcernCard = ".common-concerns-carousel";
var commonConcernMainTitle = ".cmp-container--fixed h2.cmp-title__text";
var commonConcernCardTitle = ".common-concerns-carousel .cmp-teaser__title";
var commonConcernCardRight = ".common-concerns-carousel .swiper-button-next";
var commonConcernCardLeft = ".common-concerns-carousel .swiper-button-prev";
var commonConcernCardImage =
  ".common-concerns-carousel .cmp-teaser__card-image";
var commonConcernCardTitle1 =
  ".common-concerns-carousel .swiper-slide:nth-child(1)";
var CardTitleText =
  ".dynamiclisting-carousel .swiper-slide .list-item__title a:nth-child(1)";
var CardTitleImage =
  ".dynamiclisting-carousel .swiper-slide .list-item__img:nth-child(1)";
var CardTitleDesc =
  ".dynamiclisting-carousel .swiper-slide .list-item__description:nth-child(3)";
var factCardDesc =
  ".dynamiclisting-carousel .swiper-slide .list-item__title:nth-child(1)";
var factCardAuthor =
  ".dynamiclisting-carousel .swiper-slide .list-item__description:nth-child(2)";
var threeCardBttnViewAll = ".threecolumn .cmp-button__text";
var threeCardBttnViewAllLink = ".threecolumn .cmp-button";
var threeCardListing = ".threecolumn .cmp-dynamiclisting__list .list-item";
var threeCardTitle =
  ".threecolumn .cmp-dynamiclisting__list .list-item__title a";
var threeCardTitleLink =
  ".threecolumn .cmp-dynamiclisting__list .list-item__title a";
var threeCardDesc =
  ".threecolumn .cmp-dynamiclisting__list .list-item__description";
var threeCardImage = ".threecolumn .cmp-dynamiclisting__list .list-item__img";
var fourCardBttnViewAll = ".fourcolumn .cmp-button__text";
var fourCardBttnViewAllLink = ".fourcolumn .cmp-button";
var fourCardListing = ".fourcolumn .list-item";
var fourCardTitle = ".fourcolumn .cmp-dynamiclisting__list .list-item__title a";
var fourCardTitleLink =
  ".fourcolumn .cmp-dynamiclisting__list .list-item__title a";
var fourCardDesc =
  ".fourcolumn .cmp-dynamiclisting__list .list-item__description";
var fourCardImage = ".fourcolumn .cmp-dynamiclisting__list .list-item__img";
var threeCarouselBttnViewAll =
  ".cmp-dynamiclisting__carousel_head .cmp-button__text";
var threeCarouselBttnViewAllLink =
  ".cmp-dynamiclisting__carousel_head .cmp-button";
var threeCarouselTitle =
  ".dynamiclisting-carousel .swiper-slide .list-item__title a";
var threeCarouselDesc =
  ".dynamiclisting-carousel .swiper-slide .list-item__description";
var threeCarouselImage =
  ".dynamiclisting-carousel .swiper-slide .list-item__img";
var threeCarouselTitleLink =
  ".dynamiclisting-carousel .swiper-slide .list-item__title a";
var commonConcerCardLink = ".common-concerns-carousel .cmp-teaser__link";
var commonConcern4Title = ".fourcolumn.cc-card .cmp-teaser__title";
var factCardTitleComponent =
  ".dynamiclisting-carousel .fact-card .list-item__title";
var factCardDescComponent =
  ".dynamiclisting-carousel .fact-card .list-item__description";
var factCardTitleLink =
  ".dynamiclisting-carousel .swiper-slide .list-item__title a:nth-child(1)";
var factCardComponentListing = ".fact-card";
var teaserImageComponent = ".left_image .cmp-teaser__image";
var seeMoreLessLink = ".cmp-button__text";
var seeMoreLessLinkUnderline = ".cmp-button";
var seeMoreTitle = ".half-width-show-more .cmp-teaser__title";
var seeMoreDesc = ".half-width-show-more .cmp-teaser__description p";
var seeLessCollapse = ".active-seemore";
var seeMoreContentStyle = ".half-width-show-more .cmp-teaser__content";
var leftimageComponent = ".half-width-cta.left_image";
var leftImageTeaser = ".half-width-cta.left_image .cmp-teaser__image";
var leftImageTeaserTitle = ".half-width-cta.left_image .cmp-teaser__title";
var leftImageTeaserDesc = ".half-width-cta.left_image .cmp-teaser__description";
var leftimageBttn = ".half-width-cta.left_image .cmp-button";
var rightimageComponent = ".half-width-cta:nth-child(3)";
var rightimageVisible = ".half-width-cta:nth-child(3) .cmp-teaser__image";
var rightImageTeaserTitle = ".half-width-cta:nth-child(3) .cmp-teaser__title";
var rightImageTeaserDesc =
  ".half-width-cta:nth-child(3) .cmp-teaser__description";
var rightimageBttn = ".half-width-cta:nth-child(3) .cmp-button";
var teaserwithoutCTA = ".half-width-cta:nth-child(8)";
var teaserwithoutCTAImage = ".half-width-cta:nth-child(8) .cmp-teaser__image";
var teaserwithoutCTATitle = ".half-width-cta:nth-child(8) .cmp-teaser__title";
var teaserwithoutCTADesc =
  ".half-width-cta:nth-child(8) .cmp-teaser__description";
var teaserwithoutCTAVisible = ".half-width-cta:nth-child(8) .cmp-button";
var footerColumnHeaderLinks = ".cmp-footer__column .cmp-title__link";
var footerCopyrightText = ".cmp-footer__disclaimer .cmp-text p";
var tabsText = "li.cmp-tabs__tab";
var salesforceTitle = ".cmp-teaser--landing-page .cmp-teaser__title";
var salesforceImage = ".cmp-teaser--landing-page .cmp-teaser__image";
var salesforceDesc = ".cmp-teaser--landing-page .cmp-teaser__description";
var backgrndColor = ".modal__body .cmp-container ";
var salesforceBttn = ".cmp-button--primary .cmp-button__text";
var salesforceModalTitle = ".modal__body .cmp-title__text";
var salesforceModalDesc = ".modal__body .cmp-text p";
var salesforceModalImage = ".modal__body .image:nth-child(8) .cmp-image";
var salesforceModalBttn = ".modal__body .cmp-button";
var salesforceModalTextField = ".modal__body .cmp-form-text__text";
var salesforceSocialMediaText = ".title .cmp-title .cmp-title__text";
var salesforceSocialMediaIcons =
  ".image.aem-GridColumn--default--none .cmp-image";
var socialMediaRealtedPost = ".cmp-curatedlisting";
var salesforceModalBttn = ".modal__body .cmp-button__text";
var salesforceErrorMssg = ".cmp-form-text__error";
var faqTabsName = ".cmp-tabs__tablist .cmp-tabs__tab";
var FAQTabsActiveCategories = ".cmp-tabs__tablist .cmp-tabs__tab--active";
var faqNameRight = ".faqs .cmp-faqTab__title p";
var faqItem = ".cmp-accordion__item";
var faqQuestionTitle = ".cmp-accordion__title";
var faqQuestionPaginationNext = ".cmp-faq__pagination .next";
var FAQTabs = ".cmp-tabs__tablist";
var FAQTabsDescription = ".cmp-tabs__tabpanel--active .cmp-text p";
var FAQTabsTitle = ".cmp-tabs__tabpanel--active .cmp-title__text";
var FAQTabsSecBttns = ".cmp-tabs__tabpanel--active .cmp-button__text";
var FAQTabsSecBttnsLinks = ".cmp-tabs__tabpanel--active .cmp-button";
var quoteComponent = ".quote-carousel .swiper-slide-active";
var firstQuoteText =
  ".swiper-wrapper div.swiper-slide:nth-child(1) .cmp-text p span";
var secondQuoteText =
  ".swiper-wrapper div.swiper-slide:nth-child(2) .cmp-text p span";
var thirdQuoteText =
  ".swiper-wrapper div.swiper-slide:nth-child(3) .cmp-text p span";
var quoteComponentTitleText = ".cmp-text p:nth-child(1) b";
var quoteCompAuthorCSS = ".text p:nth-child(3)";
var quoteComponentText = ".cmp-text p span[class='title-4'] b";
var CarouselVisible = ".swiper-pagination-bullets";
var CarouselAllQuotes = ".swiper-slide .cmp-text";
var firstDefaultCarousel =
  ".swiper-pagination-clickable span:nth-child(1)[class*='active']";
var firstQuote = ".swiper-wrapper div.swiper-slide:nth-child(1)";
var secondQuote = ".swiper-wrapper div.swiper-slide:nth-child(2)";
var thirdQuote = ".swiper-wrapper div.swiper-slide:nth-child(3)";
var secondCarousel = ".swiper-pagination-clickable span:nth-child(2)";
var thirdCarousel = ".swiper-pagination-clickable span:nth-child(3)";
var threeCarouselVisible = ".swiper-pagination-bullet";
var secondDefaultCarousel =
  ".swiper-pagination-clickable span:nth-child(2)[class*='active']";
var thirdDefaultCarousel =
  ".swiper-pagination-clickable span:nth-child(3)[class*='active']";
var infoComponentText = ".cmp-information .cmp-text p";
var infocomponentIcon = ".cmp-information picture img";
var infocomponentBoldText = ".cmp-information .cmp-title__text";
var infoComponent = ".cmp-information";
var infoComponentbttn = ".cmp-information .button a";
var newsLetterComponent = ".cmp-container--newsletter";
var newsLetterSubscribe = ".cmp-container--newsletter .cmp-button__text";
var newsLetterSubscribeLink = ".cmp-container--newsletter a";
var newsLetterTitle = ".cmp-container--newsletter h3.cmp-title__text";
var newsLetterPreTitle = ".cmp-container--newsletter .cmp-title__text.Select";
var newsLetterBody = ".cmp-container--newsletter .cmp-text p";
var newsLetterPrimary = ".cmp-button--primary a";
var newsLetterSecondary = ".cmp-button--secondary a";
var curatedTitleLink = ".featured-post .list-item .list-item__title a";
var featuredTitleLink = ".featured-post .list-item .list-item__title a";
var curatedList = ".blog-home .list-item";
var curatedCategory = ".blog-home .list-item .list-item__category p";
var curatedTitle = ".blog-home .list-item .list-item__title h3";
var curatedDesc = ".blog-home .list-item .list-item__description";
var curatedImage = ".blog-home .list-item picture";
var featuredList = ".featured-post .list-item";
var featuredImage = ".featured-post .list-item .list-item__img";
var featuredTitle = ".featured-post .list-item .list-item__title h3";
var featuredDesc = ".featured-post .list-item .list-item__description";
var featuredBttn = ".featured-post a.cmp-button";
var featuredBttntxt = ".featured-post .cmp-button__text";
var blogListingComponent = ".cmp-bloglisting";
var blogListingImage = ".cmp-bloglisting__list .list-item .list-item__img";
var blogListingTitle = ".cmp-bloglisting__list .list-item .list-item__title";
var blogListingDesc =
  ".cmp-bloglisting__list .list-item .list-item__description";
var blogListingCardTitle =
  ".cmp-bloglisting__list .list-item:not(div[class*='fact-card']) .list-item__title h3";
var blogListingSortBy = ".cmp-bloglisting .form-group label[for='sortby']";
var blogListingCards = ".cmp-bloglisting__list .list-item";
var blogListingCardTitle =
  ".cmp-bloglisting__list .list-item:not(div[class*='fact-card']) .list-item__title h3";
var blogListingcardTitleLinks =
  ".cmp-bloglisting__list .list-item:not(div[class*='fact-card']) .list-item__title a";
var blogHeroTitle = ".cmp-bloghero .cmp-bloghero__title";
var blogPublishedDate = ".bloghero .cmp-bloghero__date";
var blogListingactivePageSelected = ".page.active";
var blogListingfirstBackArrowDisabled = ".first.disabled";
var blogListingpreviousBackArrowDisabled = ".prev.disabled";
var blogListingpageNumber = ".cmp-bloglisting__pagination .page";
var blogListingfirstBackArrow = ".cmp-bloglisting__pagination .prev";
var blogListingpreviousBackArrow = ".cmp-bloglisting__pagination .first";
var blogListinglastArrow = ".cmp-bloglisting__pagination .last";
var blogListingnextArrow = ".cmp-bloglisting__pagination .next";
var blogListingnextArrowDisabled =
  ".cmp-bloglisting__pagination .next.disabled";
var blogListinglastArrowDisabled =
  ".cmp-bloglisting__pagination .last.disabled";
var blogHeroComponent = ".cmp-bloghero";
var blogWrittenByText = ".cmp-bloghero__description .cmp-bloghero__author";
var blogAuthorName =
  ".cmp-bloghero__description .cmp-bloghero__author .cmp-bloghero__author-link";
var blogReviewedByText = ".cmp-bloghero__description .cmp-bloghero__review";
var blogReviewerName =
  ".cmp-bloghero__description .cmp-bloghero__review .cmp-bloghero__review-link";
var blogDate = ".cmp-bloghero__description .cmp-bloghero__date";
var blogHalfImage = ".cmp-bloghero__image";
var iconListComponentTitleOnly = ".twocolumn.pds-icon-list";
var iconListComponentIcon = ".teaser--pds-title-icon .cmp-teaser__card-image";
var iconListComponentTitle = ".teaser--pds-title-icon .cmp-teaser__title p";
var iconListComponentTitleCopy = ".onecolumn.pds-icon-list";
var iconListComponentIconTitleCopy =
  ".teaser--pds-title-copy-icon .cmp-teaser__card-image";
var iconListComponentTitleTitleCopy =
  ".teaser--pds-title-copy-icon .cmp-teaser__title p";
var iconListComponentDescTitleCopy =
  ".teaser--pds-title-copy-icon .cmp-teaser__description p";
var iconListComponentIconTitleCTACopy =
  ".teaser--pds-title-copy-cta-icon .cmp-teaser__card-image";
var iconListComponentTitleTitleCTACopy =
  ".teaser--pds-title-copy-cta-icon .cmp-teaser__title p";
var iconListComponentDescTitleCTACopy =
  ".teaser--pds-title-copy-cta-icon .cmp-teaser__description p";
var iconListComponentBttnTitleCTACopy =
  ".teaser--pds-title-copy-cta-icon .cmp-button--primary a";
var careerSearchComponent = ".careersearch";
var careerSearchTitle = ".careersearch .cmp-title__text";
var careerSearchText = ".careersearch .cmp-text";
var careerSearchSearchFields = ".careersearch .cmp-pdscareersearch";
var careerSearchKeyword =
  ".careersearch .cmp-pdscareersearch__search .search-input";
var careerSearchCityKeyword =
  ".careersearch .cmp-pdscareersearch__city .city-input";

var primaryNav = ".cmp-header--fixed";
var primaryNavLogo = ".cmp-header--fixed .cmp-header__logo";
var primaryNavLinks =
  ".cmp-header__nav-links .cmp-navigation__item .cmp-navigation__item-link";
var primaryNavBttn =
  ".cmp-header__nav-links .cmp-header__nav-actions .cmp-button--primary .cmp-button__text";
var primaryNavbttnLink =
  ".cmp-header__nav-links .cmp-header__nav-actions .cmp-button--primary a";
var primaryNavSearch = ".cmp-header__nav-links .button .cmp-button--text-icon";
var secNavLinksActive =
  ".cmp-header__nav-links .cmp-navigation__item .cmp-navigation__item-link.active";
var footer = ".cmp-footer";
var footerCopyrightLinksSection = ".cmp-footer .cmp-footer__copyright--links";
var footerCopyrightSocialSection = ".cmp-footer .cmp-footer__copyright--social";
var footerDisclaimerSection = ".cmp-footer .cmp-footer__disclaimer p";
var footerCopyrightLinks =
  ".cmp-footer .cmp-footer__copyright--links .click-list-item a";
var footerCopyrightSocialLinks = ".cmp-footer .cmp-footer__copyright--social a";
var quoteLargeComponent = ".pdsquote--largeimage";
var quoteLargeImage = ".pdsquote--largeimage .cmp-pdsquote__image";
var quoteLargeQuoteText =
  ".pdsquote--largeimage .cmp-pdsquote__quote span span:nth-child(1)";
var quoteLargeAuthor = ".pdsquote--largeimage .cmp-pdsquote__author span span";
var quoteSmallComponent = ".pdsquote--smallimage";
var quoteSmallImage = ".pdsquote--smallimage .cmp-pdsquote__image";
var quoteSmallQuoteText =
  ".pdsquote--smallimage .cmp-pdsquote__quote span span:nth-child(1)";
var quoteSmallAuthor = ".pdsquote--smallimage .author-name";
var quoteSmallAuthorDesc = ".pdsquote--smallimage .author-title";

var pdsLinkCard = ".pds-card__link-variation";
var pdslinkCardTitle =
  ".pds-card__link-variation .cmp-teaser__link .cmp-teaser__title";
var pdslinkCardDesc =
  ".pds-card__link-variation .cmp-teaser__link .cmp-teaser__description";
var pdslinkCardSubtitle =
  ".pds-card__link-variation .cmp-teaser__link .cmp-teaser__subtitle";
var pdslinkCardImage =
  ".pds-card__link-variation .cmp-teaser__link .cmp-teaser__card-image";

var pdsTitleCard = ".pds-card__title-variation";
var pdsTitleCardTitle =
  ".pds-card__title-variation .cmp-teaser__link .cmp-teaser__title";
var pdsTitleCardDesc =
  ".pds-card__title-variation .cmp-teaser__link .cmp-teaser__description";
var pdsTitleCardImage =
  ".pds-card__title-variation .cmp-teaser__link .cmp-teaser__card-image";

var pds3ColumnNoCarouselTitle =
  ".threecolumn.pds-card__title-variation .cmp-teaser__title";
var pds3ColumnNoCarouselLink = ".threecolumn.pds-card__title-variation a";
var pds3ColumnNoCarouselDesc =
  ".threecolumn.pds-card__title-variation .cmp-teaser__link .cmp-teaser__description";
var pds3ColumnNoCarouselSubtitle =
  ".threecolumn.pds-card__title-variation .cmp-teaser__link .cmp-teaser__subtitle";
var pds3ColumnNoCarouselImage =
  ".threecolumn.pds-card__title-variation .cmp-teaser__link .cmp-teaser__card-image";

var pds4ColumnNoCarouselTitle =
  ".fourcolumn.pds-card__link-variation .cmp-teaser__title";
var pds4ColumnNoCarouselLink = ".fourcolumn.pds-card__link-variation a";
var pds4ColumnNoCarouselDesc =
  ".fourcolumn.pds-card__link-variation .cmp-teaser__link .cmp-teaser__description";
var pds4ColumnNoCarouselSubtitle =
  ".fourcolumn.pds-card__link-variation .cmp-teaser__link .cmp-teaser__subtitle";
var pds4ColumnNoCarouselImage =
  ".fourcolumn.pds-card__link-variation .cmp-teaser__link .cmp-teaser__card-image";

var pds4ColCarousel = ".pdscard.fourcolumn .pds-card-carousel";
var pds3ColCarousel = ".pdscard.threecolumn .pds-card-carousel";
var pds3ColNextArrow = ".pdscard.threecolumn .swiper-button-next";
var pds4ColNextArrow = ".pdscard.fourcolumn .swiper-button-next";
var pds3ColDots = ".pdscard.threecolumn .swiper-pagination-bullet";
var pds4ColDots = ".pdscard.fourcolumn .swiper-pagination-bullet";

var heroComponent = ".cmp-teaser--centered";
var heroComponentWDesCTAImage =
  ".cmp-teaser--centered .cmp-teaser__image picture";
var heroComponentWDesCTATitle =
  ".cmp-teaser--centered .hero-content .cmp-title__text";
var heroComponentWDesCTADesc = ".cmp-teaser--centered .hero-content .text p";
var heroComponentWDesCTABttn =
  ".cmp-teaser--centered .hero-content .cmp-button--primary a";

var featuredListComponent = ".cmp-pdsfeaturedlist";
var featureListTitle = ".cmp-pdsfeaturedlist .cmp-pdsfeaturedlist_title span";
var featuredListLinks = ".cmp-pdsfeaturedlist .cmp-pdsfeaturedlist__items li a";

var infoCardTitle = ".infocard .cmp-infocard__list .infocard-item__title";
var infoCardDesc =
  ".infocard .cmp-infocard__list .infocard-item__description div";
var infoCardCardLength = ".cmp-infocard__list";
var infoCardQuoteTitle =
  ".infocard:nth-child(2) .cmp-infocard__list .cmp-infocard__quote .title-6";
var infoCardQuoteAuthor =
  ".infocard:nth-child(2) .cmp-infocard__list .author-name";
var infoCardQuoteAuthorInfo =
  ".infocard:nth-child(2) .cmp-infocard__list .author-info";
var infoCardQuoteImage =
  ".infocard:nth-child(2) .cmp-infocard__list .infocard__image";
var infoCardTextQuote =
  ".infocard:nth-child(4) .cmp-infocard__list .cmp-infocard__quote";
var infoCardTextQuoteAuthor =
  ".infocard:nth-child(4) .cmp-infocard__list .cmp-infocard__author";

// navigate to page url
Given("I am on the PDS homepage", () => {
  pds.homepagewebsite();
});

When("I navigate to the {string}", (url) => {
  pds.webPageNavigation(url);
});

// Gallery Component - PDS Redesign
And("I click on a photo in the below strip", () => {
  pds.imageClick();
});

Then(
  "the clicked photo should be highlighted in orange colour for PDS site",
  () => {
    pds.stripBorderColor();
  }
);

And("the corresponding bigger image should have background color black", () => {
  pds.largeImageBorderColor();
});

And("color of arrow icon should be blue", () => {
  pds.arrowIconColorGallery();
});

// // GALLERY COMPONENT
And("the gallery component is loaded", () => {
  cy.galleryComponent(galleryComponentVisible);
});

And("there are multiple assets in the gallery", () => {
  cy.galleryComponmentAssets(galleryComponentAssetsVisible);
});

Then("each asset should have a title or caption displayed", () => {
  cy.galleryComponentAssetsTitle(galleryComponentAssetsTitleVisible);
});

And(
  "the title should be in {string} and the font size should be {string}",
  (fontFamily, fontSize) => {
    cy.galleryComponentAssetsTitleCSS(
      galleryComponentAssetsTitleVisible,
      fontFamily,
      fontSize
    );
  }
);

And("the carousel area should have left and right arrow icons", () => {
  cy.galleryComponentAssetsArrow(
    galleryComponentAssetsLeftArrowVisible,
    galleryComponentAssetsRightArrowVisible
  );
});

And(
  "Clicking on each image should display same image in larger size,default first image should be enlarged",
  () => {
    cy.galleryImageLarge(
      galleryComponentAssetsVisible,
      galleryImage,
      videoPlayButton,
      videoClickButton
    );
  }
);

And("the user clicks on the right arrow icon in the carousel", () => {
  cy.galleryRightArrowClick(galleryRightArrow);
});

Then("the carousel should move to the next asset", () => {
  cy.galleryNextAssetVisible(galleryAllComponentAssets);
});

When("the user clicks on the left arrow icon in the carousel", () => {
  cy.galleryLeftArrowClick(galleryLeftArrow);
});

Then("the carousel should move to the previous asset", () => {
  cy.galleryPreviousAssetVisible(galleryAllComponentAssets);
});

// Swatch Color
And("check the first color code should be {string}", (string) => {
  pds.SwatchColors(string, 0);
});

And("check the second color code should be {string}", (string) => {
  pds.SwatchColors(string, 1);
});

And("check the third color code should be {string}", (string) => {
  pds.SwatchColors(string, 2);
});

And("check the fourth color code should be {string}", (string) => {
  pds.SwatchColors(string, 3);
});

// BUTTON COMPONENT
Then("the primary button background color should be {string}", (string) => {
  pds.buttonBackgrndColor(string, primaryCTA);
});

And("the primary button font size should be {string}", (string) => {
  pds.buttontextSize(string, primaryCTAText);
});

And("the primary button font colour should be {string}", (string) => {
  pds.buttontextColor(string, primaryCTAText);
});

Then("the link CTA font size should be {string}", (string) => {
  pds.buttontextSize(string, linkCTAText);
});

And("the link CTA font colour should be {string}", (string) => {
  pds.buttontextColor(string, linkCTAText);
});

And("underline colour should be {string}", (string) => {
  pds.bttnBorderColor(string, linkCTA);
});

Then("the category Tag background color should be {string}", (string) => {
  pds.buttonBackgrndColor(string, categoryTagCTA);
});

And("the category Tag font size should be {string}", (string) => {
  pds.buttontextSize(string, categoryTagCTAText);
});

And("the category Tag font colour should be {string}", (string) => {
  pds.buttontextColor(string, categoryTagCTAText);
});

Then(
  "the secondary CTA background color should be {string} in PDS site",
  (string) => {
    pds.buttonBackgrndColor(string, secondaryCTA);
  }
);

And("the secondary CTA font size should be {string}", (string) => {
  pds.buttontextSize(string, secondaryCTAText);
});

And("the secondary CTA font colour should be {string}", (string) => {
  pds.buttontextColor(string, secondaryCTAText);
});

And("the secondary CTA outline colour should be {string}", (string) => {
  pds.bttnBorderColor(string, secondaryCTA);
});

And("the underline white on state font size should be {string}", (string) => {
  pds.buttontextSize(string, underlineWhiteCTAText);
});

And("the underline white on state font colour should be {string}", (string) => {
  pds.buttontextColor(string, underlineWhiteCTAText);
});

And(
  "underline white on state underline colour should be {string}",
  (string) => {
    pds.bttnBorderColor(string, underlineWhiteCTA);
  }
);

Then(
  "the secondary white CTA background color should be {string}",
  (string) => {
    pds.buttonBackgrndColor(string, secondaryWhiteCTA);
  }
);

And("the secondary white CTA font size should be {string}", (string) => {
  pds.buttontextSize(string, secondaryWhiteCTAText);
});

And("the secondary white CTA font colour should be {string}", (string) => {
  pds.buttontextColor(string, secondaryWhiteCTAText);
});

// RTE
Then(
  "I should see the font colour options {string}, {string}, {string} for PDS",
  (color1, color2, color3) => {
    pds.fontColorOptions(color1, color2, color3);
  }
);

And(
  "I should see the body text font size and font type for PDS as {string} and {string}",
  (size, fontFamily) => {
    pds.paraTextCSS(size, fontFamily);
  }
);

And(
  "I should see the link text colour for PDS as {string} and size as {string}",
  (size, color) => {
    pds.linkTextCSS(color, size);
  }
);

And(
  "I should see the font type for H1 in PDS as {string} and size as {string}",
  (heading, size) => {
    pds.headingTextCSS(heading, size);
  }
);

And(
  "I should see the font type for H2 in PDS as {string} and size as {string}",
  (heading, size) => {
    pds.headingTextCSS(heading, size);
  }
);

And(
  "I should see the font type for H3 in PDS as {string} and size as {string}",
  (heading, size) => {
    pds.headingTextCSS(heading, size);
  }
);

And(
  "I should see the font type for H4 in PDS as {string} and size as {string}",
  (heading, size) => {
    pds.headingTextCSS(heading, size);
  }
);

And(
  "I should see the font type for H5 in PDS as {string} and size as {string}",
  (heading, size) => {
    pds.headingTextCSS(heading, size);
  }
);

And(
  "I should see the font type for H6 in PDS as {string} and size as {string}",
  (heading, size) => {
    pds.headingTextCSS(heading, size);
  }
);

And(
  "I should see the font type for Style 1 in PDS as {string} and size as {string}",
  (title, size) => {
    pds.stlyeTextCSS(title, size);
  }
);

And(
  "I should see the font type for Style 2 in PDS as {string} and size as {string}",
  (title, size) => {
    pds.stlyeTextCSS(title, size);
  }
);

And(
  "I should see the font type for Style 3 in PDS as {string} and size as {string}",
  (title, size) => {
    pds.stlyeTextCSS(title, size);
  }
);

And(
  "I should see the font type for Style 4 in PDS as {string} and size as {string}",
  (title, size) => {
    pds.stlyeTextCSS(title, size);
  }
);

And(
  "I should see the font type for Style 5 in PDS as {string} and size as {string}",
  (title, size) => {
    pds.stlyeTextCSS(title, size);
  }
);

And(
  "I should see the font type for Style 6 in PDS as {string} and size as {string}",
  (title, size) => {
    pds.stlyeTextCSS(title, size);
  }
);

And(
  "I should see the font type for Style 7 in PDS as {string} and size as {string}",
  (title, size) => {
    pds.stlyeTextCSS(title, size);
  }
);

And(
  "I should see the font type for Style 8 in PDS as {string} and size as {string}",
  (title, size) => {
    pds.stlyeTextCSS(title, size);
  }
);

// Title component
Then(
  "I should see the title heading colour option as {string}, {string}, {string} for PDS title",
  (color1, color2, color3) => {
    pds.fontColorOptionsTitle(color1, color2, color3);
  }
);

And(
  "I should see the title heading type for H1 in PDS as {string} and heading size as {string}",
  (heading, fontSize) => {
    pds.titleTextCSS(heading, fontSize, "style-1");
  }
);

And(
  "I should see the title heading type for H2 in PDS as {string} and heading size as {string}",
  (heading, fontSize) => {
    pds.titleTextCSS(heading, fontSize, "style-2");
  }
);

And(
  "I should see the title heading type for H3 in PDS as {string} and heading size as {string}",
  (heading, fontSize) => {
    pds.titleTextCSS(heading, fontSize, "style-3");
  }
);

And(
  "I should see the title heading type for H4 in PDS as {string} and heading size as {string}",
  (heading, fontSize) => {
    pds.titleTextCSS(heading, fontSize, "style-4");
  }
);

And(
  "I should see the title heading type for H5 in PDS as {string} and heading size as {string}",
  (heading, fontSize) => {
    pds.titleTextCSS(heading, fontSize, "style-5");
  }
);

And(
  "I should see the title heading type for H6 in PDS as {string} and heading size as {string}",
  (heading, fontSize) => {
    pds.titleTextCSS(heading, fontSize, "style-6");
  }
);

And(
  "I should see the title heading type for {string} Style 1 in PDS as {string} and heading size as {string}",
  (heading, style, fontSize) => {
    pds.titlestlyeTextCSS(heading, style, fontSize);
  }
);

And(
  "I should see the title heading type for {string} Style 2 in PDS as {string} and heading size as {string}",
  (heading, style, fontSize) => {
    pds.titlestlyeTextCSS(heading, style, fontSize);
  }
);

And(
  "I should see the title heading type for {string} Style 3 in PDS as {string} and heading size as {string}",
  (heading, style, fontSize) => {
    pds.titlestlyeTextCSS(heading, style, fontSize);
  }
);

And(
  "I should see the title heading type for {string} Style 4 in PDS as {string} and heading size as {string}",
  (heading, style, fontSize) => {
    pds.titlestlyeTextCSS(heading, style, fontSize);
  }
);

And(
  "I should see the title heading type for {string} Style 5 in PDS as {string} and heading size as {string}",
  (heading, style, fontSize) => {
    pds.titlestlyeTextCSS(heading, style, fontSize);
  }
);

And(
  "I should see the title heading type for {string} Style 6 in PDS as {string} and heading size as {string}",
  (heading, style, fontSize) => {
    pds.titlestlyeTextCSS(heading, style, fontSize);
  }
);

And(
  "I should see the title heading type for {string} Style 7 in PDS as {string} and heading size as {string}",
  (heading, style, fontSize) => {
    pds.titlestlyeTextCSS(heading, style, fontSize);
  }
);

And(
  "I should see the title heading type for {string} Style 8 in PDS as {string} and heading size as {string}",
  (heading, style, fontSize) => {
    pds.titlestlyeTextCSS(heading, style, fontSize);
  }
);

// ACCORDIAN
Then("I navigate to Accordion component in Specifications section", () => {
  cy.accordianSection(accordian);
});

And("Clicking on + icon opens all links", () => {
  cy.plusAccordianClick(accordian, accordianExpand);
});

And("Clicking on - icon closes all links", () => {
  cy.minusAccordianClick(accordian, accordianClosed);
});

// QUOTE COMPONENT
Then("the quote component is loaded on the page", () => {
  cy.quoteComponentVisible(quoteComponent, 2);
});

And("the carousel should display with a maximum of 1 quote", () => {
  cy.quoteComponentTextSize(quoteComponent, quoteComponentText, 1);
});

And(
  "the single quote should have quote text, title and author are displayed on the quote",
  () => {
    cy.quoteNameTitleAuthor(
      quoteComponent,
      quoteComponentTitleText,
      quoteComponentText,
      quoteCompAuthorCSS,
      1
    );
  }
);

And(
  "the quote title should be in {string} and font size should be {string} and weight should be bold",
  (fontFamily, fontSize) => {
    cy.quoteComponentTitleCSS(
      quoteComponent,
      quoteComponentTitleText,
      fontFamily,
      fontSize,
      1
    );
  }
);

And(
  "the quote text should have font family {string} and font size should be {string} and weight should be bold",
  (fontFamily, fontSize) => {
    cy.quoteComponentTextCSS(
      quoteComponent,
      quoteComponentText,
      fontFamily,
      fontSize,
      1
    );
  }
);

And(
  "the quote author text should be in {string} and font size should be {string}",
  (fontFamily, fontSize) => {
    cy.quoteComponentAuthorCSS(
      quoteComponent,
      quoteCompAuthorCSS,
      fontFamily,
      fontSize,
      1
    );
  }
);

And("the background color of quote should be {string}", (color) => {
  pds.quoteBackgrndColor(color, quoteComponent, 1);
});
And(
  "the background color of quote should be {string} for first quote",
  (color) => {
    pds.quoteBackgrndColor(color, firstQuote, 0);
  }
);
And(
  "the background color of quote should be {string} for second quote",
  (color) => {
    pds.quoteBackgrndColor(color, secondQuote, 0);
  }
);
And(
  "the background color of quote should be {string} for third quote",
  (color) => {
    pds.quoteBackgrndColor(color, thirdQuote, 0);
  }
);

And("the carousel should display with a maximum of 3 quotes", () => {
  cy.quoteCarouselVisible(
    quoteComponent,
    threeCarouselVisible,
    CarouselAllQuotes
  );
});

And(
  "first dot should be selected by default and quote text, title and author are displayed for first quote",
  () => {
    cy.CarouselDefaultCheck(firstDefaultCarousel);
    cy.quoteNameTitleAuthor(
      quoteComponent,
      quoteComponentTitleText,
      quoteComponentText,
      quoteCompAuthorCSS,
      0
    );
  }
);

And(
  "the quote title should be in {string} and font size should be {string} and weight should be bold in first quote",
  (fontFamily, fontSize) => {
    cy.quoteComponentTitleCSS(
      quoteComponent,
      quoteComponentTitleText,
      fontFamily,
      fontSize,
      0
    );
  }
);

And(
  "quote text should have font family {string} and font size should be {string} and weight should be bold in first quote",
  (fontFamily, fontSize) => {
    cy.quoteComponentTextCSS(
      quoteComponent,
      quoteComponentText,
      fontFamily,
      fontSize,
      0
    );
  }
);

And(
  "the quote author text should be in {string} and the font size should be {string} in first quote",
  (fontFamily, fontSize) => {
    cy.quoteComponentAuthorCSS(
      quoteComponent,
      quoteCompAuthorCSS,
      fontFamily,
      fontSize,
      0
    );
  }
);

And("the carousel dots should appear below the carousel", () => {
  cy.CarouselCheck(CarouselVisible);
});

When("the user clicks on the dot for quote 2", () => {
  cy.CarouselClick(secondCarousel);
});

Then("the carousel should display the second quote", () => {
  cy.CarouselDisplay(secondDefaultCarousel);
});

And(
  "the second quote component should have quote text, title and author displayed",
  () => {
    cy.quoteNameTitleAuthor(
      secondQuote,
      quoteComponentTitleText,
      quoteComponentText,
      quoteCompAuthorCSS,
      0
    );
  }
);
And(
  "the quote title should be in {string} and font size should be {string} and weight should be bold in second quote",
  (fontFamily, fontSize) => {
    cy.quoteComponentTitleCSS(
      secondQuote,
      quoteComponentTitleText,
      fontFamily,
      fontSize,
      0
    );
  }
);

And(
  "the quote text should have the font family {string} and font size should be {string} and weight should be bold in second quote",
  (fontFamily, fontSize) => {
    cy.quoteComponentTextCSS(
      secondQuote,
      quoteComponentText,
      fontFamily,
      fontSize,
      0
    );
  }
);
And(
  "the quote author text should be in {string} and font size should be {string} in second quote",
  (fontFamily, fontSize) => {
    cy.quoteComponentAuthorCSS(
      secondQuote,
      quoteCompAuthorCSS,
      fontFamily,
      fontSize,
      0
    );
  }
);

When("the user clicks on the dot for quote 3", () => {
  cy.CarouselClick(thirdCarousel);
});

Then("the carousel should display the third quote", () => {
  cy.CarouselDisplay(thirdDefaultCarousel);
});

And(
  "the third quote component should have quote text, title and author displayed",
  () => {
    cy.quoteNameTitleAuthor(
      thirdQuote,
      quoteComponentTitleText,
      quoteComponentText,
      quoteCompAuthorCSS,
      0
    );
  }
);
And(
  "the quote title should be in {string} and font size should be {string} and weight should be bold in third quote",
  (fontFamily, fontSize) => {
    cy.quoteComponentTitleCSS(
      thirdQuote,
      quoteComponentTitleText,
      fontFamily,
      fontSize,
      0
    );
  }
);
And(
  "quote text should have the font family {string} and font size should be {string} and weight should be bold in third quote",
  (fontFamily, fontSize) => {
    cy.quoteComponentTextCSS(
      thirdQuote,
      quoteComponentText,
      fontFamily,
      fontSize,
      0
    );
  }
);

And(
  "the quote author text should be in {string} and font size should be {string} in third quote",
  (fontFamily, fontSize) => {
    cy.quoteComponentAuthorCSS(
      thirdQuote,
      quoteCompAuthorCSS,
      fontFamily,
      fontSize,
      0
    );
  }
);

And(
  "verify that title, text and author are different to check new quote is loaded",
  () => {
    cy.compareText3Quotes(
      firstQuoteText,
      secondCarousel,
      secondQuoteText,
      thirdCarousel,
      thirdQuoteText
    );
  }
);

// INFO COMPONENT
And(
  "the text in the information box should contain {string}",
  (componentText) => {
    cy.InfoComponentText(infoComponent, infoComponentText, componentText);
  }
);

And(
  "the {string} text should be {string} and font size is {string}",
  (Title, fontFamily, fontSize) => {
    cy.infoComponentboldTextFont(
      infocomponentBoldText,
      Title,
      fontFamily,
      fontSize
    );
  }
);

And("there should be an icon displayed", () => {
  cy.infoComponenticonVisible(infocomponentIcon);
});

And(
  "the other text should be {string} and font size is {string}",
  (fontFamily, fontSize) => {
    cy.InfoComponentTextFamily(infoComponentText, fontFamily, fontSize);
  }
);

And("I click on the button, response should be 200", () => {
  cy.BttnResponse(infoComponentbttn);
});

And("the background color of button should be {string}", (color) => {
  pds.buttonBackgrndColor(color, infoComponentbttn);
});

And(
  "{string} text should be {string} and font size is {string}",
  (Title, fontFamily, fontSize) => {
    cy.infoComponentboldTextFont(
      infoComponentbttn,
      Title,
      fontFamily,
      fontSize
    );
  }
);

// COMMON CONCERN CAROUSEL
Then("I should be able to see Common Concern carousel component", () => {
  cy.commonConcernCarouselVisbile(commonConcernCard);
});

And("I should be able to see the title", () => {
  cy.commonConcernCarouselTitleVisible(commonConcernMainTitle);
});

And("I should see right arrow", () => {
  cy.commonConcernCarouselRightVisible(commonConcernCardRight);
});

And("there are cards displayed with image and title", () => {
  cy.commonConcernCarouselTitleImageVisible(
    commonConcernCardImage,
    commonConcernCardTitle
  );
});

And(
  "the card title is having font family {string} and font size {string} on Common Concern carousel",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(commonConcernCardTitle, fontFamily, fontSize);
  }
);

And("title has yellow underline", () => {
  cy.commonConcernCarouselYellowUnderlineVisible(commonConcernCardTitle);
});

And(
  "the user clicks on any part of the card and user should be redirected to the corresponding link with a 200 status code",
  () => {
    cy.verifyBttnRedirection(commonConcerCardLink);
  }
);

Then("I should be able to click on right side arrow", () => {
  cy.commonConcerCarouselRightClick(commonConcernCardRight);
});

And("next articles should be displayed", () => {
  cy.commonConcerCarouselNextVisible(commonConcernCardTitle1);
});

And(
  "when we click on on previous arrow previous articles should be displayed",
  () => {
    cy.commonConcerCarouselPreviousVisible(
      commonConcernCardLeft,
      commonConcernCardTitle1
    );
  }
);

And(
  "verify that each card title is a link to the full article and with a 200 status code",
  () => {
    cy.BttnResponse200(threeCardBttnViewAllLink, 0);
  }
);

Then("I should be able to see 4 column common concerns card set", () => {
  cy.commonConcern4CardVisible(commonConcern4Column);
});

And("I should see 4 cards in row and there is no arrow", () => {
  cy.commonConcern4cardsRow(commonConcern4Column);
  cy.magazineCarouselColumnRightLeftArrow(
    magazinecardNext,
    magazineCardPrevious
  );
});

And("there are Common Concern cards displayed with image and title", () => {
  cy.commonConcernCardImageTitle(commonConcern4Title, commonConcern4Image);
});

And(
  "the card title is having font family {string} and font size {string} on Common Concern 4 column",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(commonConcern4Title, fontFamily, fontSize);
  }
);

And("Common Concern card title has yellow underline", () => {
  cy.titleLineColour(commonConcern4Title);
});

When(
  "the user clicks on any part of the common concern 4 card and user should be redirected to the corresponding link with a 200 status code",
  () => {
    cy.verifyBttnRedirection(commonConcern4CardLink);
  }
);

Then("I should be able to see 3 column common concerns card set", () => {
  cy.commonConcern3CardVisible(commonConcern3Column);
});

And("I should see two rows with in three cards each row without arrow", () => {
  cy.commonconcern3cardsRow(commonConcern3Column);
  cy.magazineCarouselColumnRightLeftArrow(
    magazinecardNext,
    magazineCardPrevious
  );
});

And("there are Common Concern 3 cards displayed with image and title", () => {
  cy.commonConcernCardImageTitle(commonConcern3Title, commonConcern3Image);
});

And(
  "the card title is having font family {string} and font size {string} on Common Concern 3 column",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(commonConcern3Title, fontFamily, fontSize);
  }
);

And("Common Concern 3 card title has yellow underline", () => {
  cy.titleLineColour(commonConcern3Title);
});

When(
  "the user clicks on any part of the common concern 3 card and user should be redirected to the corresponding link with a 200 status code",
  () => {
    cy.verifyBttnRedirection(commonConcern3CardLink);
  }
);

Then("I should be able to see the Common Concern carousel component", () => {
  pds.componentVisible(commonConcernCard);
});

And("common Concern carousel arrow colour should be {string}", (color) => {
  pds.commonConcernArrowColor(color);
});

And("the text underline colour should be {string}", (color) => {
  pds.bttnBorderColor(color, commonConcernCardTitle);
});

Then("I should be able to see 4 Common Concern carousel component", () => {
  pds.componentVisible(commonConcern4Column);
});

And(
  "the common concerns 4 column text underline colour should be {string}",
  (color) => {
    pds.threefourcommonConcernUnderline(commonConcern4Title, color);
  }
);

Then("I should be able to see 3 Common Concern carousel component", () => {
  pds.componentVisible(commonConcern3Column);
});

And(
  "the common concerns 3 text underline colour should be {string}",
  (color) => {
    pds.threefourcommonConcernUnderline(commonConcern3Title, color);
  }
);

// MAGAZINE CAROUSEL
Then("I should see the magazine carousel displayed", () => {
  cy.magazineCarouselVisible(magazineCarousel);
});

And("the magazine carousel should contain a right arrow and 4 cards", () => {
  cy.magazineCarouselRightVisible(
    magazinecardNext,
    magazineCarouselTile1,
    magazineCarouselTile2,
    magazineCarouselTile3,
    magazineCarouselTile4,
    magazineCarouselTile5
  );
});

And(
  "each magazine carousel card should be clickable with a 200 status code",
  () => {
    cy.BttnResponse(magazineCarouselLink);
  }
);

And("each card should have an image and a description", () => {
  cy.magazineCarouselTitleDescImage(
    magazineCarouselDesc,
    magazineCarouselImage
  );
});

And(
  "the card title is having font family {string} and font size {string} on Magazine Carousel",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(magazineCarouselTiTle, fontFamily, fontSize);
  }
);

And(
  "the card description is having font family {string} and font size {string} on Magazine Carousel",
  (fontFamily, fontSize) => {
    cy.CardListDescCSS(magazineCarouselDesc, fontFamily, fontSize);
  }
);

When("I click on the right arrow", () => {
  cy.magazineCarouselRightClick(magazinecardNext);
});

Then("the next card in the carousel should be displayed", () => {
  cy.magazineCarouselRightDisplay(magazineCarouselTile5);
});

And(
  "when we click on previous arrow, previous card should display in 4 set card",
  () => {
    cy.magazineCarouselLeftVisible(
      magazineCardPrevious,
      magazineCarouselTile1,
      magazineCarouselTile2,
      magazineCarouselTile3,
      magazineCarouselTile4,
      magazineCarouselTile5
    );
  }
);

When(
  "I reach the end of the carousel by clicking the right arrow multiple times",
  () => {
    cy.magazineCarouselRightClickEnd(magazinecardNext);
  }
);

And(
  "there should not be a right arrow visible and only the left arrow should be displayed",
  () => {
    cy.magazineCarouselRightLeftArrow(magazinecardNext, magazineCardPrevious);
  }
);

Then("I should see the 2-column magazine displayed", () => {
  cy.magazineCarouselColumnVisible(magazineCarousel2Column);
});

And(
  "the 2-column should contain 2 cards in row and does not contain any arrow",
  () => {
    cy.magazineCarousel2cardsRow(magazineCarousel2Column);
    cy.magazineCarouselColumnRightLeftArrow(
      magazinecardNext,
      magazineCardPrevious
    );
  }
);

And("each card should be clickable with a 200 status code", () => {
  cy.BttnResponse(magazineCarousel2ColumnLink);
});

And(
  "each Two column Magazine card should have an image, title in blue color, and a description",
  () => {
    cy.magazineCarouselTitleDescImage(
      magazineCarousel2ColumnTitle,
      magazineCarousel2ColumnDesc,
      magazineCarousel2ColumnImage
    );
  }
);

And(
  "the card title is having font family {string} and font size {string} on Two column Magazine Carousel",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(magazineCarousel2ColumnTitle, fontFamily, fontSize);
  }
);

And(
  "the card description is having font family {string} and font size {string} on Two column Magazine Carousel",
  (fontFamily, fontSize) => {
    cy.CardListDescCSS(magazineCarousel2ColumnDesc, fontFamily, fontSize);
  }
);

Then("I should see the 4-column magazine displayed", () => {
  cy.magazineCarouselColumnVisible(magazineCarousel4Column);
});

And(
  "the 4-column should contain 4 cards and does not contain any arrow",
  () => {
    cy.magazineCarousel4cardsRow(magazineCarousel4Column);
    cy.magazineCarouselColumnRightLeftArrow(
      magazinecardNext,
      magazineCardPrevious
    );
  }
);

And(
  "each Four column Magazine card should be clickable with a 200 status code",
  () => {
    cy.BttnResponse(magazineCarousel4ColumnLink);
  }
);

And(
  "each Four column Magazine card should have an image, title in blue color, and a description",
  () => {
    cy.magazineCarouselTitleDescImage(
      magazineCarousel4ColumnTitle,
      magazineCarousel4ColumnDesc,
      magazineCarousel4ColumnImage
    );
  }
);

And(
  "the card title is having font family {string} and font size {string} on Four column Magazine Carousel",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(magazineCarousel4ColumnTitle, fontFamily, fontSize);
  }
);

And(
  "the card description is having font family {string} and font size {string} on Four column Magazine Carousel",
  (fontFamily, fontSize) => {
    cy.CardListDescCSS(magazineCarousel4ColumnDesc, fontFamily, fontSize);
  }
);

Then("I should be able to see the Magazine carousel component", () => {
  pds.componentVisible(magazineCarousel);
});

And("magazine carousel arrow colour should be {string}", (color) => {
  pds.magazinCarouselnArrowColor(color);
});

And("the magazine carousel title colour should be {string}", (color) => {
  pds.magazineTitleColor(magazineCarouselTiTle, color);
});

Then("I should be able to see 4 Magazine carousel component", () => {
  pds.componentVisible(magazineCarousel4ColumnTitle);
});

And("the 4 magazine carousel title colour should be {string}", (color) => {
  pds.magazineTitleColor(magazineCarousel4ColumnTitle, color);
});

Then("I should be able to see 2 Magazine carousel component", () => {
  pds.componentVisible(magazineCarousel2ColumnTitle);
});

And("the 2 magazine carousel title colour should be {string}", (color) => {
  pds.magazineTitleColor(magazineCarousel2ColumnTitle, color);
});

// CARD COMPONENT
When("the user views the text cards", () => {
  cy.textcardwithCTA(textcardwithCTAComponent);
});

And(
  "each card with CTA should have a Title, Description and CTA button",
  () => {
    cy.cardElements(
      textcardwithCTATitle,
      textcardwithCTADescription,
      textcardCTA
    );
  }
);
And("verify the CTA response is 200", () => {
  cy.CTAresponse(textcardCTAAnchor);
});

And("the background color of each text card should be white", () => {
  cy.cardBackground(cardBG);
});

And("verify the CTA has underline color {string}", (color) => {
  pds.cardUL(color);
});

And("the user views the text cards without CTA", () => {
  cy.cardTextwithoutCTA(textcardwithCTAComponent);
});

And("each card without CTA should have a Title and Description", () => {
  cy.cardTextTitleDesc(
    textCardWOCTATitle,
    textCardWOCTADescription,
    textcardwithCTADescription
  );
});

And(
  "the background color of each Text card without CTA should be white",
  () => {
    cy.cardTextWObackgroundcolor(textCardWOCTABG);
  }
);

And("the user views the fact card", () => {
  cy.factCardsComponent(factCardComponent);
});

Then(
  "the fact card should have a {string}, {string}, {string} background",
  (color1, color2, color3) => {
    cy.factCardBackground(factCardBG, 0, color1);
    cy.factCardBackground(factCardBG, 1, color2);
    cy.factCardBackground(factCardBG, 2, color3);
  }
);

And("the fact card should display a Title", () => {
  cy.factCardsTitle(factCardTitle);
});

And("the fact card should display a Subtitle", () => {
  cy.factCardsDesc(factCardDescription);
});

And("title, subtitle should be center aligned", () => {
  cy.factCardsCenter(factCardTitle, factCardDescription);
});

And("the user views the cost cards", () => {
  cy.costCardComponenet(costCard);
});

And("each card should have a Title", () => {
  cy.costTitle(costCardTitle);
});

And("each card should have a Cost displayed", () => {
  cy.costCardCostPDS(costCardDesc);
});

And("each card should have a Date displayed", () => {
  cy.costCardDate(costCardSubTitle);
});

And("each card should have a CTA link, verify the CTA response is 200", () => {
  cy.costCardCTABttn(costCardCTA);
});

And("the background color of each cost card should be white", () => {
  cy.costCardWhiteColour(costCardBG);
});

And("the user views the tags cards", () => {
  cy.tagsCardsComponent(tagCard);
});

And("each tags card should have a Title", () => {
  cy.tagsCardsTitle(tagCardTitle);
});

And("each tags card should have a Description", () => {
  cy.tagsCardsDesc(tagCardDesc);
});

And("each card should have Tags", () => {
  cy.tagsCardBttn(tagCardCTAtags);
});

And(
  "if a specific tag is present with a CTA, verify the CTA response is 200",
  () => {
    cy.BttnResponse(tagCardTagsAnchor);
  }
);

And("the user views the text cards with Icon", () => {
  pds.componentVisible(textcardIcon);
});

And("card should have a Title and Description", () => {
  pds.textCardIcon();
});

And("card should have a CTA link, verify the CTA response is 200", () => {
  cy.BttnResponse(textcarIconBttn);
});

// COST ESTIMATOR COMPONENT
When("the cost estimator component is loaded", () => {
  cy.costEstimatorComponent(costEstimatorVisible);
});

Then("by default user should see {string} title", (tabName) => {
  cy.costEstimatorActive(costEstimatorActiveTab, tabName);
});

And(
  "Routine cleaning tab should contain cost three columns of cost card teaser",
  () => {
    cy.costCardEstimatorComponent(costCardEstimator);
  }
);

And("Tab has background colour as {string}", (backgroundColor) => {
  cy.costEstimatorTabColor(costEstimatorActiveTab, backgroundColor);
});

And("each cost card has cost, title and subtext displayed", () => {
  cy.costEstimatorCostTitleSubtext(
    costCardEstimatorTitle,
    costCardEstimatorCost,
    costCardEstimatorSubtext
  );
});

And(
  "the cost text should be in {string} and font size should be {string}",
  (fontFamily, fontSize) => {
    cy.costEstimatorCost(costCardEstimatorCost, fontFamily, fontSize);
  }
);

And(
  "the title text should be in {string} and font size should be {string}",
  (fontFamily, fontSize) => {
    cy.costEstimatorTitle(costCardEstimatorTitle, fontFamily, fontSize);
  }
);

And(
  "the subtext text should be in {string} and font size should be {string}",
  (fontFamily, fontSize) => {
    cy.costEstimatorSubtext(costCardEstimatorSubtext, fontFamily, fontSize);
  }
);

When("the user clicks on the right arrow icon", () => {
  cy.costEstimatorRightArrowClick(costEstimatorRightArrow);
});

Then("the content of {string} should be displayed", (tabName) => {
  cy.costEstimatorTabContentCheck(
    costEstimatorActiveTab,
    costCardEstimator,
    costCardEstimatorTitle,
    costCardEstimatorCost,
    costCardEstimatorSubtext,
    tabName,
    "1",
    "3"
  );
});

When("the user clicks on the left arrow icon", () => {
  cy.costEstimatorLeftArrowClick(costEstimatorLeftArrow);
});

Then("the content of {string} tab should be displayed", (tabName) => {
  cy.costEstimatorTabContentCheck(
    costEstimatorActiveTab,
    costCardEstimator,
    costCardEstimatorTitle,
    costCardEstimatorCost,
    costCardEstimatorSubtext,
    tabName,
    "0",
    "0"
  );
});

When("the user clicks on the right arrow icon for 4 times", () => {
  cy.costEstimatorRightArrowClickFive(costEstimatorRightArrow);
});

Then("user should see {string} as tab name", (tabName) => {
  cy.costEstimatorActive(costEstimatorActiveTab, tabName);
});

When("user clicks on right arrow one more time", () => {
  cy.costEstimatorRightArrowClick(costEstimatorRightArrow);
});

Then("content of {string} tab should be displayed", (tabName) => {
  cy.costEstimatorTabContentCheck(
    costEstimatorActiveTab,
    costCardEstimator,
    costCardEstimatorTitle,
    costCardEstimatorCost,
    costCardEstimatorSubtext,
    tabName,
    "5",
    "15"
  );
});

When("the user clicks on the left arrow icon for 4 times", () => {
  cy.costEstimatorLeftArrowClickFive(costEstimatorLeftArrow);
});

When("user clicks on left arrow one more time", () => {
  cy.costEstimatorLeftArrowClick(costEstimatorLeftArrow);
});

When("there are {string} tabs authored", (tabSize) => {
  cy.TabsAuthoredCostEstimator(CostEstimatorTabsAuthored, tabSize);
});

Then("the left and right arrow icons should be hidden", () => {
  cy.costEstimatorArrowNotVisible(
    costEstimatorRightArrow,
    costEstimatorLeftArrow
  );
});

Then("the left and right arrow icons should be visible", () => {
  cy.costEstimatorArrowVisible(costEstimatorRightArrow, costEstimatorLeftArrow);
});

When("user clicks on {string} tab", (tabName) => {
  cy.costEstimatorTabClick(CostEstimatorTabsAuthored, tabName);
});

Then("the cost estimator cost colour should be {string}", (color) => {
  pds.costEstimatorPrice(color);
});

And("the cost estimator arrow colour should be {string}", (color) => {
  pds.arrowIconColor(color);
});

And("the cost estimator tab border top colour should be {string}", (color) => {
  pds.costEstimatorTabBorder(color);
});

// TEASER
Then("verify the teaser with an image on the page", () => {
  cy.teaserhalfImageComponent(teaserImageComponent);
});

And("verify the teaser has a heading and subtext", () => {
  cy.teaserTitleAndSubextVisible(seeMoreTitle, seeMoreDesc);
});

And(
  "the title should be in {string} and font size should be {string}",
  (fontFamily, fontSize) => {
    cy.teaserTitleCSS(seeMoreTitle, fontFamily, fontSize);
  }
);

And(
  "the subtext should be in {string} and font size should be {string}",
  (fontFamily, fontSize) => {
    cy.teaserSubtextCSS(seeMoreDesc, fontFamily, fontSize);
  }
);

And("verify the teaser has a {string} link", (seeMore) => {
  cy.teaserseemoreLink(seeMoreLessLink, seeMore);
});

And(
  "verify the {string} link has underline with color {string}",
  (seeMore, color) => {
    pds.seeLessMoreBttnUndercolor(seeMoreLessLinkUnderline, seeMore, color);
  }
);

When("the user clicks on the {string} link", (seeMore) => {
  cy.clickSeeMoreLess(seeMoreLessLink, seeMore);
});

Then("the teaser expands to show more description", () => {
  cy.seeMoreTitleDesc(seeMoreTitle, seeMoreDesc, seeMoreContentStyle);
});

And("the teaser displays a {string} link", (seeLess) => {
  cy.teaserseelessLink(seeMoreLessLink, seeLess);
});

And(
  "verify {string} link has underline with color {string}",
  (seeLess, color) => {
    pds.seeLessMoreBttnUndercolor(seeMoreLessLinkUnderline, seeLess, color);
  }
);

When("the user click on the {string} link", (seeLess) => {
  cy.clickSeeMoreLess(seeMoreLessLink, seeLess);
});

Then(
  "the teaser collapses to hide the additional description and {string} link should be visible",
  (seeMore) => {
    cy.teaserSeeLessCollapse(seeLessCollapse, seeMoreLessLink, seeMore);
  }
);

And("verify teaser with half left image on the page", () => {
  cy.teaserleftimageComponent(leftimageComponent);
});

And("verify Teaser- left image is present", () => {
  cy.teaserleftimageVisible(leftImageTeaser);
});

And("title and description is present on right side", () => {
  cy.teaserleftImageTitleDesc(leftImageTeaserTitle, leftImageTeaserDesc);
});

And(
  "title should be in {string} and font size should be {string}",
  (fontFamily, fontSize) => {
    cy.teaserleftImageTitleCSS(leftImageTeaserTitle, fontFamily, fontSize);
  }
);

And(
  "the description should be in {string} and font size should be {string}",
  (fontFamily, fontSize) => {
    cy.teaserleftImageDescCSS(leftImageTeaserDesc, fontFamily, fontSize);
  }
);

And("there is CTA link at bottom", () => {
  cy.teaserleftimageBttnVisible(leftimageBttn);
});

And(
  "CTA text should be in {string} and font size should be {string}",
  (fontFamily, fontSize) => {
    cy.teaserleftimageBttnCSS(leftimageBttn, fontFamily, fontSize);
  }
);

And("clicking on CTA link navigates to 200 page", () => {
  cy.BttnResponse(leftimageBttn);
});

And("verify the CTA link has underline with color {string}", (color) => {
  pds.CTABttnUndercolor(leftimageBttn, color);
});

And("verify teaser with half right image on the page", () => {
  cy.teaserrightimageComponent(rightimageComponent);
});

And("verify Teaser - right image is present on the page", () => {
  cy.teaserrightimageVisible(rightimageVisible);
});

And("title and description is present on left side", () => {
  cy.teaserrightImageTitleDesc(rightImageTeaserTitle, rightImageTeaserDesc);
});

And(
  "title should be in {string} and the font size should be {string}",
  (fontFamily, fontSize) => {
    cy.teaserrightImageTitleCSS(rightImageTeaserTitle, fontFamily, fontSize);
  }
);

And(
  "description should be in {string} and font size should be {string}",
  (fontFamily, fontSize) => {
    cy.teaserrightImageDescCSS(rightImageTeaserDesc, fontFamily, fontSize);
  }
);

And("there is CTA link at the bottom", () => {
  cy.teaserrightimageBttnVisible(rightimageBttn);
});

And(
  "CTA text should be in {string} and the font size should be {string}",
  (fontFamily, fontSize) => {
    cy.teaserleftimageBttnCSS(rightimageBttn, fontFamily, fontSize);
  }
);

And("clicking on CTA link navigates to the 200 page", () => {
  cy.BttnResponse(rightimageBttn);
});

And("verify CTA link has underline with color {string}", (color) => {
  pds.CTABttnUndercolor(rightimageBttn, color);
});

And("verify teaser with half image without CTA on the page on PDS site", () => {
  cy.teaserWithoutCTA(teaserwithoutCTA);
});

And("verify teaser image is present", () => {
  cy.teaserWithoutCTAImage(teaserwithoutCTAImage);
});

And("verify title is present on the page", () => {
  cy.teaserWithoutCTATitle(teaserwithoutCTATitle);
});

And("verify description is present", () => {
  cy.teaserWithoutCTADesc(teaserwithoutCTADesc);
});

And(
  "title should be in the {string} and font size should be {string}",
  (fontFamily, fontSize) => {
    cy.teaserWithoutCTATitleCSS(teaserwithoutCTATitle, fontFamily, fontSize);
  }
);

And(
  "the description should be in {string} and the font size should be {string}",
  (fontFamily, fontSize) => {
    cy.teaserWithoutCTADescCSS(teaserwithoutCTADesc, fontFamily, fontSize);
  }
);

And("there is no CTA link at bottom", () => {
  cy.teaserWithoutCTAvisible(teaserwithoutCTAVisible);
});

// DYNAMIC LISTING
Then("I shoud see the 3 cards listing variation", () => {
  cy.threeCardListingVisible(threeCardList);
});

And("{string} button should be displayed on right side", (string) => {
  cy.CardBttnVisible(threeCardBttnViewAll, 2, string);
});

And(
  "the Button text {string} is having font family {string} and font size {string} on 3 cards listing",
  (string, fontFamily, fontSize) => {
    cy.CardBttnCSS(threeCardBttnViewAll, 2, string, fontFamily, fontSize);
  }
);

And("I see that there are {string} cards in the listing", (string) => {
  cy.CardListSize(threeCardListing, string);
});

And("Each card has image, title and description", () => {
  cy.CardListTitleImageDesc(threeCardTitle, threeCardDesc, threeCardImage);
});

And("title should be in {string} color", (color) => {
  pds.titleColorListing(threeCardTitle, color);
});

And(
  "the Card title is having font family {string} and font size {string} on 3 cards listing",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(threeCardTitle, fontFamily, fontSize);
  }
);

And(
  "the Card description is having font family {string} and font size {string} on 3 cards listing",
  (fontFamily, fontSize) => {
    cy.CardListDescCSS(threeCardDesc, fontFamily, fontSize);
  }
);

And(
  "I see that each article title is a link to the full article and with a 200 status code",
  () => {
    cy.BttnLinkNotEmpty(threeCardTitleLink);
  }
);

And(
  "I see that the {string} button should have 200 status code on 3 cards listing",
  (string) => {
    cy.BttnLinkNotEmpty(threeCardBttnViewAllLink, 2);
  }
);

Then("I see the 4 cards listing variation", () => {
  cy.fourCardListingVisible(fourCardList);
});

And("{string} button should be displayed on the right side", (string) => {
  cy.CardBttnVisible(fourCardBttnViewAll, 0, string);
});

And(
  "the Button text {string} is having font family {string} and font size {string} on 4 cards listing component",
  (string, fontFamily, fontSize) => {
    cy.CardBttnCSS(fourCardBttnViewAll, 0, string, fontFamily, fontSize);
  }
);

And("I see that there are {string} cards on cards listing", (string) => {
  cy.CardListSize(fourCardListing, string);
});

And("Each card has image, title and description on 4 cards listing", () => {
  cy.CardListTitleImageDesc(fourCardTitle, fourCardDesc, fourCardImage);
});

And("title should be in {string} color on 4 cards listing", (color) => {
  pds.titleColorListing(fourCardTitle, color);
});

And(
  "the Card title is having font family {string} and font size {string} on 4 cards listing",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(fourCardTitle, fontFamily, fontSize);
  }
);

And(
  "the Card description is having font family {string} and font size {string} on 4 cards listing",
  (fontFamily, fontSize) => {
    cy.CardListDescCSS(fourCardDesc, fontFamily, fontSize);
  }
);

And(
  "Verify that each article title is a link to the full article and with a 200 status code",
  () => {
    cy.BttnLinkNotEmpty(fourCardTitleLink);
  }
);

And(
  "I see that the {string} button should have 200 status code on 4 cards listing",
  () => {
    cy.BttnLinkNotEmpty(fourCardBttnViewAllLink);
  }
);

Then("I should see carousel listing variation", () => {
  cy.threecarouselListingVisbile(threeCarouselComponent);
});

And(
  "{string} button should be displayed on right side of carousel listing component",
  (string) => {
    cy.CardBttnVisible(threeCarouselBttnViewAll, 2, string);
  }
);

And(
  "the Button text {string} is having font family {string} and font size {string} on 3 card carousel listing",
  (string, fontFamily, fontSize) => {
    cy.CardBttnCSS(threeCarouselBttnViewAll, 2, string, fontFamily, fontSize);
  }
);

And("I see that there are 3 cards in the listing", () => {
  cy.threeCarouselCardsSize(
    threeCarouselTitle1,
    threeCarouselTitle2,
    threeCarouselTitle3,
    threeCarouselTitle4
  );
});

And("Each card has image title and description", () => {
  cy.CardListTitleImageDesc(
    threeCarouselTitle,
    threeCarouselDesc,
    threeCarouselImage
  );
});

And(
  "the Card title is having font family {string} and font size {string} on carousel listing",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(threeCarouselTitle, fontFamily, fontSize);
  }
);

And(
  "the Card description is having font family {string} and font size {string} on carousel listing",
  (fontFamily, fontSize) => {
    cy.CardListDescCSS(threeCarouselDesc, fontFamily, fontSize);
  }
);

And(
  "Verify that each card title is a link to the full article and with a 200 status code",
  () => {
    cy.BttnLinkNotEmpty(threeCarouselTitleLink);
  }
);

And(
  "I see that the {string} button should have 200 status code on 3 carousel listing",
  () => {
    cy.BttnLinkNotEmpty(threeCarouselBttnViewAllLink, 2);
  }
);

And("{string} text should be in {string} color", (more, color) => {
  pds.moreLessColorCode(threeCarouselMore, more, color);
});

And("arrow icon with more text color should be {string}", (color) => {
  pds.morearrowIconColorDymanicListing(color);
});

And("there is {string} link at right side of carousel", (string) => {
  cy.threeCarouselMoreLinkVisbile(threeCarouselMore, string);
});

And(
  "when I click on {string} link, then i should see three more cards are coming up",
  (string) => {
    cy.threeCarouselMoreLinkclick(
      threeCarouselMore,
      threeCarouselMoreClick,
      threeCarouselTitle4,
      string
    );
  }
);

And("there is {string} link on left side of carousel", (string) => {
  cy.threeCarouselLessLinkVisbile(threeCarouselLess, string);
});

And("{string} text should be in this {string} color", (less, color) => {
  pds.moreLessColorCode(threeCarouselLess, less, color);
});

And("arrow icon with less text color should be {string}", (color) => {
  pds.lessarrowIconColorDymanicListing(color);
});

And("clicking on {string} we should see first three cards", (string) => {
  cy.threeCarouselLessLinkclick(
    threeCarouselLess,
    threeCarouselMoreClick,
    string
  );
});

And(
  "clicking on {string} link for three times, more link disappears and only {string} link should be present",
  (string1, string2) => {
    cy.threeCarouselMoreLessFunc(
      threeCarouselMore,
      threeCarouselLess,
      string1,
      string2
    );
  }
);

And("the carousel should have a title and description below it", () => {
  cy.factCardTitleDescVisble(factCardTitleComponent, factCardDescComponent);
});

And(
  "the title is having font family {string} and font size {string} on fact card component",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(factCardTitleComponent, fontFamily, fontSize);
  }
);

And(
  "the description is having font family {string} and font size {string} on fact card component",
  (fontFamily, fontSize) => {
    cy.CardListDescCSS(factCardDescComponent, fontFamily, fontSize);
  }
);

And("the carousel contains three cards in a row", () => {
  cy.factCardSize(
    threeCarouselTitle1,
    threeCarouselTitle2,
    threeCarouselTitle3,
    threeCarouselTitle4
  );
});

And(
  "verify that each card title is link to the full article and with a 200 status code",
  () => {
    cy.BttnLinkNotEmpty(factCardTitleLink, 2);
  }
);

And(
  "each card should have an image, title in blue color and a description",
  () => {
    cy.factCardTitleImageDesc(CardTitleText, CardTitleImage, CardTitleDesc);
  }
);

And(
  "the card title is having font family {string} and font size {string} on fact card component",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(CardTitleText, fontFamily, fontSize);
  }
);

And(
  "the card description is having font family {string} and font size {string} on fact card component",
  (fontFamily, fontSize) => {
    cy.CardListDescCSS(CardTitleDesc, fontFamily, fontSize);
  }
);

And("the second card is a fact card", () => {
  cy.factCardSecondTile(threeCarouselTitle2);
});

And("the fact card is not clickable", () => {
  cy.BttnNotClickable(factCardComponentListing);
});

And("the fact card has a title with the description", () => {
  cy.factCardAuthorDescVisible(factCardDesc, factCardAuthor);
});

And(
  "the fact card title is having font family {string} and font size {string} on fact card component",
  (fontFamily, fontSize) => {
    cy.CardListTitleCSS(factCardDesc, fontFamily, fontSize);
  }
);

And(
  "the fact card description is having font family {string} and font size {string} on fact card component",
  (fontFamily, fontSize) => {
    cy.CardListDescCSS(factCardAuthor, fontFamily, fontSize);
  }
);

When("I click on the next arrow", () => {
  cy.factCardNextClick(threeCarouselMore);
});

Then("the next set of three cards in the carousel should be displayed", () => {
  cy.factCardClickVerification(threeCarouselTitle4, threeCarouselTitle3);
});

When("I click on the previous arrow", () => {
  cy.factCardPreviousClick(threeCarouselLess);
});

And("the previous three cards in the carousel should be displayed", () => {
  cy.factCardSize(
    threeCarouselTitle1,
    threeCarouselTitle2,
    threeCarouselTitle3,
    threeCarouselTitle4
  );
});

// PROMOBLOCK
When("I verify that the Promoblock component is present", () => {
  cy.newsLetterPresent(newsLetterComponent);
});

When("I locate the Promoblock component title element", () => {
  cy.newsLetterTitleVisible(newsLetterTitle);
});
And("the title should be of h3 style", () => {
  cy.newsLetterTitleHeading(newsLetterTitle);
});

And("the title font family should be {string}", (fontFamily) => {
  cy.newsLetterTitleFontFamily(newsLetterTitle, fontFamily);
});

And(
  "the pre-title should be visible on component with font type {string} and font size {string}",
  (fontFamily, fontSize) => {
    cy.newsLetterpreTitleFontFamily(newsLetterPreTitle, fontFamily, fontSize);
  }
);

And(
  "the body text font family should be {string} and fontsize is {string}",
  (fontFamily, fontSize) => {
    cy.newsLetterBodyFontFamily(newsLetterBody, fontFamily, fontSize);
  }
);

And(
  "the subscribe text font family should be {string} and fontsize is {string}",
  (fontFamily, fontSize) => {
    cy.newsLetterSubscribeFontFamily(newsLetterSubscribe, fontFamily, fontSize);
  }
);

And("the button gives a 200 repsonse code", () => {
  cy.BttnResponse(newsLetterSubscribeLink);
});

And(
  "the primary button with {string} background color and secondary with {string} border color should be visible",
  (color1, color2) => {
    cy.ComponentsVisible(newsLetterPrimary);
    pds.buttonBackgrndColor(color1, newsLetterPrimary);
    cy.ComponentsVisible(newsLetterSecondary);
    pds.bttnBorderColor(color2, newsLetterSecondary);
  }
);

// CURATED LISTING
When("they view the curated list of blog articles", () => {
  cy.curatedListingVisible(curatedList);
});

Then("there should be {string} articles displayed", (string) => {
  cy.curatedListingSize(curatedList, string);
});

And(
  "the first article should have Image larger than second Image, Category Tag, Title and Description",
  () => {
    cy.curatedFirstVisible(
      curatedCategory,
      curatedTitle,
      curatedDesc,
      curatedImage
    );
  }
);

And(
  "the Category Tag is having font family {string} and font size {string}",
  (fontFamily, fontSize) => {
    cy.curatedCategoryCSS(curatedCategory, fontFamily, fontSize);
  }
);

And(
  "the Title is having font family {string} and font size {string}",
  (fontFamily, fontSize) => {
    cy.curatedTitleCSS(curatedTitle, fontFamily, fontSize);
  }
);

And("the title color should be {string}", (color) => {
  pds.titleColorListing(curatedTitle, color);
});

And(
  "the Description is having font family {string} and font size {string}",
  (fontFamily, fontSize) => {
    cy.curatedDescCSS(curatedDesc, fontFamily, fontSize);
  }
);

And(
  "the next {string} articles should have Image, Category Tag and Title",
  (string) => {
    cy.curated4Visible(curatedList, string);
  }
);

Then("title should be navigated to a page with a 200 status code", () => {
  cy.BttnLinkNotEmpty(curatedTitleLink);
});

Then("there should be 3 featured articles displayed", () => {
  cy.featuredListingVisible(featuredList);
});

And("each featured article should have Image, Title and Description", () => {
  cy.featuredTitleImageDesc(featuredTitle, featuredImage, featuredDesc);
});

And("the title color should be {string} on Featured Post", (color) => {
  pds.titleColorListing(featuredTitle, color);
});

And(
  "the Title is having font family {string} and font size {string} on Featured Post",
  (fontFamily, fontSize) => {
    cy.featuredTitleCSS(featuredTitle, fontFamily, fontSize);
  }
);

And(
  "the Description is having font family {string} and font size {string} on Featured Post",
  (fontFamily, fontSize) => {
    cy.featuredDescCSS(featuredDesc, fontFamily, fontSize);
  }
);

Then("title should be navigated to the page with a 200 status code", () => {
  cy.BttnLinkNotEmpty(featuredTitleLink);
});

And("there should be a CTA link displayed", () => {
  cy.featuredBttnVisible(featuredBttn);
});

And(
  "the CTA text is having font family {string} and font size {string}",
  (fontFamily, fontSize) => {
    cy.bttnfont(featuredBttntxt, fontFamily, fontSize);
  }
);

Then("CTA should be navigated to a page with a 200 status code", () => {
  cy.BttnLinkNotEmpty(featuredBttn);
});

// EBOOK
Then(
  "the title has a font style of {string} and {string}",
  (fontSize, fontFamily) => {
    cy.salesforceTitleCSS(salesforceTitle, fontSize, fontFamily);
  }
);

And("the image is present", () => {
  cy.salesforceImageVisible(salesforceImage);
});

And(
  "the description is present with a font style of {string} and {string} size",
  (fontFamily, fontSize) => {
    cy.salesforceDescriptionVisible(salesforceDesc, fontFamily, fontSize);
  }
);

And("background color of popup should be {string}", (color) => {
  pds.ebookBachgrndColor(backgrndColor, color);
});

And("the {string} button is present", (string) => {
  cy.salesforceBttnVisible(salesforceBttn, string);
});

And(
  "the {string} Button is having font family {string} and font size {string}",
  (string, fontFamily, fontSize) => {
    cy.salesforceBttnCSS(salesforceBttn, string, fontFamily, fontSize);
  }
);

When("the user clicks on the {string} button", (string) => {
  cy.salesforceBttnClick(salesforceBttn, string);
});

Then(
  "a modal pop-up opens with the title, description, image, and button",
  () => {
    cy.salesforceModalTitleDescImageBttn(
      salesforceModalTitle,
      salesforceModalDesc,
      salesforceModalImage,
      salesforceModalBttn
    );
  }
);

And(
  "the title is having font family {string} and font size {string}",
  (fontFamily, fontSize) => {
    cy.salesforceModalTitleCSS(salesforceModalTitle, fontFamily, fontSize);
  }
);

And(
  "the description is having font family {string} and font size {string}",
  (fontFamily, fontSize) => {
    cy.salesforceModalDescCSS(salesforceModalDesc, fontFamily, fontSize);
  }
);

And(
  "the button is having font family {string} and font size {string}",
  (fontFamily, fontSize) => {
    cy.salesforceModalBttnCSS(salesforceModalBttn, fontFamily, fontSize);
  }
);

And(
  "an extra info message in {string} and {string} size is present",
  (fontFamily, fontSize) => {
    cy.salesforceModalExtraInfoVisible(
      salesforceModalDesc,
      2,
      fontFamily,
      fontSize
    );
  }
);

And("an input box is present with the default text {string}", (string) => {
  cy.salesforceModalTextPlaceholder(salesforceModalTextField, string);
});

When("the user provides a proper email id {string}", (string) => {
  cy.salesforceModalTextFieldEmail(
    salesforceModalTextField,
    string,
    salesforceModalBttn
  );
});

Then(
  "a success pop up with message {string} is displayed along with image",
  (string) => {
    cy.salesforceModalSuccesMessage(salesforceModalTitle, string);
  }
);

And(
  "the success message {string} is having font family {string} and font size {string}",
  (string, fontFamily, fontSize) => {
    cy.salesforceModalSuccessMessageCSS(
      salesforceModalTitle,
      successMssg,
      fontFamily,
      fontSize
    );
  }
);

And(
  "the success message {string} is having font family {string} and font size {string}",
  (string, fontFamily, fontSize) => {
    cy.salesforceModalSucessCSS(
      salesforceModalTitle,
      string,
      fontFamily,
      fontSize
    );
  }
);

And(
  "the modal pop-up shows {string} along with social icons and a blog-related post section",
  (string) => {
    cy.salesforceModaltextSocialMediaBlog(
      salesforceModalDesc,
      string,
      salesforceSocialMediaText,
      salesforceSocialMediaIcons,
      socialMediaRealtedPost
    );
  }
);

When("the user enters a wrong email id {string}", (string) => {
  cy.salesforceModalTextFieldEmail(
    salesforceModalTextField,
    string,
    salesforceModalBttn
  );
});

Then(
  "an error message {string} in red color is displayed below the input box",
  (string) => {
    cy.salesforceEmailErrorMssg(salesforceErrorMssg, string);
  }
);

When("the user leaves the input box empty", () => {
  cy.salesforceModalEmptyTextFieldEmail(salesforceModalBttn);
});

Then("an error message {string} is displayed below the input box", (string) => {
  cy.salesforceEmailErrorMssg(salesforceErrorMssg, string);
});

//FAQs COMPONENT
Then("I should see tabs", () => {
  pds.componentVisible(FAQTabs);
});

And("{string} should be highlighted in the tab", (string) => {
  cy.BlogcomponentsVisibleContains(FAQTabsActiveCategories, string);
});

And("I should see FAQ title", () => {
  pds.componentVisible(FAQTabsTitle);
});

And("there should be a description", () => {
  pds.componentVisible(FAQTabsDescription);
});

And("there should be a {string} link", (string) => {
  cy.ComponentsVisibleContains(FAQTabsSecBttns, string);
});

And("the Contact Us link gives a 200 response", () => {
  cy.BttnResponse200(FAQTabsSecBttnsLinks, "1");
});

And("there should be {string} link", (string) => {
  cy.ComponentsVisibleContains(FAQTabsSecBttns, string);
});

And("the Search FAQs link gives a 200 response", () => {
  cy.BttnResponse200(FAQTabsSecBttnsLinks, "0");
});

And("FAQ section links should match tabs in the header", () => {
  cy.correctTabsCheck(faqTabsName, faqNameRight);
});

When("I click on the {string} FAQ link", (string) => {
  cy.clickTabName(faqTabsName, string);
});

Then("I should see {string} in the title", (string) => {
  cy.BlogcomponentsVisibleContains(FAQTabsTitle, string);
});

// And("{string} should be highlighted in the tab", (string) => {
//   cy.BlogcomponentsVisibleContains(FAQTabsActiveCategories, string);
// });

And(
  "each FAQ question in the accordion should not have any characters after the question mark",
  () => {
    cy.verifyAccordionQuestions(faqItem, faqQuestionTitle);
  }
);

And("there is answer section also for each question", () => {
  cy.verifyQuestionAnswer(faqItem);
});

Then("I should verify the pagination below the FAQ section", () => {
  cy.faqpaginationVisible();
});

Then("page should have 25 FAQs", () => {
  cy.faq25Questions(faqItem);
});

Then("I should continue clicking until the next button becomes grey", () => {
  cy.faqPaginationGrey(faqQuestionPaginationNext);
});

// TABS
Then("I check the link text in the table for text comparison", (dataTable) => {
  cy.tabTextLinks(dataTable, tabsText);
});

Then("I should see the tab is underlined with color {string}", (color) => {
  pds.colorunderTab(color);
});

// Footer component

Then("I can see the footer", () => {
  pds.footerNavigation();
});

And("all footer column headings should have color {string}", (color) => {
  pds.footerColumnHeading(color);
});

And("verify all links are giving 200 response", () => {
  cy.BttnResponse(footerColumnHeaderLinks);
});

And("the {string} link should be present", (string) => {
  pds.footerLinksFBGoogle(string);
});

And(
  "{string} link should be navigated to a URL containing {string}",
  (text, currentURL) => {
    pds.footerLinksFBGoogle200(text, currentURL);
  }
);

Then("{string} should be navigated to a page with a 200 response", (string) => {
  pds.footerCopyrightLinks(string);
});

And(
  "the color of the {string} should be {string}, font type should be {string} and font size should be {string}",
  (link, color, fontFamily, fontSize) => {
    pds.footerCopyrightLinksCSS(link, color, fontFamily, fontSize);
  }
);

And("verify that copy right section is present", () => {
  pds.componentVisible(footerCopyrightText);
});

And(
  "verify that font type is {string} and font size is {string}",
  (fontFamily, fontSize) => {
    pds.footerCopyrightTextCSS(fontFamily, fontSize);
  }
);

// BLOG HERO COMPONENT
And("the blog hero section is loaded", () => {
  cy.blogHeroVisible(blogHeroComponent);
});

Then("the blog hero should display the category and title", () => {
  cy.blogCategoryandTitle();
});

And(
  "the blog hero category is having font family {string} and font size {string}",
  (fontfamily, fontsize) => {
    cy.blogCategoryFont(fontfamily, fontsize);
  }
);

And(
  "Title text should be in {string} and Font size should be {string} and Font family should be {string}",
  (heading, fontsize, fontfamily) => {
    cy.blogTitlefontstyle(heading, fontsize, fontfamily);
  }
);

Then(
  "the blog hero should display the Written by text and author name and verify font family, color and size",
  () => {
    cy.blogWrittenAuthorText(blogWrittenByText, blogAuthorName);
  }
);

Then(
  "the blog hero should display the Reviewed by text and reviewer name and verify font family, color and size",
  () => {
    cy.blogWrittenReviewerText(blogReviewedByText, blogReviewerName);
  }
);

Then(
  "the blog hero should display the published date and verify font family, color and size",
  () => {
    cy.blogDates(blogDate);
  }
);

Then(
  "the blog hero should display the updated date and verify font family, color and size",
  () => {
    cy.blogDates(blogDate);
  }
);

And("image is displayed half of the page", () => {
  cy.blogHalfImageVisible(blogHalfImage);
});

And("the Author name should be hyperlinked and check 200 status in URL", () => {
  cy.BttnResponse(blogAuthorName);
});

And(
  "the Reviewer name should be hyperlinked and check 200 status in URL",
  () => {
    cy.BttnResponse(blogReviewerName);
  }
);

And(
  "when no link is authored for Author name and Reviewer name colour of link is blue",
  () => {
    cy.blogAuthorAndReviewerName(blogAuthorName, blogReviewerName);
  }
);

// BLOG LISTING
Then("the blog listing section is displayed", () => {
  cy.ComponentsVisible(blogListingComponent);
});

And("it includes a {string} dropdown", (string) => {
  cy.blogListingSortByVisible(blogListingSortBy, string);
});

And(
  "the Sort By dropdown has options: {string} and {string}",
  (string1, string2) => {
    cy.blogListingSortOptions(string1, string2);
  }
);

And(
  "the default value in the Sort By dropdown is set to {string}",
  (string) => {
    cy.blogListingSortDefaultOptions(string);
  }
);

And("each card item has an image, title, and description", () => {
  cy.blogListingCardImgTitleDesc(
    blogListingImage,
    blogListingTitle,
    blogListingDesc
  );
});

And(
  "the normal card title is having the font family {string} and font size {string} on Blog Listing cards",
  (fontFamily, fontSize) => {
    cy.officeProfileCSS(blogListingCardTitle, fontFamily, fontSize);
  }
);

And(
  "the description is having the font family {string} and font size {string} on Blog Listing cards",
  (fontFamily, fontSize) => {
    cy.officeProfileCSS(blogListingDesc, fontFamily, fontSize);
  }
);

And(
  "clicking on a card item navigates the user to the corresponding blog page and blog page title should match the card title",
  () => {
    cy.blogListingCompareTitle(
      blogListingCardTitle,
      blogListingcardTitleLinks,
      blogHeroTitle
    );
  }
);

And("I select the value {string}", (string) => {
  cy.blogListingSortSelectOptions(string);
});

Then(
  "the list of 18 items on the first page should be sorted alphabetically by the first letter of their titles",
  () => {
    cy.AtoZSort(blogListingCardTitle);
  }
);

Then(
  "the updated date in each blog details page should be less than or equal to the previous card date",
  () => {
    cy.blogListingDateCompareTitle(
      blogListingCardTitle,
      blogListingcardTitleLinks,
      blogPublishedDate
    );
  }
);

Then(
  "the first page {string} in pagination should be highlighted",
  (string) => {
    cy.blogListingfirstPageHighlighted(blogListingactivePageSelected, string);
  }
);

And("both back arrows are greyed out", () => {
  cy.blogListingbackArrowsDisable(
    blogListingfirstBackArrowDisabled,
    blogListingpreviousBackArrowDisabled
  );
});

And(
  "clicking on the second pagination {string} number should display a new set of cards if exists",
  (string) => {
    cy.blogListingsecondPage(
      blogListingpageNumber,
      blogListingCardTitle,
      string,
      blogListingfirstBackArrow,
      blogListingpreviousBackArrow,
      blogListingactivePageSelected
    );
  }
);

When(
  "I click on the first pagination {string} number again then the previous card set should be displayed",
  (string) => {
    cy.blogListingfirstPageVerification(
      blogListingCardTitle,
      blogListingpageNumber,
      string,
      blogListingnextArrow,
      blogListingactivePageSelected,
      blogListinglastArrow,
      blogListingnextArrowDisabled,
      blogListinglastArrowDisabled
    );
  }
);

// ICON LIST COMPONENT
Then("I see the PDS icon list component with Title Only", () => {
  cy.ComponentsVisible(iconListComponentTitleOnly);
});

And("the icon list component should display the title and icon", () => {
  cy.ComponentsVisible(iconListComponentIcon);
  cy.ComponentsVisible(iconListComponentTitle);
});

And(
  "font family {string} and size {string} of title matches with XD",
  (fontFamily, fontSize) => {
    pds.PDSiconCSS(iconListComponentTitle, fontFamily, fontSize);
  }
);

Then("I see the PDS icon list component with Title and Copy", () => {
  cy.ComponentsVisible(iconListComponentTitleCopy);
});

And("the icon list component should display the title, copy, and icon", () => {
  cy.ComponentsVisible(iconListComponentIconTitleCopy);
  cy.ComponentsVisible(iconListComponentTitleTitleCopy);
  cy.ComponentsVisible(iconListComponentDescTitleCopy);
});

And(
  "font family {string} and size {string} of title matches with the XD",
  (fontFamily, fontSize) => {
    pds.PDSiconCSS(iconListComponentTitleTitleCopy, fontFamily, fontSize);
  }
);

And(
  "font family {string} and size {string} of text matches with XD",
  (fontFamily, fontSize) => {
    pds.PDSiconCSS(iconListComponentDescTitleCopy, fontFamily, fontSize);
  }
);

Then(
  "I see the PDS icon list component with Title, Description, and CTA",
  () => {
    cy.ComponentsVisible(iconListComponentTitleCopy);
  }
);

And(
  "the icon list component should display the title, description, CTA, and icon",
  () => {
    cy.ComponentsVisible(iconListComponentIconTitleCTACopy);
    cy.ComponentsVisible(iconListComponentTitleTitleCTACopy);
    cy.ComponentsVisible(iconListComponentDescTitleCTACopy);
    cy.ComponentsVisible(iconListComponentBttnTitleCTACopy);
  }
);

And(
  "font family {string} and size {string} of the title matches with XD",
  (fontFamily, fontSize) => {
    pds.PDSiconCSS(iconListComponentTitleTitleCTACopy, fontFamily, fontSize);
  }
);

And(
  "font family {string} and size {string} of text matches with the XD",
  (fontFamily, fontSize) => {
    pds.PDSiconCSS(iconListComponentDescTitleCTACopy, fontFamily, fontSize);
  }
);

And("CTA button is {string} in colour", (color) => {
  pds.buttonBackgrndColor(color, iconListComponentBttnTitleCTACopy);
});

And("clicking that takes to 200 response page", () => {
  cy.BttnResponse(iconListComponentBttnTitleCTACopy);
});

// CAREER SEARCH COMPONENT
Then("I should see the title, copy, and search fields", () => {
  cy.ComponentsVisible(careerSearchComponent);
  cy.ComponentsVisible(careerSearchTitle);
  cy.ComponentsVisible(careerSearchText);
  cy.ComponentsVisible(careerSearchSearchFields);
});

And("mile dropdown should have {string} as default value", (string) => {
  pds.milesDropdownDefault(string);
});

And(
  "In the mile dropdown field, I should see the options: {string}, {string}, {string} miles",
  (option1, option2, option3) => {
    pds.milesDropdown(option1, option2, option3);
  }
);

Then(
  "I enter {string} as keyword, Location as {string} and Distance as {string}",
  (string1, string2, string3) => {
    pds.enterKeywordCarrerSearch(careerSearchKeyword, string1);
    pds.enterKeywordCarrerSearch(careerSearchCityKeyword, string2);
    pds.selectdropdownValue(string3);
  }
);

And(
  "I click on the search button Then I should see the URL parameters as: {string} apended at end",
  (string) => {
    pds.endURLCheckCareerSearch(string);
  }
);

// CARD COMPONENT NEW
Then("I can see PDS Link Card variation", () => {
  cy.ComponentsVisible(pdsLinkCard);
});

Then(
  "the link card component should display the card image, title, description, and link text",
  () => {
    cy.ComponentsVisible(pdslinkCardTitle);
    cy.ComponentsVisible(pdslinkCardDesc);
    cy.ComponentsVisible(pdslinkCardSubtitle);
    cy.ComponentsVisible(pdslinkCardImage);
  }
);

Then("I can see PDS title card variation", () => {
  cy.ComponentsVisible(pdsTitleCard);
});

Then(
  "the title card component should display the card image, title, and description",
  () => {
    cy.ComponentsVisible(pdsTitleCardTitle);
    cy.ComponentsVisible(pdsTitleCardDesc);
    cy.ComponentsVisible(pdsTitleCardImage);
  }
);

And("I can see PDS 3 column card with carousel", () => {
  cy.ComponentsVisible(pds3ColCarousel);
});

And(
  "the dots at bottom should visually represent the number of cards and current focus",
  () => {
    pds.pdsDotsFocus(pds3ColNextArrow, pds3ColDots);
  }
);

And(
  "the arrows should show and hide when no more cards are available to left and right",
  () => {
    pds.pdsTitleArrowHide(pds3ColNextArrow);
  }
);

And("I can see PDS 4 column card with carousel", () => {
  cy.ComponentsVisible(pds4ColCarousel);
});

And(
  "the dots at the bottom should visually represent the number of cards and current focus",
  () => {
    pds.pdsDotsFocus(pds4ColNextArrow, pds4ColDots);
  }
);

And(
  "arrows should show and hide when no more cards are available to left and right",
  () => {
    pds.pdsTitleArrowHide(pds4ColNextArrow);
  }
);

Then("I can see PDS 3 column cards no carousel", () => {
  pds.pds3ColumnsNoCarousel();
});

Then(
  "the link card component should display the card image, title, description, and link text in 3 column",
  () => {
    cy.ComponentsVisible(pds3ColumnNoCarouselTitle);
    cy.ComponentsVisible(pds3ColumnNoCarouselDesc);
    cy.ComponentsVisible(pds3ColumnNoCarouselSubtitle);
    cy.ComponentsVisible(pds3ColumnNoCarouselImage);
  }
);

Then("clicking anywhere on card takes user to 200 page", () => {
  cy.BttnResponse(pds3ColumnNoCarouselLink);
});

Then("I can see PDS 4 column cards no carousel", () => {
  pds.pds4ColumnsNoCarousel();
});

Then(
  "the link card component should display the card image, title, description, and link text in 4 column",
  () => {
    cy.ComponentsVisible(pds4ColumnNoCarouselTitle);
    cy.ComponentsVisible(pds4ColumnNoCarouselDesc);
    cy.ComponentsVisible(pds4ColumnNoCarouselSubtitle);
    cy.ComponentsVisible(pds4ColumnNoCarouselImage);
  }
);

Then("clicking anywhere on 4 column cards takes user to 200 page", () => {
  cy.BttnResponse(pds4ColumnNoCarouselLink);
});

// HERO COMPONENT
Then("I should see the hero component with Title and CTA", () => {
  pds.heroComponentVisible(heroComponent, 4);
});

Then("I should verify that there is a hero image with Title and CTA", () => {
  pds.heroComponentVisible(heroComponentWDesCTAImage, 4);
});

Then(
  "I should see the title is displayed in Hero Component with Title and CTA",
  () => {
    pds.heroComponentVisible(heroComponentWDesCTATitle, 4);
  }
);

Then("the CTA button is displayed in Hero Component with Title and CTA", () => {
  pds.heroComponentVisible(heroComponentWDesCTABttn, 1);
});

Then(
  "the title is {string} in color And the title font size is {string} and font type is {string} in Hero Component with Title and CTA",
  (titleColor, fontSize, fontfamily) => {
    pds.heroComponentVisible(
      heroComponentWDesCTATitle,
      4,
      titleColor,
      fontSize,
      fontfamily
    );
  }
);

And(
  "the CTA button is {string} in color in Hero Component with Title and CTA",
  (color) => {
    pds.heroComponentBttnCSS(heroComponentWDesCTABttn, 1, color);
  }
);

Then(
  "clicking on the CTA button, I should be navigated to a 200 page in Hero Component with Title and CTA",
  () => {
    cy.BttnResponse(heroComponentWDesCTABttn, 1);
  }
);

Then("I should see the hero component with description and CTA", () => {
  pds.heroComponentVisible(heroComponent, 3);
});

And("I should verify that there is a hero image", () => {
  pds.heroComponentVisible(heroComponentWDesCTAImage, 3);
});

And("I should see the title is displayed", () => {
  pds.heroComponentVisible(heroComponentWDesCTATitle, 3);
});

And("I should see text-align attribute of title is {string}", (string) => {
  pds.heroComponentTitleAlign(heroComponentWDesCTATitle, 3, string);
});

And(
  "the title is {string} in color And the title font size is {string} and font type is {string}",
  (titleColor, fontSize, fontfamily) => {
    pds.heroComponentTitleCSS(
      heroComponentWDesCTATitle,
      3,
      titleColor,
      fontSize,
      fontfamily
    );
  }
);

And("I should see description displayed", () => {
  pds.heroComponentVisible(heroComponentWDesCTADesc, 3);
});

And("I should see description is {string} font", (fontFamily) => {
  pds.heroComponentDescCSS(heroComponentWDesCTADesc, 3, fontFamily);
});

And("the CTA button is displayed", () => {
  pds.heroComponentVisible(heroComponentWDesCTABttn, 0);
});

And("the CTA button is {string} in color", (color) => {
  pds.heroComponentBttnCSS(heroComponentWDesCTABttn, 0, color);
});

Then("clicking on the CTA button, I should be navigated to a 200 page", () => {
  cy.BttnResponse(heroComponentWDesCTABttn, 1);
});

Then("I should see the hero component without CTA", () => {
  pds.heroComponentVisible(heroComponent, 1);
});

And("I should verify that there is a hero image without CTA", () => {
  pds.heroComponentVisible(heroComponentWDesCTAImage, 1);
});

And("I should see the title is displayed in Hero Component without CTA", () => {
  pds.heroComponentVisible(heroComponentWDesCTATitle, 1);
});

And(
  "I should see text-align attribute of title is {string} in Hero Component without CTA",
  (string) => {
    pds.heroComponentTitleAlign(heroComponentWDesCTATitle, 1, string);
  }
);

And(
  "the title is {string} in color And the title font size is {string} and font type is {string} in Hero Component without CTA",
  (titleColor, fontSize, fontfamily) => {
    pds.heroComponentTitleCSS(
      heroComponentWDesCTATitle,
      1,
      titleColor,
      fontSize,
      fontfamily
    );
  }
);

And("I should see description displayed in Hero Component without CTA", () => {
  pds.heroComponentVisible(heroComponentWDesCTADesc, 1);
});

And(
  "I should see description is {string} font in Hero Component without CTA",
  (fontFamily) => {
    pds.heroComponentDescCSS(heroComponentWDesCTADesc, 1, fontFamily);
  }
);

And("the CTA button is not displayed in Hero Component without CTA", () => {
  pds.heroComponentWOCTACTA(heroComponent, 1);
});

Then("I should see the hero component without description and CTA", () => {
  pds.heroComponentVisible(heroComponent, 2);
});

And(
  "I should verify that there is a hero image without description and CTA",
  () => {
    pds.heroComponentVisible(heroComponentWDesCTAImage, 2);
  }
);

And(
  "I should see the title is displayed in Hero Component without description and CTA",
  () => {
    pds.heroComponentVisible(heroComponentWDesCTATitle, 2);
  }
);

And(
  "I should see text-align attribute of title is {string} in Hero Component without description and CTA",
  (string) => {
    pds.heroComponentTitleAlign(heroComponentWDesCTATitle, 2, string);
  }
);

And(
  "the title is {string} in color And the title font size is {string} and font type is {string} in Hero Component without description and CTA",
  (titleColor, fontSize, fontfamily) => {
    pds.heroComponentTitleCSS(
      heroComponentWDesCTATitle,
      2,
      titleColor,
      fontSize,
      fontfamily
    );
  }
);

And(
  "I should not see description displayed in Hero Component without description and CTA",
  () => {
    pds.heroComponentWOCTADesc(heroComponentWDesCTADesc, 2);
  }
);

And(
  "the CTA button is not displayed in Hero Component without description and CTA",
  () => {
    pds.heroComponentWOCTACTA(heroComponent, 2);
  }
);

// QUOTE COMPONENT - LARGE AND SMALL IMAGE VARIATION
And("I view the Quote component with Large Author Image", () => {
  cy.ComponentsVisible(quoteLargeComponent);
});

And("I should see an author image and it should be big", () => {
  cy.ComponentsVisible(quoteLargeImage);
});

And("the quote text should be visible", () => {
  cy.ComponentsVisible(quoteLargeQuoteText);
});

And(
  "the font size of quote text should be {string} and font family should be {string}",
  (fontSize, fontFamily) => {
    pds.quoteComponentCSS(quoteLargeQuoteText, fontSize, fontFamily);
  }
);

And("I should see the author's name", () => {
  cy.ComponentsVisible(quoteLargeAuthor);
});

And(
  "the font size of author's name should be {string} and font family should be {string}",
  (fontSize, fontFamily) => {
    pds.quoteComponentCSS(quoteLargeAuthor, fontSize, fontFamily);
  }
);

And("I view the Quote component with Small Author Image", () => {
  cy.ComponentsVisible(quoteSmallComponent);
});

And("I should see an author image and it should be small", () => {
  cy.ComponentsVisible(quoteSmallImage);
});

And("the quote text should be visible on Small Image Quote Component", () => {
  cy.ComponentsVisible(quoteSmallQuoteText);
});

And(
  "font size of quote text should be {string} and font family should be {string}",
  (fontSize, fontFamily) => {
    pds.quoteComponentCSS(quoteSmallQuoteText, fontSize, fontFamily);
  }
);

And("I should see the author's name on Small Image Quote Component", () => {
  pds.quoteComponentAuthorName(quoteSmallAuthor);
});

And(
  "font size of author's name should be {string} and font family should be {string}",
  (fontSize, fontFamily) => {
    pds.quoteComponentCSS(quoteSmallAuthor, fontSize, fontFamily);
  }
);

And(
  "I should see the author's job description on Small Image Quote Component",
  () => {
    pds.quoteComponentAuthorTitle(quoteSmallAuthorDesc);
  }
);

And(
  "font size of author's name should be {string} and font family should be {string}",
  (fontSize, fontFamily) => {
    pds.quoteComponentCSS(quoteSmallAuthor, fontSize, fontFamily);
  }
);

// PRIMARY NAV
When("I view the primary navigation", () => {
  cy.ComponentsVisible(primaryNav);
});

When("I should see the logo", () => {
  cy.ComponentsVisible(primaryNavLogo);
});

And("clicking on logo should navigate back to homepage", () => {
  pds.logoNavigationCheck(primaryNavLogo);
});

And("I should see the nav dropdowns with values:", (dataTable) => {
  cy.tabTextLinks(dataTable, primaryNavLinks);
});

And("I should see nav dropdown as {string} in colour", (color) => {
  pds.primaryNavArrowColor(color, primaryNavLinks);
});

And("I should see the CTA button labeled {string}", (string) => {
  cy.ComponentsVisibleContains(primaryNavBttn, string);
});

And("JOIN US should redirect to 200 page", () => {
  cy.BttnResponse(primaryNavbttnLink);
});

And("I should see the search icon", () => {
  cy.ComponentsVisible(primaryNavSearch);
});

// PRIMARY NAV SEARCH
And(
  "the user clicks on the magnifying icon in the primary navigation bar",
  () => {
    pds.primaryNavSearchiconClick();
  }
);

And("the user selects a value from the search dropdown {string}", (string) => {
  pds.primaryNavSearchDropdownSelect(string);
});

And("the user enters {string} into the search bar", (string) => {
  pds.primarynacSearchType(string);
});

And("the user clicks the search submit button", () => {
  pds.primaryNacSearchIconClick();
});

And(
  "the user is navigated to the search results page with URL {string}",
  (string) => {
    pds.primaryNavSearchNavigation(string);
  }
);

// SECONDARY NAV
And(
  "clicking on each nav dropdowns opens the secondary navigation menu {string} and there is {string} underline on each navigation link",
  (name, color) => {
    pds.secondaryNavItemsClick(primaryNavLinks, secNavLinksActive, name, color);
  }
);

And(
  "clicking on {string} nav item, secondary nav should have 5 columns, one flyout card",
  (string) => {
    pds.flyoutCardColumns(primaryNavLinks, string, secNavLinksActive);
  }
);

And("all links inside {string} should navigate to 200 pages", (string) => {
  pds.foyoutCardLinkResponse(secNavLinksActive, string);
});

And("flyout card should have image, description and CTA", () => {
  pds.flyoutCardImgDecCTA(secNavLinksActive);
});

And("CTA should have 200 response code", () => {
  pds.flyoutCardBttnResponse(secNavLinksActive);
});

// FEATURED LISTS
Then("the featured list has title", () => {
  cy.ComponentsVisible(featuredListComponent);
});

And("title has the font family {string}", (fontFamily) => {
  pds.featuredListCSS(featureListTitle, fontFamily);
});

And("the user clicks on each link in the featured list", () => {
  cy.ComponentsVisible(featuredListLinks);
});

And("each link navigates to a page that returns a 200 status code", () => {
  cy.BttnResponse(featuredListLinks);
});

And("each link text has the font family {string}", (string) => {
  pds.featuredListCSS(featuredListLinks, string);
});

// INFO CARD COMPONENT
And("the Simple Card has Title", () => {
  cy.ComponentsVisible(infoCardTitle);
});

And(
  "the title has {string} font family and size should be {string}",
  (fontfamily, fontSize) => {
    pds.InfoCardCSS(infoCardTitle, fontfamily, fontSize);
  }
);

And("the Simple Card has Description", () => {
  cy.ComponentsVisible(infoCardDesc);
});

And(
  "the description has {string} font family and size should be {string}",
  (fontfamily, fontSize) => {
    pds.InfoCardCSS(infoCardDesc, fontfamily, fontSize);
  }
);

And("the Simple Card is displayed 3 columns wide", () => {
  pds.infoCardLength(infoCardCardLength, 0);
});

Then("the Image Quote Card has Quote", () => {
  cy.ComponentsVisible(infoCardQuoteTitle);
});

And(
  "the Quote has {string} font family and size should be {string}",
  (fontfamily, fontSize) => {
    pds.InfoCardCSS(infoCardQuoteTitle, fontfamily, fontSize);
  }
);

Then("the Image Quote Card has Quote Author", () => {
  cy.ComponentsVisible(infoCardQuoteAuthor);
});

And(
  "the Quote Author has {string} font family and size should be {string}",
  (fontfamily, fontSize) => {
    pds.InfoCardCSS(infoCardQuoteAuthor, fontfamily, fontSize);
  }
);

Then("the Image Quote Card has Author Image", () => {
  cy.ComponentsVisible(infoCardQuoteImage);
});

Then("the Image Quote Card has Author Title", () => {
  cy.ComponentsVisible(infoCardQuoteAuthorInfo);
});

And(
  "the Author Title has {string} font family and size should be {string}",
  (fontfamily, fontSize) => {
    pds.InfoCardCSS(infoCardQuoteAuthorInfo, fontfamily, fontSize);
  }
);

And("the Image Quote Card is displayed 3 columns wide on desktop", () => {
  pds.infoCardLength(infoCardCardLength, 1);
});

Then("the Text Quote Card has Quote", () => {
  cy.ComponentsVisible(infoCardTextQuote);
});

And(
  "Quote has {string} font family and size should be {string}",
  (fontfamily, fontSize) => {
    pds.InfoCardCSS(infoCardTextQuote, fontfamily, fontSize);
  }
);

Then("the Text Quote Card has Quote Author", () => {
  cy.ComponentsVisible(infoCardTextQuoteAuthor);
});

And(
  "Quote Author has {string} font family and size should be {string}",
  (fontfamily, fontSize) => {
    pds.InfoCardCSS(infoCardTextQuoteAuthor, fontfamily, fontSize);
  }
);

// FOOTER SECTION
Then("I should be able to see the footer", () => {
  cy.ComponentsVisible(footer);
});

And("I should see 3 sections in the footer", () => {
  cy.ComponentsVisible(footerCopyrightLinksSection);
  cy.ComponentsVisible(footerCopyrightSocialSection);
  cy.ComponentsVisible(footerDisclaimerSection);
});

Then(
  "I should see the first section with the following links:",
  (dataTable) => {
    cy.tabTextLinks(dataTable, footerCopyrightLinks);
  }
);

And("each link should navigate to a page with a 200 response Scenario", () => {
  cy.BttnResponse(footerCopyrightLinks);
});

Then("I should see the following social links:", (dataTable) => {
  cy.socialMediaLinks(dataTable, footerCopyrightSocialLinks);
});

And("each social link should navigate to a page with a 200 response", () => {
  cy.BttnResponse(footerCopyrightSocialLinks);
});

And("I should see the copyright text", () => {
  cy.ComponentsVisible(footerDisclaimerSection);
});

And(
  "the font size should be {string} And the font family should be {string}",
  (fontSize, fontFamily) => {
    pds.footerCopyrightCSS(footerDisclaimerSection, fontSize, fontFamily);
  }
);
