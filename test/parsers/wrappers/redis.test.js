var expect = require('chai').expect;
var request = require('request');
var config = require('../../../config');
var url = config.host + ':' + config.port;

// describe('Redis', function() {
// 	it('should return redis string', function(done) {
// 		request(url + '/redis', function(err, res, data) {
// 			console.log(data)
// 			expect(data).to.be.equal('NodeJS/NULL/%2Fredis');
// 			done();
// 		})
// 	})
// });