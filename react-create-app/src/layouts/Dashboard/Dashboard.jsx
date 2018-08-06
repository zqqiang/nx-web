import React from 'react';
import PropTypes from 'prop-types';
// import { Switch, Route, Redirect } from "react-router-dom";

import withStyles from '@material-ui/core/styles/withStyles';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ChevronRight from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Folder from '@material-ui/icons/Folder';

import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';

import MainHeader from 'components/Header/MainHeader';
import Header from 'components/Header/Header';

// import dashboardRoutes from "routes/dashboard";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightBlue
  }
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    top: '0',
    height: '100vh'
  },
  // blue: {
  //   backgroundColor: '#2196F3'
  // },
  drawerPaper: {
    position: 'relative',
    width: 240
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
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

// const switchRoutes = (
//   <Switch>
//     {dashboardRoutes.map((prop, key) => {
//       if (prop.redirect)
//         return <Redirect from={prop.path} to={prop.to} key={key} />;
//       return <Route path={prop.path} component={prop.component} key={key} />;
//     })}
//   </Switch>
// );

class App extends React.Component {
  state = {
    value: 'fos',
    open: true,
    total: 3
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const mainTabs = (
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
    );

    const list = (
      <List component="nav">
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            {this.state.open ? <ExpandMore /> : <ChevronRight />}
          </ListItemIcon>
          <ListItemText inset primary={'All (' + this.state.total + ')'} />
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText
                inset
                primary={'<Default> (' + this.state.total + ')'}
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <MainHeader tabs={mainTabs} />
          <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
            <div className={classes.toolbar} />
            {list}
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Header />
            {/* <Table /> */}
            {/* <Footer /> */}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
