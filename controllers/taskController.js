const homecontroller=require('./homecontroller');
module.exports.addTask=function(req,res){
    homecontroller.MyTodoList.push(req.body);
    return res.redirect('back');
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