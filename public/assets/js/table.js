(function(app) {
	// A Grid Row
	var GridRow = Backbone.Marionette.ItemView.extend({
		template: "#row-template",
		tagName: "tr"
	});

	// The grid view
	app.GridView = Backbone.Marionette.CompositeView.extend({
		tagName: "table",
		className: 'table table-bordered',
		template: "#grid-template",
		itemView: GridRow,

		appendHtml: function(collectionView, itemView) {
			collectionView.$("tbody").append(itemView.el);
		},

		initialize: function() {
			var userData = [{
				username: "dbailey",
				fullname: "Derick Bailey"
			}, {
				username: "jbob",
				fullname: "Joe Bob"
			}, {
				username: "fbar",
				fullname: "Foo Bar"
			}];

			var User = Backbone.Model.extend({});

			var UserCollection = Backbone.Collection.extend({
				model: User
			});

			var userList = new UserCollection(userData);

			this.collection = userList;
		}
	});

})(Application);