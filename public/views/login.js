define(['marionette', 'backbone', 'templates/compiled'], function(Marionette, Backbone, JST) {
	var Item = Marionette.ItemView.extend({
		template: JST.EditorTemplate,
		className: 'form-group'
	});

	var Login = Marionette.CollectionView.extend({
		tagName: 'form',
		itemView: Item,
		initialize: function() {
			var editors = [{
				type: 'text',
				label: 'Username'
			}, {
				type: 'text',
				label: 'Password'
			}];

			var Editor = Backbone.Model.extend({});

			var EditorCol = Backbone.Collection.extend({
				model: Editor
			});

			this.collection = new EditorCol(editors);
		}
	});

	return Login;
});