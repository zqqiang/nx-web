define(['marionette', 'backbone', 'templates/compiled'], function(Marionette, Backbone, JST) {
	var Login = Marionette.ItemView.extend({
		template: JST.LoginTemplate,
		initialize: function() {
			var LoginModel = Backbone.Model.extend({});

			this.model = new LoginModel({
				id: _.unique('editor-'),
				type: 'text',
				label: 'UserName',
				placeholder: 'Please enter username...'
			});
		}
	});
	return Login;
});