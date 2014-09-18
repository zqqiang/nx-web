define(['marionette', 'handlebars', 'templates/compiled'], function(Marionette, Handlebars, JST) {
	var PanelHeading = Marionette.ItemView.extend({
		// template: Handlebars.compile('<strong>{{}}</strong>'),
		template: '<strong>Hello</strong>',
		tagName: 'h2',
		initialize: function() {
			console.log('panel heading is start!');
		},
	});

	var Panel = Marionette.Layout.extend({
		template: JST.PanelTemplate,
		className: 'panel panel-default',
		regions: {
			heading: '#heading',
			body: '#body',
			footer: '#footer',
		},
		initialize: function(options) {

		},
	});

	return Panel;
});