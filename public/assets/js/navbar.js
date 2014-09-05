(function(app) {
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

	app.NavbarView = Marionette.ItemView.extend({
		template: navbarTemplate.join(''),
	});

	app.addRegions({
		navbarRegion: '#navbar-region',
	});

	app.addInitializer(function(options) {
		app.navbarRegion.show(new app.NavbarView());
	});

})(Application);