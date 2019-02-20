
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')
const coatings = require('../data/coatings.json')
const users = require('../data/users.json')
const userController = require('../controllers/user')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  db.coatings = new Datastore()
  db.users = new Datastore()

  db.coatings.loadDatabase()
  db.users.loadDatabase()


  db.coatings.insert(coatings)

  users.forEach((user) => {
    userController.newUser(user)
  })


  app.locals.coatings = db.coatings.find(coatings)
  app.locals.users = db.users.find(users)

  LOG.debug(`${app.locals.coatings.query.length} estimates seeded`)
  LOG.debug(`${app.locals.users.query.length} users registered`)

}
