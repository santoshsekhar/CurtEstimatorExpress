<<<<<<< HEAD

=======
>>>>>>> cea7a50174bcc5c4ff9cd43bc9ceab371e9c56b3
const winston = require('winston')
const fs = require('fs')
const path = require('path')

const logDir = 'logs'

if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir)}

<<<<<<< HEAD
const logger = new (winston.Logger)({
=======
const logger = winston.createLogger({
>>>>>>> cea7a50174bcc5c4ff9cd43bc9ceab371e9c56b3
 level: 'debug',
 transports: [
   new (winston.transports.Console)({ json: false, timestamp: true }),
   new winston.transports.File({ filename: path.join(logDir, '/debug.log'), json: false })
 ],
 exceptionHandlers: [
   new (winston.transports.Console)({ json: false, timestamp: true, humanReadableUnhandledException: true }),
   new winston.transports.File({ filename: path.join(logDir, '/debug.log'), json: false, humanReadableUnhandledException: true })
 ],
 exitOnError: false
})

module.exports = logger