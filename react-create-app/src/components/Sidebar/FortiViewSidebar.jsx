import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'perfect-scrollbar';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';

import sidebarStyle from 'assets/jss/material-dashboard-pro-react/components/sidebarStyle.jsx';

var ps;

class SidebarWrapper extends React.Component {
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.refs.sidebarWrapper, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
    }
  }
  render() {
    const { className, links } = this.props;
    return (
      <div className={className} ref="sidebarWrapper">
        {links}
      </div>
    );
  }
}

class FortiViewSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miniActive: true
    };
    this.activeRoute.bind(this);
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  openCollapse(collapse) {
    var st = {};
    st[collapse] = !this.state[collapse];
    this.setState(st);
  }
  render() {
    const { classes, color, routes, bgColor } = this.props;
    const drawerPaper =
      classes.drawerPaper +
      ' ' +
      cx({
        [classes.drawerPaperMini]:
          this.props.miniActive && this.state.miniActive
      });
    const sidebarWrapper =
      classes.sidebarWrapper +
      ' ' +
      cx({
        [classes.drawerPaperMini]:
          this.props.miniActive && this.state.miniActive,
        [classes.sidebarWrapperWithPerfectScrollbar]:
          navigator.platform.indexOf('Win') > -1
      });
    const collapseItemText =
      classes.collapseItemText +
      ' ' +
      cx({
        [classes.collapseItemTextMini]:
          this.props.miniActive && this.state.miniActive
      });
    const links = (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          if (prop.redirect) {
            return null;
          }
          if (prop.collapse) {
            const navLinkClasses =
              classes.itemLink +
              ' ' +
              cx({
                [' ' + classes.collapseActive]: this.activeRoute(prop.path)
              });
            const itemText =
              classes.itemText +
              ' ' +
              cx({
                [classes.itemTextMini]:
                  this.props.miniActive && this.state.miniActive
              });
            const itemIcon = classes.itemIcon;
            return (
              <ListItem key={key} className={classes.item}>
                <NavLink
                  to={'#'}
                  className={navLinkClasses}
                  onClick={() => this.openCollapse(prop.state)}
                >
                  <ListItemIcon className={itemIcon}>
                    <prop.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={prop.name}
                    secondary={
                      <b
                        className={
                          classes.caret +
                          ' ' +
                          (this.state[prop.state] ? classes.caretActive : '')
                        }
                      />
                    }
                    disableTypography={true}
                    className={itemText}
                  />
                </NavLink>
                <Collapse in={this.state[prop.state]} unmountOnExit>
                  <List className={classes.list + ' ' + classes.collapseList}>
                    {prop.views.map((prop, key) => {
                      if (prop.redirect) {
                        return null;
                      }
                      const navLinkClasses =
                        classes.collapseItemLink +
                        ' ' +
                        cx({
                          [' ' + classes[color]]: this.activeRoute(prop.path)
                        });
                      const collapseItemMini = classes.collapseItemMini;
                      return (
                        <ListItem key={key} className={classes.collapseItem}>
                          <NavLink to={prop.path} className={navLinkClasses}>
                            <span className={collapseItemMini}>
                              {prop.mini}
                            </span>
                            <ListItemText
                              primary={prop.name}
                              disableTypography={true}
                              className={collapseItemText}
                            />
                          </NavLink>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </ListItem>
            );
          }
          const navLinkClasses =
            classes.itemLink +
            ' ' +
            cx({
              [' ' + classes[color]]: this.activeRoute(prop.path)
            });
          const itemText =
            classes.itemText +
            ' ' +
            cx({
              [classes.itemTextMini]:
                this.props.miniActive && this.state.miniActive
            });
          const itemIcon = classes.itemIcon;
          return (
            <ListItem key={key} className={classes.item}>
              <NavLink to={prop.path} className={navLinkClasses}>
                <ListItemIcon className={itemIcon}>
                  <prop.icon />
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
      <div ref="mainPanel">
        <Drawer
          onMouseOver={() => this.setState({ miniActive: false })}
          onMouseOut={() => this.setState({ miniActive: true })}
          variant="permanent"
          open
          classes={{
            paper: drawerPaper + ' ' + classes[bgColor + 'Background']
          }}
        >
          <SidebarWrapper className={sidebarWrapper} links={links} />
        </Drawer>
      </div>
    );
  }
}

FortiViewSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  bgColor: PropTypes.oneOf(['white', 'black', 'blue']),
  color: PropTypes.oneOf([
    'white',
    'red',
    'orange',
    'green',
    'blue',
    'purple',
    'rose',
    'cloud'
  ])
};

export default withStyles(sidebarStyle)(FortiViewSidebar);
