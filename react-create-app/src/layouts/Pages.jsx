import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import pagesStyle from 'assets/jss/material-dashboard-pro-react/layouts/pagesStyle';

class Pages extends React.Component {
  render() {
    return <div>Pages</div>;
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(Pages);
