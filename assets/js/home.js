
function deletefunction(){
    let checkedID=[];
    let items=document.querySelectorAll('.find .checkbox');
    for(let item of items)
    {
        if(item.checked)
        {
            checkedID.push(item.id);
        }
    }
    $.ajax({
        type:'GET',
        url:'/removeTask',
        data:{info:checkedID},
        error:function(){
           console.log('error');
        },   
    });
    for(let item of checkedID ){
        let allTask=$('.find');
        for(let i=0;i<allTask.length;i++)
        {
            if(allTask[i].id==`liitem-${item}`){
            allTask[i].remove();
            }
        }
    }
}

console.log('assets added');
$('#delete-btn').on('click',deletefunction);