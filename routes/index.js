const express = require('express')
const passport = require('../config/passportConfig.js')

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
        title: ''
      })   ;
    });
    router.get('/coating', passport.isAuthenticated, (req, res) =>{
        res.render('coating/index', {
            title: ''
          }) ;
        });
        router.get('/coatingdel',  (req, res) =>{
            res.render('coating/index', {
                title: 'Estimate deleted'
              }) ;
            });
            router.get('/coatingedit',  (req, res) =>{
                res.render('coating/index', {
                    title: 'Updated Estimate'
                  }) ;
                });
                router.get('/createcoating',  (req, res) =>{
                    res.render('coating/index', {
                        title: 'A new estimate is created'
                      }) ;
                    });

    router.get('/login',  (req, res) =>{
        res.render('account/login', {
            title: ''
          })   ;
        });
    
// configure domain and api key required to send emails 
router.post('/contact', (req, res) => {
    
var api_key = 'key-bf36947666ad7ed146a91951252116ed';
var domain = 'sandbox035d72cee28e4d1dacab0a8ee9079584.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
// Configure what detials are supposed to be contained in a email
var data = {
  from: 'Mailer <s531519@nwmissouri.edu>',
  to: 'itsmemailer@gmail.com',
  subject: req.body.firstname + ' ' + req.body.lastname,
  html: `<html><h1>
  Contact Details
</h1>

<table>
  <tr>
      <td>FirstName: </td>
      <td>${req.body.firstname}</td>
  </tr>
  <tr>
      <td>Last Name:</td>
      <td>${req.body.lastname}</td>
  </tr>
  <tr>
      <td>Email</td>
      <td>${req.body.email}</td>
  </tr>
  <tr>
      <td>Description</td>
      <td>${req.body.description}</td>
  </tr>
</table> </html>`
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body)
  res.render('contact/index',{title:'Email sent successfully!'});
});
})

// 
router.post('/forgot', (req, res) => {
    
    var api_key = 'key-bf36947666ad7ed146a91951252116ed';
var domain = 'sandbox035d72cee28e4d1dacab0a8ee9079584.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Mailer <s531519@nwmissouri.edu>',
  to: 'itsmemailer@gmail.com',
  subject: 'Password Details',
  html: `<html><h2>
  your password is admin123
</h2>
</html>`
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body)
  res.render('account/login',{title:'password has been sent to the registered e-mail Id'});
});
})


// Route to redirect to coatings controller for handling estimates
router.use('/coating',require('../controllers/coating.js'))   
 
    
LOG.debug('END routing')
module.exports = router