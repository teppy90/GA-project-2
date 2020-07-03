const db = require('../db')
const bcrypt = require('bcrypt')

module.exports = {
    async create(user) {
        try {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
            const addUser = await db.users.insertOne(user);
            return addUser;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this user ${JSON.stringify(addUser)}`);
        }
    },
    async get(username) {
        const user = await db.users.findOne({ username: username })
        if (!user) throw new Error(`The user ${username} is not in our DB`);
        return user.entries;
    },
    async find(username) {
        const user = await db.users.findOne({ username: username });
        if (!user) throw new Error(`The user ${username} is not in our DB`);
        return user;
    },

    async update(username, data) {
        try {
            const updatedItem = await db.users.updateOne({
                username:
                    username

            },
                {
                    $push: {
                        entries: {
                            title: data.title,
                            description: data.description
                        }
                    }
                })
            return updatedItem

        } catch (err) {
            throw new Error(`Due to ${err.message}`);
        }
    },
}