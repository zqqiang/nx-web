define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var SignIn = Marionette.LayoutView.extend({
		template: JST.SignInTemplate,
		className: 'modal-dialog',
		events: {
			'click span.btn': 'onClickPage'
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
				
			}).fail(function(jqXHR, textStatus, errorThrown) {

			});
		}
	});
	return SignIn;
});