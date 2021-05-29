import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers"
import { userFetchingMiddleware } from "./api/fetchs";
import { authMiddleware } from "./middleWare/authMiddleware";

export const store = createStore(
    rootReducer,
    undefined,
    compose(
        applyMiddleware(userFetchingMiddleware, authMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
