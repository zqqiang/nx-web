import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  background: {
    backgroundColor: '#FFFFFF',
    height: '100vh',
    overflowX: 'hidden'
  }
});

class Fos extends React.Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.background}>Fos Page</div>;
  }
}

Fos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Fos);
