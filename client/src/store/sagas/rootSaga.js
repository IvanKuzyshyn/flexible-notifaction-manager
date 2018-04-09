import { all, fork } from 'redux-saga/effects';

import securitySaga from '../../bundles/AuthenticationBundle/sagas/authenticationSaga';

export default function*() {
  yield all([fork(securitySaga)]);
}
