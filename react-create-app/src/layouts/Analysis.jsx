import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  subHeader: {
    position: 'relative',
    top: '64px'
  }
});

class Analysis extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.subHeader}>Analysis</div>;
  }
}

Analysis.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Analysis);
