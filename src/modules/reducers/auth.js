import { LOG_IN, LOG_OUT, SET_USER_CARD } from "../actions";

const initialState = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  userCard: {}
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return { ...state,  isLoggedIn: true, token: action.token };
    }
    case LOG_OUT: {
      return { ...state, isLoggedIn: false }
    }
    case SET_USER_CARD: {
      const { payload:  userCard  } = action;
      return { ...state,  userCard }
    }
    default:
      return state
  }
};


