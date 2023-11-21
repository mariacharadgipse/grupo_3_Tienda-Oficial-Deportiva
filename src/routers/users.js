const express = require('express');
const router=express.Router();

let userController=require('../controllers/userController.js');

router.get('/login', userController.getLogin);

router.get('/register', userController.getRegister);

module.exports=router;