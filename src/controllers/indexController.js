const products = require('../data/products')
const controller = {
  getHome: (req, res) => {
    // Lógica del controlador para la página de inicio
    //res.render('index'); // Renderiza la plantilla 'index.ejs' en la carpeta 'views'
    res.render('index',{products})
  }
};


module.exports = controller;
