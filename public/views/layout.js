define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Layout = Marionette.LayoutView.extend({
		template: JST.LayoutTemplate,
		className: 'page-header',
	});
	return Layout;
});