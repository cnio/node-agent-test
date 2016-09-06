var Memcached = require('memcached');
var config = require('../config').db.memcached;
var connectionString = config.host + ':' + config.port;
var memcached = new Memcached(connectionString);

module.exports = memcached;