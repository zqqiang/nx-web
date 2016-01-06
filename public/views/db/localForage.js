define(['marionette', 'localforage', 'templates/compiled'], function(Marionette, localforage, JST) {
	var LocalForage = Marionette.ItemView.extend({
		template: JST.LocalForageTemplate,
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
	return LocalForage;
});