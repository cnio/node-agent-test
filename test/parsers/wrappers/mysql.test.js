var expect = require('chai').expect;
var request = require('request');
var config = require('../../../config');
var url = config.host + ':' + config.port;

describe('MySQL', function() {
	it('should return mysql action data', function(done) {
		request(url + '/mysql', function(err, res, data) {
			// metrics
			var obj = JSON.parse(data);
			expect(obj.status).to.not.equal('failed');
			expect(obj.metrics.started).to.be.a('number');
			expect(obj.metrics.apdex_t).to.be.a('number');

			// webSegment
			expect(obj.webSegment.name).to.be.equal('NodeJS/NULL/%2Fmysql');
			done();
		})
	})
});