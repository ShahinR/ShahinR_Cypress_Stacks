/// <reference types="cypress" />

/*
 @type {Cypress.PluginConfig}
 */

 module.exports = function (on, config) {
  // configure plugins here
}

/*const sqlServer = require('cypress-sql-server');
const dbConfig = require('../../cypress.json');

module.exports = (on, config) => {
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
  return tasks
}*/

/*const sqlServer = require('cypress-sql-server');

module.exports = (on, config) => {
  tasks = sqlServer.loadDBPlugin(config.db)
  on('task', tasks)
}*/

// querying the database from Node
function queryDB(connectionInfo, query) {
    const connection = mysql.createConnection(connectionInfo)
  
    connection.connect()
  
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          return reject(error)
        }
  
        connection.end()
  
        return resolve(results)
      })
    })
  }
  
  
  
  // This function is called when a project is opened or re-opened 
  // (e.g. due to the project's config changing)
  /*let percyHealthCheck = require("@percy/cypress/task");
  
  module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    on("task", percyHealthCheck);
  };*/
  
  // DBMS config  
