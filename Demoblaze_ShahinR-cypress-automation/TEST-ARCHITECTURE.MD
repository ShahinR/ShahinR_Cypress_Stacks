# Test plan/architecture is as follows :rocket: 
**The scripts (.js) are located in :** 

```bash
/../Q2Answer_ShahinR-cypress-automation/cypress/integration :

1. Case1_userSignup.js
2. Case2_userCheckout.js
```
**Commonly custom steps (login details, customer informations, assertion configurations, random data generator, cookies manager etc.) are located in :**

```bash
/../Q2Answer_ShahinR-cypress-automation/cypress/support :

1. commonCommands.js
2. Index.js
```
**Project configurations (URL, window size, hard coded data etc.) are located in :**

```bash
/../Q2Answer_ShahinR-cypress-automation :

1. Cypress.json
2. jsconfig.json
```
## Public dashboard with test executions (headless mode) results (videos, success rate etc.)

```bash
**Q2_userSignup.js : https://dashboard.cypress.io/projects/xcos5v/runs/1/specs/fb71f829-2122-43d9-92d4-def11e3552ab/video**
```
Then, you just have to click on the test you want to run.

## Launch Cypress in headless mode
This is an example using the `run --spec` command.

```bash
npx cypress run --spec './cypress/integration/<<YOUR_SCRIPT>>.js'
```
## Headless test execution
This is an example using the `run --spec` command.

```bash
npx exec -- cypress run --spec './cypress/integration/<<YOUR_SCRIPT>>.js'
```
