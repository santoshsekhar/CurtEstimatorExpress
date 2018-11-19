/**
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')



const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {

  res.render('index.ejs', { title: 'Express App' })
})

// Defer path requests to a particular controller
router.use('/about', require('../controllers/about.js'))
router.use('/coating',require('../controllers/coating.js'))
router.use('/account',require('../controllers/user.js'))


 

module.exports = router
