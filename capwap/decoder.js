var parser = require('packet').createParser();
var object = {};

var parseMessageElement = function(message, elementLength, success) {
	parser.extract('x128, b8[' + elementLength + '] => messageElement', function(element) {
		object.messageElement = [];
		parseTlv(element.messageElement, elementLength, success);
	});
	parser.parse(message);
}

var parseTlv = function(tlv, elementLength, success) {
	parser.extract('x16, b16 => length', function(tlvObj) {
		parseTlvValue(tlv, tlvObj.length);
		var len = tlvObj.length + 4;
		if (elementLength > len) {
			parseTlv(tlv.slice(len, elementLength), elementLength - len);
		}
		if (elementLength === len) console.log(object);
	});
	parser.parse(tlv);
}

var parseTlvValueObject = function(tlv) {
	var obj = {};
	obj.length = tlv.length;
	if (tlv.type === 20) {
		obj.type = 'Discover Type (20)';
		if (tlv.value[0] === 1) {
			obj.value = 'Discover Type: Static Configuration (1)';
		}
	} else if (tlv.type === 37) {
		obj.type = 'Vendor Specific Payload (37)';
		obj.value = {};
		if (tlv.value[0] === 0x00 && tlv.value[1] === 0x00 && tlv.value[2] === 0x30 && tlv.value[3] === 0x44) {
			obj.value.venderIdentifier = 'Fortinet, Inc. (12356)';
		}
		if (tlv.value[4] === 0x00 && tlv.value[5] === 0xa1) {
			obj.value.venderElementId = 'MGMT VLAN Tag (161)';
		}
		obj.value.venderData = 'MGMT VLAN Tag: 0x0000 (0)';
	}
	return obj;
}

var parseTlvValue = function(tlv, length) {
	parser.extract('b16 => type, b16 => length, b8[' + length + '] => value', function(tlv) {
		console.log(tlv);
		var tlvObj = parseTlvValueObject(tlv);
		console.log(tlvObj);
		object.messageElement.push(tlvObj);
	});
	parser.parse(tlv);
}

var parsePreamble = function(preamble) {
	parser.extract('b8{b4 => version, b4 => type}', function(preamble) {
		console.log(preamble);
		object.preamble = preamble;
	});
	parser.parse(preamble);
}

var parseHeader = function(header) {
	parser.extract('b56{b5 => headerLength, b5 => radioId, b5 => wirelessBindId, b9 => headerFlags, b16 => fragmentId, b13 => fragmentOffset, b3 => reserved}', function(header) {
		console.log(header);
		object.header = header;
	});
	parser.parse(header);
}

var parseControlHeader = function(message, controlHeader, success) {
	parser.extract('b32 => messageType, \
					b8 => sequneceNumber, \
					b16 => messageElementLength, \
					b8 => flags', function(controlHeader) {
		console.log(controlHeader);
		object.controlHeader = controlHeader;
		parseMessageElement(message, controlHeader.messageElementLength, success);
	});
	parser.parse(controlHeader);
}

exports.parse = function(message, success) {
	parser.extract('b8[1] => preamble, \
		            b8[7] => header, \
		            b8[8] => controlHeader', function(capwap) {
		console.log(capwap);
		parsePreamble(capwap.preamble);
		parseHeader(capwap.header);
		parseControlHeader(message, capwap.controlHeader, success);
	});
	parser.parse(message);
}