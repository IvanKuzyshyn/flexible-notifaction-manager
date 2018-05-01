import strategies from 'passport-local';

import User from '../../../UserBundle/models/User';
import { compare } from '../../../SecurityBundle/services/bcrypt';

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
        try {
          const user = await User.findOne({ email }).exec();

          if (!user) {
            return done(null, false, {
              message: `User not found. If you forgot password you can recover it.`,
            });
          }

          const isPasswordsEqual = await compare(password, user.password);

          if (!isPasswordsEqual) {
            return done(null, false, {
              message: `Your credentials are wrong.`,
            });
          }

          return done(null, user);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
}
