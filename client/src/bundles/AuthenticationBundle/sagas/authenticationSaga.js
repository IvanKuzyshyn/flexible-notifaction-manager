import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  USER_SIGN_UP,
  USER_SIGN_IN,
  userSignUpSuccessAction,
  userSignUpFailAction,
  userSignInSuccessAction,
  userSignInFailAction,
} from '../reducers/authenticationReducer';
import { userSignUpAPI, userSignInAPI } from '../api/authenticationApi';
import ResponseNormalizer from '../../CommonBundle/normalizers/ResponseNormalizer';

const fetchSignInAction = function*(action) {
  try {
    const { formData } = action.payload;

    const user = yield call(userSignInAPI, formData);

    yield put(userSignInSuccessAction());
  } catch (error) {
    const e = ResponseNormalizer.normalizeError(error);

    yield put(userSignInFailAction(e));
  }
};

const fetchSignUpAction = function*(action) {
  try {
    const { formData } = action.payload;

    const newUser = yield call(userSignUpAPI, formData);
    yield put(userSignUpSuccessAction());
  } catch (error) {
    const e = ResponseNormalizer.normalizeError(error);

    yield put(userSignUpFailAction(e));
  }
};

export default function*() {
  yield all([
    takeLatest(USER_SIGN_UP, fetchSignUpAction),
    takeLatest(USER_SIGN_IN, fetchSignInAction),
  ]);
}
