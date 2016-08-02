var $ = require('jquery');
var React = require('react');
var Header = require('./header.react');
import BoxHeader from '../containers/salon/boxHeader'
import BoxPostFooter from '../containers/salon/boxPostFooter'

var BoxBody = React.createClass({
    render: function() {
        return (
            <div className="box-body">
                <img className="img-responsive pad" src="http://placehold.it/2000x600/DD4B39/ffffff" alt="Photo" />
                <p>I took this photo this morning. What do you guys think?</p>
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>&nbsp;
                <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                <span className="pull-right text-muted">127 likes - 3 comments</span>
            </div>
        );
    }
});

var BoxComment = React.createClass({
    render: function() {
        return (
            <div className="box-comment">
                <img className="img-circle img-sm" src="http://placehold.it/50x50/DD4B39/ffffff" alt="User Image" />
                <div className="comment-text">
                    <span className="username">
                        Maria Gonzales
                        <span className="text-muted pull-right">8:03 PM Today</span>
                    </span>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                </div>
            </div>
        );
    }
});

var BoxFooter = React.createClass({
    render: function() {
        return (
            <div className="box-footer box-comments">
                <BoxComment />
            </div>
        );
    }
});

let BoxWidget = () => {
    return (
        <div className="box box-widget">
            <BoxHeader />
            <BoxBody />
            <BoxFooter />
            <BoxPostFooter />
        </div>
    );
}

var Content = React.createClass({
    render: function() {
        return (
            <section className="content">
                <div className="row">
                    <BoxWidget />
                </div>
            </section>
        );
    }
});

var Salon = React.createClass({
    render: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        return (
            <div>
                <Header title='Services' smalltitle='Salon' icon='briefcase' menu='Services' submenu='Salon' />
                <Content />
            </div>
        );
    }
});

module.exports = Salon;
