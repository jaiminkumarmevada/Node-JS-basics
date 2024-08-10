//directly copied from the code step by step git hub
// just understanding purpose 
//Jaimin Mevada
//27/12/2023 5:01 PM evening time







app=require('./app')
let arr=[4,1,6,3,4,89,0];
console.log(app.xyz())
const result =arr.filter((item)=>{
    return item>=4
});
console.warn(result);
const express = require('express');
require("./config");
const Product = require('./product');
const app = express();

app.use(express.json());

app.get("/search/:key",async (req,resp)=>{
    let data = await Product.find(
        {
            "$or":[
                {name:{$regex:req.params.key}},
                {brand:{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);

})





app.listen(5000)