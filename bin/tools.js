var crypto = require('crypto');

var dianpingTool = {};

dianpingTool.getSign = function(params) {
	var appkey = '721651879';
	var secret = 'c4fb48f5052d4ef2bea3f4b7c664b1de';

	var array = new Array();
	for (var key in params) {
		array.push(key);
	}
	array.sort();

	var paramArray = new Array();
	paramArray.push(appkey);
	for (var index in array) {
		var key = array[index];
		paramArray.push(key + params[key]);
	}
	paramArray.push(secret);

	var shaSource = paramArray.join("");
	var sha1 = crypto.createHash('sha1').update(shaSource).digest('hex');
	var sign = new String(sha1).toUpperCase();

	return sign;
}

module.exports = dianpingTool;