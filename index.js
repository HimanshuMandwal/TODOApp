const express=require('express');//included module express as framework
const app=express();//created express server
const port=8001;

const db=require('./config/mongoose');//for data base adding to server


app.set('view engine','ejs');//setting up the view engine as ejs
app.set('views','./views');

app.use(express.static('assets'));//for adding assets to our server
app.use(express.urlencoded());//it is a middleware 

app.use('/',require('./routes/index'));//this is the router setting




app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in setting up the server ${err}`);
    }
    else
    {
        console.log(`server is up and running on the port ${port}`);
    }
});