define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Layout = Marionette.LayoutView.extend({
		template: JST.LayoutTemplate,
		className: 'page-header',
		regions: {
			content: '#content'
		}
	});

	return Layout;
});