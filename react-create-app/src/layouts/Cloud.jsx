import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import MainHeader from 'components/Header/MainHeader';

// import appStyle from 'assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

class Cloud extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MainHeader />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>List Top</List>
          <Divider />
          <List>List Bottom</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>{'Content Panel'}</Typography>
        </main>
      </div>
    );
  }
}

Cloud.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cloud);
