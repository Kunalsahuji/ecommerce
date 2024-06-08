const createError = require('http-errors')
const express = require('express');
const app = express()
const cookieParser = require('cookie-parser');

const path = require('path');
// require db 
const db = require('./models/dbConnection')
const logger = require('morgan');


// require routers
const userRouter = require('./routes/user')
const ownerRouter = require('./routes/owners')
const productRouter = require('./routes/products')

// view engine setup
app.set("view", path.join(__dirname, "view"))
app.set("view engine", "ejs")

app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser)
app.use(express.static(path.join(__dirname, "public")))

// routes
app.use('/users', userRouter)
app.use('/owners', ownerRouter)
app.use('/products', productRouter)

// port
app.listen(3000)
module.exports = app