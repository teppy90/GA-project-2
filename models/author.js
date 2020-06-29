const mongoose = require('mongoose')
const Book = require('./book')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

authorSchema.pre('remove', function(next) {
    Book.find({ author: this.id }, (err, books) => {
        if (err) {
          next(err)
        } else if (books.length > 0) {
          next(new Error('This author has books still'))
        } else {
          next()
        }
    })
})

module.exports = authorSchema

// const userSchema = new Schema({ name: String, email: String });

// // The alternative to the export model pattern is the export schema pattern.
// module.exports = userSchema;

// Because if you export a model as shown below, the model will be scoped
// to Mongoose's default connection.
// module.exports = mongoose.model('User', userSchema);