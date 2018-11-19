var express = require('express');
var api = express.Router();
// var Model = require('../models/coating.js');
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');

const notfoundstring = 'No such Estimate';


api.get('/', function (request, response) {
    response.render("register/create.ejs");
   })

   api.get('/register', (req, res) => {
    LOG.info(`Handling GET /create${req}`)
    const item = new Model()
    LOG.debug(JSON.stringify(item))
    res.render('register/create',
      )
  })

module.exports=api;

   

