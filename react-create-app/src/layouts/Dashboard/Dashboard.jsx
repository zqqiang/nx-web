import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import dashboardRoutes from 'routes/dashboard.jsx';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    backgroundColor: '#2196F3',
    zIndex: theme.zIndex.drawer + 1
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
  toolbar: theme.mixins.toolbar,
  tabRoot: {
    textTransform: 'initial'
  },
  tabLabel: {
    fontSize: '1.3125rem',
    fontWeight: 500,
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    lineHeight: '1.16667em'
  }
});

const drawerWidth = 240;

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  state = {
    value: 'fos'
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              FortiCloud
            </Typography>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab
                label="FortiGate Network"
                value="fos"
                classes={{ root: classes.tabRoot, label: classes.tabLabel }}
              />
              <Tab
                label="FortiAP Network"
                value="ap"
                classes={{ root: classes.tabRoot, label: classes.tabLabel }}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
          <div className={classes.toolbar} />
          <List />
        </Drawer>
        {value === 'fos' && (
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography noWrap>{'FortiGate Network'}</Typography>
          </main>
        )}
        {value === 'ap' && (
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography noWrap>{'FortiAP Network'}</Typography>
          </main>
        )}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
