import { logIn, REGISTER, setToken } from "../actions";

export const userFetchingMiddleware = store => next => action => {
  const result = next(action);

  if (action.type === REGISTER) {
    fetch('https://loft-taxi.glitch.me/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...action.payload })
    })
        .then(data => {
          store.dispatch(setToken(data.token))
          if (data.token) {
            store.dispatch(logIn())
          }
        })
        .catch(error => {
          console.log("error: ", error)
        })
  }
  return result;
};

export const serverLogin = async (email, password) => {
  return fetch(
      `https://loft-taxi.glitch.me/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      .then(res => res.json())
      .then(data => data)
}

export const getUserCard = async (token) => {
  return fetch(
      `https://loft-taxi.glitch.me/card?token=${token}`
  ).then(res => res.json())
      .then(data => data)
}

export const saveUserCard = async ({ cardNumber, expiryDate, cardName, cvc, token }) => {
  return fetch(
    `https://loft-taxi.glitch.me/card`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cardNumber, expiryDate, cardName, cvc, token })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem("userCard", JSON.stringify({ cardNumber, expiryDate, cardName, cvc }));
      }
      return data
    })
}
