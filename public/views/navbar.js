define(['app', 'marionette', 'templates/compiled'], function(app, Marionette, JST) {
	var Navbar = Marionette.ItemView.extend({
		template: JST.NavbarTemplate,
		className: 'container',
		events: {
			'click #login': 'onSubmit',
			'click #signIn': 'onSignIn'
		},
		onSubmit: function() {
			var username = this.$el.find('#username').val();
			var password = this.$el.find('#password').val();

			var self = this;
			$.ajax({
				url: '/Login',
				headers: {
					Authorization: username + ':' + password
				}
			}).success(function(data, textStatus, jqXHR) {
				self.$el.find('div[class="form-group"]').html('<strong style="color:#FFFFFF"> Welcome : ' + username + ' </strong>');
			}).fail(function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus);
			});
		},
		onSignIn: function() {
			var username = this.$el.find('#username').val();
			var password = this.$el.find('#password').val();

			var self = this;
			$.ajax({
				url: '/Account',
				type: 'POST',
				data: JSON.stringify({
					user: username,
					password: password
				}),
				contentType: 'application/json; charset=utf-8',
				dataType: 'json'
			}).success(function(data, textStatus, jqXHR) {
				console.log(data);
			}).fail(function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus);
			});
		}
	});

	return Navbar;
});