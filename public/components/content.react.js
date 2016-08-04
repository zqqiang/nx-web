var $ = require('jquery');
var React = require('react');
import { Router, Route, hashHistory } from 'react-router'

var Alumni = require('./alumni.react');
var News = require('./news.react');
var Salon = require('./salon.react');
var Gallery = require('./gallery.react');
var QRCode = require('./qrcode.react');

import Home from './home.react'
import NoMatch from './nomatch.react'

// content-wrapper

var Content = React.createClass({
    render: function() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}/>
                <Route path="/Alumni" component={Alumni}/>
                <Route path="/News" component={News}/>
                <Route path="/Salon" component={Salon}/>
                <Route path="/Gallery" component={Gallery}/>
                <Route path="/QRCode" component={QRCode}/>
                <Route path="*" component={NoMatch}/>
			</Router>
        );
    }
});

module.exports = Content;
