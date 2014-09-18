define(['backbone', 'marionette', 'handlebars', 'templates/compiled'], function(Backbone, Marionette, Handlebars, JST) {
	var PanelHeading = Marionette.ItemView.extend({
		template: Handlebars.compile('<strong>{{header}}</strong>'),
		tagName: 'h2',
		initialize: function(options) {
			var Header = Backbone.Model.extend({});

			this.model = new Header({
				header: options.header
			});
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
			this.header = options.heading;
		},
		onShow: function() {
			this.heading.show(new PanelHeading({
				header: this.header,
			}));
		},
	});

	return Panel;
});