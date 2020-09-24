// this is for the appearance of the 
var apperanceObject={
    cleaning:{'background':'grey','text':'evoy'},
    other:{'background':'navy','text':'whitesmoke'},
    personal:{'background':'yellow','text':'blue'},
    work:{'background':'navajowhite','text':'black'},
    school:{'background':'crimson','text':'bisque'},
}
function changeAppearance(){
let Allcate=document.querySelectorAll('.category-para');
for(let category of Allcate)
{
   let elementCategory=category.innerText;
    category.style.background=apperanceObject[elementCategory]['background'];
    category.style.color=apperanceObject[elementCategory]['text'];
}
}
changeAppearance();

function deleteappearance(){
    let tasks=$('.tasks');
    for(let task of tasks){
        if(task.firstElementChild.checked){
            task.style.textDecoration='line-through'
            task.style.opacity=0.4;
        }
        else
        {    task.style.textDecoration='none';
            task.style.opacity=1;
        }
    }
}
//deleteappearance();

$('.checkbox').click(deleteappearance);









function deletefunction(){
    let checkedID=[];
    let items=document.querySelectorAll('.tasks .checkbox');
    //fetching the buttons which are checked and ready to delete
    for(let item of items)
    {
        if(item.checked)
        {
            checkedID.push(item.id);
        }
    }
    //for sending delete task request to remove task from DB
    $.ajax({
        type:'GET',
        url:'/removeTask',
        data:{info:checkedID},
        error:function(){
           console.log('error');
        },   
    });
    //this is to delete the tasks from DOM
    for(let item of checkedID ){
        let allTask=$('.tasks');//for fetching each list item as they are the list items
        for(let i=0;i<allTask.length;i++)
        {
            if(allTask[i].id==`liitem-${item}`){
            allTask[i].remove();
            }
        }
    }
}
console.log('assets added');
//handling the delete-btn event to delete the task
$('#delete-btn').on('click',deletefunction);