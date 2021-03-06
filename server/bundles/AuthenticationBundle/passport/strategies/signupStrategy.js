import strategies from 'passport-local';

import User from '../../../UserBundle/models/User';
import TokenService from '../../../SecurityBundle/services/TokenService';

export default function(passport) {
  const LocalStrategy = strategies.Strategy;

  passport.use(
    'sign-up',
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: 'email',
        passwordField: 'password',
      },
      async (req, email, password, done) => {
        try {
          const user = await User.findOne({ email }).exec();

          if (user) {
            return done(null, false, {
              message: `User with '${email}' email already exists!`,
            });
          } else {
            const { firstName, lastName } = req.body;

            const user = new User({
              firstName,
              lastName,
              email,
              password,
            });
            const token = await TokenService.create({
              id: user._id,
              email: user.email,
              isAdmin: user.isAdmin,
            });
            user.set({ token });
            await user.save();

            return done(null, { user, token });
          }
        } catch (error) {
          done(error);
        }
      },
    ),
  );
}
