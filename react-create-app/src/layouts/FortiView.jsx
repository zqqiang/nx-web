import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import FortiViewSidebar from 'components/Sidebar/FortiViewSidebar';

import routes from 'routes/view';

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

class FortiView extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div className={classes.wrapper}>
        <FortiViewSidebar routes={routes} {...rest} />
        <div className={classes.mainPanel}>
          <div className={classes.content}>
            <div className={classes.containder}>{switchRoutes}</div>
          </div>
        </div>
      </div>
    );
  }
}

FortiView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FortiView);
