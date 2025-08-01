class HomePage {
  // Navigation to Page
  homepageNavigation() {
    cy.navigateToUrl("sprint-2-demo/hero-with-cta-center-aligned-.html");
  }

  // hero banner variations
  heroPageNavigation(url) {
    cy.navigateToUrl(url);
  }

  herobannerSection(css) {
    cy.get(css).should("be.visible");
  }
  heroimage(css) {
    cy.get(css).should("be.visible");
    cy.get(css).should("have.attr", "width", "1920");
  }
  herotitle(css) {
    cy.get(css)
      .should("be.visible")
      .should("have.css", "font-family")
      .and("match", /serif/);
  }
  herosubheading(css) {
    cy.get(css)
      .should("be.visible")
      .should("have.css", "font-family")
      .and("match", /serif/);
  }
  herocta(css) {
    cy.get(css).should("be.visible");
    cy.get(css).click();
    cy.url().then(($url) => {
      var wholeUrl = $url;
      cy.request(wholeUrl).then((resp) => {
        expect(resp.status).to.eq(200);
        cy.go("back");
      });
    });
  }
}
export { HomePage };
