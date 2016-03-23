var React = require('react');
// var Header = require('./news.react');

// todo: module Header
var Header = React.createClass({
    render: function() {
        return (
            <section className="content-header">
              <h1>
                {this.props.title}
                <small>{this.props.smalltitle}</small>
              </h1>
              <ol className="breadcrumb">
                <li><a href="javascript:void(0);"><i className={'fa fa-' + this.props.icon}></i>{' ' + this.props.menu}</a></li>
                <li className="active">{this.props.submenu}</li>
              </ol>
            </section>
        );
    }
});

var TimelineLabel = React.createClass({
    render: function() {
        return (
            <li className="time-label">
                  <span className="bg-red">
                    10 Feb. 2014
                  </span>
            </li>
        );
    }
});

var TimelineItem = React.createClass({
    render: function() {
        return (
            <li>
              <i className="fa fa-envelope bg-blue"></i>
              <div className="timeline-item">
                <span className="time"><i className="fa fa-clock-o"></i> 12:05</span>
                <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
                <div className="timeline-body">
                  Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                  weebly ning heekya handango imeem plugg dopplr jibjab, movity
                  jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                  quora plaxo ideeli hulu weebly balihoo...
                </div>
                <div className="timeline-footer">
                  <a href='#' className="btn btn-primary btn-xs">Read more</a>&nbsp;
                  <a href='#' className="btn btn-danger btn-xs">Delete</a>
                </div>
              </div>
            </li>
        );
    }
});

var Content = React.createClass({
    render: function() {
        return (
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="timeline">
                            <TimelineLabel />
                            <TimelineItem />
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
});

var NewsView = React.createClass({
    render: function() {
        return (
            <div>
                <Header title='News' smalltitle='timeline' icon='newspaper-o' menu='Services' submenu='News' />
                <Content />
            </div>
        );
    }
});

module.exports = NewsView;
