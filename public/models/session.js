(function(app) {
	var SessionModel = Backbone.Model.extend({
		defaults: {
			logged_in: false,
			user_id: ''
		},
		url: function() {
			return '/auth';
		},
		checkAuth: function(callback) {
			var self = this;
			this.fetch({
				success: function(data, textStatus, jqXHR) {
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