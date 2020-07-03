
const usersController = require('./controllers/usersController');
const sessionsController = require('./controllers/sessionsController');
const appController = require('./controllers/appController');
const booksController = require('./controllers/booksController');
// const itemsController = require('./routes/items');


module.exports = app => {

    // login routes

    app.get('/', appController.index),
    app.get('/app', appController.app),

    app.get('/sessions/new', sessionsController.newForm)
    app.post('/sessions', sessionsController.create)
    app.delete('/sessions', sessionsController.destroy)

    app.get('/users/new', usersController.newForm)
    app.get('/users/success', usersController.success)
    app.post('/users', usersController.create)  

// bookshelf routes

app.get('/books', booksController.getAll);
app.get('/books/:_id/edit', booksController.edit)
app.get('/books/:_id/', booksController.getOneByName)
app.put('/books/:_id/', booksController.update)
app.delete('/books/:_id', booksController.destroy);
app.get('/new', booksController.new)
app.post('/books', booksController.create);


};