/**
 *This class contains page objects and methods related to compare page
 *
 * @class HomePage
 */

 class HomePage {
  // css locators
  homepagemouthbodyfooter = ".cmp-footer__column:nth-of-type(1)";
  FooterlinksText = ".cmp-title__text";
  smilegenlinkFooter = ".cmp-footer__copyright--social";
  dentistbttnScope = ".cmp-button .cmp-button__text";
  dentistbttnCSSColor = "[class*='cmp-button--cta'] a.cmp-button";
  searchIcon = ".cmp-button--search";
  searchTextField = ".cmp-search__search-input";
  innerSearchIcon = ".cmp-search__search-icon";
  stickynavBar = "[class*='is-sticky']";
  secondarynavBar = ".cmp-navigation__item-link";
  flyoutOpen = "[class*='active']";
  linksText = ".cmp-title__text";
  footerParaOne = ".cmp-footer__disclaimer p:nth-child(1)";
  footerParaTwo = ".cmp-footer__disclaimer p:nth-child(3)";
  footerParaThree = ".cmp-footer__disclaimer p:nth-child(4)";
  bannerCllr = ".landing-page-header";
  searchDropdown = ".cmp-search__search-input";
  darktextNavBar = ".cmp-navigation__item-link";
  findaDentistBttn = ".cmp-button--primary .cmp-button__text";
  solidNavBar = ".cmp-header--fixed";
  primaryBttn = "#button-56d4ed44b6";
  primaryBttntext = "#button-56d4ed44b6 .cmp-button__text";
  secondaryBttnDark = "#button-717d038eff";
  secondaryBttntextDark = "#button-717d038eff .cmp-button__text";
  secondaryBttnWhite = "#button-1d11286564";
  secondaryBttntextWhite = "#button-1d11286564 .cmp-button__text";
  underlineBttnDark = "#button-7b3930fee1";
  underlineBttntextDark = "#button-7b3930fee1 .cmp-button__text";
  underlineBttntextWhite = "#button-73666e4b8f .cmp-button__text";





  homepagewebsite(homepageURL) {
    cy.navigateToHomepage(homepageURL);
  }

  // Navigation to Page
  homepageNavigation(url) {
    cy.navigateToUrl(url);
  }

  // Scroll to Footer
  footerScroll() {
    cy.get(this.homepagemouthbodyfooter).scrollIntoView();
  }

  // Verify 1st column Title
  mouthbodyConnect(String) {
    cy.get(this.FooterlinksText)
      .contains(String)
      .should("have.text", "MOUTH BODY CONNECTION");
  }

  // Verify 2nd column Title
  dentalservices(String) {
    cy.get(this.FooterlinksText)
      .contains(String)
      .should("have.text", "DENTAL SERVICES");
  }

  // Verify 3rd column Title
  paymentoption(String) {
    cy.get(this.FooterlinksText)
      .contains(String)
      .should("have.text", "PAYMENT OPTIONS");
  }

  // Verify 4th column Title
  howwegive(String) {
    cy.get(this.FooterlinksText)
      .contains(String)
      .should("have.text", "HOW WE GIVE");
  }

  // Verify 5th column Title
  about(String) {
    cy.get(this.FooterlinksText).contains(String).should("have.text", "ABOUT");
  }

  // Verify footerlinks title
  footerColumnLinks(dataTable, css) {
    var actualFooterTitleItems = [];
    var expectedFooterTitleItems = [];

    cy.get(css).as("footerTileElements");
    cy.log("TileCount : " + "@footerTileElements".length);

    cy.get("@footerTileElements")
      .find(".cmp-list__item-title")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .each(($element, index, list) => {
        actualFooterTitleItems.push($element.text().trim());
      })
      .then(actualFooterTitleItems, () => {
        actualFooterTitleItems = actualFooterTitleItems.sort();
        cy.log("Length of actual items : " + actualFooterTitleItems.length);
        expectedFooterTitleItems = dataTable.rawTable.slice(1).flat().sort();
        cy.log("Length of expected items : " + expectedFooterTitleItems.length);
        cy.log("Actual title of tiles : " + actualFooterTitleItems);
        cy.log("Expected title of tiles : " + expectedFooterTitleItems);
        expect(actualFooterTitleItems).to.deep.equal(expectedFooterTitleItems);
      });
  }

  //Click on links
  clickLink(link, css) {
    cy.get(css).find(".cmp-list__item-title").contains(link).as("footerlink");
    cy.get("@footerlink").click();
  }

  // Verify URL response 200
  urlRedirection(currenturl) {
    cy.url().then(($url) => {
      var wholeUrl = $url;
      cy.url().should("include", currenturl);
      //cy.wait(3000);
      cy.request(wholeUrl).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
  }

  // Verify footer legal title
  footerLegalLinks(dataTable, css) {
    var actualFooterLegalTitle = [];
    var expectedFooterLegalTitle = [];

    cy.get(css).as("footerLegalElements");
    cy.log("TileCount : " + "@footerLegalElements".length);

    cy.get("@footerLegalElements")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .each(($element, index, list) => {
        actualFooterLegalTitle.push($element.text().trim());
      })
      .then(actualFooterLegalTitle, () => {
        actualFooterLegalTitle = actualFooterLegalTitle.sort();
        cy.log("Length of actual items : " + actualFooterLegalTitle.length);
        expectedFooterLegalTitle = dataTable.rawTable.slice(1).flat().sort();
        cy.log("Length of expected items : " + expectedFooterLegalTitle.length);
        cy.log("Actual legal title : " + actualFooterLegalTitle);
        cy.log("Expected legal title : " + expectedFooterLegalTitle);
        expect(actualFooterLegalTitle).to.deep.equal(expectedFooterLegalTitle);
      });
  }

  clickLegalLinks(Text, css) {
    cy.get(css).contains(Text).as("footerlegallink");
    cy.get("@footerlegallink").click();
  }

  // Verify social media icons/links
  socialMediaLinks(dataTable, css) {
    var actualFooterSocialIcons = [];
    var expectedFooterSocialIcons = [];

    cy.get(css).as("footerSocialIcons");
    cy.get("@footerSocialIcons").should("have.length", 5);

    cy.get("@footerSocialIcons")
      .each((links, index, list) => {
        let url = links.prop("href");
        actualFooterSocialIcons.push(url.trim());
      })
      .then(actualFooterSocialIcons, () => {
        cy.log("Length of actual items : " + actualFooterSocialIcons.length);
        expectedFooterSocialIcons = dataTable.rawTable.slice(1).flat();
        cy.log(
          "Length of expected items : " + expectedFooterSocialIcons.length
        );
        cy.log("Actual Social Icons : " + actualFooterSocialIcons);
        cy.log("Expected Social Icons : " + expectedFooterSocialIcons);
        expect(actualFooterSocialIcons).to.deep.equal(
          expectedFooterSocialIcons
        );
      });
  }

  clickSocialMediaIcons(link, css) {
    cy.get("[href*='" + link + "']")
      .invoke("removeAttr", "target")
      .click();
    cy.url().should("include", link);
  }

  // verify smilegen link in footer
  smilegenlink(smilegenLink, css) {
    cy.get(css)
      .contains(smilegenLink)
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("be.visible");
  }

  smilegenhref(css, hrefValue) {
    cy.get(css).find(".cmp-button").should("have.attr", "href", hrefValue);
  }

  smilegenTargetFooter(css, targetValue) {
    cy.get(css).find(".cmp-button").should("have.attr", "target", targetValue);
  }

  //verify smilegen header logo
  smilegenLogoHeader(smilegenlogoHeader) {
    cy.get(smilegenlogoHeader).click({ force: true });
  }

  //verify smilegen header Navigation
  smilegenLogoHeaderNav() {
    cy.url().should("include", Cypress.env("qa"));
    cy.go("back");
  }

  smilegenhrefHeader(smilegenHeaderHref, hrefValue) {
    cy.get(smilegenHeaderHref).should("have.attr", "href", hrefValue);
  }

  smilegenTargetHeader(smilegenlinkHeader, targetValue) {
    cy.get(smilegenlinkHeader).should("have.attr", "target", targetValue);
  }

  //verify smilegen header find a dentist CTA
  findDentistbttn(Dentistbttn) {
    cy.get(this.dentistbttnScope).contains(Dentistbttn).should("be.visible");
  }

  dentistnttnColor() {
    cy.get(this.dentistbttnCSSColor).should(
      "have.css",
      "background-color",
      "rgb(253, 234, 116)"
    );
  }

  clickDentistbttn(Dentistbttn) {
    cy.get(this.dentistbttnScope).contains(Dentistbttn).click();
  }

  redirectionDentistbttn(dataTable) {
    var expectedURL = [];
    expectedURL = dataTable.rawTable.slice(1).flat();
    cy.url().should("include", expectedURL);
  }

  dentisturlRedirection() {
    cy.url().then(($url) => {
      var wholeUrl = $url;
      cy.request(wholeUrl).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
  }

  //verify header search icon
  searchIconHeader() {
    // cy.get(this.homepagemouthbodyfooter).scrollIntoView();
    cy.get(this.searchIcon).should("be.visible");
  }

  searchPrimNav() {
    //cy.get(this.searchIcon).should("be.visible");
    cy.get(this.searchIcon).click();
  }

  searchIconDropdown() {
    cy.get(this.searchDropdown).click();
  }

  searchDropdownVisible(tags) {
    cy.get(".cmp-search__custom-dropdown select").select(tags);
    cy.get(".cmp-search__custom-dropdown select option:selected").should("have.text", tags);
  }

  searchDropdownValue(tags, string) {
    cy.get(".cmp-search__custom-dropdown select").select(tags);

    cy.get(this.searchTextField).type(string);

    cy.get(this.innerSearchIcon).click();

    cy.url().should("include", string).should("include", tags);
  }


  //verify sticky nav
  scrollbyPixel400() {
    cy.scrollTo(0, 500);
  }

  scrollbyPixel700() {
    cy.scrollTo(0, 700);
  }

  navbarSticky() {
    cy.get(this.stickynavBar).should("be.visible");
  }

  scrolltoTop() {
    cy.scrollTo("top");
  }

  navbarnotSticky() {
    cy.get(this.stickynavBar).should("not.exist");
  }

  secondayBar(navName) {
    cy.get(this.secondarynavBar).contains(navName).should("be.visible");
    cy.get(this.secondarynavBar).contains(navName).click();
    cy.get(this.flyoutOpen).should("be.visible");
  }

  secondayBarOptions(col1, col2) {
    cy.get(this.linksText).contains(col1).should("be.visible");
    cy.get(this.linksText).contains(col2).should("be.visible");
  }

  // Verify secondary navigation links
  getLinks(dataTable, css) {
    var actualItems = [];
    var expectedItems = [];

    cy.get(css).as("getLinks");

    cy.get("@getLinks")
      .each(($element, index, list) => {
        actualItems.push($element.text().trim());
      })
      .then(actualItems, () => {
        actualItems = actualItems.sort();
        cy.log("Length of actual items : " + actualItems.length);
        expectedItems = dataTable.rawTable.slice(1).flat().sort();
        cy.log("Length of expected items : " + expectedItems.length);
        cy.log("Actual title of tiles : " + actualItems);
        cy.log("Expected title of tiles : " + expectedItems);
        expect(actualItems).to.deep.equal(expectedItems);
      });
  }

  // Verify URL response 200
  urlResponse(css) {
    cy.get(css).each(($link) => {
      const linkHref = $link.attr("href");
      expect(linkHref, "Link should have an href attribute").to.not.be.empty;
      cy.request(linkHref).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  }

  footerParagraph() {
    cy.get(this.footerParaOne)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif");
    cy.get(this.footerParaTwo)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif");
    cy.get(this.footerParaThree)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif");
  }

  transparentCllr() {
    cy.get(this.bannerCllr).should("be.visible");
  }

  bttnBorder(downloadFreeBook) {
    cy.get(downloadFreeBook).should("be.visible");
    cy.get(downloadFreeBook).should("have.css", "border-radius", "3px");
  }

  smilegenlinkhref(css, hrefValue) {
    cy.get(css).should("have.attr", "href", hrefValue);
  }

  menuColours() {
    cy.get(this.secondarynavBar)
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 255, 255)");
  }

  menuFontSize(secondarynavBar) {
    cy.get(secondarynavBar)
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "18px");
  }

  mouthBodyImages(mouthbodyImageone, mouthbodyImagetwo) {
    cy.get(mouthbodyImageone).should("be.visible");
    cy.get(mouthbodyImagetwo).should("be.visible");
  }

  mouthBodyDescription(mouthbodyDescOne, mouthbodyDescTwo) {
    cy.get(mouthbodyDescOne).should("be.visible");
    cy.get(mouthbodyDescTwo).should("be.visible");
  }

  mouthBodyButton(mouthbodyBttnOne, mouthbodyBttnTwo, mouthbodyBttnThree) {
    cy.get(mouthbodyBttnOne).should("be.visible");
    cy.get(mouthbodyBttnTwo).should("be.visible");
    cy.get(mouthbodyBttnThree).should("be.visible");
  }

  dentalservicesImages(dentalservicesImage) {
    cy.get(dentalservicesImage).should("be.visible");
  }

  dentalservicesDescription(dentalservicesDesc) {
    cy.get(dentalservicesDesc).should("be.visible");
  }

  dentalservicesButton(dentalservicesBttnOne, dentalservicesBttnTwo) {
    cy.get(dentalservicesBttnOne).should("be.visible");
    cy.get(dentalservicesBttnTwo).should("be.visible");
  }

  paymentOptionsImages(paymentOptionsImageOne, paymentOptionsImageTwo) {
    cy.get(paymentOptionsImageOne).should("be.visible");
    cy.get(paymentOptionsImageTwo).should("be.visible");
  }

  paymentOptionsDescription(paymentOptionsDescOne, paymentOptionsDescTwo) {
    cy.get(paymentOptionsDescOne).should("be.visible");
    cy.get(paymentOptionsDescTwo).should("be.visible");
  }

  paymentOptionsButton(paymentOptionsBttnOne, paymentOptionsBttnTwo) {
    cy.get(paymentOptionsBttnOne).should("be.visible");
    cy.get(paymentOptionsBttnTwo).should("be.visible");
  }

  howwegiveImages(howwegiveImage) {
    cy.get(howwegiveImage).should("be.visible");
  }

  howwegiveDescription(howwegiveDesc) {
    cy.get(howwegiveDesc).should("be.visible");
  }

  howwegiveButton(howwegiveBttnOne,howwegiveBttnTwo) {
    cy.get(howwegiveBttnOne).should("be.visible");
    cy.get(howwegiveBttnTwo).should("be.visible");
  }

  darkTextNavBar() {
    cy.get(this.darktextNavBar)
      .should("be.visible")
      .should("have.css", "color", "rgb(59, 75, 83)");
  }

  darkTextBttn(){
    cy.get(this.findaDentistBttn).contains("FIND A DENTIST").should("be.visible");
  }

  solidNavBarColor(){
    cy.get(this.solidNavBar).should("be.visible").should("have.css", "background-color", "rgb(255, 255, 255)");
  }

  solidNavBarOptions(dataTable) {
    var actualmenuOptions = [];
    var expectedmenuOptions = [];

    cy.get(this.secondarynavBar).as("menuOptions");
    cy.log("Menu Count : " + "@footerLegalElements".length);

    cy.get("@menuOptions")
      .each(($element, index, list) => {
        actualmenuOptions.push($element.text().trim());
      })
      .then(actualmenuOptions, () => {
        actualmenuOptions = actualmenuOptions.sort();
        cy.log("Length of actual items : " + actualmenuOptions.length);
        expectedmenuOptions = dataTable.rawTable.slice(1).flat().sort();
        cy.log("Length of expected items : " + expectedmenuOptions.length);
        cy.log("Actual menu options : " + actualmenuOptions);
        cy.log("Expected menu options : " + expectedmenuOptions);
        expect(actualmenuOptions).to.deep.equal(expectedmenuOptions);
      });
  }

  // Title
  titlefontSize(heading, fontSize, fontFamily) {
    cy.get(".cmp-title " + heading + "")
      .contains("heading")
      .should("be.visible")
      .should("have.css", "font-family", fontFamily)
      .should("have.css", "font-size", fontSize);
  }

  // Button
  primaryBttnCSS() {
    cy.get(this.primaryBttn)
      .should("be.visible")
      .should("have.css", "background-color", "rgb(253, 234, 116)");

    cy.get(this.primaryBttntext)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "14px")
      .should("have.css", "color", "rgb(68, 68, 68)");
  }

  secondaryBttnDarkCSS() {
    cy.get(this.secondaryBttnDark)
      .should("be.visible")
      .should("have.css", "border", "1px solid rgb(68, 68, 68)");

    cy.get(this.secondaryBttntextDark)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "14px")
      .should("have.css", "color", "rgb(68, 68, 68)");
  }

  secondaryBttnWhiteCSS() {
    cy.get(this.secondaryBttnWhite)
      .should("be.visible")
      .should("have.css", "border", "1px solid rgb(255, 255, 255)");

    cy.get(this.secondaryBttntextWhite)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "14px")
      .should("have.css", "color", "rgb(255, 255, 255)");
  }

  underlineBttnDarkCSS() {
    cy.get(this.underlineBttnDark)
      .should("be.visible")
      .should("have.css", "border-bottom-color", "rgb(255, 205, 71)");

    cy.get(this.underlineBttntextDark)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "18px")
      .should("have.css", "color", "rgb(68, 68, 68)");
  }

  underlineBttnWhiteCSS() {
    cy.get(this.underlineBttntextWhite).should("be.visible")
    .should("have.css", "border-bottom-color", "rgb(255, 205, 71)");

    cy.get(this.underlineBttntextWhite)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "18px")
      .should("have.css", "color", "rgb(255, 255, 255)");
  }
}

export { HomePage };


