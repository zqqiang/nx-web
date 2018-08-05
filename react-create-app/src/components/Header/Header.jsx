import React from 'react';
// import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({});

class Header extends React.Component {
  state = {
    lower: true
  };
  render() {
    // const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.lower}
              onChange={this.handleChange}
              value="lower"
            />
          }
          label="Including lower level"
        />
      </FormGroup>
    );
  }
}

export default withStyles(styles)(Header);
