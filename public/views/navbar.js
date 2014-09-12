define(['app', 'marionette', 'text!templates/navbar.html'], function(app, Marionette, NavbarTpl) {

	var Navbar = Marionette.ItemView.extend({
		template: NavbarTpl,
	});

	return Navbar;
});