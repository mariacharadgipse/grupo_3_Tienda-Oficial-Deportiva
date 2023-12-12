const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {



	// Detail - Detail from one product
	detail: (req, res) => {
		const pSelected = products.find(product => product.id == req.params.id)
		res.render('products/productDetail.ejs', { pSelected })
	},


  // Root - Show all products
  getIndex: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    res.render('products/produ.ejs', { products })
  },
  //Create - Form to create
  create: (req, res) => {
    res.render('products/productCreate.ejs')
  },

  // Create -  Method to store

  store: (req, res) => {
    // creamos nuevo producto del formulario con req.body
    const newProduct = {
      // id: products.length + 1,
      id: uuidv4(), //id unico uuid
      image: req.file?.filename || 'default-image.png', //imagen por defecto
      ...req.body // spread operator
    }
    // Agrego nuevo producto al listado
    products.push(newProduct)
    // Convertir a JSON y escribir el archivo js
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
    // redireccionamos al listado de productos
    res.redirect('/products')
  },

  
  getDetail: (req, res) => {
    // Lógica del controlador para la página de inicio
    res.render('products/productDetail'); // Renderiza la plantilla 'productDetail.ejs' en la carpeta 'views'
  },
  getCart: (req, res) => {
    // Lógica del controlador para la página de inicio
    res.render('products/productCart'); // Renderiza la plantilla 'productCart.ejs' en la carpeta 'views'
  },

  //postCreate: (req, res) => {
    // Lógica del controlador para la página de inicio
    //res.render('products/productCreate'); // Renderiza la plantilla 'productCreate.ejs' en la carpeta 'views'
  //},

  postEdit: (req, res) => {
    // Lógica del controlador para la página de inicio
    res.render('products/productEdit'); // Renderiza la plantilla 'productEdit.ejs' en la carpeta 'views'
  }
};

module.exports = controller;