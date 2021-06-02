import {takeEvery, call, put} from 'redux-saga/effects';
import { AUTHENTICATE, logIn, setUserCard } from "../actions";
import { getUserCard, serverLogin } from "../api/fetchs";

function* authSaga(action) {
  const { email, password } = action.payload;
  const { success, token } = yield call(serverLogin, email, password);
  if (success && success !== "undefined") {
    yield put(logIn());
    localStorage.setItem("token", token)
    const userCard = yield call(getUserCard, token);
    localStorage.setItem("userCard", JSON.stringify(userCard));
    yield put(setUserCard(userCard));
  }
}

export const Sagas = function* saga() {
  yield takeEvery(AUTHENTICATE, authSaga)
}