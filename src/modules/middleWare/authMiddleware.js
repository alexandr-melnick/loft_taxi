import { AUTHENTICATE, logIn, setUserCard } from "../actions";
import { getUserCard, serverLogin } from "../api/fetchs";

export const authMiddleware = store => next => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const {success, token} = await serverLogin(email, password);
    if (success && success !== "undefined") {
      store.dispatch(logIn());
      localStorage.setItem("token", token)
      
      const userCard = await getUserCard(token);
      localStorage.setItem("userCard", JSON.stringify(userCard));
      store.dispatch(setUserCard(userCard));
    }
  }
  return next(action)
}
