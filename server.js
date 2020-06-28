if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
//https://github.com/Mrschabs/warbler/issues/3 might want to use seperate config folder for all config

const express = require('express')
const app = express()
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 3000
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')


const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')
const userRouter  = require('./routes/users');
const sessionRouter = require('./routes/sessions.js')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))


//mongoose
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to Mongoose'))

app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)
app.use('/users', userRouter)
app.use('/sessions', sessionRouter)


app.listen(PORT, () => console.log( 'Listening on port:', PORT))

