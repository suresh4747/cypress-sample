/**
 *This class contains page objects and methods related to compare page
 *
 * @class HomePage
 */
class HomePage {
  // css locators
  bannerTitle = "h1.cmp-teaser__title";
  mainHeroImages =
    ".cmp-teaser--main-hero .cmp-teaser__image img.cmp-image__image";
  secHeroImages =
    ".cmp-teaser--secondary-hero .cmp-teaser__image img.cmp-image__image";
  secHeroCopyImages =
    ".cmp-teaser--secondary-hero-with-copy .cmp-teaser__image img.cmp-image__image";
  promoHeroImages =
    ".cmp-teaser--promo-hero .cmp-teaser__image img.cmp-image__image";
  teritiaryHeroBanner = ".cmp-teaser--tertiary-hero";

  //verify Hero Banner
  webPageNavigation(url) {
    cy.navigateToUrl(url);
  }

  bannerSection(bannerSectionCSS) {
    cy.get(bannerSectionCSS).should("be.visible");
  }
  mainHeroImage() {
    cy.get(this.mainHeroImages).should("be.visible");

    cy.get(this.mainHeroImages).should("have.attr", "width", "1921");
  }
  bannerImage(bannerImageCSS) {
    cy.get(bannerImageCSS).should("be.visible");

    cy.get(bannerImageCSS).should("have.attr", "width", "1920");
  }

  BannerTitleCSS(BannerTitleCSS) {
    cy.get(this.bannerTitle).should("be.visible");
    cy.get(this.bannerTitle).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif"
    );
  }
  // verify teitiary Hero Banner
  teritiarybannersectionColor() {
    cy.get(this.teritiaryHeroBanner).should(
      "have.css",
      "background-color",
      "rgb(247, 248, 252)"
    );
  }
}
export { HomePage };
