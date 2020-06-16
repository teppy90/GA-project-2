const express = require('express')
const router = express.Router()
const Book = require('../models/book')

router.get('/', async (req, res) => {
    let books
    try {
      books = Book.find().sort({ createAte: 'desc' }).limit(10).exec()
    } catch{
      books = []
    }
    res.render('index', { books: books })
})

module.exports = router