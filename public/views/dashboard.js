define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Dashboard = Marionette.ItemView.extend({
		template: JST.DashboardTemplate,
		initialize: function() {
			var Model = Backbone.Model.extend({
				urlRoot: '/Dashboard'
			});

			this.model = new Model();
			this.model.fetch({
				async: false
			});
		},
	});

	return Dashboard;
});