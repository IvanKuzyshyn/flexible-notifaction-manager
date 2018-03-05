import strategies from 'passport-local';

import User from '../../../UserBundle/models/User';
import { createHash } from '../../services/bcrypt';

export default function (passport) {
  const LocalStrategy = strategies.Strategy;

  passport.use('sign-in', () => {});
}
