// ************ Require's ************
const express = require('express');
const router=express.Router();

const validateProducts = require('../middlewares/validateProducts')




// ************ Controller Require ************
let productController=require('../controllers/productController.js');

/*** GET ALL PRODUCTS http://localhost:3000/products ***/
router.get('/products', productController.getIndex);

/*** CREATE ONE PRODUCT http://localhost:3000/products/create ***/
//router.get('/create', productController.getCreate);
//router.post('/create', upload.single('image'),validateProducts, productController.store);


router.get('/detail', productController.getDetail);

router.get('/cart', productController.getCart);



/***Create one product http://localhost:5000/products/create ***/

router.get("/create", productController.create);
router.post("/create", productController.store);
//router.post("/create", upload.single('image'), productController.store);


//router.post("/create", (req, res)=>(productController.postCreate));

router.get('/edit', productController.postEdit);

module.exports=router;