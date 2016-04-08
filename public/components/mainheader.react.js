var React = require('react');

var MainHeader = React.createClass({
    render: function() {
        return (
            <div className="main-header">
				<a href="javascript:void(0);" className="logo">
				    {/* mini logo for sidebar mini 50x50 pixels */}
				    <span className="logo-mini"><b>NX</b>M</span>
				    {/* logo for regular state and mobile devices */}
				    <span className="logo-lg"><b>Nx</b>Manager</span>
				</a>
				<nav className="navbar navbar-static-top" role="navigation">
				    <a href="javascript:void(0);" className="sidebar-toggle" data-toggle="offcanvas" role="button">
				        <span className="sr-only">Toggle navigation</span>
				    </a>
				    <div className="navbar-custom-menu">
				        <ul className="nav navbar-nav">
				            {/* Messages: style can be found in dropdown.less*/}
				            <li className="dropdown messages-menu">
				                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
				                    <i className="fa fa-envelope-o"></i>
				                    <span className="label label-success">1</span>
				                </a>
				            </li>
				            <li className="dropdown user user-menu">
				                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
				                    <img src="theme/project/img/member/user2-128x128.jpg" className="user-image" alt="User Image" />
				                    <span className="hidden-xs">Login In</span>
				                </a>
				                <ul className="dropdown-menu">
				                    {/* User image */}
				                    <li className="user-header">
				                        <img src="theme/project/img/member/user2-128x128.jpg" className="img-circle" alt="User Image" />
				                        <p>
				                            Guest User - Nankai Alumni
				                            <small>Member since Mar. 2016</small>
				                        </p>
				                    </li>
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
				            </li>
				        </ul>
				    </div>
				</nav>
			</div>
        );
    }
});

module.exports = MainHeader;
