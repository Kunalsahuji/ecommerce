const createError = require('http-errors')
const express = require('express');
const path = require('path');
const dbConnection = require('./models/dbConnection')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express()


// view engine setup
app.set("view", path.join(__dirname, "view"))
app.set("view engine", "ejs")

app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser)
app.use(express.static(path.join(__dirname, "public")))



app.get('/', (req, res, next) => {
    res.send("hey")
})

app.listen(3000)

module.exports = app