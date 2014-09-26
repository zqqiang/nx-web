require(
	[
		'backbone', 'handlebars', 'jquery', 'app', 'views/layout', 'views/navbar', 'views/menu', 'router',
		'views/table', 'views/dummy', 'models/session', 'views/panel'
	],
	function(
		Backbone, Handlebars, $, app, Layout, Navbar, Menu, Router,
		Table, Dummy, SessionModel, Panel
	) {
		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		var contextMap = {
			"Editors": Dummy,
			"Table": Table,
			"HighCharts": Dummy,
			"3d": Dummy,
			"other": Dummy,
		};

		var LoginEditors = {
			heading: 'Login',
			body: [{
				id: _.uniqueId('editor-'),
				type: 'text',
				name: 'username',
				label: 'Username',
				placeholder: 'Enter username',
				help: 'Please enter your username...',
				layout: {
					label: 'col-md-3',
					field: 'col-md-9',
				}
			}, {
				id: _.uniqueId('editor-'),
				type: 'password',
				name: 'password',
				label: 'Password',
				placeholder: 'Enter password',
				help: 'Please enter your password...',
				layout: {
					label: 'col-md-3',
					field: 'col-md-9',
				}
			}],
			footerBtn: [{
				id: 'submit',
				icon: 'fa fa-dot-circle-o',
				label: 'Submit',
				btnClass: 'btn btn-sm btn-primary',
				btnType: 'submit',
			}]
		};

		app.navigateTo = function(context, options) {
			if (app.session.get('logged_in')) {
				if ('' === context) {
					app.layout = new Layout();
					app.mainRegion.show(app.layout);
					app.menu = new Menu();
					app.layout.menu.show(app.menu);
				} else if ('Login' === context) {
					app.mainRegion.show(new Panel(LoginEditors));
				} else {
					app.layout.content.show(new contextMap[context](options));
				}
			} else {
				app.mainRegion.show(new Panel(LoginEditors));
			}
		};

		app.addInitializer(function(options) {
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