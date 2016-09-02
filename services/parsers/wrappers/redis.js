var redis = require('../../../dbs/redis');

redis.on('error', function(err) {
	console.log("Redis connect error" + err);
})

module.exports = function(cb) {
	console.log(12345)
    var key = 'redis' + Date.now();
    var value = 'redis' + Date.now();
    redis.set(key, value);
    redis.get(key, function (err, result) {
        if (!err) {
           return cb(null, result);
        }
        return console.log(err);
    });
}