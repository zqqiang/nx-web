import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// core components
import Button from 'components/CustomButtons/Button';

import pagesHeaderStyle from 'assets/jss/material-dashboard-pro-react/components/pagesHeaderStyle.jsx';

class PagesHeader extends React.Component {
  render() {
    const { classes, color } = this.props;
    const appBarClasses = cx({
      [' ' + classes[color]]: color
    });
    return (
      <AppBar position="static" className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              FortiCloud Demo
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

PagesHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger'])
};

export default withStyles(pagesHeaderStyle)(PagesHeader);
