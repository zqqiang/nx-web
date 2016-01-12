var Marionette = require('backbone.marionette');
var HomepageHbs = require('../templates/homepage.html');

var Homepage = Marionette.ItemView.extend({
	template: HomepageHbs,
	className: 'container',
});

module.exports = Homepage;