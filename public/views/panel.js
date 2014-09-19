define(
	[
		'backbone', 'marionette', 'handlebars', 'templates/compiled',
		'views/editor'
	],
	function(Backbone, Marionette, Handlebars, JST, Editor) {
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

		var Body = Marionette.CollectionView.extend({
			itemView: Editor,
			tagName: 'form',
			className: 'form-horizontal',
			initialize: function(options) {
				var Model = Backbone.Model.extend({});
				var Col = Backbone.Collection.extend({
					model: Model,
				});
				this.collection = new Col(options);
			}
		});

		// var Footer = Marionette.CollectionView.extend({
		// 	itemView: 
		// });

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
				this.bodyEditors = options.body;
			},
			onShow: function() {
				this.heading.show(new PanelHeading({
					header: this.header,
				}));
				this.body.show(new Body(this.bodyEditors));
			},
		});

		return Panel;
	}
);