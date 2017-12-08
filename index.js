const express = require('express'),
      //session = require('express-session'),
      path = require('path');
      //passport = require('passport'),
      //StravaStrategy = require('passport-strava-oauth2').Strategy,
      //cors = require('cors');

//require('dotenv').config();
//make root variables for front end and backend
//const FRONT_END_ROOT =  process.env.NODE_ENV ? 'https://stravaheatmaps.herokuapp.com' : 'http://localhost:3000';
//const BACK_END_ROOT =  process.env.NODE_ENV ? 'https://stravaheatmaps.herokuapp.com' :  'http://localhost:5000';

//const app = express();


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// Show log in failure message
app.get('/login/fail', (req, res) => {
  // Return them as json
  res.json('Strava Login Failed');
});

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

/*var originsWhitelist = [
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
app.use(cors(corsOptions));*/

// Initialize Passport 
/*app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login/strava',
  passport.authenticate('strava'));

app.get('/auth/strava/callback', 
  passport.authenticate('strava', { failureRedirect: '/login/fail' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect(FRONT_END_ROOT);
  });

app.get('/account', ensureAuthenticated, function(req, res){
  res.json('account', { user: req.user });
});

//doesn't really work, need to log out of strava
app.get('/logout', function (req, res){
  req.logout();
  req.session.destroy(function (err) {
      if (!err) {
          res.status(200).clearCookie('connect.sid', {path: '/'}).json({status: "Success"});
      } else {
          // handle error case...
      }

  });
});

app.get('/user',
  //passport.authenticate('strava', { failureRedirect: '/login/fail' }),
  function(req, res) {
    res.json(req.user);
  });

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/indgsdfex.html'));
});
 
passport.use(new StravaStrategy({
    clientID: process.env.STRAVA_CLIENT_ID,
    clientSecret: process.env.STRAVA_CLIENT_SECRET,
    callbackURL: `${BACK_END_ROOT}/auth/strava/callback`
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // To keep the example simple, the user's Strava profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Strava account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}*/

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Heat map listening on ${port}`);