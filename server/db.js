const environment = process.env.NODE_ENV || 'development'
const config = require('./../knexfile')[environment]
const connection = require('knex')(config)


function getBackgrounds (testConn) {
  const conn = testConn || connection
  return conn('backgrounds').select()
}

  module.exports = {
        getBackgrounds
  }