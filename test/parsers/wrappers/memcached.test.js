var expect = require('chai').expect;
var request = require('request');
var config = require('../../../config');
var url = config.host + ':' + config.port;

describe('Memcached', function() {
	it('should return memcached string', function(done) {
		request(url + '/memcached', function(err, res, data) {
			expect(data).to.be.equal('NodeJS/NULL/%2Fmemcached');
			done();
		})
	})
});