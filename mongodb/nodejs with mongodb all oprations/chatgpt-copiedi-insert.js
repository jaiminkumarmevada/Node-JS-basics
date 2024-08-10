//working properly
//copied from chatgpt
//Jaimin Mevada


const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:27017';
const dbName = 'for-testing';
const client = new MongoClient(uri);

const newData = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
};

async function insertData() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection('Phone');

        const result = await collection.insertOne(newData);
        console.log('Data inserted successfully:', result.insertedId);
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
     
        await client.close();
    }
}

insertData();