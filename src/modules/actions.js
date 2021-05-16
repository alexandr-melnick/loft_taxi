export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const REGISTER = 'REGISTER';
export const SET_TOKEN = 'SET_TOKEN';

export const register = ({email, password, name, surname}) => ({type: REGISTER, payload:{name, password, email, surname}});
export const setToken = (token) => ({type: SET_TOKEN, payload: token});
export const logIn = () => ({type: LOG_IN});
export const logOut = () => ({type: LOG_OUT});
