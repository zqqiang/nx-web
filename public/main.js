require(
	[
		'jquery', 'app', 'views/layout', 'views/navbar', 'router',
		'views/table', 'views/dianping', 'views/dashboard', 'views/dummy',
		'models/session', 'views/panel', 'mobile-detect', 'views/signin', 'views/homepage', 'bootstrap', 'highcharts'
	],
	function(
		$, app, Layout, Navbar, Router,
		Table, Dianping, Dashboard, Dummy, SessionModel, Panel, MobileDetect, SignIn, Homepage

	) {
		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		var contextMap = {
			"": Layout,
			"Homepage": Homepage,
			"Editors": Dummy,
			"Table": Table,
			"Dianping": Dianping,
			"Dashboard": Dashboard,
			"HighCharts": Dummy,
			"3d": Dummy,
			"SignIn": SignIn,
			"other": Dummy,
		};

		app.navigateTo = function(context, options) {
			app.mainRegion.show(new contextMap[context](options));
		};

		app.addInitializer(function(options) {
			app.md = new MobileDetect(window.navigator.userAgent);

			app.router = new Router();
			app.session = new SessionModel();

			app.addRegions({
				navbarRegion: 'header[role="banner"]',
				mainRegion: 'main[role="main"]',
			});

			app.navbarRegion.show(new Navbar());

			app.session.checkAuth({
				complete: function() {
					Backbone.history.start();
				}
			});
		});
	}
);