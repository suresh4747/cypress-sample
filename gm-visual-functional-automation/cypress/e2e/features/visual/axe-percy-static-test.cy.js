let currentEnvironemnt

describe('Visual Test', () => {
  beforeEach(function() {
    currentEnvironemnt=Cypress.env("testEnv")
    // cy.task('initializeTestResults');
   cy.fixture(Cypress.env(currentEnvironemnt)+"/stage_authored_site.json").then((data) => {
      cy.wrap(data.urls).as('urls');
    });
  });

  it('Execute visual snapshot capture with percy', function () {
    let page="page"
    let i=0;
    cy.get('@urls').then(urls => {
      expect(urls).to.be.an('array').that.is.not.empty;
      urls.forEach((url) => {
        const [siteUrl, country] = url.split('||'); 
        cy.visit(siteUrl, { failOnStatusCode: false, timeout: 180000 , headers: {"Accept-Encoding": "gzip, deflate", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7" }});
        cy.wait(5000);
        cy.validatePageIsLoaded();
        cy.ensureImagesLoading();
        cy.executePercyIfConfigured(country+" "+i)
        i=i+1
        cy.logTest("Completed page : "+url)
      });
    });
  });

  // after(function () {
  //   var shouldExecuteAxe = Cypress.env("axescan")
  //   if (shouldExecuteAxe) {
  //     cy.generateAccessibilityReports()
  //   }
  //   else {
  //     cy.task('log', 'No report generated as axe scan is disabled in config')
  //   }
  // });
});
