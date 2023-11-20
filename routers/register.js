const express = require('express');
const router=express.Router();

let registerController=require('../controllers/registerController.js');

router.get('/', registerController.index);

module.exports=router;