const { body } = require('express-validator')

module.exports = [
    body('email')
        .isEmail().withMessage('Ingresa un email').bail(),  
    body('password')
        .notEmpty().withMessage('Ingresa una contraseña').bail(),


    // body('idColor')
    //     .notEmpty().withMessage('Ingresa un color'),
]