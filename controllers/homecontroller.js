//this is for the home controller

const MyTodoList=require('../models/MyTodo');//for fetching data from data base

module.exports.homes=function(req,res){
    MyTodoList.find({},function(err,mytask){
        if(err)
        {
            console.log("error in fetching the content from the DB");
            return ;
        }
        else{
            return res.render('home',{
                title:'TODO App',
                my_todo_list:mytask
            });
        }
    });
};