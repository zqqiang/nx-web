define(['marionette', 'templates/compiled', 'app'], function(Marionette, JST, app) {
	var SignIn = Marionette.ItemView.extend({
		template: JST.SignInTemplate,
		className: 'modal-dialog',
		events: {
			'click span.btn': 'onClickPage',
			'click input': 'onClickInput',
			'click button': 'onClickButton',
			'click #register': 'onClickRegister'
		},
		onClickPage: function(args) {
			var username = this.$el.find('input[type="text"]').val();
			var password = this.$el.find('input[type="password"]').val();

			var self = this;
			$.ajax({
				url: '/Login',
				headers: {
					Authorization: username + ':' + password
				}
			}).success(function(data, textStatus, jqXHR) {
				var navbar = app.navbarRegion.currentView;
				navbar.model.set('username', username);
				window.location.hash = '#';
			}).fail(function(jqXHR, textStatus, errorThrown) {
				self.$el.find('input[type="text"]').parent().addClass('has-error');
				self.$el.find('input[type="password"]').parent().addClass('has-error');
				self.$el.find('input[type="text"]').next().html('Username or Password is not correct!');
			});
		},
		onClickInput: function(args) {
			this.$el.find('input[type="text"]').parent().removeClass('has-error');
			this.$el.find('input[type="password"]').parent().removeClass('has-error');
			this.$el.find('input[type="text"]').next().html('');
		},
		onClickButton: function(args) {
			window.location.hash = '#';
		},
		onClickRegister: function(args) {
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
				var navbar = app.navbarRegion.currentView;
				navbar.model.set('username', username);
				window.location.hash = '#';
			}).fail(function(jqXHR, textStatus, errorThrown) {
				self.$el.find('input[type="text"]').parent().addClass('has-error');
				self.$el.find('input[type="password"]').parent().addClass('has-error');
				self.$el.find('input[type="text"]').next().html(jqXHR.responseJSON.message);
			});
		}
	});
	return SignIn;
});