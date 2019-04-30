// Defines what information is required for a user
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  tokens: Array,
  profile: {
    name: String
  }
}, { timestamps: true })

/**
* Hashes and saves the password
*/
userSchema.pre('save', function (next) {
  var user = this
  var SALT_FACTOR = 5
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

/**
* Compares and checkes the password
*/
userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}
module.exports = mongoose.model('User', userSchema)
