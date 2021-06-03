import { call, put } from 'redux-saga/effects';
import { setAddressList } from "../actions";
import { getServerAddressList } from "../api/fetchs";

export function* addressListSaga() {
  const { addresses } = yield call(getServerAddressList);
  yield put(setAddressList(addresses));
}