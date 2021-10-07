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

# Execute tests 
## Launch Cypress with the graphical interface (Cypress GUI)
This option allows you to select wich tests you want to run (one or all).
Firstly, you need to have _Cypress_ installed locally (be sure to install the same version than this project).
```bash
npx cypress open
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
