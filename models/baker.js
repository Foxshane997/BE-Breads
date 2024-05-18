// Dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// Schema
const bakerSchema = new Schema ({

})

// Model & Export
const Baker = mongoose.model('baker', bakerSchema)
module.exports = Baker