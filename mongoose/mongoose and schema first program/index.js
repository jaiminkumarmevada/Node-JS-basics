//mongoose use for validation purpose 
// define the structure of data of mongodb


//written by own not working



/*const mongoose = require('mongoose'); 
const url = "mongodb://localhost:27017/for-testing"
const { string } = require('mongoose');

async function main() {
    await mongoose.connect(url);
 const PhoneSchema = new mongoose.Schema({
    name : string
 });
const PhoneModel = mongoose.Model ('Phone',PhoneSchema ) ;
//let data = new PhoneModel({name : "Mevada"});
let data = new PhoneModel({ 'name': "Mevada" });


let result = await data.save();
console.log(data);
    
};

main();*/


// written by google bard working



const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/for-testing';

async function main() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    const PhoneSchema = new mongoose.Schema({
      name: String // Using 'String' instead of '{ string }'
    });

    const PhoneModel = mongoose.model('Phone', PhoneSchema); // Corrected 'mongoose.Model' to 'mongoose.model'

    let data = new PhoneModel({ name: 'Mevada',
price : '10k;' }); // it not store price in database

    let result = await data.save();
    console.log(result); // Output the saved result instead of 'data'

    await mongoose.disconnect(); // Close the connection after operations
  } catch (error) {
    console.error(error);
  }
}

main();

