const express = require('express')
global.userController = require('../controllers/user.js')
global.contactController = require('../controllers/contact')
const passportConfig = require('../config/passportConfig.js')
const LOG = require('../utils/logger.js')

LOG.debug('START user routing')

const router = express.Router()

// handle user-specific requests
router.get('/login', global.userController.getLogin)
router.post('/login', global.userController.postLogin)
router.get('/logout', global.userController.logout)
router.get('/forgot', global.userController.getForgot)
router.post('/forgot', global.userController.postForgot)
router.get('/reset/:token', global.userController.getReset)
router.post('/reset/:token', global.userController.postReset)
router.get('/signup', global.userController.getSignup)
router.post('/signup', global.userController.postSignup)
router.get('/contact', global.contactController.getContact)
router.post('/contact', global.contactController.postContact)
router.get('/account', passportConfig.isAuthenticated, global.userController.getAccount) 
router.post('/account/profile', passportConfig.isAuthenticated, global.userController.postUpdateProfile)
router.post('/account/password', passportConfig.isAuthenticated, global.userController.postUpdatePassword)
router.post('/account/delete', passportConfig.isAuthenticated, global.userController.postDeleteAccount)
router.get('/account/unlink/:provider', passportConfig.isAuthenticated, global.userController.getOauthUnlink)

LOG.debug('END user routing')
module.exports = router
