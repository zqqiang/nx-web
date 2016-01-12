var Marionette = require('backbone.marionette');
var localforage = require('localforage');
var LocalForageHbs = require('../../templates/db/localForage.html');

var LocalForage = Marionette.ItemView.extend({
	template: LocalForageHbs,
	className: 'local-forage',
	initialize: function() {
		this.setItem();
		this.getItem();
	},
	setItem: function() {
		localforage.setItem('key', 'localforage', function(err, result) {
			if (err) console.log(err);
			console.log('setItem: ' + result);
		});
	},
	getItem: function() {
		localforage.getItem('key', function(err, value) {
			if (err) console.log(err);
			console.log('getItem: ' + value);
		});
	}
});
module.exports = LocalForage;