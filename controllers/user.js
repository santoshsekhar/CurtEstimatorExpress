var express = require('express');
var api = express.Router();
var Model = require('../models/user.js');
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');

const notfoundstring = 'No such Estimate';


api.get('/', function (request, response) {
    response.render("account/login.ejs");
   })

   module.exports=api;

