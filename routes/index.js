const express=require('express');

const router=express.Router();

const homeController=require('../controllers/homecontroller');//contains the home controller items
const taskController=require('../controllers/taskController');//contains the task controllers like delete and add task function


console.log('router is loaded successfully');
//for rediring home page
router.get('/',homeController.homes);
//for adding to our TODO list
router.post('/addTask',taskController.addTask);
//for deleting task from our TODO
router.get('/removeTask',taskController.deleteTask);



module.exports=router;