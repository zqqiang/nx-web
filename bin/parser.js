var http = require('http');

var idListOptions = {
	hostname: 'api.dianping.com',
	path: '/v1/deal/get_all_id_list?appkey=721651879&sign=4A68DE9911EF25401D0D09875EE4CEC3CA595D73&city=%E5%8C%97%E4%BA%AC',
};

function getBatchDealsById(deal_ids) {
	var batchDealsOptions = {
		hostname: 'api.dianping.com',
		path: '/v1/deal/get_batch_deals_by_id?appkey=721651879&sign=82AEB57F7B4D0CD2C4CCB400F5A3E8E36F725025&deal_ids=' + deal_ids.toString(),
	}

	console.log(batchDealsOptions);

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

		var array = payload.id_list;
		var size = payload.id_list.length;

		getBatchDeals(0, 40 < size ? 40 : size, array);
	});
});

req.on('error', function(e) {
	console.log('problem with request: ' + e.message);
});

req.end();