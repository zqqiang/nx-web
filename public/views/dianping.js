define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var DianpingItem = Marionette.ItemView.extend({
		template: JST.DianpingTemplate,
		className: 'col-sm-6 col-md-3',
		onRender: function() {
			this.$el.find('.thumbnail').height(500);
		}
	});

	var Dianping = Marionette.CollectionView.extend({
		childView: DianpingItem,
		initialize: function(options) {
			var Model = Backbone.Model.extend({});
			var Collection = Backbone.Collection.extend({
				model: Model,
				url: '/Android/Business'
			});
			this.collection = new Collection();
			this.collection.fetch();
		}
	});

	var Page = Marionette.ItemView.extend({
		template: JST.PageTemplate,
		initialize: function(options) {
			var Pages = Backbone.Model.extend({});
			var size = Math.floor(options.all_count / 40);
			this.model = new Pages({
				pages: _.range(1, size)
			});
		}
	});

	var Business = Marionette.LayoutView.extend({
		template: JST.BusinessTemplate,
		regions: {
			body: '#content',
			footer: '#footer',
		},
		onShow: function() {
			this.body.show(new Dianping());

			var self = this
			$.ajax({
				url: '/Dashboard',
			}).success(function(data, textStatus, jqXHR) {
				self.footer.show(new Page(data));
			});
		}
	});

	return Business;
});