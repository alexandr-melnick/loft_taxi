import { AUTHENTICATE, logIn, setUserCard } from "../actions";
import { getUserCard, serverLogin } from "./fetchs";

export const authMiddleware = store => next => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const {success, token} = await serverLogin(email, password);
    if (success) {
       store.dispatch(logIn());
       console.log(token);
       localStorage.setItem("token", token)
      const userCard = await getUserCard(token);
       localStorage.setItem("userCard", JSON.stringify(userCard));
      store.dispatch(setUserCard(userCard));
    }
  }
  return next(action)
}
