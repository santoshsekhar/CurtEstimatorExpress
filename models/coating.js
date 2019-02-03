
const mongoose = require('mongoose')

var Schema = mongoose.Schema

const CoatingsEstimateSchema = new mongoose.Schema({

_id: { type: Number, required: true },
name: {
type: String,
required: true, unique: true, default: 'Job name'
},
location: {
type: String,
required: true,
default: 'location'
},
squareFeet: {
type: Number,
required: true,
default: 10000, min: 0, max: 200000
},

materials: {
type: Array,
required: false,
default: [
{
product: "A",
unitcost: 65,
coverageSquareFeetPerUnit: 300
},
{
product: "B",
unitcost: 65,
coverageSquareFeetPerUnit: 300
},
{
product: "C",
unitcost: 65,
coverageSquareFeetPerUnit: 300
}
]
},
// numberOfPeople: {
// type: Number,
// required: true,
// default: 2, min: 0, max: 10
// },
numberOfDays: {
type: Number,
required: true,
default: 2, min: 0, max: 20
},
hoursWorkedPerDay: {
type: Number,
required: true,
default: 8, min: 0, max: 16
},
laborDollarsPerHour: {
type: Number,
required: true,
default: 25, min: 0, max: 50
},
numberHotelRooms: { 
type: Number,
required: true,
default: 2, min:0, max: 20
},
numberHotelNights: { 
type: Number,
required: true,
default: 2, min:0, max: 20
},
hotelDollarsPerNight: {
type: Number,
required: true,
default: 85, min: 0, max: 200
},

foodDollarsPerDay: {
type: Number,
required: true,
default: 25, min: 0, max: 100
},
numberOfVehicles: {
type: Number,
required: true,
default: 2, min: 1, max: 5
},
milesPerVehicle: {
type: Number,
required: true,
default: 50, min: 0, max: 1000
},
dollarsPerMile: {
type: Number,
required: false,
default: 0.50, min: 0, max: 1.00
},

miscellaneous: {
type: Array,
required: false,
default: [
{
desc: "A",
dollars: 10
},
{
desc: "B",
dollars: 10
},
{
desc: "C",
dollars: 10
}
]
},

multiplier: {
type: Number,
required: true,
default: 0.30, min: 0, max: 1.00
},

})
module.exports = mongoose.model('Coating', CoatingsEstimateSchema)