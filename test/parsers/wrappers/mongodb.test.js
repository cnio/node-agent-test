var expect = require('chai').expect;
var request = require('request');

describe('index', function() {
	it('should return index', function(done) {
		request('http://127.0.0.1:3000', function(err, res, body) {
			expect(body).to.be.equal('index');
			done();
		})
	})
});