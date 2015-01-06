define(['marionette', 'templates/compiled'], function(Marionette, JST) {

	var Layout = Marionette.Layout.extend({
		template: JST.LayoutTemplate,
		regions: {
			content: '#content'
		}
	});

	return Layout;
});