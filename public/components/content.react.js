var $ = require('jquery');
var React = require('react');
var Alumni = require('./alumni.react');
import { Router, Route, hashHistory } from 'react-router'

var Content = React.createClass({
    render: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        return (
            <div className="content-wrapper">
	            <Router history={hashHistory}>
					<Route path="/" component={Alumni}/>
				</Router>
        	</div>
        );
    }
});

module.exports = Content;
