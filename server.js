'use strict'

const Hapi = require('hapi')
const routes = require('./routes')


const server = new Hapi.Server()
server.connection({ port: 1974 })

server.route(routes)

// Start the show!
if (!module.parent) {
  server.start(function (err) {
    if (err) throw err
    console.log('Server running at:', server.info.uri)
  })
}


module.exports = server
