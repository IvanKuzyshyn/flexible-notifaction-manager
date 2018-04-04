import { all, fork } from 'redux-saga/effects';

import securitySaga from '../../bundles/SecurityBundle/sagas/securitySaga';

export default function*() {
  yield all([fork(securitySaga)]);
}
