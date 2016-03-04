var $ = require('jquery');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactDom = require('react-dom');
var AlumniView = require('../components/alumni.react');

var Alumni = Marionette.ItemView.extend({
    template: false,
    id: 'alumni-main',
    className: 'alumni',
    onShow: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        ReactDom.render(
            <AlumniView />,
            document.getElementById('alumni-main')
        );
    }
});

module.exports = Alumni;
