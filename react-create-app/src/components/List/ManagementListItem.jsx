import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class ManagementListItem extends React.Component {
  handleClick = () => {};

  render() {
    const { classes, name, active, onClick } = this.props;
    return (
      <ListItem button className={classes.nested} onClick={onClick}>
        <ListItemIcon>
          {active === name ? <StarBorder /> : <div />}
        </ListItemIcon>
        <ListItemText inset primary={name} />
      </ListItem>
    );
  }
}

ManagementListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ManagementListItem);
