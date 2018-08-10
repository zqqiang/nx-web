import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DescriptionIcon from '@material-ui/icons/Description';
import WarningIcon from '@material-ui/icons/Warning';

const styles = theme => ({
  subHeader: {
    position: 'relative',
    top: '64px'
  },
  wrapper: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  labelContainer: {
    paddingLeft: '6px',
    paddingRight: '6px'
  },
  label: {
    fontSize: '0.9rem',
    textTransform: 'capitalize'
  },
  labelIcon: {
    minHeight: '48px'
  }
});

const analysisTabs = [
  { label: 'FortiView', icon: <SearchIcon /> },
  {
    label: 'Logs',
    icon: <FormatListBulletedIcon />
  },
  { label: 'Reports', icon: <DescriptionIcon /> },
  { label: 'Event Mangement', icon: <WarningIcon /> }
];

class Analysis extends React.Component {
  handleChange = (event, value) => {
    this.props.history.push(`/fos/analysis/` + value);
  };
  render() {
    const { classes, history } = this.props;
    const value =
      _.split(history.location.pathname, '/')[3] !== undefined
        ? _.split(history.location.pathname, '/')[3]
        : _.camelCase(analysisTabs[0].label);

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
                  icon={prop.icon}
                  label={prop.label}
                  value={_.camelCase(prop.label)}
                  classes={{
                    wrapper: classes.wrapper,
                    labelContainer: classes.labelContainer,
                    label: classes.label,
                    labelIcon: classes.labelIcon
                  }}
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
