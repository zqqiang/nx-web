var http = require('http');
var cheerio = require('cheerio');

var options = {
	hostname: 'api.dianping.com',
	path: '/v1/deal/get_all_id_list?appkey=721651879&sign=4A68DE9911EF25401D0D09875EE4CEC3CA595D73&city=%E5%8C%97%E4%BA%AC',
	// headers: {
	// 	'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36'
	// }
};

var req = http.request(options, function(res) {
	// console.log('STATUS: ' + res.statusCode);
	// console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data', function(chunk) {
		console.log('BODY: ' + chunk);
		// var $ = cheerio.load(chunk);
	});
});

req.on('error', function(e) {
	console.log('problem with request: ' + e.message);
});

req.end();
