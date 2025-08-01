const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require('fs');
const path = require('path');
module.exports = defineConfig({
  e2e: {
    specPattern: [
      "cypress/e2e/features/**/**.feature",
      "cypress/e2e/features/**/**.cy.js"],
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("file:preprocessor", cucumber());
      const testLogFile = path.join(__dirname + "/cypress/logs", 'test-specific.log');
      const executionLogFile = path.join(__dirname + "/cypress/logs", 'cypress-execution.log');
      on('task', {
        logTest(message) {
          fs.appendFileSync(testLogFile, `${new Date().toISOString()} - ${message}\n`);
          return null;
        },
      });
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
  requestTimeout: 20000,
  responseTimeout: 20000,
  retries: { runMode: 0 },
  waitForAnimations: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  experimentalStudio: false,
  experimentalWebKitSupport: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "GM-Glass-suite",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true,
  },
  env: {
    tags : "@component",
    testEnv: "visual",
    visual: "gm_static_urls",
    url: "https://publish-p128871-e1404354.adobeaemcloud.com/content/gm-ecommerce",
    stage: "https://publish-p128871-e1259517.adobeaemcloud.com/content/gm-ecommerce/",
    dev: "",
    percy_waitTime: 10000,
    axe_waitTime: 10000,
    shortWait: 3000,
    mediumWait: 10000,
    longWait: 25000,
    axescan: false,
    percy: true,
  },
});
