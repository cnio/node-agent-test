var express = require('express');
var wrappers = require('./services/parsers/wrappers')

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(wrappers.mongodb)

app.use('/', routes);
app.use('/users', users);


module.exports = app;
