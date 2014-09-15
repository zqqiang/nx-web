define(
	['marionette', 'backbone', 'text!templates/row.html', 'text!templates/table.html'],
	function(Marionette, Backbone, RowTpl, TableTpl) {

		// A Grid Row
		var GridRow = Marionette.ItemView.extend({
			template: RowTpl,
			tagName: "tr"
		});

		// The grid view
		var Table = Marionette.CompositeView.extend({
			tagName: "table",
			className: 'table table-bordered',
			template: TableTpl,
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

		return Table;
	}
);