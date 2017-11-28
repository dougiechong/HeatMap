const express = require('express');
const path = require('path');
const passport = require('passport');
const Strategy = require('passport-strava').Strategy;
require('dotenv').config();

const app = express();


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Temporary fake api
app.get('/api/string', (req, res) => {
  // Return them as json
  res.json('hiii');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

var StravaStrategy = require('passport-strava').Strategy;
 
passport.use(new StravaStrategy({
    clientID: process.env.STRAVA_CLIENT_ID,
    clientSecret: process.env.STRAVA_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/strava/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ stravaId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Heat map listening on ${port}`);