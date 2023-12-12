const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// multer middleware
// const upload = require('../middlewares/multer');

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
    let newProduct = {
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
    //console.log(newProduct)
  },

  // Update - Method to update
  update: (req, res) => {
    // JSON de productos
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    // Buscar el producto a editar
    const pToEdit = products.find(product => product.id == req.params.id)
    // Actualiza o deja el valor original del producto
    pToEdit.name = req.body.name || pToEdit.name
    pToEdit.price = req.body.price || pToEdit.price
    pToEdit.discount = req.body.discount || pToEdit.discount
    pToEdit.category = req.body.category || pToEdit.category
    pToEdit.description = req.body.description || pToEdit.description
    pToEdit.image = req.file?.filename || pToEdit.image
    // Escribe el nuevo JSON de productos
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
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