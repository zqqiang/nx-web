define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Header = Marionette.ItemView.extend({
		template: JST.HeaderTemplate,
		className: 'main-header',
		initialize: function() {

		},
	});
	return Header;
});