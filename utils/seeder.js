/**
* set up a (in memory) database
*/
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')
const coating = require('../data/coating.json')
const users = require('../data/users.json')
const userController = require('../controllers/user')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  db.coating = new Datastore()
  db.users = new Datastore()

  db.coating.loadDatabase()
  db.users.loadDatabase()

  // insert the sample data into our datastore
  db.coating.insert(coating)

  // register each user
  users.forEach((user) => {
    userController.newUser(user)
  })

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.coating = db.coating.find(coating)
  app.locals.users = db.users.find(users)

  LOG.debug(`${app.locals.coating.query.length} estimates seeded`)
  LOG.debug(`${app.locals.users.query.length} users registered`)
//   LOG.info('END Seeder. Sample data read and verified.')
}
