var dgram = require('dgram');
var capwap = dgram.createSocket('udp4');
var parser = require('packet').createParser();

capwap.on('listening', function() {
	var address = capwap.address();
	console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

capwap.on('message', function(message, remote) {
	console.log(remote.address + ':' + remote.port + ' - ' + 'message len [' + message.length + ']');
	// parser.extract("b8{version: b4, type: b4}", function(header) {
	// 	console.log(header);
	// });
	// parser.parse(message[0]);
});

// parser.extract("length: b16, address: b32, name: b8z", function(object) {
// 	console.log(object.length, object.address, object.name);
// });
// parser.parse([0x01, 0xFF, 0x01, 0x00, 0x00, 0x00, 0x01, 0x02, 0x00]);

module.exports = capwap;