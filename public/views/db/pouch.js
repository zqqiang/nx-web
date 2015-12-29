define(['marionette', 'pouchdb', 'templates/compiled'], function(Marionette, PouchDB, JST) {
	var Pouch = Marionette.ItemView.extend({
		template: JST.PouchTemplate,
		className: 'pouch',
		ui: {
			'add': '#add',
			'show': '#show',
			'clear': '#clear'
		},
		events: {
			'click @ui.add': 'addTodo',
			'click @ui.show': 'showTodos',
			'click @ui.clear': 'clearTodos'
		},
		initialize: function() {
			this.db = new PouchDB('todos');
		},
		addTodo: function() {
			var text = this.$el.find('input').val();
			var todo = {
				_id: new Date().toISOString(),
				title: text,
				completed: false
			};
			this.db.put(todo, function callback(err, result) {
				if (!err) {
					console.log('Successfully posted a todo [%s]!', text);
				} else {
					console.log('Error: %s', err);
				}
			});
		},
		showTodos: function() {
			var self = this;

			self.$el.find('#help').html('');

			this.db.allDocs({
				include_docs: true,
				descending: true
			}, function(err, doc) {
				_.each(doc.rows, function(elem) {
					self.$el.find('#help').append('<pre>' + elem.id + ' : ' + elem.doc.title + '</pre>');
				})
			});
		},
		clearTodos: function() {
			var self = this;
			this.db.allDocs({
				include_docs: true,
				descending: true
			}, function(err, doc) {
				_.each(doc.rows, function(elem) {
					self.db.remove(elem.doc);
				})
			});
		}
	});
	return Pouch;
});