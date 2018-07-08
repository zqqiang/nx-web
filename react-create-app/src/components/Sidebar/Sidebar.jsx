import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import sidebarStyle from 'assets/jss/material-dashboard-react/components/sidebarStyle.jsx';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

const Sidebar = ({ ...props }) => {
  const { classes } = props;

  var brand = <div className={classes.logo}>Logo</div>;
  return (
    <div>
      <Hidden mdUp>
        <Drawer>{brand}</Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
