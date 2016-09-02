var Redis = require('ioredis');
var config = require('../config');

// connect to redis
// new Redis()       // Connect to 127.0.0.1:6379
// new Redis(6380)   // 127.0.0.1:6380
// new Redis(6379, '192.168.1.1')        // 192.168.1.1:6379
// new Redis('/tmp/redis.sock')
// new Redis({
//   port: 6379,          // Redis port
//   host: '127.0.0.1',   // Redis host
//   family: 4,           // 4 (IPv4) or 6 (IPv6)
//   password: 'auth',
//   db: 0
// })


var redis = new Redis();

module.exports = redis;