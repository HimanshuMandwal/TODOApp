
const mongoose=require('mongoose');//require the moongoose library which makes easy to deal with mongoDB

mongoose.connect('mongodb://localhost/todo_task_db');//connect the data base

//acquire the connection(to check if it is succesful)
const db=mongoose.connection;

//if there is an error in connecting to DB
db.on('error',console.error.bind(console,'error in connecting to DB'));

//if it is up and running than print this pard
db.once('open',function(){
    console.log('connected succefully to DB');
});