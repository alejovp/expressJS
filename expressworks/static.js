const express = require('express')
const app = express()
const path = require('path')
const PORT = process.argv[2]
const file = process.argv[3]
const staticFolder = path.join(__dirname, 'public')

app.use(express.static(file || staticFolder))

app.listen(PORT, () => console.log('Listening on PORT:' + PORT))
