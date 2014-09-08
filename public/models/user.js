(function(app) {
	app.userModel = Backbone.Model.extend({
		defaults: {
			id: 0,
			username: '',
			name: '',
			email: ''
		},
		url: function() {
			return '/User';
		}
	});
})(Application);