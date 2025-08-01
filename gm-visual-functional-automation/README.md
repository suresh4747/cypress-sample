# Comprehensive User Guide for Accessibility and Visual Testing Framework

  

## Table of Contents

  

1. [Introduction and Objective](#1-introduction-and-objective)

2. [Project Structure](#2-project-structure)

3. [Configuration Files](#3-configuration-files)

	3.1 [cypress.config.js](#31-cypressconfigjs)

	3.2 [percy.yml](#32-percyyml)

	3.3 [package.json](#33-packagejson)

4. [Setting Up and Running Tests](#4-setting-up-and-running-tests)

5. [Generate fucntional automation report](#5-generate-fucntional-automation-report)

  

## 1. Introduction and Objective

  

This framework is designed to perform comprehensive end-to-end testing with a focus on functional and visual regression testing. The primary objectives are:

  

- To ensure web applications are ocnfigures with components and components are functioning as expected.

- To maintain visual consistency across different versions of the application.

- To provide an efficient and maintainable testing structure for ongoing development.

  

## 2. Project Structure

  

```

project-root/

├── cypress/

│ ├── e2e/

│ │ └── features

│ │ └── components

│ │ └── HeroComponent.feature

│ │ └── Disclaimer.feature

│ │ └── SectionHeading.feature

│ │ └── axe-percy-static-test.cy.js

│ ├── fixtures/

│ │ └── gm_static_urls/

│ │ └── stage_authored_site.json

│ │ └── stage_site.json

│ ├── support/

│ │ ├── pageObjects/

│ │ │ ├── disclaimerObj.js

│ │ │ ├── GMbrand.js.js

│ │ │ ├── heroComponentObj.js.js

│ │ │ ├── sectionHeadingObj.js.js

│ │ ├── step_definitions/

│ │ | ├── componentSteps/

│ │ │ ├── ChevyStepDef.js

│ │ │ ├── DisclaimerSteps.js

│ │ │ ├── DisclaimerSteps.js

│ │ │ ├── HeroComponentSteps.js

│ │ │ ├── SectionHeadingSteps.js

│ │ ├── commands.js

│ │ └── e2e.js

│ └── reports/

├── node_modules/

├── .percy.yml

├── cucumber-html-reporter.js

├── cucumber-json-formatter

├── cucumber-json-formatter.exe

├── cypress.config.js

├── package-lock.json

└── package.json

```

  

## 3. Configuration Files

  

### 3.1 cypress.config.js

  

This file contains the Cypress configuration settings. Key configurations include:

  

```javascript

module.exports = defineConfig({

video:  false,

experimentalStudio:  true,

viewportHeight:  1000,

viewportWidth:  1500,

defaultCommandTimeout:  150000,

experimentalMemoryManagement:  true,

numTestsKeptInMemory:  0,

pageLoadTimeout:  90000,

e2e: {

setupNodeEvents(on, config) {

// Event listeners and task definitions

},

env: {

tags :  "@component",

testEnv:  "stage",

visual:  "gm_static_urls",

url:  "https://publish-p128871-e1404354.adobeaemcloud.com/content/gm-ecommerce",

stage:  "https://publish-p128871-e1259517.adobeaemcloud.com/content/gm-ecommerce/",

dev:  "",

percy_waitTime:  10000,

axe_waitTime:  10000,

shortWait:  3000,

mediumWait:  10000,

longWait:  25000,

axescan:  false,

percy:  true,

},

}

});

```

  

Key points:

- Video recording is disabled to save resources.

- Viewport size is set to 1500x1000.

- Command and page load timeouts are set to handle slower operations.

- Experimental memory management is enabled to optimize performance.

- Environment variables are defined for different test environments and wait times.

  

### 3.2 percy.yml

  

This file configures Percy for visual regression testing:

  

```yaml

version: 2

snapshot:

widths:

- 430

- 834

- 1768

minHeight: 1024

enableJavaScript: false

cliEnableJavaScript: true

discovery:

networkIdleTimeout: 100

upload:

files: "**/*.{png,jpg,jpeg}"

```

  

Key points:

- Snapshots are taken at 430px (mobile), 834px (tablet) and 1768px (desktop) widths.

- Minimum snapshot height is set to 1024px.

- JavaScript is disabled in the browser but enabled for CLI operations.

- Network idle timeout is set to 100ms for efficient snapshot capturing.

- All PNG, JPG, and JPEG files are included in the upload.

  

### 3.3 package.json

  

This file defines project metadata and scripts:

  

```json

{

"name": "GM Glass",

"version": "1.0.0",

"description": "",

"main": "index.js",

"scripts": {

"test": "cypress run --spec **/**/*.feature --headed --browser chrome",

"cy:all-headless": "cypress run",

"cy:percy": "percy exec -- cypress run --browser chrome --headed",

"cy-browserstack": "browserstack-cypress run --spec **/*.feature --headed",

"cypress-features-test": "cypress run -b chrome --headed --spec cypress/e2e/features/components/*.feature",

"cypress-specific-feature-test": "cypress run -b chrome --headed --spec cypress/e2e/features/components/HeroComponent.feature"

},

"dependencies": {

"@cypress/webpack-preprocessor": "^5.12.0",

"@percy/cli": "^1.25.0",

"@percy/cypress": "^3.1.2",

"@testing-library/cypress": "^9.0.0",

"@types/chai-string": "^1.4.2",

"cypress": "^12.17.4",

// ... other dependencies

}

}

```

  

Key scripts:

-  `npm run test`: Runs all Cypress tests.

-  `npm run cypress-visual-test`: Execute percy visual testing

-  `npm run cypress-specific-feature-test`: Execute specific feature file

-  `npm run cypress-features-test`: Execute all feature file

*Note* : To the above commands we can pass -- --headed --browser chrome --env testenv=qlab02,percy=false,axescan=false

    --headed --browser chrome -> specifies chrome browser in headed mode
    
    --env testenv=visual,percy=false/true
    
    if not this passed then values configured in env object of cypress config will be picked as default value.


## 4. Setting Up and Running Tests

  

Pre-requisites:

Installation of below tools from software center

1. nodejs

2. visual studio code

3. percy project and token (refer to percy documentation in confluence)

  

1. Clone the repository:

```

git clone <repository-url>

cd <project-directory>

```

  

2. Install dependencies:

```

npm install

```

  

3. Run tests:

- `npm run test`: Runs all Cypress tests.

- `npm run cypress-visual-test`: Execute percy visual testing

- `npm run cypress-specific-feature-test`: Execute specific feature file

- `npm run cypress-features-test`: Execute all feature file

*Note* : To the above commands we can pass -- --headed --browser chrome --env testenv=visual/stage,percy=false

    --headed --browser chrome -> specifies chrome browser in headed mode
    
    --env testenv=visual/stage,percy=false/true,axescan=false/true

  4. View reports:

- Cypress test results: Check the Cypress Dashboard or `cypress/reports/` directory.

- Percy visual diffs: Check the Percy dashboard (link provided in console output).

- Functional automation reports: Check `/reports/` for HTML, Excel, and JSON reports.

  
  

npx percy-report generate <build-id>

  

example: https://percy.io/8dc67a63/tmo-shop/builds/36003372

npx percy-report generate 36003372

  

## 5. Generate fucntional automation report

- node .\cucumber-html-reporter.js
