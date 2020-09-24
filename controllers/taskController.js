
const MyTodoList=require('../models/MyTodo');


//this for adding the task  to the db using mongoose and return a response as a updated web page
module.exports.addTask=function(req,res){
    MyTodoList.create(req.body,function(error,newTask){
        if(error)
        {
            console.log('error in creating contact!',error);
            return;
        }
        console.log('*******',newTask);
        return res.redirect('back');
    });
};

//deleting a task from the 
module.exports.deleteTask=function(req,res){
    try{
      console.log(req.query);
      for(let item of req.query.info)
       {
        MyTodoList.findByIdAndDelete(item,function(err){//fetched task and delete by id of the task
            if(err)
            {
                console.log(`error in deleting the task ${err}`);
            }
        });
       }
    }

    catch{
        console.log('error in deleting');
    }
    
    
};