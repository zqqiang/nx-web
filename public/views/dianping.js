define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Dianping = Marionette.ItemView.extend({
		template: JST.DianpingTemplate,
		initialize: function(options) {
			var Item = Backbone.Model.extend({});

			this.model = new Item({
				image_url: '/assets/css/images/logo.png',
				title: '北京首科商务酒店'
			});
		}
	});

	return Dianping;
});