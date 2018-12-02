var express = require('express');
var api = express.Router();
const LOG = require('../utils/logger.js')
var Model = require('../models/coating.js');
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');

const notfoundstring = 'No such Estimate';



api.get('/', function (request, response) {
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

module.exports=api;

   

