import { logIn, REGISTER, setToken } from "../actions";

export const userFetchingMiddleware = store => next => action => {
  const result = next(action);

  if (action.type === REGISTER) {
    fetch('https://loft-taxi.glitch.me/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...action.payload})})
        .then(res =>  res.json())
        .then( data => {
          store.dispatch(setToken(data.token))
          if(data.token) {
            store.dispatch(logIn())
            localStorage.setItem("token", data.token)
          }
        })
        .catch(error => {
          console.log("error: ", error)
          // store.dispatch(fetchUserFailure(error))
        })
  }
  return result;
}
