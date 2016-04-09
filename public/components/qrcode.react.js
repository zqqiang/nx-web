var $ = require('jquery');
var React = require('react');
var Header = require('./header.react');

var WidgetUserHeader = React.createClass({
    render: function() {
        return (
            <div className="widget-user-header bg-aqua-active">
              <h3 className="widget-user-username">{this.props.header.name}</h3>
              <h5 className="widget-user-desc">{this.props.header.desc}</h5>
            </div>
        );
    }
});

var WidgetUserImage = React.createClass({
    render: function() {
        return (
            <div className="widget-user-image">
              <img className="img-circle" src={this.props.image.src} alt={this.props.image.alt} />
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
                    <DescriptionBlock nums={this.props.footer.members} text='Members' />
                    <DescriptionBlock nums={this.props.footer.activities} text='Activities' />
                    <DescriptionBlock nums={this.props.footer.followers} text='Followers' />
                 </div>
            </div>
        );
    }
});

var SocialWidgets = React.createClass({
    render: function() {
        return (
            <div className="col-md-4">
                <div className="box box-widget widget-user">
                    <WidgetUserHeader header={this.props.widget.header} />
                    <WidgetUserImage image={this.props.widget.image} />
                    <BoxFooter footer={this.props.widget.footer} />
                </div>
            </div>
        );
    }
});

var widgets = [{
    header: { name: 'Alexander Pierce', desc: 'Founder & CEO' },
    footer: { members: 1000, activities: 2000, followers: 3000 },
    image: { src: 'http://placehold.it/100x100/39CCCC/ffffff', alt: 'One' }
}, {
    header: { name: 'Alexander Pierce', desc: 'Founder & CEO' },
    footer: { members: 1000, activities: 2000, followers: 3000 },
    image: { src: 'http://placehold.it/100x100/39CCCC/ffffff', alt: 'One' }
}, {
    header: { name: 'Alexander Pierce', desc: 'Founder & CEO' },
    footer: { members: 1000, activities: 2000, followers: 3000 },
    image: { src: 'http://placehold.it/100x100/39CCCC/ffffff', alt: 'One' }
}];

var Content = React.createClass({
    render: function() {
        var items = [];
        widgets.forEach(function(widget, index) {
            items.push(<SocialWidgets widget={widget} key={index} />);
        });
        return (
            <section className="content">
                <div className="row">
                    {items}
                </div>
            </section>
        );
    }
});

var QRCode = React.createClass({
    render: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        return (
            <div>
                <Header title='Footer' smalltitle='QRCode' icon='newspaper-o' menu='Footer' submenu='QRCode' />
                <Content />
            </div>
        );
    }
});

module.exports = QRCode;
