
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import sectionHeadingObj from "../../pageObjects/sectionHeadingObj";

const gmBrand=new sectionHeadingObj();

// Section Heading component validation

Given("I open chevrolet brand page", ()=>{
    cy.visit(Cypress.env('url')+"/chevrolet/na/us/en/accessories/adobe-test/automation/testsectionheading.html");
})

When('I see section heading component in the page',function(){
    gmBrand.validatePageCompletelyLoaded();
})

Then('section heading component contains title, description and CTA button',function(){
    gmBrand.getTitle();
    gmBrand.getDescription();
    gmBrand.getCTAbutton();
})

Then('I click on the CTA button',function(){
    gmBrand.getButton();
})





