import { setAddressList, getAddressList } from "../actions"
import { addressesList } from "./addressesList"

describe("test reducers", () => {
  it('test setAddressList', () => {
    const initialState = [];
    const addresses = ["qwer", "rewq"];
    const result = addressesList(initialState, setAddressList(addresses));
    expect(result.addresses).toEqual(addresses);

    const resultTwo = addressesList(initialState, getAddressList());
    expect(resultTwo).toEqual(initialState);
  });
})
