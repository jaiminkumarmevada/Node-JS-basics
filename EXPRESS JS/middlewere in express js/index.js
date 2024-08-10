const express = require('express');
const app = express();


const reqFilter = (req,resp,next)=>{

    if(!req.query.age){

        resp.send("Plase provide your age in url")
    }

    else if(req.query.age<18){
        resp.send("You are not eligible for this site")
    }

    else{
        next();
    }

}

app.use(reqFilter);

app.get('/',(req,resp)=> {

    resp.send('welcome to the middlewere topic');
});


app.listen(4546);