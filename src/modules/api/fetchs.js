export const registerFetch = async ({ email, password, name, surname }) => {
  return fetch('https://loft-taxi.glitch.me/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name, surname })
  }).then(res => res.json())
    .then(data => data)
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
  return fetch(`https://loft-taxi.glitch.me/card`,
    {
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

export const getServerAddressList = async () => {
  return fetch(`https://loft-taxi.glitch.me/addressList`)
    .then((response) => response.json())
    .then(data => data)
}

export const getAddressesPoints = async (adr1, adr2) => {
  return fetch(`https://loft-taxi.glitch.me/route?address1=${adr1}&address2=${adr2}`)
    .then(res => res.json())
    .then(data => data)
}