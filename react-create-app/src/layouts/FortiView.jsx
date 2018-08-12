import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({});

class FortiView extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.content}>FortiView</div>;
  }
}

FortiView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FortiView);
