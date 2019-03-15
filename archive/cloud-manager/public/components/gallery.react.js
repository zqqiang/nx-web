var $ = require('jquery');
var React = require('react');
var Header = require('./header.react');
var PhotoSwipe = require('../../node_modules/photoswipe/dist/photoswipe');
var PhotoSwipeUI_Default = require('../../node_modules/photoswipe/dist/photoswipe-ui-default');

var PswpContainer = React.createClass({
    render: function() {
        return (
            <div className="pswp__container">
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
            </div>
        );
    }
});

var PswpPreloader = React.createClass({
    render: function() {
        return (
            <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
            </div>
        );
    }
});

var PswpTopBar = React.createClass({
    render: function() {
        return (
            <div className="pswp__top-bar">
                <div className="pswp__counter"></div>
                <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <button className="pswp__button pswp__button--share" title="Share"></button>
                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <PswpPreloader />
            </div>
        );
    }
});

var PswpUI = React.createClass({
    render: function() {
        return (
            <div className="pswp__ui pswp__ui--hidden">
                <PswpTopBar />
                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div className="pswp__share-tooltip"></div> 
                </div>
                <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                <div className="pswp__caption">
                    <div className="pswp__caption__center"></div>
                </div>
            </div>
        );
    }
});

var Pswp = React.createClass({
    render: function() {
        return (
            <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="pswp__bg"></div>
                <div className="pswp__scroll-wrap">
                    <PswpContainer />
                    <PswpUI />
                </div>
            </div>
        );
    }
});

var Carousel = React.createClass({
    render: function() {
        return (
            <div className="row carousel-holder">
                <div className="col-md-12">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img className="slide-image" src="http://placehold.it/800x300/39CCCC/ffffff" alt="" />
                            </div>
                            <div className="item">
                                <img className="slide-image" src="http://placehold.it/800x300/39CCCC/ffffff" alt="" />
                            </div>
                            <div className="item">
                                <img className="slide-image" src="http://placehold.it/800x300/39CCCC/ffffff" alt="" />
                            </div>
                        </div>
                        <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <i className="fa fa-chevron-left"></i>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <i className="fa fa-chevron-right"></i>
                        </a>
                    </div>                    
                </div>
            </div>
        );
    }
});

var StarItem = React.createClass({
    render: function() {
        var icon = this.props.isgood === 'true' ? 'star' : 'star-o';
        return (
            <i className={'fa fa-' + icon}></i>
        );
    }
});

var Star = React.createClass({
    render: function() {
        var items = [];
        for (var i = 0; i < this.props.stars; ++i) {
            items.push(<StarItem isgood='true' key={i} />);
        }
        for (var i = 0; i < 5 - this.props.stars; ++i) {
            items.push(<StarItem isgood='false' key={4-i} />);
        }
        return (
            <p>
                {items}
            </p>
        );
    }
});

var ThumbnailItem = React.createClass({
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
    handleClick: function(event) {
        this.pswpShow(event.target.id);
    },
    render: function() {
        return (
            <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                    <img id={this.props.index} src={this.props.item.thumbnail} onClick={this.handleClick} alt="" />
                    <div className="caption">
                        <h4 className="pull-right">{this.props.item.price}</h4>
                        <h4>
                            <a href="#">{this.props.item.name}</a>
                        </h4>
                        <p>{this.props.item.description}</p>
                    </div>
                    <div className="ratings">
                        <p className="pull-right">{this.props.item.reviews + ' reviews'}</p>
                        <Star stars={this.props.item.stars} />
                    </div>
                </div>                
            </div>
        );
    }
});

var Thumbnail = React.createClass({
    render: function() {
        var items = [];
        this.props.items.forEach(function(item, index) {
            items.push(<ThumbnailItem item={item} index={index} key={item.name} />);
        });

        return (
            <div className="row">
                {items}
            </div>
        );
    }
});

var GalleryView = React.createClass({
    render: function() {
        return (
            <div className='container ecommerce'>
                <div className="row">
                    <div className="col-md-12">
                        <Carousel />
                        <Thumbnail items={this.props.items} />
                    </div>
                </div>
            </div>
        );
    }
});

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

var Gallery = React.createClass({
    render: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        return (
            <div className="content-wrapper">
                <Pswp />
                <Header title='Alumni' smalltitle='gallery' icon='newspaper-o' menu='Alumni' submenu='Gallery' />
                <GalleryView items={GalleryItems} />
            </div>
        );
    }
});

module.exports = Gallery;
