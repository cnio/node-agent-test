var tingyun = require('tingyun');
var express = require('express');
var Q = require('q');
var wrappers = require('./services/parsers/wrappers');
require('./dbs/mongodb');

var app = express();

function toObj(action_data) {
    var obj = {};
    obj.metrics = {};
    if (!action_data) {
        return;
    }
    if (action_data.metrics) {
        obj.metrics.started = action_data.metrics.started;
        obj.metrics.apdex_t = action_data.metrics.apdex_t;
        obj.metrics.components = action_data.metrics.components;
        obj.metrics.apdex = action_data.metrics.apdex;
        obj.metrics.actions = action_data.metrics.actions;
        obj.metrics.general = action_data.metrics.general;
        obj.metrics.errors = action_data.metrics.errors;
    }
    obj.webSegment = {};
    obj.webSegment.name = action_data.webSegment.name;
    return obj;
};

function qPromise(wrapper, cb) {
    Q.nfcall(wrappers.mongodb).then(function(data) {
        if (!data) {
            return res.send({
                status: 'failed'
            });
        }
        var action_data = tingyun.getAction();
        return cb(null, toObj(action_data));
    }).catch(function(e) {
        console.log(e);
    })
}

 app.use('/mongodb', function(req, res, next) {
    qPromise(wrappers.mongodb, function(err, ret) {
        res.json(ret);
    });
});       
      
app.use('/ioredis', function(req, res, next) {
    qPromise(wrappers.ioredis, function(err, ret) {
        res.json(ret);
    });
});

app.use('/redis', function(req, res, next) {
    qPromise(wrappers.redis, function(err, ret) {
        res.json(ret);
    });
});

app.use('/mysql', function(req, res, next) {
    qPromise(wrappers.mysql, function(err, ret) {
        res.json(ret);
    });
});

app.use('/memcached', function(req, res, next) {
   qPromise(wrappers.memcached, function(err, ret) {
        res.json(ret);
    });
});

module.exports = app;
