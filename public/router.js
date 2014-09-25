define(
	[
		'backbone', 'app', 'views/menu', 'views/navbar', 'views/layout', 'views/panel'
	],
	function(Backbone, app, Menu, Navbar, Layout, Panel) {
		var Router = Backbone.Router.extend({
			routes: {
				"": "index",
				"index": "index",
				"Editors": "showEditors",
				"Table": "showTable",
				"HighCharts": "showHighCharts",
				"3d": "show3d",
				"*other": "defaultRouter",
			},
			index: function() {
				if (app.session.get('logged_in')) {
					app.layout = new Layout();
					app.mainRegion.show(app.layout);

					app.menu = new Menu();
					app.layout.menu.show(app.menu);
				} else {
					app.mainRegion.show(new Panel({
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
					}));
				}
			},
			showEditors: function() {
				app.navigateTo("Editors");
			},
			showTable: function() {
				app.navigateTo("Table");
			},
			showHighCharts: function() {
				app.navigateTo("HighCharts");
			},
			show3d: function() {
				app.navigateTo("3d");
			},
			defaultRouter: function(other) {
				app.navigateTo("other");
			}
		});
		return Router;
	}
);