import { combineReducers } from 'redux';

import authentication from '../../bundles/AuthenticationBundle/reducers/authenticationReducer';

export default combineReducers({
  authentication,
});
