// Dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// Schema
const bakerSchema = new Schema ({
    name: {
        type: String.apply,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
})

// Model & Export
const Baker = mongoose.model('baker', bakerSchema)
module.exports = Baker
 
