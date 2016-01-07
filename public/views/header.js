define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Header = Marionette.ItemView.extend({
		template: JST.HeaderTemplate,
		initialize: function() {

		},
	});
	return Header;
});