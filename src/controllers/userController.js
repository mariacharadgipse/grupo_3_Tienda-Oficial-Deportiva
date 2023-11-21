const controller = {
  getLogin: (req, res) => {
    // Lógica del controlador para la página de inicio
    res.render('users/login'); // Renderiza la plantilla 'login.ejs' en la carpeta 'views'
  },
  getRegister: (req, res) => {
    // Lógica del controlador para la página de inicio
    res.render('users/register'); // Renderiza la plantilla 'register.ejs' en la carpeta 'views'
  },
};

module.exports = controller;