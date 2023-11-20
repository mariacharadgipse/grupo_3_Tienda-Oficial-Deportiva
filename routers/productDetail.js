const express = require('express');
const router=express.Router();

let productDetailController=require('../controllers/productDetailController.js');

router.get('/', productDetailController.index);

module.exports=router;