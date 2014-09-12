define(['marionette', 'text!templates/layout.html'], function(Marionette, LayoutTpl) {

	var Layout = Marionette.Layout.extend({
		template: LayoutTpl,
		regions: {
			menu: '#menu',
			content: '#content'
		}
	});

	return Layout;
});