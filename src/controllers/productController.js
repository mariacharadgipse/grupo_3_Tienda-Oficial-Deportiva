const controller = {
  getDetail: (req, res) => {
    // Lógica del controlador para la página de inicio
    res.render('products/productDetail'); // Renderiza la plantilla 'productDetail.ejs' en la carpeta 'views'
  },
  getCart: (req, res) => {
    // Lógica del controlador para la página de inicio
    res.render('products/productCart'); // Renderiza la plantilla 'productCart.ejs' en la carpeta 'views'
  }
};

module.exports = controller;