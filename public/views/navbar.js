define(['app', 'backbone', 'marionette', 'bootbox', 'templates/compiled'], function(app, Backbone, Marionette, bootbox, JST) {
	var Navbar = Marionette.ItemView.extend({
		template: JST.NavbarTemplate,
		// tagName: 'nav',
		// className: 'navbar navbar-static-top navbar-default',
		attributes: {
			role: 'navigation'
		},
		modelEvents: {
			"change": "modelChanged"
		},
		initialize: function() {
			var Model = Backbone.Model.extend({});
			this.model = new Model({
				username: 'Sign In'
			});
		},
		modelChanged: function() {
			this.render();
		},
	});

	return Navbar;
});