import User from '../../../UserBundle/models/User';

export default class UserSerializer {
  static set(passport) {
    passport.serializeUser((user, done) => {
      done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
      try {
        const user = await User.findById(id);

        done(null, user);
      } catch(error) {
       done(error);
      }
    });
  }
}
