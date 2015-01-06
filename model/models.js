var mongoose = require('../db/db');

require('../model/business.js')();
require('../model/account.js')();

var Models = {
	// Business: mongoose.model('725_1419566183'),
	Business: mongoose.model('Business'),
	Account: mongoose.model('Account'),
};

module.exports = Models;