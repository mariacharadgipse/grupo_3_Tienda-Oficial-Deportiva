const controller = {
    registerController: (req, res) => {
     // Lógica del controlador para la página de inicio
  res.render('register'); // Renderiza la plantilla 'register.ejs' en la carpeta 'views'
}
};

module.exports=controller;