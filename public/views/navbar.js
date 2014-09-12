define(['app', 'marionette'], function(app, Marionette) {
	var navbarTemplate = [
		'<div>',

		'<nav id="navbar-region" class="navbar navbar-inverse" role="navigation">',
		'<div class="container-fluid">',
		'<div class="navbar-header">',
		'<a class="navbar-brand" href="#">NxManager</a>',
		'</div>',
		'</div>',
		'</nav>',

		'</div>',
	];

	var Navbar = Marionette.ItemView.extend({
		template: navbarTemplate.join(''),
	});

	return Navbar;
});