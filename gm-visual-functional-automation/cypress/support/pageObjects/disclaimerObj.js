class disclaimerObj{
    getTitle(){
        return cy.get('.text.cmp-section-heading__text-container__header').contains('Check Out')
        
    }

    validatePageCompletelyLoaded(){
        cy.validatePageIsLoaded();
    }

    getDisclaimer(){
        return cy.get('a[href*="/content/experience-fragments"]').contains('Current Offers').click({multiple:true})
     }

    disclaimerPopUp(){
        cy.get('.cmp-modal__content');
    }

    closeButton(){
       // return cy.wrap(window.top.document.querySelector('[aria-label="Close modal"]')).click({ force: true})
        return cy.get('.close-btn').click();   
    }

    scrollBarDiscalimer(){
         cy.get('a[href*="/content/experience-fragments"]').contains('Lifestyle').click({multiple:true})
         cy.get('.cmp-modal__content').scrollTo('bottom', { ensureScrollable: false });
         cy.get('.close-btn').click();
    }

    descriptionLink(){
        cy.get('a[href*="/content/gm-ecommerce"]').contains('These aluminum covers').click({multiple:true})
        cy.go('back');
    }

    linkOnMousehover(){
        cy.contains("a", "These aluminum covers").realHover('mouse')
    }

}


export default disclaimerObj;