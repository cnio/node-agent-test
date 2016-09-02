var expect = require('chai').expect;
var request = require('request');
var config = require('../../../config');
var url = config.host + ':' + config.port;

describe('Mysql', function() {
	it('should return mysql string', function(done) {
		request(url + '/mysql', function(err, res, data) {
			expect(data).to.be.equal('NodeJS/NULL/%2Fmysql');
			done();
		})
	})
});