/*
 Get information from www.dianping.com 
 */

var http = require('http');
var fs = require('fs');
var Modules = require('../model/models');
var tool = require('./tools');
var _ = require('underscore');

function createTuanGouModule(deal) {
	var business = deal.businesses;

	// console.log('business.length: [%d]', business.length);

	var idArray = [];
	for (var i = 0; i < (business.length < 40 ? business.length : 40); ++i) {
		idArray.push(business[i].id);
	};

	if (0 === business.length) return;

	var params = {};
	params['business_ids'] = idArray.toString();

	var sign = tool.getSign(params);

	var businessOptions = {
		hostname: 'api.dianping.com',
		path: '/v1/business/get_batch_businesses_by_id?appkey=721651879&sign=' + sign + '&business_ids=' + idArray.toString(),
	};

	var req = http.request(businessOptions, function(res) {
		var bodyChunk = '';

		res.on('data', function(chunk) {
			bodyChunk += chunk;
		});

		res.on('end', function() {
			var payload = JSON.parse(bodyChunk);

			if ('ERROR' === payload.status) {
				console.log('errorCode: ', payload.error.errorCode);
				console.log('errorMessage: ', payload.error.errorMessage);
			} else {
				var Model = Modules['Dianping'];

				for (var i = 0; i < payload.businesses.length; ++i) {
					deal.businesses[i].telephone = payload.businesses[i].telephone;
				}

				var filename = _.uniqueId('image_');
				tool.saveImage(deal.image_url, './public/data/images/', filename);
				deal.image_url = '/data/images/' + filename;

				Model.create(deal, function(err, model) {
					if (err) console.error(err);
				});
			}
		});

	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	req.end();
}

function startGetTuanGou(start, end, array) {
	createTuanGouModule(array[start++]);
	if (start < end) {
		setTimeout(function() {
			startGetTuanGou(start, end, array);
		}, 1000);
	}
};

function getBatchDealsById(deal_ids) {
	var params = {};
	params['deal_ids'] = deal_ids.toString();

	var sign = tool.getSign(params);

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
				startGetTuanGou(0, payload.deals.length, payload.deals);
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

var idListOptions = {
	hostname: 'api.dianping.com',
	// path: '/v1/deal/get_all_id_list?appkey=721651879&sign=4A68DE9911EF25401D0D09875EE4CEC3CA595D73&city=%E5%8C%97%E4%BA%AC', //Beijing
	path: '/v1/deal/get_all_id_list?appkey=721651879&sign=C89B0D17B3E952375B7C8040D6CAC1E5FB34AA6C&city=%E6%B7%B1%E5%9C%B3', //Shenzhen
};

var req = http.request(idListOptions, function(res) {
	var bodyChunk = '';

	res.on('data', function(chunk) {
		// console.log('got %d bytes of data', chunk.length);
		bodyChunk += chunk;
	});

	res.on('end', function() {
		var payload = JSON.parse(bodyChunk);

		// console.log(payload);
		// console.log('Count: ', payload.count);
		// console.log('id_list.length: ', payload.id_list.length);

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