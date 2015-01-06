var mongoose = require('../db/db');

var Account = mongoose.model('Account', {
	user: String,
	password: String
});

module.exports = Account;