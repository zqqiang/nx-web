import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({});

class Pages extends React.Component {
  render() {
    return <div>Login Page</div>;
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pages);
