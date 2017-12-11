var prod_db = process.env.MONGODB_URI
var dev_db = 'mongodb://localhost/shmp_dev';
var test_db = 'mongodb://localhost/shmp_test';

module.exports = {
  'url' : process.env.NODE_ENV ? prod_db : process.env.TEST_ENV ? test_db : dev_db
}