define(['app', 'marionette', 'mobile/templates/mobileCompiled'], function(app, Marionette, JST) {
	var Navbar = Marionette.ItemView.extend({
		template: JST.NavbarTemplate,
		className: 'container',
	});
	return Navbar;
});