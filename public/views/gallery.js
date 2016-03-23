var $ = require('jquery');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactDom = require('react-dom');
var GalleryView = require('../components/gallery.react');

var Gallery = Marionette.ItemView.extend({
    template: false,
    id: 'gallery-main',
    className: '',
    onShow: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        ReactDom.render(
            <GalleryView />,
            document.getElementById('gallery-main')
        );
    }
});

module.exports = Gallery;
