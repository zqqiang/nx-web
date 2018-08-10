import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PhoneIcon from '@material-ui/icons/Phone';

const styles = theme => ({
  subHeader: {
    position: 'relative',
    top: '64px'
  }
});

const analysisTabs = ['FortiView', 'Logs', 'Reports', 'Event Mangement'];

class Analysis extends React.Component {
  handleChange = (event, value) => {
    this.props.history.push(`/fos/analysis/` + value);
  };
  render() {
    const { classes, history } = this.props;
    const value =
      _.split(history.location.pathname, '/')[3] !== undefined
        ? _.split(history.location.pathname, '/')[3]
        : _.camelCase(analysisTabs[0]);

    return (
      <div className={classes.subHeader}>
        <div className={classes.subHeaderTabs}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="secondary"
            textColor="secondary"
          >
            {analysisTabs.map((prop, key) => {
              return (
                <Tab
                  icon={<PhoneIcon />}
                  label={prop}
                  value={_.camelCase(prop)}
                  key={key}
                />
              );
            })}
          </Tabs>
        </div>
      </div>
    );
  }
}

Analysis.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Analysis);
