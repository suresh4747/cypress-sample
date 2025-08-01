
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import disclaimerObj from "../../pageObjects/disclaimerObj";


const Disclaimer=new disclaimerObj();

// Disclaimer component validation

Given("I go to the chevrolet brand page", ()=>{
    cy.visit(Cypress.env('url')+"/chevrolet/na/us/en/accessories/adobe-test/automation/testsectionheading.html");
})

When('I see that section heading component in the page',function(){
    Disclaimer.validatePageCompletelyLoaded();
})

Then('I click on the title in the page',function(){
    Disclaimer.getDisclaimer()
})

Then ('I see the disclaimer is appearing in the page with close button',function(){
    Disclaimer.disclaimerPopUp();
})

Then ('I click on close button disclaimer popup is closed',function(){
    Disclaimer.closeButton()
})

Then('I see the scrollbar is apearing below close button and scroll down to the bottom',function(){
    Disclaimer.scrollBarDiscalimer();
})

Then('I see the text present in the description is highlighted and clickable',function(){
    Disclaimer.scrollBarDiscalimer();
    Disclaimer.descriptionLink();
})

Then('on hovering over text I see the link is present in the description text', function(){
    Disclaimer.scrollBarDiscalimer();
    Disclaimer.linkOnMousehover();
})







