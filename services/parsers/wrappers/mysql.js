var mysql = require('../../../dbs/mysql');
var sql = 'SELECT * FROM `user` where `name`= "tingyun"';

module.exports = function(cb) {
    mysql.query(sql, function (error, results, fields) {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)

    if (!error) {
  	    return cb(null, results);
    }
    return console.log(error);
    })
};
