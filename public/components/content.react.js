var $ = require('jquery');
var React = require('react');
import { Router, Route, hashHistory } from 'react-router'

var Alumni = require('./alumni.react');
var News = require('./news.react');
var Salon = require('./salon.react');
var Gallery = require('./gallery.react');
var QRCode = require('./qrcode.react');

import AddTodo from '../containers/AddTodo'

var Content = React.createClass({
    render: function() {
        return (
            <div className="content-wrapper">
	            <Router history={hashHistory}>
                    <Route path="/" component={Alumni}/>
                    <Route path="/Alumni" component={Alumni}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Salon" component={Salon}/>
                    <Route path="/Gallery" component={Gallery}/>
                    <Route path="/QRCode" component={QRCode}/>
                    <Route path="/AddTodo" component={AddTodo}/>
				</Router>
        	</div>
        );
    }
});

module.exports = Content;
