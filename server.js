const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const connectDB = require('./config/db')
const items = require('./routes/api/items')

const app = express();

//bodyparser middleware
app.use(bodyParser.json())

//Start DB
connectDB()

//use routes
app.use('/api/items', items)

//server static assets if in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))







