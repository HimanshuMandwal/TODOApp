const express=require('express');
const router=express.Router();
const homeController=require('../controllers/homecontroller');
const taskController=require('../controllers/taskController');


console.log('router is loaded successfully');
router.get('/',homeController.homes);
router.post('/addTask',taskController.addTask);
router.get('/removeTask',taskController.deleteTask);



module.exports=router;