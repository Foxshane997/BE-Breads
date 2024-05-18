// Require Mongoose
const mongoose = require('mongoose')
// Shorthand for the constructor
const { Schema } = mongoose 

// Schema

const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
      type: Schema.Types.ObjectID,
      ref: 'Baker'
    }
})
// Changed data at 10:05 ^

// Instance Method
breadSchema.methods.getBakedBy = function() {
    return `${this.name} was baked with love by ${this.baker}`
}

// Model & Exporting Bread
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread

  