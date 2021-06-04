import { call, put } from 'redux-saga/effects';
import { addressListSaga } from "./addressListSaga";
import { logError, logIn, setAddressList, setRoute, setUserCard } from "../actions";
import { getAddressesPoints, getServerAddressList, getUserCard, registerFetch, serverLogin } from "../api/fetchs";
import { authSaga } from './authSaga';
import { pointsSaga } from './pointsSaga';
import { registrationSaga } from './registrationSaga';

describe("tests sagas", () => {

  describe("test addressListSaga", () => {
    const generator = addressListSaga();
    it("test fetch addresses", () => {
      const result = {addresses: ["test", "test1"]};
      expect(generator.next().value).toEqual(call(getServerAddressList));
      expect(generator.next(result).value).toEqual(put(setAddressList(result.addresses)));
      expect(generator.next().done).toBeTruthy();
    })
  })

  describe("test authSaga", () => {
    const action = { payload: { email: "test@test.ru", password: "testpass" } };
    it("test fetch serverLogin success true", () => {
      const generator = authSaga(action);
      const { email, password } = action.payload;
      const result = { success: true, token: "testToken", error: "error" };
      const userCard = { };
      expect(generator.next().value).toEqual(call(serverLogin, email, password));
      expect(generator.next(result).value).toEqual(put(logIn()));
      expect(generator.next().value).toEqual(call(getUserCard, result.token));
      expect(generator.next(userCard).value).toEqual(put(setUserCard(userCard)));
      expect(generator.next().done).toBeTruthy();
    })

    it("test fetch serverLogin success false", () => {
      const generator = authSaga(action);
      const { email, password } = action.payload;
      const result = { success: false, token: "testToken", error: "error" };
      expect(generator.next().value).toEqual(call(serverLogin, email, password));
      expect(generator.next(result).value).toEqual(put(logError(result.error)));
      expect(generator.next().done).toBeTruthy();
    })
  })
  
  describe("test pointSaga", () => {
    const action = { payload: { ar1: "location1", adr2: "location2" } };
    
    it("test fetch point", () => {
      const generator = pointsSaga(action);
      const { adr1, adr2 } = action.payload;
      const result = [58.0000, 59.0000, 60.0000];
      expect(generator.next().value).toEqual(call(getAddressesPoints, adr1, adr2));
      expect(generator.next(result).value).toEqual(put(setRoute(result)));
      expect(generator.next().done).toBeTruthy();
    })
  })
  
  describe("test registrationSaga", () => {
    const action = { payload: { email: "test@test", password: "testpass", name: "testName", surname: "testsurname" } };
        
    it("test fetch registration", () => {
      const generator = registrationSaga(action);
      const { email, password, name, surname  } = action.payload;
      const result = { success: true, token: "testtoken" };
      expect(generator.next().value).toEqual(call(registerFetch, { email, password, name, surname }));
      expect(generator.next(result).value).toEqual(put(logIn()));
      expect(generator.next().done).toBeTruthy();
    })
  })
})