import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// import Drawer from "@material-ui/core/Drawer";
// import Typography from "@material-ui/core/Typography";

// import MainHeader from "components/Header/MainHeader";
import ManagementSidebar from 'components/Sidebar/ManagementSidebar';

import managementRoutes from 'routes/management';

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

const switchRoutes = (
  <Switch>
    {managementRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class Cloud extends React.Component {
  render() {
    const { classes } = this.props;
    const mainPanel = classes.mainPanel;
    return (
      <div className={classes.wrapper}>
        <ManagementSidebar routes={managementRoutes} />
        <div className={mainPanel} ref="mainPanel">
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        </div>
      </div>
    );
  }
}

Cloud.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cloud);
