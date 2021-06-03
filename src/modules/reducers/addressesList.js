import { SET_ADDRESS_LIST } from "../actions";

const initialState = { addresses: [] };

export const addressesList = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS_LIST: {
      return { addresses: action.payload };
    }
    default:
      return state
  }
};

