class heroComponentObj {
  // css locators
  heroBannerCompLoc = "div.cmp-hero-banner--hero-banner";
  heroBannerImgListLoc = "div.herobanner div.cmp-image img.cmp-image__image";
  heroBannerCtaListLoc = "div.herobanner a.cmp-button"
  heroBannerVideoLoc = "div.cmp-hero-banner__video>video-js"
  heroBannerVideoVolumeLoc = "div.cmp-hero-banner__video>video-js button.vjs-mute-control"
  
  validatePageCompletelyLoaded(){
    cy.validatePageIsLoaded();
  }

  validateHeroBannerComponent(){
    cy.get(this.heroBannerCompLoc).should('be.visible');
  }

  validateMultipleHeroBannerComponent(){
    cy.get(this.heroBannerCompLoc).then(com=>{
    cy.log(com.length)
    expect(com.length).to.be.greaterThan(1);
    })
  }

  validateTitleOfComponent(heroTitleLoc, titleValue){
    cy.get(heroTitleLoc).contains(titleValue).should('be.visible');
  }

  validateDescOfComp(heroBannerDescLoc, descriptionValue ){
    cy.log("Expected hero banner description is : "+descriptionValue)
    cy.get(heroBannerDescLoc).eq(0).contains(descriptionValue).should('be.visible');
  }
  // Navigation to Page
  webPageNavigation(url) {
    cy.navigateToUrl(url);
  }

  validateImageInHeroBanner(imageOf){
    cy.get(this.heroBannerImgListLoc).then( imgLst => {
      cy.get(imgLst).each(imgLoc => {
        cy.wrap(imgLoc).invoke('attr','src').then(imgLink => {
          cy.wrap(imgLink).should('contain',imageOf);
          cy.request(imgLink).its('status').should('eq',200)
          cy.log("Validated image : "+imgLink);
        })
        
      });
    })
  }

  validateCTAInHeroBanner(){
    cy.get(this.heroBannerCtaListLoc).then( btnLst => {
      // expect(imgLst).to.be.an('array').that.is.not.empty;
      cy.get(btnLst).each(btnLoc => {
        cy.wrap(btnLoc).invoke('attr','href').then(btnLink => {  
          cy.request(btnLink).its('status').should('eq',200)
          cy.log("Validated button link : "+btnLink)
        })
      });
    })
  }

  validateVideoState(stateToValidate){
    cy.get(this.heroBannerVideoLoc).click()
    cy.wait(3000);
    cy.get(this.heroBannerVideoLoc).invoke('attr','class').should('contain',stateToValidate);
  }

  validateVideoVolumeState(volumeState){
    cy.get(this.heroBannerVideoVolumeLoc).invoke('attr','title').should('eq',volumeState);
  }

  clickOnVideoMuteBtn(){
    cy.get(this.heroBannerVideoVolumeLoc).click();
  }
}
export default heroComponentObj;
