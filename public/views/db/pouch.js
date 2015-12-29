define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Pouch = Marionette.ItemView.extend({
		template: JST.PouchTemplate,
		className: 'pouch'
	});
	return Pouch;
});