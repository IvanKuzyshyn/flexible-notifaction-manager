// @flow

import type { GuardInterface } from '../interfaces/GuardableInterface';

class AuthenticationGuard implements GuardInterface {

  can(): boolean {
    console.log(this);
    // TODO implement guard after complete user bundle
    return false;
  }

}

export default new AuthenticationGuard();
