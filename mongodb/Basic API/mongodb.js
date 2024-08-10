const { MongoClient } = require('mongodb');
const databaseName = 'for-testing';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbconnect() {
    let result = await client.connect();
    let db = result.db(databaseName);
    //collection = db.collection('Phone');
   // return collection;
    return db;
}

module.exports = dbconnect;
