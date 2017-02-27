var express = require('express')
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('data/db.json')
var app = express()
var middlewares = jsonServer.defaults()


app.use( express.static('public') )

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
    req.body.done = false
  }
  // Continue to JSON Server router
  next()
})

server.use(function (req, res, next) {
  if (req.method === 'PUT') {
    req.body.modifiedAt = Date.now()
    req.body.createdAt = +req.body.createdAt
    if (req.body.done) {
      req.body.done = req.body.done === "true" ? true : false
    }
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use('/api/', router)
server.use(app)

server.listen(3000, function () {
  console.log('JSON Server is running')
})