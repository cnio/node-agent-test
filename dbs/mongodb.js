var mongoose = require('mongoose');
var config = require('../config');
var mongodb = config.db.mongodb;
var connectionString = 'mongodb://' + mongodb.host + ':' + mongodb.port + '/' + mongodb.name;
var options = {
  db: {
    native_parser: true
  },
  server: {
    auto_reconnect: true,
    poolSize: 5
  }
};

mongoose.connect(connectionString, options, function(err, res) {
  if (err) {
    console.log('[mongoose log] Error connecting to: ', + connectionString + '. ' + err);
    return process.exit(1);
  }
});

var db = mongoose.connection;
db.once('open', function() {
  return console.log('MongoDB is running');
});

module.exports = db;