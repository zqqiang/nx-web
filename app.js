var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var debug = require('debug')('app');

var users = require('./routes/users');
var auth = require('./routes/auth');
var editors = require('./routes/editors');
var login = require('./routes/login');
var account = require('./routes/account');

var android = require('./routes/android');
var dashboard = require('./routes/dashboard');
var parser = require('./routes/parser');
var stock = require('./routes/stock');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/theme/project/img/favicon.ico'));

app.use('/users', users);
app.use('/auth', auth);
app.use('/Editors', editors);

//android routes
app.use('/Android', android);
app.use('/Dashboard', dashboard);
app.use('/Login', login);
app.use('/Account', account);
app.use('/Parser', parser);
app.use('/Stock', stock);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var server = app.listen(server_port, server_ip_address, function() {
    console.log("Listening on " + server_ip_address + ", server_port " + server_port);
});