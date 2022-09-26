const express = require('express')
const bodyParser = require("body-parser")
const passport = require('passport')

const routes = require('./settings/routes')
const passportJwt = require('./midlewear/passport-jwt')

const PORT = 5000

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(passport.initialize())

passportJwt(passport)

routes(app)

app.listen(PORT, () => {
    console.log("Server start")
})

