if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')

const db = require('./db');

// middleware
app.use(session({
    secret: process.env.SECRET || 'mySecret',
    resave: false,
    saveUninitialized: false
}));



app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))



//database

db.connect();
//

require('./routes')(app);

app.listen(PORT, () => console.log( 'Listening on port:', PORT))


