
const express = require('express')
const api = express.Router()


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
