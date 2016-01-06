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
		ui: {
			'collapse': '.dropdown-menu li a'
		},
		events: {
			'click @ui.collapse': 'clickCollapse'
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
		clickCollapse: function() {
			$('.navbar-toggle:visible').click();
		}
	});

	return Navbar;
});