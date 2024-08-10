import express from 'express'
import path from 'path'

const app= express()

app.get('',(req,resp)=>{

    resp.sendFile(__dirname+"/index.html");
});
app.get('/about',(req,resp)=>{

    resp.send('Hello this is hom page');
});

app.listen(5002);