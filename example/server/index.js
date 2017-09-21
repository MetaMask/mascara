const express = require('express')
const createMetamascaraServer = require('../server/')
const createBundle = require('./util').createBundle
const serveBundle = require('./util').serveBundle

//
// Dapp Server
//

const dappServer = express()

// serve dapp bundle
serveBundle(dappServer, '/app-bundle.js', createBundle(require.resolve('../app.js')))
dappServer.use(express.static(__dirname + '/../app/'))
// start the server
const dappPort = '9010'
dappServer.listen(dappPort)
console.log(`Dapp listening on port ${dappPort}`)
