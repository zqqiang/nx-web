var mongoose = require('../db/db');

require('../model/business.js')();
require('../model/account.js')();

var Models = {
	Business: mongoose.model('Business'),
	Account: mongoose.model('Account'),
};

module.exports = Models;