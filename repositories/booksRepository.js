const db = require('../db');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    getAll(userid, res) {
        return db.recipes.find({ userid: userid }).toArray();
    },
    async getOneByName(userid) {
        try {
            const o_id = new ObjectId(userid);
            const data = await db.recipes.findOne({
                _id: o_id
            });
            return data

        } catch (err) {
            throw new Error(`Error: ${err.message}`);
        }
    },
  
    async create(item) {
        try {
            const addItem = await db.recipes.insertOne(item);
            return addItem;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    },

    async update(userid, data) {
        try {
            const { matchedCount } = await db.recipes.updateOne(
                {
                    _id: ObjectId(userid)
                },
                {
                    $set: data
                });
            if (!matchedCount) {
                throw new Error(`${title} doesn't exist`);
            } else {
                return true;
            }
        } catch (err) {
            throw new Error(`${err.message}`);
        }
    },


    async deleteById(userid) {
        try {

            const { modifiedCount } = await db.recipes.deleteOne({
                _id: ObjectId(userid)
            })
            if (!modifiedCount) throw new Error('delete fail');
        } catch (err) {
            throw new Error(`${err.message}`);
        }
    }
}

