import { call, put } from 'redux-saga/effects';
import { logError, logIn, setUserCard } from "../actions";
import { getUserCard, serverLogin } from "../api/fetchs";

export function* authSaga(action) {
  const { email, password } = action.payload;
  const { success, token, error } = yield call(serverLogin, email, password);
  if (success && success !== "undefined") {
    yield put(logIn());
    localStorage.setItem("token", token)
    const userCard = yield call(getUserCard, token);
    localStorage.setItem("userCard", JSON.stringify(userCard));
    yield put(setUserCard(userCard));
  } else {
    yield put(logError(error))
  }
}