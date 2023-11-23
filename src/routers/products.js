const express = require('express');
const router=express.Router();

let productController=require('../controllers/productController.js');

router.get('/detail', productController.getDetail);

router.get('/cart', productController.getCart);

router.get('/create', productController.postCreate);

module.exports=router;