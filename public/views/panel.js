define(
	[
		'backbone', 'marionette', 'underscore', 'handlebars', 'templates/compiled',
		'views/editor', 'app'
	],
	function(Backbone, Marionette, _, Handlebars, JST, Editor, app) {
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
			},
			getValues: function() {
				var formData = {};
				this.children.each(function(view) {
					formData[view.model.get('name')] = view.getValue();
				});
				return formData;
			},
		});

		var ButtonView = Marionette.ItemView.extend({
			template: Handlebars.compile('<i class="{{icon}}"></i> {{label}}'),
			tagName: 'button',
			initialize: function(options) {
				this.btnClass = options.model.get('btnClass');
				this.btnType = options.model.get('btnType');
				this.id = options.model.get('id');
			},
			onShow: function() {
				this.$el.attr('type', this.btnType);
				this.$el.attr('class', this.btnClass);
				this.$el.attr('id', this.id);
			},
		});

		var Footer = Marionette.CollectionView.extend({
			itemView: ButtonView,
			initialize: function(options) {
				var Model = Backbone.Model.extend({});
				var Col = Backbone.Collection.extend({
					model: Model,
				});
				this.collection = new Col(options);
			}
		});

		var Panel = Marionette.LayoutView.extend({
			template: JST.PanelTemplate,
			className: 'panel panel-default',
			regions: {
				heading: '#heading',
				body: '#body',
				footer: '#footer',
			},
			events: {
				'click #submit': 'onSubmit',
			},
			initialize: function(options) {
				this.header = options.heading;
				this.bodyEditors = options.body;
				this.footerBtn = options.footerBtn;

				this.setupUser();
			},
			setupUser: function() {
				var UserModel = Backbone.Model.extend({});
				var UserCollection = Backbone.Collection.extend({
					model: UserModel,
					url: '/Login',
				});
				this.users = new UserCollection();
			},
			onShow: function() {
				this.heading.show(new PanelHeading({
					header: this.header,
				}));
				this.body.show(new Body(this.bodyEditors));
				this.footer.show(new Footer(this.footerBtn));
			},
			onSubmit: function() {
				var values = this.body.currentView.getValues();
				this.users.create(values, {
					success: function(model, response, options) {
						app.session.updateSessionUser({
							logged_in: true,
						});
						app.navigateTo('');
					}
				});
			}
		});

		return Panel;
	}
);