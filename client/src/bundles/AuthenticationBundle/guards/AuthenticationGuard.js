// @flow
/* eslint-disable class-methods-use-this */

import type { GuardInterface } from '../../CommonBundle/interfaces/GuardInterface';

class AuthenticationGuard implements GuardInterface {
  static can(user): boolean {
    return !!(
      user &&
      Object.keys(user).length > 0 &&
      'token' in user &&
      user.token.length > 0
    );
  }
}

export default AuthenticationGuard;
