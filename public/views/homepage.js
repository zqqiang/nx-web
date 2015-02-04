define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Homepage = Marionette.ItemView.extend({
		template: JST.HomepageTemplate,
		className: 'container',
	});

	return Homepage;
});