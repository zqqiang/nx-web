import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Button from '@material-ui/core/Button';

const styles = () => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class Fos extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.flex}>
              <Typography variant="title" color="inherit">
                FortiGate
              </Typography>
            </div>
            <div>
              <Button color="inherit">Account</Button>
              <IconButton aria-haspopup="true" color="inherit">
                <AccountCircle />
              </IconButton>
              <IconButton aria-haspopup="true" color="inherit">
                <HelpOutline />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Fos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Fos);
