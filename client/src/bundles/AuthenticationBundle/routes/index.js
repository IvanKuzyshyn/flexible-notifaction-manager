import React, { Fragment } from 'react';
import { Switch } from 'react-router';

import * as routes from '../constants/routes';
import SignUpContainer from '../containers/SignUpContainer';
import SignInContainer from '../containers/SignInContainer';
import NotAuthenticatedRoute from '../components/router/NotAuthenticatedRoute';

const Routes = () => (
  <Fragment>
    <Switch>
      <NotAuthenticatedRoute
        path={routes.SIGN_IN_ROUTE}
        component={SignInContainer}
      />
      <NotAuthenticatedRoute
        path={routes.SIGN_UP_ROUTE}
        component={SignUpContainer}
      />
    </Switch>
  </Fragment>
);

export default Routes;
