const db = require('../database/models/')
/*const fs = require('fs')
const path = require('path')
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'))*/

/*comentamos la lógica para acceder a la BD json*/
/*const controller = {
  getHome: (req, res) => {
    // Lógica del controlador para la página de inicio
    //res.render('index'); // Renderiza la plantilla 'index.ejs' en la carpeta 'views'
    const inDiscount = products.filter(product => product.discount > 0 )
    console.log(inDiscount.length);
    const visited = products.filter(product => product.visit === "visited" )
    console.log(visited.length);
    res.render('index.ejs', {inDiscount, visited})
  }*/
  module.exports = {
  getHome: (req, res) => {
    db.Products.findAll()
    .then(function (products){
      res.json(products);
      }
      )
    .catch(error => console.log(error))
    
  }
};

