const mongoose = require('mongoose')

const CoatingSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  name: {
    type: String,
    required: true,
    default: 'Lexie'
  },
  type: {
    type: String,
    required: false,
    default: 'Cavachon'
  },
  area: {
    type: Number,
    required: false,
    default: 1
  },
  Materials: {
    type: Array,
    required: false,
    default: [
      {
        itemName: 'Mom',
        quantity: 5,
        
      },
      {
        itemName: 'Dad',
        quantity: 5,
        
      }
    ]
  }
})
module.exports = mongoose.model('Coating', CoatingSchema)
