const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs')

const usersPath = path.join(__dirname, '../data/users.json')
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))

const controller = {
	getLogin: (req, res) => {
		// Lógica del controlador para la página de inicio
		res.render('users/login'); // Renderiza la plantilla 'login.ejs' en la carpeta 'views'
	},

	postLogin: (req, res) => {
		// obtener los datos del form
		let { email, password, rememberme } = req.body
		//  buscar usuario y checkear password y email si coincide con alguno de nuestra base
		let userFound = users.find(user => user.email == email)
		if (userFound && bcryptjs.compareSync(password, userFound.password)) {
			// si existe, guardalo en session
			req.session.userLogged = userFound
			// el usuario puso recordarme?
			if (rememberme == 'on') {
				res.cookie('rememberme', userFound.email, { maxAge: 60000 * 60 })
			}
			// redireccione al home
			console.log('Todo salió ok, estas logueado');
			res.redirect('/users/profile')
		} else {
			res.send('El password o email es incorrecto')
		}

	},

	profile: (req, res) => {
		res.render('users/profile.ejs', { user: req.session.userLogged })
	},

	logout: (req, res) => {
		req.session.userLogged = undefined
		// req.session.destroy()
		res.clearCookie('rememberme')
		res.redirect('/')
	},

  
  getRegister: (req, res) => {
		// Lógica del controlador para la página de inicio
		res.render('users/register'); // Renderiza la plantilla 'register.ejs' en la carpeta 'views'
	},
};

module.exports = controller;