import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

// @material-ui/icons components
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Help from '@material-ui/icons/Help';
import Email from '@material-ui/icons/Email';
import ExitToApp from '@material-ui/icons/ExitToApp';
import CloudQueue from '@material-ui/icons/CloudQueue';
import Home from '@material-ui/icons/Home';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
});

class MainHeader extends React.Component {
  render() {
    const { classes, color } = this.props;
    return (
      <AppBar position="absolute" className={classes.appBar + ' ' + color}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <IconButton aria-haspopup="true" color="inherit">
              <CloudQueue />
            </IconButton>
          </Hidden>
          <div className={classes.flex}>
            <Typography variant="title" color="inherit">
              FortiCloud
              <Hidden smDown>
                <IconButton aria-haspopup="true" color="inherit">
                  <Home />
                </IconButton>
              </Hidden>
            </Typography>
          </div>
          <Hidden smDown>
            <Button color="inherit">Account</Button>
            <IconButton aria-haspopup="true" color="inherit">
              <AccountCircle />
            </IconButton>
            <IconButton aria-haspopup="true" color="inherit">
              <Help />
            </IconButton>
            <IconButton aria-haspopup="true" color="inherit">
              <Email />
            </IconButton>
            <IconButton aria-haspopup="true" color="inherit">
              <ExitToApp />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

MainHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainHeader);
