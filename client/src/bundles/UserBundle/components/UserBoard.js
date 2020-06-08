import React from 'react';
import Grid from 'material-ui/Grid'

import LayoutContainer from '../../CommonBundle/containers/layout/LayoutContainer';
import ConnectionCard from './connections/ConnectionCard';
import { AVAILABLE_SERVICES } from "../../NotificationBundle/constants/services";

const UserBoard = () => (
  <LayoutContainer title="Notifications board">
    <h1>User Activity Board</h1>
    <Grid container spacing={24}>
      {Object.entries(AVAILABLE_SERVICES).map(([id, service]) => (
        <Grid item xs={6} sm={3}>
          <ConnectionCard key={id} id={id} {...service} />
        </Grid>
      ))}
    </Grid>
  </LayoutContainer>
);

export default UserBoard;
