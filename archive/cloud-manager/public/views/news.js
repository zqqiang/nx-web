var $ = require('jquery');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactDom = require('react-dom');
var NewsView = require('../components/news.react');

var News = Marionette.ItemView.extend({
    template: false,
    id: 'news-main',
    className: '',
    onShow: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        ReactDom.render(
            <NewsView />,
            document.getElementById('news-main')
        );
    }
});

module.exports = News;
