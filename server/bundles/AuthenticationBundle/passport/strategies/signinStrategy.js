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
        console.log('BEFORE FIND!');
        try {
          const user = await User.findOne({ email }).exec();
          const isPasswordsEqual = await compare(password, user.password);

          if (!user || !isPasswordsEqual) {
            done(null, false, `User not found or passed wrong credentials`);
          }

          return done(null, user);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
}
