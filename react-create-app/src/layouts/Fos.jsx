import React from 'react';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import MainHeader from 'components/Header/MainHeader';

const hist = createBrowserHistory();

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

class Fos extends React.Component {
  state = {
    value: 'analysis'
  };
  handleChange = (event, value) => {
    this.setState({ value });
    hist.push({
      pathname: `/fos/${value}`
    });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const fosTabs = (
      <Tabs value={value} onChange={this.handleChange}>
        <Tab
          label="Analysis"
          value="analysis"
          classes={{ root: classes.tabRoot, label: classes.tabLabel }}
        />
        <Tab
          label="Management"
          value="management"
          classes={{ root: classes.tabRoot, label: classes.tabLabel }}
        />
        <Tab
          label="Sandbox"
          value="sandbox"
          classes={{ root: classes.tabRoot, label: classes.tabLabel }}
        />
      </Tabs>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <MainHeader tabs={fosTabs} />
          <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
            <div className={classes.toolbar} />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

Fos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Fos);
