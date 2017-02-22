const express = require('express')
const app = express()
const PORT = process.argv[2]

app.get('/home', (req, res) => res.end('Hello World!'))

app.listen(PORT, () => console.log('Listening on PORT:' + PORT))
