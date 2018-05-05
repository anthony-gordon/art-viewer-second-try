const path = require('path')
const express = require('express')
const backgroundsRoute = require('./routes/backgroundsRoute')

const server = express()

// Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

// Routes

server.use('/api/v1', backgroundsRoute)

module.exports = server