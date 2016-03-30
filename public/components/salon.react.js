var React = require('react');
var Header = require('./header.react');

var BoxWidget = React.createClass({
    render: function() {
        return (
            <div className="box box-widget">
        	</div>
        );
    }
});

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
        return (
            <div>
	            <Header title='Services' smalltitle='Salon' icon='briefcase' menu='Services' submenu='Salon' />
	            <Content />
            </div>
        );
    }
});

module.exports = Salon;
