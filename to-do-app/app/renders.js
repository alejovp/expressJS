let tasks = []
let compTasks = []

exports.renderHome = (req, res) => {
  const section = 'To Do List'
  const activeList = 'active'
  const activeComp = ''
  res.render('index', { section, tasks, activeList, activeComp })
}

exports.renderCompleted = (req, res) => {
  const section = 'Completed'
  const activeComp = 'active'
  const activeList = ''
  res.render('completed', { section, compTasks, activeList, activeComp })
}

exports.deleteTask = (req, res) => {
  const taskIndex = req.params.id
  tasks.splice(taskIndex, 1)
  res.redirect('/')
}

exports.taskDone = (req, res) => {
  const taskIndex = req.params.id
  const currentTask = tasks[taskIndex].task
  compTasks.push(currentTask)
  tasks.splice(taskIndex, 1)
  res.redirect('/')
}

exports.allDone = (req, res) => {
  compTasks = compTasks.concat(tasks.map(obj => obj.task))
  tasks = []
  res.redirect('/')
}

exports.addTask = (req, res) => {
  const task = req.body.task
  const date = new Date()
  tasks.push({task, date})
  res.redirect('/')
}
