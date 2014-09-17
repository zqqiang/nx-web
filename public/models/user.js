define(['backbone'], function(Backbone) {
	var UserModel = Backbone.Model.extend({
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
	return UserModel;
});