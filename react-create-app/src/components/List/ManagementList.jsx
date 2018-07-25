import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';

import ManagementListItem from './ManagementListItem';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class ManagementList extends React.Component {
  state = { open: false, active: 'Settings' };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleActive = e => {
    this.setState({
      active: e.target.name
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          //   subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
        >
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="System" />
            {this.state.open ? <ExpandMore /> : <ChevronRight />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ManagementListItem
                name="Settings"
                active={this.state.active}
                onClick={this.handleActive}
              />
              <ManagementListItem
                name="Administrator"
                active={this.state.active}
                onClick={this.handleActive}
              />
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

ManagementList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ManagementList);
