/**
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')
const LOG = require('../utils/logger.js')

LOG.debug('START routing')


const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {

  res.render('index.ejs', { title: 'Express App' })
})

router.get('/contact', (request, response, next) => {
  LOG.debug('Request to /')
  response.render('contact.ejs')
})

// Defer path requests to a particular controller
router.use('/about', require('../controllers/about.js'))
router.use('/coating',require('../controllers/coating.js'))
router.use('/account',require('../controllers/user.js'))
router.use('/register',require('../controllers/register.js'))





 
LOG.debug('END routing')
module.exports = router
