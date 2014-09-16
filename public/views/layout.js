define(['marionette', 'templates/compiled'], function(Marionette, JST) {

	var Layout = Marionette.Layout.extend({
		template: JST.LayoutTemplate,
		regions: {
			menu: '#menu',
			content: '#content'
		}
	});

	return Layout;
});