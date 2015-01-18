define(
	[
		'handlebars',
		'text!mobile/templates/mobileNavbar.html',
	],
	function(
		Handlebars,
		NavbarTpl
	) {
		return {
			NavbarTemplate: Handlebars.compile(NavbarTpl),
		};
	}
);