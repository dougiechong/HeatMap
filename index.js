const express = require('express');
      session = require('express-session'),
      path = require('path'),
      passport = require('passport'),
      StravaStrategy = require('passport-strava-oauth2').Strategy,
      cors = require('cors'),
      dbConfig = require('./db.js'),
      mongoose = require('mongoose');

require('dotenv').config();
//make root variables for front end and backend
const FRONT_END_ROOT =  process.env.NODE_ENV ? 'https://stravaheatmaps.herokuapp.com' : 'http://localhost:3000';
const BACK_END_ROOT =  process.env.NODE_ENV ? 'https://stravaheatmaps.herokuapp.com' :  'http://localhost:5000';

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.options('/user', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end();
});

var originsWhitelist = [
  'http://localhost:3000',      //this is my front-end url for development
   'http://www.stravaheatmaps.com'
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Return them as json
  res.json("hi");

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);