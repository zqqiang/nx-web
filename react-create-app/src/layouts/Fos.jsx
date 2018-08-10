import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import MainHeader from 'components/Header/MainHeader';
import routes from 'routes/fos';

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

const tabs = ['Analysis', 'Management', 'Sandbox'];

const fosRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class Fos extends React.Component {
  handleChange = (event, value) => {
    this.props.history.push(`/fos/${value}`);
  };
  render() {
    const { classes, history } = this.props;
    const value =
      _.split(history.location.pathname, '/')[2] !== undefined
        ? _.split(history.location.pathname, '/')[2]
        : _.camelCase(tabs[0]);

    const fosTabs = (
      <Tabs value={value} onChange={this.handleChange}>
        {tabs.map((prop, key) => {
          return (
            <Tab
              label={prop}
              value={_.camelCase(prop)}
              classes={{ root: classes.tabRoot, label: classes.tabLabel }}
              key={key}
            />
          );
        })}
      </Tabs>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <MainHeader tabs={fosTabs} />
          {fosRoutes}
        </div>
      </MuiThemeProvider>
    );
  }
}

Fos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Fos);
