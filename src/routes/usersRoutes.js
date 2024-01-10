const express = require('express');
const router=express.Router();

//REGISTER

const {getRegister, register, postRegister} = require('../controllers/userController.js')

router.get('/register', getRegister);

router.post('/register', postRegister)



//LOGIN

//let userController=require('../controllers/userController.js');
const { getLogin, postLogin, profile, logout } = require('../controllers/userController.js')

//Formulario de Login
router.get('/login', getLogin);

//Procesar el Login
router.post('/login', postLogin);

// Perfil de Usuario
//router.get('/profile/', authMiddleware, userController.profile);

// Logout
//router.get('/logout/', userController.logout);

module.exports=router;