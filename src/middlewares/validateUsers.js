const { body } = require('express-validator')

module.exports = [
    body('firstname')
        .notEmpty().withMessage('Debes ingresar un nombre').bail(),
    body('lastname')
        .notEmpty().withMessage('Debes ingresar un apellido').bail(),


    body('email')
        .notEmpty().withMessage('Ingresa un email').bail(),

    body('password')
        .notEmpty().withMessage('Ingresa una contraseña').bail(),


    // body('idColor')
    //     .notEmpty().withMessage('Ingresa un color'),
]