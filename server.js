// Dependencies
const express = require('express')

// Config
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })

  // 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

  
// Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  

// Listener
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
