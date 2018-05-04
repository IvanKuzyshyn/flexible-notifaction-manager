import React from 'react';

import { Consumer } from '../context/UserContextProvider';
import LayoutContainer from '../../CommonBundle/containers/layout/LayoutContainer';

const UserProfile = () => (
  <Consumer>
    {user => (
      <LayoutContainer title={`${user.firstName} ${user.lastName} profile`}>
        Profile page
      </LayoutContainer>
    )}
  </Consumer>
);

export default UserProfile;
