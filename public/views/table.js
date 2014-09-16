define(
	['marionette', 'backbone', 'templates/compiled'],
	function(Marionette, Backbone, JST) {

		// A Grid Row
		var GridRow = Marionette.ItemView.extend({
			template: JST.RowTemplate,
			tagName: "tr"
		});

		// The grid view
		var Table = Marionette.CompositeView.extend({
			tagName: "table",
			className: 'table table-bordered',
			template: JST.TableTemplate,
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