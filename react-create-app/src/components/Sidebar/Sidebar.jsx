import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import sidebarStyle from 'assets/jss/material-dashboard-react/components/sidebarStyle.jsx';

const Sidebar = ({ ...props }) => {
  const { classes, logo, image, logoText } = props;

  var brand = (
    <div className={classes.logo}>
      <a href="" className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );

  return (
    <div>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{ paper: classes.drawerPaper }}
        >
          {brand}
          <div className={classes.sidebarWrapper} />
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{ paper: classes.drawerPaper }}
        >
          {brand}
          <div className={classes.sidebarWrapper} />
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
