const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const { title } = require('process')

// INDEX
breads.get('/', (req, res) => {
  res.render('Index',
    {
      breads: Bread,
      title: 'Index Page'
    }
  )
})

// Show
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  

module.exports = breads
