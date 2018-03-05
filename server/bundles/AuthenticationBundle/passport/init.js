import UserSerializer from './serializers/UserSerializer';
import signupStrategy from './strategies/signupStrategy';

export default function(passport) {
  UserSerializer.set(passport);

  signupStrategy(passport);
}
