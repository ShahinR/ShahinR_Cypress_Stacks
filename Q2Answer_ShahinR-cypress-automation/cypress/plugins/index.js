/// <reference types="cypress" />

/*
 @type {Cypress.PluginConfig}
 */
 module.exports = function (on, config) {
  // configure plugins here
}

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




