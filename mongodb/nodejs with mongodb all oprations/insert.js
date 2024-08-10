const dbconnect = require('./mongodb');

/*async function insert() {
    
    const db = await dbconnect();
  const result = db. insert({
    'name' :'vivo',
    'price' : 30000,
    'category' :'phone'
  });
}*/
async function insert() {
    const db = await dbconnect();
    const result = await db.collection('Phone').insertOne({
      'name': 'vivo',
      'price': 30000,
      'category': 'phone'
    });
    console.log(result); 
  }
  


insert();


