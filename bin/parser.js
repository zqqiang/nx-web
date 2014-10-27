var http = require('http');

http.get('http://www.baidu.com', function(res) {
	console.log('badiu RES: ', res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.on('data', function(chunk) {
		// console.log('BODY: ' + chunk);
	});
}).on('error', function(e) {
	console.log('Error message: ', e.message);
});