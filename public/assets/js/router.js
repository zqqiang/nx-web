(function(app) {
	var Router = Backbone.Router.extend({
		routes: {
			"Editors": "showEditors",
			"Table": "showTable",
			"HighCharts": "showHighCharts",
			"3d": "show3d",
			"*other": "defaultRouter",
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

	var appRouter = new Router();

	Backbone.history.start();

})(Application);