const express = require('express')
const app = express()

// const PORT = process.env.PORT
// const API_KEY = process.env.API_KEY

// this is the same but shorter
const { PORT, API_KEY } = process.env

app.use(express.static('public'))

// app.get('/', (req, res) =>
//   res.send('Hello World!')
// )

// app.get('/clients', (req, res) =>
//   res.send('There are no clients!')
// )

// app.get('/about', (req, res) =>
//   res.send('There are no info!')
// )

// console.log(`Your API_KEY is ${API_KEY}`)
app.listen(PORT, () => console.log(`Listening on ${PORT}...`))
