import React from 'react';
import routes from 'routes/eventManagement';
import MenuForm from 'layouts/MenuForm';

class EventManagement extends React.Component {
  render() {
    const { ...rest } = this.props;
    return <MenuForm routes={routes} {...rest} />;
  }
}

export default EventManagement;
