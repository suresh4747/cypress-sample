//  *This class contains page objects and methods related to compare page
//  *
//  * @class PDS

import { should } from "chai";

//  */
class PDS {
  // css locators
  swatchColor = ".cmp-container[style]";
  paraText = ".text p";
  linkText = ".text a";
  heading1Text = ".text h1";
  heading2Text = ".text h2";
  heading3Text = ".text h3";
  heading4Text = ".text h4";
  heading5Text = ".text h5";
  heading6Text = ".text h6";
  fontColorBlue = ".text-blue";
  fontColorWhite = ".text-white";
  TitleH5 = ".cmp-title h1.style-5";
  textcardCTAAnchor = ".teaser--card-with-cta .cmp-button--link a";
  cardsIconTitle = ".teaser--card-with-icon .cmp-teaser__title p";
  cardsIconDesc = ".teaser--card-with-icon .cmp-teaser__description p";
  costEstimatorDesc = ".yellow-card-teaser--cost-card .cmp-teaser__description";
  costEstimatorActiveTabBorder = ".cmp-tabs__tab--active";
  magazineTitle = ".magazine-carousel .cmp-teaser__pretitle";
  footerScroll = ".cmp-footer__minimal-footer";
  footerHeaderColumnsLinks = ".cmp-footer__column .cmp-title__link";
  footerLinksText = ".cmp-button__text";
  footerLinksTextLinks = ".cmp-footer__minimal-footer .cmp-text a";
  footerCopyrightText = ".cmp-footer__disclaimer .cmp-text p";
  tabUnderColor = ".cmp-tabs__tab--active";
  careerSearchBttn = ".careersearch .cmp-button--text-icon button";
  pds3ColNoCarousel =
    ".threecolumn.pds-card__title-variation .pds-card-carousel";
  pds4ColNoCarousel = ".fourcolumn.pds-card__link-variation";
  primaryNavSearch = ".cmp-header .cmp-button--search button";
  primaryNavSearchDropdown = ".cmp-header .cmp-search__custom-dropdown select";
  primaryNavSearchField = ".cmp-header .cmp-search__search-input";
  primaryNavSearchIcon = ".cmp-header .cmp-search__search-icon";

  // Navigation to Page
  homepagewebsite() {
    cy.navigateToHomepage();
  }
  // Navigation to Page
  webPageNavigation(url) {
    cy.navigateToUrl(url);
  }
  //Gallery Component - PDS Redesign
  imageClick() {
    cy.get(".gallery-thumbs-container").should("be.visible");
    cy.get(".gallery-thumbs-container picture").eq(0).click();
  }

  stripBorderColor() {
    cy.get(
      ".gallery-thumbs-container .swiper-slide-thumb-active picture"
    ).should("have.css", "border-bottom-color", "rgb(249, 141, 24)");
  }
  largeImageBorderColor() {
    cy.get(".swiper-slide-active picture img")
      .eq(0)
      .should("have.css", "border-bottom-color", "rgb(68, 68, 68)");
  }

  arrowIconColorGallery() {
    cy.get(".swiper-button-next").then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "before");
      const bgColor = after.getPropertyValue("color");
      expect(bgColor).to.eq("rgb(0, 155, 215)");
    });

    cy.get(".swiper-button-prev").then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "before");
      const bgColor = after.getPropertyValue("color");
      expect(bgColor).to.eq("rgb(0, 155, 215)");
    });
  }

  // Swatch Color
  SwatchColors(Color, index) {
    cy.get(this.swatchColor)
      .eq(index)
      .should("have.attr", "style")
      .and("contain", Color);
  }

  /// BUTTON COMPONENT
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

  // RTE
  fontColorOptions(color1, color2, color3) {
    var rgbCode1 = hexToRgb(color1);
    cy.get(this.fontColorWhite).should("have.css", "color", rgbCode1);

    var rgbCode2 = hexToRgb(color2);
    cy.get(this.fontColorBlue).should("have.css", "color", rgbCode2);

    // var rgbCode3 = hexToRgb(color3);
    // cy.get(this.fontColorDarkYellow).should("have.css", "color", rgbCode3);

    var rgbCode3 = hexToRgb(color3);
    cy.get(this.paraText).eq(0).should("have.css", "color", rgbCode3);
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
  fontColorOptionsTitle(color1, color2, color3) {
    var rgbCode2 = hexToRgb(color1);
    cy.get(this.TitleH5).should("have.css", "color", rgbCode2);

    var rgbCode3 = hexToRgb(color2);
    cy.get(this.fontColorWhite).should("have.css", "color", rgbCode3);

    var rgbCode4 = hexToRgb(color3);
    cy.get(this.fontColorBlue).eq(0).should("have.css", "color", rgbCode4);
  }

  titleTextCSS(heading, fontSize) {
    cy.get(".cmp-title " + heading + ".Select")
      .should("be.visible")
      .and("have.css", "font-size", fontSize);
  }

  titlestlyeTextCSS(heading, style, fontSize) {
    cy.get(".cmp-title " + heading + "." + style + "")
      .should("be.visible")
      .and("have.css", "font-size", fontSize);
  }

  //QUOTE COMPONENT
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
    cy.get(".arrow-icons#right").then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "before");
      const bgColor = after.getPropertyValue("color");
      expect(bgColor).to.eq(rgbCode);
    });

    cy.get(".arrow-icons#left").then(($el) => {
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

  threefourcommonConcernCarouselVisible(fourcommonConcernCarousel) {
    cy.get(fourcommonConcernCarousel).should("be.visible");
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

  componentVisible(magazineCarousel) {
    cy.get(magazineCarousel).should("be.visible");
  }
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

  // TABS
  colorunderTab(color) {
    var rgbCode = hexToRgb(color);
    cy.get(this.tabUnderColor).should(
      "have.css",
      "border-bottom-color",
      rgbCode
    );
  }

  // CARD COMPONENT NEW
  pds3ColumnsNoCarousel() {
    cy.get(this.pds3ColNoCarousel).should("not.exist");
  }

  pds4ColumnsNoCarousel() {
    cy.get(this.pds4ColNoCarousel)
      .eq(0)
      .find(".pds-card-carousel")
      .should("not.exist");
  }

  pdsDotsFocus(pdsTitleNextArrow, pdsTitleDots) {
    cy.get(pdsTitleNextArrow).eq(1).click();

    cy.get(pdsTitleDots)
      .eq(1)
      .then((dot) => {
        if (
          dot.hasClass(
            "swiper-pagination-bullet swiper-pagination-bullet-active"
          )
        ) {
          expect(true).to.be.true;
          cy.log("Focus of dots is correct");
        }
      });
  }

  pdsTitleArrowHide(pdsTitleNextArrow) {
    cy.get(pdsTitleNextArrow).eq(1).should("be.visible");

    for (let i = 0; i < 25; i++) {
      cy.get(pdsTitleNextArrow)
        .eq(1)
        .then((nextButton) => {
          if (
            !nextButton.hasClass("swiper-button-next swiper-button-disabled")
          ) {
            cy.wrap(nextButton).click();
            cy.wait(1000);
          } else {
            cy.log("No arrow icon now");
          }
        });
    }
    cy.get(".swiper-button-disabled").should("exist");
  }

  // HERO COMPONENT
  heroComponentVisible(css, index) {
    cy.get(css).eq(index).should("be.visible");
  }

  heroComponentTitleAlign(css, index, string) {
    cy.get(css).eq(index).should("have.css", "text-align", string);
  }

  heroComponentTitleCSS(css, index, titleColor, fontSize, fontfamily) {
    var rgbCode = hexToRgb(titleColor);
    cy.get(css)
      .eq(index)
      .should("have.css", "color", rgbCode)
      .and("have.css", "font-size", fontSize)
      .and("have.css", "font-family", fontfamily);
  }

  heroComponentDescCSS(css, index, fontfamily) {
    cy.get(css).eq(index).and("have.css", "font-family", fontfamily);
  }

  heroComponentBttnCSS(css, index, Color) {
    var rgbCode = hexToRgb(Color);
    cy.get(css).eq(index).should("have.css", "background-color", rgbCode);
  }

  heroComponentWOCTACTA(css, index) {
    cy.get(css)
      .eq(index)
      .find(".hero-content .cmp-button--primary a")
      .should("not.exist");
  }

  heroComponentWOCTADesc(css, index) {
    cy.get(css)
      .eq(index)
      .find(".hero-content .hero-content .text p")
      .should("not.exist");
  }

  // FEATURED LISTS
  featuredListCSS(css, fontfamily) {
    cy.get(css).should("have.css", "font-family", fontfamily);
  }

  // INFO CARD COMPONENT
  InfoCardCSS(css, fontfamily, fontSize) {
    cy.get(css)
      .should("have.css", "font-size", fontfamily)
      .and("have.css", "font-family", fontSize);
  }

  infoCardLength(css, index) {
    cy.get(css).eq(index).find(".infocard-item").should("have.length", 3);
  }

  ComponentsVisibleIndex(css, index) {
    cy.get(css).eq(index).should("be.visible");
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

        expect(linkHref, "Link should have an href attribute").to.not.be.empty;
        cy.request(linkHref).then((response) => {
          expect(response.status).to.equal(200);
        });
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

  // ICON LIST COMPONENT
  PDSiconCSS(css, fontFamily, fontSize) {
    cy.get(css)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }

  // CAREER SEARCH COMPONENT
  milesDropdownDefault(string) {
    cy.get(".careersearch select.distance-dropdown option:selected")
      .invoke("text")
      .should("contain", string);
  }

  milesDropdown(option1, option2, option3) {
    cy.get(".careersearch select.distance-dropdown option")
      .contains(option1)
      .should("exist");
    cy.get(".careersearch select.distance-dropdown option")
      .contains(option2)
      .should("exist");
    cy.get(".careersearch select.distance-dropdown option")
      .contains(option3)
      .should("exist");
  }
  enterKeywordCarrerSearch(css, string) {
    cy.get(css).should("be.visible").type(string);
  }

  selectdropdownValue(string) {
    cy.get(".careersearch select.distance-dropdown").select(string);
    cy.wait(1000);
  }

  endURLCheckCareerSearch(string) {
    cy.get(this.careerSearchBttn).should("be.visible").click();
    cy.wait(1000);
    cy.url().should("include", string);
  }

  // QUOTE COMPONENT - LARGE AND SMALL IMAGE VARIATION
  quoteComponentCSS(css, fontSize, fontFamily) {
    cy.get(css)
      .should("have.css", "font-size", fontSize)
      .and("have.css", "font-family", fontFamily);
  }

  quoteComponentAuthorName(css) {
    cy.get(css).parent().find("span span").eq(0).should("be.visible");
  }

  quoteComponentAuthorTitle(css) {
    cy.get(css).parent().find("span span").eq(1).should("be.visible");
  }

  // PRIMARY NAV
  logoNavigationCheck(pdslogoHeader) {
    cy.get(pdslogoHeader).click({ force: true });
    cy.url().should("include", Cypress.env(Cypress.env("testEnv")));
    cy.go("back");
  }

  primaryNavArrowColor(color, css) {
    var rgbCode = hexToRgb(color);
    cy.get(css).then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "after");
      const bgColor = after.getPropertyValue("color");
      expect(bgColor).to.eq(rgbCode);
    });
  }

  // PRIMARY NAV SEARCH
  primaryNavSearchiconClick() {
    cy.get(this.primaryNavSearch).click();
  }

  primaryNavSearchDropdownSelect(string) {
    cy.get(this.primaryNavSearchDropdown).select(string);
  }

  primarynacSearchType(text) {
    cy.get(this.primaryNavSearchField).type(text);
  }

  primaryNacSearchIconClick() {
    cy.get(this.primaryNavSearchIcon).click();
  }

  primaryNavSearchNavigation(string) {
    cy.url().should("include", string);
  }

  // SECONDARY NAV
  secondaryNavItemsClick(css, css2, name, color) {
    var rgbCode = hexToRgb(color);
    cy.get(css).contains(name).click();
    cy.get(css2)
      .contains(name)
      .should("have.css", "border-bottom-color", rgbCode);
  }

  flyoutCardColumns(primaryNavLinks, string, secNavLinksActive) {
    cy.get(primaryNavLinks).contains(string).click();

    cy.get(secNavLinksActive)
      .parent()
      .find(".cmp-header__product-items-column")
      .should("be.visible")
      .and("have.length", 5);
  }

  foyoutCardLinkResponse(secNavLinksActive, string) {
    cy.get(secNavLinksActive)
      .parent()
      .find(".cmp-list__item-link")
      .each(($link) => {
        const linkHref = $link.attr("href");
        cy.log("link is: " + linkHref);
        expect(linkHref, "Link should have an href attribute").to.not.be.empty;
        cy.request(linkHref).then((response) => {
          expect(response.status).to.equal(200);
        });
      });
  }

  flyoutCardImgDecCTA(secNavLinksActive) {
    cy.get(secNavLinksActive)
      .parent()
      .find(".cmp-teaser__image")
      .should("be.visible");

    cy.get(secNavLinksActive)
      .parent()
      .find(".cmp-teaser__description p")
      .should("be.visible");

    cy.get(secNavLinksActive).parent().find(".cmp-button").should("be.visible");
  }

  flyoutCardBttnResponse(secNavLinksActive) {
    cy.get(secNavLinksActive)
      .parent()
      .find(".cmp-button")
      .each(($link) => {
        const linkHref = $link.attr("href");
        cy.log("link is: " + linkHref);
        expect(linkHref, "Link should have an href attribute").to.not.be.empty;
        cy.request(linkHref).then((response) => {
          expect(response.status).to.equal(200);
        });
      });
  }

  // FOOTER SECTION
  footerSocialMediaLinks(css, link) {
    cy.get(css).should("be.visible").and("have.length", 6);

    var actualFooterSocialIcons = [];
    cy.get(css)
      .each((links) => {
        let url = links.prop("href");
        actualFooterSocialIcons.push(url.trim());
      })
      .then(actualFooterSocialIcons, () => {
        cy.log("Social Media Links: " + actualFooterSocialIcons);
        expect(actualFooterSocialIcons).to.contain(link);
      });
  }

  footerCopyrightCSS(css, fontSize, fontFamily) {
    cy.get(css)
      .should("be.visible")
      .and("have.css", "font-size", fontSize)
      .and("have.css", "font-family", fontFamily);
  }
}
export { PDS };

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
