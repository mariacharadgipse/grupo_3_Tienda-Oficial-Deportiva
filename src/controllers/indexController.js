const controller = {
  getHome: (req, res) => {
    // Lógica del controlador para la página de inicio
    res.render('index'); // Renderiza la plantilla 'index.ejs' en la carpeta 'views'
  }
};

module.exports = controller;
