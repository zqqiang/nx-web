var React = require('react');

var MenuNode = React.createClass({
    render: function() {
        if (this.props.node.active) {
            return (
                <li className="active"><a href={'#' + this.props.node.href}><i className={'fa fa-' + this.props.node.icon}></i> {this.props.node.name}</a></li>
            );
        } else {
            return (
                <li><a href={'#' + this.props.node.href}><i className={'fa fa-' + this.props.node.icon}></i> {this.props.node.name}</a></li>
            );
        }
    }
});

var MenuTree = React.createClass({
    render: function() {
        var nodes = [];
        this.props.nodes.forEach(function(node) {
            nodes.push(<MenuNode node={node} key={node.name} />);
        }.bind(this));

        return (
            <li className="active treeview">
        		<a href="javascript:void(0);">
        			<i className={'fa fa-'+this.props.icon}></i> <span>{this.props.folder}</span> <i className="fa fa-angle-left pull-right"></i>
        		</a>
        		<ul className="treeview-menu">
        			{nodes}
        		</ul>
        	</li>
        );
    }
});

var HomeNodes = [
    { active: true, href: 'Creative', icon: 'circle-o', name: 'Creative' },
    { active: false, href: 'Ecommerce', icon: 'circle-o', name: 'Ecommerce' },
    { active: false, href: 'ControlPanel', icon: 'circle-o', name: 'ControlPanel' }
];

var DocsNodes = [
    { active: false, href: 'QuickStart', icon: 'circle-o', name: 'Quick Start' },
    { active: false, href: 'Alumni', icon: 'circle-o', name: 'Alumni' }
];

var Sidebar = React.createClass({
    render: function() {
        return (
            <ul className="sidebar-menu">
        		<li className="header">MAIN NAVIGATION</li>
        		<MenuTree icon='dashboard' folder='Home' nodes={HomeNodes}/>
        		<MenuTree icon='book' folder='Docs' nodes={DocsNodes}/>
        	</ul>
        );
    }
});

module.exports = Sidebar;
