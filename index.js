const express=require('express');
const app=express();
const port=8003;

const db=require('./config/mongoose');


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assets'));
app.use(express.urlencoded());
app.use('/',require('./routes/index'));




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