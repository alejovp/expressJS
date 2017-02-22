const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let tasks = []
let compTasks = []

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  const section = 'To Do List'
  res.render('index', { section, tasks })
})

app.get('/delete/:id', (req, res) => {
  const taskIndex = req.params.id
  tasks.splice(taskIndex, 1)
  res.redirect('/')
})

app.get('/done/:id', (req, res) => {
  const taskIndex = req.params.id
  const currentTask = tasks[taskIndex].task
  compTasks.push(currentTask)
  tasks.splice(taskIndex, 1)
  res.redirect('/')
})

app.get('/allDone', (req, res) => {
  compTasks = compTasks.concat(tasks.map(obj => obj.task))
  tasks = []
  res.redirect('/')
})

app.post('/', (req, res) => {
  const task = req.body.task
  const date = new Date()
  tasks.push({task, date})
  res.redirect('/')
})

app.get('/completed', (req, res) => {
  const section = 'Completed'
  res.render('completed', { section, compTasks })
})

app.listen(3000, console.log('Listening on PORT:3000...'))
