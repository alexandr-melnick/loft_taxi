import { SET_TOKEN } from "../actions";

const initialState = { token: '' };

export const register = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return { ...state, token: action.payload };
    }
    default:
      return state
  }
};

