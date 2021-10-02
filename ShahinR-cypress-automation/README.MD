# Introduction
This repository is used to store all the automated tests and configurations for Manomano QA technical test (http://www.demoblaze.com).


1. **User signs up in the platform**
2. **User perform an order of 2 items**

# Prerequisites
- NPM 6.14.8+ (if you want to run tests with the GUI of Cypress)

# Installation
Clone the repository in your workspace

Run the Cypress installation
```bash
npm install cypress --save-dev
```
# Execute tests
## Launch Cypress with the graphical interface
This option allows you to select wich tests you want to run (one or all).
Firs you need to have _Cypress_ installed locally (be sure to install the same version than this project).
```bash
npx cypress open
```
Then, you just have to click on the test you want to run.

## Launch Cypress in headless mode
This is an example using the `run --spec` command.

```bash
npx cypress run --spec './cypress/integration/FO/<<YOUR_SCRIPT>>.js'
```
