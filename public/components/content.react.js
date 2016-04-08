var $ = require('jquery');
var React = require('react');
import { Router, Route, hashHistory } from 'react-router'

var Alumni = require('./alumni.react');
var News = require('./news.react');
var Salon = require('./salon.react');
var Gallery = require('./gallery.react');

var Content = React.createClass({
    render: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        return (
            <div className="content-wrapper">
	            <Router history={hashHistory}>
                    <Route path="/" component={Alumni}/>
                    <Route path="/Alumni" component={Alumni}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Salon" component={Salon}/>
                    <Route path="/Gallery" component={Gallery}/>
				</Router>
        	</div>
        );
    }
});

module.exports = Content;
