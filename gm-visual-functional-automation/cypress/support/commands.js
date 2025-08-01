// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let scrollToBottom = require('scroll-to-bottomjs')

Cypress.Commands.add('logTest', (message) => {
    cy.task('logTest', message);
});

/**
 *  navigate to url
 */
Cypress.Commands.add("navigateToUrl", (url) => {
  cy.visit(
      Cypress.env(Cypress.env("testEnv"))+ url
  );
});

Cypress.Commands.add("ensureImagesLoading", () => {
  cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
})

Cypress.Commands.add('logTest', (message) => {
  cy.task('logTest', message);
});

/**
 *  execute percy if configured in config file
 */
Cypress.Commands.add("executePercyIfConfigured", (pagename) => {
  let url;
  cy.url().then(($currUrl) => {
    url = $currUrl;
    cy.log("Current URL is : " + url);
    var shouldExecutePercy = Cypress.env("percy")
    cy.wait(Cypress.env("percy_waitTime"))
    if (shouldExecutePercy) {
        cy.log("Percy is enabled..")
        cy.takeSnapShotOfPage(pagename)
    }
    else {
        cy.log("Percy is disabled..")
    }
})
  
})



/**
 *  validate if page is loaded
 */
Cypress.Commands.add("validatePageIsLoaded", () => {
  cy.document().then(document, () => {
      if (document.readyState === "complete") {
          cy.log("page is loaded");
      }
  });
});

/**
 *  hide element from page by changing the display attribute
 */
Cypress.Commands.add("hideElementFromPage", (locator) => {
  cy.document().then((doc) => {
      const element = doc.querySelector(locator); // Direct JS access
      if (element) {
        cy.log("Element found, hiding it");
        cy.wrap(element).invoke('attr', 'style', 'visibility:hidden;');
      } else {
        cy.log("Element not found");
      }
    });
});

Cypress.Commands.add("hideElementFromPage", (locator) => {
  cy.get(locator).each(($element, index, list) => {
    cy.log("number of carousel elements: " + list.length);
    $element.attr("style", "visibility:hidden;");
  });
});

Cypress.Commands.add("validatePageIsLoaded", () => {
  cy.document().then(document, () => {
    if (document.readyState === "complete") {
      cy.log("page is loaded");
    }
  });
});

Cypress.Commands.add("takeSnapShotOfPage", (nameOfSnapShot) => {
  cy.wait(Cypress.env("percy_waitTime"))
    .percySnapshot(nameOfSnapShot, { enableLayout: true })
    .wait(Cypress.env("percy_waitTime"));
});

Cypress.Commands.add(
  "clickOnElementWhichDisappearsAfterClickInIframe",
  (locatorOfElementToClcik, indexOfIframe) => {
    getIframeBody(indexOfIframe)
      .find(locatorOfElementToClcik)
      .should("be.visible")
      .click({ force: true })
      .wait(5000)
      .should("not.be.visible");
  }
);

let homepageurl;
Cypress.Commands.add("navigateToHomepage", () => {
  cy.log("Test env variable is : "+Cypress.env("testEnv"))
  cy.log("Stage url is : "+Cypress.env(Cypress.env("testEnv")))
  cy.visit(Cypress.env(Cypress.env("testEnv")));
  cy.url().then(($url) => {
    homepageurl = $url;
    cy.log(homepageurl);
  });
});

Cypress.Commands.add("navigateToUrl", (url) => {
let homepageurl = Cypress.env(Cypress.env("testEnv"));
  cy.visit(homepageurl + url);
  // cy.visit(homepageurl + url + par);
});
// let site;
// Cypress.Commands.add("navigateToHomepage", (website) => {
//   site = website;
//   if (website === "smilegen") {
//     cy.visit("https://publish-p116807-e1144727.adobeaemcloud.com/");
//   } else {
//     cy.visit("https://publish-p116807-e1145402.adobeaemcloud.com/");
//   }

//   cy.url().then(($url) => {
//     homepageurl = $url;
//     cy.log(homepageurl);
//   });
// });

// Cypress.Commands.add("navigateToUrl", (url) => {
//   if (site === "smilegen") {
//     cy.visit(homepageurl + Cypress.env("smilegen") + url);
//   } else {
//     cy.visit(homepageurl + Cypress.env("pds") + url);
//   }
// });

Cypress.Commands.add("checkAndClickIfPresent", (locator) => {
  cy.wait(Cypress.env("shortWait"))
    .document()
    .then((document) => {
      const element = document.querySelector(locator);
      if (element !== null) {
        cy.log("Element found");
        cy.get(locator).should("be.visible").click({ force: true });
      } else {
        cy.log("Element not found");
        return; // Continue with the test without failing
      }
    });
});

Cypress.Commands.add("deleteFilesInDirectory", (directory) => {
  if (Cypress.platform === "win32") {
    cy.exec(`cmd /c del /q "${directory}\\*"`);
  } else {
    cy.exec(`rm -rf ${directory}/*`, { failOnNonZeroExit: false });
  }
});

Cypress.Commands.add("fileExists", (filePath, filename) => {
  console.log("Platform is: " + Cypress.platform);

  console.log(filePath + " " + filename);

  const command =
    Cypress.platform === "win32"
      ? `powershell.exe Test-Path -Path "${filePath}"`
      : `ls "${filePath}"`;

  return cy
    .exec(command, { failOnNonZeroExit: false })
    .then((result) => {
      console.log(result.stdout);
      if (Cypress.platform === "win32") {
        return result.stdout.toString().trim() === "True";
      } else {
        return result.stdout.toString().trim() === filename.toString().trim();
      }
    })
    .then((fileExists) => {
      return fileExists; // Return the value to the next `then` function
    });
});

const getIframeDocument = (indexOfIframe) => {
  return (
    cy
      .get("iframe")
      .eq(indexOfIframe)
      // Cypress yields jQuery element, which has the real
      // DOM element under property "0".
      // From the real DOM iframe element we can get
      // the "document" element, it is stored in "contentDocument" property
      // Cypress "its" command can access deep properties using dot notation
      // https://on.cypress.io/its
      .its("0.contentDocument")
      .should("exist")
  );
};

const getIframeBody = (indexOfIframe) => {
  // get the document
  return (
    getIframeDocument(indexOfIframe)
      // automatically retries until body is loaded
      .its("body")
      .should("not.be.undefined")
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      .then(cy.wrap)
  );
};

Cypress.Commands.add("scrollToElement", (element) => {
  cy.get(element).scrollIntoView();
});

//   // GALLERY COMPONENT
Cypress.Commands.add("galleryComponent", (galleryComponentVisible) => {
  cy.get(galleryComponentVisible).should("be.visible");
});

Cypress.Commands.add(
  "galleryComponmentAssets",
  (galleryComponentAssetsVisible) => {
    cy.get(galleryComponentAssetsVisible).should("be.visible");
  }
);

Cypress.Commands.add(
  "galleryComponentAssetsTitle",
  (galleryComponentAssetsTitleVisible) => {
    cy.get(galleryComponentAssetsTitleVisible).should("be.visible");
  }
);

Cypress.Commands.add(
  "galleryComponentAssetsTitleCSS",
  (galleryComponentAssetsTitleVisible, fontFamily, fontSize) => {
    cy.get(galleryComponentAssetsTitleVisible)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "galleryComponentAssetsArrow",
  (
    galleryComponentAssetsLeftArrowVisible,
    galleryComponentAssetsRightArrowVisible
  ) => {
    cy.get(galleryComponentAssetsLeftArrowVisible).should("be.visible");
    cy.get(galleryComponentAssetsRightArrowVisible).should("be.visible");
  }
);

Cypress.Commands.add(
  "galleryImageLarge",
  (
    galleryComponentAssetsVisible,
    galleryImage,
    videoPlayButton,
    videoClickButton
  ) => {
    cy.get(galleryComponentAssetsVisible).each(($thumbnail, index) => {
      cy.wrap($thumbnail).click();

      cy.wait(3000).then(() => {
        cy.wrap($thumbnail)
          .find("img")
          .then(($img) => {
            const thumbnailSrc = $img.attr("src") || $img.attr("srcset");

            cy.log("thumbnail: " + thumbnailSrc);

            cy.log("Checking if thumbnail source is defined.").then(() => {
              expect(thumbnailSrc, "thumbnail image is broken").to.not.be
                .undefined;
            });

            cy.get(galleryImage)
              .eq(index)
              .find("picture img")
              .invoke("attr", "src")
              .then((sliderSrc) => {
                cy.log("sliderSrc: " + sliderSrc);

                var flag = thumbnailSrc.includes(".svg");
                cy.log("Flag is: " + index + " " + flag);

                if (flag) {
                  cy.log("*******Gallery contains video*****");

                  cy.get(galleryImage)
                    .eq(index)
                    .then(() => {
                      cy.log("Video is present in image gallery");

                      cy.get(videoPlayButton)
                        .should("be.visible")
                        .then(($button) => {
                          if ($button && $button.length > 0) {
                            cy.get(videoClickButton).eq(0).click();

                            cy.wait(2000);

                            cy.log("Video is playing");
                          } else {
                            cy.log("Button element is not visible");
                          }
                        });
                    });
                } else {
                  if (index === 0) {
                    cy.get(galleryImage)
                      .first()
                      .parent()
                      .parent()
                      .should(
                        "have.class",
                        "swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active swiper-slide-thumb-active"
                      );
                  } else {
                    cy.log("Index is not 0");
                  }
                }
              });
          });
      });
    });
  }
);

Cypress.Commands.add("galleryRightArrowClick", (galleryRightArrow) => {
  cy.get(galleryRightArrow).should("be.visible").click();
});

Cypress.Commands.add("galleryNextAssetVisible", (galleryAllComponentAssets) => {
  cy.get(galleryAllComponentAssets).next().should("be.visible");
});

Cypress.Commands.add("galleryLeftArrowClick", (galleryLeftArrow) => {
  cy.get(galleryLeftArrow).should("be.visible").click();
});

Cypress.Commands.add(
  "galleryPreviousAssetVisible",
  (galleryAllComponentAssets) => {
    cy.get(galleryAllComponentAssets).prev().should("be.visible");
  }
);

// RTE
Cypress.Commands.add("RTEcomponent", (RTEHeadings, RTEPara) => {
  cy.get(RTEHeadings).should("be.visible");
  cy.get(RTEPara).should("be.visible");
});

Cypress.Commands.add(
  "RTEHeadingSize",
  (
    RTEH1Heading,
    RTEH2Heading,
    RTEH3Heading,
    RTEH4Heading,
    RTEH5Heading,
    RTEH6Heading
  ) => {
    cy.get(RTEH1Heading).should("be.visible");
    cy.get(RTEH2Heading).should("be.visible");
    cy.get(RTEH3Heading).should("be.visible");
    cy.get(RTEH4Heading).should("be.visible");
    cy.get(RTEH5Heading).should("be.visible");
    cy.get(RTEH6Heading).should("be.visible");
  }
);

Cypress.Commands.add(
  "RTEHeadingfont",
  (
    RTEH1Heading,
    RTEH2Heading,
    RTEH3Heading,
    RTEH4Heading,
    RTEH5Heading,
    RTEH6Heading
  ) => {
    cy.get(RTEH1Heading)
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "60px")
      .should("have.css", "font-weight", "700");
    cy.get(RTEH2Heading)
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "40px")
      .should("have.css", "font-weight", "700");
    cy.get(RTEH3Heading)
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "32px")
      .should("have.css", "font-weight", "700");
    cy.get(RTEH4Heading)
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "32px")
      .should("have.css", "font-weight", "500");
    cy.get(RTEH5Heading)
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "24px")
      .should("have.css", "font-weight", "700");
    cy.get(RTEH6Heading)
      .should("have.css", "font-family", "Poppins, sans-serif")
      .should("have.css", "font-size", "10.72px")
      .should("have.css", "font-weight", "700");
  }
);

Cypress.Commands.add("RTEParaStyling", (RTEPara) => {
  cy.get(RTEPara).should("have.css", "font-family", "Poppins, sans-serif");
});

// TITLE
Cypress.Commands.add("titlefontSize", (heading, fontSize, fontFamily) => {
  cy.get(".cmp-title " + heading + "")
    .should("be.visible")
    .should("have.css", "font-family", fontFamily)
    .should("have.css", "font-size", fontSize);
});

// ACCORDION
Cypress.Commands.add("accordianSection", (accordian) => {
  cy.get(accordian).should("be.visible");
});

Cypress.Commands.add("plusAccordianClick", (accordian, accordianExpand) => {
  cy.get(accordian)
    .its("length")
    .then((accordianSize) => {
      var accordianSize = accordianSize;
      cy.wrap(accordianSize).as("accordianSize");
    });
  cy.get("@accordianSize").then((accordianSize) => {
    var size = accordianSize;
    for (let i = 0; i <= size - 1; i++) {
      cy.get(accordian).eq(i).should("be.visible");
      cy.get(accordian).eq(i).click();
      cy.get(accordianExpand).eq(i).should("be.visible");
    }
  });
});

Cypress.Commands.add("minusAccordianClick", (accordian, accordianClosed) => {
  cy.get(accordian)
    .its("length")
    .then((accordianSize) => {
      var accordianSize = accordianSize;
      cy.wrap(accordianSize).as("accordianSize");
    });
  cy.get("@accordianSize").then((accordianSize) => {
    var size = accordianSize;
    for (let i = 0; i <= size - 1; i++) {
      cy.get(accordian).eq(i).should("be.visible");
      cy.get(accordian).eq(i).click();
      cy.get(accordianClosed).eq(i).should("be.visible");
    }
  });
});

//QUOTE COMPONENT
Cypress.Commands.add("quoteComponentVisible", (quoteComponent, index) => {
  cy.get(quoteComponent).should("be.visible");
});

// Cypress.Commands.add("quoteComponentTextSize",(quoteComponentText) =>{
//   cy.get(quoteComponentText).eq(1).should("have.length", "1");
// });

Cypress.Commands.add(
  "quoteComponentTextSize",
  (quoteComponent, quoteComponentText, index) => {
    cy.get(quoteComponent)
      .eq(index)
      .find(quoteComponentText)
      .should("have.length", "1");
  }
);

Cypress.Commands.add(
  "quoteComponentAuthorCSS",
  (quoteComponent, quoteCompAuthorCSS, fontFamily, fontSize, index) => {
    cy.get(quoteComponent)
      .eq(index)
      .find(quoteCompAuthorCSS)
      .should("have.css", "font-family", fontFamily);
    cy.get(quoteComponent)
      .eq(index)
      .find(quoteCompAuthorCSS)
      .should("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "quoteComponentTitleCSS",
  (quoteComponent, quoteComponentTitleText, fontFamily, fontSize, index) => {
    cy.get(quoteComponent)
      .eq(index)
      .find(quoteComponentTitleText)
      .should("have.css", "font-family", fontFamily);
    cy.get(quoteComponent)
      .eq(index)
      .find(quoteComponentTitleText)
      .should("have.css", "font-size", fontSize)
      .and("have.css", "font-weight", "700");
  }
);

Cypress.Commands.add(
  "quoteComponentTextCSS",
  (quoteComponent, quoteComponentText, fontFamily, fontSize, index) => {
    cy.get(quoteComponent)
      .eq(index)
      .find(quoteComponentText)
      .should("have.css", "font-family", fontFamily);
    cy.get(quoteComponent)
      .eq(index)
      .find(quoteComponentText)
      .should("have.css", "font-size", fontSize)
      .and("have.css", "font-weight", "700");
  }
);

Cypress.Commands.add(
  "quoteCarouselVisible",
  (quoteComponent, threeCarouselVisible, CarouselAllQuotes) => {
    cy.get(quoteComponent)
      .parent()
      .parent()
      .eq(0)
      .find(threeCarouselVisible)
      .should("have.length", 3);
    cy.get(quoteComponent)
      .parent()
      .parent()
      .eq(0)
      .find(CarouselAllQuotes)
      .should("have.length", 3);
  }
);

Cypress.Commands.add("CarouselDefaultCheck", (firstDefaultCarousel) => {
  cy.get(firstDefaultCarousel).should("be.visible");
});

Cypress.Commands.add(
  "quoteNameTitleAuthor",
  (
    quoteComponent,
    quoteComponentTitleText,
    quoteComponentText,
    quoteCompAuthorCSS,
    index
  ) => {
    cy.get(quoteComponent)
      .eq(index)
      .find(quoteComponentTitleText)
      .should("be.visible");
    // cy.get(quoteComponentTitleText).should("be.visible");
    cy.log("Quote Title is present");
    cy.get(quoteComponent)
      .eq(index)
      .find(quoteComponentText)
      .should("be.visible");
    cy.log("Quote Text is present");
    cy.get(quoteComponent)
      .eq(index)
      .find(quoteCompAuthorCSS)
      .should("be.visible");
    cy.log("Quote Author is present");
  }
);

Cypress.Commands.add(
  "compareText3Quotes",
  (
    firstQuoteText,
    secondCarousel,
    secondQuoteText,
    thirdCarousel,
    thirdQuoteText
  ) => {
    cy.get(firstQuoteText)
      .eq(1)
      .then((text) => {
        let QuoteText1 = text.text();
        cy.log("First Quote Text is " + QuoteText1);
        cy.get(secondCarousel).should("be.visible").dblclick();

        cy.get(secondQuoteText)
          .eq(1)
          .then((text2) => {
            let QuoteText2 = text2.text();
            cy.log("Second Quote Text is " + QuoteText2);
            cy.get(thirdCarousel).should("be.visible").dblclick();

            cy.get(thirdQuoteText)
              .eq(1)
              .then((text3) => {
                let QuoteText3 = text3.text();
                cy.log("Third Quote Text is " + QuoteText3);

                expect(QuoteText1).to.be.not.equal(QuoteText2);
                expect(QuoteText2).to.be.not.equal(QuoteText3);
                expect(QuoteText3).to.be.not.equal(QuoteText1);
              });
          });
      });
  }
);

Cypress.Commands.add("CarouselCheck", (CarouselVisible) => {
  cy.get(CarouselVisible).should("be.visible");
});

Cypress.Commands.add("CarouselClick", (Carousel) => {
  cy.get(Carousel).should("be.visible").dblclick();
});

Cypress.Commands.add("CarouselDisplay", (Carousel) => {
  cy.get(Carousel).should("be.visible");
});

// INFO COMPONENT
Cypress.Commands.add(
  "InfoComponentText",
  (infoComponent, infoComponentText, componentText) => {
    cy.get(infoComponent).should("be.visible");
    cy.get(infoComponentText).contains(componentText).should("be.visible");
  }
);

Cypress.Commands.add(
  "infoComponentboldTextFont",
  (infocomponentBoldText, Title, fontFamily, fontSize) => {
    cy.get(infocomponentBoldText)
      .contains(Title)
      .should("be.visible")
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("infoComponenticonVisible", (infocomponentIcon) => {
  cy.get(infocomponentIcon).should("be.visible");
});

Cypress.Commands.add(
  "InfoComponentTextFamily",
  (infoComponentText, fontFamily, fontSize) => {
    cy.get(infoComponentText)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

// COMMON CONCERN CAROUSEL
Cypress.Commands.add("commonConcernCarouselVisbile", (commonConcernCard) => {
  cy.get(commonConcernCard).should("be.visible");
});

Cypress.Commands.add(
  "commonConcernCarouselTitleVisible",
  (commonConcernMainTitle) => {
    cy.get(commonConcernMainTitle).should("be.visible");
  }
);

Cypress.Commands.add(
  "commonConcernCarouselRightVisible",
  (commonConcernCardRight) => {
    cy.get(commonConcernCardRight).should("be.visible");
  }
);

Cypress.Commands.add(
  "commonConcernCarouselTitleImageVisible",
  (commonConcernCardImage, commonConcernCardTitle) => {
    cy.get(commonConcernCardImage).should("be.visible");
    cy.get(commonConcernCardTitle).should("be.visible");
  }
);

Cypress.Commands.add("CardListTitleCSS", (CardTitle, fontFamily, fontSize) => {
  cy.get(CardTitle)
    .eq(0)
    .should("have.css", "font-family", fontFamily)
    .and("have.css", "font-size", fontSize);
});

Cypress.Commands.add(
  "commonConcernCarouselYellowUnderlineVisible",
  (commonConcernCardTitle) => {
    cy.get(commonConcernCardTitle).should(
      "have.css",
      "border-bottom-color",
      "rgb(255, 205, 71)"
    );
  }
);

Cypress.Commands.add("commonConcernCardClick", (commonConcernCardTitle) => {
  cy.get(commonConcernCardTitle).should(
    "have.css",
    "border-bottom-color",
    "rgb(255, 205, 71)"
  );
});

// commonConcernCardClick() {
//   cy.get(this.commonConcerCardLink).eq(0).click();
// }

Cypress.Commands.add(
  "commonConcerCarouselRightClick",
  (commonConcernCardRight) => {
    cy.get(commonConcernCardRight).click();
  }
);

Cypress.Commands.add(
  "commonConcerCarouselNextVisible",
  (commonConcernCardTitle1) => {
    cy.get(commonConcernCardTitle1).should("have.class", "swiper-slide-prev");
  }
);

Cypress.Commands.add(
  "commonConcerCarouselPreviousVisible",
  (commonConcernCardLeft, commonConcernCardTitle1) => {
    cy.get(commonConcernCardLeft).click();
    cy.get(commonConcernCardTitle1).should("have.class", "swiper-slide-active");
  }
);

Cypress.Commands.add("commonConcern4CardVisible", (commonConcern4Column) => {
  cy.get(commonConcern4Column).should("be.visible");
});

Cypress.Commands.add("commonConcern4cardsRow", (commonConcern4Column) => {
  cy.get(commonConcern4Column).should("have.class", "fourcolumn");
});

Cypress.Commands.add(
  "commonConcernCardImageTitle",
  (commonConcernTitle, commonConcernImage) => {
    cy.get(commonConcernTitle).should("be.visible");
    cy.get(commonConcernImage).should("be.visible");
  }
);

Cypress.Commands.add("titleLineColour", (commonConcernTitle) => {
  cy.get(commonConcernTitle).then(($el) => {
    const win = $el[0].ownerDocument.defaultView;
    const after = win.getComputedStyle($el[0], "after");
    const bgColor = after.getPropertyValue("border-bottom-color");
    expect(bgColor).to.eq("rgb(255, 219, 4)");
  });
});

Cypress.Commands.add("verifyBttnRedirection", (button) => {
  cy.get(button).eq(0).should("be.visible");
  cy.get(button).eq(0).invoke("removeAttr", "target").click();
  cy.url().then(($url) => {
    var wholeUrl = $url;
    cy.request(wholeUrl).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });
});

// clickCommonConcern4Card() {
//   cy.get(this.commonConcern4CardLink).click();
// }

Cypress.Commands.add("commonConcern3CardVisible", (commonConcern3Column) => {
  cy.get(commonConcern3Column).should("be.visible");
});

Cypress.Commands.add("commonconcern3cardsRow", (commonConcern3Column) => {
  cy.get(commonConcern3Column).should("have.class", "threecolumn");
});

// MAGAZINE CAROUSEL
Cypress.Commands.add("magazineCarouselVisible", (magazineCarousel) => {
  cy.get(magazineCarousel).should("be.visible");
});

Cypress.Commands.add(
  "magazineCarouselRightVisible",
  (
    cardNext,
    magazineCarouselTile1,
    magazineCarouselTile2,
    magazineCarouselTile3,
    magazineCarouselTile4,
    magazineCarouselTile5
  ) => {
    cy.get(cardNext).should("be.visible");
    cy.get(magazineCarouselTile1).should("be.visible");
    cy.get(magazineCarouselTile2).should("be.visible");
    cy.get(magazineCarouselTile3).should("be.visible");
    cy.get(magazineCarouselTile4).should("be.visible");
    cy.get(magazineCarouselTile5).should("not.be.visible");
  }
);

Cypress.Commands.add(
  "magazineCarouselTitleDescImage",
  (magazineCarouselDesc, magazineCarouselImage) => {
    cy.get(magazineCarouselDesc).should("be.visible");
    cy.get(magazineCarouselImage).should("be.visible");
  }
);

Cypress.Commands.add("magazineCarouselRightClick", (cardNext) => {
  cy.get(cardNext).click();
});

Cypress.Commands.add(
  "magazineCarouselRightDisplay",
  (magazineCarouselTile5) => {
    cy.get(magazineCarouselTile5).should("be.visible");
  }
);

Cypress.Commands.add(
  "magazineCarouselLeftVisible",
  (
    CardPrevious,
    magazineCarouselTile1,
    magazineCarouselTile2,
    magazineCarouselTile3,
    magazineCarouselTile4,
    magazineCarouselTile5
  ) => {
    cy.get(CardPrevious).should("be.visible");
    cy.get(CardPrevious).click();
    cy.get(magazineCarouselTile1).should("be.visible");
    cy.get(magazineCarouselTile2).should("be.visible");
    cy.get(magazineCarouselTile3).should("be.visible");
    cy.get(magazineCarouselTile4).should("be.visible");
    cy.get(magazineCarouselTile5).should("not.be.visible");
  }
);

Cypress.Commands.add("magazineCarouselRightClickEnd", (cardNext) => {
  for (let i = 0; i <= 6; i++) {
    cy.get(cardNext).click();
    cy.wait(1000);
  }
});

Cypress.Commands.add(
  "magazineCarouselRightLeftArrow",
  (cardNext, CardPrevious) => {
    cy.get(cardNext).should("not.be.visible");
    cy.get(CardPrevious).should("be.visible");
  }
);

Cypress.Commands.add(
  "magazineCarouselColumnVisible",
  (magazineCarousel2Column) => {
    cy.get(magazineCarousel2Column).should("be.visible");
  }
);

Cypress.Commands.add("magazineCarousel2cardsRow", (magazineCarousel2Column) => {
  cy.get(magazineCarousel2Column).should("have.class", "twocolumn");
});

Cypress.Commands.add("magazineCarousel4cardsRow", (magazineCarousel4Column) => {
  cy.get(magazineCarousel4Column).should("have.class", "fourcolumn");
});

Cypress.Commands.add(
  "magazineCarouselColumnRightLeftArrow",
  (cardNext, CardPrevious) => {
    cy.get(cardNext).should("not.exist");
    cy.get(CardPrevious).should("not.exist");
  }
);

// CARD COMPONENT
Cypress.Commands.add("textcardwithCTA", (textcardwithCTAComponent) => {
  cy.get(textcardwithCTAComponent).should("be.visible");
});

Cypress.Commands.add(
  "cardElements",
  (textcardwithCTATitle, textcardwithCTADescription, textcardCTA) => {
    cy.get(textcardwithCTATitle).should("be.visible");
    cy.get(textcardwithCTATitle).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif"
    );
    cy.get(textcardwithCTADescription).should("be.visible");
    cy.get(textcardwithCTADescription).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif"
    );
    cy.get(textcardCTA).should("be.visible");
  }
);

Cypress.Commands.add("CTAresponse", (textcardCTAAnchor) => {
  cy.get(textcardCTAAnchor).each(($link) => {
    const linkHref = $link.attr("href");
    cy.log("link is: " + linkHref);
    expect(linkHref, "Link should have an href attribute").to.not.be.empty;
    cy.request(linkHref).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

Cypress.Commands.add("cardBackground", (cardBG) => {
  cy.get(cardBG).should("have.css", "background-color", "rgb(255, 255, 255)");
});

Cypress.Commands.add("cardTextwithoutCTA", (textCardWOCTA) => {
  cy.get(textCardWOCTA).should("be.visible");
});

Cypress.Commands.add(
  "cardTextTitleDesc",
  (
    textCardWOCTATitle,
    textCardWOCTADescription,
    textcardwithCTADescription
  ) => {
    cy.get(textCardWOCTATitle).should("be.visible");
    cy.get(textCardWOCTATitle).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif"
    );
    cy.get(textCardWOCTADescription).should("be.visible");
    cy.get(textcardwithCTADescription).should(
      "have.css",
      "font-family",
      "Poppins, sans-serif"
    );
  }
);

Cypress.Commands.add("cardTextWObackgroundcolor", (textCardWOCTABG) => {
  cy.get(textCardWOCTABG).should(
    "have.css",
    "background-color",
    "rgb(255, 255, 255)"
  );
});

Cypress.Commands.add("factCardsComponent", (factCardComponent) => {
  cy.get(factCardComponent).eq(0).should("be.visible");
});

Cypress.Commands.add("factCardBackground", (factCardBG, index, color) => {
  var rgbCode = hexToRgb(color);
  cy.get(factCardBG).eq(index).should("have.css", "background-color", rgbCode);
});

Cypress.Commands.add("factCardsTitle", (factCardTitle) => {
  cy.get(factCardTitle).eq(0).should("be.visible");
  cy.get(factCardTitle)
    .eq(0)
    .should("have.css", "font-family", "Poppins, sans-serif");
});

Cypress.Commands.add("factCardsDesc", (factCardDescription) => {
  cy.get(factCardDescription).eq(0).should("be.visible");
  cy.get(factCardDescription)
    .eq(0)
    .should("have.css", "font-family", "Poppins, sans-serif");
});

Cypress.Commands.add(
  "factCardsCenter",
  (factCardTitle, factCardDescription) => {
    cy.get(factCardTitle).eq(0).should("have.css", "text-align", "center");
    cy.get(factCardDescription)
      .eq(0)
      .should("have.css", "text-align", "center");
  }
);

Cypress.Commands.add("costCardComponenet", (costCard) => {
  cy.get(costCard).should("be.visible");
});

Cypress.Commands.add("costTitle", (costCardTitle) => {
  cy.get(costCardTitle).should("be.visible");
  cy.get(costCardTitle).should(
    "have.css",
    "font-family",
    "Poppins, sans-serif"
  );
});

Cypress.Commands.add("costCardCost", (costCardDesc) => {
  cy.get(costCardDesc).should("be.visible");
  cy.get(costCardDesc).should("have.css", "font-family", "Poppins, sans-serif");
});

Cypress.Commands.add("costCardCostPDS", (costCardDesc) => {
  cy.get(costCardDesc).should("be.visible");
  cy.get(costCardDesc).should(
    "have.css",
    "font-family",
    '"Playfair Display", sans-serif'
  );
});

Cypress.Commands.add("costCardDate", (costCardSubTitle) => {
  cy.get(costCardSubTitle).should("be.visible");
  cy.get(costCardSubTitle).should(
    "have.css",
    "font-family",
    "Poppins, sans-serif"
  );
});

Cypress.Commands.add("costCardCTABttn", (costCardCTA) => {
  cy.get(costCardCTA).should("be.visible");
  cy.get(costCardCTA).each(($link) => {
    const linkHref = $link.attr("href");
    cy.log("link is: " + linkHref);
    expect(linkHref, "Link should have an href attribute").to.not.be.empty;
    cy.request(linkHref).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

Cypress.Commands.add("costCardWhiteColour", (costCardBG) => {
  cy.get(costCardBG).should(
    "have.css",
    "background-color",
    "rgb(255, 255, 255)"
  );
});

Cypress.Commands.add("tagsCardsComponent", (tagCard) => {
  cy.get(tagCard).should("be.visible");
});

Cypress.Commands.add("tagsCardsTitle", (tagCardTitle) => {
  cy.get(tagCardTitle).should("be.visible");
  cy.get(tagCardTitle).should("have.css", "font-family", "Poppins, sans-serif");
});

Cypress.Commands.add("tagsCardsDesc", (tagCardDesc) => {
  cy.get(tagCardDesc).should("be.visible");

  cy.get(tagCardDesc).should("have.css", "font-family", "Poppins, sans-serif");
});

Cypress.Commands.add("tagsCardBttn", (tagCardCTAtags) => {
  cy.get(tagCardCTAtags).should("be.visible");
});

// COST ESTIMATOR COMPONENT
Cypress.Commands.add("costEstimatorComponent", (costEstimatorVisible) => {
  cy.get(costEstimatorVisible).should("be.visible");
});

Cypress.Commands.add(
  "costEstimatorActive",
  (costEstimatorActiveTab, tabname) => {
    let TabName = tabname.trim();
    cy.get(costEstimatorActiveTab).contains(TabName).should("be.visible");
  }
);

Cypress.Commands.add("costCardEstimatorComponent", (costCardEstimator) => {
  cy.get(costCardEstimator)
    .first()
    .children("div")
    .should("be.visible")
    .and("have.length", "3");
});

Cypress.Commands.add(
  "costEstimatorTabColor",
  (costEstimatorActiveTab, backgroundColor) => {
    cy.get(costEstimatorActiveTab).should(
      "have.css",
      "background-color",
      backgroundColor
    );
  }
);

Cypress.Commands.add(
  "costEstimatorCostTitleSubtext",
  (costCardEstimatorTitle, costCardEstimatorCost, costCardEstimatorSubtext) => {
    cy.get(costCardEstimatorTitle).first().should("be.visible");
    cy.get(costCardEstimatorCost).first().should("be.visible");
    cy.get(costCardEstimatorSubtext).first().should("be.visible");

    cy.get(costCardEstimatorTitle).eq(1).should("be.visible");
    cy.get(costCardEstimatorCost).eq(1).should("be.visible");
    cy.get(costCardEstimatorSubtext).eq(1).should("be.visible");

    cy.get(costCardEstimatorTitle).eq(2).should("be.visible");
    cy.get(costCardEstimatorCost).eq(2).should("be.visible");
    cy.get(costCardEstimatorSubtext).eq(2).should("be.visible");
  }
);

Cypress.Commands.add(
  "costEstimatorCost",
  (costCardEstimatorCost, fontFamily, fontSize) => {
    cy.get(costCardEstimatorCost)
      .first()
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
    cy.get(costCardEstimatorCost)
      .eq(1)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
    cy.get(costCardEstimatorCost)
      .eq(2)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "costEstimatorTitle",
  (costCardEstimatorTitle, fontFamily, fontSize) => {
    cy.get(costCardEstimatorTitle)
      .first()
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
    cy.get(costCardEstimatorTitle)
      .eq(1)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
    cy.get(costCardEstimatorTitle)
      .eq(2)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "costEstimatorSubtext",
  (costCardEstimatorSubtext, fontFamily, fontSize) => {
    cy.get(costCardEstimatorSubtext)
      .first()
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
    cy.get(costCardEstimatorSubtext)
      .eq(1)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
    cy.get(costCardEstimatorSubtext)
      .eq(2)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "costEstimatorRightArrowClick",
  (costEstimatorRightArrow) => {
    cy.get(costEstimatorRightArrow).wait(1000).click();
  }
);

Cypress.Commands.add(
  "costEstimatorTabContentCheck",
  (
    costEstimatorActiveTab,
    costCardEstimator,
    costCardEstimatorTitle,
    costCardEstimatorCost,
    costCardEstimatorSubtext,
    tabname,
    tabIndex,
    contectIndex
  ) => {
    let TabName = tabname.trim();
    cy.get(costEstimatorActiveTab).contains(TabName).should("be.visible");

    cy.get(costEstimatorActiveTab)
      .parent()
      .parent()
      .get(costCardEstimator)
      .eq(tabIndex)
      .children("div")
      .should("be.visible")
      .and("have.length", "3");

    cy.get(costCardEstimatorTitle).eq(contectIndex).should("be.visible");
    cy.get(costCardEstimatorCost).eq(contectIndex).should("be.visible");
    cy.get(costCardEstimatorSubtext).eq(contectIndex).should("be.visible");
  }
);

Cypress.Commands.add(
  "costEstimatorLeftArrowClick",
  (costEstimatorLeftArrow) => {
    cy.get(costEstimatorLeftArrow).wait(1000).click();
  }
);

Cypress.Commands.add(
  "costEstimatorRightArrowClickFive",
  (costEstimatorRightArrow) => {
    cy.get(costEstimatorRightArrow).should("be.visible");
    for (let i = 0; i <= 3; i++) {
      cy.get(costEstimatorRightArrow).click();
      cy.wait(1000);
    }
  }
);

Cypress.Commands.add(
  "costEstimatorLeftArrowClickFive",
  (costEstimatorLeftArrow) => {
    cy.get(costEstimatorLeftArrow).should("be.visible");
    for (let i = 0; i <= 3; i++) {
      cy.get(costEstimatorLeftArrow).click();
      cy.wait(1000);
    }
  }
);

Cypress.Commands.add(
  "TabsAuthoredCostEstimator",
  (CostEstimatorTabsAuthored, tabSize) => {
    cy.get(CostEstimatorTabsAuthored)
      .should("be.visible")
      .and("have.length", tabSize);
  }
);

Cypress.Commands.add(
  "costEstimatorArrowNotVisible",
  (costEstimatorRightArrow, costEstimatorLeftArrow) => {
    cy.get(costEstimatorRightArrow).should(
      "have.attr",
      "style",
      "display: none;"
    );
    cy.get(costEstimatorLeftArrow).should(
      "have.attr",
      "style",
      "display: none;"
    );
  }
);

Cypress.Commands.add(
  "costEstimatorArrowVisible",
  (costEstimatorRightArrow, costEstimatorLeftArrow) => {
    cy.get(costEstimatorRightArrow).should("be.visible");
    cy.get(costEstimatorLeftArrow).should("be.visible");
  }
);

Cypress.Commands.add("costEstimatorTabClick", (costEstimatorTabs, tabname) => {
  let TabName = tabname.trim();
  cy.get(costEstimatorTabs).contains(TabName).should("be.visible").click();
});

// DYNAMIC LISTING
Cypress.Commands.add("threeCardListingVisible", (threeCardList) => {
  cy.get(threeCardList).should("be.visible");
});

Cypress.Commands.add("CardBttnVisible", (CardBttnViewAll, index, string) => {
  cy.get(CardBttnViewAll).eq(index).contains(string).should("be.visible");
});

Cypress.Commands.add(
  "CardBttnCSS",
  (CardBttnViewAll, index, string, fontFamily, fontSize) => {
    cy.get(CardBttnViewAll)
      .eq(index)
      .contains(string)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("CardListSize", (CardListing, size) => {
  cy.get(CardListing).should("have.length", size);
});

Cypress.Commands.add(
  "CardListTitleImageDesc",
  (CardTitle, CardDesc, CardImage) => {
    cy.get(CardTitle).should("be.visible");
    cy.get(CardDesc).should("be.visible");
    cy.get(CardImage).should("be.visible");
  }
);

Cypress.Commands.add("CardListTitleCSS", (CardTitle, fontFamily, fontSize) => {
  cy.get(CardTitle)
    .eq(0)
    .should("have.css", "font-family", fontFamily)
    .and("have.css", "font-size", fontSize);
});

Cypress.Commands.add("CardListDescCSS", (CardDesc, fontFamily, fontSize) => {
  cy.get(CardDesc)
    .eq(0)
    .should("have.css", "font-family", fontFamily)
    .and("have.css", "font-size", fontSize);
});

Cypress.Commands.add("fourCardListingVisible", (fourCardList) => {
  cy.get(fourCardList).first().should("be.visible");
});

Cypress.Commands.add(
  "threecarouselListingVisbile",
  (threeCarouselComponent) => {
    cy.get(threeCarouselComponent).parent().should("be.visible");
  }
);

Cypress.Commands.add(
  "threeCarouselMoreLinkVisbile",
  (threeCarouselMore, more) => {
    cy.get(threeCarouselMore).eq(2).contains(more).should("be.visible");
  }
);

Cypress.Commands.add(
  "threeCarouselMoreLinkclick",
  (threeCarouselMore, threeCarouselMoreClick, threeCarouselTitle4, more) => {
    cy.get(threeCarouselMore).eq(2).contains(more).click();

    cy.get(threeCarouselMoreClick).should("exist");
    cy.get(threeCarouselTitle4).should("have.class", "swiper-slide-active");
  }
);

Cypress.Commands.add(
  "threeCarouselLessLinkVisbile",
  (threeCarouselLess, less) => {
    cy.get(threeCarouselLess).eq(2).contains(less).should("be.visible");
  }
);

Cypress.Commands.add(
  "threeCarouselLessLinkclick",
  (threeCarouselLess, threeCarouselMoreClick, less) => {
    cy.get(threeCarouselLess).eq(2).contains(less).click();

    cy.get(threeCarouselMoreClick).should("not.exist");
  }
);

Cypress.Commands.add(
  "threeCarouselMoreLessFunc",
  (threeCarouselMore, threeCarouselLess, more, less) => {
    for (let i = 0; i <= 2; i++) {
      cy.get(threeCarouselMore).eq(2).contains(more).click();
      cy.wait(1000);
    }

    cy.get(threeCarouselLess).eq(2).contains(less).should("be.visible");
    cy.get(threeCarouselMore).eq(2).contains(more).should("not.be.visible");
  }
);

Cypress.Commands.add(
  "threeCarouselCardsSize",
  (
    threeCarouselTitle1,
    threeCarouselTitle2,
    threeCarouselTitle3,
    threeCarouselTitle4
  ) => {
    cy.get(threeCarouselTitle1).eq(1).should("be.visible");
    cy.get(threeCarouselTitle2).eq(1).should("be.visible");
    cy.get(threeCarouselTitle3).eq(1).should("be.visible");
    cy.get(threeCarouselTitle4).eq(1).should("not.be.visible");
  }
);

Cypress.Commands.add("BttnResponse200", (css, index) => {
  cy.get(css)
    .eq(index)
    .each(($link) => {
      const linkHref = $link.attr("href");
      cy.log("link is: " + linkHref);
      expect(linkHref, "Link should have an href attribute").to.not.be.empty;
      cy.request(linkHref).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
});

Cypress.Commands.add("factCardVisble", (threeCarouselfactCardComponent) => {
  cy.get(threeCarouselfactCardComponent).eq(0).should("be.visible");
});

Cypress.Commands.add(
  "factCardTitleDescVisble",
  (factCardTitleComponent, factCardDescComponent) => {
    cy.get(factCardTitleComponent).eq(0).should("be.visible");
    cy.get(factCardDescComponent).eq(0).should("be.visible");
  }
);

Cypress.Commands.add(
  "factCardSize",
  (
    threeCarouselTitle1,
    threeCarouselTitle2,
    threeCarouselTitle3,
    threeCarouselTitle4
  ) => {
    cy.get(threeCarouselTitle1).eq(2).should("be.visible");
    cy.get(threeCarouselTitle2).eq(2).should("be.visible");
    cy.get(threeCarouselTitle3).eq(2).should("be.visible");
    cy.get(threeCarouselTitle4).eq(1).should("not.be.visible");
  }
);

Cypress.Commands.add(
  "factCardTitleImageDesc",
  (CardTitleText, CardTitleImage, CardTitleDesc) => {
    cy.get(CardTitleText).eq(1).should("exist");
    cy.get(CardTitleImage).eq(1).should("exist");
    cy.get(CardTitleDesc).eq(1).should("exist");
  }
);

Cypress.Commands.add("factCardSecondTile", (factCardComponenttile) => {
  cy.get(factCardComponenttile).eq(2).should("be.visible");
});

Cypress.Commands.add(
  "factCardAuthorDescVisible",
  (factCardDesc, factCardAuthor) => {
    cy.get(factCardDesc).eq(0).should("be.visible");
    cy.get(factCardAuthor).eq(0).should("be.visible");
  }
);

Cypress.Commands.add("BttnNotClickable", (staggeredReviewcard) => {
  cy.get(staggeredReviewcard).then(($btn) => {
    if ($btn.is(":enabled")) {
      cy.log("Element is clickable");
    } else {
      cy.log("Element is not clickable");
    }
  });
});

Cypress.Commands.add("factCardNextClick", (cardNext) => {
  cy.get(cardNext).eq(2).should("be.visible");
  cy.get(cardNext).eq(2).click();
});

Cypress.Commands.add(
  "factCardClickVerification",
  (threeCarouselTitle4, threeCarouselTitle3) => {
    cy.get(threeCarouselTitle4)
      .eq(1)
      .should("have.class", "swiper-slide-active");
    cy.get(threeCarouselTitle3).eq(2).should("not.be.visible");
  }
);

Cypress.Commands.add("factCardPreviousClick", (CardPrevious) => {
  cy.get(CardPrevious).eq(2).should("be.visible");
  cy.get(CardPrevious).eq(2).click();
});

// BLOG HERO COMPONENT
Cypress.Commands.add("blogHeroVisible", (blogHeroComponent) => {
  cy.get(blogHeroComponent).should("be.visible");
});

Cypress.Commands.add("blogCategoryandTitle", () => {
  cy.get(".cmp-bloghero__category").should("be.visible");
  cy.get("h1.cmp-bloghero__title").should("be.visible");
});

Cypress.Commands.add("blogCategoryFont", (fontfamily, fontsize) => {
  cy.get(".cmp-bloghero__category")
    .should("have.css", "font-family", fontfamily)
    .should("have.css", "font-size", fontsize);
});

Cypress.Commands.add("blogTitlefontstyle", (heading, fontsize, fontfamily) => {
  cy.get(heading + ".cmp-bloghero__title")
    .should("be.visible")
    .should("have.css", "font-size", fontsize)
    .should("have.css", "font-family", fontfamily);
});

Cypress.Commands.add(
  "blogWrittenAuthorText",
  (blogWrittenByText, blogAuthorName) => {
    cy.get(blogWrittenByText)
      .should("be.visible")
      .and("have.css", "font-family", "Poppins, sans-serif")
      .and("have.css", "color", "rgb(68, 68, 68)")
      .and("have.css", "font-size", "18px");

    cy.get(blogAuthorName)
      .should("be.visible")
      .and("have.css", "font-family", "Poppins, sans-serif")
      .and("have.css", "color", "rgb(0, 140, 208)")
      .and("have.css", "font-size", "18px");
  }
);

Cypress.Commands.add(
  "blogWrittenReviewerText",
  (blogReviewedByText, blogReviewerName) => {
    cy.get(blogReviewedByText)
      .should("be.visible")
      .and("have.css", "font-family", "Poppins, sans-serif")
      .and("have.css", "color", "rgb(68, 68, 68)")
      .and("have.css", "font-size", "18px");

    cy.get(blogReviewerName)
      .should("be.visible")
      .and("have.css", "font-family", "Poppins, sans-serif")
      .and("have.css", "color", "rgb(0, 140, 208)")
      .and("have.css", "font-size", "18px");
  }
);

Cypress.Commands.add("blogDates", (blogDate) => {
  cy.get(blogDate)
    .eq(0)
    .should("be.visible")
    .and("have.css", "font-family", "Poppins, sans-serif")
    .and("have.css", "color", "rgb(68, 68, 68)")
    .and("have.css", "font-size", "18px");

  cy.get(blogDate)
    .eq(1)
    .should("be.visible")
    .and("have.css", "font-family", "Poppins, sans-serif")
    .and("have.css", "color", "rgb(68, 68, 68)")
    .and("have.css", "font-size", "18px");
});

Cypress.Commands.add("blogHalfImageVisible", (blogHalfImage) => {
  cy.get(blogHalfImage).should("be.visible");
});

Cypress.Commands.add(
  "blogAuthorAndReviewerName",
  (blogAuthorName, blogReviewerName) => {
    cy.get(blogAuthorName)
      .should("be.visible")
      .and("have.css", "color", "rgb(0, 140, 208)");
    cy.get(blogReviewerName)
      .should("be.visible")
      .and("have.css", "color", "rgb(0, 140, 208)");
  }
);

// BLOG LISTING
Cypress.Commands.add(
  "blogListingSortByVisible",
  (blogListingSortBy, sortBy) => {
    cy.get(blogListingSortBy).contains(sortBy).should("be.visible");
  }
);

Cypress.Commands.add("blogListingSortOptions", (option1, option2) => {
  cy.get("select[id='blog-sortby'] option").contains(option1).should("exist");
  cy.get("select[id='blog-sortby'] option").contains(option2).should("exist");
});

Cypress.Commands.add("blogListingSortDefaultOptions", (string) => {
  cy.get("select[id='blog-sortby'] option:selected")
    .invoke("text")
    .should("contain", string);
});

Cypress.Commands.add(
  "blogListingCardsSize",
  (blogListingCards, blogListingFactCards) => {
    cy.get(blogListingCards).should("have.length", "18").and("be.visible");
  }
);

Cypress.Commands.add(
  "blogListingCardImgTitleDesc",
  (cardTiTle, cardDesc, cardImage) => {
    cy.get(cardTiTle).should("be.visible");
    cy.get(cardDesc).should("be.visible");
    cy.get(cardImage).should("be.visible");
  }
);

Cypress.Commands.add(
  "blogListingCompareTitle",
  (blogListingCardTitle, blogListingcardTitleLinks, blogHeroTitle) => {
    let titleLinks = [];
    cy.get(blogListingCardTitle)
      .its("length")
      .then((size) => {
        var size = size;
        cy.wrap(size).as("size");

        cy.get("@size").then((size) => {
          var totalTitle = size;
          cy.log("Total Titles are: " + totalTitle);

          cy.get(blogListingcardTitleLinks).each(($link) => {
            const linkHref = $link.attr("href");
            cy.log("link is: " + linkHref);
            titleLinks.push(Cypress.env(Cypress.env("testEnv")) + linkHref);
          });

          cy.get(blogListingCardTitle).then((Title1) => {
            for (let i = 0; i < totalTitle; i++) {
              let CardTitle = Title1.eq(i).text();
              cy.visit(titleLinks[i]);

              cy.get(blogHeroTitle)
                .then((title2) => {
                  let BlogTitle = title2.text();
                  cy.log("Blog Title is: " + BlogTitle);

                  expect(CardTitle).to.be.equal(BlogTitle);
                })
                .then(() => {
                  cy.go(-1);
                });
            }
          });
        });
      });
  }
);

Cypress.Commands.add("blogListingSortSelectOptions", (string) => {
  cy.get("select[id='blog-sortby']").select(string);
  cy.wait(2000);
});

Cypress.Commands.add("AtoZSort", (css) => {
  let cardTitleArray = [];
  let oldTitleArray = [];
  let newsortedArr = [];
  cy.get(css)
    .each((titles, index, list) => {
      oldTitleArray.push(titles.text());
      cardTitleArray.push(titles.text());
      newsortedArr = cardTitleArray.sort();
    })
    .then(() => {
      cy.get(css).each((titles, i, list) => {
        expect(oldTitleArray[i]).to.eql(newsortedArr[i]);
      });
      cy.log("1. " + oldTitleArray);
      cy.log("2. " + cardTitleArray.sort());
    });
});

Cypress.Commands.add(
  "blogListingDateCompareTitle",
  (blogListingCardTitle, blogListingcardTitleLinks, blogPublishedDate) => {
    let titleLinks = [];
    let Dates = [];
    let newDates = [];
    let sortedDatesArr = [];
    cy.get(blogListingCardTitle)
      .its("length")
      .then((size) => {
        var size = size;
        cy.wrap(size).as("size");

        cy.get("@size").then((size) => {
          var totalTitle = size;
          cy.log("Total Titles are: " + totalTitle);

          cy.get(blogListingcardTitleLinks).each(($link) => {
            const linkHref = $link.attr("href");
            cy.log("link is: " + linkHref);
            titleLinks.push(Cypress.env(Cypress.env("testEnv")) + linkHref);
          });

          cy.get(blogListingCardTitle)
            .then((Title) => {
              for (let i = 0; i < totalTitle; i++) {
                cy.visit(titleLinks[i]);

                cy.get(blogPublishedDate)
                  .eq(0)
                  .then((date) => {
                    let publishedDate = date.text();
                    let newPublishedDate = publishedDate.split(": ");
                    cy.log("Published Date is: " + newPublishedDate[1]);
                    Dates.push(newPublishedDate[1]);
                    newDates = Dates;
                  })
                  .then(() => {
                    cy.go(-1);
                  });
              }
            })
            .then(() => {
              sortedDatesArr = Dates.sort(function (a, b) {
                let dateA = new Date(a);
                let dateB = new Date(b);
                return dateB - dateA;
              });
              expect(sortedDatesArr).to.be.equal(newDates);
            })
            .then(() => {
              cy.log("1. " + sortedDatesArr);
              cy.log("2. " + newDates);
            });
        });
      });
  }
);

Cypress.Commands.add(
  "blogListingfirstPageHighlighted",
  (blogListingactivePageSelected, string) => {
    cy.get(blogListingactivePageSelected)
      .contains(string)
      .should("be.visible")
      .and("have.css", "border-bottom-color", "rgb(249, 141, 24)");
  }
);

Cypress.Commands.add(
  "blogListingbackArrowsDisable",
  (blogListingfirstBackArrowDisabled, blogListingpreviousBackArrowDisabled) => {
    cy.get(blogListingfirstBackArrowDisabled).should("be.visible");
    cy.get(blogListingpreviousBackArrowDisabled).should("be.visible");
  }
);

Cypress.Commands.add(
  "blogListingsecondPage",
  (
    blogListingpageNumber,
    blogListingCardTitle,
    string,
    blogListingfirstBackArrow,
    blogListingpreviousBackArrow,
    blogListingactivePageSelected
  ) => {
    cy.get(blogListingpageNumber).then((nextPage) => {
      if (nextPage.length > 1) {
        let CardTitle1;
        cy.get(blogListingCardTitle)
          .eq(0)
          .then((Title1) => {
            CardTitle1 = Title1.text();
            cy.log("First page card title is: " + CardTitle1);
          })
          .then(() => {
            cy.get(blogListingpageNumber)
              .contains(string)
              .should("be.visible")
              .click();
          })
          .then(() => {
            cy.wait(1000);
            cy.get(blogListingCardTitle)
              .eq(0)
              .then((Title2) => {
                let CardTitle2 = Title2.text();
                cy.log("Second page card title is: " + CardTitle2);
                expect(CardTitle1).to.not.equal(CardTitle2);
              });
          });

        //the back button should be displayed
        cy.get(blogListingfirstBackArrow).should(
          "not.have.class",
          ".first.disabled"
        );
        cy.get(blogListingpreviousBackArrow).should(
          "not.have.class",
          ".prev.disabled"
        );

        // the second pagination "2" number should be highlighted
        cy.get(blogListingactivePageSelected)
          .contains(string)
          .should("be.visible")
          .and("have.css", "border-bottom-color", "rgb(249, 141, 24)");
      } else {
        cy.log("****There is no 2nd page****");
      }
    });
  }
);

Cypress.Commands.add(
  "blogListingfirstPageVerification",
  (
    blogListingCardTitle,
    blogListingpageNumber,
    string,
    blogListingnextArrow,
    blogListingactivePageSelected,
    blogListinglastArrow,
    blogListingnextArrowDisabled,
    blogListinglastArrowDisabled
  ) => {
    cy.get(blogListingpageNumber).then((nextPage) => {
      if (nextPage.length > 1) {
        let CardTitlePage1 = [];
        let CardTitlePage2 = [];
        cy.get(blogListingCardTitle)
          .each(($element, index, list) => {
            CardTitlePage2.push($element.text().trim());
          })
          .then(() => {
            cy.wait(1000);
            cy.get(blogListingpageNumber)
              .contains(string)
              .should("be.visible")
              .click();
          })
          .then(() => {
            cy.get(blogListingCardTitle).each(($element, index, list) => {
              CardTitlePage1.push($element.text().trim());
            });
          })
          .then(() => {
            expect(CardTitlePage1).to.not.equal(CardTitlePage2);
          });

        // I click on the single next button
        cy.wait(1000);
        cy.get(blogListingnextArrow).click();

        // the second pagination "2" number should be highlighted
        cy.get(blogListingactivePageSelected)
          .contains(string)
          .should("be.visible")
          .and("have.css", "border-bottom-color", "rgb(249, 141, 24)");

        // I click on the double arrow at the right side
        cy.wait(1000);
        cy.get(blogListinglastArrow).click();

        // both right side buttons should be greyed out
        cy.wait(1000);
        cy.get(blogListingnextArrowDisabled).should("be.visible");
        cy.get(blogListinglastArrowDisabled).should("be.visible");

        // the last page number should be highlighted
        cy.get(blogListingnextArrowDisabled)
          .prev()
          .should("have.css", "border-bottom-color", "rgb(249, 141, 24)");
      } else {
        cy.log("****There is no 2nd page****");
      }
    });
  }
);

// PROMOBLOCK
Cypress.Commands.add("newsLetterPresent", (newsLetterComponent) => {
  cy.get(newsLetterComponent).should("be.visible");
});

Cypress.Commands.add("newsLetterTitleVisible", (newsLetterTitle) => {
  cy.get(newsLetterTitle).should("be.visible");
});

Cypress.Commands.add("newsLetterTitleHeading", (newsLetterTitle) => {
  cy.get(newsLetterTitle).should("be.visible");
});

Cypress.Commands.add(
  "newsLetterTitleFontFamily",
  (newsLetterTitle, fontFamily) => {
    cy.get(newsLetterTitle).should("have.css", "font-family", fontFamily);
  }
);

Cypress.Commands.add(
  "newsLetterpreTitleFontFamily",
  (newsLetterPreTitle, fontFamily, fontSize) => {
    cy.get(newsLetterPreTitle)
      .eq(0)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "newsLetterBodyFontFamily",
  (newsLetterBody, fontFamily, fontSize) => {
    cy.get(newsLetterBody)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "newsLetterSubscribeFontFamily",
  (newsLetterSubscribe, fontFamily, fontSize) => {
    cy.get(newsLetterSubscribe)
      .contains("Subscribe")
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

// CURATED LISTING
Cypress.Commands.add("curatedListingVisible", (curatedList) => {
  cy.get(curatedList).should("be.visible");
});

Cypress.Commands.add("curatedListingSize", (curatedList, string) => {
  cy.get(curatedList).should("have.length", string);
});

Cypress.Commands.add(
  "curatedFirstVisible",
  (curatedCategory, curatedTitle, curatedDesc, curatedImage) => {
    cy.get(curatedCategory).first().should("be.visible");
    cy.get(curatedTitle).first().should("be.visible");
    cy.get(curatedDesc).first().should("be.visible");
    cy.get(curatedImage).first().should("be.visible");

    cy.get(curatedImage)
      .first()
      .invoke("css", "width")
      .then((style1) => {
        let width1 = style1.split("p");
        cy.log("First Image width: " + width1[0]);

        cy.get(curatedImage)
          .eq(2)
          .invoke("css", "width")
          .then((style2) => {
            let width2 = style2.split("p");
            cy.log("Second Image width: " + width2[0]);

            expect(+width1[0]).greaterThan(+width2[0]);
          });
      });
  }
);

Cypress.Commands.add(
  "curatedCategoryCSS",
  (curatedCategory, fontFamily, fontSize) => {
    cy.get(curatedCategory)
      .and("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "curatedTitleCSS",
  (curatedTitle, fontFamily, fontSize) => {
    cy.get(curatedTitle)
      .and("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("curatedDescCSS", (curatedDesc, fontFamily, fontSize) => {
  cy.get(curatedDesc)
    .and("have.css", "font-family", fontFamily)
    .and("have.css", "font-size", fontSize);
});

Cypress.Commands.add("curated4Visible", (curatedList, string) => {
  cy.get(curatedList).nextAll().should("have.length", string);
});

Cypress.Commands.add("featuredListingVisible", (featuredList) => {
  cy.get(featuredList).should("be.visible");
});

Cypress.Commands.add(
  "featuredTitleImageDesc",
  (featuredTitle, featuredImage, featuredDesc) => {
    cy.get(featuredTitle).should("be.visible");
    cy.get(featuredImage).should("be.visible");
    cy.get(featuredDesc).should("be.visible");
  }
);

Cypress.Commands.add(
  "featuredTitleCSS",
  (featuredTitle, fontFamily, fontSize) => {
    cy.get(featuredTitle)
      .first()
      .and("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "featuredDescCSS",
  (featuredDesc, fontFamily, fontSize) => {
    cy.get(featuredDesc)
      .first()
      .and("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("featuredBttnVisible", (featuredBttn) => {
  cy.get(featuredBttn).should("be.visible");
});

Cypress.Commands.add("bttnfont", (featuredBttntxt, fontFamily, fontSize) => {
  cy.get(featuredBttntxt)
    .should("have.css", "font-family", fontFamily)
    .and("have.css", "font-size", fontSize);
});

// EBOOK
Cypress.Commands.add(
  "salesforceTitleCSS",
  (salesforceTitle, fontSize, fontFamily) => {
    cy.get(salesforceTitle)
      .should("be.visible")
      .and("have.css", "font-size", fontSize)
      .and("have.css", "font-family", fontFamily);
  }
);

Cypress.Commands.add("salesforceImageVisible", (salesforceImage) => {
  cy.get(salesforceImage).should("be.visible");
});

Cypress.Commands.add(
  "salesforceDescriptionVisible",
  (salesforceDesc, fontFamily, fontSize) => {
    cy.get(salesforceDesc)
      .should("be.visible")
      .and("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("salesforceBttnVisible", (salesforceBttn, string) => {
  cy.get(salesforceBttn).contains(string).should("be.visible");
});

Cypress.Commands.add(
  "salesforceBttnCSS",
  (salesforceBttn, string, fontFamily, fontSize) => {
    cy.get(salesforceBttn)
      .contains(string)
      .and("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("salesforceBttnClick", (salesforceBttn, string) => {
  cy.get(salesforceBttn).contains(string).click();
});

Cypress.Commands.add(
  "salesforceModalTitleDescImageBttn",
  (
    salesforceModalTitle,
    salesforceModalDesc,
    salesforceModalImage,
    salesforceModalBttn
  ) => {
    cy.get(salesforceModalTitle).should("be.visible");
    cy.get(salesforceModalDesc).eq(0).should("be.visible");
    cy.wait(2000);
    cy.get(salesforceModalImage).scrollIntoView().should("be.visible");
    cy.get(salesforceModalBttn).should("be.visible");
  }
);

Cypress.Commands.add(
  "salesforceModalTitleCSS",
  (salesforceModalTitle, fontFamily, fontSize) => {
    cy.get(salesforceModalTitle)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "salesforceModalDescCSS",
  (salesforceModalDesc, fontFamily, fontSize) => {
    cy.get(salesforceModalDesc)
      .eq(0)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "salesforceModalSuccessMessageCSS",
  (salesforceModalTitle, successMssg, fontFamily, fontSize) => {
    cy.get(salesforceModalTitle)
      .contains(successMssg)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "salesforceModalBttnCSS",
  (salesforceModalBttn, fontFamily, fontSize) => {
    cy.get(salesforceModalBttn)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "salesforceModalExtraInfoVisible",
  (salesforceModalDesc, index, fontFamily, fontSize) => {
    cy.get(salesforceModalDesc)
      .eq(index)
      .should("be.visible")
      .and("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "salesforceModalTextPlaceholder",
  (salesforceModalTextField, placeholderText) => {
    cy.get(salesforceModalTextField)
      .should("be.visible")
      .and("have.attr", "placeholder", placeholderText);
  }
);

Cypress.Commands.add(
  "salesforceModalTextFieldEmail",
  (salesforceModalTextField, Email, salesforceModalBttn) => {
    cy.get(salesforceModalTextField).type(Email);
    cy.get(salesforceModalBttn).eq(0).click();
  }
);

Cypress.Commands.add(
  "salesforceModalSuccesMessage",
  (salesforceModalTitle, successMssg) => {
    cy.get(salesforceModalTitle).contains(successMssg).should("be.visible");
  }
);

Cypress.Commands.add(
  "salesforceModalSucessCSS",
  (salesforceModalTitle, successMssg, fontFamily, fontSize) => {
    cy.get(salesforceModalTitle)
      .contains(successMssg)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "salesforceModaltextSocialMediaBlog",
  (
    salesforceModalDesc,
    Message,
    salesforceSocialMediaText,
    salesforceSocialMediaIcons,
    socialMediaRealtedPost
  ) => {
    cy.get(salesforceModalDesc).contains(Message).should("be.visible");
    cy.get(salesforceSocialMediaText).eq(1).should("be.visible");
    cy.get(salesforceSocialMediaIcons)
      .should("be.visible")
      .and("have.length", "4");
    cy.get(socialMediaRealtedPost).scrollIntoView().should("be.visible");
  }
);

Cypress.Commands.add("salesforceEmailErrorMssg", (salesforceErrorMssg) => {
  cy.get(salesforceErrorMssg)
    .should("be.visible")
    .and("have.css", "color", "rgb(224, 32, 32)");
});

Cypress.Commands.add(
  "salesforceModalEmptyTextFieldEmail",
  (salesforceModalBttn) => {
    cy.get(salesforceModalBttn).eq(0).click();
  }
);

// FAQs COMPONENT
Cypress.Commands.add("correctTabsCheck", (faqTabsName, faqNameRight) => {
  var tabLinks = [];
  var faqLinks = [];

  cy.get(faqTabsName).as("tabLink");
  cy.get("@tabLink")
    .each(($element, index, list) => {
      tabLinks.push($element.text().trim());
    })
    .then(tabLinks, () => {
      tabLinks = tabLinks.sort();
      let shiftedName = tabLinks.shift();
      cy.log("Length of tab links : " + tabLinks.length);
      cy.log("Length of tab links name : " + tabLinks);

      cy.get(faqNameRight).as("faqLink");
      cy.get("@faqLink")
        .each(($element, index, list) => {
          faqLinks.push($element.text().trim());
        })
        .then(() => {
          faqLinks = faqLinks.sort();
          cy.log("Length of faq links : " + faqLinks.length);
          cy.log("Length of faq links name : " + faqLinks);
        })
        .then(() => {
          expect(tabLinks).to.deep.equal(faqLinks);
        });
    });
});

Cypress.Commands.add(
  "BlogcomponentsVisibleContains",
  (FAQTabsActiveCategories, string) => {
    cy.get(FAQTabsActiveCategories)
      .contains(string)
      .then((actualText) => {
        cy.get(FAQTabsActiveCategories)
          .invoke("text")
          .then((expectedText) => {
            let textonPage = actualText.text();

            expect(textonPage.toLowerCase()).to.equal(
              expectedText.toLowerCase()
            );
          });
      });
  }
);

Cypress.Commands.add(
  "ComponentsVisibleContains",
  (officeProfileStatus, string) => {
    cy.get(officeProfileStatus).contains(string).should("be.visible");
  }
);

Cypress.Commands.add("clickTabName", (faqTabsName, tabName) => {
  cy.get(faqTabsName).contains(tabName).should("be.visible").click();
});

Cypress.Commands.add(
  "verifyAccordionQuestions",
  (faqItem, faqQuestionTitle) => {
    cy.get(faqItem).each(($accordionItem) => {
      cy.wrap($accordionItem)
        .find(faqQuestionTitle)
        .invoke("text")
        .then((questionText) => {
          const questionParts = questionText.split("?");
          const hasExtraCharacters =
            questionParts.length > 1 && questionParts[1].trim() !== "";
          cy.log("1. " + questionParts.length);
          cy.log("2. " + questionParts[0]);
          cy.log("3. " + questionParts[1]);
          cy.log("4. " + questionParts[2]);
          expect(hasExtraCharacters).to.be.false;
        });
    });
  }
);

Cypress.Commands.add("verifyQuestionAnswer", (faqItem) => {
  cy.get(faqItem).each(($accordionItem, index, list) => {
    cy.wrap($accordionItem).click();
    cy.wrap($accordionItem)
      .find(".cmp-accordion__content")
      .should("be.visible");
    cy.wrap($accordionItem).click();
  });
});

Cypress.Commands.add("faqpaginationVisible", () => {
  cy.get(".first").parent().should("be.visible");
});

Cypress.Commands.add("faq25Questions", (faqItem) => {
  cy.get(faqItem).should("have.length", "25");
});

Cypress.Commands.add("faqPaginationGrey", (faqQuestionPaginationNext) => {
  cy.get(".cmp-faq__pagination .page")
    .its("length")
    .then((size) => {
      var size = size;
      cy.wrap(size).as("size");

      cy.get("@size").then((size) => {
        var totalPages = size;
        cy.log("Total pages are: " + totalPages);

        for (let i = 0; i < totalPages - 1; i++) {
          cy.get(faqQuestionPaginationNext).then((nextButton) => {
            if (nextButton.length > 0 && !nextButton.hasClass("disabled")) {
              cy.wrap(nextButton).click();
              cy.wait(2000);
            }
          });
        }
        cy.get(".next.disabled").should("be.visible");
      });
    });
});

// OFFICE PROFILE:overview and information
Cypress.Commands.add(
  "officeProfileCSS",
  (officeProfileText, fontFamily, fontSize) => {
    cy.get(officeProfileText)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("ComponentsVisible", (officeProfileStatus) => {
  cy.get(officeProfileStatus).should("be.visible");
});

Cypress.Commands.add(
  "officeProfileBttnCSS",
  (officeProfileBttnText, string, fontFamily, fontSize) => {
    cy.get(officeProfileBttnText)
      .contains(string)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("officeProfileHref", (css, index, string) => {
  cy.get(css).eq(index).should("have.attr", "href").and("contain", string);

  cy.get(css)
    .eq(index)
    .each(($link) => {
      const linkHref = $link.attr("href");
      cy.log("link is: " + linkHref);
      expect(linkHref, "Link should have an href attribute").to.not.be.empty;
      cy.request(linkHref).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
});

Cypress.Commands.add(
  "officeprofileScheduleandInsuranceList",
  (dataTable, css1, css2) => {
    var actualItems = [];
    var expectedItems = [];

    cy.get(css1).as("businesshours");
    cy.get("@businesshours")
      .eq(0)
      .scrollIntoView()
      .find(css2)
      .each(($element, index, list) => {
        actualItems.push($element.text().trim());
      })
      .then(actualItems, () => {
        actualItems = actualItems.sort();
        cy.log("Length of actual items : " + actualItems.length);
        expectedItems = dataTable.rawTable.slice(1).flat().sort();
        cy.log("Length of expected items : " + expectedItems.length);
        cy.log("Actual title of tiles : " + actualItems);
        cy.log("Expected title of tiles : " + expectedItems);
        expect(actualItems).to.deep.equal(expectedItems);
      });
  }
);

Cypress.Commands.add(
  "officeProvderPhNumVisible",
  (officeProviderPhNum, phone, fax) => {
    cy.get(officeProviderPhNum).contains(phone).should("be.visible");
    cy.get(officeProviderPhNum).contains(fax).should("be.visible");
  }
);

Cypress.Commands.add(
  "officeProvderAddressVisible",
  (officeProviderAddress, address1, address2, address3, address4) => {
    cy.get(officeProviderAddress).contains(address1).should("be.visible");
    cy.get(officeProviderAddress).contains(address2).should("be.visible");
    cy.get(officeProviderAddress).contains(address3).should("be.visible");
    cy.get(officeProviderAddress).contains(address4).should("be.visible");
  }
);

// SERVICES COMPONENT
Cypress.Commands.add(
  "iconsandlinks",
  (officeProfiledentalImages, officeProfilebuttonLinks) => {
    cy.get(officeProfiledentalImages).should("be.visible");
    cy.get(officeProfilebuttonLinks).should("have.attr", "href");
  }
);

Cypress.Commands.add(
  "underlineBttn",
  (officeProfileBttnTextUnderline, color) => {
    var rgbCode = hexToRgb(color);
    cy.get(officeProfileBttnTextUnderline).should(
      "have.css",
      "border-bottom-color",
      rgbCode
    );
  }
);

Cypress.Commands.add("seeMoreBttn", (officeProfileSeeMoreBttn, seeMore) => {
  cy.get(officeProfileSeeMoreBttn).contains(seeMore).should("be.visible");
  cy.get(officeProfileSeeMoreBttn).contains(seeMore).click();
});

Cypress.Commands.add("showAllServices", (officeProfileShowAllServices) => {
  cy.get(officeProfileShowAllServices).should("not.exist");
});

Cypress.Commands.add(
  "seemoreNotVisible",
  (officeProfileSeeMoreBttn, seeMore) => {
    cy.get(officeProfileSeeMoreBttn).contains(seeMore).should("not.exist");
  }
);

// TABS
Cypress.Commands.add("tabTextLinks", (dataTable, css) => {
  var actualItems = [];
  var expectedItems = [];

  cy.get(css).as("getLinks");

  cy.get("@getLinks")
    .each(($element, index, list) => {
      actualItems.push($element.text().trim());
    })
    .then(actualItems, () => {
      actualItems = actualItems.sort();
      cy.log("Length of actual items : " + actualItems.length);
      expectedItems = dataTable.rawTable.slice(1).flat().sort();
      cy.log("Length of expected items : " + expectedItems.length);
      cy.log("Actual title of tiles : " + actualItems);
      cy.log("Expected title of tiles : " + expectedItems);
      expect(actualItems).to.deep.equal(expectedItems);
    });
});

// STAGGERED COMPONENT
Cypress.Commands.add("staggeredComponentVisible", (staggeredComponent) => {
  cy.get(staggeredComponent).eq(0).should("be.visible");
});

Cypress.Commands.add("staggeredMainTitleVisible", (staggeredmainTitle) => {
  cy.get(staggeredmainTitle).eq(0).should("be.visible");
});

Cypress.Commands.add("staggeredMainDescVisible", (staggeredmainDesc) => {
  cy.get(staggeredmainDesc).eq(0).should("be.visible");
});

Cypress.Commands.add(
  "staggeredMainTitleCSS",
  (staggeredmainTitle, fontFamily, fontSize) => {
    cy.get(staggeredmainTitle)
      .eq(0)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "staggeredMainDescCSS",
  (staggeredmainDesc, fontFamily, fontSize) => {
    cy.get(staggeredmainDesc)
      .eq(0)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("staggeredMainBttnVisible", (staggeredmainBttn) => {
  cy.get(staggeredmainBttn).should("be.visible");
});

Cypress.Commands.add(
  "staggeredMainBttnCSS",
  (staggeredmainBttn, fontFamily, fontSize) => {
    cy.get(staggeredmainBttn)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "staggeredComponentBckImage",
  (staggeredBckImageVisible) => {
    cy.get(staggeredBckImageVisible).should("be.visible");
  }
);

Cypress.Commands.add(
  "staggeredcardImageTitleVisible",
  (staggeredcardTitle, staggeredBckImageVisible) => {
    cy.get(staggeredcardTitle).should("be.visible");
    cy.get(staggeredBckImageVisible).should("be.visible");
  }
);

Cypress.Commands.add(
  "staggeredTitleFont",
  (staggeredCardTitle, fontFamily, fontSize) => {
    cy.get(staggeredCardTitle)
      .should("be.visible")
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "staggeredDescFont",
  (staggeredCardDesc, fontFamily, fontSize) => {
    cy.get(staggeredCardDesc)
      .eq(0)
      .should("be.visible")
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "staggeredcardTitleFont",
  (staggeredmainTitle, fontFamily, fontSize) => {
    cy.get(staggeredmainTitle)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "staggeredMainDescFont",
  (staggeredmainDesc, fontFamily, fontSize) => {
    cy.get(staggeredmainDesc)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "staggeredCardDescFont",
  (staggeredCardDesc, fontFamily, fontSize) => {
    cy.get(staggeredCardDesc)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("BttnNotClickable", (staggeredReviewcard) => {
  cy.get(staggeredReviewcard).then(($btn) => {
    if ($btn.is(":enabled")) {
      cy.log("Element is clickable");
    } else {
      cy.log("Element is not clickable");
    }
  });
});

Cypress.Commands.add(
  "staggeredReviewDescReviewAuthor",
  (staggeredReviewDesc, staggeredReviewstar, staggeredReviewAuthor) => {
    cy.get(staggeredReviewDesc).should("be.visible");
    cy.get(staggeredReviewstar).should("be.visible");
    cy.get(staggeredReviewAuthor).should("be.visible");
  }
);

Cypress.Commands.add(
  "staggeredReviewAuthorCSS",
  (staggeredReviewAuthor, fontFamily, fontSize) => {
    cy.get(staggeredReviewAuthor)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "staggeredReviewDescCSS",
  (staggeredReviewDesc, fontFamily, fontSize) => {
    cy.get(staggeredReviewDesc)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("staggeredReviewImage", (staggeredReviewNoImage) => {
  cy.get(staggeredReviewNoImage).should("not.exist");
});

// FOOTER SECTION
Cypress.Commands.add("footerScroll", (homepagemouthbodyfooter) => {
  cy.get(homepagemouthbodyfooter).scrollIntoView();
});

// Verify 1st column Title
Cypress.Commands.add("mouthbodyConnect", (FooterlinksText, String) => {
  cy.get(FooterlinksText)
    .contains(String)
    .should("have.text", "MOUTH-BODY CONNECTION");
});

Cypress.Commands.add("BttnResponse", (css) => {
  cy.get(css).each(($link) => {
    const linkHref = $link.attr("href");
    cy.log("link is: " + linkHref);
    expect(linkHref, "Link should have an href attribute").to.not.be.empty;
    cy.request(linkHref).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

Cypress.Commands.add("BttnLinkNotEmpty", (css) => {
  cy.get(css).each(($link) => {
    const linkHref = $link.attr("href");
    cy.log("link is: " + linkHref);
    expect(linkHref, "Link should have an href attribute").to.not.be.empty;
  });
});

// Verify 2nd column Title
Cypress.Commands.add("dentalservices", (FooterlinksText, String) => {
  cy.get(FooterlinksText)
    .contains(String)
    .should("have.text", "DENTAL SERVICES");
});

// Verify 3rd column Title
Cypress.Commands.add("paymentoption", (FooterlinksText, String) => {
  cy.get(FooterlinksText)
    .contains(String)
    .should("have.text", "PAYMENT OPTIONS");
});

// Verify 4th column Title
Cypress.Commands.add("howwegive", (FooterlinksText, String) => {
  cy.get(FooterlinksText).contains(String).should("have.text", "HOW WE GIVE");
});

// Verify 5th column Title
Cypress.Commands.add("about", (FooterlinksText, String) => {
  cy.get(FooterlinksText).contains(String).should("have.text", "ABOUT");
});

// Verify URL response 200
Cypress.Commands.add("urlRedirection", (currenturl) => {
  cy.url().then(($url) => {
    var wholeUrl = $url;
    cy.url().should("include", currenturl);

    cy.request(wholeUrl).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });
});

// Verify footer legal title
Cypress.Commands.add("footerLegalLinks", (dataTable, css) => {
  var actualFooterLegalTitle = [];
  var expectedFooterLegalTitle = [];

  cy.get(css).as("footerLegalElements");

  cy.get("@footerLegalElements")
    .should("have.css", "font-family", "Poppins, sans-serif")
    .each(($element, index, list) => {
      actualFooterLegalTitle.push($element.text().trim());
    })
    .then(actualFooterLegalTitle, () => {
      actualFooterLegalTitle = actualFooterLegalTitle.sort();
      cy.log("Length of actual items : " + actualFooterLegalTitle.length);
      expectedFooterLegalTitle = dataTable.rawTable.slice(1).flat().sort();
      cy.log("Length of expected items : " + expectedFooterLegalTitle.length);
      cy.log("Actual legal title : " + actualFooterLegalTitle);
      cy.log("Expected legal title : " + expectedFooterLegalTitle);
      expect(actualFooterLegalTitle).to.deep.equal(expectedFooterLegalTitle);
    });
});

Cypress.Commands.add("clickLegalLinks", (Text, css) => {
  cy.get(css).contains(Text).as("footerlegallink");
  cy.get("@footerlegallink").click();
});

// Verify social media icons/links
Cypress.Commands.add("socialMediaLinks", (dataTable, css) => {
  var actualFooterSocialIcons = [];
  var expectedFooterSocialIcons = [];

  cy.get(css).as("footerSocialIcons");
  cy.get("@footerSocialIcons").should("have.length", 6);

  cy.get("@footerSocialIcons")
    .each((links, index, list) => {
      let url = links.prop("href");
      actualFooterSocialIcons.push(url.trim());
    })
    .then(actualFooterSocialIcons, () => {
      cy.log("Length of actual items : " + actualFooterSocialIcons.length);
      expectedFooterSocialIcons = dataTable.rawTable.slice(1).flat();
      cy.log("Length of expected items : " + expectedFooterSocialIcons.length);
      cy.log("Actual Social Icons : " + actualFooterSocialIcons);
      cy.log("Expected Social Icons : " + expectedFooterSocialIcons);
      expect(actualFooterSocialIcons).to.deep.equal(expectedFooterSocialIcons);
    });
});

Cypress.Commands.add("clickSocialMediaIcons", (link, css) => {
  cy.get("[href*='" + link + "']")
    .invoke("removeAttr", "target")
    .click();
  cy.url().should("include", link);
});

// verify smilegen link in footer
Cypress.Commands.add("smilegenlink", (smilegenLink, css) => {
  cy.get(css)
    .contains(smilegenLink)
    .should("have.css", "font-family", "Poppins, sans-serif")
    .should("be.visible");
});

Cypress.Commands.add("smilegenhref", (css, hrefValue) => {
  cy.get(css).find(".cmp-button").should("have.attr", "href", hrefValue);
});

Cypress.Commands.add("smilegenTargetFooter", (css, targetValue) => {
  cy.get(css).find(".cmp-button").should("have.attr", "target", targetValue);
});

Cypress.Commands.add(
  "footerParagraph",
  (footerParaOne, footerParaTwo, footerParaThree) => {
    cy.get(footerParaOne)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif");
    cy.get(footerParaTwo)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif");
    cy.get(footerParaThree)
      .should("be.visible")
      .should("have.css", "font-family", "Poppins, sans-serif");
  }
);

// TEASER COMPONENT
Cypress.Commands.add("teaserhalfImageComponent", (teaserImageComponent) => {
  cy.get(teaserImageComponent).should("be.visible");
});

Cypress.Commands.add(
  "teaserTitleAndSubextVisible",
  (seeMoreTitle, seeMoreDesc) => {
    cy.get(seeMoreTitle).should("exist");
    cy.get(seeMoreDesc).should("exist");
  }
);

Cypress.Commands.add("teaserTitleCSS", (seeMoreTitle, fontFamily, fontSize) => {
  cy.get(seeMoreTitle)
    .should("have.css", "font-family", fontFamily)
    .and("have.css", "font-size", fontSize);
});

Cypress.Commands.add(
  "teaserSubtextCSS",
  (seeMoreDesc, fontFamily, fontSize) => {
    cy.get(seeMoreDesc)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("teaserseemoreLink", (seeMoreLessLink, seeMore) => {
  cy.get(seeMoreLessLink).contains(seeMore).should("be.visible");
});

Cypress.Commands.add("clickSeeMoreLess", (seeMoreLessLink, seeMoreLess) => {
  cy.get(seeMoreLessLink).contains(seeMoreLess).click();
});

Cypress.Commands.add(
  "seeMoreTitleDesc",
  (seeMoreTitle, seeMoreDesc, seeMoreContentStyle) => {
    cy.get(seeMoreTitle).should("be.visible");
    cy.get(seeMoreDesc).should("be.visible");
    cy.get(seeMoreContentStyle).should(
      "have.attr",
      "style",
      "max-height: 100%; height: 100%;"
    );
  }
);

Cypress.Commands.add("teaserseelessLink", (seeMoreLessLink, seeLess) => {
  cy.get(seeMoreLessLink).contains(seeLess).should("be.visible");
});

Cypress.Commands.add(
  "teaserSeeLessCollapse",
  (seeLessCollapse, seeMoreLessLink, seeMore) => {
    cy.get(seeLessCollapse).should("be.visible");
    cy.get(seeMoreLessLink).contains(seeMore).should("be.visible");
  }
);

Cypress.Commands.add("teaserleftimageComponent", (leftimageComponent) => {
  cy.get(leftimageComponent).should("be.visible");
});

Cypress.Commands.add("teaserleftimageVisible", (leftImageTeaser) => {
  cy.get(leftImageTeaser).should("be.visible");
});

Cypress.Commands.add(
  "teaserleftImageTitleDesc",
  (leftImageTeaserTitle, leftImageTeaserDesc) => {
    cy.get(leftImageTeaserTitle).should("be.visible");
    cy.get(leftImageTeaserDesc).should("be.visible");
  }
);

Cypress.Commands.add(
  "teaserleftImageTitleCSS",
  (leftImageTeaserTitle, fontFamily, fontSize) => {
    cy.get(leftImageTeaserTitle)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "teaserleftImageDescCSS",
  (leftImageTeaserDesc, fontFamily, fontSize) => {
    cy.get(leftImageTeaserDesc)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("teaserleftimageBttnVisible", (leftimageBttn) => {
  cy.get(leftimageBttn).should("be.visible");
});

Cypress.Commands.add(
  "teaserleftimageBttnCSS",
  (leftimageBttn, fontFamily, fontSize) => {
    cy.get(leftimageBttn)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("teaserrightimageComponent", (rightimageComponent) => {
  cy.get(rightimageComponent).eq(1).should("be.visible");
});

Cypress.Commands.add("teaserrightimageVisible", (rightimageVisible) => {
  cy.get(rightimageVisible).eq(1).should("be.visible");
});

Cypress.Commands.add(
  "teaserrightImageTitleDesc",
  (rightImageTeaserTitle, rightImageTeaserDesc) => {
    cy.get(rightImageTeaserTitle).eq(1).should("be.visible");
    cy.get(rightImageTeaserDesc).should("be.visible");
  }
);

Cypress.Commands.add(
  "teaserrightImageTitleCSS",
  (rightImageTeaserTitle, fontFamily, fontSize) => {
    cy.get(rightImageTeaserTitle)
      .eq(1)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "teaserrightImageDescCSS",
  (rightImageTeaserDesc, fontFamily, fontSize) => {
    cy.get(rightImageTeaserDesc)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("teaserrightimageBttnVisible", (rightimageBttn) => {
  cy.get(rightimageBttn).should("be.visible");
});

Cypress.Commands.add("teaserWithoutCTA", (teaserwithoutCTA) => {
  cy.get(teaserwithoutCTA).should("be.visible");
});

Cypress.Commands.add("teaserWithoutCTAImage", (teaserwithoutCTAImage) => {
  cy.get(teaserwithoutCTAImage).should("be.visible");
});

Cypress.Commands.add("teaserWithoutCTATitle", (teaserwithoutCTATitle) => {
  cy.get(teaserwithoutCTATitle).should("be.visible");
});

Cypress.Commands.add("teaserWithoutCTADesc", (teaserwithoutCTADesc) => {
  cy.get(teaserwithoutCTADesc).should("be.visible");
});

Cypress.Commands.add(
  "teaserWithoutCTATitleCSS",
  (teaserwithoutCTATitle, fontFamily, fontSize) => {
    cy.get(teaserwithoutCTATitle)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add(
  "teaserWithoutCTADescCSS",
  (teaserwithoutCTADesc, fontFamily, fontSize) => {
    cy.get(teaserwithoutCTADesc)
      .should("have.css", "font-family", fontFamily)
      .and("have.css", "font-size", fontSize);
  }
);

Cypress.Commands.add("teaserWithoutCTAvisible", (teaserwithoutCTAVisible) => {
  cy.get(teaserwithoutCTAVisible).should("not.exist");
});

// Team Member page functionality

Cypress.Commands.add("tmHeroSectionTitle", (css, string, fontFamily) => {
  cy.get(css)
    .contains(string)
    .should("be.visible")
    .and("have.css", "font-family", fontFamily);
});

Cypress.Commands.add("tmHeroSectionCTAHref", (css, ctaText, href) => {
  cy.get(css)
    .contains(ctaText)
    .parent()
    .should("have.attr", "href")
    .and("contain", href);
});

Cypress.Commands.add("tmSectionFontColor", (css) => {
  cy.get(css).should("have.css", "color", "rgb(255, 255, 255)");
});

Cypress.Commands.add("tmSectionFont", (css, fontFamily) => {
  cy.get(css).should("have.css", "font-family", fontFamily);
});

Cypress.Commands.add("tmEduSubSection", (css, string, index) => {
  cy.get(css).eq(index).contains(string).should("be.visible");
});

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    return "rgb(" + r + ", " + g + ", " + b + ")"; //return 23,14,45 -> reformat if needed
  }
  return null;
}
