import { call, put } from 'redux-saga/effects';
import { getAddressesPoints } from "../api/fetchs";
import { setRoute } from '../actions';

export function* pointsSaga(action) {
  const { adr1, adr2 } = action.payload;
  const result = yield call(getAddressesPoints, adr1, adr2);
  yield put(setRoute(result));
}