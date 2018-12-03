const express = require('express')
<<<<<<< HEAD
const LOG = require('../utils/logger.js')  // comment out until exists
LOG.debug('START routing')   // comment out until exists
=======
const LOG = require('../utils/logger.js')

LOG.debug('START routing')


>>>>>>> cea7a50174bcc5c4ff9cd43bc9ceab371e9c56b3
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
<<<<<<< HEAD
 LOG.debug('Request to /')  // comment out until exists
 res.render('index.ejs', { title: 'cgeestimator' }) //  use your sec num
=======

  res.render('index.ejs', { title: 'Express App' })
})

router.get('/contact', (request, response, next) => {
  LOG.debug('Request to /')
  response.render('contact.ejs')
>>>>>>> cea7a50174bcc5c4ff9cd43bc9ceab371e9c56b3
})

// Defer path requests to a particular controller
router.use('/about', require('../controllers/about.js'))

router.get('/contact',  (req, res) =>{
    res.render('contact/index', {
        title: 'Contact Us'
      })    
    })

<<<<<<< HEAD

LOG.debug('END routing')
module.exports = router
=======
 
LOG.debug('END routing')
module.exports = router
>>>>>>> cea7a50174bcc5c4ff9cd43bc9ceab371e9c56b3
