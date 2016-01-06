define(['marionette', 'localforage', 'templates/compiled'], function(Marionette, LocalForage, JST) {
	var LocalForage = Marionette.ItemView.extend({
		template: JST.LocalForageTemplate,
		className: 'local-forage',
		initialize: function() {

		},
		setItem: function() {
			LocalForage.setItem('key', 'localforage', function(err, result) {
				console.log('setItem: ' + result.value);
			});
		},
		getItem: function() {
			LocalForage.getItem('key', function(err, value) {
				console.log('getItem: ' + value);
			});
		}
	});
	return LocalForage;
});