import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import heroComponentObj from "../../pageObjects/heroComponentObj";


const heroBannerObj = new heroComponentObj()

// css locators
var heroBannerTitleLoc = "div.cmp-hero-banner__content div.cmp-text>h1"
var heroBannerDescLoc = "div.herobanner div.cmp-hero-banner__content__description>div.cmp-text"

When("I navigate to the {string}", (url) => {
  heroBannerObj.webPageNavigation(url);
});

When("page loads completely", () => {
  heroBannerObj.validatePageCompletelyLoaded();
})

Then("hero banner is present with title {string}", (titleValue) => {
  heroBannerObj.validateTitleOfComponent(heroBannerTitleLoc, titleValue)
})

Then('hero banner is present with description {string}', (descriptionValue) => {
  heroBannerObj.validateDescOfComp(heroBannerDescLoc, descriptionValue )
})
Then('user is able to see hero banner component', () => {
  heroBannerObj.validateHeroBannerComponent();
})

Then('user can see image of {string} configured in hero banner', (imageOf) => {
  heroBannerObj.validateImageInHeroBanner(imageOf);
})

Then('button in hero banner takes user to valid configured link', () => {
  heroBannerObj.validateCTAInHeroBanner();
})

Then('user is able to see multiple hero banner component', () => {
  heroBannerObj.validateMultipleHeroBannerComponent();
})

Then('user can click on video to {string} it', (videoPlayState) => {
  heroBannerObj.validateVideoState(videoPlayState);
})

Then('default action available on volume button of video is {string}', (volumeState) => {
  heroBannerObj.validateVideoVolumeState(volumeState);
})

Then('user can click on sound button to {string} video', (volumeState) => {
  heroBannerObj.clickOnVideoMuteBtn();
  cy.wait(3000)
  heroBannerObj.validateVideoVolumeState(volumeState);
})
