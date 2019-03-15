var $ = require('jquery');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactDom = require('react-dom');
var PhotoSwipe = require('../../node_modules/photoswipe/dist/photoswipe');
var PhotoSwipeUI_Default = require('../../node_modules/photoswipe/dist/photoswipe-ui-default');
var GalleryView = require('../components/gallery.react');

var GalleryItems = [{
    price: '$25.99',
    name: 'First Product',
    description: 'xxxxxxxxxxxxxxx',
    reviews: '15',
    stars: '4',
    thumbnail: 'http://placehold.it/350x160/00C0EF/ffffff',
    src: 'http://placehold.it/1200x900/00C0EF/ffffff',
    w: 1200,
    h: 900
}, {
    price: '$25.99',
    name: 'Second Product',
    description: 'xxxxxxxxxxxxxxx',
    reviews: '15',
    stars: '4',
    thumbnail: 'http://placehold.it/350x160/DD4B39/ffffff',
    src: 'http://placehold.it/1200x900/DD4B39/ffffff',
    w: 1200,
    h: 900
}, {
    price: '$25.99',
    name: 'Third Product',
    description: 'xxxxxxxxxxxxxxx',
    reviews: '15',
    stars: '4',
    thumbnail: 'http://placehold.it/350x160/F39C12/ffffff',
    src: 'http://placehold.it/1200x900/F39C12/ffffff',
    w: 1200,
    h: 900
}];

var Gallery = Marionette.ItemView.extend({
    template: false,
    id: 'gallery-main',
    className: '',
    ui: {
        'img': '.thumbnail>img'
    },
    events: {
        'click @ui.img': 'clickThumbImg'
    },
    pswpShow: function(index) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: Number(index) // start at first slide
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, GalleryItems, options);
        gallery.init();

        gallery.listen('close', this.pswpClose);
    },
    pswpClose: function() {

    },
    clickThumbImg: function(e) {
        this.pswpShow(e.target.id);
    },
    onShow: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        ReactDom.render(<GalleryView items={GalleryItems} />,
            document.getElementById('gallery-main')
        );
    }
});

module.exports = Gallery;
