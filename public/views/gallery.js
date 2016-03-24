var $ = require('jquery');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactDom = require('react-dom');
var PhotoSwipe = require('../../node_modules/photoswipe/dist/photoswipe');
var PhotoSwipeUI_Default = require('../../node_modules/photoswipe/dist/photoswipe-ui-default');
var GalleryView = require('../components/gallery.react');

var Gallery = Marionette.ItemView.extend({
    template: false,
    id: 'gallery-main',
    className: '',
    pswpShow: function() {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [{
            src: 'http://placehold.it/600x400/39CCCC/ffffff',
            w: 600,
            h: 400
        }, {
            src: 'http://placehold.it/1200x900/39CCCC/ffffff',
            w: 1200,
            h: 900
        }];

        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: 0 // start at first slide
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();

        gallery.listen('close', this.pswpClose);
    },
    pswpClose: function() {

    },
    onShow: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        ReactDom.render( < GalleryView / > ,
            document.getElementById('gallery-main')
        );
    }
});

module.exports = Gallery;