const express=require('express');
const port=8000;





const app=express();
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
})