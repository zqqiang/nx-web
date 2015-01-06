var mongoose = require('mongoose');

// var url = 'mongodb://qyP7lHql1vFBTIIWCSmqYxo0:3zqYaRkQZjfPEBBf6wewhXB3AKdf03wb@mongo.duapp.com:8908/qMYQVShgnToPSSQWIYyz';
var url = 'mongodb://localhost/test';

mongoose.connect(url);
console.log('mongoose.connect(url) [%s]', new Date());

var db = mongoose.connection;

db.on('error', function(err) {
	console.error('connection error [%s]: %s', new Date(), err);
});

db.once('open', function callback() {
	console.log('mongoose connect success [%s]!', new Date());
});

db.on('close', function() {
	console.error('mongodb close connection [%s]!', new Date());
});

db.on('reconnected', function() {
	console.log('mongodb reconnected [%s]!', new Date());
});

module.exports = mongoose;