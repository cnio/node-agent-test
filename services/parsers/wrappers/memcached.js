var memcached = require('../../../dbs/memcached');

module.exports = function(cb) {
    var key = 'memcached' + Date.now();
    var value = 'memcached' + Date.now();
    memcached.set(key, value, 10, function (err) {
        memcached.get(key, function (err, data) {
           if (data) {
               return cb(null, data)      	
           };
           return console.log(err);
        })
    });
}