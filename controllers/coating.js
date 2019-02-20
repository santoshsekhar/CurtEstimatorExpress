var express = require('express');
var api = express.Router();
const LOG = require('../utils/logger.js')
var Model = require('../models/coating.js');
const find = require('lodash.find');
const remove = require('lodash.remove');
var findIndex = require('lodash.findindex');

const notfoundstring = 'NosuchEstimate';
const passport = require("../config/passportConfig.js")




api.get("/", (request, response) => {
    response.render("coating/index.ejs");
   })

   api.get("/findall",  (req, res) => {
    res.setHeader("Content-Type", "application/json")
    const data = req.app.locals.coating.query
    res.send(JSON.stringify(data))
  })

  api.get("/findone/:id", passport.isAuthenticated, (req, res) => {
    res.setHeader("Content-Type", "application/json")
    const id = parseInt(req.params.id, 10)
    const data = req.app.locals.coating.query
    const item = find(data, { _id: id })
    res.send(JSON.stringify(item))
  })

   api.get('/create', (req, res) => {
    LOG.info(`Handling GET /create${req}`)
    const item = new Model()
    LOG.debug(JSON.stringify(item))
    res.render('coating/create.ejs',
      {
        title: 'Create estimate',
        layout: 'layout.ejs',
        coating: item
      })
  })

  // Details-----api.get('/details/:id'----unit 1
api.get("/details/:id",  (req, res) => {
  LOG.info(`Handling GET /details/:id ${req}`)
  const id = parseInt(req.params.id, 10) // base 10
  const data = req.app.locals.coating.query
  const item = find(data, { _id: id })
  if (!item) {
    return res.end(notfoundstring)
  }
  LOG.info(`RETURNING VIEW FOR ${JSON.stringify(item)}`)
  return res.render("coating/details.ejs", {
    title: "Estimate Details",
    layout: "layout.ejs",
    estimate: item
  })
})

// delete     api.post('/delete/:id'-----unit 5
api.post('/delete/:id', passport.isAuthenticated, (req, res) => {
  LOG.info(`Handling DELETE request ${req}`)
  const id = parseInt(req.params.id, 10) // base 10
  LOG.info(`Handling REMOVING ID=${id}`)
  const data = req.app.locals.coating.query
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
  return res.redirect("/coating")
})

// select      api.get('/select'---------unit 6
api.get("/select",  function (req, res) {
  res.render("coating/select.ejs")
})

// Delete------api.get('/delete/:id'-----unit 7
api.get("/delete/:id", passport.isAuthenticated, (req, res) => {
  LOG.info(`Handling GET /delete/:id ${req}`)
  const id = parseInt(req.params.id, 10) // base 10
  const data = req.app.locals.coating.query
  const item = find(data, { _id: id })
  if (!item) {
    return res.end(notfoundstring)
  }
  LOG.info(`RETURNING VIEW FOR ${JSON.stringify(item)}`)
  return res.render("coating/delete.ejs", {
    title: "Delete estimate",
    layout: "layout.ejs",
    estimate: item
  })
})

api.get("/edit/:id", passport.isAuthenticated, (req, res) => {
  LOG.info(`Handling GET /edit/:id ${req}`)
  const id = parseInt(req.params.id, 10) // base 10
  const data = req.app.locals.coating.query
  const item = find(data, { _id: id })
  if (!item) {
    return res.end(notfoundstring)
  }
  LOG.info(`RETURNING VIEW FOR${JSON.stringify(item)}`)
  return res.render("coating/edit.ejs", {
    title: "estimates",
    layout: "layout.ejs",
    estimate: item
  })
})

// update       api.post('/save/:id'
// POST update
api.post("/save/:id", (req, res) => {
  LOG.info(`Handling SAVE request ${req}`)
  const id = parseInt(req.params.id, 10) // base 10
  LOG.info(`Handling SAVING ID=${id}`)
  const data = req.app.locals.coating.query
  const item = find(data, { _id: id })
  if (!item) {
    return res.end(notfoundstring)
  }
  LOG.info(`ORIGINAL VALUES ${JSON.stringify(item)}`)
  LOG.info(`UPDATED VALUES: ${JSON.stringify(req.body)}`)
  item.name = req.body.name
  item.location = req.body.location
  item.squarefeet = parseInt(req.body.squarefeet, 10)
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
  item.multiplier = parseFloat(req.body.multiplier)
  item.materials = []
  item.materials.length = 0 // replace with new array
  if (req.body.product.length > 0) {
    for (let count = 0; count < req.body.product.length; count++) {
      if (
        typeof parseInt(req.body.unitcost[count], 10) === "number" &&
        typeof parseInt(req.body.coverageSquareFeetPerUnit[count], 10) ===
        "number"
      ) {
        item.materials.push({
          product: req.body.product[count],
          unitcost: parseInt(req.body.unitcost[count], 10),
          coverageSquareFeetPerUnit: parseInt(
            req.body.coverageSquareFeetPerUnit[count],
            10
          )
        })
      }
    }
  }
  item.miscellaneous = []
  item.miscellaneous.length = 0 // replace with new array
  if (req.body.desc.length > 1) {
    for (let count = 0; count < req.body.desc.length; count++) {
      if (
        typeof parseInt(req.body.dollars[count], 10) === "number" &&
        parseInt(req.body.dollars[count], 10) > 0
      ) {
        item.miscellaneous.push({
          misc: req.body.desc[count],
          cost: parseInt(req.body.dollars[count], 10)
        })
      }
    }
  }
  LOG.info(`SAVING UPDATED ESTIMATE ${JSON.stringify(item)}`)
  return res.redirect("/coating")
})

// insert new   api.post('/save'  
api.post("/save", passport.isAuthenticated, (req, res) => {
  res.setHeader("Content-Type", "application/json")
  LOG.info(`Handling POST ${req}`)
  LOG.debug(JSON.stringify(req.body))
  const data = req.app.locals.coating.query
  const item = new Model()
  LOG.info(`NEW ID ${req.body._id}`)
  item._id = parseInt(req.body._id, 10) // base 10
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
  item.multiplier = parseFloat(req.body.multiplier)
  item.materials = []
  item.materials.length = 0
  if (req.body.product.length > 0) {
    for (let count = 0; count < req.body.product.length; count++) {
      if (
        typeof parseInt(req.body.unitcost[count], 10) === "number" &&
        typeof parseInt(req.body.coverageSquareFeetPerUnit[count], 10) === "number"
      ) {
        item.materials.push({
          product: req.body.product[count],
          unitcost: parseInt(req.body.unitcost[count], 10),
          coverageSquareFeetPerUnit: parseInt(
            req.body.coverageSquareFeetPerUnit[count], 10)
        })
      }
    }
  }
  if (req.body.desc.length > 0) {
    item.miscellaneous = []
    item.miscellaneous.length = 0
    for (
      let count = 0;
      count < req.body.desc.length;
      count++
    ) {
      item.miscellaneous.push({
        name: req.body.desc[count],
        cost: parseInt(req.body.dollars[count], 10)
      })
    }
  }
  data.push(item)
  LOG.info(`SAVING NEW estimate ${JSON.stringify(item)}`)
  return res.redirect("/coating")
})

// GET copyfrom ID
api.get('/copyfrom/:id',  (req, res) => {
  LOG.info(`Handling COPY FROM request ${req}`)
  const id = parseInt(req.params.id, 10) // base 10
  LOG.info(`Handling COPYFROM ID=${id}`)
  const data = req.app.locals.coating.query
  const item = find(data, { _id: id })
  item.name = item.name + ' (new)'
  if (!item) {
    return res.end(notfoundstring) 
  }
  LOG.debug(`Copying from item ${JSON.stringify(item)}`)
  res.render('coating/create',
    {
      title: 'Create From Existing',
      layout: 'layout.ejs',
      estimate: item
    })
})


module.exports=api;

   

