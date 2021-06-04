import {
  AUTHENTICATE, LOG_ERROR, GET_ADDRESS_LIST, GET_POINTS, REGISTER, LOG_IN, LOG_OUT, SET_ADDRESS_LIST, SET_ROUTE, SET_TOKEN, SET_USER_CARD,
  authenticate, getAddressList, getPoint, logError, logIn, logOut, register, setAddressList, setRoute, setToken, setUserCard
} from './actions';

describe("tests actions", () => {
  it('test register action', () => {
    const payload = { email: "test@test.com", password: "qwerty", name: "Name", surname: "surname" };
    const result = register(payload);
    expect(result.type).toEqual(REGISTER);
    expect(result.payload).toEqual(payload);
  });

  it('test setToken action', () => {
    const token = { token: "testToken" };
    const result = setToken(token);
    expect(result.type).toEqual(SET_TOKEN);
    expect(result.payload).toEqual(token);
  });

  it('test logIn action', () => {
    const result = logIn();
    expect(result.type).toEqual(LOG_IN);
  });

  it('test logOut action', () => {
    const result = logOut();
    expect(result.type).toEqual(LOG_OUT);
  });

  it('test logError action', () => {
    const error = { error: "error" };
    const result = logError(error);
    expect(result.type).toEqual(LOG_ERROR);
    expect(result.payload).toEqual(error);
  });

  it('test authencate action', () => {
    const email = "test@test.com", password = "qwerty";
    const result = authenticate(email, password);
    expect(result.type).toEqual(AUTHENTICATE);
    expect(result.payload).toEqual({ email, password });
  });

  it('test setUserCard action', () => {
    const userCard = { cardName: "Card Name", expiryDate: "01/23", cvc: "000"  };
    const result = setUserCard(userCard);
    expect(result.type).toEqual(SET_USER_CARD);
    expect(result.payload).toEqual(userCard);
  });

  it('test getAddressList action', () => {
    const result = getAddressList();
    expect(result.type).toEqual(GET_ADDRESS_LIST);
  });

  it('test setAddressList action', () => {
    const addresses = ["location 1", "location 2", "location 3"];
    const result = setAddressList(addresses);
    expect(result.type).toEqual(SET_ADDRESS_LIST);
    expect(result.payload).toEqual(addresses);
  });

  it('test getPoint action', () => {
    const adr1 = "location 1", adr2 = "location 2";
    const result = getPoint(adr1, adr2);
    expect(result.type).toEqual(GET_POINTS);
    expect(result.payload).toEqual({ adr1, adr2 });
  });

  it('test setRoute action', () => {
    const coords = ["58.0000", "59.0000", "60.0000"];
    const result = setRoute(coords);
    expect(result.type).toEqual(SET_ROUTE);
    expect(result.payload).toEqual(coords);
  });
})
