// Handles the operatios for contact page
const express = require('express')
const api = express.Router()

// Return contact page view
exports.getContact = (req, res) => {
  res.render('contact', {
    title: 'Contact'
  })
}


exports.postContact = (req, res) => {
  
  if (errors) {
    req.flash('errors', errors)
    return res.redirect('/contact')
  }

  
}
