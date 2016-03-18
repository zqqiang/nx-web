var $ = require('jquery');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactDom = require('react-dom');
var ActivityView = require('../components/Activity.react');

var Activity = Marionette.ItemView.extend({
    template: false,
    id: 'activity-main',
    className: '',
    onShow: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        ReactDom.render(
            <ActivityView />,
            document.getElementById('activity-main')
        );
    }
});

module.exports = Activity;
