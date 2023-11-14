const express = require('express')
const path = require('path')
const app = express()
const port = 5000

// Config static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

 
 app.get('/productDetail', (req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'productDetail.html'))
 })

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'productCart.html'))
  })
  
  app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'))
  })
  
  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'))
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