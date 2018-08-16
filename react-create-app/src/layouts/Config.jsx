import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import ManagementSidebar from 'components/Sidebar/ManagementSidebar';

import routes from 'routes/config';

import {
  drawerWidth,
  transition,
  containerFluid
} from 'assets/jss/material-dashboard-pro-react.jsx';

const styles = theme => ({
  wrapper: {
    position: 'relative',
    top: '0',
    // height: "100vh",
    height: 'calc(100vh - 112px)',
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
    padding: '30px 15px',
    minHeight: 'calc(100vh - 112px)'
  },
  container: { ...containerFluid },
  mainPanelWithPerfectScrollbar: {
    overflow: 'hidden !important'
  }
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

var ps;

class Config extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'white',
      color: 'cloud'
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = 'hidden';
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
    }
  }
  render() {
    const { classes, ...rest } = this.props;
    const mainPanel =
      classes.mainPanel +
      ' ' +
      cx({
        // [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf('Win') > -1
      });
    return (
      <div className={classes.wrapper}>
        <ManagementSidebar
          routes={routes}
          color={this.state.color}
          bgColor={this.state.bgColor}
          {...rest}
        />
        <div className={mainPanel} ref="mainPanel">
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        </div>
      </div>
    );
  }
}

Config.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Config);
