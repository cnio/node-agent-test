var mysql = require('mysql');
var config = require('../config').db.mysql;

var connection = mysql.createConnection({
    host     : config.host,
    user     : config.user,
    password : config.password,
    database : config.database
});

connection.connect(function(err) {
    if (err) {
       console.error('error connecting: ' + err.stack);
       return;
    }
});

module.exports = connection;