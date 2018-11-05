const express = require('express')
const api = express.Router()

// Specify the handler for each required combination of URI and HTTP verb

// HANDLE VIEW DISPLAY REQUESTS --------------------------------------------


// GET t1
api.get('/team', (req, res) => {
  console.log(`Handling GET ${req}`)
  res.render('about/team/index.ejs',
        { title: 'TeamName', layout: 'layout.ejs' })
})
api.get('/team/t1', (req, res) => {
  console.log(`Handling GET ${req}`)
  res.render('about/team/t1/index.ejs',
        { title: 'TeamMember1PutYourNameHere', layout: 'layout.ejs' })
})
api.get('/team/t1', (req, res) => {
  console.log(`Handling GET ${req}`)
  return res.render('about/team/t1/index1.ejs',
        { title: 'TeamMember2PutYourNameHere', layout: 'layout.ejs' })
})

module.exports = api
