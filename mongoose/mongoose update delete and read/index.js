const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/for-testing');
const PhoneSchema = new mongoose.Schema({
   name: String,
   price: Number,
    name: String,
    price: Number,
    brand: String,
    category: String

});

const saveinDB = async () => {
   const Phone = mongoose.model('Phone', PhoneSchema);
   let data = new Phone({ name: "max 131", price: 200, brand: 'xyz' });
   const result = await data.save();
   console.log(result);
}
//saveinDB();
/*
const updateinDB = async () =>{
    const Phone = mongoose.model('Phone' , PhoneSchema);
    let data = await Phone.updateone(
        { name: "max 131"},
        { $set :{price : 20000000000}}
    )
};

updateinDB();*/
const update = async () => {
    const Phone = mongoose.model('products', PhoneSchema);
    let data = await Phone.updateOne(
       { name: "vivo" },
       {
          $set: { price: 100000000000 }
       });
    console.log(data); }

    //update();

    async function letfind() {
      let Phone = mongoose.model('phone', PhoneSchema);
      let mydata = await Phone.find({});
      console.log(mydata);
      
    };

    letfind();

