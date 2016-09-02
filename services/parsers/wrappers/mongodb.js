var User = require('../../../models/mongodb')
var obj = {
	username: 'tingyun' + Date.now(),
	password: 'tingyun'
};

module.exports = function saveUser(cb) {
	var user = new User(obj);
	user.save(function(error, data) {
		if (error) {
			return console.log(error)
		}
		// console.log(123456)
		// console.log(data)
		// console.log(123456)
		return cb(null, data);
	})
};