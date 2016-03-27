var React = require('react');
var Header = require('./header.react');
var DirectChat = require('./directchat.react');

var Content = React.createClass({
    render: function() {
        return (
            <section className='content'>
                <div className='row'>
                    <div className="col-md-6">
                        <DirectChat />
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </section>
        );
    }
});

var ActivityView = React.createClass({
    render: function() {
        return (
            <div>
                <Header title='Services' smalltitle='Friends' icon='users' menu='Services' submenu='Friends' />
                <Content />
            </div>
        );
    }
});

module.exports = ActivityView;
