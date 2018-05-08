import strategies from 'passport-local';

import User from '../../../UserBundle/models/User';
import { compare } from '../../../SecurityBundle/services/bcrypt';
import TokenService from '../../../SecurityBundle/services/TokenService';

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

          const token = await TokenService.create({
            id: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
          });

          user.set({ token });
          await user.save();

          return done(null, { user, token });
        } catch (error) {
          done(error);
        }
      },
    ),
  );
}
