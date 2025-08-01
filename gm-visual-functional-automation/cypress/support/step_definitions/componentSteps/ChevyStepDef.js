
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import sectionHeading from "../../pageObjects/GMbrand";

const gmBrand=new sectionHeading();
//const productPage=new ProductPage();
let title

Given("I open chevrolet brand page", ()=>{
    cy.visit(Cypress.env('url')+"/chevrolet/na/us/en/accessories/adobe-test/automation/testsectionheading.html");
})

When('I see section heading component in the page',function(){
    gmBrand.getTitle();
    gmBrand.getDescription();
    gmBrand.getCTAbutton()
    
    //this.data.title.forEach(function(element){
       // cy.selectProduct(element)
     //});
    // productPage.getCheckOut().click();
})

When ('validate the CTA button component',()=>{
    gmBrand.getCTAbutton().click();

})

Then('verify the disclaimer on section heading component',()=>{
    gmBrand.getTitle().should('have.value',title); 
    this.data.title.click();
})
/*

When('I fill the Form Details',function(dataTable){
    
    //using cucumber dataTable feature

    name=dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])


    /* Using cypress Fixtures

    When('I fill the Form Details',function(){
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)

    }) */
//})
/*
Then('validate the form behaviour',function(){

    //homePage.getTwoWayDataBinding().should('have.value',this.data.name) 
    homePage.getTwoWayDataBinding().should('have.value',name) 
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
})

Then('select the shop Page',()=>{
    homePage.getShopTab().click()
}) */