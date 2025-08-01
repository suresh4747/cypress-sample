const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/**.feature",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("file:preprocessor", cucumber());
      return config;
    },
  },
  projectId: "",
  downloadsFolder: "cypress/downloads/",
  watchForFileChanges: true,
  pageLoadTimeout: 90000,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 1000,
  video: false,
  requestTimeout: 10000,
  responseTimeout: 10000,
  retries: { runMode: 0 },
  waitForAnimations: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  experimentalStudio: false,
  experimentalWebKitSupport: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "PDS-suite",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true,
  },
  env: {
    TAGS: "@pds",
    testEnv: "pdsqadomain",
    qa: "https://publish-p116807-e1144685.adobeaemcloud.com",
    stage: "https://publish-p116807-e1178930.adobeaemcloud.com",
    kdqadomain:"https://kd3-qa.pdslocal.com/",
    kdstgdomain:"https://kd2-stg.pdslocal.com/",
    mdqadomain:"https://md3-qa.pdslocal.com/",
    mdstgdomain:"https://md2-stg.pdslocal.com/",
    pdsqadomain:"https://qa.pacificdentalservices.com/",
    pdsstgdomain:"https://stg.pacificdentalservices.com/",
    gpqadomain:"https://gp3-qa.pdslocal.com/",
    gpstgdomain:"https://gp2-stg.pdslocal.com/",
    percy_waitTime: 1000,
    shortWait: 3000,
    mediumWait: 10000,
    longWait: 25000,
  },
});