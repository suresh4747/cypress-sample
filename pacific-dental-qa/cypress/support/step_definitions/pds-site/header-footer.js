import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { HomePage } = require("../../page/pds-site/header-footer");

const homePage = new HomePage();

// css locators
var copyrightfooter = ".cmp-footer__copyright";
var socialMediaIcons = ".cmp-footer__copyright--social .image a";

// Scroll to Footer
And("I scroll to the footer section", () => {
  homePage.footerScroll();
});

// Verify the links in the list
Then("I should see the following links text", (dataTable) => {
  cy.log(
    "number of copyright footer links to validate: " + dataTable.hashes().length
  );
  homePage.footerCopyrightLinks(dataTable, copyrightfooter);
});

// Click on the links
When("I click on the {string} link in the Footer", (link) => {
  homePage.clickLink(link, copyrightfooter);
});

// Verify the response 200
Then(
  "I should be navigated to the {string} page and status code should be 200",
  (currenturl) => {
    homePage.urlRedirection(currenturl);
  }
);
// verify social media icons
Then("I should see the following social media icons", (dataTable) => {
  homePage.socialMediaLinks(dataTable, socialMediaIcons);
});

And("I click on each social media icon {string}", (link) => {
  homePage.clickSocialMediaIcons(link, socialMediaIcons);
});

Then(
  "I should be redirected to the correct social media URL {string} for each icon",
  (currenturl) => {
    homePage.urlRedirection(currenturl);
  }
);
