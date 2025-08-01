class sectionHeadingObj{
    getTitle(){
        return cy.get('.text.cmp-section-heading__text-container__header').contains('Discover')
        
    }

    getDescription(){
        return cy.get('.text.cmp-section-heading__text-container__content').contains('Chevrolet')
    
    }

    getCTAbutton(){
        return cy.get('.cmp-section-heading__link-container')
   }

    validatePageCompletelyLoaded(){
        cy.validatePageIsLoaded();
    }

   getButton(){
    cy.get('a[href*="/content/gm-ecommerce"]').contains('Accessories').click({multiple:true})
    cy.visit(Cypress.env('url')+"/chevrolet/na/us/en/accessories/adobe-test/automation/testsectionheading.html");
   }
}


export default sectionHeadingObj;


//.cmp-text--disclaimer-link