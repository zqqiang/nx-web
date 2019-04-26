var React = require('react');

var UserBlock = React.createClass({
    render: function() {
        return (
            <div className="user-block">
                <img className="img-circle" src="http://placehold.it/100x100/39CCCC/ffffff" alt="User Image" />
                <span className="username">
                    <a href="#">{this.props.comment}</a>
                </span>
                <span className="description">Shared publicly - 7:30 PM Today</span>
            </div>
        );
    }
});

var BoxTools = React.createClass({
    render: function() {
        return (
            <div className="box-tools">
                <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">
                    <i className="fa fa-circle-o"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                    <i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove">
                    <i className="fa fa-times"></i>
                </button>
            </div>
        );
    }
});

const BoxHeader = React.createClass({
    render: function() {
        return (
            <div className="box-header with-border">
                <UserBlock comment={this.props.comment} />
                <BoxTools />
            </div>
        )
    }
})

export default BoxHeader
