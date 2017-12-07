var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  password: String,
  email: String,
  strava: {
    id: String,
    access_token: String,
    firstName: String,
    lastName: String,
    email: String,
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;