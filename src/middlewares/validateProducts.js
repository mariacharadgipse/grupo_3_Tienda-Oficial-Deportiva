const { body } = require('express-validator')

module.exports = [
    body('name')
    .notEmpty().withMessage('Debes ingresar un nombre').bail(),
    body('price')
    .notEmpty().withMessage('Ingresa un precio').bail()
    .isNumeric().withMessage('El precio debe ser un numero'),
    body('colors')
    .notEmpty().withMessage('Ingresa un color'),   
]