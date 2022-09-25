const express = require('express')
const PORT = 5000
const bodyParser = require("body-parser")

const routes = require('./settings/routes')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)

app.listen(PORT, () => {
    console.log("Server start")
})

