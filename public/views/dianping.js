define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var DianpingItem = Marionette.ItemView.extend({
		template: JST.DianpingTemplate,
		className: 'col-sm-6 col-md-4',
	});

	var Dianping = Marionette.CollectionView.extend({
		itemView: DianpingItem,
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

	// var Business = Marionette.Layout.extend({

	// });

	return Dianping;
});