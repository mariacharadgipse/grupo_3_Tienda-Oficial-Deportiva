const express = require('express');
const router=express.Router();

let userController=require('../controllers/userController.js');

//Formulario de Login
router.get('/login', userController.getLogin);

//Procesar el Login
router.post('/login', userController.postLogin);

// Perfil de Usuario
//router.get('/profile/', authMiddleware, userController.profile);

// Logout
router.get('/logout/', userController.logout);



router.get('/register', userController.getRegister);

module.exports=router;