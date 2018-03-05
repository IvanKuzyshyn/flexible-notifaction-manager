import strategies from 'passport-local';

import User from '../../../UserBundle/models/User';
import { createHash } from '../../services/bcrypt';

export default function(passport) {
  const LocalStrategy = strategies.Strategy;

  passport.use(
    'sign-up',
    new LocalStrategy(
      {
        passReqToCallback: true,
      },
      async (req, done) => {
        const { email } = req.param;

        try {
          const user = await User.findOne({ email });

          if (user) {
            return done(new Error(`User with ${email} email already exists!`));
          } else {
            const { firstName, lastName, password } = req.body;

            const newUser = new User({
              firstName,
              lastName,
              email,
              password: createHash(password),
            });
            await newUser.save();

            return done(null, newUser);
          }
        } catch (error) {
          done(error);
        }
      },
    ),
  );
}
