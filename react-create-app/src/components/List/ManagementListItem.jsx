import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({});

class ManagementListItem extends React.Component {
  activeRoute(routeName) {
    console.log(routeName);
    return this.props.name.indexOf(routeName) > -1 ? true : false;
  }
  render() {
    const { name, active } = this.props;
    const navLinkClasses = cx({ blue: this.activeRoute(name) });

    return (
      <ListItem button className={''}>
        <ListItemIcon>
          {active === name ? <StarBorder /> : <div />}
        </ListItemIcon>
        <ListItemText primary={name} className={navLinkClasses} />
      </ListItem>
    );
  }
}

ManagementListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ManagementListItem);
