var $ = require('jquery');
var React = require('react');

var MenuNode = React.createClass({
    getInitialState: function() {
        return { active: false }
    },
    handleClick: function() {
        this.setState({ active: true });
    },
    render: function() {
        return (
            <li /*className={this.state.active ? 'active' : ''}*/ onClick={this.handleClick}>
                <a href={'#' + this.props.node.href}>
                    <i className={'fa fa-' + this.props.node.icon}></i> {this.props.node.name}
                </a>
            </li>
        );
    }
});

var MenuTreeUl = React.createClass({
    render: function() {
        var nodes = [];
        this.props.nodes.forEach(function(node) {
            nodes.push(<MenuNode node={node} key={node.name} />);
        }.bind(this));

        return (
            <ul className='treeview-menu'>
                {nodes}
            </ul>
        );
    }
});

var MenuTree = React.createClass({
    getInitialState: function() {
        return { menuopen: false };
    },
    handleClick: function() {
        this.setState({ menuopen: !this.state.menuopen });
    },
    render: function() {
        return (
            <li className="active treeview">
                <a href="javascript:void(0);" onClick={this.handleClick}>
                    <i className={'fa fa-'+this.props.icon}></i> <span>{this.props.folder}</span> <i className="fa fa-angle-left pull-right"></i>
                </a>
                {this.state.menuopen ? <MenuTreeUl nodes={this.props.nodes} /> : null}
            </li>
        );
    }
});

var HomeNodes = [
    { href: 'Creative', icon: 'circle-o', name: 'Creative' },
    { href: 'Ecommerce', icon: 'circle-o', name: 'Ecommerce' },
    { href: 'ControlPanel', icon: 'circle-o', name: 'ControlPanel' }
];

var DocsNodes = [
    { href: 'QuickStart', icon: 'circle-o', name: 'Quick Start' },
    { href: 'Alumni', icon: 'circle-o', name: 'Alumni' }
];

var Sidebar = React.createClass({
    render: function() {
        return (
            <ul className="sidebar-menu">
                <li className="header">MAIN NAVIGATION</li>
                <MenuTree icon='dashboard' folder='Home' nodes={HomeNodes} />
                <MenuTree icon='book' folder='Docs' nodes={DocsNodes} />
            </ul>
        );
    }
});

module.exports = Sidebar;
