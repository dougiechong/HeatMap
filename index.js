const express = require('express');
      session = require('express-session'),
      path = require('path'),
      passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      cors = require('cors'),
      dbConfig = require('./db.js'),
      mongoose = require('mongoose'),
      flash=require("connect-flash");
      bodyParser= require("body-parser");

const axios = require('axios');
var User = require('./models/user');

require('dotenv').config();
mongoose.connect(dbConfig.url, { useMongoClient: true });

//make root variables for front end and backend
const FRONT_END_ROOT =  process.env.NODE_ENV ? 'https://stravaheatmaps.herokuapp.com' : 'http://localhost:3000';
const BACK_END_ROOT =  process.env.NODE_ENV ? 'https://stravaheatmaps.herokuapp.com' :  'http://localhost:5000';

const app = express();

app.use(flash());
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
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

// Initialize Passport 
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

//make email and pw fields email
passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'email',
    passReqToCallback : true
  },
  function(req, email, password, done) {
    console.log('local strategy called with: %s, pw is %s', email, password);
    console.log('params %s', req.params.code);
    findOrCreateUser = function(){
      // find a user in Mongo with provided username
      User.findOne({'email':email},function(err, user) {
        // In case of any error return
        if (err){
          console.log('Error in SignUp: '+err);
          return done(err);
        }
        // already exists just update token
        if (user) {
          console.log(req.body.access_token);
          console.log('User already exists');
          User.update({'email': email}, {
                  access_token: req.body.access_token
              },function(err) {
                 if (err) console.log(err);
              });
          return done(null, user);
        } else {
          console.log('new user');
          // if there is no user with that email
          // create the user
          var newUser = new User();
          // set the user's local credentials
          newUser.email = email;
          newUser.access_token= req.body.access_token;
          newUser.id = req.body.id
          newUser.firstname = req.body.firstname;
 
          // save the user
          newUser.save(function(err) {
            if (err){
              console.log('Error in Saving user: '+err);  
              throw err;  
            }
            console.log('User Registration succesful');    
            return done(null, newUser);
            //return done(null, {name: email});
          });
        }
      });
    }
     
    // Delay the execution of findOrCreateUser and execute 
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  })
);

/* Handle Login POST */
app.post('/login/:code', passport.authenticate('login', {
  successRedirect: '/',
  failureRedirect: '/',
  failureFlash : true 
}));

// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

app.get('/user', isAuthenticated,
  function(req, res) {
    res.json(req.user);
});

//should switch to a login route and save access token to user model
app.get('/user/:code',
  function(req, res) {
    console.log(req.session);
    axios.post('https://www.strava.com/oauth/token', {
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code: req.params.code
    }).then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  });

//serialize and deserialize
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Heatmap listening on ${port}`);