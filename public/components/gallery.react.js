var React = require('react');

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
    render: function(){
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
    render: function(){
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
    render: function(){
        return (
            <i className={'fa fa-' + this.props.isgood === 'true' ? 'star' : 'star-o'}></i>
        );
    }
});

var Star = React.createClass({
    render: function(){
        var items = [];
        for (var i = 0; i < this.props.stars; ++i) {
            items.push(<StarItem isgood='true' key={i} />);
        }
        for (var i = 0; i < 5 - this.props.stars; ++i) {
            items.push(<StarItem isgood='false' key={5-i} />);
        }
        return (
            <p>
                {items}
            </p>
        );
    }
});

var ThumbnailItem = React.createClass({
    render: function(){
        return (
            <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                    <img src="http://placehold.it/320x150/39CCCC/ffffff" alt="" />
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
        this.props.items.forEach(function(item) {
            items.push(<ThumbnailItem item={item} key={item.name} />);
        });

        return (
            <div className="row">
                {items}
            </div>
        );
    }
});

var GalleryItems = [
    {price:'$24.99', name:'First Product', description:'xxxxxxxxxxxxxxx', reviews:'15', stars:'4'}
];

var GalleryView = React.createClass({
    render: function(){
        return (
            <div className='container ecommerce'>
                <div className="row">
                    <div className="col-md-12">
                        <Carousel />
                        <Thumbnail items={GalleryItems} />
                    </div>
                </div>
            </div>
        );
    }
});

var Gallery = React.createClass({
    render: function() {
        return (
            <div >
                <Pswp />
                <GalleryView />
            </div>
        );
    }
});

module.exports = Gallery;