const usersRepository = require('../repositories/usersRepository');
const bcrypt = require('bcrypt');

module.exports = {
    newForm(req,res) {
        res.render('sessions/new');
    },
    async create(req,res){
        try{
            const user = await usersRepository.find(req.body.username);
            if(bcrypt.compareSync(req.body.password, user.password)) {
                req.session.currentUser = user;
                return res.redirect('/books');
            }else{
                throw new Error();
            }
        } catch(err) {
            return res.send('<a href="/"> Wrong password</a>')
        }
       
    },
    destroy (req, res) {
      return req.session.destroy(() => {
            res.redirect('/');

        })
    }
}