const express = require('express')
const app = express()
// const path = require('path')
const PORT = process.argv[2]
const file = process.argv[3]

app.set('view engine', 'pug')
app.set('views', file)

app.get('/home', (req, res) => {
  const date = new Date().toDateString()
  res.render('index', {date})
})

app.listen(PORT, () => console.log('Listening on PORT:' + PORT))
