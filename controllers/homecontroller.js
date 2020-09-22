// var MyTodoList=[
//     {
//         description:'get vegitable',
//         category:'work',
//         date:'23/12/20',
//     },
//     {
//         description:'submit assignment',
//         category:'school',
//         date:'10/12/20',
//     },
//     {
//         description:'clean the freaze',
//         category:'cleaning',
//         date:'5/12/20',
//     },
// ];
const MyTodoList=require('../models/MyTodo');
module.exports.homes=function(req,res){
    MyTodoList.find({},function(err,mytask){
        if(err)
        {
            console.log("error in fetching the content from the DB");
            return ;
        }
        else{
            return res.render('home',
            {
                title:'Contact List',
                my_todo_list:mytask
            });
        }
    });
};