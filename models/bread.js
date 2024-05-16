// Require Mongoose
const mongoose = require('mongoose')
// Shorthand for the constructor
const { Schema } = mongoose 

// Constructor for Schema
const breadSchema = new Schema ({
    name: { type: String, required: true},
    hasGluten: Boolean,
    Image: { type: String, default: 'https://images.pexels.com/photos/745988/pexels-photo-745988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    baker: {
        type: String,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Pheobe']
    }
})

// Instance Method
breadSchema.methods.getBakedBy = function() {
    return `${this.name} was baked with love by ${this.baker}`
}

// Model & Exporting Bread
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread

  