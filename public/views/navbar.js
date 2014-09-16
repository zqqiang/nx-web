define(['app', 'marionette', 'templates/compiled'], function(app, Marionette, JST) {

	var Navbar = Marionette.ItemView.extend({
		template: JST.NavbarTemplate,
	});

	return Navbar;
});