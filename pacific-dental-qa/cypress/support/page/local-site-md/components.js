class LocalMD {
  swatchColor = ".cmp-container[style]";
  paraText = ".text p";
  linkText = ".text a";
  heading1Text = ".text h1";
  heading2Text = ".text h2";
  heading3Text = ".text h3";
  heading4Text = ".text h4";
  heading5Text = ".text h5";
  heading6Text = ".text h6";
  // fontColorTeal = ".text-medium-teal";
  fontColorTeal = ".text-dark-teal";
  fontColorWhite = ".text-white";
  fontColorYellow = ".text-dark-yellow";
  TitleH5 = ".cmp-title h1.style-5";
  textcardCTAAnchor = ".teaser--card-with-cta .cmp-button--link a";
  cardsIconTitle = ".teaser--card-with-icon .cmp-teaser__title p";
  cardsIconDesc = ".teaser--card-with-icon .cmp-teaser__description p";
  costEstimatorDesc = ".yellow-card-teaser--cost-card .cmp-teaser__description";
  costEstimatorActiveTabBorder = ".cmp-tabs__tab--active";
  // commonConcernCarousel = ".common-concerns-carousel"
  magazineTitle = ".magazine-carousel .cmp-teaser__pretitle";
  staffName = ".cmp-stafflisting__items .cmp-button__text";
  staffNameLink = ".cmp-stafflisting__items a";
  footerScroll = ".cmp-footer__minimal-footer";
  footerHeaderColumnsLinks = ".cmp-footer__column .cmp-title__link";
  footerLinksText = ".cmp-button__text";
  footerLinksTextLinks = ".cmp-footer__minimal-footer .cmp-text a";
  footerCopyrightText = ".cmp-footer__disclaimer .cmp-text p";
  tabUnderColor = ".cmp-tabs__tab--active";
  addressBarText = ".address-contact-wrapper .button.address .cmp-button__text";
  headerSearch = ".cmp-header__nav-actions .cmp-button__icon--search";
  searchOverlaySearchbar = ".search.search-lo .cmp-search__search-input";
  searchOverlaySearchicon = ".search.search-lo .cmp-search__search-icon";

  // Navigation to Page
  homepagewebsite() {
    cy.navigateToHomepage();
  }
  // Navigation to Page
  webPageNavigation(url) {
    cy.navigateToUrl(url);
  }
 
// HERO COMPONENT
HeroComponentTitleCSS(css, fontType, fontFamily) {
  cy.get(css + " " + fontType + ".cmp-title__text").should(
    "have.css",
    "font-family",
    fontFamily
  );
}

HeroComponentDescCSS(css, fontFamily) {
  cy.get(css).should("have.css", "font-family", fontFamily);
}

//SEARCH OVERLAY
searchClick() {
  cy.get(this.headerSearch).click();
}

SearchOverlayCSS(Title, fontSize, fontFamily) {
  cy.get(Title)
    .should("have.css", "font-family", fontFamily)
    .and("have.css", "font-size", fontSize);
}

searchOverlaySearchType(text) {
  cy.get(this.searchOverlaySearchbar).type(text);
}

searchOverlaySearchClick() {
  cy.get(this.searchOverlaySearchicon).click();
}

searchURLCheck(text) {
  cy.url().should("include", text);
}

  //Gallery Component - MD Redesign
  imageClick() {
    cy.get(".gallery-thumbs-container").should("be.visible");
    cy.get(".gallery-thumbs-container picture").eq(0).click();
  }

  stripBorderColor() {
    cy.get(
      ".gallery-thumbs-container .swiper-slide-thumb-active picture"
    ).should("have.css", "border-bottom-color", "rgb(172, 208, 140)");
  }
  largeImageBorderColor() {
    cy.get(".swiper-slide-active picture img")
      .eq(0)
      .should("have.css", "border-bottom-color", "rgb(68, 68, 68)");
  }

  arrowIconColorGallery(color) {
    var rgbCode = hexToRgb(color);
    cy.get(".swiper-button-next").then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "before");
      const bgColor = after.getPropertyValue("color");
      // expect(bgColor).to.eq("rgb(0, 151, 168)");
      expect(bgColor).to.eq(rgbCode);
    });

    cy.get(".swiper-button-prev").then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "before");
      const bgColor = after.getPropertyValue("color");
      // expect(bgColor).to.eq("rgb(0, 151, 168)");
      expect(bgColor).to.eq(rgbCode);
    });
  }

  // SWATCH COLOR COMPONENT
  SwatchColors(Color, index) {
    cy.get(this.swatchColor)
      .eq(index)
      .should("have.attr", "style")
      .and("contain", Color);
  }

  // BUTTON COMPONENT
  buttonBackgrndColor(color, button) {
    var rgbCode = hexToRgb(color);
    cy.get(button).should("have.css", "background-color", rgbCode);
  }

  buttontextSize(size, buttonText) {
    cy.get(buttonText).should("have.css", "font-size", size);
  }

  buttontextColor(color, buttonText) {
    var rgbCode = hexToRgb(color);
    cy.get(buttonText).should("have.css", "color", rgbCode);
  }

  bttnBorderColor(color, button) {
    var rgbCode = hexToRgb(color);
    cy.get(button).should("have.css", "border-bottom-color", rgbCode);
  }

  secondaryBackgrndColor(color, button) {
    cy.get(button).should("have.css", "background-color", color);
  }

  // RTE
  fontColorOptions(color1, color2, color3, color4) {
    var rgbCode1 = hexToRgb(color1);
    cy.get(this.fontColorTeal).should("have.css", "color", rgbCode1);

    var rgbCode2 = hexToRgb(color2);
    cy.get(this.fontColorWhite).should("have.css", "color", rgbCode2);

    var rgbCode3 = hexToRgb(color3);
    cy.get(this.fontColorYellow).should("have.css", "color", rgbCode3);

    var rgbCode4 = hexToRgb(color4);
    cy.get(this.paraText).eq(0).should("have.css", "color", rgbCode4);
  }

  paraTextCSS(size, fontFamily) {
    cy.get(this.paraText)
      .eq(0)
      .should("be.visible")
      .and("have.css", "font-size", size)
      .and("have.css", "font-family", fontFamily);
  }

  linkTextCSS(size, color) {
    var rgbCode = hexToRgb(color);

    cy.get(this.linkText)
      .eq(0)
      .should("be.visible")
      .and("have.css", "font-size", size)
      .and("have.css", "color", rgbCode);
  }

  headingTextCSS(heading, size) {
    cy.get(".text " + heading + "")
      .should("be.visible")
      .and("have.css", "font-size", size);
  }

  stlyeTextCSS(style, size) {
    cy.get("." + style + "")
      .eq(0)
      .should("be.visible")
      .and("have.css", "font-size", size);
  }

  // TITLE COMPONENT
  fontColorOptionsTitle(color1, color2, color3, color4) {
    var rgbCode1 = hexToRgb(color1);
    cy.get(this.fontColorTeal).should("have.css", "color", rgbCode1);

    var rgbCode2 = hexToRgb(color2);
    cy.get(this.TitleH5).should("have.css", "color", rgbCode2);

    var rgbCode3 = hexToRgb(color3);
    cy.get(this.fontColorWhite).should("have.css", "color", rgbCode3);

    var rgbCode4 = hexToRgb(color4);
    cy.get(this.fontColorYellow).eq(0).should("have.css", "color", rgbCode4);
  }

  titleTextCSS(heading, fontSize) {
    cy.get(heading + ".cmp-title__text.Select")
      .should("be.visible")
      .and("have.css", "font-size", fontSize);
  }

  titlestlyeTextCSS(heading, style, fontSize) {
    cy.get(".cmp-title " + heading + "." + style + "")
      .should("exist")
      .and("have.css", "font-size", fontSize);
  }

  //Quote
  quoteBackgrndColor(color, css, index) {
    var rgbCode = hexToRgb(color);
    cy.get(css).eq(index).should("have.css", "background-color", rgbCode);
  }

  // CARDS COMPONENT

  cardUL(color) {
    var rgbCode = hexToRgb(color);
    cy.get(this.textcardCTAAnchor)
      .should("be.visible")
      .and("have.css", "border-bottom-color", rgbCode);
  }
  textCardIcon() {
    cy.get(this.cardsIconTitle).should("be.visible");
    cy.get(this.cardsIconTitle).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif"
    );
    cy.get(this.cardsIconDesc).should("be.visible");
    cy.get(this.cardsIconDesc).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif"
    );
  }

  // COST ESTIMATOR COMPONENT
  costEstimatorPrice(color) {
    var rgbCode = hexToRgb(color);
    cy.get(this.costEstimatorDesc)
      .should("be.visible")
      .and("have.css", "color", rgbCode);
  }

  arrowIconColor(color) {
    var rgbCode = hexToRgb(color);
    cy.get(".arrow-icons.right").then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "before");
      const bgColor = after.getPropertyValue("color");
      expect(bgColor).to.eq(rgbCode);
    });

    cy.get(".arrow-icons.left").then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "before");
      const bgColor = after.getPropertyValue("color");
      expect(bgColor).to.eq(rgbCode);
    });
  }

  costEstimatorTabBorder(color) {
    var rgbCode = hexToRgb(color);
    cy.get(this.costEstimatorActiveTabBorder)
      .should("be.visible")
      .and("have.css", "border-top-color", rgbCode);
  }

  // COMMON CONCERN CAROUSEL
  componentVisible(component) {
    cy.get(component).should("be.visible");
  }

  commonConcernArrowColor(color) {
    var rgbCode = hexToRgb(color);
    cy.get(".common-concerns-carousel .swiper-button-next").then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "before");
      const bgColor = after.getPropertyValue("color");
      expect(bgColor).to.eq(rgbCode);
    });

    cy.get(".common-concerns-carousel .swiper-button-prev").then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "before");
      const bgColor = after.getPropertyValue("color");
      expect(bgColor).to.eq(rgbCode);
    });
  }

  threefourcommonConcernUnderline(fourCommonConcerUnderline, color) {
    var rgbCode = hexToRgb(color);
    cy.get(fourCommonConcerUnderline).then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "after");
      const bgColor = after.getPropertyValue("border-bottom-color");
      expect(bgColor).to.eq(rgbCode);
    });
  }

  // MAGAZINE CAROUSEL
  magazinCarouselnArrowColor(color) {
    var rgbCode = hexToRgb(color);
    cy.get(".magazine-carousel .swiper-button-next").then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const before = win.getComputedStyle($el[0], "before");
      const bgColor = before.getPropertyValue("color");
      expect(bgColor).to.eq(rgbCode);
    });

    cy.get(".magazine-carousel .swiper-button-prev").then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const before = win.getComputedStyle($el[0], "before");
      const bgColor = before.getPropertyValue("color");
      expect(bgColor).to.eq(rgbCode);
    });
  }

  magazineTitleColor(magazineCarouselTiTle, color) {
    var rgbCode = hexToRgb(color);
    cy.get(magazineCarouselTiTle)
      .should("be.visible")
      .and("have.css", "color", rgbCode);
  }

  // TEASER
  seeLessMoreBttnUndercolor(seeMoreLessLink, seeMoreLess, color) {
    var rgbCode = hexToRgb(color);
    cy.get(seeMoreLessLink)
      .parent()
      .contains(seeMoreLess)
      .should("be.visible")
      .and("have.css", "border-bottom-color", rgbCode);
  }

  CTABttnUndercolor(leftimageBttn, color) {
    var rgbCode = hexToRgb(color);
    cy.get(leftimageBttn)
      .should("be.visible")
      .and("have.css", "border-bottom-color", rgbCode);
  }

  // DYMANIC LISTING
  titleColorListing(threeCardTitle, color) {
    var rgbCode = hexToRgb(color);
    cy.get(threeCardTitle)
      .should("be.visible")
      .and("have.css", "color", rgbCode);
  }

  moreLessColorCode(threeCarouselMore, more, color) {
    var rgbCode = hexToRgb(color);
    cy.get(threeCarouselMore)
      .eq(2)
      .contains(more)
      .should("be.visible")
      .and("have.css", "color", rgbCode);
  }

  morearrowIconColorDymanicListing(color) {
    var rgbCode = hexToRgb(color);
    cy.get(".swiper-button-next")
      .eq(2)
      .then(($el) => {
        const win = $el[0].ownerDocument.defaultView;
        const after = win.getComputedStyle($el[0], "before");
        const bgColor = after.getPropertyValue("color");
        expect(bgColor).to.eq(rgbCode);
      });
  }

  lessarrowIconColorDymanicListing(color) {
    var rgbCode = hexToRgb(color);
    cy.get(".swiper-button-prev")
      .eq(2)
      .then(($el) => {
        const win = $el[0].ownerDocument.defaultView;
        const after = win.getComputedStyle($el[0], "before");
        const bgColor = after.getPropertyValue("color");
        expect(bgColor).to.eq(rgbCode);
      });
  }

  // EBOOK
  ebookBachgrndColor(bckgrndColor, color) {
    var rgbCode = hexToRgb(color);
    cy.get(bckgrndColor)
      .should("be.visible")
      .and("have.css", "background-color", rgbCode);
  }

  // OFFICE PROFILE:overview and information
  phonecolorCheck(css, string1, string2, color) {
    var rgbCode = hexToRgb(color);
    cy.get(css)
      .contains(string1)
      .should("be.visible")
      .and("have.css", "color", rgbCode);

    var rgbCode = hexToRgb(color);
    cy.get(css)
      .contains(string2)
      .should("be.visible")
      .and("have.css", "color", rgbCode);
  }

  addresscolorCheck(css, string1, string2, string3, string4, color) {
    var rgbCode = hexToRgb(color);
    cy.get(css)
      .contains(string1)
      .should("be.visible")
      .and("have.css", "color", rgbCode);

    var rgbCode = hexToRgb(color);
    cy.get(css)
      .contains(string2)
      .should("be.visible")
      .and("have.css", "color", rgbCode);

    var rgbCode = hexToRgb(color);
    cy.get(css)
      .contains(string3)
      .should("be.visible")
      .and("have.css", "color", rgbCode);

    var rgbCode = hexToRgb(color);
    cy.get(css)
      .contains(string4)
      .should("be.visible")
      .and("have.css", "color", rgbCode);
  }
  // STAFF LISTING PATH UPDATE
  buttonResponseAndURLCheck() {
    var staffNameList = [];
    cy.get(this.staffName).each(($name, index) => {
      const StaffName = $name.text().toLowerCase().trim().split(" ");
      const staffFirstName = StaffName[0];
      staffNameList.push(staffFirstName);
    });

    cy.get(this.staffNameLink).each(($link, index) => {
      const linkHref = $link.attr("href");
      cy.log("link is: " + linkHref);
      expect(linkHref).contain(staffNameList[index]);

      expect(linkHref, "Link should have an href attribute").to.not.be.empty;
      cy.request(linkHref).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  }

  // TABS
  colorunderTab(color) {
    var rgbCode = hexToRgb(color);
    cy.get(this.tabUnderColor).should(
      "have.css",
      "border-bottom-color",
      rgbCode
    );
  }

  // ALERT BAR and ADDRESS BAR
  BackgrndColor(color, css) {
    var rgbCode = hexToRgb(color);
    cy.get(css).should("have.css", "background-color", rgbCode);
  }

  alertDisappear(css, css2) {
    cy.get(css).click();
    cy.get(css2).should("have.attr", "style").and("contain", "display: none");
  }

  addressBarTexts(text) {
    cy.get(this.addressBarText).should("be.visible").contains(text);
  }

  // PRIMARY NAV BAR
  smilegenLogoHeaderNav(css) {
    cy.get(css).find("a").should("have.attr", "href", "/");
  }

  primaryNavBttn(css, text, css2, link) {
    cy.get(css).contains(text).should("be.visible");
    cy.get(css2).should("have.attr", "href", link);
  }

  primaryNavLinks(css, NavNames, link) {
    cy.get(css)
      .contains(NavNames)
      .should("have.attr", "href")
      .and("contain", link);
  }

  componentsVisibleContains(css, text) {
    cy.get(css).contains(text).should("be.visible");
  }

  // STAFF INTRO
  StaffIntroCSS(Title, fontFamily, fontSize) {
    cy.get(Title)
      .eq(0)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }

  // FOOTER
  footerNavigation() {
    cy.get(this.footerScroll).scrollIntoView();
  }

  footerColumnHeading(color) {
    var rgbCode = hexToRgb(color);
    cy.get(this.footerHeaderColumnsLinks)
      .should("be.visible")
      .and("have.css", "color", rgbCode);
  }

  footerLinksFBGoogle(text) {
    cy.get(this.footerLinksText).contains(text).should("be.visible");
  }

  footerLinksFBGoogle200(text, currentURL) {
    cy.get(this.footerLinksText)
      .contains(text)
      .parent()
      .each(($link, index) => {
        const linkHref = $link.attr("href");
        cy.log("link is: " + linkHref);
        expect(linkHref).contain(currentURL);

        // expect(linkHref, "Link should have an href attribute").to.not.be.empty;
        // cy.request(linkHref).then((response) => {
        //   expect(response.status).to.equal(200);
        // });
      });
  }

  footerCopyrightLinks(link) {
    cy.get(this.footerLinksTextLinks)
      .contains(link)
      .then(($link) => {
        const linkHref = $link.attr("href");
        cy.log("link is: " + linkHref);

        expect(linkHref, "Link should have an href attribute").to.not.be.empty;
        cy.request(linkHref).then((response) => {
          expect(response.status).to.equal(200);
        });
      });
  }

  footerCopyrightLinksCSS(link, color, fontFamily, fontSize) {
    var rgbCode = hexToRgb(color);
    cy.get(this.footerLinksTextLinks)
      .contains(link)
      .should("have.css", "color", rgbCode)
      .and("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }

  footerCopyrightTextCSS(fontFamily, fontSize) {
    cy.get(this.footerCopyrightText)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
}
export { LocalMD };

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    return "rgb(" + r + ", " + g + ", " + b + ")"; //return 23,14,45 -> reformat if needed
  }
  return null;
}
