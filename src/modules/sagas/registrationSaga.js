import { call, put } from 'redux-saga/effects';
import { logIn } from "../actions";
import { registerFetch } from "../api/fetchs";

export function* registrationSaga(action) {
  try {
    const { email, password, name, surname } = action.payload;
    const { success, token } = yield call(registerFetch, { email, password, name, surname })
    if (success) {
      yield put(logIn());
      localStorage.setItem("token", token)
    }
  } catch (error) {
    console.error(error)
  }
}