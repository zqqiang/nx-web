import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import Sidebar from 'components/Sidebar/Sidebar.jsx';

import dashboardStyle from 'assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx';

import logo from 'assets/img/reactlogo.png';
import image from 'assets/img/sidebar-4.jpg';

class App extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar logoText={'QiQi Tech'} logo={logo} image={image} {...rest} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
