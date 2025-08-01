// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// const { HomePage } = require("../../page/smilegen-site/components");

// const homePage = new HomePage();

// // css locators
// var tablist = "li.cmp-tabs__tab";

// // navigate to page url
// Given("I am on the {string} homepage", (homepage) => {
//   homePage.homepagewebsite(homepage);
// });

// // navigate to accordion section
// Then("I navigate to Accordion component in Specifications section", () => {
//   homePage.accordianSection();
// });

// // expand accordion section
// And("Clicking on + icon opens all links", () => {
//   homePage.plusAccordianClick();
// });

// // collapse accordion section
// And("Clicking on - icon closes all links", () => {
//   homePage.minusAccordianClick();
// });
// And(
//   "Clicking on first acoordion to expand and take a final screenshot of component",
//   () => {
//     homePage.singleAccordionClick();
//   }
// );

// When("I verify that the newsletter component is present", () => {
//   homePage.newsLetterPresent();
// });

// And("I verify the subscribe text box", () => {
//   homePage.newsLetterTextbox();
// });

// And(
//   "I enter a valid email id {string} in the subscribe text box",
//   (validEmail) => {
//     homePage.newsLetterTextboxValid(validEmail);
//   }
// );

// And("I click on the subscribe button", () => {
//   homePage.newsLetterSubscribeBttn();
// });

// Then("I should see a confirmation message", () => {
//   homePage.newsLetterConfirmation();
// });

// And("the confirmation message font family should be {string}", (fontFamily) => {
//   homePage.newsLetterConfirmationFontFamily(fontFamily);
// });

// And("the confirmation message color should be black {string}", (fontColor) => {
//   homePage.newsLetterConfirmationFontColor(fontColor);
// });

// When(
//   "I enter an invalid email id {string} in the subscribe text box",
//   (invalidEmail) => {
//     homePage.newsLetterTextboxInvalid(invalidEmail);
//   }
// );

// Then("I should see a failure message", () => {
//   homePage.newsLetterFailure();
// });

// And("the failure message font family should be {string}", (fontFamily) => {
//   homePage.newsLetterFailureFontFamily(fontFamily);
// });

// And("the failure message color should be red {string}", (fontColor) => {
//   homePage.newsLetterFailureFontColor(fontColor);
// });

// When("I locate the newsletter component title element", () => {
//   homePage.newsLetterTitleVisible();
// });
// And("the title should be of h3 style", () => {
//   homePage.newsLetterTitleHeading();
// });

// And("the title font family should be {string}", (fontFamily) => {
//   homePage.newsLetterTitleFontFamily(fontFamily);
// });

// And("the body text font family should be {string}", (fontFamily) => {
//   homePage.newsLetterBodyFontFamily(fontFamily);
// });

// And("the subscribe text font family should be {string}", (fontFamily) => {
//   homePage.newsLetterSubscribeFontFamily(fontFamily);
// });

// Then("I check the link text in the table for text comparison", (dataTable) => {
//   homePage.tabList(dataTable, tablist);
// });
// // And("I click on each {string} and verify the {string} and text link", (links, currenturl) =>
// // {
// //   homePage.clickLink(links, currenturl, tablist);
// // });
// And(
//   "I click on each link text and verify the {string} {string} and text link",
//   (url1, url2) => {
//     homePage.tabTextLinksClick(url1, url2);
//   }
// );
// And("I ensure that the active tab is highlighted with an orange color", () => {
//   homePage.tabHighlighted();
// });
// // RTE component

// Then("I navigate to the RTE component on the page", () => {
//   homePage.navigateToRTE();
// });

// And("then verify the heading should be in H1 to H6 in the component", () => {
//   homePage.rteHeading();
// });

// And("then verify the font styling of heading H1 to H6 in RTE component", () => {
//   homePage.verifyHeadingFont();
// });

// And(
//   "then verify the Paragraph text and its font styling in RTE component",
//   () => {
//     homePage.verifyPara();
//   }
// );

// // Search Component in primary nav
// // Then("the search icon should be present on primary Nav", () => {
// //   homePage.navSearch();
// // });

// // Search Component on Banner
// Then("the search component with dropdown should be present on banner", () => {
//   homePage.searchComponent();
// });

// // And("the user clicks on the dropdown", () => {
// //   homePage.searchDropdown();
// // });

// // Then("the search dropdown should appear with {string}", (tags) => {
// //   homePage.searchDropdownOptions(tags);
// // });
// // When(
// //   "the user selects {string} and user performs a search {string} then URL should contain selected tag and searched text in URL",
// //   (tags, string) => {
// //     homePage.searchDropdownValue(tags, string);
// //   }
// // );

// // Then(
// //   "the search component without dropdown should be present on banner",
// //   () => {
// //     homePage.searchComponent();
// //   }
// // );
// // When(
// //   "User performs a search {string} then URL should contain searched text and {string} tag",
// //   (string, tags) => {
// //     homePage.searchWithoutDropdown(string, tags);
// //   }
// // );
// //card component
// // When("the user views the text cards", () => {
// //   homePage.textcardwithCTA();
// // });

// // And(
// //   "each card with CTA should have a Title, Description and CTA button",
// //   () => {
// //     homePage.cardElements();
// //   }
// // );
// // And("verify the CTA response is 200", () => {
// //   homePage.CTAresponse();
// // });

// // And("the background color of each text card should be white", () => {
// //   homePage.cardBackground();
// // });

// // And("the user views the text cards without CTA", () => {
// //   homePage.cardTextwithoutCTA();
// // });

// // And("each card without CTA should have a Title and Description", () => {
// //   homePage.cardTextTitleDesc();
// // });

// // And(
// //   "the background color of each Text card without CTA should be white",
// //   () => {
// //     homePage.cardTextWObackgroundcolor();
// //   }
// // );

// // And("the user views the fact card", () => {
// //   homePage.factCardsComponent();
// // });

// // Then("the fact card should have a yellow background", () => {
// //   homePage.factCardBackground();
// // });

// // And("the fact card should display a Title", () => {
// //   homePage.factCardsTitle();
// // });

// // And("the fact card should display a Subtitle", () => {
// //   homePage.factCardsDesc();
// // });

// // And("title, subtitle should be center aligned", () => {
// //   homePage.factCardsCenter();
// // });

// // And("the user views the cost cards", () => {
// //   homePage.costCardComponenet();
// // });

// // And("each card should have a Title", () => {
// //   homePage.costTitle();
// // });

// // And("each card should have a Cost displayed", () => {
// //   homePage.costCardCost();
// // });

// // And("each card should have a Date displayed", () => {
// //   homePage.costCardDate();
// // });

// // And("each card should have a CTA link, verify the CTA response is 200", () => {
// //   homePage.costCardCTABttn();
// // });

// // And("the background color of each cost card should be white", () => {
// //   homePage.costCardWhiteColour();
// // });

// // And("the user views the tags cards", () => {
// //   homePage.tagsCardsComponent();
// // });

// // And("each tags card should have a Title", () => {
// //   homePage.tagsCardsTitle();
// // });

// // And("each tags card should have a Description", () => {
// //   homePage.tagsCardsDesc();
// // });

// // And("each card should have Tags", () => {
// //   homePage.tagsCardBttn();
// // });

// // And(
// //   "if a specific tag is present with a CTA, verify the CTA response is 200",
// //   () => {
// //     homePage.tagsCardBttnResponse();
// //   }
// // );
// // hero variations
// Then(
//   "I verify the title text with white first part and yellow last word",
//   () => {
//     homePage.titleTextColour();
//   }
// );

// And("I verify the subtext font and size", () => {
//   homePage.subTextCSS();
// });

// And("I verify the dropdown with yellow background", () => {
//   homePage.searchDropdownColor();
// });

// // Then("the search dropdown should appear with {string}", (tags) => {
// //   homePage.searchDropdownVisible(tags);
// // });

// And("I verify the search field with ghost text", () => {
//   homePage.homepagePlaceholders();
// });

// // When(
// //   "the user selects {string} and user performs a search {string} then URL should contain selected tag and searched text in URL",
// //   (tags, string) => {
// //     homePage.searchDropdownValue(tags, string);
// //   }
// // );

// Then("I verify the heading text and UI", () => {
//   homePage.verifyTitleTextCSS();
// });

// And("I verify the subheading with price text and UI", () => {
//   homePage.verifySubtitleTextCSS();
// });

// And("I verify the paragraph text and UI", () => {
//   homePage.verifyParaTextCSS();
// });

// Then("I verify the button UI", () => {
//   homePage.verifyBttnTextCSS();
// });

// And(
//   "I click the button that navigates to a particular page with a 200 response",
//   () => {
//     homePage.verifyBttnRedirection();
//   }
// );

// And("I verify the title UI", () => {
//   homePage.titleTextCSS();
// });

// And("there should be no background image", () => {
//   homePage.verifyNobackgrndImage();
// });

// And("there should be no subtext", () => {
//   homePage.verifySubTextImage();
// });

// And("I verify the subtext UI", () => {
//   homePage.SubTitleTextCSS();
// });

// Then("there should be a background image", () => {
//   homePage.verifybackgrndImage();
// });

// And("I verify the text UI", () => {
//   homePage.titleTextCSS();
// });

// And("I verify the text with yellow last word", () => {
//   homePage.textYellowColor();
// });

// And("I verify the text UI on Category Variation", () => {
//   homePage.titleTextCSSCategory();
// });

// And("I verify the text presence", () => {
//   homePage.landingpageText();
// });

// And("I verify the text color is white", () => {
//   homePage.landingpageWhite();
// });
// Then("I should see a page with the information box", () => {
//   homePage.informationPresence();
// });

// And("the text in the information box should contain {string}", (text) => {
//   homePage.informationTextPresence(text);
// });

// And("the {string} text should be {string}", (text, fontFamily) => {
//   homePage.verifyDYKText(text, fontFamily);
// });

// And("the other text should be {string}", (fontFamily) => {
//   homePage.verifyInfoFont(fontFamily);
// });

// And("I click on the button, response should be 200", () => {
//   homePage.verifyNextbutton();
// });

