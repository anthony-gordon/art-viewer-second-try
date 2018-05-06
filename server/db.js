const environment = process.env.NODE_ENV || 'development'
const config = require('./../knexfile')[environment]
const connection = require('knex')(config)


function getBackgrounds (testConn) {
  const conn = testConn || connection
  return conn('backgrounds').select()
}

function getArtworks(testConn) {
    const conn = testConn || connection
    return conn('artworks').select()
  }

  module.exports = {
        getBackgrounds,
        getArtworks
  }