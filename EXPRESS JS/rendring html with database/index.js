const express = require('express');
const app = express();
const PORT = 4520;

app.set('view engine','ejs');

app.get('/profile',(req,resp)=>{
const user = {
    name : 'Developer Jaimin Mevada',
    email : 'jaiminkumarmevada@gmail.com',
    city : 'Chandisar'
}
    resp.render('profile',{user}); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });