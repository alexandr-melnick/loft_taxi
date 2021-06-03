import { takeEvery } from 'redux-saga/effects';
import { AUTHENTICATE, GET_ADDRESS_LIST, GET_POINTS, REGISTER } from "../actions";
import { authSaga } from "./authSaga";
import { registrationSaga } from "./registrationSaga";
import { addressListSaga } from "./addressListSaga";
import { pointsSaga } from "./pointsSaga";

export const Sagas = function* saga() {
  yield takeEvery(AUTHENTICATE, authSaga);
  yield takeEvery(REGISTER, registrationSaga);
  yield takeEvery(GET_ADDRESS_LIST, addressListSaga);  
  yield takeEvery(GET_POINTS, pointsSaga);  
}