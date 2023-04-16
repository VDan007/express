const express = require('express');
const app = express();
app.listen(3000);

//middleware
app.use((req,res,next)=>{
    console.log('new request made');
    console.log('host' + req.hostname);
    console.log('new request made');
    next();
});
//middleware for static files like css
app.use(express.static('public'));

app.get('/',(req,res)=>{
   // res.send('<p>Home page</p>');
   res.sendFile('./views/index.html',{ root:__dirname});
});
app.get('/about',(req,res)=>{
   // res.send('<p>About page</p>');
   res.sendFile('./views/about.html',{ root:__dirname });
});

app.get('/about-us',(req,res)=>{
    res.redirect('./about');
});

app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{ root:__dirname });
});