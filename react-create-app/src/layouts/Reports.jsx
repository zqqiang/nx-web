import React from 'react';
import routes from 'routes/reports';
import MenuForm from 'layouts/MenuForm';

class Reports extends React.Component {
  render() {
    const { ...rest } = this.props;
    return <MenuForm routes={routes} {...rest} />;
  }
}

export default Reports;
