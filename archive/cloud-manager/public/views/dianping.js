define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var DianpingItem = Marionette.ItemView.extend({
		template: JST.DianpingTemplate,
		className: 'col-sm-6 col-md-3',
		onRender: function() {
			this.$el.find('.thumbnail').height(450);
		}
	});

	var Dianping = Marionette.CollectionView.extend({
		childView: DianpingItem,
		initialize: function(options) {
			var Model = Backbone.Model.extend({});
			var Collection = Backbone.Collection.extend({
				model: Model,
				url: '/Android/Business?start=' + options.start + '&size=' + options.size
			});
			this.collection = new Collection();
			this.collection.fetch();
		}
	});

	var Paginator = Marionette.ItemView.extend({
		template: JST.PageTemplate,
		tagName: 'nav',
		className: 'text-center',
		initialize: function(options) {
			var Pages = Backbone.Model.extend({});
			this.model = new Pages({
				pages: _.range(1, options.totalPages > 5 ? 5 : options.totalPages)
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
		initialize: function() {
			this.size = 8;
		},
		onRender: function() {
			this.body.show(new Dianping({
				start: 1,
				size: this.size
			}));

			var self = this
			$.ajax({
				url: '/Dashboard',
			}).success(function(data, textStatus, jqXHR) {
				var totalPages = Math.floor(data.all_count / self.size);
				self.footer.show(new Paginator({
					currentPage: 1,
					totalPages: totalPages,
				}));
			});
		},
		onClickPage: function(args) {
			this.body.show(new Dianping({
				start: args.target.id,
				size: this.size
			}));
		}
	});

	return Business;
});