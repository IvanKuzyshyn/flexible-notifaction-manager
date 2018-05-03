import { combineReducers } from 'redux';

import authentication from '../../bundles/AuthenticationBundle/reducers/authenticationReducer';
import user from '../../bundles/UserBundle/reducers/userReducer';

export default combineReducers({
  authentication,
  user,
});
