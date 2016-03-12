var $ = require('jquery');
var React = require('react');

var ContentHeader = React.createClass({
    render: function() {
        return (
            <section className="content-header">
		      <h1>
		        Alumni
		        <small>Version 1.0</small>
		      </h1>
		      <ol className="breadcrumb">
		        <li><a href="javascript:void(0);"><i className="fa fa-dashboard"></i> Alumni</a></li>
		        <li className="active">AlumniActivity</li>
		      </ol>
		    </section>
        );
    }
});

var ActivityView = React.createClass({
    render: function() {
        return (
        	<div>
            	<ContentHeader />
        	</div>
        );
    }
});

module.exports = ActivityView;
