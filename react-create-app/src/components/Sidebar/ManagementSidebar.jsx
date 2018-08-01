import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import InboxIcon from '@material-ui/icons/MoveToInbox';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class SidebarWrapper extends React.Component {
  render() {
    const { className, links } = this.props;
    return (
      <div className={className} ref="sidebarWrapper">
        {links}
      </div>
    );
  }
}

class ManagementSidebar extends React.Component {
  render() {
    const { classes, routes } = this.props;
    const sidebarWrapper = classes.sidebarWrapper;
    const navLinkClasses = classes.itemLink;
    const itemIcon = classes.itemIcon;
    const itemText = classes.itemText;

    const links = (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          if (prop.redirect) {
            return null;
          }
          return (
            <ListItem key={key} className={classes.item}>
              <NavLink to={prop.path} className={navLinkClasses}>
                <ListItemIcon className={itemIcon}>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary={prop.name}
                  disableTypography={true}
                  className={itemText}
                />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    );

    return (
      // <div className={classes.root}>
      //   <MainHeader />
      //   <Drawer
      //     variant="permanent"
      //     classes={{
      //       paper: classes.drawerPaper
      //     }}
      //   >
      //     <div className={classes.toolbar} />
      //     <ManagementSidebar />
      //   </Drawer>
      // </div>

      // <div className={classes.root}>
      //   <List className={classes.list}>
      //     <ListItem button onClick={this.handleClick}>
      //       <ListItemIcon>
      //         <InboxIcon />
      //       </ListItemIcon>
      //       <ListItemText inset primary="System" />
      //       {this.state.open ? <ExpandMore /> : <ChevronRight />}
      //     </ListItem>
      //     <Collapse in={this.state.open} timeout="auto" unmountOnExit>
      //       <List component="div" disablePadding />
      //     </Collapse>
      //   </List>
      // </div>
      <div ref="mainPanel">
        <Hidden smDown>
          <Drawer variant="permanent" open>
            <SidebarWrapper className={sidebarWrapper} links={links} />
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

ManagementSidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ManagementSidebar);
