const express = require('express')
const LOG = require('../utils/logger.js')  // comment out until exists
LOG.debug('START routing')   // comment out until exists
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
 LOG.debug('Request to /')  // comment out until exists
 res.render('index.ejs', { title: 'cgeestimator' }) //  use your sec num
})

// Defer path requests to a particular controller
router.use('/about', require('../controllers/about.js'))

router.get('/contact',  (req, res) =>{
    res.render('contact/index', {
        title: 'Contact Us'
      })    
    })


LOG.debug('END routing')
module.exports = router