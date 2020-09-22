//const Mytodo = require('../models/MyTodo');
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
    for(item of req.query.info)
    {
        let s=0;
        for(let fi of homecontroller.MyTodoList)
        {
            if(item==fi.date)
            {
                homecontroller.MyTodoList.splice(s,1);
            }
            s++;
        }
    }
    return res.redirect('back');
    
};