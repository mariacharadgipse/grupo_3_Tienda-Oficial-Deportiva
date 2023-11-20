const controller = {
    login: (req, res) => {
     // Lógica del controlador para la página de inicio
  res.render('login'); // Renderiza la plantilla 'login.ejs' en la carpeta 'views'
}
};

module.exports=controller;