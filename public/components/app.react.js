var React = require('react');
var MainHeader = require('./mainheader.react');
var Sidebar = require('./sidebar.react');
var Content = require('./content.react');

// <!-- <header class="main-header"></header> -->
// <!-- <aside class="main-sidebar"></aside> -->
// <!-- <div class="content-wrapper"></div> -->
// <!-- <footer role="contentinfo"></footer> -->

// <MainHeader />
// <Sidebar />
                
var Wrapper = React.createClass({
    render: function() {
        return (
        	<Content />
        );
    }
});

module.exports = Wrapper;
