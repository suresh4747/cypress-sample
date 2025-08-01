//  *This class contains page objects and methods related to compare page
//  *
//  * @class HomePage
//  */
class HomePage {
  // css locators
  copyrightfooter = ".cmp-footer__copyright";
  socialMediaIcons = ".cmp-footer__copyright--social .image a";
  FooterlinksText = ".cmp-title__text";
  smilegenlinkFooter = ".cmp-footer__copyright--social";
  dentistbttnScope = ".cmp-button .cmp-button__text";
  dentistbttnCSSColor = "[class*='cmp-button--cta'] a.cmp-button";
  searchIcon = ".cmp-button--search button";

  // Navigation to Page
  homepageNavigation() {
    cy.navigateToUrl("sprint-2-demo/hero-with-cta-center-aligned-.html");
  }
  // Scroll to Footer
  footerScroll() {
    cy.get(this.copyrightfooter).scrollIntoView();
  }

  // Verify footerlinks
  footerCopyrightLinks(dataTable, css) {
    var actualCopyrightFooterItems = [];
    var expectedCopyrightFooterItems = [];

    cy.get(css).as("footerTileElements");
    cy.log("TileCount : " + "@footerTileElements".length);

    cy.get("@footerTileElements")
      .find(".cmp-footer__copyright--links .cmp-text a")
      .each(($element, index, list) => {
        actualCopyrightFooterItems.push($element.text().trim());
      })
      .then(actualCopyrightFooterItems, () => {
        actualCopyrightFooterItems = actualCopyrightFooterItems.sort();
        cy.log("Length of actual items : " + actualCopyrightFooterItems.length);
        expectedCopyrightFooterItems = dataTable.rawTable
          .slice(1)
          .flat()
          .sort();
        cy.log(
          "Length of expected items : " + expectedCopyrightFooterItems.length
        );
        cy.log("Actual title of tiles : " + actualCopyrightFooterItems);
        cy.log("Expected title of tiles : " + expectedCopyrightFooterItems);
        expect(actualCopyrightFooterItems).to.deep.equal(
          expectedCopyrightFooterItems
        );
      });
  }
  // click on footer links

  clickLink(link, css) {
    cy.get(css)
      .find(".cmp-footer__copyright--links .cmp-text a")
      .contains(link)
      .as("footerlink");
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

  // Verify social media icons/links
  socialMediaLinks(dataTable, css) {
    var actualFooterSocialIcons = [];
    var expectedFooterSocialIcons = [];

    cy.get(css).as("footerSocialIcons");
    cy.get("@footerSocialIcons").should("have.length", 4);

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
}
export { HomePage };
