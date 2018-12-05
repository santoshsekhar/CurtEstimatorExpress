
const express = require('express')
const api = express.Router()
/**
 * GET /contact
 * Contact form page.
 */

exports.getContact = (req, res) => {
  res.render('contact', {
    title: 'Contact'
  })
}
/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.postContact = (req, res) => {
  

  if (errors) {
    req.flash('errors', errors)
    return res.redirect('/contact')
  }

  
}
