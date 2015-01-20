define(['app', 'marionette', 'bootbox', 'templates/compiled'], function(app, Marionette, bootbox, JST) {
	var Navbar = Marionette.ItemView.extend({
		template: JST.NavbarTemplate,
		className: 'container-fluid',
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
				bootbox.dialog({
					title: 'Sign In',
					message: '<div class="alert alert-success" role="alert">' + jqXHR.status + ':' + jqXHR.statusText + '</div>'
				});
			}).fail(function(jqXHR, textStatus, errorThrown) {
				bootbox.dialog({
					title: 'Sign In',
					message: '<div class="alert alert-danger" role="alert">' + jqXHR.responseJSON.message + '</div>'
				});
			});
		}
	});

	return Navbar;
});