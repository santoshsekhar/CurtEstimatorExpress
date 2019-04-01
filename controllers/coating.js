
const express = require('express')
const mongoose = require('mongoose') 
// var Schema = mongoose.Schema
// const api = express.Router()
const Model = require('../models/coating.js')
const LOG = require('../utils/logger.js')
const find = require('lodash.find')
const remove = require('lodash.remove')
const notfoundstring = 'coatings'
const passport = require('../config/passportConfig.js')
const router = express.Router()

 
api.get('/findall', passport.isAuthenticated, (req, res) => {
  console.log(req.app.locals.coatings)
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.coatings.query
  res.send(JSON.stringify(data))
})
api.get('/findone/:id', passport.isAuthenticated,(req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id, 10) 
  const data = req.app.locals.coatings.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring) }
  res.send(JSON.stringify(item))
})
// RESPOND WITH VIEWS  --------------------------------------------
api.get('/', passport.isAuthenticated, (req, res) => {
  res.render('coating/index.ejs')
})
api.get('/create',  (req, res) => {
  LOG.info(`Handling GET /create${req}`)
  const item = new Model()
  LOG.debug(JSON.stringify(item))
  res.render('coating/create.ejs',
    {
      title: 'Create estimate',
      layout: 'layout.ejs',
      coating : item
    })
})


api.get('/delete/:id', passport.isAuthenticated, (req, res) => {
  LOG.info(`Handling GET /delete/:id ${req}`)
  const id = parseInt(req.params.id, 10) 
  const data = req.app.locals.coatings.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring) }
  LOG.info(`RETURNING VIEW FOR ${JSON.stringify(item)}`)
  return res.render('coating/delete.ejs',
    {
      title: 'Delete estimate',
      layout: 'layout.ejs',
      coating : item
    })
   
})

api.get('/details/:id',  (req, res) => {
  LOG.info(`Handling GET /details/:id ${req}`)
  const id = parseInt(req.params.id, 10) // base 10
  console.log(req.app.locals.coatings)
  const data = req.app.locals.coatings.query
  const item = find(data, { _id: id })
 if (!item) { return res.end(notfoundstring) }
  LOG.info(`RETURNING VIEW FOR ${JSON.stringify(item)}`)
  return res.render('coating/details.ejs',
    {
      title: 'Estimate Details',
      layout: 'layout.ejs',
      coating: item
    })    
})

api.get('/edit/:id', passport.isAuthenticated,(req, res) => {
  LOG.info(`Handling GET /edit/:id ${req}`)
  const id = parseInt(req.params.id, 10) // base 10
  const data = req.app.locals.coatings.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring) }
  LOG.info(`RETURNING VIEW FOR${JSON.stringify(item)}`)
  return res.render('coating/edit.ejs',
    {
      title: 'coatings',
      layout: 'layout.ejs',
      coating: item
    })
})

api.post('/save',  (req, res) => {
  LOG.info(`Handling POST ${req}`)
  LOG.debug(JSON.stringify(req.body))
  console.log(JSON.stringify(req.body))
  const data = req.app.locals.coatings.query
  const item = new Model()
  LOG.info(`NEW ID ${req.body._id}`)
  item._id = parseInt(req.body._id, 10) // base 10
  item.name = req.body.name
  item.location = req.body.location
  item.squareFeet = parseInt(req.body.squareFeet, 10)
  item.materials = []
  item.materials.length = 0
  if (req.body.product.length > 0) {
    for (let count = 0; count < req.body.product.length; count++) {
      item.materials.push(
        {
          product: req.body.product[count],
          unitcost: parseInt(req.body.unitcost[count],10),
          coverageSquareFeetPerUnit: parseInt(req.body.coverageSquareFeetPerUnit[count], 10)
        }
      )
    }
    item.numberOfPeople = parseInt(req.body.numberOfPeople, 10);
    item.numberOfDays = parseInt(req.body.numberOfDays, 10);
    item.hoursWorkedPerDay = parseInt(req.body.hoursWorkedPerDay, 10);
    item.laborDollarsPerHour = parseInt(req.body.laborDollarsPerHour, 10);
    item.numberHotelNights = parseInt(req.body.numberHotelNights, 10);
    item.hotelDollarsPerNight = parseInt(req.body.hotelDollarsPerNight, 10);
    item.foodDollarsPerDay = parseInt(req.body.foodDollarsPerDay, 10);
    item.numberOfVehicles = parseInt(req.body.numberOfVehicles, 10);
    item.milesPerVehicle = parseInt(req.body.milesPerVehicle, 10);
    item.dollarsPerMile = parseInt(req.body.dollarsPerMile, 10);
    item.miscellaneous = []
    item.miscellaneous.length = 0
    // console.log("---------------------------------------------"+req.body)
    if (req.body.miscellaneousName.length > 0) {
      for (let count = 0; count < req.body.miscellaneousName.length; count++) {
        item.miscellaneous.push(
          {
            name: req.body.miscellaneousName[count],
            cost: parseInt(req.body.Cost, 10)

          }
        )
      }
    }
    item.multiplier = parseInt(req.body.multiplier, 10)
    //item.estimateCost = parseInt(req.body.estimateCost, 10)
    data.push(item)
    LOG.info(`SAVING NEW estimate ${JSON.stringify(item)}`)
    return res.redirect('/createcoating')
  }
})


api.post('/save/:id',  (req, res) => {
  LOG.info(`Handling SAVE request ${req}`)
  const id = parseInt(req.params.id, 10) // base 10
  LOG.info(`Handling SAVING ID=${id}`)
  const data = req.app.locals.coatings.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring) }
  LOG.info(`ORIGINAL VALUES ${JSON.stringify(item)}`)
  LOG.info(`UPDATED VALUES: ${JSON.stringify(req.body)}`)
  item.name = req.body.name
  item.location = req.body.location
  item.squareFeet = parseInt(req.body.squareFeet, 10)
  item.numberOfDays = parseInt(req.body.numberOfDays, 10)
  item.hoursWorkedPerDay = parseInt(req.body.hoursWorkedPerDay, 10)
  item.laborDollarsPerHour = parseInt(req.body.laborDollarsPerHour, 10)
  item.numberHotelRooms = parseInt(req.body.numberHotelRooms, 10)
  item.numberHotelNights = parseInt(req.body.numberHotelNights, 10)
  item.hotelDollarsPerNight = parseInt(req.body.hotelDollarsPerNight, 10)
  item.foodDollarsPerDay = parseInt(req.body.foodDollarsPerDay, 10)
  item.numberOfVehicles = parseInt(req.body.numberOfVehicles, 10)
  item.milesPerVehicle = parseInt(req.body.milesPerVehicle, 10)
  item.dollarsPerMile = parseFloat(req.body.dollarsPerMile, 10)
  item.materials = []
  item.materials.length = 0
  if (req.body.product.length > 0) {
    for (let count = 0; count < req.body.product.length; count++) {
      item.materials.push(
        {
          product: req.body.product[count],
          unitcost: parseInt(req.body.unitcost[count],10),
          coverageSquareFeetPerUnit: parseInt(req.body.coverageSquareFeetPerUnit[count], 10)
        }
      )
    }
  }

  item.miscellaneous = []
  item.miscellaneous.length = 0//replacewithnewarray
  if (req.body.miscellaneousName.length > 1) {
    for (let count = 0; count < req.body.miscellaneousName.length; count++) {
      // if (typeof (parseInt(req.body.cost[count], 10)) === 'number' && parseInt(req.body.cost[count], 10) > 0) {
        item.miscellaneous.push(
          {
            name: req.body.miscellaneousName[count],
            cost: parseInt(req.body.Cost, 10)
          }
        )
      // }
    }
  }
  item.multiplier = parseFloat(req.body.multiplier)
  LOG.info(`SAVINGUPDATEDESTIMATE${JSON.stringify(item)}`)
  return  res.redirect('/coatingedit')
})

api.post('/delete/:id',  (req, res) => {
  LOG.info(`Handling DELETE request ${req}`)
  const id = parseInt(req.params.id, 10) // base 10
  LOG.info(`Handling REMOVING ID=${id}`)
  const data = req.app.locals.coatings.query
  const item = find(data, { _id: id })
  if (!item) {
    return res.end(notfoundstring)
  }
  if (item.isActive) {
    item.isActive = false
    console.log(`Deacctivated item ${JSON.stringify(item)}`)
  } else {
    const item = remove(data, { _id: id })
    console.log(`Permanently deleted item ${JSON.stringify(item)}`)
  }
  return res.redirect('/coatingdel')
})

api.get('/select',  function (req, res) {
  res.render('coating/select.ejs')
})

api.get('/copyfrom/:id',(req,res)=>{
  LOG.info(`HandlingCOPYFROMrequest${req}`)
  const id=parseInt(req.params.id,10)//base10
  //LOG.info(`HandlingCOPYFROMID=${id}`)
  const data=req.app.locals.coatings.query
  const item=find(data,{_id:id})
  item.name=item.name
  if(!item){
    return res.end(notfoundstring)
  }
  LOG.debug(`Copyingfromitem${JSON.stringify(item)}`)
  res.render('coating/create.ejs',
  {
    title:'CreateFromExisting',
    layout:'layout.ejs',
    coating:item
  })
  })


module.exports = api
