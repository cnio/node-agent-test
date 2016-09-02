var expect = require('chai').expect;
var request = require('request');
var config = require('../../../config');
var url = config.host + ':' + config.port;

describe('ioRedis', function() {
	it('should return ioredis string', function(done) {
		request(url + '/ioredis', function(err, res, data) {
			expect(data).to.be.equal('NodeJS/NULL/%2Fioredis');
			done();
		})
	})
});