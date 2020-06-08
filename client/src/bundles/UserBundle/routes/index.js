import React, { Fragment } from 'react';
import { Switch } from 'react-router';

import * as routes from '../constants/routes';
import UserBoardContainer from '../containers/UserBoardContainer';
import UserProfileContainer from '../containers/UserProfileContainer';
import PrivateRoute from '../../CommonBundle/components/router/PrivateRoute';
import NewScheduler from "../../NotificationBundle/components/schedulers/NewScheduler";

const Routes = () => (
  <Fragment>
    <Switch>
      <PrivateRoute
        path={routes.ROOT_ROUTE}
        component={UserBoardContainer}
        exact
      />
      <PrivateRoute
        path={routes.USER_PROFILE_ROUTE}
        component={UserProfileContainer}
      />
      <PrivateRoute
        path={routes.SCHEDULER}
        component={NewScheduler}
      />
    </Switch>
  </Fragment>
);

export default Routes;
