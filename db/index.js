const MongoClient = require('mongodb').MongoClient;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
const DB_NAME = 'project2';
const COLLECTIONS = {
    recipes: 'recipes',
    USERS: 'users',
};

const client = new MongoClient(MONGO_URI, { useUnifiedTopology: true });

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to MongoDB');
        const db = connection.db(DB_NAME);
        this.recipes = db.collection(COLLECTIONS.recipes);
        this.users = db.collection(COLLECTIONS.USERS);
    },
    disconnect () {
        return client.close();
    },
};
