const express = require('express')
const api = express.Router()
// Specify the handler for each required combination of URI and HTTP verb

// HANDLE VIEW DISPLAY REQUESTS --------------------------------------------

// GET t1
api.get('/t1', (req, res) => {
    console.log(`Handling GET ${req}`)
    res.render('about/t1/index.ejs' 
  
    )
  })
  api.get('/t1/a', (req, res) => {
    console.log(`Handling GET ${req}`)
    res.render('about/t1/a/index.ejs'
    
     )
  })
  api.get('/t1/b', (req, res) => {
    console.log(`Handling GET ${req}`)
    res.render('about/t1/b/index.ejs' 
   
    )
  })
  
  api.get('/t1/c', (req, res) => {
    console.log(`Handling GET ${req}`)
    res.render('about/t1/c/index.ejs' 
   
    )
  })
  
  api.get('/t1/d', (req, res) => {
    console.log(`Handling GET ${req}`)
    res.render('about/t1/d/index.ejs' 
   
    )
  })
  module.exports = api
  
  
 
  
  
  
