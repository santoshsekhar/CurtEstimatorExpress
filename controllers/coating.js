var express = require('express');
var api = express.Router();
var Model = require('../models/coating.js');
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');

const notfoundstring = 'No such Estimate';


api.get('/', function (request, response) {
    response.render("coating/index.ejs");
   })

   api.get('/create', (req, res) => {
    res.render("coating/create.ejs");
  })

module.exports=api;

   

