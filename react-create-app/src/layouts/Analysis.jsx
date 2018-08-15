import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DescriptionIcon from '@material-ui/icons/Description';
import WarningIcon from '@material-ui/icons/Warning';

import routes from 'routes/analysis';
import SubHeaderDashboard from 'layouts/SubHeaderDashboard';

const analysisTabs = [
  { label: 'FortiView', icon: <SearchIcon /> },
  {
    label: 'Logs',
    icon: <FormatListBulletedIcon />
  },
  { label: 'Reports', icon: <DescriptionIcon /> },
  { label: 'Event Management', icon: <WarningIcon /> }
];

class Analysis extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <SubHeaderDashboard
        routes={routes}
        tabs={analysisTabs}
        root="/fos/analysis/"
        {...rest}
      />
    );
  }
}

export default Analysis;
