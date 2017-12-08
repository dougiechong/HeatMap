var prod_db = 'mongodb://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + process.env.DB_NAME;
var dev_db = 'mongodb://localhost/shmp_dev';
var test_db = 'mongodb://localhost/shmp_test';

module.exports = {
  'url' : process.env.NODE_ENV ? prod_db : process.env.TEST_ENV ? test_db : dev_db
}