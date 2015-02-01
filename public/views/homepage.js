define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Homepage = Marionette.ItemView.extend({
		template: JST.HomepageTemplate,
		onShow: function() {

		}
	});

	return Homepage;
});