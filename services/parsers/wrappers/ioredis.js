var redis = require('../../../dbs/ioredis');

module.exports = function(cb) {
    var key = 'ioredis' + Date.now();
    var value = 'ioredis' + Date.now();
    redis.set(key, value);
    redis.get(key, function (err, result) {
        if (!err) {
           return cb(null, result);
        }
        return console.log(err);
    });
}