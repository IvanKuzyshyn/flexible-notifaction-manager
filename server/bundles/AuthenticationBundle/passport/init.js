import UserSerializer from './serializers/UserSerializer';
import signupStrategy from './strategies/signupStrategy';
import signinStrategy from './strategies/signinStrategy'

export default function(passport) {
  UserSerializer.set(passport);

  signupStrategy(passport);
  signinStrategy(passport);
}
