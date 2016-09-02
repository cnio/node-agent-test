var tingyun = require('tingyun');
var express = require('express');
//var bodyParser = require('body-parser');
var Q = require('q');
var wrappers = require('./services/parsers/wrappers');
require('./dbs/mongodb');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//app.use(bodyParser.json())
app.use('/', routes);
app.use('/users', users);
app.use('/mongodb', function(req, res, next) {
        Q.nfcall(wrappers.mongodb).then(function(data) {
                if (!data) {
                        res.send({
                        status: 'failed'
                        })
                };
                var action_data = tingyun.getAction();
                if (action_data) {
                        //console.log(action_data.webSegment.name)
                        res.send(action_data.webSegment.name)
                }
        }).catch(function(e) {
                console.log(e)
        })
});

module.exports = app;
