const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs')

const usersPath = path.join(__dirname, '../data/users.json')
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))


const controller = {

	getRegister: (req, res) => {
		// Lógica del controlador para la página de inicio
		res.render('users/register'); // Renderiza la plantilla 'register.ejs' en la carpeta 'views'
	},

	register: (req, res) => {
		res.render('users/register.ejs')
	},
	postRegister: (req, res) => {
		// obtener la info del formulario
		let { email, password } = req.body
		// el usuario no tiene que estar registrado
		let userFound = users.find(user => user.email == email)
		if (userFound) {
			return res.send('El usuario ya está registado con ese email')
		}
		// debemos guardar ese nuevo usuario
		let newUser = {
			id: uuidv4(),
			email: email,
		
			image: req.file?.filename || 'default.png', //imagen por defecto
			...req.body, // spread operator
			password: bcryptjs.hashSync(password, 10),
		}
		
		users.push(newUser)
		fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '))
		// redirigir a home
		res.redirect('/')
	},
	//login: (req, res) => {
	//console.log(req.session?.userLogged);
	//	res.render('users/login.ejs')
	//},



	getLogin: (req, res) => {
		// Lógica del controlador para la página de inicio
		res.render('users/login'); // Renderiza la plantilla 'login.ejs' en la carpeta 'views'
	},


	postLogin: (req, res) => {
		res.send(req.body);

		let userToLogin = user.findByField('email', req.body.email);

		if (userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if (req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/user/profile');
			}
			return res.render('Login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('Login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},
	profile: (req, res) => {
		return res.render('userProfile', {
			user: req.session.userLogged
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},
};



module.exports = controller;