import { SET_ROUTE } from "../actions";

const initialState = { coords: [] };

export const route = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE: {
      return { ...state,  coords: action.payload };
    }
    default:
      return state
  }
};

