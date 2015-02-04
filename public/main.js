require(
	[
		'jquery', 'app', 'views/layout', 'views/navbar', 'router',
		'views/table', 'views/dianping', 'views/dashboard', 'views/dummy',
		'models/session', 'views/panel', 'mobile-detect', 'views/signin',
		'views/homepage', 'views/products', 'views/footer',
		'bootstrap', 'highcharts'
	],
	function(
		$, app, Layout, Navbar, Router,
		Table, Dianping, Dashboard, Dummy, SessionModel, Panel, MobileDetect,
		SignIn, Homepage, Products, Footer
	) {
		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		var contextMap = {
			"": Layout,
			"Homepage": Homepage,
			"Products": Products,
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
				headerRegion: 'header[role="banner"]',
				mainRegion: 'main[role="main"]',
				footerRegion: 'footer[role="contentinfo"]',
			});

			app.headerRegion.show(new Navbar());
			app.footerRegion.show(new Footer());

			app.session.checkAuth({
				complete: function() {
					Backbone.history.start();
				}
			});
		});
	}
);