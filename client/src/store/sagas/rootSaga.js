import { all, fork } from 'redux-saga/effects';

import authenticationSaga from '../../bundles/AuthenticationBundle/sagas/authenticationSaga';

export default function*() {
  yield all([fork(authenticationSaga)]);
}
