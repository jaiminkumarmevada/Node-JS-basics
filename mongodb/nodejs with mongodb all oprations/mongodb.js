//common database connection node js file
const { MongoClient } = require('mongodb');
const databaseName = 'for-testing';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbconnect() {
    let result = await client.connect();
    let db = result.db(databaseName);

    // remove the belove two comment that index.js working
   //---> (1) // collection = db.collection('Phone');
   //---> (2)// return collection;
 // otherwise insert.js working
  return db;
}

module.exports = dbconnect;

