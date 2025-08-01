class sectionHeading{
    getTitle(){
        cy.get("div.text.cmp-section-heading__text-container__header").eq(0).should('be.visible');
    }

    getDescription(){
        cy.get("div.text.cmp-section-heading__text-container__content").eq(0).should('be.visible');
    }

    getCTAbutton(){
        cy.get("div.cmp-section-heading__link-container").eq(0).should('be.visible');
   }

    getDisclaimer(){
       return cy.get('$(".cmp-text--disclaimer-link")')
    }

}

export default sectionHeading;