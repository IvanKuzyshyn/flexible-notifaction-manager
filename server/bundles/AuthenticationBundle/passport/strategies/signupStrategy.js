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
          const user = await User.findOne({ email });

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
            await user.save();
            const token = await TokenService.create({
              email: user.email,
              id: user._id,
            });

            return done(null, { user, token });
          }
        } catch (error) {
          done(error);
        }
      },
    ),
  );
}
