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
  const data = req.app.locals.estimates.query
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
  return res.redirect("/delete")
})

// select      api.get('/select'---------unit 6
api.get("/select", passport.isAuthenticated, function (req, res) {
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

module.exports=api;

   

