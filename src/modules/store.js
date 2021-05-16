import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers"
import { userFetchingMiddleware } from "./middleWare/fetchs";

export const store = createStore(
    rootReducer,
    undefined,
   compose(applyMiddleware(userFetchingMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);





