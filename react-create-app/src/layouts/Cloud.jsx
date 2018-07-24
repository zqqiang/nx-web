import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import MainHeader from 'components/Header/MainHeader';

import appStyle from 'assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx';

class Cloud extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainHeader />
        <div className={classes.wrapper}>
          <div className={classes.drawerPaper}>Side bar menu</div>
          <div className={classes.mainPanel}>Main Panel</div>
        </div>
      </div>
    );
  }
}

Cloud.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(Cloud);
