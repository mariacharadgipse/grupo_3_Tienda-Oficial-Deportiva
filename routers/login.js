const express = require('express');
const router=express.Router();

let indexController=require('../controllers/loginController.js');

router.get('/', loginController.index);

module.exports=router;