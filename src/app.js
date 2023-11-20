const express = require('express')
const path = require('path')
const app = express()
const port = 5000

// Config static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views/users', 'index.ejs'))
})

 
 app.get('/productDetail', (req, res) => {
   res.render(path.join(__dirname, 'views/products', 'productDetail.ejs'))
 })

app.get('/productCart', (req, res) => {
    res.render(path.join(__dirname, 'views/products', 'productCart.ejs'))
  })
  
  app.get('/register', (req, res) => {
    res.render(path.join(__dirname, 'views/users', 'register.ejs'))
  })
  
  app.get('/login', (req, res) => {
    res.render(path.join(__dirname, 'views/users', 'login.ejs'))
  })
  

app.get('*', (req, res)=>{
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