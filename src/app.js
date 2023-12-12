const express = require('express')
const path = require('path')
const app = express()
const port = 5000

// Config static folder
app.use(express.static(path.join(__dirname, 'public')))

let indexRoutes= require('./routers/index')

let productsRoutes= require('./routers/products')

let usersRoutes= require('./routers/users')

//0912
const session = require('express-session');

app.use(session({
secret: 'Nombre del sitio',
resave: false,
saveUninitialized: true,
}));

//app.use(cookieParser())
//

app.use('/', indexRoutes)

app.use('/products', productsRoutes)

app.use('/users', usersRoutes)

app.set('view engine', 'ejs')

app.set('views', path.join (__dirname, './views'))




app.get('*', (req, res)=>{
  res.send(`
  <div style="display:flex; flex-direction:column; align-items:center">
  <h1>Esta pagina no existe</h1>
  <img style="width:50%" src="/img/not-found.webp" alt="error-404">
  </div>  
  `)
})

app.post('*', (req, res)=>{
  res.send(`
  <div style="display:flex; flex-direction:column; align-items:center">
  <h1>Esta pagina no existe</h1>
  <img style="width:50%" src="/img/not-found.webp" alt="error-404">
  </div>  
  `)
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})

