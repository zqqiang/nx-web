var crypto = require('crypto');
var http = require('http');
var fs = require('fs');
var _ = require('underscore');
var utf8 = require('utf8');

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
	var sha1 = crypto.createHash('sha1').update(utf8.encode(shaSource)).digest('hex');
	var sign = new String(sha1).toUpperCase();

	return sign;
}

function Rad(d) {
	return d * Math.PI / 180.0;
}

dianpingTool.getDistance = function(lat1, lng1, lat2, lng2) {
	var radLat1 = Rad(lat1);
	var radLat2 = Rad(lat2);
	var a = radLat1 - radLat2;
	var b = Rad(lng1) - Rad(lng2);
	var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
		Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
	s = s * 6378.137;
	s = Math.round(s * 10000) / 10000;
	// console.log('distance [%d] km', s);
	return s;
}

dianpingTool.saveImage = function(url, path, filename) {
	// console.log('url [%s]', url);
	// console.log('path [%s]', path);
	// console.log('filename [%s]', filename);

	var req = http.get(url, function(res) {
		var imagedata = ''
		res.setEncoding('binary')

		res.on('data', function(chunk) {
			imagedata += chunk
		})

		res.on('end', function() {
			// console.log('save image file: [%s]', path + filename);
			fs.writeFile(path + filename, imagedata, 'binary', function(err) {
				if (err) throw err
			})
		})
	});
};

module.exports = dianpingTool;