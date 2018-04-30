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

const fetchSignInAction = function*(action) {
  try {
    const { formData } = action.payload;

    const user = yield call(userSignInAPI, formData);
    yield put(userSignInSuccessAction());
  } catch (error) {
    yield put(userSignInFailAction());
  }
};

const fetchSignUpAction = function*(action) {
  try {
    const { formData } = action.payload;

    const newUser = yield call(userSignUpAPI, formData);
    yield put(userSignUpSuccessAction());
  } catch (error) {
    yield put(userSignUpFailAction());
  }
};

export default function*() {
  yield all([
    takeLatest(USER_SIGN_UP, fetchSignUpAction),
    takeLatest(USER_SIGN_IN, fetchSignInAction),
  ]);
}
