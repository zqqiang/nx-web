var $ = require('jquery');
var Marionette = require('backbone.marionette');
var SidebarView = require('../components/sidebar.react');
var React = require('react');
var ReactDom = require('react-dom');
require('slimscroll');

var Sidebar = Marionette.ItemView.extend({
    template: false,
    id: 'sidebar',
    tagName: 'section',
    className: 'sidebar',
    onShow: function() {
        $(".sidebar").slimScroll({
            destroy: true
        }).height("auto");

        ReactDom.render(
            <SidebarView />,
            document.getElementById('sidebar')
        );
    }
});

module.exports = Sidebar;
