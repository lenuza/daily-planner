const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// set port
const port = process.env.port || 8000

const server = app.listen(port, () => {
    console.log(`Hello, listening on port ${port}`)
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})
