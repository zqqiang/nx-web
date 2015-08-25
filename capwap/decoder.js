var parser = require('packet').createParser();
var object = {};
var callback;

var parseMessageElement = function(message, elementLength) {
	parser.extract('x128, b8[' + elementLength + '] => messageElement', function(element) {
		object.messageElement = [];
		parseTlv(element.messageElement, elementLength);
	});
	parser.parse(message);
}

var parseTlv = function(tlv, elementLength) {
	parser.extract('x16, b16 => length', function(tlvObj) {
		parseTlvValue(tlv, tlvObj.length);
		var len = tlvObj.length + 4;
		if (elementLength > len) {
			parseTlv(tlv.slice(len, elementLength), elementLength - len);
		}
		if (elementLength === len) callback(object);
	});
	parser.parse(tlv);
}

var getVenderIdentifier = function(value) {
	var identifier = (value[0] << 24 | value[1] << 16 | value[2] << 8 | value[3]);
	if (identifier === 0x3044) return 'Fortinet, Inc. (' + identifier + ')';
	return 'error';
}

var getVenderElementId = function(value) {
	var elementId = (value[4] << 8 | value[5]);
	if (elementId === 0xa1) {
		return 'MGMT VLAN Tag (' + elementId + ')';
	} else if (elementId === 0xc0) {
		return 'WTP Capabilities (' + elementId + ')';
	}
	return 'error';
}

var getVenderData = function(value) {
	var elementId = (value[4] << 8 | value[5]);
	var data = {};
	if (elementId === 0xa1) {
		data.mgmtVlanTag = (value[6] << 8 | value[7]);
	} else if (elementId === 0xc0) {
		data.version = (value[6] << 8 | value[7]);
		data.radioId = value[8];
		data.wtpCapFlags = value[9];
		data.reserved = value.slice(9, value.length);
	}
	return data;
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
		obj.value.venderIdentifier = getVenderIdentifier(tlv.value);
		obj.value.venderElementId = getVenderElementId(tlv.value);
		obj.value.venderData = getVenderData(tlv.value);
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

var parseControlHeader = function(message, controlHeader) {
	parser.extract('b32 => messageType, \
					b8 => sequneceNumber, \
					b16 => messageElementLength, \
					b8 => flags', function(controlHeader) {
		console.log(controlHeader);
		object.controlHeader = controlHeader;
		parseMessageElement(message, controlHeader.messageElementLength);
	});
	parser.parse(controlHeader);
}

exports.parse = function(message, success) {
	callback = success;
	parser.extract('b8[1] => preamble, \
		            b8[7] => header, \
		            b8[8] => controlHeader', function(capwap) {
		console.log(capwap);
		parsePreamble(capwap.preamble);
		parseHeader(capwap.header);
		parseControlHeader(message, capwap.controlHeader);
	});
	parser.parse(message);
}