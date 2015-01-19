define(['app', 'marionette', 'templates/compiled', 'views/editor'], function(app, Marionette, JST, Editor) {
	var SignIn = Marionette.CollectionView.extend({
		childView: Editor,
		tagName: 'form',
		className: 'form-horizontal',
		initialize: function() {
			var Model = Backbone.Model.extend({});
			var Col = Backbone.Collection.extend({
				model: Model,
			});
			this.collection = new Col([{
				id: _.uniqueId('editor-'),
				type: 'text',
				name: 'user',
				label: 'Username',
				placeholder: 'Enter username',
				layout: {
					label: 'col-md-3',
					field: 'col-md-9',
				}
			}, {
				id: _.uniqueId('editor-'),
				type: 'password',
				name: 'password',
				label: 'Password',
				placeholder: 'Enter password',
				layout: {
					label: 'col-md-3',
					field: 'col-md-9',
				}
			}]);
		},
	});
	return SignIn;
});