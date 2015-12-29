define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	const customerData = [{
		ssn: "444-44-4444",
		name: "Bill",
		age: 35,
		email: "bill@company.com"
	}, {
		ssn: "555-55-5555",
		name: "Donna",
		age: 32,
		email: "donna@home.org"
	}];

	const DB_NAME = 'flareDb';
	const DB_VERSION = 1;
	var db;

	var Indexed = Marionette.ItemView.extend({
		template: JST.IndexedTemplate,
		className: 'indexed',
		ui: {
			'message': '.message'
		},
		events: {
			'click @ui.message': 'clickMessage'
		},
		initialize: function() {
			this.openDB();
		},
		appendMessage: function(message) {
			this.$el.find('div.message').append('<pre>' + message + '</pre>');
		},
		openDB: function() {
			var req = indexedDB.open(DB_NAME, DB_VERSION);
			var self = this;
			req.onerror = function(event) {
				self.appendMessage('Database error: ' + event.target.errorCode);
			};

			req.onsuccess = function(event) {
				// Better use "this" than "req" to get the result to avoid problems with garbage collection.
				db = this.result;
				self.appendMessage('db.onsuccess');
			};

			req.onupgradeneeded = function(event) {
				self.appendMessage('db.onupgradeneeded');

				var result = event.target.result;

				var objectStore = result.createObjectStore("customers", {
					keyPath: "ssn"
				});

				objectStore.createIndex("name", "name", {
					unique: false
				});

				objectStore.createIndex("email", "email", {
					unique: true
				});

				objectStore.transaction.oncomplete = function(event) {
					var customerObjectStore = result.transaction("customers", "readwrite").objectStore("customers");
					for (var i in customerData) {
						customerObjectStore.add(customerData[i]);
					}
				};
			};
		},
		queryDB: function() {
			var store = db.transaction("customers").objectStore("customers");
			var self = this;
			store.get("444-44-4444").onsuccess = function(event) {
				self.appendMessage("Name for SSN 444-44-4444 is " + event.target.result.name);
			};
		},
		clickMessage: function() {
			this.queryDB();
		}
	});
	return Indexed;
});