/*
 Get information from www.dianping.com 
 */

var http = require('http');
var crypto = require('crypto');
var Modules = require('../model/models');

function getSign(params) {
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

function getBatchDealsById(deal_ids) {
	var params = {};
	params['deal_ids'] = deal_ids.toString();

	var sign = getSign(params);

	var batchDealsOptions = {
		hostname: 'api.dianping.com',
		path: '/v1/deal/get_batch_deals_by_id?appkey=721651879&sign=' + sign + '&deal_ids=' + deal_ids.toString(),
	}

	var req = http.request(batchDealsOptions, function(res) {
		var bodyChunk = '';

		res.on('data', function(chunk) {
			// console.log('got %d bytes of data', chunk.length);
			bodyChunk += chunk;
		});

		res.on('end', function() {
			var payload = JSON.parse(bodyChunk);

			if ('ERROR' === payload.status) {
				console.log('errorCode: ', payload.error.errorCode);
				console.log('errorMessage: ', payload.error.errorMessage);
			} else {
				console.log('count: ', payload.count);
				console.log('deals.length: ', payload.deals.length);
				// console.log('first deals: ', payload.deals[0]);

				for (var i = 0; i < payload.deals.length; ++i) {
					var Model = Modules['DianpingTuan'];
					Model.create(payload.deals[i], function(err, model) {
						if (err) console.error(err);
					});
				}
			}
		});
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	req.end();
}

function getBatchDeals(start, end, array) {
	if (end <= array.length) {
		setTimeout(function() {
			getBatchDealsById(array.slice(start, end));
			getBatchDeals(start + 40, end + 40, array);
		}, 1000);
	}
}

var params = {};
params['city'] = '北京';

var sign = getSign(params);

var idListOptions = {
	hostname: 'api.dianping.com',
	path: '/v1/deal/get_all_id_list?appkey=721651879&sign=4A68DE9911EF25401D0D09875EE4CEC3CA595D73&city=%E5%8C%97%E4%BA%AC',
};

var req = http.request(idListOptions, function(res) {
	var bodyChunk = '';

	res.on('data', function(chunk) {
		// console.log('got %d bytes of data', chunk.length);
		bodyChunk += chunk;
	});

	res.on('end', function() {
		var payload = JSON.parse(bodyChunk);

		// console.log('Count: ', payload.count);
		// console.log('id_list.length: ', payload.id_list.length);
		// console.log(payload);

		if ('ERROR' === payload.status) {
			console.log('errorCode: ', payload.error.errorCode);
			console.log('errorMessage: ', payload.error.errorMessage);
		} else {
			var array = payload.id_list;
			var size = payload.id_list.length;

			getBatchDeals(0, 40 < size ? 40 : size, array);
		}
	});
});

req.on('error', function(e) {
	console.log('problem with request: ' + e.message);
});

req.end();