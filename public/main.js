var $ = global.jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Wrapper = require('./components/wrapper.react');

ReactDOM.render(
    <Wrapper />,
    document.getElementById('wrapper')
);
