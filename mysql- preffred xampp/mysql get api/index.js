const con = require('./conn');
const express = require('express');
const app = express();

app.get('/',(req,resp)=>{
   con.query("SELECT * FROM nodejstest",(err,result)=>{

    if(err){
      resp.send("not connected yet")

    }
    else {
        resp.send(result)
    }
   });
});

app.listen(3000);