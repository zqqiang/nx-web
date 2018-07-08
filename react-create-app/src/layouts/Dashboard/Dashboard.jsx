import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

class App extends React.Component {
  render() {
    return <div>Dashboard</div>;
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
