var redis = require('../../../dbs/ioredis');

module.exports = function(cb) {
    var key = 'ting' + Date.now();
    var value = 'yun' + Date.now();
    redis.set(key, value);
    redis.get(key, function (err, result) {
        if (!err) {
           return cb(null, result);
        }
        return console.log(err);
    });
}