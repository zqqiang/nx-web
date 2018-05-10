define(['marionette', 'pouchdb', 'templates/compiled'], function(Marionette, PouchDB, JST) {
	var Pouch = Marionette.ItemView.extend({
		template: JST.PouchTemplate,
		className: 'container',
		ui: {
			'add': '#add',
			'show': '#show',
			'clear': '#clear',
			'sync': '#sync'
		},
		events: {
			'click @ui.add': 'addTodo',
			'click @ui.show': 'showTodos',
			'click @ui.clear': 'clearTodos',
			'click @ui.sync': 'syncTodos'
		},
		initialize: function() {
			this.db = new PouchDB('todos');
			this.remoteCouch = 'http://user:pass@nietsnie.iriscouch.com/todos';
			this.db.changes({
				since: 'now',
				live: true
			}).on('change', this.changeTodos);
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
		changeTodos: function() {
			console.log('changeTodos');
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
		},
		syncTodos: function() {
			var opts = {
				live: true
			};
			this.db.replicate.to(this.remoteCouch, opts, this.syncError);
			this.db.replicate.from(this.remoteCouch, opts, this.syncError);
		},
		syncError: function() {
			console.log('syncError');
		}
	});
	return Pouch;
});