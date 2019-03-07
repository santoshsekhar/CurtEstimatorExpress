const mongoose = require('mongoose') 
var Schema = mongoose.Schema

 const EstimateSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    name: {
      type: String,
      required: true,
      default: 'name/description'
    },
    location: {
      type: String,
      required: true,
      default: 'location'
    },
    squareFeet: {
      type: Number,
      required: true,
      default: 10000
    },
 

 materials: {
  type: Array,
  required: false,
  positive: true,
  default: [
    {
      product: 'A',
      unitcost: 65,
      coverageSquareFeetPerUnit: 300
    },
    {
      product: 'B',
      unitcost: 65,
      coverageSquareFeetPerUnit: 300
    },
    {
      product: 'C',
      unitcost: 65,
      coverageSquareFeetPerUnit: 300
    }
  ]
},

 numberOfPeople: {
  type: Number,
  required: false,
  default: 2
},
numberOfDays: {
  type: Number,
  required: false,
  default: 2
},
hoursWorkedPerDay: {
  type: Number,
  required: false,
  default: 8
},
laborDollarsPerHour: {
  type: Number,
  required: false,
  default: 25
},

 numberHotelRooms:{
  type: Number,
  required: false,
  default: 2  
 },
 numberHotelNights: {
  type: Number,
  required: false,
  default: 2
},
hotelDollarsPerNight: {
  type: Number,
  required: false,
  default: 85
},

 foodDollarsPerDay: {
  type: Number,
  required: false,
  default: 25
},

  numberOfVehicles: {
    type: Number,
    required: false,
    default: 2
  },
  milesPerVehicle: {
    type: Number,
    required: false,
    default: 50
  },
  dollarsPerMile: {
    type: Number,
    required: false,
    default: 1
  },

miscellaneous: {
  type: Array,
  required: false,
  default: [
    {
      misc: 'A',
      cost: 10
    },
    {
      misc: 'B',
      cost: 10
    },
    {
      misc: 'C',
      cost: 10
    }
  ]
},

 multiplier: {
  type: Number,
  required: true,
  default: 0.40
},
// estimateCost:{
//   type:Number,
//   required:false,
//   default: 0

// },

 })
module.exports = mongoose.model('Coating', EstimateSchema)
