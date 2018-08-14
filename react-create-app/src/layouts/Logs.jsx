import React from 'react';
import routes from 'routes/logs';
import MenuForm from 'layouts/MenuForm';

class Logs extends React.Component {
  render() {
    const { ...rest } = this.props;
    return <MenuForm routes={routes} {...rest} />;
  }
}

export default Logs;
