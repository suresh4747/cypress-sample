
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
Then("I should be visually verifying the {string}", (pagename) => {
  
    cy.takeSnapShotOfPage(pagename);
   
  });

  