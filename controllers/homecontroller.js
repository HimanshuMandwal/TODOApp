var MyTodoList=[
    {
        description:'get vegitable',
        category:'work',
        date:'23/12/20',
    },
    {
        description:'submit assignment',
        category:'school',
        date:'10/12/20',
    },
    {
        description:'clean the freaze',
        category:'cleaning',
        date:'5/12/20',
    },
];
module.exports.MyTodoList=MyTodoList;
module.exports.homes=function(req,res){

    return res.render('home',{
        title:'TODO App',
        my_todo_list:MyTodoList
    });
};