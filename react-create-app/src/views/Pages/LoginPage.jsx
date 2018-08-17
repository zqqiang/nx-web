import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import loginPageStyle from 'assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx';

class LoginPage extends React.Component {
  render() {
    return <div>Login Page</div>;
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginPageStyle)(LoginPage);
