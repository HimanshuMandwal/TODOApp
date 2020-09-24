

// this is for the appearance of the categories
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




//this for the string month instead of numbered month (eg.. 1->jan)
var months={
    '01':'Jan',
    '02':'Fab',
    '03':'Mar',
    '04':'April',
    '05':'May',
    '06':'Jun',
    '07':'July',
    '08':'Aug',
    '09':'Sept',
    '10':'Oct',
    '11':'Nov',
    '12':'Dec', 
}
function changedate(){
    var datecontainer=$('.date-container');
    for(let date of datecontainer){
        let currentdate=date.innerText;
        date.innerHTML=`<span><i class="fas fa-calendar-alt"></i></span> ${months[currentdate.substr(5,2)]},${currentdate.substr(8)},${currentdate.substr(0,4)}`;
    }
}
changedate();



//this is for the line through any task which is to be deleted

function deleteappearance(){
    //fetched the tasks
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
//this handles the click event on the checkbox for deleting purpose
$('.checkbox').click(deleteappearance);



//for the handling of the delete button
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