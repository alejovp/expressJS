const express = require('express')
const app = express()
const tasksRoutes = require('./app/routes')

app

  .use(express.static('public'))

  .set('view engine', 'pug')

  .use('/', tasksRoutes)

  .listen(3000, console.log('Listening on PORT:3000...'))
