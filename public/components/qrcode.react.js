var React = require('react');
var Header = require('./header.react');

var WidgetUserHeader = React.createClass({
    render: function() {
        return (
            <div className="widget-user-header bg-aqua-active">
              <h3 className="widget-user-username">Alexander Pierce</h3>
              <h5 className="widget-user-desc">Founder &amp; CEO</h5>
            </div>
        );
    }
});

var WidgetUserImage = React.createClass({
    render: function() {
        return (
            <div className="widget-user-image">
              <img className="img-circle" src="http://placehold.it/100x100/39CCCC/ffffff" alt="User Avatar" />
            </div>
        );
    }
});

var DescriptionBlock = React.createClass({
    render: function() {
        return (
            <div className="col-sm-4 border-right">
				<div className="description-block">
					<h5 className="description-header">{this.props.nums}</h5>
					<span className="description-text">{this.props.text}</span>
				</div>
			</div>
        );
    }
});

var BoxFooter = React.createClass({
    render: function() {
        return (
            <div className="box-footer">
        		 <div className="row">
        		 	<DescriptionBlock nums='1000' text='Members' />
        		 	<DescriptionBlock nums='2000' text='Sales' />
        		 	<DescriptionBlock nums='3000' text='Followers' />
        		 </div>
        	</div>
        );
    }
});

var SocialWidgets = React.createClass({
    render: function() {
        return (
            <div className="box box-widget widget-user">
				<WidgetUserHeader />
				<WidgetUserImage />
				<BoxFooter />
			</div>
        );
    }
});

var Content = React.createClass({
    render: function() {
        return (
            <section className="content">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                    	<SocialWidgets />
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </section>
        );
    }
});

var QRCode = React.createClass({
    render: function() {
        return (
            <div>
                <Header title='Footer' smalltitle='QRCode' icon='newspaper-o' menu='Footer' submenu='QRCode' />
                <Content />
        	</div>
        );
    }
});

module.exports = QRCode;
