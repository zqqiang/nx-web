var React = require('react');
import { NavDropdown, MenuItem } from 'react-bootstrap';

var Logo = React.createClass({
    render: function() {
        return (
            <a href="javascript:void(0);" className="logo">
                {/* mini logo for sidebar mini 50x50 pixels */}
                <span className="logo-mini"><b>NX</b>M</span>
                {/* logo for regular state and mobile devices */}
                <span className="logo-lg"><b>Nx</b>Manager</span>
            </a>
        );
    }
});

var Sidebar = React.createClass({
    render: function() {
        return (
            <a href="javascript:void(0);" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
        );
    }
});

var LanguageMenu = React.createClass({
    render: function() {
        return (
            <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-language"></i>
                </a>
            </li>
        );
    }
});

var MessageMenu = React.createClass({
    render: function() {
        return (
            <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-envelope-o"></i>
                    <span className="label label-success">1</span>
                </a>
            </li>
        );
    }
});

var UserHeader = React.createClass({
    render: function() {
        return (
            <div className="user-header">
                <img src="theme/project/img/member/user2-128x128.jpg" className="img-circle" alt="User Image" />
                <p>
                    Guest User - Nankai Alumni
                    <small>Member since Mar. 2016</small>
                </p>
            </div>
        );
    }
});

var UserMenu = React.createClass({
    render: function() {
        return (
            <ul className="dropdown-menu">
                {/* Menu Body */}
                <li className="user-body">
                    <div className="row">
                        <div className="col-xs-4 text-center">
                            <a href="#">Followers</a>
                        </div>
                        <div className="col-xs-4 text-center">
                            <a href="#">Sales</a>
                        </div>
                        <div className="col-xs-4 text-center">
                            <a href="#">Friends</a>
                        </div>
                    </div>
                </li>
                {/* Menu Footer*/}
                <li className="user-footer">
                    <div className="pull-left">
                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                        <a href="#Login" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                </li>
            </ul>
        );
    }
});

var DropdownTitle = React.createClass({
    render: function() {
        return (
            <div >
                <img src="theme/project/img/member/user2-128x128.jpg" className="user-image" alt="User Image" />
                <span className="hidden-xs">Login In</span>
            </div>
        );
    }
});

var NavbarMenu = React.createClass({
    render: function() {
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <LanguageMenu />
                    <MessageMenu />
                    <NavDropdown className="user user-menu" eventKey={4} title={<DropdownTitle />} noCaret={true} id="nav-dropdown">
                        <MenuItem eventKey="4.1">
                            {<UserHeader />}
                        </MenuItem>
                    </NavDropdown>
                </ul>
            </div>
        );
    }
});

var Navbar = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-static-top" role="navigation">
                <Sidebar />
                <NavbarMenu />
            </nav>
        );
    }
});

var MainHeader = React.createClass({
    render: function() {
        return (
            <div className="main-header">
                <Logo />
                <Navbar />
            </div>
        );
    }
});

module.exports = MainHeader;
