import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers"
import { userFetchingMiddleware } from "./api/fetchs";
import { Sagas } from "./sagas/Sagas"

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    undefined,
    compose(
        applyMiddleware(userFetchingMiddleware, sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(Sagas);