const express = require('express');
      session = require('express-session'),
      path = require('path'),
      passport = require('passport'),
      StravaStrategy = require('passport-strava-oauth2').Strategy,
      cors = require('cors'),
      dbConfig = require('./db.js'),
      mongoose = require('mongoose');


const app = express();


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// Show log in failure message
app.get('/login/fail', (req, res) => {
  // Return them as json
  res.json('Strava Login Failed');
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
 

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Heat map listening on ${port}`);