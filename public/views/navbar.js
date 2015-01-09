define(['app', 'marionette', 'templates/compiled'], function(app, Marionette, JST) {
	var Navbar = Marionette.ItemView.extend({
		template: JST.NavbarTemplate,
		events: {
			'click button[type="submit"]': 'onSubmit'
		},
		onSubmit: function() {
			var username = this.$el.find('#username').val();
			var password = this.$el.find('#password').val();
			$.ajax({
				url: '/Login',
				headers: {
					Authorization: username + ':' + password
				}
			}).success(function(data, textStatus, jqXHR) {
				console.log(textStatus);
			}).fail(function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus);
			});
		}
	});

	return Navbar;
});