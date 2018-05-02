import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router';

import * as routes from '../constants/routes';
import SignUpContainer from '../containers/SignUpContainer';
import SignInContainer from '../containers/SignInContainer';
import AuthenticationGuard from '../guards/AuthenticationGuard';

const Routes = () => (
  <Fragment>
    <Route
      exact
      path={routes.ROOT_ROUTE}
      render={() =>
        AuthenticationGuard.can() ? (
          <Redirect to={routes.SIGN_UP_ROUTE} />
        ) : (
          <Redirect to={routes.SIGN_IN_ROUTE} />
        )
      }
    />
    <Switch>
      <Route path={routes.SIGN_IN_ROUTE} component={SignInContainer} />
      <Route path={routes.SIGN_UP_ROUTE} component={SignUpContainer} />
    </Switch>
  </Fragment>
);

export default Routes;
