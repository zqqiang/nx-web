import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import LogsSidebar from 'components/Sidebar/FortiViewSidebar';

import routes from 'routes/logs';

import {
  drawerWidth,
  transition,
  containerFluid
} from 'assets/jss/material-dashboard-pro-react.jsx';

const styles = theme => ({
  wrapper: {
    position: 'relative',
    top: '0',
    height: '100vh',
    '&:after': {
      display: 'table',
      clear: 'both',
      content: '" "'
    }
  },
  mainPanel: {
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    ...transition,
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch'
  },
  content: {
    marginTop: '70px',
    padding: '30px 15px',
    minHeight: 'calc(100vh - 123px)'
  },
  container: { ...containerFluid }
});

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
      if (prop.collapse)
        return prop.views.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        });
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class Logs extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div className={classes.wrapper}>
        <LogsSidebar routes={routes} {...rest} />
        <div className={classes.mainPanel}>
          <div className={classes.content}>
            <div className={classes.containder}>{switchRoutes}</div>
          </div>
        </div>
      </div>
    );
  }
}

Logs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Logs);
