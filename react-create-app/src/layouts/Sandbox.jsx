import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  subHeader: {
    position: 'relative',
    top: '64px'
  }
});

class Sandbox extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.subHeader}>Sandbox</div>;
  }
}

Sandbox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sandbox);
