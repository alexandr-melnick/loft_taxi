import { setAddressList, getAddressList, logIn, logError, setUserCard, logOut, setToken, setRoute } from "../actions"
import { addressesList } from "./addressesList"
import { auth } from "./auth";
import { register } from "./register";
import { route } from "./route";

describe("tests reducers", () => {
  
  describe("test setAddressList", () => {
    it('test SET_ADDRESS_LIST', () => {
      const initialState = [];
      const addresses = ["qwer", "rewq"];
  
      const result = addressesList(initialState, setAddressList(addresses));
      expect(result.addresses).toEqual(addresses);
  
      const resultTwo = addressesList(initialState, getAddressList());
      expect(resultTwo).toEqual(initialState);
    });
  });

  describe('tests auth', () => {
    const initialState = {
      isLoggedIn: false,
      userCard: {}
    };
    const error = { error: "error" };
    const userCard = { cardName: "Card Name", expiryDate: "01/23", cvc: "000" };
    
    it('test LOG_IN', () => {
      const result = auth(initialState, logIn());
      expect(result.isLoggedIn).toBeTruthy();
    })

    it('test LOG_OUT)', () => {
      initialState.isLoggedIn = true;
      const result = auth(initialState, logOut());
      expect(result.isLoggedIn).toBeFalsy();
    })
    
    it('test LOG_ERROR', () => {
      const result = auth(initialState, logError(error));
      expect(result.error).toEqual(error);
      const resultTwo = auth(initialState, getAddressList());
      expect(resultTwo).toEqual(initialState);
    })
    
    it('test SET_USER_CARD', () => {
      const result = auth(initialState, setUserCard(userCard));
      expect(result.userCard).toEqual(userCard);
      const resultTwo = auth(initialState, getAddressList());
      expect(resultTwo).toEqual(initialState);
    })
  });

  describe('test register', () => {
    const initialState = { token: '' };
    const token = "testToken";

    it('test SET_TOKEN', () => {
      const result = register(initialState, setToken(token));
      expect(result.token).toEqual(token);
      const resultTwo = register(initialState, getAddressList());
      expect(resultTwo).toEqual(initialState);
    })
  })

  describe('test route', () => {
    const initialState = { coords: [] };
    const coords = [58.0000, 59.0000, 60.5000];

    it('test SET_ROUTE', () => {
      const result = route(initialState, setRoute(coords));
      expect(result.coords).toEqual(coords);
      const resultTwo = register(initialState, getAddressList());
      expect(resultTwo).toEqual(initialState);
    })
  })


})
