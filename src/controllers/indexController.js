const fs = require('fs')
const path= require('path')
const products=JSON.parse(fs.readFileSync(path.join (__dirname, '../data/products.json'),'utf-8'))


const controller = {
  getHome: (req, res) => {
    // Lógica del controlador para la página de inicio
    //res.render('index'); // Renderiza la plantilla 'index.ejs' en la carpeta 'views'
    res.render('index',{products})
  }
};


module.exports = controller;
