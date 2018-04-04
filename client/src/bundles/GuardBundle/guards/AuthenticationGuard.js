// @flow

import type { GuardableInterface } from '../interfaces/GuardableInterface';

export default class AuthenticationGuard implements GuardableInterface {

  static can(): boolean {
    // TODO implement guard after complete user bundle
    return false;
  }

}
