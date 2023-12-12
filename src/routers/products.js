// ************ Require's ************
const express = require('express');
const router=express.Router();

const validateProducts = require('../middlewares/validateProducts')




// ************ Controller Require ************
let productController=require('../controllers/productController.js');

/*** GET ALL PRODUCTS http://localhost:3000/products ***/
router.get('/products', productController.getIndex);

/*** CREATE ONE PRODUCT http://localhost:3000/products/create ***/
router.get('/create', productController.getCreate);
//router.post('/create', upload.single('image'),validateProducts, productController.store);


router.get('/detail', productController.getDetail);

router.get('/cart', productController.getCart);




router.get('/create', productController.postCreate);

//router.post("/create", (req, res)=>(productController.postCreate));

router.get('/edit', productController.postEdit);

module.exports=router;