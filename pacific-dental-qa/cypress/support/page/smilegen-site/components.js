//  *This class contains page objects and methods related to compare page
//  *
//  * @class HomePage

// import { contains } from "cypress/types/jquery";

//  */
class HomePage {
  // css locators
  accordian = ".cmp-accordion__button";
  accordianExpand = "[aria-expanded='true']";
  accordianClosed = "[aria-expanded='false']";
  newsLetterComponent = ".cmp-container--newsletter";
  newsLetterTextfield = "#newsletter-form-email";
  newsLetterSubscribe = "#newsletter-form-button";
  newsLetterSuccessMessage = "*[data-success='SUCCESSFULLY SUBMITTED!']";
  newsLetterFailureMessage =
    "*[data-email-syntax-error='Please enter a valid email address.']";
  newsLetterTitle = ".cmp-container--newsletter h3.cmp-title__text";
  newsLetterBody = ".cmp-container--newsletter .cmp-text p";
  activeTab = ".cmp-tabs__tab--active";
  rteComponent = "#text-e19c5b5c16";
  rteH1 = "#text-e19c5b5c16 h1";
  rteH2 = "#text-e19c5b5c16 h2";
  rteH3 = "#text-e19c5b5c16 h3";
  rteH4 = "#text-e19c5b5c16 h4";
  rteH5 = "#text-e19c5b5c16 h5";
  rteH6 = "#text-e19c5b5c16 h6";
  rtePara = "#text-e19c5b5c16 p";
  navSearchComponent = ".cmp-button--search";
  searchBox = ".cmp-search__inner";
  searchDropdownfield = ".cmp-search__custom-dropdown";
  searchBoxInput = ".cmp-search__search-input";
  searchIcon = ".cmp-search__search-icon";
  // textcardwithCTAComponent = ".cmp-cardlist--twocolumn";
  // textcardwithCTATitle = ".text-card [id*= teaser] .cmp-teaser__title h4";
  // textcardwithCTADescription =
  //   ".text-card [id*= teaser] .cmp-teaser__description p";
  // textcardCTA = ".text-card [id*= teaser] .cmp-button__text";
  // textcardCTAAnchor = ".text-card [id*= teaser] .cmp-button";
  // cardBG = ".text-card [id*= teaser]";
  // textCardWOCTA = ".cmp-cardlist--threecolumn";
  // textCardWOCTATitle = ".teaser--card-without-cta .cmp-teaser__title h4";
  // textCardWOCTADescription =
  //   ".teaser--card-without-cta .cmp-teaser__description p";
  // textCardWOCTABG = ".teaser--card-without-cta .cmp-teaser";
  // factCardComponent = ".yellow-card-teaser--fact-card";
  // factCardBG = ".yellow-card-teaser--fact-card .cmp-teaser";
  // factCardTitle = ".yellow-card-teaser--fact-card .cmp-teaser__title h4";
  // factCardDescription =
  //   ".yellow-card-teaser--fact-card .cmp-teaser__description p";
  // costCard = ".yellowcardlist";
  // costCardTitle = ".yellow-card-teaser--cost-card .cmp-teaser__title h4";
  // costCardDesc = ".yellow-card-teaser--cost-card .cmp-teaser__description p";
  // costCardSubTitle = ".yellow-card-teaser--cost-card .cmp-teaser__subtitle";
  // costCardCTA = ".yellow-card-teaser--cost-card .cmp-button";
  // costCardBG = ".yellowcardlist .cmp-teaser";
  // tagCard = ".yellow-card-teaser--learn-more-card-with-tag";
  // tagCardTitle =
  //   ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__title h4";
  // tagCardDesc =
  //   ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__description p";
  // tagCardCTAtags =
  //   ".yellow-card-teaser--learn-more-card-with-tag .cmp-teaser__tag-container";
  // tagCardTagsAnchor = ".cmp-teaser__tag-container .cmp-button";
  herosearchDropdown = ".searchbox .cmp-search__custom-dropdown";
  Search = ".search";
  searchTextField = ".searchbox .cmp-search__search-input";
  searchIcon = ".searchbox .cmp-search__search-icon";
  primaryNavSearchIcon = ".cmp-button--search";
  //searchDropdown = ".searchbox .cmp-search__custom-dropdown";

  titleText = ".cmp-teaser__title";
  subTitleText = ".cmp-teaser__description";
  subTitleTextwithPara = ".cmp-teaser__description p";
  subTitleTextwithParaCopy = "#teaser-30bd641ad3 .cmp-teaser__description p";
  subTitleCSS = ".cmp-teaser__title--sanchez";
  buttonLandingPage = ".cmp-teaser__action-container .cmp-button";
  buttontextLandingPage = ".cmp-teaser__action-container .cmp-button__text";
  backgrndImage = ".cmp-teaser--text-only .cmp-teaser__image";
  backgrndImageExists = ".cmp-teaser__image";
  homepagePlaceholder =
    "[placeholder='Search dental services, providers and blog']";

  // Navigation to Page
  homepagewebsite(homepageURL) {
    cy.navigateToHomepage(homepageURL);
  }

  // Navigation to Page
  webPageNavigation(url) {
    cy.navigateToUrl(url);
  }
  //navigate to accordion section
  accordianSection() {
    cy.get(this.accordian).should("be.visible");
  }
  //expand accordion section
  plusAccordianClick() {
    cy.get(this.accordian)
      .its("length")
      .then((accordianSize) => {
        var accordianSize = accordianSize;
        cy.wrap(accordianSize).as("accordianSize");
      });
    cy.get("@accordianSize").then((accordianSize) => {
      var size = accordianSize;
      for (let i = 0; i <= size - 1; i++) {
        cy.get(this.accordian).eq(i).should("be.visible");
        cy.get(this.accordian).eq(i).click();
        cy.get(this.accordianExpand).eq(i).should("be.visible");
      }
    });
  }
  // collapse accordion section
  minusAccordianClick() {
    cy.get(this.accordian)
      .its("length")
      .then((accordianSize) => {
        var accordianSize = accordianSize;
        cy.wrap(accordianSize).as("accordianSize");
      });
    cy.get("@accordianSize").then((accordianSize) => {
      var size = accordianSize;
      for (let i = 0; i <= size - 1; i++) {
        cy.get(this.accordian).eq(i).should("be.visible");
        cy.get(this.accordian).eq(i).click();
        cy.get(this.accordianClosed).eq(i).should("be.visible");
      }
    });
  }
  singleAccordionClick() {
    cy.get(this.accordian).eq(0).should("be.visible");
    cy.get(this.accordian).eq(0).click();
    cy.get(this.accordianExpand).eq(0).should("be.visible");
    cy.screenshot();
  }
  //newsletter component
  newsLetterPresent() {
    cy.get(this.newsLetterComponent).should("be.visible");
  }

  newsLetterTextbox() {
    cy.get(this.newsLetterTextfield).should("be.visible");
  }

  newsLetterTextboxValid(validEmail) {
    cy.get(this.newsLetterTextfield).type(validEmail);
  }
  newsLetterSubscribeBttn() {
    cy.get(this.newsLetterSubscribe).should("be.visible");
    cy.checkAndClickIfPresent(this.newsLetterSubscribe);
  }

  newsLetterConfirmation() {
    cy.get(this.newsLetterSuccessMessage)
      .contains("SUCCESSFULLY SUBMITTED!")
      .should("be.visible");
  }

  newsLetterConfirmationFontFamily(fontFamily) {
    cy.get(this.newsLetterSuccessMessage).should(
      "have.css",
      "font-family",
      fontFamily
    );
  }

  newsLetterConfirmationFontColor(fontColor) {
    cy.get(this.newsLetterSuccessMessage).should(
      "have.css",
      "color",
      fontColor
    );
  }
  newsLetterTextboxInvalid(invalidEmail) {
    cy.get(this.newsLetterTextfield).type(invalidEmail);
  }

  newsLetterFailure() {
    cy.get(this.newsLetterFailureMessage)
      .contains("Please enter a valid email address.")
      .should("be.visible");
  }

  newsLetterFailureFontFamily(fontFamily) {
    cy.get(this.newsLetterFailureMessage)
      .contains("Please enter a valid email address.")
      .should("have.css", "font-family", fontFamily);
  }

  newsLetterFailureFontColor(fontColor) {
    cy.get(this.newsLetterFailureMessage)
      .contains("Please enter a valid email address.")
      .should("have.css", "color", fontColor);
  }

  newsLetterTitleVisible() {
    cy.get(this.newsLetterTitle).should("be.visible");
  }
  newsLetterTitleHeading() {
    cy.get(this.newsLetterTitle).should("be.visible");
  }

  newsLetterTitleFontSize(fontSize) {
    cy.get(this.newsLetterTitle).should("have.css", "font-size", fontSize);
  }

  newsLetterTitleFontFamily(fontFamily) {
    cy.get(this.newsLetterTitle).should("have.css", "font-family", fontFamily);
  }

  newsLetterBodyFontFamily(fontFamily) {
    cy.get(this.newsLetterBody).should("have.css", "font-family", fontFamily);
  }

  newsLetterSubscribeFontFamily(fontFamily) {
    cy.get(this.newsLetterSubscribe)
      .contains("SUBSCRIBE")
      .should("have.css", "font-family", fontFamily);
  }

  // tabs
  tabList(dataTable, css) {
    var actualtabList = [];
    var expectedtabList = [];

    cy.get(css).as("tabListItems");
    cy.log("TabsCount : " + "@tabListItems".length);

    cy.get("@tabListItems")
      .each(($element, index, list) => {
        actualtabList.push($element.text().trim());
        cy.log($element.text().trim());
      })
      .then(actualtabList, () => {
        actualtabList = actualtabList.sort();
        cy.log("Length of actual items : " + actualtabList.length);
        expectedtabList = dataTable.rawTable.slice(1).flat().sort();
        cy.log("Length of expected items : " + expectedtabList.length);
        cy.log("Actual title of tiles : " + actualtabList);
        cy.log("Expected title of tiles : " + expectedtabList);
        expect(actualtabList).to.deep.equal(expectedtabList);
      });
  }

  //Click on links
  tabTextLinksClick(url1, url2) {
    cy.get("[href*='" + url1 + url2 + "']")
      .eq(0)
      .click({ force: true });
      cy.url().should("include", url2);
    
  }
  tabHighlighted() {
    cy.get(this.activeTab).should("be.visible");
    cy.get(this.activeTab).should(
      "have.css",
      "border-bottom-color",
      "rgb(255, 205, 71)"
    );
  }

  // RTE component

  //Navigate to RTE

  navigateToRTE() {
    cy.get(this.rteComponent).should("be.visible");
  }

  rteHeading() {
    cy.get(this.rteH1).should("be.visible");
    cy.get(this.rteH2).should("be.visible");
    cy.get(this.rteH3).should("be.visible");
    cy.get(this.rteH4).should("be.visible");
    cy.get(this.rteH5).should("be.visible");
    cy.get(this.rteH6).should("be.visible");
  }

  verifyHeadingFont() {
    cy.get(this.rteH1).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif",
      "font-size",
      "60px",
      "font-weight",
      "700"
    );

    cy.get(this.rteH2).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif",
      "font-size",
      "40px",
      "font-weight",
      "700"
    );
    cy.get(this.rteH3).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif",
      "font-size",
      "32px",
      "font-weight",
      "700"
    );

    cy.get(this.rteH4).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif",
      "font-size",
      "32px",
      "font-weight",
      "700"
    );

    cy.get(this.rteH5).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif",
      "font-size",
      "24px",
      "font-weight",
      "700"
    );

    cy.get(this.rteH6).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif",
      "font-size",
      "10.72px",
      "font-weight",
      "700"
    );
  }
  verifyPara() {
    cy.get(this.rtePara)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif");
  }

  // PrimaryNav Search
  navSearch() {
    cy.get(this.navSearchComponent).should("be.visible");
    cy.get(this.navSearchComponent).click();
  }

  searchComponent() {
    cy.get(this.searchBox).should("be.visible");
  }
  searchDropdown() {
    cy.get(this.searchDropdownfield).click();
  }

  // searchDropdownOptions(tags) {
  //   cy.get("select").select(tags);
  //   cy.get("select option:selected").should("have.text", tags);
  // }

  searchDropdownValue(tags, string) {
    cy.get("select").select(tags);

    cy.get(this.searchBoxInput).type(string);

    cy.get(this.searchIcon).click();

    cy.url().should("include", string).should("include", tags);
  }

  searchWithoutDropdown(string, tags) {
    cy.get(this.searchBoxInput).type(string);

    cy.get(this.searchIcon).click();

    cy.url().should("include", string).should("include", tags);
  }

  //card component

  // textcardwithCTA() {
  //   cy.get(this.textcardwithCTAComponent).should("be.visible");
  // }

  // cardElements() {
  //   cy.get(this.textcardwithCTATitle).should("be.visible");
  //   cy.get(this.textcardwithCTATitle).should(
  //     "have.css",
  //     "font-family",
  //     "Poppins, sans-serif"
  //   );
  //   cy.get(this.textcardwithCTADescription).should("be.visible");
  //   cy.get(this.textcardwithCTADescription).should(
  //     "have.css",
  //     "font-family",
  //     "Roboto, sans-serif"
  //   );
  //   cy.get(this.textcardCTA).should("be.visible");
  // }

  // CTAresponse() {
  //   cy.get(this.textcardCTAAnchor).each(($link) => {
  //     const linkHref = $link.attr("href");
  //     cy.log("link is: " + linkHref);
  //     expect(linkHref, "Link should have an href attribute").to.not.be.empty;
  //     cy.request(linkHref).then((response) => {
  //       expect(response.status).to.equal(200);
  //     });
  //   });
  // }

  // cardBackground() {
  //   cy.get(this.cardBG).should(
  //     "have.css",
  //     "background-color",
  //     "rgb(255, 255, 255)"
  //   );
  // }

  // cardTextwithoutCTA() {
  //   cy.get(this.textCardWOCTA).should("be.visible");
  // }

  // cardTextTitleDesc() {
  //   cy.get(this.textCardWOCTATitle).should("be.visible");
  //   cy.get(this.textCardWOCTATitle).should(
  //     "have.css",
  //     "font-family",
  //     "Poppins, sans-serif"
  //   );
  //   cy.get(this.textCardWOCTADescription).should("be.visible");
  //   cy.get(this.textcardwithCTADescription).should(
  //     "have.css",
  //     "font-family",
  //     "Roboto, sans-serif"
  //   );
  // }
  // cardTextWObackgroundcolor() {
  //   cy.get(this.textCardWOCTABG).should(
  //     "have.css",
  //     "background-color",
  //     "rgb(255, 255, 255)"
  //   );
  // }
  // factCardsComponent() {
  //   cy.get(this.factCardComponent).should("be.visible");
  // }
  // factCardBackground() {
  //   cy.get(this.factCardBG).should(
  //     "have.css",
  //     "background-color",
  //     "rgb(255, 238, 132)"
  //   );
  // }
  // factCardsTitle() {
  //   cy.get(this.factCardTitle).should("be.visible");
  //   cy.get(this.factCardTitle).should(
  //     "have.css",
  //     "font-family",
  //     "Poppins, sans-serif"
  //   );
  // }
  // factCardsDesc() {
  //   cy.get(this.factCardDescription).should("be.visible");
  //   cy.get(this.factCardDescription).should(
  //     "have.css",
  //     "font-family",
  //     "Poppins, sans-serif"
  //   );
  // }
  // factCardsCenter() {
  //   cy.get(this.factCardTitle).should("have.css", "text-align", "center");
  //   cy.get(this.factCardDescription).should("have.css", "text-align", "center");
  // }

  // costCardComponenet() {
  //   cy.get(this.costCard).should("be.visible");
  // }
  // costTitle() {
  //   cy.get(this.costCardTitle).should("be.visible");
  //   cy.get(this.costCardTitle).should(
  //     "have.css",
  //     "font-family",
  //     "Poppins, sans-serif"
  //   );
  // }
  // costCardCost() {
  //   cy.get(this.costCardDesc).should("be.visible");
  //   cy.get(this.costCardDesc).should(
  //     "have.css",
  //     "font-family",
  //     "Poppins, sans-serif"
  //   );
  // }
  // costCardDate() {
  //   cy.get(this.costCardSubTitle).should("be.visible");
  //   cy.get(this.costCardSubTitle).should(
  //     "have.css",
  //     "font-family",
  //     "Roboto, sans-serif"
  //   );
  // }

  // costCardCTABttn() {
  //   cy.get(this.costCardCTA).should("be.visible");
  //   cy.get(this.costCardCTA).each(($link) => {
  //     const linkHref = $link.attr("href");
  //     cy.log("link is: " + linkHref);
  //     expect(linkHref, "Link should have an href attribute").to.not.be.empty;
  //     cy.request(linkHref).then((response) => {
  //       expect(response.status).to.equal(200);
  //     });
  //   });
  // }

  // costCardWhiteColour() {
  //   cy.get(this.costCardBG).should(
  //     "have.css",
  //     "background-color",
  //     "rgb(255, 255, 255)"
  //   );
  // }

  // tagsCardsComponent() {
  //   cy.get(this.tagCard).should("be.visible");
  // }
  // tagsCardsTitle() {
  //   cy.get(this.tagCardTitle).should("be.visible");
  //   cy.get(this.tagCardTitle).should(
  //     "have.css",
  //     "font-family",
  //     "Poppins, sans-serif"
  //   );
  // }
  // tagsCardsDesc() {
  //   cy.get(this.tagCardDesc).should("be.visible");

  //   cy.get(this.tagCardDesc).should(
  //     "have.css",
  //     "font-family",
  //     "Roboto, sans-serif"
  //   );
  // }
  // tagsCardBttn() {
  //   cy.get(this.tagCardCTAtags).should("be.visible");
  // }

  // tagsCardBttnResponse() {
  //   cy.get(this.tagCardTagsAnchor).each(($link) => {
  //     const linkHref = $link.attr("href");
  //     cy.log("link is: " + linkHref);
  //     expect(linkHref, "Link should have an href attribute").to.not.be.empty;
  //     cy.request(linkHref).then((response) => {
  //       expect(response.status).to.equal(200);
  //     });
  //   });
  // }

  //Hero banner variations

  titleTextColour() {
    cy.get(this.titleText)
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .should("have.css", "text-align", "center");

    cy.get(this.titleText).then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "after");
      const bgColor = after.getPropertyValue("color");
      expect(bgColor).to.eq("rgb(255, 238, 132)");
    });
  }

  subTextCSS() {
    cy.get(this.subTitleText)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "20px");
  }

  searchDropdownColor() {
    cy.get(this.herosearchDropdown).should(
      "have.css",
      "background-color",
      "rgb(253, 234, 116)"
    );
  }

  // searchDropdownVisible(tags) {
  //   cy.get(".searchbox select").select(tags);
  //   cy.get(".searchbox select option:selected").should("have.text", tags);
  // }

  // searchDropdownValue(tags, string) {
  //   cy.get(".searchbox select").select(tags);

  //   cy.get(this.searchTextField).type(string);

  //   cy.get(this.searchIcon).click();

  //   cy.url().should("include", string).should("include", tags);
  // }

  verifyTitleTextCSS() {
    cy.get(this.titleText)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "100px");
  }

  verifySubtitleTextCSS() {
    cy.get(this.subTitleCSS)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "130px")
      .should("have.css", "color", "rgb(45, 70, 110)");
  }

  verifyParaTextCSS() {
    cy.get(this.subTitleTextwithPara)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "18px")
      .should("have.css", "line-height", "28px");
  }

  verifyBttnRedirection() {
    cy.get(this.buttonLandingPage).eq(0).should("be.visible");
    cy.get(this.buttonLandingPage).eq(0).invoke("removeAttr", "target").click();
    cy.url().then(($url) => {
      var wholeUrl = $url;
      cy.request(wholeUrl).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
  }

  verifyBttnTextCSS() {
    cy.get(this.buttontextLandingPage)
      .eq(0)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "14px")
      .should("have.css", "text-align", "center");
  }

  titleTextCSS() {
    cy.get(this.titleText)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "color", "rgb(68, 68, 68)")
      .should("have.css", "font-size", "100px")
      .should("have.css", "text-align", "center");
  }

  verifyNobackgrndImage() {
    cy.get(this.backgrndImage).should("not.exist");
  }

  verifySubTextImage() {
    cy.get(this.subTitleText).should("not.exist");
  }

  SubTitleTextCSS() {
    cy.get(this.subTitleTextwithParaCopy)
      .should("be.visible")
      .should("have.css", "font-family", "Roboto, sans-serif")
      .should("have.css", "color", "rgb(68, 68, 68)")
      .should("have.css", "font-size", "18px")
      .should("have.css", "text-align", "center");
  }

  verifybackgrndImage() {
    cy.get(this.backgrndImageExists).eq(0).should("be.visible");
  }

  titleTextCSSCategory() {
    cy.get(this.titleText)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "100px")
      .should("have.css", "text-align", "center");
  }

  textYellowColor() {
    cy.get(this.titleText).then(($el) => {
      const win = $el[0].ownerDocument.defaultView;
      const after = win.getComputedStyle($el[0], "after");
      const bgColor = after.getPropertyValue("color");
      expect(bgColor).to.eq("rgb(255, 238, 132)");
    });
  }

  landingpageText() {
    cy.get(this.titleText).eq(0).should("be.visible");
    cy.get(this.subTitleText).eq(0).should("be.visible");
  }

  landingpageWhite() {
    cy.get(this.titleText)
      .eq(0)
      .should("have.css", "color", "rgb(255, 255, 255)");
    cy.get(this.subTitleText)
      .eq(0)
      .should("have.css", "color", "rgb(255, 255, 255)");
  }

  homepagePlaceholders() {
    cy.get(this.homepagePlaceholder).should("be.visible");
  }

  // information
  informationPresence() {
    cy.get(".cmp-information").should("be.visible");
  }

  informationTextPresence(text) {
    cy.get("#text-40c7933c6b").contains(text).should("be.visible");
  }
  verifyDYKText(text, fontFamily) {
    cy.get("#title-7ec57da295 .cmp-title__text")
      .contains(text)
      .should("be.visible")
      .should("have.css", "font-family", fontFamily);
  }
  verifyInfoFont(fontFamily) {
    cy.get("#text-40c7933c6b p").should("have.css", "font-family", fontFamily);
  }

  verifyNextbutton() {
    cy.get("#button-f80a7ccba9").should("be.visible");
    cy.get("#button-f80a7ccba9").each(($link) => {
      const linkHref = $link.attr("href");
      expect(linkHref, "Link should have an href attribute").to.not.be.empty;
      cy.request(linkHref).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  }
}
export { HomePage };