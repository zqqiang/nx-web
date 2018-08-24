import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';

import PagesHeader from 'components/Header/PagesHeader.jsx';
import Footer from 'components/Footer/Footer.jsx';

import pagesRoutes from 'routes/pages.jsx';

import pagesStyle from 'assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx';

import bgImage from 'assets/img/vancouver_skyline.jpg';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightBlue
  }
});

class Pages extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <PagesHeader {...rest} />
        <div className={classes.wrapper} ref="wrapper">
          <div
            className={classes.fullPage}
            style={{ backgroundImage: 'url(' + bgImage + ')' }}
          >
            <Switch>
              {pagesRoutes.map((prop, key) => {
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
            <Footer white />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(Pages);
