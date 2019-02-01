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
api.get("/details/:id", passport.isAuthenticated, (req, res) => {
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
module.exports=api;

   

