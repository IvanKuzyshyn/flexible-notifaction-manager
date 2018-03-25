import strategies from 'passport-local';

import User from '../../../UserBundle/models/User';
import { createHash } from '../../services/bcrypt';

export default function(passport) {
  const LocalStrategy = strategies.Strategy;

  passport.use(
    'sign-in',
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: 'email',
        passwordField: 'password',
      },
      async (req, email, password, done) => {
        console.log('BEFORE FIND!');
        try {
          const user = User.findOne({ email }, () => {});

          console.log('GOT USER!', user, createHash(password));

          if (!user || createHash(password) !== user.password) {
            done(null, false, `User not found or passed wrong credentials`);
          }

          console.log('SOME HERE');

          return done(null, user);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
}
