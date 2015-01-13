define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var DianpingItem = Marionette.ItemView.extend({
		template: JST.DianpingTemplate,
		className: 'col-sm-6 col-md-3',
		onRender: function() {
			this.$el.find('.thumbnail').height(550);
		}
	});

	var Dianping = Marionette.CollectionView.extend({
		childView: DianpingItem,
		initialize: function(options) {
			var Model = Backbone.Model.extend({});
			var Collection = Backbone.Collection.extend({
				model: Model,
				url: '/Android/Business?start=' + options.start + '&size=40'
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
		},
		onRender: function() {
			this.$el.find('#before').prop('disabled', true);
			this.$el.find('#next').prop('disabled', true);
		}
	});

	var Business = Marionette.LayoutView.extend({
		template: JST.BusinessTemplate,
		regions: {
			body: '#content',
			footer: '#footer',
		},
		events: {
			'click li>a': 'onClickPage'
		},
		onShow: function() {
			this.body.show(new Dianping({
				start: 1
			}));

			var self = this
			$.ajax({
				url: '/Dashboard',
			}).success(function(data, textStatus, jqXHR) {
				self.footer.show(new Page(data));
			});
		},
		onClickPage: function(args) {
			this.body.show(new Dianping({
				start: args.target.id
			}));
		}
	});

	return Business;
});