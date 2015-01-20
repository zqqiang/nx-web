require(
	[
		'jquery', 'app', 'views/layout', 'views/navbar', 'router',
		'views/table', 'views/dianping', 'views/dashboard', 'views/dummy',
		'models/session', 'views/panel', 'mobile-detect', 'bootstrap', 'highcharts'
	],
	function(
		$, app, Layout, Navbar, Router,
		Table, Dianping, Dashboard, Dummy, SessionModel, Panel, MobileDetect
	) {
		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		var contextMap = {
			"": Layout,
			"Editors": Dummy,
			"Table": Table,
			"Dianping": Dianping,
			"Dashboard": Dashboard,
			"HighCharts": Dummy,
			"3d": Dummy,
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
				navbarRegion: '#navbar-region',
				mainRegion: "#main-region",
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