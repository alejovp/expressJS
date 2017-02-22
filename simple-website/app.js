const express = require('express')
const stylus = require('stylus')
const nib = require('nib')

const app = express()

const compile = (str, path) => {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('view engine', 'pug')

app.use(stylus.middleware(
  { src: __dirname + '/public', compile }))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  const title = 'Home'
  res.render('index', { title })
})

app.listen(3000, () => console.log('Listening PORT:3000...'))
