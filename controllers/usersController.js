const usersRepository = require('../repositories/usersRepository');
const validate = require('../validator/schema/usersValidator');

module.exports = {
    async create(req, res) {
        try {
            console.log('hello', req.body)
            console.log('world', validate)
            validate.users.validate(req.body)
            console.log('jello', req.body)

            await usersRepository.create(req.body)
            res.redirect('/users/success')
        } catch (err) {
            res.send(err)
        }
    },
    newForm(req, res) {
        res.render('users/new');
    },
    success(req, res) {
        res.render('users/success')
    },
};