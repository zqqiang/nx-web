var React = require('react');

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

module.exports = Header;