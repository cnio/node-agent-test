var expect = require('chai').expect;
var request = require('request');
var config = require('../../../config');
var url = config.host + ':' + config.port;

describe('MongoDB', function() {
	it('should return mongodb string', function(done) {
		request(url + '/mongodb', function(err, res, data) {
			expect(data).to.be.equal('NodeJS/NULL/%2Fmongodb');
			done();
		})
	})
});