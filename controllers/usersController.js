const usersRepository = require('../repositories/usersRepository');
const validate = require('../validator/schema/usersValidator');

module.exports = {
    async create(req, res) {
        try {
            console.log('hello', req.body)
            console.log('cake', validate)
            validate.users.validate(req.body)
            console.log('hello-2', req.body)

            await usersRepository.create(req.body)
            res.redirect('/users/success')
        } catch (err) {
            res.send(err)// set up 404 error later 
        }
    },
    newForm(req, res) {
        res.render('users/new');
    },
    success(req, res) {
        res.render('users/success')
    },
};