export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const REGISTER = 'REGISTER';
export const SET_TOKEN = 'SET_TOKEN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const SET_USER_CARD = 'SET_USER_CARD';
export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST';
export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST';
export const GET_POINTS = 'GET_POINTS';
export const SET_ROUTE = 'SET_ROUTE';

export const register = ({ email, password, name, surname }) => ({ type: REGISTER, payload: { name, password, email, surname } });

export const setToken = (token) => ({ type: SET_TOKEN, payload: token });

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });

export const authenticate = (email, password) => ({ type: AUTHENTICATE, payload: { email, password } });

export const setUserCard = (userCard) => ({ type: SET_USER_CARD, payload: userCard });

export const getAddressList = () => ({ type: GET_ADDRESS_LIST });
export const setAddressList = (addresses) => ({ type: SET_ADDRESS_LIST, payload: addresses });

export const getPoint = (adr1, adr2) => ({ type: GET_POINTS, payload: { adr1, adr2 } });
export const setRoute = (coords) => ({ type: SET_ROUTE, payload: coords })