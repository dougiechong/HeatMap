var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  id: Number,
  access_token: String,
  first_name: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;