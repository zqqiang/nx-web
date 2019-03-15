var $ = require('jquery');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactDom = require('react-dom');

var Paragraph = require('../components/quickstart.react');

var QuickStart = Marionette.ItemView.extend({
    template: false,
    id: 'quick-start',
    className: 'content-header',
    onShow: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        var Articles = [{
            title: 'nxManager',
            content: 'This repository is a next generation central manager framework.'
        }];

        ReactDom.render(
            <Paragraph articles={Articles}/>,
            document.getElementById('quick-start')
        );
    }
});

module.exports = QuickStart;