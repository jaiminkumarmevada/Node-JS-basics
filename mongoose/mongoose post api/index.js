const express= require('express') ;
const app = express();
const db = require('./config');
const phone = require('./phone');


app.use(express.json());
app.post ('/create',async(req,resp)=>{

let data = new phone(req.body);
let result = await data.save();


console.log(req.body);
resp.send(req.body);
});

app.listen(4547);