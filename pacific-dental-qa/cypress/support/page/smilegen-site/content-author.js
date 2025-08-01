// class Content {
//   // css locators
//   newsLetterComponent = ".cmp-container--newsletter";
//   newsLetterTextfield = "#newsletter-form-email";
//   newsLetterSubscribe = "#newsletter-form-button";
//   newsLetterSuccessMessage = "*[data-success='SUCCESSFULLY SUBMITTED!']";
//   newsLetterFailureMessage =
//     "*[data-email-syntax-error='Please enter a valid email address.']";
//   newsLetterTitle = ".cmp-container--newsletter h3.cmp-title__text";
//   newsLetterBody = ".cmp-container--newsletter .cmp-text p";
//   herosearchDropdown = ".searchbox .cmp-search__custom-dropdown";
//   Search = ".search";
//   searchTextField = ".searchbox .cmp-search__search-input";
//   searchIcon = ".searchbox .cmp-search__search-icon";
//   primaryNavSearchIcon = ".cmp-button--search";
//   heroHomePagetitleText = ".cmp-teaser--home-page .cmp-teaser__title";
//   titleText = ".cmp-teaser--text-only .cmp-teaser__title";
//   landingPagetitleText = ".cmp-teaser--landing-page .cmp-teaser__title";
//   landingPageWTtitleText =
//     ".cmp-teaser--landing-page-white-text .cmp-teaser__title";
//   subTitlewhitecopy =
//     ".cmp-teaser--landing-page-white-text .cmp-teaser__description";
//   subTitleText = ".cmp-teaser--home-page .cmp-teaser__description";
//   subTitleTextwithPara = ".cmp-teaser__description p";
//   subTitleTextwithParaCopy =
//     ".cmp-teaser--text-only .cmp-teaser__description p";
//   subTitleCSS = ".cmp-teaser__title--sanchez";
//   buttonLandingPage = ".cmp-teaser__action-container .cmp-button";
//   buttontextLandingPage = ".cmp-teaser__content .cmp-button__text";
//   backgrndImage = ".cmp-teaser--text-only .cmp-teaser__image";
//   backgrndImageExists = ".cmp-teaser__image .lazyloaded";
//   homepagePlaceholder =
//     "[placeholder='Search dental services, providers and blog']";
//   linksText = "h6.cmp-title__text";
//   bannerCllr = ".landing-page-header";
//   searchDropdown = ".cmp-search__search-input";
//   darktextNavBar = ".cmp-navigation__item-link";
//   findaDentistBttn = ".cmp-button--primary .cmp-button__text";
//   dentistbttnScope = ".cmp-button .cmp-button__text";
//   dentistbttnCSSColor = "[class*='cmp-button--cta'] a.cmp-button";
//   searchIcon = ".cmp-button--search";
//   internalsearchIcon = ".cmp-search__search-icon";
//   searchTextField = ".cmp-search__search-input";
//   inner̥ = ".cmp-search__search-icon";
//   stickynavBar = "[class*='is-sticky']";
//   secondarynavBar = ".cmp-navigation__item-link";
//   flyoutOpen = "[class*='active']";
//   solidNavBar = ".cmp-header--fixed";
//   primaryBttn = ".cmp-button--primary .cmp-button";
//   primaryBttntext =
//     ".cmp-header__nav-actions .cmp-button--primary .cmp-button__text";
//   secondaryBttnDark = ".cmp-button--secondary .cmp-button";
//   secondaryBttntextDark =
//     ".cmp-button--secondary .cmp-button .cmp-button__text";
//   secondaryBttnWhite = ".cmp-button--secondary-white .cmp-button";
//   secondaryBttntextWhite =
//     ".cmp-button--secondary-white .cmp-button .cmp-button__text";
//   underlineBttnDark = ".cmp-button--link .cmp-button";
//   underlineBttntextDark = ".cmp-button--link .cmp-button .cmp-button__text";
//   underlineBttntextWhite =
//     ".cmp-button--text-icon .cmp-button .cmp-button__text";
//   homepagemouthbodyfooter = ".cmp-footer__column:nth-of-type(1)";
//   FooterlinksText = ".cmp-title__text";
//   smilegenlinkFooter =
//     ".cmp-footer__copyright--social div[class='button cmp-button--link'] a span";
//   footerParaOne = ".cmp-footer__disclaimer p:nth-child(1) span";
//   footerParaTwo = ".cmp-footer__disclaimer p:nth-child(2) span";
//   footerParaThree = ".cmp-footer__disclaimer p:nth-child(3) span";
//   textcardwithCTAComponent = ".cmp-list__card";
//   textcardwithCTATitle = ".text-card [id*= teaser] .cmp-teaser__title h4";
//   textcardwithCTADescription =
//     ".text-card [id*= teaser] .cmp-teaser__description p";
//   textcardCTA = ".text-card [id*= teaser] .cmp-button__text";
//   textcardCTAAnchor = ".twocolumn .text-card [id*= teaser] .cmp-button";
//   cardBG = ".text-card [id*= teaser]";
//   textCardWOCTA = ".cmp-list__card";
//   textCardWOCTATitle = ".teaser--card-without-cta .cmp-teaser__title h3";
//   textCardWOCTADescription =
//     ".teaser--card-without-cta .cmp-teaser__description p";
//   textCardWOCTABG =
//     ".teaser--card-without-cta .cmp-teaser[style*='background-color:#FFFFFF']";
//   categoryPagetitleText = ".cmp-teaser--category-page .cmp-teaser__title";
//   factCardComponent = ".yellow-card-teaser--fact-card .cmp-teaser__content";
//   factCardBG = ".yellow-card-teaser--fact-card .cmp-teaser";
//   factCardTitle = ".yellow-card-teaser--fact-card .cmp-teaser__title p";
//   factCardDescription =
//     ".yellow-card-teaser--fact-card .cmp-teaser__subtitle p span";
//   costCard = ".yellowcardlist";
//   costCardTitle = ".yellow-card-teaser--cost-card .cmp-teaser__title h4";
//   costCardDesc = ".yellow-card-teaser--cost-card .cmp-teaser__description p";
//   costCardSubTitle = ".yellow-card-teaser--cost-card .cmp-teaser__subtitle";
//   costCardCTA = ".yellow-card-teaser--cost-card .cmp-button";
//   costCardBG = ".yellowcardlist .cmp-teaser";
//   tagCard = ".yellow-card-teaser--learn-more-card-with-tag";
//   tagCardTitle =
//     ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__title h4";
//   tagCardDesc =
//     ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__description p";
//   tagCardCTAtags =
//     ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__tag-container";
//   teaserImageComponent = ".left_image .cmp-teaser__image";
//   seeMoreLessLink = ".left_image .cmp-button__text";
//   seeMoreTitle = ".half-width-show-more .cmp-teaser__description .title-3";
//   seeMoreDesc = ".half-width-show-more .cmp-teaser__description p:nth-child(3)";
//   seeLessCollapse = ".active-seemore";
//   seeMoreContentStyle = ".half-width-show-more .cmp-teaser__content";
//   leftimageComponent = ".half-width-cta.left_image";
//   leftImageTeaser = ".half-width-cta.left_image .cmp-teaser__image";
//   leftImageTeaserTitle = ".half-width-cta.left_image .cmp-teaser__title";
//   leftImageTeaserDesc = ".half-width-cta.left_image .cmp-teaser__description";
//   leftimageBttn = ".aem-Grid--12 .half-width-cta .cmp-button .cmp-button__text";
//   rightimageComponent = ".aem-Grid--12 .half-width-cta";
//   rightimageVisible =
//     ".aem-Grid--12 .half-width-cta .cmp-teaser__image .cmp-image";
//   rightImageTeaserTitle = ".aem-Grid--12 .half-width-cta .cmp-teaser__title";
//   rightImageTeaserDesc =
//     ".aem-Grid--12 .half-width-cta .cmp-teaser__description";
//   rightimageBttn = ".aem-Grid--12 .half-width-cta .cmp-button";
//   teaserwithoutCTA = ".half-width-cta.left_image";
//   teaserwithoutCTAImage = ".half-width-cta.left_image .cmp-teaser__image";
//   teaserwithoutCTATitle =
//     ".half-width-cta.left_image .cmp-teaser__description .title-3";
//   teaserwithoutCTADesc =
//     ".half-width-cta.left_image .cmp-teaser__description p";
//   teaserwithoutCTAVisible = ".half-width-cta.left_image .cmp-button";
//   staggeredComponent = ".staggered-container";
//   staggeredCardTitle = ".staggeredcard--without-cta .cmp-teaser__title";
//   staggeredmainTitle =
//     ".staggered-container .staggeredcardextension .cmp-teaser__title";
//   staggeredmainDesc =
//     ".staggered-container .staggeredcardextension .cmp-teaser__description p";
//   staggeredmainBttn = ".staggered-container .cmp-button";
//   staggeredCardDesc = ".staggeredcard--with-cta .cmp-teaser__title p span";
//   staggeredBckImageVisible = ".staggered-container .cmp-teaser__image";
//   staggeredcardTitle = ".twocolumn.staggeredcard .cmp-teaser__title";
//   staggeredReviewDesc =
//     ".staggeredcard--with-reviews .cmp-teaser__description p";
//   staggeredReviewstar =
//     ".staggeredcard--with-reviews .cmp-teaser__reviews-container";
//   staggeredReviewAuthor = ".staggeredcard--with-reviews .cmp-teaser__subtitle";
//   staggeredReviewNoImage = ".staggeredcard--with-reviews .cmp-teaser__image";
//   quoteComponent = ".quote-carousel .swiper-slide-active";
//   quoteComponentText = ".quote-carousel .cmp-text";
//   quoteComponentTextParagrapgh = ".quote-carousel .cmp-text p";
//   threeCarouselVisible = ".swiper-pagination-bullet";
//   CarouselVisible = ".swiper-pagination-bullets";
//   CarouselAllQuotes = ".quote-container .cmp-text";
//   firstDefaultCarousel =
//     ".swiper-pagination-clickable span:nth-child(1)[class*='active']";
//   firstQuote = ".swiper-wrapper div.swiper-slide:nth-child(1)";
//   secondQuote = ".swiper-wrapper div.swiper-slide:nth-child(2)";
//   thirdQuote = ".swiper-wrapper div.swiper-slide:nth-child(3)";
//   firstQuoteTextParagrapgh =
//     ".swiper-wrapper div.swiper-slide:nth-child(1) .cmp-text p";
//   secondQuoteTextParagrapgh =
//     ".swiper-wrapper div.swiper-slide:nth-child(2) .cmp-text p";
//   thirdQuoteTextParagrapgh =
//     ".swiper-wrapper div.swiper-slide:nth-child(3) .cmp-text p";
//   secondCarousel = ".swiper-pagination-clickable span:nth-child(2)";
//   thirdCarousel = ".swiper-pagination-clickable span:nth-child(3)";
//   firstQuoteText =
//     ".swiper-wrapper div.swiper-slide:nth-child(1) .cmp-text p span";
//   secondQuoteText =
//     ".swiper-wrapper div.swiper-slide:nth-child(2) .cmp-text p span";
//   thirdQuoteText =
//     ".swiper-wrapper div.swiper-slide:nth-child(3) .cmp-text p span";
//   costEstimatorVisible = ".cmp-tabs.scrolltabs";
//   costEstimatorActiveTab = ".cmp-tabs__tab--active";
//   costCardEstimator = ".cmp-tabs.scrolltabs .cmp-list__card";
//   costCardEstimatorTitle =
//     ".cmp-tabs.scrolltabs .cmp-list__card .cmp-teaser__title p";
//   costCardEstimatorCost =
//     ".cmp-tabs.scrolltabs .cmp-list__card .cmp-teaser__description p";
//   costCardEstimatorSubtext =
//     ".cmp-tabs.scrolltabs .cmp-list__card .cmp-teaser__subtitle span";
//   costEstimatorRightArrow = "#right";
//   costEstimatorLeftArrow = "#left";
//   CostEstimatorTabsAuthored = ".scrolltabs .cmp-tabs__tab";
//   costEstimatorTabs = ".cmp-tabs__tablist .cmp-tabs__tab";
//   galleryComponentVisible = ".gallery-main-wrapper";
//   galleryAllComponentAssets =
//     ".gallery-thumbs-container .swiper-wrapper .swiper-slide";
//   galleryComponentAssetsVisible = ".swiper-slide-visible";
//   galleryComponentAssetsTitleVisible =
//     ".gallery-thumbs-container .swiper-wrapper .swiper-slide .cmp-image__title";
//   galleryComponentAssetsLeftArrowVisible =
//     ".gallery-thumbs-container .swiper-button-prev";
//   galleryComponentAssetsRightArrowVisible =
//     ".gallery-thumbs-container .swiper-button-next";
//   galleryThumbnail =
//     ".gallery-thumbs-container .swiper-wrapper .swiper-slide-active";
//   galleryImage = ".swiper-slide-visible .cmp-image";
//   videoGalleryClass = ".swiper-slide-active .embed .video-container";
//   videoiframe = ".cmp-embed__youtube-iframe";
//   videoPlayButton = ".swiper-slide-visible .play-icon";
//   videoClickButton = ".swiper-slide-active .embed .video-container .play-icon";
//   galleryRightArrow = ".gallery-thumbs-container .swiper-button-next";
//   galleryLeftArrow = ".gallery-thumbs-container .swiper-button-prev";
//   galleryVideoTitleName = ".swiper-slide-visible .cmp-image__title";
//   blogHeroComponent = ".cmp-bloghero";
//   blogWrittenByText = ".cmp-bloghero__description .cmp-bloghero__author";
//   blogAuthorName =
//     ".cmp-bloghero__description .cmp-bloghero__author .cmp-bloghero__author-link";
//   blogReviewedByText = ".cmp-bloghero__description .cmp-bloghero__review";
//   blogReviewerName =
//     ".cmp-bloghero__description .cmp-bloghero__review .cmp-bloghero__review-link";
//   blogDate = ".cmp-bloghero__description .cmp-bloghero__date";
//   blogHalfImage = ".cmp-bloghero__image";
//   modalPopup = ".modal__content";
//   modalPopoupClose = ".modal__close";
//   salesforceTitle = ".cmp-teaser--landing-page .cmp-teaser__title";
//   salesforceImage = ".cmp-teaser--landing-page .cmp-teaser__image";
//   salesforceDesc = ".cmp-teaser--landing-page .cmp-teaser__description";
//   salesforceBttn = ".cmp-teaser--landing-page .cmp-button__text";
//   salesforceModalTitle = ".modal__body .cmp-title__text";
//   salesforceModalDesc = ".modal__body .cmp-text p";
//   salesforceModalImage = ".cmp-teaser__image .cmp-image";
//   salesforceModalBttn = ".modal__body .cmp-button";
//   salesforceModalTextField = ".modal__body .cmp-form-text__text";
//   salesforceSocialMediaText = ".title .cmp-title .cmp-title__text";
//   salesforceSocialMediaIcons =
//     ".image.aem-GridColumn--default--none .cmp-image";
//   socialMediaRealtedPost = ".cmp-curatedlisting";
//   salesforceModalBttn = ".modal__body .cmp-button__text";
//   salesforceErrorMssg = ".cmp-form-text__error";
//   curatedList = ".blog-home .list-item";
//   curatedCategory = ".blog-home .list-item .list-item__category p";
//   curatedTitle = ".blog-home .list-item .list-item__title h3";
//   curatedDesc = ".blog-home .list-item .list-item__description";
//   curatedImage = ".blog-home .list-item picture";
//   featuredList = ".featured-post .list-item";
//   featuredImage = ".featured-post .list-item .list-item__img";
//   featuredTitle = ".featured-post .list-item .list-item__title h3";
//   featuredDesc = ".featured-post .list-item .list-item__description";
//   featuredBttn = ".featured-post a.cmp-button";
//   featuredBttntxt = ".featured-post .cmp-button__text";
//   threeCardList = ".dynamicListing.threecolumn";
//   threeCardMainTitle = ".dynamicListing.threecolumn .cmp-title__text";
//   fourCardList = ".fourcolumn";
//   fourCardMainTitle = ".fourcolumn .cmp-title__text";
//   threeCarouselComponent = ".cmp-dynamiclisting__carousel_head";
//   threeCarouselMainTitle =
//     ".cmp-dynamiclisting__carousel_head .cmp-title__text";
//   threeCarouselMainDesc = ".cmp-dynamiclisting__carousel_head .cmp-text p";
//   threeCarouselMore = ".swiper-button-next span";
//   threeCarouselLess = ".swiper-button-prev span";
//   threeCarouselTitle1 = ".dynamiclisting-carousel .swiper-slide:nth-child(1)";
//   threeCarouselTitle2 = ".dynamiclisting-carousel .swiper-slide:nth-child(2)";
//   threeCarouselTitle3 = ".dynamiclisting-carousel .swiper-slide:nth-child(3)";
//   threeCarouselTitle4 = ".dynamiclisting-carousel .swiper-slide:nth-child(4)";
//   threeCarouselMoreClick = ".swiper-slide-prev";
//   threeCarouselfactCardComponent = ".dynamiclisting-wrapper";
//   factCardTitleComponent = ".dynamiclisting-wrapper .list-item__title";
//   factCardDescComponent = ".dynamiclisting-wrapper .list-item__description";
//   commonConcernCard = ".common-concerns-carousel";
//   commonConcernMainTitle = ".cmp-container--fixed h2.cmp-title__text";
//   commonConcernCardTitle = ".common-concerns-carousel .cmp-teaser__title";
//   commonConcernCardRight = ".common-concerns-carousel .swiper-button-next";
//   commonConcernCardLeft = ".common-concerns-carousel .swiper-button-prev";
//   commonConcernCardImage = ".common-concerns-carousel .cmp-teaser__card-image";
//   commonConcernCardTitle1 =
//     ".common-concerns-carousel .swiper-slide:nth-child(1)";
//   commonConcerCardLink = ".common-concerns-carousel .cmp-teaser__link";
//   commonConcern4Column = ".fourcolumn.cc-card";
//   commonConcern3Column = ".threecolumn.cc-card";
//   CardTitleText =
//     ".dynamiclisting-carousel .swiper-slide .list-item__title h3:nth-child(1)";
//   CardTitleImage =
//     ".dynamiclisting-carousel .swiper-slide .list-item__img:nth-child(1)";
//   CardTitleDesc =
//     ".dynamiclisting-carousel .swiper-slide .list-item__description:nth-child(3)";
//   factCardComponenttile = ".dynamiclisting-carousel .swiper-slide:nth-child(2)";
//   factCardDesc =
//     ".dynamiclisting-carousel .swiper-slide .list-item__title:nth-child(1)";
//   factCardAuthor =
//     ".dynamiclisting-carousel .swiper-slide .list-item__description:nth-child(2)";
//   cardNext = ".swiper-button-next";
//   CardPrevious = ".swiper-button-prev";
//   magazineCarousel = ".magazine-carousel";
//   magazineCarouselTile1 = ".magazine-carousel .swiper-slide:nth-child(1)";
//   magazineCarouselTile2 = ".magazine-carousel .swiper-slide:nth-child(2)";
//   magazineCarouselTile3 = ".magazine-carousel .swiper-slide:nth-child(3)";
//   magazineCarouselTile4 = ".magazine-carousel .swiper-slide:nth-child(4)";
//   magazineCarouselTile5 = ".magazine-carousel .swiper-slide:nth-child(5)";
//   magazineCarouselTiTle = ".magazine-carousel .cmp-teaser__pretitle";
//   magazineCarouselDesc = ".magazine-carousel .cmp-teaser__title";
//   magazineCarouselImage = ".magazine-carousel .cmp-teaser__card-image";
//   magazineCarousel2Column = ".twocolumn.magazine-card";
//   schedulerTitle = ".cmp-newsletter--content h5.cmp-title__text";
//   schedulerSubtitle = ".cmp-newsletter--content h2.cmp-title__text";
//   schedulerDesc = ".cmp-newsletter--content .cmp-text p";
//   schedulerBttn = ".cmp-newsletter--content .cmp-button";
//   schedulerImage = ".promo-block .cmp-image";
//   faqTabsName = ".cmp-tabs__tablist .cmp-tabs__tab";
//   faqNameRight = ".faqs .cmp-faqTab__title p";
//   faqItem = ".cmp-accordion__item";
//   faqQuestionTitle = ".cmp-accordion__title";
//   faqQuestionPaginationNext = ".cmp-faq__pagination .next";
//   providerProfileIcon = ".profile-info .cmp-image";
//   officeProviderPhNum = ".cmp-location__info .cmp-location__info-contactInfo p";
//   officeProviderAddress = ".cmp-location__info .cmp-location__info-address p";
//   blogListingSortBy = ".cmp-bloglisting .form-group label[for='sortby']";
//   blogListingCards = ".cmp-bloglisting__list .list-item";
//   blogListingFactCards = ".cmp-bloglisting__list .fact-card";
//   blogListingCardTitle =
//     ".cmp-bloglisting__list .list-item:not(div[class*='fact-card']) .list-item__title h3";
//   blogListingcardTitleLinks =
//     ".cmp-bloglisting__list .list-item:not(div[class*='fact-card']) .list-item__title a";
//   blogHeroTitle = ".cmp-bloghero .cmp-bloghero__title";
//   blogPublishedDate = ".bloghero .cmp-bloghero__date";
//   blogListingactivePageSelected = ".page.active";
//   blogListingfirstBackArrowDisabled = ".first.disabled";
//   blogListingpreviousBackArrowDisabled = ".prev.disabled";
//   blogListingpageNumber = ".cmp-bloglisting__pagination .page";
//   blogListingfirstBackArrow = ".cmp-bloglisting__pagination .prev";
//   blogListingpreviousBackArrow = ".cmp-bloglisting__pagination .first";
//   blogListinglastArrow = ".cmp-bloglisting__pagination .last";
//   blogListingnextArrow = ".cmp-bloglisting__pagination .next";
//   blogListingnextArrowDisabled = ".cmp-bloglisting__pagination .next.disabled";
//   blogListinglastArrowDisabled = ".cmp-bloglisting__pagination .last.disabled";
//   myChartTitleTextCSS = ".cmp-teaser--chart-portal h1.cmp-teaser__title";
//   mapComponent = ".interactivemap";
//   mapComponentDropdown = "#stateDropdown option";
//   mapHighlightedArea = ".choroplethlocation";
//   mapComponentsDetailsURL = ".cmp_interactiveMap__details .list-item a";
//   myChartTitleTextCSS = ".cmp-teaser--chart-portal h1.cmp-teaser__title";
//   myChartTitleImgCSS = ".cmp-teaser--chart-portal .cmp-image picture img";
//   mapComponentclipPath = ".geo.geo";

//   // Navigation to Page
//   homepagewebsite() {
//     cy.navigateToHomepage();
//   }
//   // Navigation to Page
//   webPageNavigation(url) {
//     cy.navigateToUrl(url);
//   }

//   //verify smilegen header logo
//   smilegenLogoHeader(smilegenlogoHeader) {
//     cy.get(smilegenlogoHeader).click({ force: true });
//   }

//   //verify smilegen header Navigation
//   smilegenLogoHeaderNav() {
//     cy.url().should("include", Cypress.env(Cypress.env("testEnv")));
//     cy.go("back");
//   }

//   smilegenhrefHeader(smilegenHeaderHref, hrefValue) {
//     cy.get(smilegenHeaderHref).should("have.attr", "href", hrefValue);
//   }

//   smilegenTargetHeader(smilegenlinkHeader, targetValue) {
//     cy.get(smilegenlinkHeader).should("have.attr", "target", targetValue);
//   }

//   //verify smilegen header find a dentist CTA
//   findDentistbttn(Dentistbttn) {
//     cy.get(this.dentistbttnScope).contains(Dentistbttn).should("be.visible");
//   }

//   dentistnttnColor() {
//     cy.get(this.dentistbttnCSSColor).should(
//       "have.css",
//       "background-color",
//       "rgb(253, 234, 116)"
//     );
//   }

//   clickDentistbttn(Dentistbttn) {
//     cy.get(this.dentistbttnScope).contains(Dentistbttn).click();
//   }

//   redirectionDentistbttn(dataTable) {
//     var expectedURL = [];
//     expectedURL = dataTable.rawTable.slice(1).flat();
//     cy.url().should("include", expectedURL);
//   }

//   dentisturlRedirection() {
//     cy.url().then(($url) => {
//       var wholeUrl = $url;
//       cy.request(wholeUrl).then((resp) => {
//         expect(resp.status).to.eq(200);
//       });
//     });
//   }

//   //verify header search icon
//   searchIconHeader() {
//     cy.get(this.searchIcon).should("be.visible");
//   }

//   searchPrimNav() {
//     cy.get(this.searchIcon).click();
//   }

//   searchIconDropdown(searchDropPrimNav) {
//     cy.get(searchDropPrimNav).click();
//   }

//   searchDropdownVisible(css, tags) {
//     cy.get(css).select(tags);
//     cy.get("" + css + " option:selected").should("have.text", tags);
//   }

//   searchDropdownValue(css, css2, css3, tags, string) {
//     cy.wait(2000);
//     cy.get(css).select(tags);
//     cy.wait(3000);
//     cy.get(css2).type(string);
//     cy.get(css3).click();
//     cy.url().should("include", string).should("include", tags);
//   }

//   //verify sticky nav
//   scrollbyPixel400() {
//     cy.scrollTo(0, 500);
//   }

//   scrollbyPixel700() {
//     cy.scrollTo(0, 700);
//   }

//   navbarSticky() {
//     cy.get(this.stickynavBar).should("be.visible");
//   }

//   scrolltoTop() {
//     cy.scrollTo("top");
//   }

//   navbarnotSticky() {
//     cy.get(this.stickynavBar).should("not.exist");
//   }

//   secondayBar(navName) {
//     cy.get(this.secondarynavBar).contains(navName).should("be.visible");
//     cy.get(this.secondarynavBar).contains(navName).click();
//     cy.get(this.flyoutOpen).should("be.visible");
//   }

//   secondayBarOptions(col1, col2) {
//     cy.get(this.linksText).contains(col1).should("be.visible");
//     cy.get(this.linksText).contains(col2).should("be.visible");
//   }

//   // Verify secondary navigation links
//   getLinks(dataTable, css, index) {
//     var actualItems = [];
//     var expectedItems = [];

//     cy.get(css).eq(index).find(".cmp-list__item-link").as("getLinks");

//     cy.get("@getLinks")
//       .each(($element, index, list) => {
//         actualItems.push($element.text().trim());
//       })
//       .then(actualItems, () => {
//         actualItems = actualItems.sort();
//         cy.log("Length of actual items : " + actualItems.length);
//         expectedItems = dataTable.rawTable.slice(1).flat().sort();
//         cy.log("Length of expected items : " + expectedItems.length);
//         cy.log("Actual title of tiles : " + actualItems);
//         cy.log("Expected title of tiles : " + expectedItems);
//         expect(actualItems).to.deep.equal(expectedItems);
//       });
//   }

//   // Verify URL response 200
//   // urlResponse(css) {
//   //   cy.get(css).each(($link) => {
//   //     const linkHref = $link.attr("href");
//   //     expect(linkHref, "Link should have an href attribute").to.not.be.empty;
//   //     cy.request(linkHref).then((response) => {
//   //       expect(response.status).to.equal(200);
//   //     });
//   //   });
//   // }

//   urlResponse(css, index) {
//     cy.get(css)
//       .eq(index)
//       .find(".list a")
//       .each(($link) => {
//         const linkHref = $link.attr("href");
//         expect(linkHref, "Link should have an href attribute").to.not.be.empty;
//         cy.request(linkHref).then((response) => {
//           expect(response.status).to.equal(200);
//         });
//       });
//   }

//   transparentCllr() {
//     cy.get(this.bannerCllr).should(
//       "have.css",
//       "background-color",
//       "rgba(0, 0, 0, 0)"
//     );
//   }

//   bttnModalPopup(downloadFreeBook) {
//     cy.get(downloadFreeBook).eq(0).click();
//     cy.get(this.modalPopup).eq(0).should("be.visible");
//     cy.get(this.modalPopoupClose).eq(0).should("be.visible");
//   }

//   bttnBorder(downloadFreeBook) {
//     cy.get(downloadFreeBook).should("be.visible");
//     cy.get(downloadFreeBook).should("have.css", "border-radius", "3px");
//   }

//   smilegenlinkhref(css, hrefValue) {
//     cy.get(css).should("have.attr", "href", hrefValue);
//   }

//   menuColours() {
//     cy.get(this.secondarynavBar)
//       .should("be.visible")
//       .should("have.css", "color", "rgb(255, 255, 255)");
//   }

//   menuFontSize(secondarynavBar) {
//     cy.get(secondarynavBar)
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "font-size", "18px");
//   }

//   mouthBodyImages(mouthbodyImage, index1, index2) {
//     cy.get(mouthbodyImage).eq(index1).should("be.visible");
//     cy.get(mouthbodyImage).eq(index2).should("be.visible");
//   }

//   mouthBodyDescription(mouthbodyDesc, index1, index2) {
//     cy.get(mouthbodyDesc).eq(index1).should("be.visible");
//     cy.get(mouthbodyDesc).eq(index2).should("be.visible");
//   }

//   mouthBodyButton(mouthbodyBttn, mouthBodyPrimaryBttn, index1, index2, index3) {
//     cy.get(mouthbodyBttn).eq(index1).should("be.visible");
//     cy.get(mouthbodyBttn).eq(index2).should("be.visible");
//     cy.get(mouthBodyPrimaryBttn).eq(index3).should("be.visible");
//   }

//   dentalservicesImages(dentalservicesImage) {
//     cy.get(dentalservicesImage).should("be.visible");
//   }

//   dentalservicesDescription(dentalservicesDesc) {
//     cy.get(dentalservicesDesc).should("be.visible");
//   }

//   dentalservicesButton(
//     dentalservicesBttnOne,
//     dentalservicesBttnTwo,
//     index1,
//     index2
//   ) {
//     cy.get(dentalservicesBttnOne).eq(index1).should("be.visible");
//     cy.get(dentalservicesBttnTwo).eq(index2).should("be.visible");
//   }

//   paymentOptionsImages(
//     paymentOptionsImageOne,
//     paymentOptionsImageTwo,
//     index1,
//     index2
//   ) {
//     cy.get(paymentOptionsImageOne).eq(index1).should("be.visible");
//     cy.get(paymentOptionsImageTwo).eq(index2).should("be.visible");
//   }

//   paymentOptionsDescription(
//     paymentOptionsDescOne,
//     paymentOptionsDescTwo,
//     index1,
//     index2
//   ) {
//     cy.get(paymentOptionsDescOne).eq(index1).should("be.visible");
//     cy.get(paymentOptionsDescTwo).eq(index2).should("be.visible");
//   }

//   paymentOptionsButton(
//     paymentOptionsBttnOne,
//     paymentOptionsBttnTwo,
//     paymentOptionsPrimaryBttn,
//     index1,
//     index2,
//     index3
//   ) {
//     cy.get(paymentOptionsBttnOne).eq(index1).should("be.visible");
//     cy.get(paymentOptionsBttnTwo).eq(index2).should("be.visible");
//     cy.get(paymentOptionsPrimaryBttn).eq(index3).should("be.visible");
//   }

//   howwegiveImages(howwegiveImage, index) {
//     cy.get(howwegiveImage).eq(index).should("be.visible");
//   }

//   howwegiveDescription(howwegiveDesc, index) {
//     cy.get(howwegiveDesc).eq(index).should("be.visible");
//   }

//   howwegiveButton(howwegiveBttnOne, howwegiveBttnTwo, index1, index2) {
//     cy.get(howwegiveBttnOne).eq(index1).should("be.visible");
//     cy.get(howwegiveBttnTwo).eq(index2).should("be.visible");
//   }

//   darkTextNavBar() {
//     cy.get(this.darktextNavBar)
//       .should("be.visible")
//       .should("have.css", "color", "rgb(59, 75, 83)");
//   }

//   darkTextBttn() {
//     cy.get(this.findaDentistBttn)
//       .contains("FIND A DENTIST")
//       .should("be.visible");
//   }

//   solidNavBarColor() {
//     cy.get(this.solidNavBar)
//       .should("be.visible")
//       .should("have.css", "background-color", "rgb(255, 255, 255)");
//   }

//   solidNavBarOptions(dataTable) {
//     var actualmenuOptions = [];
//     var expectedmenuOptions = [];

//     cy.get(this.secondarynavBar).as("menuOptions");
//     cy.log("Menu Count : " + "@footerLegalElements".length);

//     cy.get("@menuOptions")
//       .each(($element, index, list) => {
//         actualmenuOptions.push($element.text().trim());
//       })
//       .then(actualmenuOptions, () => {
//         actualmenuOptions = actualmenuOptions.sort();
//         cy.log("Length of actual items : " + actualmenuOptions.length);
//         expectedmenuOptions = dataTable.rawTable.slice(1).flat().sort();
//         cy.log("Length of expected items : " + expectedmenuOptions.length);
//         cy.log("Actual menu options : " + actualmenuOptions);
//         cy.log("Expected menu options : " + expectedmenuOptions);
//         expect(actualmenuOptions).to.deep.equal(expectedmenuOptions);
//       });
//   }

//   //Hero banner variations
//   titleTextColour() {
//     cy.get(this.heroHomePagetitleText)
//       .should("be.visible")
//       .should("have.css", "color", "rgb(255, 255, 255)")
//       .should("have.css", "text-align", "center");

//     cy.get(this.heroHomePagetitleText).then(($el) => {
//       const win = $el[0].ownerDocument.defaultView;
//       const after = win.getComputedStyle($el[0], "after");
//       const bgColor = after.getPropertyValue("color");
//       expect(bgColor).to.eq("rgb(255, 238, 132)");
//     });
//   }

//   subTextCSS() {
//     cy.get(this.subTitleText)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "font-size", "20px");
//   }

//   searchDropdownColor() {
//     cy.get(this.herosearchDropdown).should(
//       "have.css",
//       "background-color",
//       "rgb(253, 234, 116)"
//     );
//   }

//   verifyTitleTextCSS() {
//     cy.get(this.landingPagetitleText)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "font-size", "100px");
//   }

//   verifySubtitleTextCSS() {
//     cy.get(this.subTitleCSS)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "font-size", "130px")
//       .should("have.css", "color", "rgb(45, 70, 110)");
//   }

//   verifyParaTextCSS() {
//     cy.get(this.subTitleTextwithPara)
//       .should("be.visible")
//       .should("have.css", "font-family", "RobotoSerif, sans-serif")
//       .should("have.css", "font-size", "18px")
//       .should("have.css", "line-height", "28px");
//   }

//   verifyBttnRedirection(button) {
//     cy.get(button).eq(0).should("be.visible");
//     cy.get(button).eq(0).invoke("removeAttr", "target").click();
//     cy.url().then(($url) => {
//       var wholeUrl = $url;
//       cy.request(wholeUrl).then((resp) => {
//         expect(resp.status).to.eq(200);
//       });
//     });
//   }

//   verifyBttnTextCSS() {
//     cy.get(this.buttontextLandingPage)
//       .eq(0)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "font-size", "14px")
//       .should("have.css", "text-align", "center");
//   }

//   titleTextCSS(css) {
//     cy.get(css)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "color", "rgb(68, 68, 68)")
//       .should("have.css", "font-size", "100px")
//       .should("have.css", "text-align", "center");
//   }

//   verifyNobackgrndImage() {
//     cy.get(this.backgrndImage).should("not.exist");
//   }

//   verifySubTextImage() {
//     cy.get(this.subTitleText).should("not.exist");
//   }

//   SubTitleTextCSS() {
//     cy.get(this.subTitleTextwithParaCopy)
//       .should("be.visible")
//       .should("have.css", "font-family", "Roboto, sans-serif")
//       .should("have.css", "color", "rgb(68, 68, 68)")
//       .should("have.css", "font-size", "18px")
//       .should("have.css", "text-align", "center");
//   }

//   verifybackgrndImage() {
//     cy.get(this.backgrndImageExists).eq(0).should("be.visible");
//   }

//   titleTextCSSCategory() {
//     cy.get(this.categoryPagetitleText)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "font-size", "100px")
//       .should("have.css", "text-align", "center");
//   }

//   textYellowColor() {
//     cy.get(this.categoryPagetitleText).then(($el) => {
//       const win = $el[0].ownerDocument.defaultView;
//       const after = win.getComputedStyle($el[0], "after");
//       const bgColor = after.getPropertyValue("color");
//       expect(bgColor).to.eq("rgb(255, 238, 132)");
//     });
//   }

//   landingpageWTText() {
//     cy.get(this.landingPageWTtitleText).eq(0).should("be.visible");
//   }

//   landingpageWhite() {
//     cy.get(this.landingPageWTtitleText)
//       .eq(0)
//       .should("have.css", "color", "rgb(255, 255, 255)");
//   }

//   homepagePlaceholders() {
//     cy.get(this.homepagePlaceholder).should("be.visible");
//   }

//   // Title
//   titlefontSize(heading, fontSize, fontFamily) {
//     cy.get(".cmp-title " + heading + "")
//       .should("be.visible")
//       .should("have.css", "font-family", fontFamily)
//       .should("have.css", "font-size", fontSize);
//   }

//   // Button
//   primaryBttnCSS() {
//     cy.get(this.primaryBttn)
//       .should("be.visible")
//       .should("have.css", "background-color", "rgb(253, 234, 116)");

//     cy.get(this.primaryBttntext)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "font-size", "14px")
//       .should("have.css", "color", "rgb(68, 68, 68)");
//   }

//   secondaryBttnDarkCSS() {
//     cy.get(this.secondaryBttnDark)
//       .eq(0)
//       .should("be.visible")
//       .should("have.css", "border", "1px solid rgb(68, 68, 68)");

//     cy.get(this.secondaryBttntextDark)
//       .eq(0)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "font-size", "14px")
//       .should("have.css", "color", "rgb(68, 68, 68)");
//   }

//   secondaryBttnWhiteCSS() {
//     cy.get(this.secondaryBttnWhite)
//       .eq(0)
//       .should("be.visible")
//       .should("have.css", "border", "1px solid rgb(255, 255, 255)");

//     cy.get(this.secondaryBttntextWhite)
//       .eq(0)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "font-size", "14px")
//       .should("have.css", "color", "rgb(255, 255, 255)");
//   }

//   underlineBttnDarkCSS() {
//     cy.get(this.underlineBttnDark)
//       .eq(0)
//       .should("be.visible")
//       .should("have.css", "border-bottom-color", "rgb(255, 205, 71)");

//     cy.get(this.underlineBttntextDark)
//       .eq(0)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "font-size", "18px")
//       .should("have.css", "color", "rgb(68, 68, 68)");
//   }

//   underlineBttnWhiteCSS() {
//     cy.get(this.underlineBttntextWhite)
//       .eq(0)
//       .should("be.visible")
//       .should("have.css", "border-bottom-color", "rgb(255, 205, 71)");

//     cy.get(this.underlineBttntextWhite)
//       .eq(0)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("have.css", "font-size", "18px")
//       .should("have.css", "color", "rgb(255, 255, 255)");
//   }

//   //newsletter component
//   newsLetterPresent() {
//     cy.get(this.newsLetterComponent).should("be.visible");
//   }

//   newsLetterTextbox() {
//     cy.get(this.newsLetterTextfield).should("be.visible");
//   }

//   newsLetterTextboxValid(validEmail) {
//     cy.get(this.newsLetterTextfield).type(validEmail);
//   }
//   newsLetterSubscribeBttn() {
//     cy.get(this.newsLetterSubscribe).should("be.visible");
//     cy.checkAndClickIfPresent(this.newsLetterSubscribe);
//   }

//   newsLetterConfirmation() {
//     cy.get(this.newsLetterSuccessMessage)
//       .contains("SUCCESSFULLY SUBMITTED!")
//       .should("be.visible");
//     cy.wait(3000);
//   }

//   newsLetterConfirmationFontFamily(fontFamily) {
//     cy.get(this.newsLetterSuccessMessage).should(
//       "have.css",
//       "font-family",
//       fontFamily
//     );
//   }

//   newsLetterConfirmationFontColor(fontColor) {
//     cy.get(this.newsLetterSuccessMessage).should(
//       "have.css",
//       "color",
//       fontColor
//     );
//   }
//   newsLetterTextboxInvalid(invalidEmail) {
//     cy.get(this.newsLetterTextfield).type(invalidEmail);
//   }

//   newsLetterFailure() {
//     cy.get(this.newsLetterFailureMessage)
//       .contains("Please enter a valid email address.")
//       .should("be.visible");
//   }

//   newsLetterFailureFontFamily(fontFamily) {
//     cy.get(this.newsLetterFailureMessage)
//       .contains("Please enter a valid email address.")
//       .should("have.css", "font-family", fontFamily);
//   }

//   newsLetterFailureFontColor(fontColor) {
//     cy.get(this.newsLetterFailureMessage)
//       .contains("Please enter a valid email address.")
//       .should("have.css", "color", fontColor);
//   }

//   newsLetterTitleVisible() {
//     cy.get(this.newsLetterTitle).should("be.visible");
//   }
//   newsLetterTitleHeading() {
//     cy.get(this.newsLetterTitle).should("be.visible");
//   }

//   newsLetterTitleFontSize(fontSize) {
//     cy.get(this.newsLetterTitle).should("have.css", "font-size", fontSize);
//   }

//   newsLetterTitleFontFamily(fontFamily) {
//     cy.get(this.newsLetterTitle).should("have.css", "font-family", fontFamily);
//   }

//   newsLetterBodyFontFamily(fontFamily) {
//     cy.get(this.newsLetterBody).should("have.css", "font-family", fontFamily);
//   }

//   newsLetterSubscribeFontFamily(fontFamily) {
//     cy.get(this.newsLetterSubscribe)
//       .contains("Subscribe")
//       .should("have.css", "font-family", fontFamily);
//   }

//   //card component
//   textcardwithCTA() {
//     cy.get(this.textcardwithCTAComponent).should("be.visible");
//   }

//   cardElements() {
//     cy.get(this.textcardwithCTATitle).should("be.visible");
//     cy.get(this.textcardwithCTATitle).should(
//       "have.css",
//       "font-family",
//       "Poppins, sans-serif"
//     );
//     cy.get(this.textcardwithCTADescription).should("be.visible");
//     cy.get(this.textcardwithCTADescription).should(
//       "have.css",
//       "font-family",
//       "Roboto, sans-serif"
//     );
//     cy.get(this.textcardCTA).should("be.visible");
//   }

//   CTAresponse() {
//     cy.get(this.textcardCTAAnchor).each(($link) => {
//       const linkHref = $link.attr("href");
//       cy.log("link is: " + linkHref);
//       expect(linkHref, "Link should have an href attribute").to.not.be.empty;
//       cy.request(linkHref).then((response) => {
//         expect(response.status).to.equal(200);
//       });
//     });
//   }

//   cardBackground() {
//     cy.get(this.cardBG).should(
//       "have.css",
//       "background-color",
//       "rgb(255, 255, 255)"
//     );
//   }

//   cardTextwithoutCTA() {
//     cy.get(this.textCardWOCTA).should("be.visible");
//   }

//   cardTextTitleDesc() {
//     cy.get(this.textCardWOCTATitle).should("be.visible");
//     cy.get(this.textCardWOCTATitle).should(
//       "have.css",
//       "font-family",
//       "Poppins, sans-serif"
//     );
//     cy.get(this.textCardWOCTADescription).should("be.visible");
//     cy.get(this.textcardwithCTADescription).should(
//       "have.css",
//       "font-family",
//       "Roboto, sans-serif"
//     );
//   }
//   cardTextWObackgroundcolor() {
//     cy.get(this.textCardWOCTABG).should(
//       "have.css",
//       "background-color",
//       "rgb(255, 255, 255)"
//     );
//   }
//   factCardsComponent() {
//     cy.get(this.factCardComponent).should("be.visible");
//   }
//   factCardBackground() {
//     cy.get(this.factCardBG)
//       .eq(1)
//       .should("have.css", "background-color", "rgb(255, 238, 132)");
//   }
//   factCardsTitle() {
//     cy.get(this.factCardTitle).should("be.visible");
//     cy.get(this.factCardTitle).should(
//       "have.css",
//       "font-family",
//       "Poppins, sans-serif"
//     );
//   }
//   factCardsDesc() {
//     cy.get(this.factCardDescription).should("be.visible");
//     cy.get(this.factCardDescription).should(
//       "have.css",
//       "font-family",
//       "RobotoSerif, sans-serif"
//     );
//   }
//   factCardsCenter() {
//     cy.get(this.factCardTitle).should("have.css", "text-align", "center");
//     cy.get(this.factCardDescription).should("have.css", "text-align", "center");
//   }

//   costCardComponenet() {
//     cy.get(this.costCard).should("be.visible");
//   }
//   costTitle() {
//     cy.get(this.costCardTitle).should("be.visible");
//     cy.get(this.costCardTitle).should(
//       "have.css",
//       "font-family",
//       "Poppins, sans-serif"
//     );
//   }
//   costCardCost() {
//     cy.get(this.costCardDesc).should("be.visible");
//     cy.get(this.costCardDesc).should(
//       "have.css",
//       "font-family",
//       "Poppins, sans-serif"
//     );
//   }
//   costCardDate() {
//     cy.get(this.costCardSubTitle).should("be.visible");
//     cy.get(this.costCardSubTitle).should(
//       "have.css",
//       "font-family",
//       "Roboto, sans-serif"
//     );
//   }

//   costCardCTABttn() {
//     cy.get(this.costCardCTA).should("be.visible");
//     cy.get(this.costCardCTA).each(($link) => {
//       const linkHref = $link.attr("href");
//       cy.log("link is: " + linkHref);
//       expect(linkHref, "Link should have an href attribute").to.not.be.empty;
//       cy.request(linkHref).then((response) => {
//         expect(response.status).to.equal(200);
//       });
//     });
//   }

//   costCardWhiteColour() {
//     cy.get(this.costCardBG).should(
//       "have.css",
//       "background-color",
//       "rgb(255, 255, 255)"
//     );
//   }

//   tagsCardsComponent() {
//     cy.get(this.tagCard).should("be.visible");
//   }
//   tagsCardsTitle() {
//     cy.get(this.tagCardTitle).should("be.visible");
//     cy.get(this.tagCardTitle).should(
//       "have.css",
//       "font-family",
//       "Poppins, sans-serif"
//     );
//   }
//   tagsCardsDesc() {
//     cy.get(this.tagCardDesc).should("be.visible");

//     cy.get(this.tagCardDesc).should(
//       "have.css",
//       "font-family",
//       "Roboto, sans-serif"
//     );
//   }
//   tagsCardBttn() {
//     cy.get(this.tagCardCTAtags).should("be.visible");
//   }

//   BttnResponse(css) {
//     cy.get(css).each(($link) => {
//       const linkHref = $link.attr("href");
//       cy.log("link is: " + linkHref);
//       expect(linkHref, "Link should have an href attribute").to.not.be.empty;
//       cy.request(linkHref).then((response) => {
//         expect(response.status).to.equal(200);
//       });
//     });
//   }

//   // TEASER COMPONENT
//   teaserhalfImageComponent() {
//     cy.get(this.teaserImageComponent).should("be.visible");
//   }

//   teaserTitleAndSubextVisible() {
//     cy.get(this.seeMoreTitle).should("be.visible");
//     cy.get(this.seeMoreDesc).should("be.visible");
//   }

//   teaserTitleCSS(fontFamily, fontSize) {
//     cy.get(this.seeMoreTitle)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   teaserSubtextCSS(fontFamily, fontSize) {
//     cy.get(this.seeMoreDesc)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   teaserseemoreLink(seeMore) {
//     cy.wait(3000);
//     cy.get(this.seeMoreLessLink).contains(seeMore).should("be.visible");
//   }

//   clickSeeMoreLess(seeMoreLess) {
//     cy.get(this.seeMoreLessLink).contains(seeMoreLess).click();
//   }

//   seeMoreTitleDesc() {
//     cy.get(this.seeMoreTitle).should("be.visible");
//     cy.get(this.seeMoreDesc).should("be.visible");
//     cy.get(this.seeMoreContentStyle).should(
//       "have.attr",
//       "style",
//       "max-height: 100%; height: 100%;"
//     );
//   }

//   teaserseeLessLink(seeLess) {
//     cy.get(this.seeMoreLessLink).contains(seeLess).should("be.visible");
//   }

//   teaserSeeLessCollapse(seeMore) {
//     cy.get(this.seeLessCollapse).should("be.visible");
//     cy.get(this.seeMoreLessLink).contains(seeMore).should("be.visible");
//   }

//   teaserleftimageComponent() {
//     cy.get(this.leftimageComponent).should("be.visible");
//   }

//   teaserleftimageVisible() {
//     cy.get(this.leftImageTeaser).scrollIntoView().should("be.visible");
//   }

//   teaserleftImageTitleDesc() {
//     cy.get(this.leftImageTeaserTitle).should("be.visible");
//     cy.get(this.leftImageTeaserDesc).should("be.visible");
//   }

//   teaserleftImageTitleCSS(fontFamily, fontSize) {
//     cy.get(this.leftImageTeaserTitle)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   teaserleftImageDescCSS(fontFamily, fontSize) {
//     cy.get(this.leftImageTeaserDesc)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   teaserleftimageBttnVisible() {
//     cy.get(this.leftimageBttn).should("be.visible");
//   }

//   teaserleftimageBttnCSS(fontFamily, fontSize) {
//     cy.get(this.leftimageBttn)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   teaserrightimageComponent() {
//     cy.get(this.rightimageComponent).should("be.visible");
//   }

//   teaserrightimageVisible() {
//     cy.get(this.rightimageVisible).scrollIntoView().should("be.visible");
//   }

//   teaserrightImageTitleDesc() {
//     cy.get(this.rightImageTeaserTitle).should("be.visible");
//     cy.get(this.rightImageTeaserDesc).should("be.visible");
//   }

//   teaserrightImageTitleCSS(fontFamily, fontSize) {
//     cy.get(this.rightImageTeaserTitle)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   teaserrightImageDescCSS(fontFamily, fontSize) {
//     cy.get(this.rightImageTeaserDesc)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   teaserrightimageBttnVisible() {
//     cy.get(this.rightimageBttn).should("be.visible");
//   }

//   teaserWithoutCTA() {
//     cy.get(this.teaserwithoutCTA).should("be.visible");
//   }

//   teaserWithoutCTAImage() {
//     cy.get(this.teaserwithoutCTAImage).should("be.visible");
//   }

//   teaserWithoutCTATitle() {
//     cy.get(this.teaserwithoutCTATitle).should("be.visible");
//   }

//   teaserWithoutCTADesc() {
//     cy.get(this.teaserwithoutCTADesc).should("be.visible");
//   }

//   teaserWithoutCTATitleCSS(fontFamily, fontSize) {
//     cy.get(this.teaserwithoutCTATitle)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   teaserWithoutCTADescCSS(fontFamily, fontSize) {
//     cy.get(this.teaserwithoutCTADesc)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   teaserWithoutCTAvisible() {
//     cy.get(this.teaserwithoutCTAVisible).should("not.exist");
//   }

//   // STAGGERED COMPONENT
//   staggeredComponentVisible() {
//     cy.get(this.staggeredComponent).eq(0).should("be.visible");
//   }

//   staggeredMainTitleVisible() {
//     cy.get(this.staggeredmainTitle).eq(0).should("be.visible");
//   }

//   staggeredMainDescVisible() {
//     cy.get(this.staggeredmainDesc).eq(0).should("be.visible");
//   }

//   staggeredMainTitleCSS(fontFamily, fontSize) {
//     cy.get(this.staggeredmainTitle)
//       .eq(0)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   staggeredMainDescCSS(fontFamily, fontSize) {
//     cy.get(this.staggeredmainDesc)
//       .eq(0)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   staggeredMainBttnVisible() {
//     cy.get(this.staggeredmainBttn).should("be.visible");
//   }

//   staggeredMainBttnCSS(fontFamily, fontSize) {
//     cy.get(this.staggeredmainBttn)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   staggeredComponentBckImage() {
//     cy.get(this.staggeredBckImageVisible).should("be.visible");
//   }

//   staggeredcardImageTitleVisible() {
//     cy.get(this.staggeredcardTitle).should("be.visible");
//     cy.get(this.staggeredBckImageVisible).should("be.visible");
//   }

//   staggeredTitleFont(fontFamily, fontSize) {
//     cy.get(this.staggeredCardTitle)
//       .should("be.visible")
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   staggeredDescFont(fontFamily, fontSize) {
//     cy.get(this.staggeredCardDesc)
//       .eq(0)
//       .should("be.visible")
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   staggeredcardTitleFont(fontFamily, fontSize) {
//     cy.get(this.staggeredmainTitle)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   staggeredMainDescFont(fontFamily, fontSize) {
//     cy.get(this.staggeredmainDesc)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   staggeredCardDescFont(fontFamily, fontSize) {
//     cy.get(this.staggeredCardDesc)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   BttnNotClickable(staggeredReviewcard) {
//     cy.get(staggeredReviewcard).then(($btn) => {
//       if ($btn.is(":enabled")) {
//         cy.log("Element is clickable");
//       } else {
//         cy.log("Element is not clickable");
//       }
//     });
//   }

//   staggeredReviewDescReviewAuthor() {
//     cy.get(this.staggeredReviewDesc).should("be.visible");
//     cy.get(this.staggeredReviewstar).should("be.visible");
//     cy.get(this.staggeredReviewAuthor).should("be.visible");
//   }

//   staggeredReviewAuthorCSS(fontFamily, fontSize) {
//     cy.get(this.staggeredReviewAuthor)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   staggeredReviewDescCSS(fontFamily, fontSize) {
//     cy.get(this.staggeredReviewDesc)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   staggeredReviewImage() {
//     cy.get(this.staggeredReviewNoImage).should("not.exist");
//   }

//   //QUOTE COMPONENT
//   quoteComponentVisible() {
//     cy.get(this.quoteComponent).scrollIntoView().should("be.visible");
//   }

//   quoteComponentTextSize() {
//     cy.get(this.quoteComponentText).should("have.length", "1");
//   }

//   quoteComponentAuthorCSS(fontFamily, fontSize) {
//     cy.get(this.quoteComponentTextParagrapgh)
//       .eq(2)
//       .should("have.css", "font-family", fontFamily);
//     cy.get(this.quoteComponentTextParagrapgh)
//       .eq(2)
//       .should("have.css", "font-size", fontSize);
//   }

//   quoteComponentTitleCSS(fontFamily, fontSize) {
//     cy.get(this.quoteComponentTextParagrapgh)
//       .eq(0)
//       .should("have.css", "font-family", fontFamily);
//     cy.get(this.quoteComponentTextParagrapgh)
//       .eq(0)
//       .should("have.css", "font-size", fontSize);
//   }

//   quoteComponentTextCSS(quoteComponentTextFont, fontFamily, fontSize) {
//     cy.get(quoteComponentTextFont).should(
//       "have.css",
//       "font-family",
//       fontFamily
//     );
//     cy.get(quoteComponentTextFont).should("have.css", "font-size", fontSize);
//   }

//   quoteCarouselVisible() {
//     cy.get(this.threeCarouselVisible).should("have.length", 3);
//     cy.get(this.CarouselAllQuotes).should("have.length", 3);
//   }

//   CarouselDefaultCheck() {
//     cy.get(this.firstDefaultCarousel).should("be.visible");
//   }

//   quoteNameTitleAuthor(QuoteTextParagrapgh) {
//     cy.get(QuoteTextParagrapgh).eq(0).should("be.visible");
//     cy.log("Quote Title is present");
//     cy.get(QuoteTextParagrapgh).eq(1).should("be.visible");
//     cy.log("Quote Text is present");
//     cy.get(QuoteTextParagrapgh).eq(2).should("be.visible");
//     cy.log("Quote Author is present");
//   }

//   compareText3Quotes() {
//     cy.get(this.firstQuoteText).then((text) => {
//       let QuoteText1 = text.text();
//       cy.log("First Quote Text is " + QuoteText1);
//       cy.get(this.secondCarousel).should("be.visible").dblclick();

//       cy.get(this.secondQuoteText).then((text2) => {
//         let QuoteText2 = text2.text();
//         cy.log("Second Quote Text is " + QuoteText2);
//         cy.get(this.secondCarousel).should("be.visible").dblclick();

//         cy.get(this.thirdQuoteText).then((text3) => {
//           let QuoteText3 = text3.text();
//           cy.log("Third Quote Text is " + QuoteText3);

//           expect(QuoteText1).to.be.not.equal(QuoteText2);
//           expect(QuoteText2).to.be.not.equal(QuoteText3);
//           expect(QuoteText3).to.be.not.equal(QuoteText1);
//         });
//       });
//     });
//   }

//   CarouselCheck() {
//     cy.get(this.CarouselVisible).should("be.visible");
//   }

//   CarouselClick(Carousel) {
//     cy.get(Carousel).should("be.visible").dblclick();
//   }

//   CarouselDisplay(Carousel) {
//     cy.get(Carousel).should("be.visible");
//   }

//   //CostEstimatorComponent
//   costEstimatorComponent() {
//     cy.get(this.costEstimatorVisible).should("be.visible");
//   }

//   costEstimatorActive(tabname) {
//     let TabName = tabname.trim();
//     cy.get(this.costEstimatorActiveTab).contains(TabName).should("be.visible");
//   }

//   costCardEstimatorComponent() {
//     cy.get(this.costCardEstimator)
//       .first()
//       .children("div")
//       .should("be.visible")
//       .and("have.length", "3");
//   }

//   costEstimatorTabColor(backgroundColor) {
//     cy.get(this.costEstimatorActiveTab)
//       .contains("Routine Cleaning")
//       .should("have.css", "background-color", backgroundColor);
//   }

//   costEstimatorCostTitleSubtext() {
//     cy.get(this.costCardEstimatorTitle).first().should("be.visible");
//     cy.get(this.costCardEstimatorCost).first().should("be.visible");
//     cy.get(this.costCardEstimatorSubtext).first().should("be.visible");

//     cy.get(this.costCardEstimatorTitle).eq(1).should("be.visible");
//     cy.get(this.costCardEstimatorCost).eq(1).should("be.visible");
//     cy.get(this.costCardEstimatorSubtext).eq(1).should("be.visible");

//     cy.get(this.costCardEstimatorTitle).eq(2).should("be.visible");
//     cy.get(this.costCardEstimatorCost).eq(2).should("be.visible");
//     cy.get(this.costCardEstimatorSubtext).eq(2).should("be.visible");
//   }

//   costEstimatorCost(fontFamily, fontSize) {
//     cy.get(this.costCardEstimatorCost)
//       .first()
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//     cy.get(this.costCardEstimatorCost)
//       .eq(1)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//     cy.get(this.costCardEstimatorCost)
//       .eq(2)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   costEstimatorTitle(fontFamily, fontSize) {
//     cy.get(this.costCardEstimatorTitle)
//       .first()
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//     cy.get(this.costCardEstimatorTitle)
//       .eq(1)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//     cy.get(this.costCardEstimatorTitle)
//       .eq(2)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   costEstimatorSubtext(fontFamily, fontSize) {
//     cy.get(this.costCardEstimatorSubtext)
//       .first()
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//     cy.get(this.costCardEstimatorSubtext)
//       .eq(1)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//     cy.get(this.costCardEstimatorSubtext)
//       .eq(2)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   costEstimatorRightArrowClick() {
//     // cy.get(this.costEstimatorRightArrow).should("be.visible").click();

//     cy.get("#right").should("be.visible").trigger("click");
//     // cy.window().then((win) => {
//     // cy.get(this.costEstimatorRightArrow).then(($el) => {
//     //   const win = $el[0].ownerDocument.defaultView;
//     //   const before = win.getComputedStyle($el[0], "::before");
//     // const bgColor = before.click();
//     // cy.log(bgColor);

//     // const bgColor = before.getPropertyValue("border-bottom-color");
//     //   expect(bgColor).to.eq("rgb(255, 219, 4)");

//     // })

//     // })
//   }

//   costEstimatorTabContentCheck(tabname, tabIndex, contectIndex) {
//     let TabName = tabname.trim();
//     cy.get(this.costEstimatorActiveTab).contains(TabName).should("be.visible");

//     cy.get(this.costEstimatorActiveTab)
//       .parent()
//       .parent()
//       .get(this.costCardEstimator)
//       .eq(tabIndex)
//       .children("div")
//       .should("be.visible")
//       .and("have.length", "3");

//     cy.get(this.costCardEstimatorTitle).eq(contectIndex).should("be.visible");
//     cy.get(this.costCardEstimatorCost).eq(contectIndex).should("be.visible");
//     cy.get(this.costCardEstimatorSubtext).eq(contectIndex).should("be.visible");
//   }

//   costEstimatorLeftArrowClick() {
//     cy.get(this.costEstimatorLeftArrow).should("be.visible").click();
//   }

//   costEstimatorRightArrowClickFive() {
//     cy.get(this.costEstimatorRightArrow).should("be.visible");
//     for (let i = 0; i <= 4; i++) {
//       cy.get(this.costEstimatorRightArrow).click();
//       cy.wait(1000);
//     }
//   }

//   costEstimatorLeftArrowClickFive() {
//     cy.get(this.costEstimatorLeftArrow).should("be.visible");
//     for (let i = 0; i <= 4; i++) {
//       cy.get(this.costEstimatorLeftArrow).click();
//       cy.wait(1000);
//     }
//   }

//   TabsAuthoredCostEstimator(tabSize) {
//     cy.get(this.CostEstimatorTabsAuthored)
//       .should("be.visible")
//       .and("have.length", tabSize);
//   }

//   costEstimatorArrowNotVisible() {
//     cy.get(this.costEstimatorRightArrow).should(
//       "have.attr",
//       "style",
//       "display: none;"
//     );
//     cy.get(this.costEstimatorLeftArrow).should(
//       "have.attr",
//       "style",
//       "display: none;"
//     );
//   }

//   TabsAuthoredCostEstimator(tabSize) {
//     cy.get(this.CostEstimatorTabsAuthored)
//       .should("be.visible")
//       .and("have.length", tabSize);
//   }

//   costEstimatorArrowVisible() {
//     cy.get(this.costEstimatorRightArrow).should("be.visible");
//     cy.get(this.costEstimatorLeftArrow).should("be.visible");
//   }

//   costEstimatorTabClick(tabname) {
//     let TabName = tabname.trim();
//     cy.get(this.costEstimatorTabs)
//       .contains(TabName)
//       .should("be.visible")
//       .click();
//   }

//   // GALLERY COMPONENT
//   galleryComponent() {
//     cy.get(this.galleryComponentVisible).should("be.visible");
//   }

//   galleryComponmentAssets() {
//     cy.get(this.galleryComponentAssetsVisible).should("be.visible");
//   }

//   galleryComponentAssetsTitle() {
//     cy.get(this.galleryComponentAssetsTitleVisible).should("be.visible");
//   }

//   galleryComponentAssetsTitleCSS(fontFamily, fontSize) {
//     cy.get(this.galleryComponentAssetsTitleVisible)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   galleryComponentAssetsArrow() {
//     cy.get(this.galleryComponentAssetsLeftArrowVisible).should("be.visible");
//     cy.get(this.galleryComponentAssetsRightArrowVisible).should("be.visible");
//   }

//   galleryImageLarge() {
//     cy.get(this.galleryComponentAssetsVisible).each(($thumbnail, index) => {
//       cy.wrap($thumbnail).click();

//       cy.wait(3000).then(() => {
//         cy.wrap($thumbnail)
//           .find("img")
//           .then(($img) => {
//             const thumbnailSrc = $img.attr("src") || $img.attr("srcset");

//             cy.log("thumbnail: " + thumbnailSrc);

//             cy.log("Checking if thumbnail source is defined.").then(() => {
//               expect(thumbnailSrc, "thumbnail image is broken").to.not.be
//                 .undefined;
//             });

//             cy.get(this.galleryImage)
//               .eq(index)
//               .find("picture img")
//               .invoke("attr", "src")
//               .then((sliderSrc) => {
//                 cy.log("sliderSrc: " + sliderSrc);

//                 var flag = thumbnailSrc.includes(".jpg");
//                 cy.log("Flag is: " + index + " " + flag);
//                 // expect(thumbnailSrc).to.equal(sliderSrc);

//                 cy.get(this.galleryImage)
//                   .eq(index)
//                   .parent()
//                   .then(($parent) => {
//                     const isVideoContainer =
//                       $parent.hasClass("video-container");

//                     if (isVideoContainer) {
//                       cy.log("Video is present in the gallery");

//                       cy.get(`picture:has(img[src="${sliderSrc}"])`)
//                         .eq(0)
//                         .click();
//                       cy.wait(4000);
//                       cy.log("video is playing");
//                     }
//                   });
//               });
//           });
//       });
//     });
//   }

//   galleryRightArrowClick() {
//     cy.get(this.galleryRightArrow).should("be.visible").click();
//   }

//   galleryNextAssetVisible() {
//     cy.get(this.galleryAllComponentAssets).next().should("be.visible");
//   }

//   galleryLeftArrowClick() {
//     cy.get(this.galleryLeftArrow).should("be.visible").click();
//   }

//   galleryPreviousAssetVisible() {
//     cy.get(this.galleryAllComponentAssets).prev().should("be.visible");
//   }

//   // BLOG HERO COMPONENT
//   blogHeroVisible() {
//     cy.get(this.blogHeroComponent).should("be.visible");
//   }

//   blogCategoryandTitle() {
//     cy.get(".cmp-bloghero__category").should("be.visible");
//     cy.get("h1.cmp-bloghero__title").should("be.visible");
//   }
//   blogCategoryFont(fontfamily, fontsize) {
//     cy.get(".cmp-bloghero__category")
//       .should("have.css", "font-family", fontfamily)
//       .should("have.css", "font-size", fontsize);
//   }

//   blogTitlefontstyle(heading, fontsize, fontfamily) {
//     cy.get(heading + ".cmp-bloghero__title")
//       .should("be.visible")
//       .should("have.css", "font-size", fontsize)
//       .should("have.css", "font-family", fontfamily);
//   }

//   blogWrittenAuthorText() {
//     cy.get(this.blogWrittenByText)
//       .should("be.visible")
//       .and("have.css", "font-family", "RobotoSerif, sans-serif")
//       .and("have.css", "color", "rgb(68, 68, 68)")
//       .and("have.css", "font-size", "18px");

//     cy.get(this.blogAuthorName)
//       .should("be.visible")
//       .and("have.css", "font-family", "RobotoSerif, sans-serif")
//       .and("have.css", "color", "rgb(45, 70, 110)")
//       .and("have.css", "font-size", "18px");
//   }

//   blogWrittenReviewerText() {
//     cy.get(this.blogReviewedByText)
//       .should("be.visible")
//       .and("have.css", "font-family", "RobotoSerif, sans-serif")
//       .and("have.css", "color", "rgb(68, 68, 68)")
//       .and("have.css", "font-size", "18px");

//     cy.get(this.blogReviewerName)
//       .should("be.visible")
//       .and("have.css", "font-family", "RobotoSerif, sans-serif")
//       .and("have.css", "color", "rgb(45, 70, 110)")
//       .and("have.css", "font-size", "18px");
//   }

//   blogDates() {
//     cy.get(this.blogDate)
//       .eq(0)
//       .should("be.visible")
//       .and("have.css", "font-family", "RobotoSerif, sans-serif")
//       .and("have.css", "color", "rgb(68, 68, 68)")
//       .and("have.css", "font-size", "18px");

//     cy.get(this.blogDate)
//       .eq(1)
//       .should("be.visible")
//       .and("have.css", "font-family", "RobotoSerif, sans-serif")
//       .and("have.css", "color", "rgb(68, 68, 68)")
//       .and("have.css", "font-size", "18px");
//   }

//   blogHalfImageVisible() {
//     cy.get(this.blogHalfImage).should("be.visible");
//   }

//   blogAuthorAndReviewerName() {
//     cy.get(this.blogAuthorName)
//       .should("be.visible")
//       .and("have.css", "color", "rgb(45, 70, 110)");
//     cy.get(this.blogReviewerName)
//       .should("be.visible")
//       .and("have.css", "color", "rgb(45, 70, 110)");
//   }

//   // SALESFORCE
//   salesforceTitleCSS(fontSize, fontFamily) {
//     cy.get(this.salesforceTitle)
//       .should("be.visible")
//       .and("have.css", "font-size", fontSize)
//       .and("have.css", "font-family", fontFamily);
//   }

//   salesforceImageVisible() {
//     cy.get(this.salesforceImage).should("be.visible");
//   }

//   salesforceDescriptionVisible(fontFamily, fontSize) {
//     cy.get(this.salesforceDesc)
//       .should("be.visible")
//       .and("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   salesforceBttnVisible(string) {
//     cy.get(this.salesforceBttn).contains(string).should("be.visible");
//   }

//   salesforceBttnClick(string) {
//     cy.get(this.salesforceBttn).contains(string).click();
//   }

//   salesforceModalTitleDescImageBttn() {
//     cy.get(this.salesforceModalTitle).should("be.visible");
//     cy.get(this.salesforceModalDesc).eq(0).should("be.visible");
//     cy.get(this.salesforceModalImage).should("be.visible");
//     cy.get(this.salesforceModalBttn).should("be.visible");
//   }

//   salesforceModalExtraInfoVisible(fontFamily, fontSize) {
//     cy.get(this.salesforceModalDesc)
//       .eq(1)
//       .should("be.visible")
//       .and("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   salesforceModalTextPlaceholder(placeholderText) {
//     cy.get(this.salesforceModalTextField)
//       .should("be.visible")
//       .and("have.attr", "placeholder", placeholderText);
//   }

//   salesforceModalTextFieldEmail(Email) {
//     cy.get(this.salesforceModalTextField).type(Email);
//     cy.get(this.salesforceModalBttn).click();
//   }

//   salesforceModalSuccesMessage(successMssg) {
//     cy.get(this.salesforceModalTitle)
//       .contains(successMssg)
//       .scrollIntoView()
//       .should("be.visible");
//   }

//   salesforceModalSuccessMessageCSS(successMssg, fontFamily, fontSize) {
//     cy.get(this.salesforceModalTitle)
//       .contains(successMssg)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   salesforceModaltextSocialMediaBlog(Message) {
//     cy.get(this.salesforceModalDesc).contains(Message).should("be.visible");
//     cy.get(this.salesforceSocialMediaText).should("be.visible");
//     cy.get(this.salesforceSocialMediaIcons)
//       .should("be.visible")
//       .and("have.length", "4");
//     cy.get(this.socialMediaRealtedPost).scrollIntoView().should("be.visible");
//   }

//   salesforceEmailErrorMssg() {
//     cy.get(this.salesforceErrorMssg)
//       .should("be.visible")
//       .and("have.css", "color", "rgb(224, 32, 32)");
//   }

//   salesforceModalEmptyTextFieldEmail() {
//     cy.get(this.salesforceModalBttn).click();
//   }

//   // CURATED LISTING
//   curatedListingVisible() {
//     cy.get(this.curatedList).should("be.visible");
//   }

//   curatedListingSize(string) {
//     cy.get(this.curatedList).should("have.length", string);
//   }

//   curatedFirstVisible() {
//     cy.get(this.curatedCategory).first().should("be.visible");
//     cy.get(this.curatedTitle).first().should("be.visible");
//     cy.get(this.curatedDesc).first().should("be.visible");
//     cy.get(this.curatedImage).first().should("be.visible");

//     cy.get(this.curatedImage)
//       .eq(0)
//       .invoke("css", "width")
//       .then((style1) => {
//         let width1 = style1.split("p");
//         cy.log("First Image width: " + width1[0]);

//         cy.get(this.curatedImage)
//           .eq(1)
//           .invoke("css", "width")
//           .then((style2) => {
//             let width2 = style2.split("p");
//             cy.log("Second Image width: " + width2[0]);

//             expect(+width1[0]).greaterThan(+width2[0]);
//           });
//       });
//   }

//   curatedCategoryCSS(fontFamily, fontSize) {
//     cy.get(this.curatedCategory)
//       .and("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   curatedTitleCSS(fontFamily, fontSize) {
//     cy.get(this.curatedTitle)
//       .and("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   curatedDescCSS(fontFamily, fontSize) {
//     cy.get(this.curatedDesc)
//       .and("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   curated4Visible(string) {
//     cy.get(this.curatedList).nextAll().should("have.length", string);
//   }

//   featuredListingVisible() {
//     cy.get(this.featuredList).should("be.visible");
//   }

//   featuredTitleImageDesc() {
//     cy.get(this.featuredTitle).should("be.visible");
//     cy.get(this.featuredImage).should("be.visible");
//     cy.get(this.featuredDesc).should("be.visible");
//   }

//   featuredTitleCSS(fontFamily, fontSize) {
//     cy.get(this.featuredTitle)
//       .first()
//       .and("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   featuredDescCSS(fontFamily, fontSize) {
//     cy.get(this.featuredDesc)
//       .first()
//       .and("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   featuredBttnVisible() {
//     cy.get(this.featuredBttn).should("be.visible");
//   }

//   bttnfont(fontFamily, fontSize) {
//     cy.get(this.featuredBttntxt)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   // DYNAMIC LISTING
//   threeCardListingVisible() {
//     cy.get(this.threeCardList).first().should("be.visible");
//   }

//   threeCardMainTitleVisible() {
//     cy.get(this.threeCardMainTitle).first().should("be.visible");
//   }

//   threeCardMainTitleCSS(fontFamily, fontSize) {
//     cy.get(this.threeCardMainTitle)
//       .first()
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   CardBttnVisible(CardBttnViewAll, string) {
//     cy.get(CardBttnViewAll).first().contains(string).should("be.visible");
//   }

//   CardBttnCSS(CardBttnViewAll, string, fontFamily, fontSize) {
//     cy.get(CardBttnViewAll)
//       .first()
//       .contains(string)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   CardListSize(CardListing, size) {
//     cy.get(CardListing).should("have.length", size);
//   }

//   CardListTitleImageDesc(CardTitle, CardDesc, CardImage) {
//     cy.get(CardTitle).should("be.visible");
//     cy.get(CardDesc).should("be.visible");
//     cy.get(CardImage).should("be.visible");
//   }

//   CardListTitleCSS(CardTitle, fontFamily, fontSize) {
//     cy.get(CardTitle)
//       .eq(0)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   CardListDescCSS(CardDesc, fontFamily, fontSize) {
//     cy.get(CardDesc)
//       // .eq(0)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   fourCardListingVisible() {
//     cy.get(this.fourCardList).first().should("be.visible");
//   }

//   fourCardListingTitleVisible() {
//     cy.get(this.fourCardMainTitle).first().should("be.visible");
//   }

//   threecarouselListingVisbile() {
//     cy.get(this.threeCarouselComponent).parent().should("be.visible");
//   }

//   threeCarouselListTitleDesc() {
//     cy.get(this.threeCarouselMainTitle).should("be.visible");
//     cy.get(this.threeCarouselMainDesc).should("be.visible");
//   }

//   threeCarouselMoreLinkVisbile(more) {
//     cy.get(this.threeCarouselMore).contains(more).should("be.visible");
//   }

//   threeCarouselMoreLinkclick(more) {
//     cy.get(this.threeCarouselMore).contains(more).click();

//     cy.get(this.threeCarouselMoreClick).should("exist");
//     cy.get(this.threeCarouselTitle4).should(
//       "have.class",
//       "swiper-slide-active"
//     );
//   }

//   threeCarouselLessLinkVisbile(less) {
//     cy.get(this.threeCarouselLess).contains(less).should("be.visible");
//   }

//   threeCarouselLessLinkclick(less) {
//     cy.get(this.threeCarouselLess).contains(less).click();

//     cy.get(this.threeCarouselMoreClick).should("not.exist");
//   }

//   threeCarouselMoreLessFunc(more, less) {
//     for (let i = 0; i <= 20; i++) {
//       cy.get(".swiper-button-next").then((moreButton) => {
//         if (!moreButton.hasClass("swiper-button-disabled")) {
//           cy.wrap(moreButton).click();
//           cy.wait(2000);
//         } else {
//           return;
//         }
//       });
//     }

//     cy.get(this.threeCarouselLess).contains(less).should("be.visible");
//     cy.get(this.threeCarouselMore).contains(more).should("not.be.visible");
//   }

//   threeCarouselCardsSize() {
//     cy.get(this.threeCarouselTitle1).should("be.visible");
//     cy.get(this.threeCarouselTitle2).should("be.visible");
//     cy.get(this.threeCarouselTitle3).should("be.visible");
//     cy.get(this.threeCarouselTitle4).should("not.be.visible");
//   }

//   BttnResponse200(css, index) {
//     cy.get(css)
//       .eq(index)
//       .each(($link) => {
//         const linkHref = $link.attr("href");
//         cy.log("link is: " + linkHref);
//         expect(linkHref, "Link should have an href attribute").to.not.be.empty;
//         cy.request(linkHref).then((response) => {
//           expect(response.status).to.equal(200);
//         });
//       });
//   }

//   factCardVisble() {
//     cy.get(this.threeCarouselfactCardComponent).eq(0).should("be.visible");
//   }

//   factCardTitleDescVisble() {
//     cy.get(this.factCardTitleComponent).eq(0).should("be.visible");
//     cy.get(this.factCardDescComponent).eq(0).should("be.visible");
//   }

//   factCardSize() {
//     cy.get(this.threeCarouselTitle1).eq(0).should("be.visible");
//     cy.get(this.threeCarouselTitle2).eq(0).should("be.visible");
//     cy.get(this.threeCarouselTitle3).eq(0).should("be.visible");
//     cy.get(this.threeCarouselTitle4).eq(0).should("not.be.visible");
//   }

//   factCardTitleImageDesc() {
//     cy.get(this.CardTitleText).eq(0).should("be.visible");
//     cy.get(this.CardTitleImage).eq(0).should("be.visible");
//     cy.get(this.CardTitleDesc).eq(0).should("be.visible");
//   }

//   factCardSecondTile() {
//     cy.get(this.factCardComponenttile).eq(0).should("be.visible");
//   }

//   factCardAuthorDescVisible() {
//     cy.get(this.factCardDesc).eq(0).should("be.visible");
//     cy.get(this.factCardAuthor).eq(0).should("be.visible");
//   }

//   factCardNextClick() {
//     cy.get(this.cardNext).eq(0).should("be.visible");
//     cy.get(this.cardNext).eq(0).click();
//   }

//   factCardClickVerification() {
//     cy.get(this.threeCarouselTitle4)
//       .eq(0)
//       .should("have.class", "swiper-slide-active");
//     cy.get(this.threeCarouselTitle3).eq(0).should("not.be.visible");
//   }

//   factCardPreviousClick() {
//     cy.get(this.CardPrevious).eq(0).should("be.visible");
//     cy.get(this.CardPrevious).eq(0).click();
//   }

//   // COMMON CONCERN CAROUSEL
//   commonConcernCarouselVisbile() {
//     cy.get(this.commonConcernCard).should("be.visible");
//   }

//   commonConcernCarouselTitleVisible() {
//     cy.get(this.commonConcernMainTitle).should("be.visible");
//   }

//   commonConcernCarouselRightVisible() {
//     cy.get(this.commonConcernCardRight).should("be.visible");
//   }

//   commonConcernCarouselTitleImageVisible() {
//     cy.get(this.commonConcernCardImage).should("be.visible");
//     cy.get(this.commonConcernCardTitle).should("be.visible");
//   }

//   commonConcernCarouselYellowUnderlineVisible(commonConcernCardTitle) {
//     cy.get(commonConcernCardTitle).should(
//       "have.css",
//       "border-bottom-color",
//       "rgb(255, 205, 71)"
//     );
//   }

//   commonConcernCardClick() {
//     cy.get(this.commonConcerCardLink).eq(0).click();
//   }

//   commonConcerCarouselRightClick() {
//     cy.get(this.commonConcernCardRight).click();
//   }

//   commonConcerCarouselNextVisible() {
//     cy.get(this.commonConcernCardTitle1).should(
//       "have.class",
//       "swiper-slide-prev"
//     );
//   }

//   commonConcerCarouselPreviousVisible() {
//     cy.get(this.commonConcernCardLeft).click();
//     cy.get(this.commonConcernCardTitle1).should(
//       "have.class",
//       "swiper-slide-active"
//     );
//   }

//   commonConcern4CardVisible() {
//     cy.get(this.commonConcern4Column).should("be.visible");
//   }
//   commonConcern4cardsRow() {
//     cy.get(this.commonConcern4Column).should("have.class", "fourcolumn");
//   }

//   commonConcernCardImageTitle(commonConcernTitle, commonConcernImage) {
//     cy.get(commonConcernTitle).should("be.visible");
//     cy.get(commonConcernImage).should("be.visible");
//   }

//   titleLineColour(commonConcernTitle) {
//     cy.get(commonConcernTitle).then(($el) => {
//       const win = $el[0].ownerDocument.defaultView;
//       const after = win.getComputedStyle($el[0], "after");
//       const bgColor = after.getPropertyValue("border-bottom-color");
//       expect(bgColor).to.eq("rgb(255, 219, 4)");
//     });
//   }

//   clickCommonConcern4Card() {
//     cy.get(this.commonConcern4CardLink).click();
//   }

//   commonConcern3CardVisible() {
//     cy.get(this.commonConcern3Column).should("be.visible");
//   }

//   commonconcern3cardsRow() {
//     cy.get(this.commonConcern3Column).should("have.class", "threecolumn");
//   }

//   // MAGAZINE CAROUSEL
//   magazineCarouselVisible() {
//     cy.get(this.magazineCarousel).should("be.visible");
//   }

//   magazineCarouselRightVisible() {
//     cy.get(this.cardNext).should("be.visible");
//     cy.get(this.magazineCarouselTile1).should("be.visible");
//     cy.get(this.magazineCarouselTile2).should("be.visible");
//     cy.get(this.magazineCarouselTile3).should("be.visible");
//     cy.get(this.magazineCarouselTile4).should("be.visible");
//     cy.get(this.magazineCarouselTile5).should("not.be.visible");
//   }

//   magazineCarouselTitleDescImage(
//     magazineCarouselTiTle,
//     magazineCarouselDesc,
//     magazineCarouselImage
//   ) {
//     cy.get(magazineCarouselTiTle)
//       .should("be.visible")
//       .and("have.css", "color", "rgb(45, 70, 110)");
//     cy.get(magazineCarouselDesc).should("be.visible");
//     cy.get(magazineCarouselImage).should("be.visible");
//   }

//   magazineCarouselRightClick() {
//     cy.get(this.cardNext).click();
//   }

//   magazineCarouselRightDisplay() {
//     cy.get(this.magazineCarouselTile5).should("be.visible");
//   }

//   magazineCarouselLeftVisible() {
//     cy.get(this.CardPrevious).should("be.visible");
//     cy.get(this.CardPrevious).click();
//     cy.get(this.magazineCarouselTile1).should("be.visible");
//     cy.get(this.magazineCarouselTile2).should("be.visible");
//     cy.get(this.magazineCarouselTile3).should("be.visible");
//     cy.get(this.magazineCarouselTile4).should("be.visible");
//     cy.get(this.magazineCarouselTile5).should("not.be.visible");
//   }

//   magazineCarouselRightClickEnd() {
//     cy.get(".swiper-slide")
//       .its("length")
//       .then((size) => {
//         var size = size;
//         cy.wrap(size).as("size");
//       });
//     cy.get("@size").then((size) => {
//       var totalElements = size - 4;
//       for (var i = 0; i < totalElements; i++) {
//         cy.get(this.cardNext).click();
//       }
//     });
//   }

//   magazineCarouselRightLeftArrow() {
//     cy.get(this.cardNext).should("not.be.visible");
//     cy.get(this.CardPrevious).should("be.visible");
//   }

//   magazineCarouselColumnVisible() {
//     cy.get(this.magazineCarousel2Column).should("be.visible");
//   }

//   magazineCarousel2cardsRow(magazineCarousel2Column) {
//     cy.get(magazineCarousel2Column).should("have.class", "twocolumn");
//   }

//   magazineCarousel4cardsRow(magazineCarousel4Column) {
//     cy.get(magazineCarousel4Column).should("have.class", "fourcolumn");
//   }

//   magazineCarouselColumnRightLeftArrow() {
//     cy.get(this.cardNext).should("not.exist");
//     cy.get(this.CardPrevious).should("not.exist");
//   }

//   // APPOINTMENT SCHEDULER
//   schedulerTitleVisible() {
//     cy.get(this.schedulerTitle).should("be.visible");
//   }

//   schedulerCSS(schedulerText, fontFamily, fontSize) {
//     cy.get(schedulerText)
//       .eq(0)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   schedulerSubTitleVisible() {
//     cy.get(this.schedulerSubtitle).should("be.visible");
//   }

//   schedulerDescVisible() {
//     cy.get(this.schedulerDesc).should("be.visible");
//   }

//   schedulerBttnVisible() {
//     cy.get(this.schedulerBttn).should("be.visible");
//   }

//   schedulerImageVisible() {
//     cy.get(this.schedulerImage).should("be.visible");
//   }

//   schedulerHref(string) {
//     cy.get(this.schedulerBttn)
//       .should("have.attr", "href")
//       .and("contain", string);
//   }

//   // OFFICE PROFILE
//   officeProfileCSS(officeProfileText, fontFamily, fontSize) {
//     cy.get(officeProfileText)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   ComponentsVisible(officeProfileStatus) {
//     cy.get(officeProfileStatus).should("be.visible");
//   }

//   ComponentsVisibleContains(officeProfileStatus, string) {
//     cy.get(officeProfileStatus).contains(string).should("be.visible");
//   }

//   officeProfileHref(css, index, string) {
//     cy.get(css).eq(index).should("have.attr", "href").and("contain", string);

//     cy.get(css).each(($link) => {
//       const linkHref = $link.attr("href");
//       cy.log("link is: " + linkHref);
//       expect(linkHref, "Link should have an href attribute").to.not.be.empty;
//       cy.request(linkHref).then((response) => {
//         expect(response.status).to.equal(200);
//       });
//     });
//   }

//   officeProfileBttnVisible(officeProfileBttns, string) {
//     cy.get(officeProfileBttns).contains(string).should("be.visible");
//   }

//   officeProfileBttnCSS(officeProfileBttnText, string, fontFamily, fontSize) {
//     cy.get(officeProfileBttnText)
//       .contains(string)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   officeProfileHref(css, index, string) {
//     cy.get(css).eq(index).should("have.attr", "href").and("contain", string);
//     cy.get(css)
//       .eq(index)
//       .each(($link) => {
//         const linkHref = $link.attr("href");
//         cy.log("link is: " + linkHref);
//         expect(linkHref, "Link should have an href attribute").to.not.be.empty;
//         cy.request(linkHref).then((response) => {
//           expect(response.status).to.equal(200);
//         });
//       });
//   }

//   // FAQs COMPONENT
//   correctTabsCheck() {
//     var tabLinks = [];
//     var faqLinks = [];

//     cy.get(this.faqTabsName).as("tabLink");
//     cy.get("@tabLink")
//       .each(($element, index, list) => {
//         tabLinks.push($element.text().trim());
//       })
//       .then(tabLinks, () => {
//         tabLinks = tabLinks.sort();
//         let shiftedName = tabLinks.shift();
//         cy.log("Length of tab links : " + tabLinks.length);
//         cy.log("Length of tab links name : " + tabLinks);

//         cy.get(this.faqNameRight).as("faqLink");
//         cy.get("@faqLink")
//           .each(($element, index, list) => {
//             faqLinks.push($element.text().trim());
//           })
//           .then(() => {
//             faqLinks = faqLinks.sort();
//             cy.log("Length of faq links : " + faqLinks.length);
//             cy.log("Length of faq links name : " + faqLinks);
//           })
//           .then(() => {
//             expect(tabLinks).to.deep.equal(faqLinks);
//           });
//       });
//   }

//   clickTabName(tabName) {
//     cy.get(this.faqTabsName).contains(tabName).should("be.visible").click();
//   }

//   verifyAccordionQuestions() {
//     cy.get(this.faqItem).each(($accordionItem) => {
//       cy.wrap($accordionItem)
//         .find(this.faqQuestionTitle)
//         .invoke("text")
//         .then((questionText) => {
//           const questionParts = questionText.split("?");
//           const hasExtraCharacters =
//             questionParts.length > 1 && questionParts[1].trim() !== "";
//           cy.log("1. " + questionParts.length);
//           cy.log("2. " + questionParts[0]);
//           cy.log("3. " + questionParts[1]);
//           cy.log("4. " + questionParts[2]);
//           expect(hasExtraCharacters).to.be.false;
//         });
//     });
//   }

//   verifyQuestionAnswer() {
//     cy.get(this.faqItem).each(($accordionItem, index, list) => {
//       cy.wrap($accordionItem).click();
//       cy.wrap($accordionItem)
//         .find(".cmp-accordion__content")
//         .should("be.visible");
//       cy.wrap($accordionItem).click();
//     });
//   }

//   faqpaginationVisible() {
//     cy.get(".first").parent().should("be.visible");
//   }

//   faq25Questions() {
//     cy.get(this.faqItem).should("have.length", "25");
//   }

//   faqPaginationGrey() {
//     cy.get(".cmp-faq__pagination .page")
//       .its("length")
//       .then((size) => {
//         var size = size;
//         cy.wrap(size).as("size");

//         cy.get("@size").then((size) => {
//           var totalPages = size;
//           cy.log("Total pages are: " + totalPages);

//           for (let i = 0; i < totalPages - 1; i++) {
//             cy.get(this.faqQuestionPaginationNext).then((nextButton) => {
//               if (nextButton.length > 0 && !nextButton.hasClass("disabled")) {
//                 cy.wrap(nextButton).click();
//                 cy.wait(2000);
//               }
//             });
//           }
//           cy.get(".next.disabled").should("be.visible");
//         });
//       });
//   }

//   //office profile - overview and information
//   officeprofileScheduleandInsuranceList(css1, css2, dataTable, fontfamily) {
//     var actualItems = [];
//     var expectedItems = [];

//     cy.get(css1).as("businesshours");
//     cy.get("@businesshours")
//       .scrollIntoView()
//       .find(css2)
//       .should("have.css", "font-family", fontfamily)
//       .each(($element, index, list) => {
//         actualItems.push($element.text().trim());
//       })
//       .then(actualItems, () => {
//         actualItems = actualItems.sort();
//         cy.log("Length of actual items : " + actualItems.length);
//         expectedItems = dataTable.rawTable.slice(1).flat().sort();
//         cy.log("Length of expected items : " + expectedItems.length);
//         cy.log("Actual title of tiles : " + actualItems);
//         cy.log("Expected title of tiles : " + expectedItems);
//         expect(actualItems).to.deep.equal(expectedItems);
//       });
//   }

//   officeProvderPhNumVisible(phone, fax) {
//     cy.get(this.officeProviderPhNum).contains(phone).should("be.visible");
//     cy.get(this.officeProviderPhNum).contains(fax).should("be.visible");
//   }

//   officeProvderAddressVisible(address1, address2, address3) {
//     cy.get(this.officeProviderAddress).contains(address1).should("be.visible");
//     cy.get(this.officeProviderAddress).contains(address2).should("be.visible");
//     cy.get(this.officeProviderAddress).contains(address3).should("be.visible");
//   }

//   // Office Profile page - Services and Team Section
//   iconsandlinks() {
//     cy.get(".dental-services .cmp-image .icon").should("be.visible");
//     cy.get(".dental-services .cmp-button--link a").should("have.attr", "href");
//   }

//   underlineBttn(officeProfileBttnTextUnderline) {
//     cy.get(officeProfileBttnTextUnderline).should(
//       "have.css",
//       "border-bottom-color",
//       "rgb(255, 205, 71)"
//     );
//   }

//   cardcount() {
//     cy.get(".dental-services .list-item[style='display: block;']").should(
//       "have.length",
//       "10"
//     );
//   }

//   seeMoreBttn() {
//     cy.get(".cmp-dentalservices__load-button .cmp-button__text").should(
//       "be.visible"
//     );
//     cy.get(".cmp-dentalservices__load-button .cmp-button__text").click();
//   }
//   showAllServices() {
//     cy.get(".dental-services .list-item[style='display: block;']").should(
//       "be.visible"
//     );
//     cy.get(".dental-services .list-item[style='display: none;']").should(
//       "not.exist"
//     );
//   }

//   seemoreNotVisible() {
//     cy.get(".cmp-dentalservices__load-button .cmp-button__text").should(
//       "not.be.visible"
//     );
//   }

//   teamProfileCards() {
//     cy.get(".list-item .cmp-stafflisting__content").should("be.visible");
//   }

//   teamProfileCardsImg_DocName() {
//     cy.get(".staff-listing img").should("be.visible");
//     cy.get(".staff-listing a .cmp-button__text").should("be.visible");
//   }

//   urlString(string) {
//     cy.get(".staff-listing a[href*='" + string + "']").should("be.visible");
//   }
//   teamCardsProfessionText() {
//     cy.get(".staff-listing .cmp-stafflisting__content p:nth-of-type(1)").should(
//       "be.visible"
//     );
//   }

//   docNameInUrl() {
//     cy.get(".staff-listing a")
//       .its("length")
//       .then((size) => {
//         var size = size;
//         cy.wrap(size).as("size");

//         cy.get("@size").then((size) => {
//           var totalLinks = size;
//           cy.log("Total links are: " + totalLinks);

//           cy.get(".staff-listing a").then(($link) => {
//             let docName;
//             for (let i = 0; i < totalLinks; i++) {
//               cy.get(".staff-listing a .cmp-button__text")
//                 .eq(i)
//                 .then(($element) => {
//                   docName = $element
//                     .text()
//                     .replace(" ", "-")
//                     .replace(", ", "-")
//                     .toLowerCase();
//                   cy.log("1. " + docName);
//                 });

//               cy.get(".staff-listing a")
//                 .eq(i)
//                 .then(($link) => {
//                   let linkHref = $link.attr("href");
//                   cy.log("2. " + linkHref);
//                   expect(linkHref).contain(docName);
//                 });
//             }
//           });
//         });
//       });
//   }

//   teamCardsSecondText() {
//     cy.get(".staff-listing .cmp-stafflisting__content p:nth-of-type(2)").should(
//       "be.visible"
//     );
//   }

//   // PROVIDER PROFILE:information section
//   providerprofileIconText(index, providerProfileTitle, title) {
//     cy.get(this.providerProfileIcon).eq(index).should("be.visible");
//     cy.get(providerProfileTitle).contains(title).should("be.visible");
//   }

//   // BLOG LISTING
//   blogListingSortByVisible(sortBy) {
//     cy.get(this.blogListingSortBy).contains(sortBy).should("be.visible");
//   }

//   blogListingSortOptions(option1, option2, option3) {
//     cy.get("select#blog-sortby option").contains(option1).should("exist");
//     cy.get("select#blog-sortby option").contains(option2).should("exist");
//     cy.get("select#blog-sortby option").contains(option3).should("exist");
//   }

//   blogListingSortDefaultOptions(string) {
//     cy.get("select#blog-sortby option:selected")
//       .invoke("text")
//       .should("contain", string);
//   }

//   blogListingCardsSize() {
//     cy.get(this.blogListingCards).should("have.length", "18").and("be.visible");
//     cy.get(this.blogListingFactCards).should("be.visible");
//   }

//   blogListingCardImgTitleDesc(cardTiTle, cardDesc, cardImage) {
//     cy.get(cardTiTle).should("be.visible");
//     cy.get(cardDesc).should("be.visible");
//     cy.get(cardImage).should("be.visible");
//   }

//   blogListingCompareTitle() {
//     let titleLinks = [];
//     cy.get(this.blogListingCardTitle)
//       .its("length")
//       .then((size) => {
//         var size = size;
//         cy.wrap(size).as("size");

//         cy.get("@size").then((size) => {
//           var totalTitle = size;
//           cy.log("Total Titles are: " + totalTitle);

//           cy.get(this.blogListingcardTitleLinks).each(($link) => {
//             const linkHref = $link.attr("href");
//             cy.log("link is: " + linkHref);
//             titleLinks.push(Cypress.env(Cypress.env("testEnv")) + linkHref);
//           });

//           cy.get(this.blogListingCardTitle).then((Title1) => {
//             for (let i = 0; i < totalTitle; i++) {
//               let CardTitle = Title1.eq(i).text();
//               cy.visit(titleLinks[i]);

//               cy.get(this.blogHeroTitle)
//                 .then((title2) => {
//                   let BlogTitle = title2.text();
//                   cy.log("Blog Title is: " + BlogTitle);

//                   expect(CardTitle).to.be.equal(BlogTitle);
//                 })
//                 .then(() => {
//                   cy.go(-1);
//                 });
//             }
//           });
//         });
//       });
//   }

//   blogListingSortSelectOptions(string) {
//     cy.get("select#blog-sortby").select(string);
//     cy.wait(1000);
//   }

//   AtoZSort(css) {
//     let cardTitleArray = [];
//     let oldTitleArray = [];
//     let newsortedArr = [];
//     cy.get(css)
//       .each((titles, index, list) => {
//         oldTitleArray.push(titles.text());
//         cardTitleArray.push(titles.text());
//         newsortedArr = cardTitleArray.sort();
//       })
//       .then(() => {
//         cy.get(css).each((titles, i, list) => {
//           expect(oldTitleArray[i]).to.eql(newsortedArr[i]);
//         });
//         cy.log("1. " + oldTitleArray);
//         cy.log("2. " + cardTitleArray.sort());
//       });
//   }

//   blogListingDateCompareTitle() {
//     let titleLinks = [];
//     let Dates = [];
//     let newDates = [];
//     let sortedDatesArr = [];
//     cy.get(this.blogListingCardTitle)
//       .its("length")
//       .then((size) => {
//         var size = size;
//         cy.wrap(size).as("size");

//         cy.get("@size").then((size) => {
//           var totalTitle = size;
//           cy.log("Total Titles are: " + totalTitle);

//           cy.get(this.blogListingcardTitleLinks).each(($link) => {
//             const linkHref = $link.attr("href");
//             cy.log("link is: " + linkHref);
//             titleLinks.push(Cypress.env(Cypress.env("testEnv")) + linkHref);
//           });

//           cy.get(this.blogListingCardTitle)
//             .then((Title) => {
//               for (let i = 0; i < totalTitle; i++) {
//                 cy.visit(titleLinks[i]);

//                 cy.get(this.blogPublishedDate)
//                   .eq(0)
//                   .then((date) => {
//                     let publishedDate = date.text();
//                     let newPublishedDate = publishedDate.split(": ");
//                     cy.log("Published Date is: " + newPublishedDate[1]);
//                     Dates.push(newPublishedDate[1]);
//                     newDates = Dates;
//                   })
//                   .then(() => {
//                     cy.go(-1);
//                   });
//               }
//             })
//             .then(() => {
//               sortedDatesArr = Dates.sort(function (a, b) {
//                 let dateA = new Date(a);
//                 let dateB = new Date(b);
//                 return dateB - dateA;
//               });
//               expect(sortedDatesArr).to.be.equal(newDates);
//             })
//             .then(() => {
//               cy.log("1. " + sortedDatesArr);
//               cy.log("2. " + newDates);
//             });
//         });
//       });
//   }

//   blogListingfirstPageHighlighted(string) {
//     cy.get(this.blogListingactivePageSelected)
//       .contains(string)
//       .should("be.visible")
//       .and("have.css", "border-bottom-color", "rgb(255, 205, 71)");
//   }

//   blogListingbackArrowsDisable() {
//     cy.get(this.blogListingfirstBackArrowDisabled).should("be.visible");
//     cy.get(this.blogListingpreviousBackArrowDisabled).should("be.visible");
//   }

//   blogListingsecondPage(string) {
//     let CardTitle1;
//     cy.get(this.blogListingCardTitle)
//       .eq(0)
//       .then((Title1) => {
//         CardTitle1 = Title1.text();
//         cy.log("First page card title is: " + CardTitle1);
//       })
//       .then(() => {
//         cy.get(this.blogListingpageNumber)
//           .contains(string)
//           .should("be.visible")
//           .click();
//       })
//       .then(() => {
//         cy.wait(1000);
//         cy.get(this.blogListingCardTitle)
//           .eq(0)
//           .then((Title2) => {
//             let CardTitle2 = Title2.text();
//             cy.log("Second page card title is: " + CardTitle2);
//             expect(CardTitle1).to.not.equal(CardTitle2);
//           });
//       });
//   }

//   blogListingfirstArrowsDisplay() {
//     cy.get(this.blogListingfirstBackArrow).should(
//       "not.have.class",
//       ".first.disabled"
//     );
//     cy.get(this.blogListingpreviousBackArrow).should(
//       "not.have.class",
//       ".prev.disabled"
//     );
//   }

//   blogListingfirstPageVerification(string) {
//     let CardTitlePage1 = [];
//     let CardTitlePage2 = [];
//     cy.get(this.blogListingCardTitle)
//       .each(($element, index, list) => {
//         CardTitlePage2.push($element.text().trim());
//       })
//       .then(() => {
//         cy.wait(1000);
//         cy.get(this.blogListingpageNumber)
//           .contains(string)
//           .should("be.visible")
//           .click();
//       })
//       .then(() => {
//         cy.get(this.blogListingCardTitle).each(($element, index, list) => {
//           CardTitlePage1.push($element.text().trim());
//         });
//       })
//       .then(() => {
//         expect(CardTitlePage1).to.not.equal(CardTitlePage2);
//       });
//   }

//   blogListingnextArrowClick() {
//     cy.wait(1000);
//     cy.get(this.blogListingnextArrow).click();
//   }

//   blogListinglastArrowClick() {
//     cy.wait(1000);
//     cy.get(this.blogListinglastArrow).click();
//   }

//   blogListinglastArrowsDisplay() {
//     cy.wait(1000);
//     cy.get(this.blogListingnextArrowDisabled).should("be.visible");
//     cy.get(this.blogListinglastArrowDisabled).should("be.visible");
//   }

//   blogListinglastActive() {
//     cy.get(this.blogListingnextArrowDisabled)
//       .prev()
//       .should("have.css", "border-bottom-color", "rgb(255, 205, 71)");
//   }

//   //MAP COMPONENT
//   mapDropdownVisible() {
//     cy.get(this.mapComponent).should("be.visible");
//     cy.get(this.mapComponentDropdown).should("be.visible");
//   }

//   mapsSelectValue(country) {
//     cy.get(".cmp_interactiveMap__state-dropdown select").select(country);
//   }

//   mapCountryVisible() {
//     cy.get(this.mapHighlightedArea).should("be.visible");
//     cy.get(this.mapComponentclipPath).should("have.attr", "clip-path");
//   }

//   urlStringCheck(string) {
//     cy.get(
//       ".cmp_interactiveMap__details .list-item a[href*='" + string + "']"
//     ).should("be.visible");
//   }

//   TextFFamily_Size(text, fontFamily, fontSize) {
//     cy.get(text)
//       .should("have.css", "font-family", fontFamily)
//       .and("have.css", "font-size", fontSize);
//   }

//   getInsuranceList(dataTable, css, index) {
//     var actualItems = [];
//     var expectedItems = [];

//     cy.get(css).eq(index).find(".list-item").as("getLinks");

//     cy.get("@getLinks")
//       .each(($element, index, list) => {
//         actualItems.push($element.text().trim());
//       })
//       .then(actualItems, () => {
//         actualItems = actualItems.sort();
//         cy.log("Length of actual items : " + actualItems.length);
//         expectedItems = dataTable.rawTable.slice(1).flat().sort();
//         cy.log("Length of expected items : " + expectedItems.length);
//         cy.log("Actual title of tiles : " + actualItems);
//         cy.log("Expected title of tiles : " + expectedItems);
//         expect(actualItems).to.deep.equal(expectedItems);
//       });
//   }

//   //MYCHART PORTAL VERIFICATION
//   myChartTitleImg() {
//     cy.get(this.myChartTitleImgCSS).should("be.visible");
//     cy.get(this.myChartTitleImgCSS).should("have.attr", "alt");
//   }

//   // Scroll to Footer
//   footerScroll() {
//     cy.get(this.homepagemouthbodyfooter).scrollIntoView();
//   }

//   // Verify 1st column Title
//   mouthbodyConnect(String) {
//     cy.get(this.FooterlinksText)
//       .contains(String)
//       .should("have.text", "MOUTH-BODY CONNECTION");
//   }

//   // Verify 2nd column Title
//   dentalservices(String) {
//     cy.get(this.FooterlinksText)
//       .contains(String)
//       .should("have.text", "DENTAL SERVICES");
//   }

//   // Verify 3rd column Title
//   paymentoption(String) {
//     cy.get(this.FooterlinksText)
//       .contains(String)
//       .should("have.text", "PAYMENT OPTIONS");
//   }

//   // Verify 4th column Title
//   howwegive(String) {
//     cy.get(this.FooterlinksText)
//       .contains(String)
//       .should("have.text", "HOW WE GIVE");
//   }

//   // Verify 5th column Title
//   about(String) {
//     cy.get(this.FooterlinksText).contains(String).should("have.text", "ABOUT");
//   }

//   // Verify footerlinks title
//   footerColumnLinks(dataTable, css) {
//     var actualFooterTitleItems = [];
//     var expectedFooterTitleItems = [];

//     cy.get(css).as("footerTileElements");

//     cy.get("@footerTileElements")
//       .find(".cmp-list__item-title")
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .each(($element, index, list) => {
//         actualFooterTitleItems.push($element.text().trim());
//       })
//       .then(actualFooterTitleItems, () => {
//         actualFooterTitleItems = actualFooterTitleItems.sort();
//         cy.log("Length of actual items : " + actualFooterTitleItems.length);
//         expectedFooterTitleItems = dataTable.rawTable.slice(1).flat().sort();
//         cy.log("Length of expected items : " + expectedFooterTitleItems.length);
//         cy.log("Actual title of tiles : " + actualFooterTitleItems);
//         cy.log("Expected title of tiles : " + expectedFooterTitleItems);
//         expect(actualFooterTitleItems).to.deep.equal(expectedFooterTitleItems);
//       });
//   }

//   //Click on links
//   clickLink(link, css) {
//     cy.get(css).find(".cmp-list__item-title").contains(link).as("footerlink");
//     cy.get("@footerlink").click();
//   }

//   // Verify URL response 200
//   urlRedirection(currenturl) {
//     cy.url().then(($url) => {
//       var wholeUrl = $url;
//       cy.url().should("include", currenturl);
//       //cy.wait(3000);
//       cy.request(wholeUrl).then((resp) => {
//         expect(resp.status).to.eq(200);
//       });
//     });
//   }

//   // Verify footer legal title

//   footerLegalLinks(legalfooter) {
//     cy.get(legalfooter).should("be.visible");
//   }

//   // footerLegalLinks(dataTable, css) {
//   //   var actualFooterLegalTitle = [];
//   //   var expectedFooterLegalTitle = [];

//   //   cy.get(css).as("footerLegalElements");

//   //   cy.get("@footerLegalElements")
//   //     .should("have.css", "font-family", "Poppins, sans-serif")
//   //     .each(($element, index, list) => {
//   //       actualFooterLegalTitle.push($element.text().trim());
//   //     })
//   //     .then(actualFooterLegalTitle, () => {
//   //       actualFooterLegalTitle = actualFooterLegalTitle.sort();
//   //       cy.log("Length of actual items : " + actualFooterLegalTitle.length);
//   //       expectedFooterLegalTitle = dataTable.rawTable.slice(1).flat().sort();
//   //       cy.log("Length of expected items : " + expectedFooterLegalTitle.length);
//   //       cy.log("Actual legal title : " + actualFooterLegalTitle);
//   //       cy.log("Expected legal title : " + expectedFooterLegalTitle);
//   //       expect(actualFooterLegalTitle).to.deep.equal(expectedFooterLegalTitle);
//   //     });
//   // }

//   // clickLegalLinks(Text, css) {
//   //   cy.get(css).contains(Text).as("footerlegallink");
//   //   cy.get("@footerlegallink").click();
//   // }

//   clickLegalLinks(css) {
//     cy.get(css).as("footerlegallink");
//     cy.get("@footerlegallink").click({ multiple: true });
//   }

//   // Verify social media icons/links
//   socialMediaLinks(dataTable, css) {
//     var actualFooterSocialIcons = [];
//     var expectedFooterSocialIcons = [];

//     cy.get(css).as("footerSocialIcons");
//     cy.get("@footerSocialIcons").should("have.length", 5);

//     cy.get("@footerSocialIcons")
//       .each((links, index, list) => {
//         let url = links.prop("href");
//         actualFooterSocialIcons.push(url.trim());
//       })
//       .then(actualFooterSocialIcons, () => {
//         cy.log("Length of actual items : " + actualFooterSocialIcons.length);
//         expectedFooterSocialIcons = dataTable.rawTable.slice(1).flat();
//         cy.log(
//           "Length of expected items : " + expectedFooterSocialIcons.length
//         );
//         cy.log("Actual Social Icons : " + actualFooterSocialIcons);
//         cy.log("Expected Social Icons : " + expectedFooterSocialIcons);
//         expect(actualFooterSocialIcons).to.deep.equal(
//           expectedFooterSocialIcons
//         );
//       });
//   }

//   clickSocialMediaIcons(link, css) {
//     cy.get("[href*='" + link + "']")
//       .invoke("removeAttr", "target")
//       .click();
//     cy.url().should("include", link);
//   }

//   // verify smilegen link in footer
//   smilegenlink(smilegenLink, css) {
//     cy.get(css)
//       .contains(smilegenLink)
//       .should("have.css", "font-family", "Poppins, sans-serif")
//       .should("be.visible");
//   }

//   smilegenhref(css, hrefValue) {
//     cy.get(css).find(".cmp-button").should("have.attr", "href", hrefValue);
//   }

//   smilegenTargetFooter(css, targetValue) {
//     cy.get(css).find(".cmp-button").should("have.attr", "target", targetValue);
//   }

//   footerParagraph() {
//     cy.get(this.footerParaOne)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif");
//     cy.get(this.footerParaTwo)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif");
//     cy.get(this.footerParaThree)
//       .should("be.visible")
//       .should("have.css", "font-family", "Poppins, sans-serif");
//   }
// }
// export { Content };
