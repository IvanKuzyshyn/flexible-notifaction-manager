// @flow
import passport from 'passport';

import type { BundleInterface } from '../../app/builder';
import initPassport from './passport/init';
import initApiRoutes from './routes/api';

class AuthenticationBundle implements BundleInterface {

  construct(app): void {
    initPassport(passport);
    app.use('/', initApiRoutes(passport));
  }

}

export default new AuthenticationBundle();
