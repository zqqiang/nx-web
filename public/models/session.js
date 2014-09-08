(function(app) {
	var SessionModel = Backbone.Model.extend({
		defaults: {
			logged_in: false,
			user_id: ''
		},
		initialize: function() {
			this.user = new app.userModel();
		},
		url: function() {
			return '/auth';
		},
		updateSessionUser: function(userData) {
			this.user.set(_.pick(userData, _.keys(this.user.defaults)));
		},
		checkAuth: function(callback) {
			var self = this;
			this.fetch({
				success: function(data, textStatus, jqXHR) {
					self.updateSessionUser(data.user);
					self.set({
						logged_in: true
					});
				},
				error: function() {
					self.set({
						logged_in: false
					});
				}
			}).complete(function() {
				if ('complete' in callback) callback.complete();
			});
		}
	});

	app.session = new SessionModel();
})(Application);