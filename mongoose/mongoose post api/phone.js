const mongoose = require('mongoose');
const phoneSchema= mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

module.exports= mongoose.model("products",phoneSchema);