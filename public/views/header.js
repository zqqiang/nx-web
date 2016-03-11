var $ = require('jquery');
var Marionette = require('backbone.marionette');
var HeaderHbs = require('../templates/header.html');

var Header = Marionette.ItemView.extend({
    template: HeaderHbs,
    className: 'main-header',
    events: {
        'click a.sidebar-toggle': 'clickSidebar'
    },
    clickSidebar: function() {
        $('body').toggleClass('sidebar-collapse');
    }
});
module.exports = Header;
