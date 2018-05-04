import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  USER_SIGN_UP,
  USER_SIGN_IN,
  USER_SIGN_OUT,
  userSignUpSuccessAction,
  userSignUpFailAction,
  userSignInSuccessAction,
  userSignInFailAction,
} from '../reducers/authenticationReducer';
import { userSignUpAPI, userSignInAPI } from '../api/authenticationApi';
import ResponseNormalizer from '../../CommonBundle/normalizers/ResponseNormalizer';
import { setUserAction, unsetUserAction } from '../../UserBundle/reducers/userReducer';

const fetchSignInAction = function*(action) {
  try {
    const { formData } = action.payload;
    const userResponse = yield call(userSignInAPI, formData);
    const { result: user } = ResponseNormalizer.normalize(userResponse);

    yield put(setUserAction(user));
    yield put(userSignInSuccessAction());
  } catch (error) {
    const e = ResponseNormalizer.normalizeError(error);

    yield put(userSignInFailAction(e));
  }
};

const fetchSignUpAction = function*(action) {
  try {
    const { formData } = action.payload;
    const newUserResponse = yield call(userSignUpAPI, formData);
    const { result: newUser } = ResponseNormalizer.normalize(newUserResponse);

    yield put(setUserAction(newUser));
    yield put(userSignUpSuccessAction());
  } catch (error) {
    const e = ResponseNormalizer.normalizeError(error);

    yield put(userSignUpFailAction(e));
  }
};

const processSignOut = function*() {
  yield put(unsetUserAction());
};

export default function*() {
  yield all([
    takeLatest(USER_SIGN_UP, fetchSignUpAction),
    takeLatest(USER_SIGN_IN, fetchSignInAction),
    takeLatest(USER_SIGN_OUT, processSignOut),
  ]);
}
