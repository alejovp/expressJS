const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const renders = require('./renders')

router
  // parse application/x-www-form-urlencoded
  .use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  .use(bodyParser.json())

  .get('/', renders.renderHome)

  .get('/delete/:id', renders.deleteTask)

  .get('/done/:id', renders.taskDone)

  .get('/allDone', renders.allDone)

  .post('/', renders.addTask)

  .get('/completed', renders.renderCompleted)

module.exports = router
