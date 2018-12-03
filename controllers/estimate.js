

const express = require("express")
const api = express.Router()
const Model = require("../models/estimate.js")
const LOG = require("../utils/logger.js") // comment out until exists
const find = require("lodash.find")
const remove = require("lodash.remove")
const notfoundstring = "estimates"
const passport = require("../config/passportConfig.js")


api.get("/select", passport.isAuthenticated, function (req, res) {
  res.render("estimate/select.ejs")
})

api.get('/print/:id',  passport.isAuthenticated, function  (req,  res) { 

})

module.exports = api
