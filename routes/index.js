const express=require('express');
const router=express.Router();
const homeController=require('../controllers/TODO_controller');

console.log('router is loaded successfully');
router.get('/',homeController.homes);







module.exports=router;