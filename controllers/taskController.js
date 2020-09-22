
const MyTodoList=require('../models/MyTodo');



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
module.exports.deleteTask=function(req,res){
    console.log(req.query);
    for(let item of req.query.info)
    {
        MyTodoList.findByIdAndDelete(item,function(err){
            if(err)
            {
                console.log(`error in deleting the task ${err}`);
            }
        });
    }
    
    
};