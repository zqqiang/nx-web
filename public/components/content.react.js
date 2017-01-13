var $ = require('jquery');
var React = require('react');
import { Router, Route, browserHistory } from 'react-router'

var Alumni = require('./alumni.react');
var News = require('./news.react');
var Salon = require('./salon.react');
var Gallery = require('./gallery.react');
var Friends = require('./friends.react');
var QRCode = require('./qrcode.react');

import Login from '../containers/login'
import Home from '../containers/home'
import NoMatch from './nomatch.react'
import BillQiang from './profile/billqiang.react'
import EllaFan from './profile/ellafan.react'

// content-wrapper

var Content = React.createClass({
    render: function() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Login}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Alumni" component={Alumni}/>
                <Route path="/News" component={News}/>
                <Route path="/Salon" component={Salon}/>
                <Route path="/Gallery" component={Gallery}/>
                <Route path="/Friends" component={Friends}/>
                <Route path="/QRCode" component={QRCode}/>
                <Route path="Profile" >
                    <Route path="BillQiang" component={BillQiang} />
                    <Route path="EllaFan" component={EllaFan} />
                </Route>
                <Route path="*" component={NoMatch}/>
            </Router>
        );
    }
});

module.exports = Content;
