const express = require('express');
const router=express.Router();

let productCartController=require('../controllers/productCartController.js');

router.get('/', productCartController.index);

module.exports=router;